export interface RateItem {
  id: number;
  origin: string;
  dest: string;
  rate: string;
  vehicle: string;
  time: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  image: string;
  videoUrl?: string;
}

export interface ComparisonPoint {
  feature: string;
  competitor: string;
  rk: string;
  isWinner: boolean;
}

export enum TruckType {
  DRY_VAN = 'Dry Van',
  REEFER = 'Reefer',
  FLATBED = 'Flatbed',
  POWER_ONLY = 'Power Only'
}

export type PageView = 'home' | 'services' | 'about';

export interface DispatchSettings {
  minRate: number;
  maxDeadhead: number;
  homeTime: 'weekly' | 'biweekly' | 'monthly';
  preferredLanes: string[];
  autoBook: boolean;
}