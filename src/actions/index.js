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
    
    const timestamp = firebase.firestore.Timestamp.now().seconds;
    const timestampStr = timestamp.toString();
    
    countersRef.doc(timestampStr).set({
      value: 0,
      id: timestamp,
    })
    .then(function() {
      console.log('Counter created!');
      // TODO: Send document id to addCounter action creator
      // dispatch( createCounterSuccess(id) );
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

export const fetchCounters = () => {
  const fetchCountersDispatchFunction = (dispatch) => {
    // Toggle isFetching flag on (fetchCountersRequest)
    dispatch(fetchCountersRequest());

    // // Read data from Firestore
    // countersRef.get().then(function(querySnapshot) {
    //   let counters = {};
    //   querySnapshot.forEach(function(doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       // TODO: For each counter, add object to counters object.
    //       console.log(doc.id, " => ", doc.data());
    //   });
    // });

    const docRef = countersRef.doc('5oIt0YvjcNnv8in2mNGN');
    docRef.get()
      .then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            const counter = {
              '5oIt0YvjcNnv8in2mNGN': doc.data,
            };
            dispatch(fetchCountersSuccess(counter));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });


    // Then dispatch (fetchCountersSuccess)

    // Catch error
  };

  return fetchCountersDispatchFunction;
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
