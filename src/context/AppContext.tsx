import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product, WishlistItem } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface WishlistState {
  items: WishlistItem[];
}

interface AppState {
  cart: CartState;
  wishlist: WishlistState;
  isLoading: boolean;
  error: string | null;
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity?: number; selectedSize?: string; selectedColor?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: AppState = {
  cart: {
    items: [],
    total: 0,
    itemCount: 0
  },
  wishlist: {
    items: []
  },
  isLoading: false,
  error: null
};

const calculateCartTotals = (items: CartItem[]): { total: number; itemCount: number } => {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity = 1, selectedSize, selectedColor } = action.payload;
      const existingItemIndex = state.cart.items.findIndex(
        item => 
          item.product.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
      );
      
      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        newItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, { product, quantity, selectedSize, selectedColor }];
      }
      
      const { total, itemCount } = calculateCartTotals(newItems);
      
      return {
        ...state,
        cart: { items: newItems, total, itemCount }
      };
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.cart.items.filter(item => item.product.id !== action.payload);
      const { total, itemCount } = calculateCartTotals(newItems);
      
      return {
        ...state,
        cart: { items: newItems, total, itemCount }
      };
    }
    
    case 'UPDATE_CART_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        const newItems = state.cart.items.filter(item => item.product.id !== productId);
        const { total, itemCount } = calculateCartTotals(newItems);
        
        return {
          ...state,
          cart: { items: newItems, total, itemCount }
        };
      }
      
      const newItems = state.cart.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      
      const { total, itemCount } = calculateCartTotals(newItems);
      
      return {
        ...state,
        cart: { items: newItems, total, itemCount }
      };
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: { items: [], total: 0, itemCount: 0 }
      };
    
    case 'ADD_TO_WISHLIST': {
      const existingItem = state.wishlist.items.find(item => item.product.id === action.payload.id);
      
      if (existingItem) {
        return state;
      }
      
      const newItem: WishlistItem = {
        product: action.payload,
        addedAt: new Date()
      };
      
      return {
        ...state,
        wishlist: {
          items: [...state.wishlist.items, newItem]
        }
      };
    }
    
    case 'REMOVE_FROM_WISHLIST': {
      const newItems = state.wishlist.items.filter(item => item.product.id !== action.payload);
      
      return {
        ...state,
        wishlist: {
          items: newItems
        }
      };
    }
    
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        wishlist: { items: [] }
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const useCart = () => {
  const { state, dispatch } = useAppContext();
  
  const addToCart = (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, selectedSize, selectedColor } });
  };
  
  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };
  
  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return {
    items: state.cart.items,
    total: state.cart.total,
    itemCount: state.cart.itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};

export const useWishlist = () => {
  const { state, dispatch } = useAppContext();
  
  const addToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };
  
  const removeFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };
  
  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };
  
  const isInWishlist = (productId: string) => {
    return state.wishlist.items.some(item => item.product.id === productId);
  };
  
  return {
    items: state.wishlist.items,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist
  };
};