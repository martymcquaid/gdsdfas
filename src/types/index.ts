export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount?: number;
  features: string[];
  materials?: string;
  sizes?: string[];
  colors?: string[];
  weight?: string;
  ageGroup?: string[];
  tags: string[];
  isNew?: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
  shippingWeight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  careInstructions?: string;
  ingredients?: string[];
  nutritionalInfo?: {
    protein: string;
    fat: string;
    fiber: string;
    moisture: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  color: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  title: string;
  content: string;
  verifiedPurchase: boolean;
  helpfulCount: number;
  createdAt: Date;
  images?: string[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: WishlistItem[];
  pets: Pet[];
  createdAt: Date;
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  isDefault: boolean;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed?: string;
  age?: string;
  weight?: string;
  avatar?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  createdAt: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
  description: string;
}

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minimumOrder?: number;
  maximumDiscount?: number;
  applicableProducts?: string[];
  applicableCategories?: string[];
  expiresAt?: Date;
  usageLimit?: number;
  usageCount: number;
}

export interface Newsletter {
  email: string;
  preferences: {
    promotions: boolean;
    newProducts: boolean;
    petTips: boolean;
    blogUpdates: boolean;
  };
  subscribedAt: Date;
}

export interface Testimonial {
  id: string;
  customerName: string;
  petName?: string;
  petType?: string;
  rating: number;
  content: string;
  avatar?: string;
  petAvatar?: string;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  readingTime: number;
  publishedAt: Date;
  views: number;
  likes: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'banner' | 'popup' | 'badge';
  startDate: Date;
  endDate: Date;
  discountCode?: string;
  applicableProducts?: string[];
  applicableCategories?: string[];
  isActive: boolean;
}