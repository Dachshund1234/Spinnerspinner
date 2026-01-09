import {
  WrestlingPromotion as IWrestlingPromotion,
  ProductType,
  TargetAudience,
  PublicReputation,
  PromotionAce,
  Goal,
  Momentum,
  PopularityByCountry
} from '../types';

/**
 * WrestlingPromotion Class - Represents a professional wrestling promotion
 * Similar to a football club in Football Manager
 */
export class WrestlingPromotion implements IWrestlingPromotion {
  // Basic Information
  name: string;
  foundingDate: Date;
  founder: string;
  currentOwner: string;

  // Business Details
  productType: ProductType;
  money: number;
  homeCity: string;
  targetAudience: TargetAudience;

  // Performance Metrics
  momentum: Momentum;
  notoriety: number;
  publicReputation: PublicReputation;
  popularityByCountry: PopularityByCountry;

  // Special Attributes
  goal: Goal;
  ace: PromotionAce;

  // Metadata
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<IWrestlingPromotion>) {
    this.name = data.name || 'New Promotion';
    this.foundingDate = data.foundingDate || new Date();
    this.founder = data.founder || 'Unknown';
    this.currentOwner = data.currentOwner || data.founder || 'Unknown';

    this.productType = data.productType || ProductType.HYBRID;
    this.money = data.money || 100000;
    this.homeCity = data.homeCity || 'Unknown';
    this.targetAudience = data.targetAudience || TargetAudience.ALL_AGES;

    this.momentum = data.momentum || {
      value: 0,
      trend: 'stable',
      lastChanged: new Date()
    };
    this.notoriety = data.notoriety || 0;
    this.publicReputation = data.publicReputation || PublicReputation.UNKNOWN;
    this.popularityByCountry = data.popularityByCountry || {};

    this.goal = data.goal || {
      type: data.goal?.type || 'REACH_ATTENDANCE' as any,
      description: 'Grow your promotion',
      target: 1000,
      progress: 0,
      completed: false,
      bonusPoints: 100
    };
    this.ace = data.ace || PromotionAce.STORYTELLING;

    this.id = data.id || this.generateId();
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Generate a unique ID for the promotion
   */
  private generateId(): string {
    return `promo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Update promotion money
   */
  updateMoney(amount: number): void {
    this.money += amount;
    this.updatedAt = new Date();
  }

  /**
   * Update momentum based on recent performance
   */
  updateMomentum(change: number): void {
    const oldValue = this.momentum.value;
    this.momentum.value = Math.max(-100, Math.min(100, this.momentum.value + change));

    if (this.momentum.value > oldValue) {
      this.momentum.trend = 'rising';
    } else if (this.momentum.value < oldValue) {
      this.momentum.trend = 'falling';
    } else {
      this.momentum.trend = 'stable';
    }

    this.momentum.lastChanged = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Update popularity in a specific country
   */
  updatePopularity(countryCode: string, rating: number): void {
    this.popularityByCountry[countryCode] = Math.max(0, Math.min(100, rating));
    this.updatedAt = new Date();
  }

  /**
   * Update goal progress
   */
  updateGoalProgress(progress: number): void {
    this.goal.progress = progress;
    if (this.goal.progress >= this.goal.target) {
      this.goal.completed = true;
    }
    this.updatedAt = new Date();
  }

  /**
   * Get average global popularity
   */
  getAveragePopularity(): number {
    const countries = Object.keys(this.popularityByCountry);
    if (countries.length === 0) return 0;

    const total = countries.reduce((sum, country) => {
      return sum + this.popularityByCountry[country];
    }, 0);

    return total / countries.length;
  }

  /**
   * Check if promotion is profitable
   */
  isProfitable(): boolean {
    return this.money > 0;
  }

  /**
   * Get promotion status summary
   */
  getStatus(): string {
    return `${this.name} - Money: $${this.money.toLocaleString()} | Notoriety: ${this.notoriety} | Reputation: ${this.publicReputation}`;
  }

  /**
   * Serialize promotion to JSON
   */
  toJSON(): IWrestlingPromotion {
    return {
      name: this.name,
      foundingDate: this.foundingDate,
      founder: this.founder,
      currentOwner: this.currentOwner,
      productType: this.productType,
      money: this.money,
      homeCity: this.homeCity,
      targetAudience: this.targetAudience,
      momentum: this.momentum,
      notoriety: this.notoriety,
      publicReputation: this.publicReputation,
      popularityByCountry: this.popularityByCountry,
      goal: this.goal,
      ace: this.ace,
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Create promotion from JSON
   */
  static fromJSON(json: IWrestlingPromotion): WrestlingPromotion {
    return new WrestlingPromotion({
      ...json,
      foundingDate: new Date(json.foundingDate),
      createdAt: json.createdAt ? new Date(json.createdAt) : undefined,
      updatedAt: json.updatedAt ? new Date(json.updatedAt) : undefined,
      momentum: {
        ...json.momentum,
        lastChanged: new Date(json.momentum.lastChanged)
      },
      goal: {
        ...json.goal,
        deadline: json.goal.deadline ? new Date(json.goal.deadline) : undefined
      }
    });
  }
}
