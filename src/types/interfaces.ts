import { ProductType, TargetAudience, PublicReputation, PromotionAce, GoalType } from './enums';

/**
 * Goal - A challenge condition the player must meet to gain bonus points
 */
export interface Goal {
  type: GoalType;
  description: string;
  target: number;           // Numerical target (attendance, money, etc.)
  progress: number;         // Current progress towards goal
  completed: boolean;
  bonusPoints: number;      // Points awarded for completion
  deadline?: Date;          // Optional time limit
}

/**
 * Popularity by Country - Tracks how popular the promotion is in different countries
 */
export interface PopularityByCountry {
  [countryCode: string]: number; // Country code (e.g., "US", "JP", "MX") -> popularity rating (0-100)
}

/**
 * Momentum - Represents the current trajectory of the promotion
 */
export interface Momentum {
  value: number;            // Current momentum (-100 to +100)
  trend: 'rising' | 'falling' | 'stable';
  lastChanged: Date;
}

/**
 * WrestlingPromotion - Complete definition of a wrestling promotion
 */
export interface WrestlingPromotion {
  // Basic Information
  name: string;
  foundingDate: Date;
  founder: string;
  currentOwner: string;

  // Business Details
  productType: ProductType;
  money: number;                    // Amount of money (in dollars/currency)
  homeCity: string;
  targetAudience: TargetAudience;

  // Performance Metrics
  momentum: Momentum;
  notoriety: number;                // How well-known the promotion is (0-100)
  publicReputation: PublicReputation;
  popularityByCountry: PopularityByCountry;

  // Special Attributes
  goal: Goal;
  ace: PromotionAce;                // What the company is particularly good at

  // Optional metadata
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
