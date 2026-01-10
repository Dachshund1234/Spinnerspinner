# Pro Wrestling Simulator - UI Demonstration Guide

## 🌐 Access the Application
Open your browser and go to: **http://localhost:8080/index.html**

---

## 📱 UI Walkthrough

### **LANDING PAGE - Roster Tab (Default View)**

When you first open the application, you'll see:

#### Header Section
```
╔════════════════════════════════════════════════════════╗
║                                                        ║
║          PRO WRESTLING SIMULATOR                       ║
║        Manage your wrestling roster like a pro         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
```
- **Purple gradient background** (from indigo to violet)
- **White text** with professional styling

#### Navigation Tabs
```
┌──────────┬─────────────────┬────────────┬──────────┐
│  ROSTER  │ WRESTLER DETAILS│ STATISTICS │ SPINNER  │
│ (active) │                 │            │          │
└──────────┴─────────────────┴────────────┴──────────┘
```
- Active tab highlighted in purple
- Hover effects on inactive tabs

#### Search and Actions
```
┌────────────────────────────────────────────────┐
│  🔍 Search wrestlers...                        │
└────────────────────────────────────────────────┘

[Load Sample Data] [Export Data] [Clear All]
```

#### Empty State (Before Loading Data)
```
┌────────────────────────────────────────────────┐
│                                                │
│  No wrestlers found.                           │
│  Click "Load Sample Data" to get started.      │
│                                                │
└────────────────────────────────────────────────┘
```

---

### **AFTER CLICKING "LOAD SAMPLE DATA"**

You'll see a grid of wrestler cards:

```
┌───────────────────┬───────────────────┬───────────────────┐
│  ROMAN REIGNS     │  SETH ROLLINS     │  CODY RHODES      │
│                   │                   │                   │
│  Age: 38          │  Age: 37          │  Age: 38          │
│  Style: Powerhouse│  Style: High Flyer│  Style: All-Rounder│
│  Country: USA     │  Country: USA     │  Country: USA     │
│  Status: Active   │  Status: Active   │  Status: Active   │
│                   │                   │                   │
│ Overall Rating: 88│ Overall Rating: 86│ Overall Rating: 89│
│                   │                   │                   │
└───────────────────┴───────────────────┴───────────────────┘

┌───────────────────┬───────────────────┬───────────────────┐
│  REY MYSTERIO     │  GUNTHER          │  RHEA RIPLEY      │
│                   │                   │                   │
│  Age: 49          │  Age: 36          │  Age: 27          │
│  Style: High Flyer│  Style: Strong    │  Style: Powerhouse│
│  Country: USA     │  Country: Austria │  Country: Australia│
│  Status: Active   │  Status: Active   │  Status: Active   │
│                   │                   │                   │
│ Overall Rating: 87│ Overall Rating: 87│ Overall Rating: 87│
│                   │                   │                   │
└───────────────────┴───────────────────┴───────────────────┘
```

**Card Features:**
- ✨ **Hover effect**: Cards lift up with shadow
- 🖱️ **Clickable**: Click any card to view full details
- 📊 **Overall Rating**: Purple gradient box at bottom
- 🎨 **Light gray background** with subtle borders

---

### **WRESTLER DETAILS TAB**

Click any wrestler card to see this detailed view:

```
[← Back to Roster]

╔════════════════════════════════════════════════════════╗
║                    ROMAN REIGNS                        ║
╚════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BASIC INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ ID           │ Age          │ Sexuality    │ Worker Type  │
│ WR-001       │ 38 years     │ Heterosexual │ Singles      │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Status       │ Working Style│ Height       │ Weight       │
│ Active       │ Powerhouse   │ 191 cm       │ 120 kg       │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Experience   │ Location     │ Collar       │ Fatigue      │
│ 13 years     │ Pensacola,USA│ White Collar │ 15%          │
│              │              │              │ ████░░░░░░   │
└──────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHYSICAL CONDITION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Brain        │ Body         │ Neck         │ Chest        │
│ 95/100       │ 92/100       │ 90/100       │ 95/100       │
│ █████████░   │ █████████░   │ █████████    │ █████████░   │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┐
│ Legs         │ Arms         │
│ 93/100       │ 94/100       │
│ █████████░   │ █████████░   │
└──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRESTLING ATTRIBUTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────────────┐
│   Overall Rating         │
│        88/100            │
│    (Purple Large)        │
└──────────────────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Brawling     │ Technical    │ Star Power   │ High Flying  │
│ 88/100       │ 75/100       │ 98/100       │ 45/100       │
│ ████████░    │ ███████░     │ █████████░   │ ████░        │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ Hardcore     │ Safety       │ Dramatic Act │ Psychology   │
│ 70/100       │ 85/100       │ 92/100       │ 95/100       │
│ ███████      │ ████████░    │ █████████    │ █████████░   │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┐
│ Play By Play │
│ 88/100       │
│ ████████░    │
└──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POPULARITY BY REGION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┬──────────────┬──────────────┬──────────────┐
│ USA-California│ USA-Texas    │ USA-Florida  │ USA-New York │
│ 95/100       │ 92/100       │ 97/100       │ 94/100       │
│ █████████░   │ █████████    │ █████████░   │ █████████░   │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┐
│ UK-London    │ Japan-Tokyo  │
│ 85/100       │ 78/100       │
│ ████████░    │ ███████░     │
└──────────────┴──────────────┘
```

**Features:**
- 📊 **Progress bars** for all ratings (purple gradient)
- 🎨 **Color-coded**: High values = fuller bars
- 📍 **Regional breakdown**: See popularity in multiple locations
- 🔙 **Back button**: Return to roster

---

### **STATISTICS TAB**

```
╔════════════════════════════════════════════════════════╗
║               ROSTER STATISTICS                        ║
╚════════════════════════════════════════════════════════╝

┌──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│      10      │       10     │      87      │      38      │     90%      │
│              │              │              │              │              │
│   Total      │   Active     │   Average    │   Average    │  Avg Physical│
│  Wrestlers   │  Wrestlers   │   Rating     │     Age      │  Condition   │
└──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOP 10 WRESTLERS BY OVERALL RATING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌───────────────────┬───────────────────┬───────────────────┐
│  #1 CODY RHODES   │  #2 ROMAN REIGNS  │  #3 SETH ROLLINS  │
│                   │                   │                   │
│  Rating: 89       │  Rating: 88       │  Rating: 86       │
│  Style:All-Rounder│  Style: Powerhouse│  Style: High Flyer│
└───────────────────┴───────────────────┴───────────────────┘

... (continues with rankings 4-10)
```

**Features:**
- 📈 **5 Key Statistics**: Big numbers with labels
- 🏆 **Top 10 Ranking**: Best performers sorted by rating
- 🎯 **Clean cards**: Same hover effects as roster

---

### **SPINNER TAB**

```
╔════════════════════════════════════════════════════════╗
║          RANDOM WRESTLER SELECTOR                      ║
╚════════════════════════════════════════════════════════╝

                    ◢◣
                   ◢  ◣  ← Pointer
                  ◢    ◣
                 ◢      ◣

        ╔════════════════════════╗
        ║                        ║
        ║    🎡 SPINNER WHEEL    ║
        ║                        ║
        ║   Colorful sections    ║
        ║   (Pink & Blue)        ║
        ║                        ║
        ║   Each section has     ║
        ║   a wrestler name      ║
        ║                        ║
        ╚════════════════════════╝

        [  Spin the Wheel!  ]

        Selected: (Result appears here after spin)
```

**Features:**
- 🎡 **Animated wheel**: Spins for 4 seconds
- 🎨 **Alternating colors**: Pink (#fbb) and Blue (#bdf)
- 🎯 **All wrestlers included**: Each gets a section
- ✨ **Smooth animation**: Decelerating spin effect
- 🏆 **Result display**: Shows selected wrestler with their rating

---

## 🎨 Color Scheme

- **Primary**: Purple gradient (#667eea → #764ba2)
- **Background**: White cards on gradient background
- **Accents**: Light gray (#f5f5f5, #e0e0e0)
- **Text**: Dark (#333) on light backgrounds
- **Progress bars**: Purple gradient
- **Hover**: Subtle lift with shadow

---

## 📱 Responsive Design

- **Grid layout**: Auto-adjusts to screen size
- **Cards**: Minimum 300px, fills available space
- **Mobile-friendly**: Works on all screen sizes

---

## 🎮 Interactive Features

1. **Search**: Type in search box to filter wrestlers
2. **Click cards**: View detailed wrestler profiles
3. **Hover effects**: Cards animate on mouse over
4. **Smooth animations**: Progress bars and transitions
5. **Spinning wheel**: Full canvas animation

---

## 💾 Data Management

From the Roster tab:
- **Load Sample Data**: Populates 10 wrestlers
- **Export Data**: Downloads JSON file
- **Clear All**: Removes all wrestlers (with confirmation)

---

## 🚀 Try These Actions

1. Click **"Load Sample Data"** - See the roster populate
2. Use **Search box** - Type "Roman" to filter
3. Click **Roman Reigns card** - See full profile
4. Switch to **Statistics tab** - View analytics
5. Go to **Spinner tab** - Click "Spin the Wheel!"
6. **Export Data** - Get JSON backup file

---

Enjoy exploring your Pro Wrestling Simulator! 🤼‍♂️✨
