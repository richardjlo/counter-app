/*
 * Action Creators - addCounter, increment, decrement
 */

import firebase from "firebase";

var config = {
  apiKey: "AIzaSyB1zMXq5j4DzjntJNyajFgaoM90t3sFXcY",
  authDomain: "counter-app-d343f.firebaseapp.com",
  databaseURL: "https://counter-app-d343f.firebaseio.com",
  projectId: "counter-app-d343f",
  storageBucket: "counter-app-d343f.appspot.com",
  messagingSenderId: "451958929152"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const countersRef = db.collection("counters");

export const CREATE_COUNTER = 'CREATE_COUNTER';
export const FETCH_COUNTERS = 'FETCH_COUNTERS';

export const createCounterRequest = () => {
  console.log("Sending create counter request...")
  return({
    type: CREATE_COUNTER,
  });
};

export const createCounterSuccess = (response) => {
  return({
    type: CREATE_COUNTER,
    status: 'success',
    response: response,
  });
};

export const createCounter = () => {
  const createCounterDispatchFunction = (dispatch) => {
    // Toggle isFetching flag ON.
    dispatch(createCounterRequest());  
    
    // Add a new document in collection "counters"
    countersRef.add({
      value: 0,
      created: firebase.firestore.Timestamp.now().seconds,
    })
    .then(function(docRef) {
      console.log("Counter created! Document written with ID: ", docRef.id);
      // TODO: Send document id to addCounter action creator
      dispatch( createCounterSuccess(docRef.id) );
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });    
  }

  return createCounterDispatchFunction;
};

export const fetchCountersRequest = () => {
  return({
    type: FETCH_COUNTERS,
  });
};

export const fetchCountersSuccess = (response) => {
  return({
    type: FETCH_COUNTERS,
    status: 'success',
    response: response,
  });
};
// export const addCounter = () => {
//   return({
//     type: 'ADD_COUNTER',
//   });  
// };

// export const deleteCounter = (i) => {
//   return({
//     index: i,
//     type: 'DELETE_COUNTER',
//   });
// };

// export const increment = (i) => {
//   return({
//     index: i,
//     type: 'INCREMENT',
//   });  
// };

// export const asyncIncrement = (i) => {
//   return dispatch => {
//     setTimeout(() => {
//       // Yay! Can invoke sync or async actions with `dispatch`
//       dispatch(increment(i));
//     }, 1000);
//   };
// };

// export const decrement = (i) => {
//   return({
//     index: i,
//     type: 'DECREMENT',
//   });  
// };
