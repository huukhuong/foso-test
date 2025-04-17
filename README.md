# FOSO TEST

## Table of Contents
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [How to Add Custom Colors](#how-to-add-custom-colors)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Technology Stack
- React Native: 0.79.1
- React: 19.0.0
- TypeScript
- NativeWind (Tailwind CSS for React Native)
- React Navigation
- Reanimated for animations
- Other UI libraries (SVG, Linear Gradient, Modal, etc.)

## Prerequisites
- Node.js >=18
- React Native development environment set up
- Yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/huukhuong/foso-test
cd foso_test
```

2. Install dependencies:
```bash
yarn
```

3. For iOS, install CocoaPods:
```bash
cd ios
pod install
cd ..
```

## Running the Application

### Start Metro Bundler
```bash
yarn start
```

### Run on Android
```bash
yarn android
```

### Run on iOS
```bash
yarn ios
```

## Available Scripts
- `yarn start` - Start the Metro Bundler
- `yarn android` - Run on Android emulator/device
- `yarn ios` - Run on iOS simulator/device
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn color` - Generate color schemes (custom script)

## How to Add Custom Colors

The project uses a custom color system that integrates with Tailwind CSS. Follow these steps to add or modify colors:

1. Open the file `src/theme/colors.ts`

2. Add your custom color to the `Color` interface:
```typescript
interface Color extends DefaultColors {
  // ... existing colors
  yourNewColor: string;
}
```

3. Add the color value to the colors object:
```typescript
const colors: Color = {
  ...tailColors,
  // ... existing colors
  yourNewColor: '#HEX_CODE',
};
```

4. Generate the color configuration by running:
```bash
yarn color
```

5. Use your custom color in components with Tailwind CSS classes:
```tsx
<View className="bg-default-yourNewColor">
  {/* Your component content */}
</View>
```

Note: The `yarn color` command compiles the TypeScript color definitions into JavaScript that can be used by Tailwind CSS. This command runs automatically before starting the application with `yarn start`.

## Project Structure
```
foso_test/
├── src/                     # Source files
│   ├── assets/              # Images, fonts, and other static files
│   ├── components/          # Reusable UI components
│   ├── constants/           # Application constants
│   ├── hooks/               # Custom React hooks
│   ├── navigation/          # Navigation configuration
│   ├── screens/             # Application screens
│   ├── services/            # API services and external integrations
│   ├── store/               # State management
│   ├── theme/               # Theming and styling
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── ios/                     # iOS native code
├── android/                 # Android native code
├── .tailwind/               # Tailwind configuration
├── scripts/                 # Custom scripts
├── __tests__/               # Test files
├── App.tsx                  # Main application component
├── index.js                 # Entry point
├── tailwind.config.js       # Tailwind CSS configuration
├── global.css               # Global styles
├── metro.config.js          # Metro bundler configuration
├── babel.config.js          # Babel configuration
└── tsconfig.json            # TypeScript configuration
```