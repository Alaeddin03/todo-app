# Todo Client Side
This app was developed using [Expo](https://expo.dev/), which is an open-source platform for simplifying app development using [React Native](https://reactnative.dev).

## Getting Started
Install node modules using the following command:
```
npm install
```
Then, simply run expo:
```
npm start
```

Refer to [Expo docs]() to see different ways to run the app on various platforms.

Nonetheless, the way I like to do it is by running an android emulator using [Android Studio](https://developer.android.com/studio), then typing `a` in the terminal after running expo.

An alternative is running this command after starting the emulator:
```
npm run android
```

Please note that the API call is done locally to the endpoint provided by [this repository](https://github.com/Alaeddin03/todo-api) which is also implemented by me. Please feel free to check it out. 😄 

## Features
- Show/Hide todos
- Edit & Delete todos
- State management using useReducer & useContext

Although it's a simple todo app, I applied some good practices, such as state management. They are a bit of over-engineering for this application, but I wanted to get familiar with them so that I know how to apply them on large scale projects.
## Docs
- [React](https://react.dev/learn)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev)