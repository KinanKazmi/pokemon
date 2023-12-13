# Getting Started

>**Note**: After cloning the project, make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Installing dependencies

```bash
# using npm
npm install

# extra step for ios
npx pod install
```

## Step 2: Start the bundler

```bash
# using npm
npx react-native start
```

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

### Project details

1. Since the styling wasn't mentioned in the task document, I've kept the styling to a minimum.
2. The task mentioned "...the start script should be configurable to start the application against the specified BASE API URLs."
That can be done by using the dot. env and adding the url path to the package.json start script (and allowed in info.plist for ios) but that doesn't make sense in the case of a react-native mobile application, since you're shipping an application with fixed url paths.
So I've just mentioned how it can be done.
3. Theres no input in the app, so keeping the tests to a minimum as well.
