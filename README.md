# Pro Wrestling Simulator

A comprehensive pro wrestling simulator game inspired by Football Manager, featuring detailed wrestler management with extensive attributes and statistics.

## Features

### Comprehensive Wrestler Attributes

Each wrestler in the simulator has the following attributes:

#### Basic Information
- **ID Number**: Unique identifier for each wrestler
- **Name**: Wrestler's ring name
- **Age**: Current age (calculated from birth date)
- **Sexuality**: Personal orientation
- **Worker Type**: Singles, Tag Team, Manager, etc.
- **Status**: Active, Injured, Retired, etc.
- **Working Style**: Powerhouse, High Flyer, Technical, All-Rounder, etc.

#### Physical Attributes
- **Height**: In centimeters
- **Weight**: In kilograms
- **Birth Date**: Date of birth
- **Debut Date**: Professional wrestling debut date

#### Location
- **Based in Continent**: Home continent
- **Based in Country**: Home country
- **Based in City**: Home city

#### Popularity System
- **By Country and State/Region**: Track popularity in different geographical locations
- Dynamic rating from 0-100 for each region

#### Physical Condition (1-100 scale)
- **Brain**: Head/concussion condition
- **Body**: Overall body condition
- **Neck**: Neck health
- **Chest**: Torso/chest health
- **Legs**: Leg condition
- **Arms**: Arm condition

#### Wrestling Skills (1-100 scale)
- **Brawling**: Street fighting and brawling ability
- **Technical Wrestling**: Mat wrestling and submission skills
- **Star Power**: Charisma and crowd appeal
- **High Flying**: Aerial and acrobatic moves
- **Hardcore**: Extreme/hardcore wrestling ability
- **Safety**: Ability to work safely and protect opponents
- **Dramatic Acting**: Promo and storytelling ability
- **Wrestling Psychology**: In-ring storytelling and match structure
- **Play By Play**: Commentary quality/ability

#### Game Mechanics
- **Fatigue**: Current tiredness level (0-100)
- **Collar**: Blue Collar, White Collar, etc.
- **Profile Picture**: Visual representation (URL or base64)

## File Structure

```
Spinnerspinner/
├── index.html          # Main application interface
├── wrestler-model.js   # Wrestler class and manager system
├── sample-data.js      # Sample wrestler data
├── sp                  # Original spinner wheel (legacy)
└── README.md          # This file
```

## Getting Started

### Opening the Application

1. Open `index.html` in a modern web browser
2. Click "Load Sample Data" to populate the roster with example wrestlers
3. Explore the different tabs:
   - **Roster**: View all wrestlers in a grid
   - **Wrestler Details**: View comprehensive stats for individual wrestlers
   - **Statistics**: View roster-wide statistics and top performers
   - **Spinner**: Random wrestler selector wheel

### Using the System

#### Viewing Wrestlers
- Browse the roster in the **Roster** tab
- Use the search box to find specific wrestlers
- Click on any wrestler card to view detailed information

#### Wrestler Details
- View all attributes, skills, and physical condition
- See popularity breakdown by region
- Check overall ratings and experience

#### Statistics
- View roster-wide statistics
- See top 10 wrestlers by overall rating
- Track average ratings, ages, and conditions

#### Random Selection
- Use the **Spinner** tab to randomly select a wrestler
- Great for booking decisions or match selections

## Data Management

### Exporting Data
Click "Export Data" to download your roster as a JSON file for backup or sharing.

### Clearing Data
Use "Clear All" to remove all wrestlers from the system (stored in browser's localStorage).

### Adding Custom Wrestlers
Developers can add wrestlers programmatically using the `WrestlerManager` API:

```javascript
const manager = new WrestlerManager();
manager.addWrestler({
  name: 'Custom Wrestler',
  age: 30,
  workingStyle: 'Technical',
  brawling: 75,
  technicalWrestling: 90,
  // ... other attributes
});
```

## Data Model

### Wrestler Class

The `Wrestler` class includes methods for:
- `getOverallRating()`: Calculate average of all wrestling attributes
- `getPhysicalConditionRating()`: Calculate average physical condition
- `calculateAge()`: Get current age from birth date
- `getYearsOfExperience()`: Calculate time since debut
- `getPopularityIn(country, state)`: Get popularity in specific location
- `setPopularityIn(country, state, value)`: Update regional popularity
- `damageBodyPart(part, amount)`: Reduce condition of body part
- `healBodyPart(part, amount)`: Improve condition of body part
- `isInjured()`: Check if any body part is below 50% condition
- `rest(amount)`: Reduce fatigue
- `addFatigue(amount)`: Increase fatigue after matches

### WrestlerManager Class

The `WrestlerManager` class provides:
- `addWrestler(data)`: Add new wrestler
- `getWrestlerById(id)`: Find wrestler by ID
- `getWrestlerByName(name)`: Find wrestler by name
- `updateWrestler(id, updates)`: Modify wrestler data
- `deleteWrestler(id)`: Remove wrestler
- `getAllWrestlers()`: Get complete roster
- `filterWrestlers(criteria)`: Filter by attributes
- `searchWrestlers(query)`: Search by name
- `getWrestlersByLocation(country, city)`: Filter by location
- `getTopWrestlers(limit)`: Get highest rated wrestlers
- `importWrestlers(jsonArray)`: Bulk import
- `exportWrestlers()`: Export all data

## Technical Details

### Technologies Used
- **HTML5**: Structure and layout
- **CSS3**: Styling with gradients and animations
- **Vanilla JavaScript**: Core functionality
- **Canvas API**: Spinner wheel visualization
- **localStorage**: Client-side data persistence

### Browser Compatibility
Works in all modern browsers that support:
- ES6 JavaScript
- HTML5 Canvas
- localStorage API
- CSS Grid and Flexbox

## Sample Data

The system includes 10 sample wrestlers demonstrating the data model:
1. Roman Reigns
2. Seth Rollins
3. Cody Rhodes
4. Rey Mysterio
5. Gunther
6. Rhea Ripley
7. AJ Styles
8. Drew McIntyre
9. Iyo Sky
10. Bronson Reed

Each sample wrestler has complete attributes including regional popularity, physical condition, and wrestling skills.

## Future Enhancements

Potential features for expansion:
- Match simulation engine
- Injury system with recovery times
- Training and attribute improvement
- Promotion management
- Show booking and card creation
- Financial management
- Contract system
- Faction/stable management
- Championship tracking
- Historical statistics and career tracking
- Save/load game states
- Multiplayer/competitive modes

## Development

### Adding New Features

The modular structure makes it easy to extend:

1. **wrestler-model.js**: Add new attributes or methods to the Wrestler class
2. **sample-data.js**: Create more sample wrestlers
3. **index.html**: Add new UI components and visualizations

### Data Persistence

Currently uses localStorage. For production, consider:
- Backend API with database
- Cloud save functionality
- Import/export to various formats

## License

This project is for educational and entertainment purposes.

## Credits

Inspired by Football Manager and other sports simulation games.
