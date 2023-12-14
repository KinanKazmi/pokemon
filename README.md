# Getting Started

>**Note**: After cloning the project, make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Installing dependencies

```bash
# using npm
npm install
```

## Step 2: Start the bundler

```bash
# Normal/ with-Staging APIs
npm run start
npm run start:stag

# Production APIs
npm run start:prod
```

### For Android

```bash
npm run android
```

### For iOS

```bash
npm run ios
```

### Project details

1. Since the styling wasn't mentioned in the task document, I've kept the styling to a minimum.
2. As mentioned in the package.json, start:stag and start:prod scripts will pickup relevant env variables from .env.prod and .env.stag (default) files and use them. Its being used in api.ts file.
3. Keeping .env files in the repo as well so you can use it (not added in gitIgnore)
4. Theres no input in the app, so keeping the tests to a minimum as well (excluding typescript, to keep it clean).
5. use npm test
```bash
# For all files within the __test__ folder
npm test
# For individual files within the __test__ folder (npm test <filename>)

npm test Main.test
npm test Details.test
```
6. For persistent storage, I used react-native-mmkv library which has encription support as well. It wasn't clear how the data was to be stored and used locally so I just added it to Main.tsx file in the useEffect for now. Its being hosted and exported from the file localstore.ts.