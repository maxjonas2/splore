# Splore App

This is a personal project for creating an event pool website (a place where people can search for events happening near them, or in other areas, based on personal interests). The idea is for the website to be entirely React-based, due to its app-like nature. Since the project is in its early inception, there isn't much relevant code yet, other than a little bit of boilerplate, some base CSS styles (which will be eventually converted into styled components, or CSS in JS) and a few custom hooks for helping with general modularity and reusability.

### useObserver Custom Hook

This is a hook that updates a component's state based on whether a particular element has become visible or come into the viewport. It's built on top of the Intersection Observer API, which has acquired widespread support in all major browsers (with the odd exception).

### useFirebase Custom hook

This is a hook which hides the implementation logic of connecting to and receiving data updates from Firebase Realtime Database. "useFirebase" will automatically update the application's state based on remote changes made to a Firebase Database. This is done through a real-time snapshot update provided by the "onValue" function callback present in the Firebase API.
