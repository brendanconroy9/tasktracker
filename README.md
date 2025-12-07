Gamified Task Tracker — Mobile App (Full example repository)

A complete starter repository for a mobile task-tracking app with gamification and a rewards system. Built with React Native (Expo), Firebase (Auth + Firestore), and a small local state layer. Includes core features, folder structure, example code, and instructions to run and extend.

Highlights

Task management (create/edit/complete/delete tasks)

Gamification: XP, Levels, Streaks, Daily Challenges, Badges

Virtual currency (Coins) + in-app Reward Store

Push/local notifications for reminders and streak maintenance

Offline-first with Firestore local cache

Authentication (Email/password + Google)

Simple analytics events to Firestore

Tech stack

React Native (Expo)

Firebase (Auth, Firestore)

Zustand (lightweight state management)

React Navigation

React Native Paper (UI primitives) — optional

Jest + React Native Testing Library (tests)

Project structure
gamified-task-tracker/
├─ README.md
├─ package.json
├─ app.json
├─ babel.config.js
├─ .eslintrc.js
├─ assets/
├─ src/
│  ├─ App.js
│  ├─ firebase.js
│  ├─ navigation/
│  │  └─ index.js
│  ├─ screens/
│  │  ├─ HomeScreen.js
│  │  ├─ TaskEditorScreen.js
│  │  ├─ RewardsScreen.js
│  │  └─ ProfileScreen.js
│  ├─ components/
│  │  ├─ TaskList.js
│  │  ├─ TaskItem.js
│  │  ├─ GamificationHUD.js
│  │  └─ RewardCard.js
│  ├─ services/
│  │  ├─ tasksService.js
│  │  ├─ gamificationService.js
│  │  └─ notifications.js
│  ├─ store/
│  │  └─ useStore.js
│  └─ utils/
│     └─ dateHelpers.js
└─ tests/
   └─ gamification.test.js
Quick start (local)

Install Expo CLI: npm install -g expo-cli

Clone the repo

cd gamified-task-tracker

npm install

Create a Firebase project and add config to src/firebase.js

expo start
