/**
 * Pro Wrestling Simulator - Wrestler Data Model
 * Comprehensive attribute system for wrestler management
 */

/**
 * Wrestler Class
 * Represents a professional wrestler with all relevant attributes
 */
class Wrestler {
  constructor(data = {}) {
    // Basic Information
    this.id = data.id || this.generateId();
    this.name = data.name || '';
    this.age = data.age || 18;
    this.sexuality = data.sexuality || 'Heterosexual';
    this.workerType = data.workerType || 'Singles'; // Singles, Tag Team, Manager, etc.
    this.status = data.status || 'Active'; // Active, Injured, Retired, etc.
    this.workingStyle = data.workingStyle || 'All-Rounder';

    // Physical Attributes
    this.height = data.height || 180; // cm
    this.weight = data.weight || 90; // kg
    this.birthDate = data.birthDate || new Date();
    this.debutDate = data.debutDate || new Date();

    // Location Information
    this.basedInContinent = data.basedInContinent || 'North America';
    this.basedInCountry = data.basedInCountry || 'USA';
    this.basedInCity = data.basedInCity || '';

    // Popularity (by region)
    this.popularity = data.popularity || {
      // Format: { 'USA': { 'California': 75, 'Texas': 60 }, 'Japan': { 'Tokyo': 50 } }
    };

    // Physical Condition (1-100)
    this.physicalCondition = {
      brain: data.physicalCondition?.brain || 100,
      body: data.physicalCondition?.body || 100,
      neck: data.physicalCondition?.neck || 100,
      chest: data.physicalCondition?.chest || 100,
      legs: data.physicalCondition?.legs || 100,
      arms: data.physicalCondition?.arms || 100
    };

    // Wrestling Attributes (1-100)
    this.brawling = data.brawling || 50;
    this.technicalWrestling = data.technicalWrestling || 50;
    this.starPower = data.starPower || 50;
    this.highFlying = data.highFlying || 50;
    this.hardcore = data.hardcore || 50;
    this.safety = data.safety || 50;
    this.dramaticActing = data.dramaticActing || 50;
    this.wrestlingPsychology = data.wrestlingPsychology || 50;

    // Game Mechanics
    this.fatigue = data.fatigue || 0; // 0-100 (0 = fresh, 100 = exhausted)
    this.playByPlay = data.playByPlay || 50; // Commentary quality
    this.collar = data.collar || 'Blue Collar'; // Blue Collar, White Collar, etc.

    // Media
    this.profilePicture = data.profilePicture || null; // URL or base64
  }

  /**
   * Generate a unique ID for the wrestler
   */
  generateId() {
    return 'WR-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * Calculate overall rating based on attributes
   */
  getOverallRating() {
    const attributes = [
      this.brawling,
      this.technicalWrestling,
      this.starPower,
      this.highFlying,
      this.hardcore,
      this.safety,
      this.dramaticActing,
      this.wrestlingPsychology
    ];

    return Math.round(attributes.reduce((a, b) => a + b, 0) / attributes.length);
  }

  /**
   * Get average physical condition
   */
  getPhysicalConditionRating() {
    const conditions = Object.values(this.physicalCondition);
    return Math.round(conditions.reduce((a, b) => a + b, 0) / conditions.length);
  }

  /**
   * Calculate age from birth date
   */
  calculateAge() {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  /**
   * Calculate years of experience
   */
  getYearsOfExperience() {
    const today = new Date();
    const debut = new Date(this.debutDate);
    const years = (today - debut) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.max(0, Math.floor(years));
  }

  /**
   * Get popularity in a specific location
   */
  getPopularityIn(country, state = null) {
    if (!this.popularity[country]) return 0;
    if (state && this.popularity[country][state]) {
      return this.popularity[country][state];
    }
    // Return average popularity for the country
    const states = Object.values(this.popularity[country]);
    if (states.length === 0) return 0;
    return Math.round(states.reduce((a, b) => a + b, 0) / states.length);
  }

  /**
   * Set popularity in a specific location
   */
  setPopularityIn(country, state, value) {
    if (!this.popularity[country]) {
      this.popularity[country] = {};
    }
    this.popularity[country][state] = Math.max(0, Math.min(100, value));
  }

  /**
   * Damage a specific body part
   */
  damageBodyPart(part, amount) {
    if (this.physicalCondition[part] !== undefined) {
      this.physicalCondition[part] = Math.max(0, this.physicalCondition[part] - amount);
    }
  }

  /**
   * Heal a specific body part
   */
  healBodyPart(part, amount) {
    if (this.physicalCondition[part] !== undefined) {
      this.physicalCondition[part] = Math.min(100, this.physicalCondition[part] + amount);
    }
  }

  /**
   * Check if wrestler is injured
   */
  isInjured() {
    return Object.values(this.physicalCondition).some(condition => condition < 50);
  }

  /**
   * Rest and recover (reduces fatigue)
   */
  rest(amount = 10) {
    this.fatigue = Math.max(0, this.fatigue - amount);
  }

  /**
   * Add fatigue after match
   */
  addFatigue(amount = 10) {
    this.fatigue = Math.min(100, this.fatigue + amount);
  }

  /**
   * Export wrestler data as JSON
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      sexuality: this.sexuality,
      workerType: this.workerType,
      status: this.status,
      workingStyle: this.workingStyle,
      height: this.height,
      weight: this.weight,
      birthDate: this.birthDate,
      debutDate: this.debutDate,
      basedInContinent: this.basedInContinent,
      basedInCountry: this.basedInCountry,
      basedInCity: this.basedInCity,
      popularity: this.popularity,
      physicalCondition: this.physicalCondition,
      brawling: this.brawling,
      technicalWrestling: this.technicalWrestling,
      starPower: this.starPower,
      highFlying: this.highFlying,
      hardcore: this.hardcore,
      safety: this.safety,
      dramaticActing: this.dramaticActing,
      wrestlingPsychology: this.wrestlingPsychology,
      fatigue: this.fatigue,
      playByPlay: this.playByPlay,
      collar: this.collar,
      profilePicture: this.profilePicture
    };
  }

  /**
   * Create wrestler from JSON data
   */
  static fromJSON(json) {
    return new Wrestler(json);
  }
}

/**
 * Wrestler Manager Class
 * Manages collection of wrestlers with CRUD operations
 */
class WrestlerManager {
  constructor() {
    this.wrestlers = [];
    this.loadFromStorage();
  }

  /**
   * Add a new wrestler
   */
  addWrestler(wrestlerData) {
    const wrestler = new Wrestler(wrestlerData);
    this.wrestlers.push(wrestler);
    this.saveToStorage();
    return wrestler;
  }

  /**
   * Get wrestler by ID
   */
  getWrestlerById(id) {
    return this.wrestlers.find(w => w.id === id);
  }

  /**
   * Get wrestler by name
   */
  getWrestlerByName(name) {
    return this.wrestlers.find(w => w.name.toLowerCase() === name.toLowerCase());
  }

  /**
   * Update wrestler data
   */
  updateWrestler(id, updates) {
    const wrestler = this.getWrestlerById(id);
    if (wrestler) {
      Object.assign(wrestler, updates);
      this.saveToStorage();
      return wrestler;
    }
    return null;
  }

  /**
   * Delete wrestler
   */
  deleteWrestler(id) {
    const index = this.wrestlers.findIndex(w => w.id === id);
    if (index !== -1) {
      this.wrestlers.splice(index, 1);
      this.saveToStorage();
      return true;
    }
    return false;
  }

  /**
   * Get all wrestlers
   */
  getAllWrestlers() {
    return this.wrestlers;
  }

  /**
   * Filter wrestlers by criteria
   */
  filterWrestlers(criteria) {
    return this.wrestlers.filter(wrestler => {
      for (let key in criteria) {
        if (wrestler[key] !== criteria[key]) {
          return false;
        }
      }
      return true;
    });
  }

  /**
   * Search wrestlers by name
   */
  searchWrestlers(query) {
    const lowerQuery = query.toLowerCase();
    return this.wrestlers.filter(w =>
      w.name.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get wrestlers by location
   */
  getWrestlersByLocation(country, city = null) {
    return this.wrestlers.filter(w => {
      if (city) {
        return w.basedInCountry === country && w.basedInCity === city;
      }
      return w.basedInCountry === country;
    });
  }

  /**
   * Get top wrestlers by rating
   */
  getTopWrestlers(limit = 10) {
    return [...this.wrestlers]
      .sort((a, b) => b.getOverallRating() - a.getOverallRating())
      .slice(0, limit);
  }

  /**
   * Save wrestlers to localStorage
   */
  saveToStorage() {
    if (typeof localStorage !== 'undefined') {
      const data = this.wrestlers.map(w => w.toJSON());
      localStorage.setItem('wrestlers', JSON.stringify(data));
    }
  }

  /**
   * Load wrestlers from localStorage
   */
  loadFromStorage() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('wrestlers');
      if (data) {
        const parsed = JSON.parse(data);
        this.wrestlers = parsed.map(w => Wrestler.fromJSON(w));
      }
    }
  }

  /**
   * Clear all wrestlers
   */
  clearAll() {
    this.wrestlers = [];
    this.saveToStorage();
  }

  /**
   * Import wrestlers from JSON array
   */
  importWrestlers(jsonArray) {
    jsonArray.forEach(data => {
      this.addWrestler(data);
    });
  }

  /**
   * Export all wrestlers as JSON
   */
  exportWrestlers() {
    return this.wrestlers.map(w => w.toJSON());
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Wrestler, WrestlerManager };
}
