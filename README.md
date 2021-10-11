# Coding Test

## Introduction

This is a front end development test for testing your skills with JavaScript, React, React Native and Redux. The project is setup with React Native's official template with some added dependencies, mainly:

- react-navigation
- redux-toolkit
- axios
- styled-components

## Setup

### Prerequisites

- Node v12 or Node v14
- Yarn v1
- Watchman
- Cocoapods
- Android Studio for Android debugging
- XCode for iOS debugging

Follow the instructions on https://reactnative.dev/docs/environment-setup to setup your environment.

### Dependencies

Install node modules using Yarn

```sh
yarn
```

Install pods using Cocoapods

```sh
cd ios
pod install
```

## Debugging

### Android

```sh
npx react-native run-android
```

### iOS

```sh
npx react-native run-ios
```

## Project structure

We work with "features", meaning specific features have their own directory inside `./src/features`. This is where the feature's Redux state/reducer, feature-specific components and screens reside.

API endpoints reside in `./src/api` and use the `Request.js` for network requests, which in turn uses Axios.

Screens are connected inside `./src/app/App.js`.

Redux store is connected inside `./src/app/store.js`. This is where all reducers are combined.

There are some initial features created to give you an idea of our usual workflow. The `./src/features/counter` feature is from redux-toolkit's getting started guide and reflects the way we work with Redux. This feature serves as an example feature.

## API Endpoints

We are using a mocking API with data copied from our beta environment. The mocked endpoints include hardcoded IDs but in a real application we would provide these IDs to the endpoints. There are two endpoints available:

- ./src/api/menuTrees.js
  - get.byId - GET the menuTree details (menu tree items)
- ./src/api/outlets.js
  - get.byId - GET outlet details (restaurant info, not required to use)

## The task

Create a menu from the response from the menuTrees endpoint. When pressing product items in the menu they should be added to a check.

The check is client-side only and doesn't need to call any endpoints. The check should list the name of the products added as well as quantity.

The menu should support viewing its sub-menus. The menu should be rendered inside the drawer (the drawer is found in `./src/app/App.js`).

The app should work on iOS iPhones and Android phones. Tablets are not required. If you don't have access to a Mac with XCode an Android-only version is OK.

You may design the appearance how you like.

What our menu (and check) looks like in our app on mobile:

![Screenshot 01](docs/screenshot01.PNG 'Screenshot 01')

![Screenshot 02](docs/screenshot02.PNG 'Screenshot 02')

![Screenshot 03](docs/screenshot03.PNG 'Screenshot 03')

![GIF](docs/video.gif 'GIF')
