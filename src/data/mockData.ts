import { Project, Order, Review, CartItem } from '@/types/marketplace';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Amazon Rainforest Conservation',
    description: 'Protecting 500,000 hectares of pristine Amazon rainforest from deforestation through community-based forest management and sustainable livelihood programs.',
    category: 'forestry',
    pricePerCredit: 14.50,
    totalCredits: 1000000,
    availableCredits: 750000,
    location: 'Amazonas Region',
    country: 'Brazil',
    isVerraCertified: true,
    sdgGoals: [13, 15, 1, 8],
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    rating: 4.8,
    reviewCount: 156,
    seller: { id: 's1', name: 'EcoForest Partners', verified: true },
    vintage: '2023',
    methodology: 'VM0015',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Gujarat Solar Power Initiative',
    description: 'Large-scale solar farm generating clean energy for over 200,000 households while reducing dependence on fossil fuels.',
    category: 'renewable-energy',
    pricePerCredit: 8.75,
    totalCredits: 500000,
    availableCredits: 420000,
    location: 'Gujarat',
    country: 'India',
    isVerraCertified: true,
    sdgGoals: [7, 13, 9, 11],
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    rating: 4.6,
    reviewCount: 89,
    seller: { id: 's2', name: 'SunPower India', verified: true },
    vintage: '2024',
    methodology: 'ACM0002',
    createdAt: '2024-03-20',
  },
  {
    id: '3',
    name: 'Kenya Wind Farm Project',
    description: 'Wind energy project on the shores of Lake Turkana providing renewable electricity to millions of Kenyans.',
    category: 'renewable-energy',
    pricePerCredit: 12.00,
    totalCredits: 800000,
    availableCredits: 650000,
    location: 'Turkana County',
    country: 'Kenya',
    isVerraCertified: true,
    sdgGoals: [7, 8, 13, 17],
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
    rating: 4.9,
    reviewCount: 203,
    seller: { id: 's3', name: 'African Green Energy', verified: true },
    vintage: '2023',
    methodology: 'ACM0002',
    createdAt: '2023-11-08',
  },
  {
    id: '4',
    name: 'Indonesian Mangrove Restoration',
    description: 'Restoring 10,000 hectares of mangrove forests along coastal Indonesia, creating carbon sinks and protecting communities from storms.',
    category: 'ocean',
    pricePerCredit: 18.25,
    totalCredits: 250000,
    availableCredits: 180000,
    location: 'Sumatra',
    country: 'Indonesia',
    isVerraCertified: true,
    sdgGoals: [13, 14, 15, 1],
    imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80',
    rating: 4.7,
    reviewCount: 67,
    seller: { id: 's4', name: 'Blue Carbon Initiative', verified: true },
    vintage: '2024',
    methodology: 'VM0033',
    createdAt: '2024-02-12',
  },
  {
    id: '5',
    name: 'Rwanda Clean Cookstoves',
    description: 'Distributing fuel-efficient cookstoves to rural communities, reducing indoor air pollution and deforestation.',
    category: 'waste-management',
    pricePerCredit: 6.50,
    totalCredits: 300000,
    availableCredits: 275000,
    location: 'Kigali Province',
    country: 'Rwanda',
    isVerraCertified: false,
    sdgGoals: [3, 7, 13, 5],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    rating: 4.4,
    reviewCount: 45,
    seller: { id: 's5', name: 'CleanAir Africa', verified: false },
    vintage: '2024',
    methodology: 'AMS-II.G',
    createdAt: '2024-04-05',
  },
  {
    id: '6',
    name: 'Colombian Coffee Agroforestry',
    description: 'Promoting shade-grown coffee practices that sequester carbon while supporting local farming communities.',
    category: 'agriculture',
    pricePerCredit: 11.00,
    totalCredits: 150000,
    availableCredits: 120000,
    location: 'Huila Department',
    country: 'Colombia',
    isVerraCertified: true,
    sdgGoals: [2, 12, 13, 15],
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    rating: 4.5,
    reviewCount: 78,
    seller: { id: 's6', name: 'CaféVerde Trading', verified: true },
    vintage: '2023',
    methodology: 'VM0017',
    createdAt: '2023-09-18',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { projectId: '1', quantity: 100, project: mockProjects[0] },
    ],
    status: 'delivered',
    totalAmount: 1450.00,
    createdAt: '2024-11-01T10:30:00Z',
    updatedAt: '2024-11-05T14:20:00Z',
    trackingSteps: [
      { status: 'Order Placed', description: 'Your order has been received', timestamp: '2024-11-01T10:30:00Z', completed: true },
      { status: 'Payment Verified', description: 'Payment confirmed', timestamp: '2024-11-01T10:35:00Z', completed: true },
      { status: 'Credits Reserved', description: 'Carbon credits reserved from project', timestamp: '2024-11-02T09:00:00Z', completed: true },
      { status: 'Verification Complete', description: 'Credits verified on VERRA registry', timestamp: '2024-11-04T11:00:00Z', completed: true },
      { status: 'Credits Issued', description: 'Credits transferred to your account', timestamp: '2024-11-05T14:20:00Z', completed: true },
    ],
  },
  {
    id: 'ORD-002',
    items: [
      { projectId: '2', quantity: 50, project: mockProjects[1] },
      { projectId: '3', quantity: 25, project: mockProjects[2] },
    ],
    status: 'verified',
    totalAmount: 737.50,
    createdAt: '2024-11-10T15:00:00Z',
    updatedAt: '2024-11-12T10:00:00Z',
    trackingSteps: [
      { status: 'Order Placed', description: 'Your order has been received', timestamp: '2024-11-10T15:00:00Z', completed: true },
      { status: 'Payment Verified', description: 'Payment confirmed', timestamp: '2024-11-10T15:10:00Z', completed: true },
      { status: 'Credits Reserved', description: 'Carbon credits reserved from project', timestamp: '2024-11-11T08:00:00Z', completed: true },
      { status: 'Verification Complete', description: 'Credits verified on VERRA registry', timestamp: '2024-11-12T10:00:00Z', completed: true },
      { status: 'Credits Issued', description: 'Pending issuance', timestamp: '', completed: false },
    ],
  },
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    projectId: '1',
    userId: 'u1',
    userName: 'Sarah M.',
    rating: 5,
    comment: 'Excellent project with full transparency. The team provided detailed reports on how our credits contributed to forest conservation. Highly recommend!',
    createdAt: '2024-10-15T08:30:00Z',
  },
  {
    id: 'r2',
    projectId: '1',
    userId: 'u2',
    userName: 'James K.',
    rating: 4,
    comment: 'Good project overall. The VERRA certification gave us confidence in the credits. Quick issuance process.',
    createdAt: '2024-09-28T14:00:00Z',
  },
  {
    id: 'r3',
    projectId: '2',
    userId: 'u3',
    userName: 'Emily R.',
    rating: 5,
    comment: 'The solar project documentation was impressive. Clear methodology and great impact on local communities.',
    createdAt: '2024-10-20T11:00:00Z',
  },
];

// Cart storage helpers
const CART_KEY = 'carbonmarket_cart';

export const getCart = (): CartItem[] => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addToCart = (project: Project, quantity: number): CartItem[] => {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.projectId === project.id);
  
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ projectId: project.id, quantity, project });
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
};

export const updateCartItem = (projectId: string, quantity: number): CartItem[] => {
  let cart = getCart();
  
  if (quantity <= 0) {
    cart = cart.filter(item => item.projectId !== projectId);
  } else {
    const index = cart.findIndex(item => item.projectId === projectId);
    if (index >= 0) {
      cart[index].quantity = quantity;
    }
  }
  
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};
