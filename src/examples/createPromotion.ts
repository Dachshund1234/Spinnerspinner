import { WrestlingPromotion } from '../models/WrestlingPromotion';
import {
  ProductType,
  TargetAudience,
  PublicReputation,
  PromotionAce,
  GoalType
} from '../types';

/**
 * Example: Creating a WWE-style promotion
 */
export function createWWEStylePromotion(): WrestlingPromotion {
  return new WrestlingPromotion({
    name: 'Supreme Wrestling Entertainment',
    foundingDate: new Date('2024-01-01'),
    founder: 'John Smith',
    currentOwner: 'John Smith',
    productType: ProductType.SPORTS_ENTERTAINMENT,
    money: 5000000,
    homeCity: 'New York, NY',
    targetAudience: TargetAudience.ALL_AGES,
    momentum: {
      value: 25,
      trend: 'rising',
      lastChanged: new Date()
    },
    notoriety: 45,
    publicReputation: PublicReputation.GOOD,
    popularityByCountry: {
      'US': 60,
      'CA': 45,
      'MX': 30,
      'UK': 40
    },
    goal: {
      type: GoalType.SELL_OUT_VENUE,
      description: 'Sell out Madison Square Garden',
      target: 20000,
      progress: 5000,
      completed: false,
      bonusPoints: 500,
      deadline: new Date('2025-12-31')
    },
    ace: PromotionAce.PRODUCTION_VALUE
  });
}

/**
 * Example: Creating a Japanese Strong Style promotion
 */
export function createStrongStylePromotion(): WrestlingPromotion {
  return new WrestlingPromotion({
    name: 'Fighting Spirit Pro Wrestling',
    foundingDate: new Date('2020-06-15'),
    founder: 'Takeshi Yamamoto',
    currentOwner: 'Takeshi Yamamoto',
    productType: ProductType.STRONG_STYLE,
    money: 2000000,
    homeCity: 'Tokyo, Japan',
    targetAudience: TargetAudience.HARDCORE_FANS,
    momentum: {
      value: 40,
      trend: 'rising',
      lastChanged: new Date()
    },
    notoriety: 65,
    publicReputation: PublicReputation.GREAT,
    popularityByCountry: {
      'JP': 80,
      'US': 35,
      'UK': 25
    },
    goal: {
      type: GoalType.WIN_AWARDS,
      description: 'Win 5 Match of the Year awards',
      target: 5,
      progress: 2,
      completed: false,
      bonusPoints: 750
    },
    ace: PromotionAce.IN_RING_QUALITY
  });
}

/**
 * Example: Creating a Lucha Libre promotion
 */
export function createLuchaLibrePromotion(): WrestlingPromotion {
  return new WrestlingPromotion({
    name: 'Lucha Azteca',
    foundingDate: new Date('2018-03-20'),
    founder: 'Carlos Rodriguez',
    currentOwner: 'Maria Rodriguez',
    productType: ProductType.LUCHA_LIBRE,
    money: 800000,
    homeCity: 'Mexico City, Mexico',
    targetAudience: TargetAudience.ALL_AGES,
    momentum: {
      value: 15,
      trend: 'stable',
      lastChanged: new Date()
    },
    notoriety: 50,
    publicReputation: PublicReputation.GOOD,
    popularityByCountry: {
      'MX': 75,
      'US': 30,
      'ES': 20
    },
    goal: {
      type: GoalType.EXPAND_TERRITORY,
      description: 'Expand operations to 3 new cities',
      target: 3,
      progress: 1,
      completed: false,
      bonusPoints: 400
    },
    ace: PromotionAce.LIVE_ATMOSPHERE
  });
}

/**
 * Example: Creating a startup indie promotion
 */
export function createIndiePromotion(): WrestlingPromotion {
  return new WrestlingPromotion({
    name: 'Underground Wrestling Federation',
    foundingDate: new Date('2025-11-01'),
    founder: 'Sarah Johnson',
    currentOwner: 'Sarah Johnson',
    productType: ProductType.HYBRID,
    money: 50000,
    homeCity: 'Chicago, IL',
    targetAudience: TargetAudience.YOUNG_ADULTS,
    momentum: {
      value: 10,
      trend: 'rising',
      lastChanged: new Date()
    },
    notoriety: 15,
    publicReputation: PublicReputation.UNKNOWN,
    popularityByCountry: {
      'US': 20
    },
    goal: {
      type: GoalType.PROFITABLE_YEAR,
      description: 'Make $100,000 profit in first year',
      target: 100000,
      progress: 0,
      completed: false,
      bonusPoints: 1000,
      deadline: new Date('2026-11-01')
    },
    ace: PromotionAce.TALENT_DEVELOPMENT
  });
}

// Example usage
if (require.main === module) {
  const wweStyle = createWWEStylePromotion();
  console.log('WWE Style Promotion:');
  console.log(wweStyle.getStatus());
  console.log(`Average Popularity: ${wweStyle.getAveragePopularity().toFixed(2)}`);
  console.log(`Goal: ${wweStyle.goal.description} (${wweStyle.goal.progress}/${wweStyle.goal.target})`);
  console.log('---');

  const strongStyle = createStrongStylePromotion();
  console.log('Strong Style Promotion:');
  console.log(strongStyle.getStatus());
  console.log(`Average Popularity: ${strongStyle.getAveragePopularity().toFixed(2)}`);
  console.log('---');

  const luchaLibre = createLuchaLibrePromotion();
  console.log('Lucha Libre Promotion:');
  console.log(luchaLibre.getStatus());
  console.log('---');

  const indie = createIndiePromotion();
  console.log('Indie Promotion:');
  console.log(indie.getStatus());
  console.log(`Profitable: ${indie.isProfitable()}`);
}
