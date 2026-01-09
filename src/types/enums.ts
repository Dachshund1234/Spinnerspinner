/**
 * Product Type - The style/format of wrestling the promotion presents
 */
export enum ProductType {
  SPORTS_ENTERTAINMENT = "SPORTS_ENTERTAINMENT", // WWE-style entertainment focused
  STRONG_STYLE = "STRONG_STYLE",                 // Hard-hitting Japanese style
  LUCHA_LIBRE = "LUCHA_LIBRE",                   // High-flying Mexican style
  TECHNICAL = "TECHNICAL",                       // Mat-based wrestling
  HARDCORE = "HARDCORE",                         // Extreme/violent matches
  COMEDY = "COMEDY",                             // Comedic/entertainment focused
  HYBRID = "HYBRID"                              // Mix of multiple styles
}

/**
 * Target Audience - Primary demographic the promotion aims to attract
 */
export enum TargetAudience {
  CHILDREN = "CHILDREN",           // Family-friendly, kid-focused
  TEENAGERS = "TEENAGERS",         // Teen demographic
  YOUNG_ADULTS = "YOUNG_ADULTS",   // 18-35 demographic
  ADULTS = "ADULTS",               // 35+ demographic
  HARDCORE_FANS = "HARDCORE_FANS", // Devoted wrestling fans
  CASUAL_FANS = "CASUAL_FANS",     // Mainstream audience
  ALL_AGES = "ALL_AGES"            // Broad appeal
}

/**
 * Public Reputation - How the promotion is perceived publicly
 */
export enum PublicReputation {
  LEGENDARY = "LEGENDARY",     // Iconic, hall of fame status
  EXCELLENT = "EXCELLENT",     // Top-tier reputation
  GREAT = "GREAT",             // Very positive reputation
  GOOD = "GOOD",               // Solid reputation
  AVERAGE = "AVERAGE",         // Neutral reputation
  POOR = "POOR",               // Negative reputation
  TERRIBLE = "TERRIBLE",       // Very bad reputation
  UNKNOWN = "UNKNOWN"          // New/no reputation yet
}

/**
 * ACE - Special strengths/specialties of the promotion
 */
export enum PromotionAce {
  STORYTELLING = "STORYTELLING",           // Excellent narratives
  IN_RING_QUALITY = "IN_RING_QUALITY",     // High-quality matches
  STAR_POWER = "STAR_POWER",               // Big name talent
  PRODUCTION_VALUE = "PRODUCTION_VALUE",   // Great presentation
  CHARACTER_WORK = "CHARACTER_WORK",       // Strong character development
  TALENT_DEVELOPMENT = "TALENT_DEVELOPMENT", // Great training/development
  INTERNATIONAL_APPEAL = "INTERNATIONAL_APPEAL", // Global reach
  SOCIAL_MEDIA = "SOCIAL_MEDIA",           // Strong online presence
  MERCHANDISING = "MERCHANDISING",         // Great merch sales
  LIVE_ATMOSPHERE = "LIVE_ATMOSPHERE"      // Amazing crowd experiences
}

/**
 * Goal Type - Challenge conditions for bonus points
 */
export enum GoalType {
  REACH_ATTENDANCE = "REACH_ATTENDANCE",       // Hit attendance target
  WIN_AWARDS = "WIN_AWARDS",                   // Win industry awards
  SIGN_TALENT = "SIGN_TALENT",                 // Sign specific wrestlers
  PROFITABLE_YEAR = "PROFITABLE_YEAR",         // Make X amount profit
  DEFEAT_RIVAL = "DEFEAT_RIVAL",               // Beat competing promotion
  EXPAND_TERRITORY = "EXPAND_TERRITORY",       // Expand to new markets
  DEVELOP_STAR = "DEVELOP_STAR",               // Create a main eventer
  SELL_OUT_VENUE = "SELL_OUT_VENUE",           // Sell out specific venue
  TV_DEAL = "TV_DEAL",                         // Secure TV contract
  STREAMING_DEAL = "STREAMING_DEAL"            // Secure streaming deal
}
