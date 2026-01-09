# Wrestling Promotion Manager

A professional wrestling promotion management game similar to Football Manager. Take control of a wrestling promotion, manage talent, book shows, and compete against rival companies.

## Project Structure

```
Spinnerspinner/
├── src/
│   ├── models/
│   │   └── WrestlingPromotion.ts    # Main promotion class
│   ├── types/
│   │   ├── enums.ts                 # Enumerations for game attributes
│   │   ├── interfaces.ts            # TypeScript interfaces
│   │   └── index.ts                 # Type exports
│   └── examples/
│       └── createPromotion.ts       # Example promotion creation
├── package.json
├── tsconfig.json
└── README.md
```

## Wrestling Promotion Attributes

A wrestling promotion in this game has the following attributes:

### Basic Information
- **NAME**: The promotion's name
- **FOUNDING DATE**: When the promotion was established
- **FOUNDER**: Original creator of the promotion
- **CURRENT OWNER**: Current owner (can differ from founder)

### Business Details
- **PRODUCT TYPE**: Style of wrestling presented
  - Sports Entertainment (WWE-style)
  - Strong Style (Japanese hard-hitting)
  - Lucha Libre (Mexican high-flying)
  - Technical (Mat-based wrestling)
  - Hardcore (Extreme matches)
  - Comedy (Entertainment-focused)
  - Hybrid (Mix of styles)
- **AMOUNT OF MONEY**: Current financial resources
- **HOME CITY**: Base of operations
- **TARGET AUDIENCE**: Primary demographic
  - Children, Teenagers, Young Adults, Adults
  - Hardcore Fans, Casual Fans, All Ages

### Performance Metrics
- **MOMENTUM**: Current trajectory (rising/falling/stable, -100 to +100)
- **NOTORIETY**: How well-known the promotion is (0-100)
- **PUBLIC REPUTATION**: Public perception
  - Legendary, Excellent, Great, Good, Average, Poor, Terrible, Unknown
- **POPULARITY (by country)**: Rating per country (0-100)

### Special Attributes
- **GOAL**: Challenge condition for bonus points
  - Types: Reach Attendance, Win Awards, Sign Talent, Profitable Year, Defeat Rival, Expand Territory, Develop Star, Sell Out Venue, TV Deal, Streaming Deal
- **ACE**: Special strength of the promotion
  - Storytelling, In-Ring Quality, Star Power, Production Value, Character Work, Talent Development, International Appeal, Social Media, Merchandising, Live Atmosphere

## Getting Started

### Installation

```bash
npm install
```

### Building

```bash
npm run build
```

### Development

```bash
npm run dev
```

## Usage Examples

### Creating a New Promotion

```typescript
import { WrestlingPromotion } from './models/WrestlingPromotion';
import { ProductType, TargetAudience, PublicReputation, PromotionAce, GoalType } from './types';

const myPromotion = new WrestlingPromotion({
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
    'MX': 30
  },
  goal: {
    type: GoalType.SELL_OUT_VENUE,
    description: 'Sell out Madison Square Garden',
    target: 20000,
    progress: 5000,
    completed: false,
    bonusPoints: 500
  },
  ace: PromotionAce.PRODUCTION_VALUE
});
```

### Managing Your Promotion

```typescript
// Update finances
myPromotion.updateMoney(50000);

// Update momentum
myPromotion.updateMomentum(10); // Increase by 10

// Update popularity in a country
myPromotion.updatePopularity('US', 65);

// Check goal progress
myPromotion.updateGoalProgress(15000);

// Get status
console.log(myPromotion.getStatus());

// Check profitability
console.log(myPromotion.isProfitable());

// Get average global popularity
console.log(myPromotion.getAveragePopularity());
```

## Next Steps

Future features to implement:
- Worker/Talent management system
- Show booking engine
- Rival promotion system
- Contract negotiations
- Match ratings and booking logic
- Financial simulation
- Event calendar
- Storyline/feud tracking
- Merchandise system
- TV/Streaming deals

## License

MIT
