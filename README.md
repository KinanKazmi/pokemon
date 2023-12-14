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
2. As mentioned in the package.json, start:stag and start:prod scripts will pickup relevant env variables from .env.prod and .env.stag (default) files and use them. Its being used in api.ts file.
3. keeping .env files in the repo as well so you can use it (not added in gitIgnore)
4. Theres no input in the app, so keeping the tests to a minimum as well.
5. Adding tests soon.
