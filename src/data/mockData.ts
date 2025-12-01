import { Product, Category, Review, Testimonial, BlogPost, FAQ, Promotion } from '../types';

export const categories: Category[] = [
  {
    id: 'dogs',
    name: 'Dogs',
    description: 'Everything your canine companion needs',
    image: '/images/categories/dogs.jpg',
    icon: '🐕',
    color: 'blue',
    subcategories: [
      { id: 'dog-food', name: 'Food & Treats', description: 'Nutritious meals and snacks', productCount: 145 },
      { id: 'dog-toys', name: 'Toys', description: 'Fun and engaging toys', productCount: 89 },
      { id: 'dog-beds', name: 'Beds & Comfort', description: 'Cozy resting places', productCount: 67 },
      { id: 'dog-grooming', name: 'Grooming', description: 'Keep them clean and healthy', productCount: 54 },
      { id: 'dog-collars', name: 'Collars & Leashes', description: 'Walk in style', productCount: 78 },
      { id: 'dog-training', name: 'Training', description: 'Training aids and tools', productCount: 43 },
      { id: 'dog-health', name: 'Health & Wellness', description: 'Supplements and care', productCount: 62 },
      { id: 'dog-crates', name: 'Crates & Carriers', description: 'Safe travel solutions', productCount: 38 }
    ],
    productCount: 576
  },
  {
    id: 'cats',
    name: 'Cats',
    description: 'Premium products for your feline friends',
    image: '/images/categories/cats.jpg',
    icon: '🐈',
    color: 'purple',
    subcategories: [
      { id: 'cat-food', name: 'Food & Treats', description: 'Delicious nutrition', productCount: 98 },
      { id: 'cat-toys', name: 'Toys', description: 'Interactive fun', productCount: 76 },
      { id: 'cat-beds', name: 'Beds & Furniture', description: 'Comfortable spaces', productCount: 45 },
      { id: 'cat-litter', name: 'Litter & Hygiene', description: 'Clean solutions', productCount: 67 },
      { id: 'cat-scratching', name: 'Scratching Posts', description: 'Save your furniture', productCount: 34 },
      { id: 'cat-grooming', name: 'Grooming', description: 'Beauty tools', productCount: 41 },
      { id: 'cat-health', name: 'Health & Wellness', description: 'Vet-recommended products', productCount: 52 }
    ],
    productCount: 413
  },
  {
    id: 'birds',
    name: 'Birds',
    description: 'Supplies for feathered friends',
    image: '/images/categories/birds.jpg',
    icon: '🦜',
    color: 'green',
    subcategories: [
      { id: 'bird-food', name: 'Food & Treats', description: 'Nutritious seeds and pellets', productCount: 87 },
      { id: 'bird-cages', name: 'Cages & Aviaries', description: 'Safe homes', productCount: 54 },
      { id: 'bird-toys', name: 'Toys & Enrichment', description: 'Mental stimulation', productCount: 43 },
      { id: 'bird-perches', name: 'Perches & Stands', description: 'Comfortable resting', productCount: 38 },
      { id: 'bird-health', name: 'Health & Grooming', description: 'Care products', productCount: 29 }
    ],
    productCount: 251
  },
  {
    id: 'fish',
    name: 'Fish',
    description: 'Aquatic supplies and equipment',
    image: '/images/categories/fish.jpg',
    icon: '🐠',
    color: 'cyan',
    subcategories: [
      { id: 'fish-tanks', name: 'Tanks & Aquariums', description: 'Homes for fish', productCount: 76 },
      { id: 'fish-food', name: 'Food & Nutrition', description: 'Balanced diets', productCount: 92 },
      { id: 'fish-filters', name: 'Filters & Pumps', description: 'Clean water systems', productCount: 64 },
      { id: 'fish-decorations', name: 'Decorations', description: 'Beautiful environments', productCount: 58 },
      { id: 'fish-lighting', name: 'Lighting', description: 'Proper illumination', productCount: 41 },
      { id: 'fish-health', name: 'Health & Water Care', description: 'Water treatments', productCount: 47 }
    ],
    productCount: 378
  },
  {
    id: 'reptiles',
    name: 'Reptiles',
    description: 'Specialized reptile care products',
    image: '/images/categories/reptiles.jpg',
    icon: '🦎',
    color: 'orange',
    subcategories: [
      { id: 'reptile-habitats', name: 'Habitats & Terrariums', description: 'Proper enclosures', productCount: 43 },
      { id: 'reptile-food', name: 'Food & Supplements', description: 'Specialized nutrition', productCount: 67 },
      { id: 'reptile-heating', name: 'Heating & Lighting', description: 'Climate control', productCount: 54 },
      { id: 'reptile-substrate', name: 'Substrate & Bedding', description: 'Comfortable flooring', productCount: 38 },
      { id: 'reptile-decorations', name: 'Decorations & Hides', description: 'Natural environments', productCount: 31 }
    ],
    productCount: 233
  },
  {
    id: 'small-animals',
    name: 'Small Animals',
    description: 'For rabbits, guinea pigs, hamsters and more',
    image: '/images/categories/small-animals.jpg',
    icon: '🐰',
    color: 'pink',
    subcategories: [
      { id: 'small-food', name: 'Food & Treats', description: 'Species-specific nutrition', productCount: 78 },
      { id: 'small-cages', name: 'Cages & Habitats', description: 'Safe living spaces', productCount: 52 },
      { id: 'small-bedding', name: 'Bedding & Litter', description: 'Comfortable bedding', productCount: 41 },
      { id: 'small-toys', name: 'Toys & Enrichment', description: 'Fun activities', productCount: 36 },
      { id: 'small-health', name: 'Health & Grooming', description: 'Care products', productCount: 28 }
    ],
    productCount: 235
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Chicken Dog Treats',
    description: 'All-natural chicken breast treats with no artificial preservatives. Perfect for training and rewarding your good boy!',
    price: 12.99,
    originalPrice: 16.99,
    images: [
      '/images/products/dog-treats-1.jpg',
      '/images/products/dog-treats-2.jpg',
      '/images/products/dog-treats-3.jpg'
    ],
    category: 'dogs',
    subcategory: 'dog-food',
    brand: 'PetPremium',
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stockCount: 145,
    features: ['All-natural ingredients', 'High in protein', 'No artificial preservatives', 'Made in USA'],
    ingredients: ['Chicken Breast', 'Vegetable Glycerin', 'Natural Flavor'],
    sizes: ['Small (5oz)', 'Medium (10oz)', 'Large (20oz)'],
    tags: ['treats', 'training', 'natural', 'chicken'],
    isOnSale: true,
    discountPercentage: 24,
    shippingWeight: 0.5
  },
  {
    id: '2',
    name: 'Interactive Cat Feather Wand',
    description: 'Engage your cat with this interactive feather wand toy. Features natural feathers and a comfortable ergonomic handle.',
    price: 8.99,
    images: [
      '/images/products/cat-wand-1.jpg',
      '/images/products/cat-wand-2.jpg'
    ],
    category: 'cats',
    subcategory: 'cat-toys',
    brand: 'PlayfulPaws',
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    stockCount: 89,
    features: ['Natural feathers', 'Ergonomic handle', 'Durable construction', 'Safe for cats'],
    materials: 'Natural feathers, plastic handle, metal wire',
    tags: ['toys', 'interactive', 'exercise', 'feather'],
    isNew: true,
    shippingWeight: 0.2
  },
  {
    id: '3',
    name: 'Orthopedic Dog Bed',
    description: 'Provide ultimate comfort for your aging or arthritic dog with memory foam support and washable cover.',
    price: 79.99,
    originalPrice: 99.99,
    images: [
      '/images/products/dog-bed-1.jpg',
      '/images/products/dog-bed-2.jpg',
      '/images/products/dog-bed-3.jpg'
    ],
    category: 'dogs',
    subcategory: 'dog-beds',
    brand: 'ComfortZone',
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    stockCount: 34,
    features: ['Memory foam support', 'Water-resistant liner', 'Machine washable cover', 'Non-slip bottom'],
    materials: 'Memory foam, polyester cover, rubber bottom',
    sizes: ['Small (30x20")', 'Medium (40x30")', 'Large (50x35")', 'Extra Large (60x40")'],
    tags: ['bed', 'orthopedic', 'memory foam', 'washable'],
    isOnSale: true,
    discountPercentage: 20,
    shippingWeight: 8
  },
  {
    id: '4',
    name: 'Automatic Cat Feeder',
    description: 'Programmable automatic feeder with portion control. Schedule up to 4 meals per day with voice recording.',
    price: 45.99,
    images: [
      '/images/products/cat-feeder-1.jpg',
      '/images/products/cat-feeder-2.jpg'
    ],
    category: 'cats',
    subcategory: 'cat-food',
    brand: 'SmartPet',
    rating: 4.5,
    reviewCount: 167,
    inStock: true,
    stockCount: 56,
    features: ['Programmable scheduling', 'Portion control', 'Voice recording', 'Battery backup'],
    materials: 'BPA-free plastic, stainless steel bowl',
    tags: ['feeder', 'automatic', 'programmable', 'convenience'],
    shippingWeight: 2.5
  },
  {
    id: '5',
    name: 'Bird Cage with Play Top',
    description: 'Spacious bird cage with play top, seed guards, and easy-clean bottom. Perfect for medium-sized birds.',
    price: 129.99,
    images: [
      '/images/products/bird-cage-1.jpg',
      '/images/products/bird-cage-2.jpg'
    ],
    category: 'birds',
    subcategory: 'bird-cages',
    brand: 'AvianHome',
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    stockCount: 23,
    features: ['Spacious design', 'Play top', 'Seed guards', 'Easy-clean bottom', 'Stainless steel cups'],
    materials: 'Wrought iron, stainless steel, plastic',
    dimensions: { length: 18, width: 18, height: 24 },
    tags: ['cage', 'play top', 'medium birds', 'easy clean'],
    shippingWeight: 15
  },
  {
    id: '6',
    name: 'Fish Tank LED Light',
    description: 'Full spectrum LED lighting with adjustable brightness and timer. Promotes healthy plant growth.',
    price: 34.99,
    images: [
      '/images/products/fish-light-1.jpg',
      '/images/products/fish-light-2.jpg'
    ],
    category: 'fish',
    subcategory: 'fish-lighting',
    brand: 'AquaGlow',
    rating: 4.4,
    reviewCount: 143,
    inStock: true,
    stockCount: 78,
    features: ['Full spectrum LEDs', 'Adjustable brightness', 'Built-in timer', 'Energy efficient'],
    materials: 'Aluminum housing, LED lights',
    tags: ['lighting', 'LED', 'full spectrum', 'timer'],
    shippingWeight: 1.2
  },
  {
    id: '7',
    name: 'Reptile Heat Lamp',
    description: 'Ceramic heat emitter provides consistent heat without light. Perfect for nocturnal reptiles.',
    price: 24.99,
    images: [
      '/images/products/reptile-heat-1.jpg',
      '/images/products/reptile-heat-2.jpg'
    ],
    category: 'reptiles',
    subcategory: 'reptile-heating',
    brand: 'ReptiHeat',
    rating: 4.6,
    reviewCount: 87,
    inStock: true,
    stockCount: 45,
    features: ['24-hour heat source', 'No light emission', 'Long lifespan', 'Energy efficient'],
    materials: 'Ceramic, metal socket',
    tags: ['heating', 'ceramic', 'nocturnal', 'energy efficient'],
    shippingWeight: 0.8
  },
  {
    id: '8',
    name: 'Guinea Pig Playpen',
    description: 'Expandable playpen with secure connectors. Create a safe play area for your small pets.',
    price: 39.99,
    images: [
      '/images/products/guinea-pig-pen-1.jpg',
      '/images/products/guinea-pig-pen-2.jpg'
    ],
    category: 'small-animals',
    subcategory: 'small-cages',
    brand: 'SmallPetHaven',
    rating: 4.3,
    reviewCount: 124,
    inStock: true,
    stockCount: 67,
    features: ['Expandable design', 'Secure connectors', 'Easy assembly', 'Indoor/outdoor use'],
    materials: 'Metal wire, plastic connectors',
    tags: ['playpen', 'guinea pig', 'expandable', 'safe'],
    shippingWeight: 3.5
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    petName: 'Max',
    petType: 'Golden Retriever',
    rating: 5,
    content: 'Pet Stuff has everything I need for Max! The quality is outstanding and the shipping is always fast. Max especially loves the premium treats!',
    avatar: '/images/avatars/sarah.jpg',
    petAvatar: '/images/pets/max.jpg',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    customerName: 'Mike Chen',
    petName: 'Luna',
    petType: 'Persian Cat',
    rating: 5,
    content: 'The customer service is amazing! They helped me find the perfect grooming tools for Luna\'s long coat. Will definitely shop here again.',
    avatar: '/images/avatars/mike.jpg',
    petAvatar: '/images/pets/luna.jpg',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    customerName: 'Emily Rodriguez',
    petName: 'Kiwi',
    petType: 'Parakeet',
    rating: 4,
    content: 'Great selection of bird products! Kiwi loves his new toys and the cage I bought was easy to assemble. Prices are reasonable too.',
    avatar: '/images/avatars/emily.jpg',
    petAvatar: '/images/pets/kiwi.jpg',
    createdAt: new Date('2024-01-08')
  },
  {
    id: '4',
    customerName: 'David Thompson',
    petName: 'Bubbles',
    petType: 'Beta Fish',
    rating: 5,
    content: 'As a new fish owner, I appreciate the detailed product descriptions and helpful guides. My aquarium setup was successful thanks to their quality products!',
    avatar: '/images/avatars/david.jpg',
    petAvatar: '/images/pets/bubbles.jpg',
    createdAt: new Date('2024-01-05')
  }
];

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Buy 2 Get 1 Free',
    description: 'On all dog treats this week only!',
    image: '/images/promotions/b2g1-treats.jpg',
    type: 'banner',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-01-31'),
    discountCode: 'TREATS24',
    applicableCategories: ['dogs'],
    isActive: true
  },
  {
    id: '2',
    title: 'New Cat Arrivals',
    description: 'Check out our latest cat products!',
    image: '/images/promotions/new-cat-products.jpg',
    type: 'banner',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-02-15'),
    applicableCategories: ['cats'],
    isActive: true
  },
  {
    id: '3',
    title: 'Winter Pet Essentials',
    description: 'Keep your pets warm and cozy',
    image: '/images/promotions/winter-essentials.jpg',
    type: 'banner',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-02-28'),
    isActive: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Puppy Training',
    slug: 'puppy-training-tips',
    excerpt: 'Learn the fundamentals of training your new puppy with these expert-approved techniques.',
    content: 'Full blog post content here...',
    author: 'Dr. Jessica Martinez',
    authorAvatar: '/images/authors/jessica.jpg',
    category: 'Training',
    tags: ['puppy', 'training', 'behavior', 'tips'],
    featuredImage: '/images/blog/puppy-training.jpg',
    readingTime: 8,
    publishedAt: new Date('2024-01-12'),
    views: 1250,
    likes: 89
  },
  {
    id: '2',
    title: 'Choosing the Right Cat Food',
    slug: 'choosing-cat-food',
    excerpt: 'A comprehensive guide to selecting the best nutrition for your feline friend.',
    content: 'Full blog post content here...',
    author: 'Sarah Wilson',
    authorAvatar: '/images/authors/sarah.jpg',
    category: 'Nutrition',
    tags: ['cat', 'nutrition', 'food', 'health'],
    featuredImage: '/images/blog/cat-nutrition.jpg',
    readingTime: 6,
    publishedAt: new Date('2024-01-10'),
    views: 980,
    likes: 67
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery.',
    category: 'Shipping',
    order: 1
  },
  {
    id: '2',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for unused items in original packaging. Some restrictions apply for perishable items.',
    category: 'Returns',
    order: 2
  },
  {
    id: '3',
    question: 'Do you offer international shipping?',
    answer: 'Currently we ship within the United States only. We are working on expanding to international markets.',
    category: 'Shipping',
    order: 3
  },
  {
    id: '4',
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive a tracking number via email. You can use this to track your package on our website.',
    category: 'Orders',
    order: 4
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    customerName: 'Jennifer Adams',
    rating: 5,
    title: 'Best dog treats ever!',
    content: 'My dog absolutely loves these treats. They are perfect for training and I love that they are made with natural ingredients.',
    verifiedPurchase: true,
    helpfulCount: 23,
    createdAt: new Date('2024-01-14'),
    images: ['/images/reviews/treats-review-1.jpg']
  },
  {
    id: '2',
    productId: '1',
    customerName: 'Robert Miller',
    rating: 4,
    title: 'Good quality, but expensive',
    content: 'The treats are high quality and my dog enjoys them, but they are a bit pricey compared to other options.',
    verifiedPurchase: true,
    helpfulCount: 12,
    createdAt: new Date('2024-01-10')
  }
];