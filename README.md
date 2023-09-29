# Todo App
This repository contains a mobile todo application with backend and a database to store the todos.

It was developed using [React Native](https://reactnative.dev) that supports multiple mobile platforms, in addition to [Nest js](http://nestjs.com) which was used as a backend to connect with a mySQL database.

Note that I used [Expo](https://expo.dev/) to simplify app development for beginners (like myself) who are not familiar with React Native.

I developed this project in order to dive into [React Native](https://reactnative.dev/docs/getting-started) after my experience in [React](https://react.dev/learn). I also wanted to create a CRUD backend with [Nest js](http://nestjs.com) with the aid of [TypeORM](https://typeorm.io) as one of the first steps in my back-end journey.

## Getting Started
To run the application localy, you need the following:
- [Node js](https://nodejs.org)
- Mobile device to run the app 
- A local [mySQL](https://www.mysql.com/) server

I used an Android emulator using [Android Studio](https://developer.android.com/studio), in addition to [XAMPP](https://www.apachefriends.org/) for mySQL since I have it installed earlier.

Start by running your database server, then create a `.env` file add your environment variables in `server-nest/.env` as follows
```
DATABASE_USER=<your_username>
DATABASE_PASSWORD=<your_password>
```

`cd` into `server-nest` and run it by doing the following

Using `npm`:
```
cd server-nest
npm install
npm run start
```

Using `yarn`:
```
cd server-nest
yarn install
yarn run start
```

After successfully running the back-end, it's time to run our front-end. 
First we need a mobile device. Refer to [Expo docs](https://docs.expo.dev) to see different options to run the app.

Nonetheless, the way I like to do it is by running an android emulator using [Android Studio](https://developer.android.com/studio).

After starting the Anroid emulator, run the following:

Using `npm`:
```
cd client-react-native
npm install
npm run android
```
Using `yarn`:
```
cd client-react-native
yarn install
yarn run android
```

<!-- You should see the following UI:
<p align="center">
    <img
        src=""
        alt="todo app ui"
    />
</p> -->

### Future Work

- [x] Show/Hide completed todos
- [x] Edit & Delete todos
- [x] State management using useReducer & useContext
- [ ] Assign additional info for todos (tags, date, time, etc.)

## Docs
- [React](https://react.dev/learn)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev)
- [Nest](https://docs.nestjs.com)
- [TypeORM](https://typeorm.io)
- [MySQL](https://www.mysql.com/)