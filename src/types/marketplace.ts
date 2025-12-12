export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'forestry' | 'renewable-energy' | 'infrastructure' | 'agriculture' | 'ocean' | 'waste-management' | 'community';
  pricePerCredit: number;
  totalCredits: number;
  availableCredits: number;
  location: string;
  country: string;
  isVerraCertified: boolean;
  sdgGoals: number[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
  seller: {
    id: string;
    name: string;
    verified: boolean;
  };
  vintage: string;
  methodology: string;
  createdAt: string;
}

export interface CartItem {
  projectId: string;
  quantity: number;
  project: Project;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'verified' | 'issued' | 'delivered';
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  trackingSteps: TrackingStep[];
}

export interface TrackingStep {
  status: string;
  description: string;
  timestamp: string;
  completed: boolean;
}

export interface Review {
  id: string;
  projectId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export const CATEGORIES = [
  { id: 'forestry', name: 'Forestry', icon: '🌲', description: 'Forest conservation and reforestation projects' },
  { id: 'renewable-energy', name: 'Renewable Energy', icon: '⚡', description: 'Wind, solar, and hydro power projects' },
  { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️', description: 'Sustainable building and transportation' },
  { id: 'agriculture', name: 'Agriculture', icon: '🌾', description: 'Sustainable farming practices' },
  { id: 'ocean', name: 'Ocean', icon: '🌊', description: 'Marine conservation initiatives' },
  { id: 'waste-management', name: 'Waste Management', icon: '♻️', description: 'Recycling and waste reduction' },
  { id: 'community', name: 'Community Development', icon: '👥', description: 'Community-based sustainability initiatives' },
] as const;

export const SDG_GOALS: Record<number, { name: string; icon: string; color: string }> = {
  1: { name: 'No Poverty', icon: '🏠', color: '#E5243B' },
  2: { name: 'Zero Hunger', icon: '🍽️', color: '#DDA63A' },
  3: { name: 'Good Health', icon: '❤️', color: '#4C9F38' },
  4: { name: 'Quality Education', icon: '📚', color: '#C5192D' },
  5: { name: 'Gender Equality', icon: '⚖️', color: '#FF3A21' },
  6: { name: 'Clean Water', icon: '💧', color: '#26BDE2' },
  7: { name: 'Affordable Energy', icon: '☀️', color: '#FCC30B' },
  8: { name: 'Decent Work', icon: '💼', color: '#A21942' },
  9: { name: 'Industry Innovation', icon: '🏭', color: '#FD6925' },
  10: { name: 'Reduced Inequalities', icon: '🤝', color: '#DD1367' },
  11: { name: 'Sustainable Cities', icon: '🏙️', color: '#FD9D24' },
  12: { name: 'Responsible Consumption', icon: '🔄', color: '#BF8B2E' },
  13: { name: 'Climate Action', icon: '🌍', color: '#3F7E44' },
  14: { name: 'Life Below Water', icon: '🐟', color: '#0A97D9' },
  15: { name: 'Life on Land', icon: '🌳', color: '#56C02B' },
  16: { name: 'Peace & Justice', icon: '🕊️', color: '#00689D' },
  17: { name: 'Partnerships', icon: '🤲', color: '#19486A' },
};
