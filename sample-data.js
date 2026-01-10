/**
 * Sample Wrestler Data
 * Demonstrates the wrestler data model with example wrestlers
 */

const sampleWrestlers = [
  {
    id: 'WR-001',
    name: 'Roman Reigns',
    age: 38,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'Powerhouse',
    height: 191, // cm
    weight: 120, // kg
    birthDate: '1985-05-25',
    debutDate: '2010-08-20',
    basedInContinent: 'North America',
    basedInCountry: 'USA',
    basedInCity: 'Pensacola',
    popularity: {
      'USA': {
        'California': 95,
        'Texas': 92,
        'Florida': 97,
        'New York': 94
      },
      'UK': {
        'London': 85
      },
      'Japan': {
        'Tokyo': 78
      }
    },
    physicalCondition: {
      brain: 95,
      body: 92,
      neck: 90,
      chest: 95,
      legs: 93,
      arms: 94
    },
    brawling: 88,
    technicalWrestling: 75,
    starPower: 98,
    highFlying: 45,
    hardcore: 70,
    safety: 85,
    dramaticActing: 92,
    wrestlingPsychology: 95,
    fatigue: 15,
    playByPlay: 88,
    collar: 'White Collar',
    profilePicture: null
  },
  {
    id: 'WR-002',
    name: 'Seth Rollins',
    age: 37,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'High Flyer',
    height: 185,
    weight: 102,
    birthDate: '1986-05-28',
    debutDate: '2005-06-15',
    basedInContinent: 'North America',
    basedInCountry: 'USA',
    basedInCity: 'Davenport',
    popularity: {
      'USA': {
        'California': 88,
        'Texas': 85,
        'Illinois': 92,
        'New York': 89
      },
      'Canada': {
        'Toronto': 82
      },
      'Mexico': {
        'Mexico City': 75
      }
    },
    physicalCondition: {
      brain: 92,
      body: 88,
      neck: 85,
      chest: 90,
      legs: 87,
      arms: 89
    },
    brawling: 82,
    technicalWrestling: 88,
    starPower: 90,
    highFlying: 92,
    hardcore: 78,
    safety: 88,
    dramaticActing: 85,
    wrestlingPsychology: 90,
    fatigue: 20,
    playByPlay: 85,
    collar: 'White Collar',
    profilePicture: null
  },
  {
    id: 'WR-003',
    name: 'Cody Rhodes',
    age: 38,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'All-Rounder',
    height: 188,
    weight: 100,
    birthDate: '1985-06-30',
    debutDate: '2006-01-20',
    basedInContinent: 'North America',
    basedInCountry: 'USA',
    basedInCity: 'Atlanta',
    popularity: {
      'USA': {
        'California': 92,
        'Texas': 88,
        'Georgia': 98,
        'New York': 91
      },
      'Japan': {
        'Tokyo': 85,
        'Osaka': 82
      },
      'UK': {
        'London': 88
      }
    },
    physicalCondition: {
      brain: 94,
      body: 90,
      neck: 88,
      chest: 92,
      legs: 89,
      arms: 91
    },
    brawling: 85,
    technicalWrestling: 86,
    starPower: 95,
    highFlying: 70,
    hardcore: 75,
    safety: 90,
    dramaticActing: 94,
    wrestlingPsychology: 93,
    fatigue: 10,
    playByPlay: 90,
    collar: 'White Collar',
    profilePicture: null
  },
  {
    id: 'WR-004',
    name: 'Rey Mysterio',
    age: 49,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'High Flyer',
    height: 168,
    weight: 79,
    birthDate: '1974-12-11',
    debutDate: '1989-04-30',
    basedInContinent: 'North America',
    basedInCountry: 'USA',
    basedInCity: 'San Diego',
    popularity: {
      'USA': {
        'California': 96,
        'Texas': 92,
        'New York': 90
      },
      'Mexico': {
        'Mexico City': 98,
        'Tijuana': 99,
        'Guadalajara': 97
      },
      'Japan': {
        'Tokyo': 88
      }
    },
    physicalCondition: {
      brain: 85,
      body: 78,
      neck: 75,
      chest: 80,
      legs: 76,
      arms: 79
    },
    brawling: 70,
    technicalWrestling: 88,
    starPower: 95,
    highFlying: 98,
    hardcore: 72,
    safety: 92,
    dramaticActing: 88,
    wrestlingPsychology: 96,
    fatigue: 35,
    playByPlay: 92,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-005',
    name: 'Gunther',
    age: 36,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'Strong Style',
    height: 196,
    weight: 140,
    birthDate: '1987-08-20',
    debutDate: '2007-03-15',
    basedInContinent: 'Europe',
    basedInCountry: 'Austria',
    basedInCity: 'Vienna',
    popularity: {
      'USA': {
        'California': 82,
        'Texas': 80,
        'New York': 85
      },
      'Austria': {
        'Vienna': 95
      },
      'Germany': {
        'Berlin': 92,
        'Munich': 90
      },
      'UK': {
        'London': 88
      }
    },
    physicalCondition: {
      brain: 96,
      body: 95,
      neck: 94,
      chest: 98,
      legs: 93,
      arms: 96
    },
    brawling: 92,
    technicalWrestling: 95,
    starPower: 88,
    highFlying: 40,
    hardcore: 65,
    safety: 94,
    dramaticActing: 82,
    wrestlingPsychology: 96,
    fatigue: 8,
    playByPlay: 85,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-006',
    name: 'Rhea Ripley',
    age: 27,
    sexuality: 'Bisexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'Powerhouse',
    height: 173,
    weight: 72,
    birthDate: '1996-10-11',
    debutDate: '2013-02-20',
    basedInContinent: 'Oceania',
    basedInCountry: 'Australia',
    basedInCity: 'Adelaide',
    popularity: {
      'USA': {
        'California': 89,
        'Texas': 86,
        'New York': 91
      },
      'Australia': {
        'Adelaide': 98,
        'Sydney': 95,
        'Melbourne': 94
      },
      'UK': {
        'London': 87
      }
    },
    physicalCondition: {
      brain: 95,
      body: 92,
      neck: 90,
      chest: 91,
      legs: 93,
      arms: 94
    },
    brawling: 88,
    technicalWrestling: 82,
    starPower: 93,
    highFlying: 68,
    hardcore: 85,
    safety: 87,
    dramaticActing: 90,
    wrestlingPsychology: 88,
    fatigue: 12,
    playByPlay: 86,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-007',
    name: 'AJ Styles',
    age: 46,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'All-Rounder',
    height: 180,
    weight: 99,
    birthDate: '1977-06-02',
    debutDate: '1998-03-15',
    basedInContinent: 'North America',
    basedInCountry: 'USA',
    basedInCity: 'Gainesville',
    popularity: {
      'USA': {
        'California': 90,
        'Texas': 92,
        'Georgia': 96,
        'New York': 88
      },
      'Japan': {
        'Tokyo': 95,
        'Osaka': 93
      },
      'Mexico': {
        'Mexico City': 85
      }
    },
    physicalCondition: {
      brain: 88,
      body: 82,
      neck: 80,
      chest: 85,
      legs: 81,
      arms: 84
    },
    brawling: 82,
    technicalWrestling: 95,
    starPower: 92,
    highFlying: 90,
    hardcore: 75,
    safety: 96,
    dramaticActing: 86,
    wrestlingPsychology: 98,
    fatigue: 28,
    playByPlay: 94,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-008',
    name: 'Drew McIntyre',
    age: 38,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'Powerhouse',
    height: 196,
    weight: 120,
    birthDate: '1985-06-06',
    debutDate: '2001-08-10',
    basedInContinent: 'Europe',
    basedInCountry: 'Scotland',
    basedInCity: 'Ayr',
    popularity: {
      'USA': {
        'California': 85,
        'Texas': 82,
        'New York': 87
      },
      'UK': {
        'London': 92,
        'Glasgow': 98,
        'Edinburgh': 97
      },
      'Scotland': {
        'Ayr': 99
      }
    },
    physicalCondition: {
      brain: 93,
      body: 91,
      neck: 89,
      chest: 94,
      legs: 90,
      arms: 92
    },
    brawling: 90,
    technicalWrestling: 82,
    starPower: 89,
    highFlying: 55,
    hardcore: 80,
    safety: 88,
    dramaticActing: 84,
    wrestlingPsychology: 90,
    fatigue: 18,
    playByPlay: 87,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-009',
    name: 'Iyo Sky',
    age: 33,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'High Flyer',
    height: 157,
    weight: 52,
    birthDate: '1990-05-08',
    debutDate: '2007-06-15',
    basedInContinent: 'Asia',
    basedInCountry: 'Japan',
    basedInCity: 'Tokyo',
    popularity: {
      'USA': {
        'California': 84,
        'Texas': 78,
        'New York': 82
      },
      'Japan': {
        'Tokyo': 98,
        'Osaka': 96,
        'Nagoya': 94
      },
      'Mexico': {
        'Mexico City': 80
      }
    },
    physicalCondition: {
      brain: 94,
      body: 90,
      neck: 88,
      chest: 89,
      legs: 91,
      arms: 90
    },
    brawling: 72,
    technicalWrestling: 88,
    starPower: 86,
    highFlying: 97,
    hardcore: 70,
    safety: 92,
    dramaticActing: 85,
    wrestlingPsychology: 91,
    fatigue: 14,
    playByPlay: 88,
    collar: 'Blue Collar',
    profilePicture: null
  },
  {
    id: 'WR-010',
    name: 'Bronson Reed',
    age: 35,
    sexuality: 'Heterosexual',
    workerType: 'Singles',
    status: 'Active',
    workingStyle: 'Super Heavyweight',
    height: 183,
    weight: 159,
    birthDate: '1988-08-18',
    debutDate: '2007-04-20',
    basedInContinent: 'Oceania',
    basedInCountry: 'Australia',
    basedInCity: 'Adelaide',
    popularity: {
      'USA': {
        'California': 76,
        'Texas': 78,
        'New York': 74
      },
      'Australia': {
        'Adelaide': 92,
        'Sydney': 88,
        'Melbourne': 86
      }
    },
    physicalCondition: {
      brain: 92,
      body: 88,
      neck: 86,
      chest: 90,
      legs: 85,
      arms: 89
    },
    brawling: 88,
    technicalWrestling: 70,
    starPower: 78,
    highFlying: 72,
    hardcore: 85,
    safety: 82,
    dramaticActing: 75,
    wrestlingPsychology: 80,
    fatigue: 22,
    playByPlay: 76,
    collar: 'Blue Collar',
    profilePicture: null
  }
];

/**
 * Function to initialize sample data in WrestlerManager
 */
function loadSampleData(wrestlerManager) {
  wrestlerManager.clearAll();
  wrestlerManager.importWrestlers(sampleWrestlers);
  console.log(`Loaded ${sampleWrestlers.length} sample wrestlers`);
  return wrestlerManager;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sampleWrestlers, loadSampleData };
}
