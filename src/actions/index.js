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

    // Create new counter & add to Firestore
    const timestamp = firebase.firestore.Timestamp.now().seconds;
    const newCounter = {
      value: 0,
      created: timestamp,
    };
    countersRef.add(newCounter)

    // Dispatch createCounterSuccess action creator to update local store
    .then(function(docRef) {            
      dispatch(createCounterSuccess({
        [docRef.id]: newCounter,
      }))
    })

    // All done. 
    .then(function() {
      console.log('Counter created!');
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

    // Read data from Firestore
    countersRef.get()
    .then(function(querySnapshot) {
      let counters = {};
      querySnapshot.forEach(function(doc) {
          counters = {
            ...counters,
            [doc.id]: doc.data(),
          }
      });
      // Then dispatch (fetchCountersSuccess)
      dispatch(fetchCountersSuccess(counters));
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  };

  return fetchCountersDispatchFunction;
};

const DELETE_COUNTER = 'DELETE_COUNTER';
export const deleteCounterRequest = () => {
  return({
    type: DELETE_COUNTER,
  });
};

export const deleteCounterSuccess = (response) => {
  return({
    type: DELETE_COUNTER,
    status:'success',
    response: response,
  });
};

export const deleteCounter = (id) => {
  const deleteCounterDispatchFunction = (dispatch) => {
    // Dispatch deleteCounterRequest
    console.log('Deleting counter: ', id);
    dispatch(deleteCounterRequest());

    // Delete counter from Firestore
    countersRef.doc(id).delete()
    .then(function() {
      countersRef.get().then(function(querySnapshot) {
        let counters = {};
        querySnapshot.forEach(function(doc) {
            counters = {
              ...counters,
              [doc.id]: doc.data(),
            }
        });
        dispatch(deleteCounterSuccess(counters));
      })
    })    
    .catch(function(error) {
        console.error("Error removing document: ", error);
    });    
  }
  return deleteCounterDispatchFunction;
};

const INCREMENT = 'INCREMENT';
export const incrementRequest = () => {
  return({
    type: INCREMENT,
  });
};

export const incrementSuccess = (response) => {
  return({
    type: INCREMENT,
    status: 'success',
    response: response,
  });
}

export const increment = (id) => {  
  const incrementDispatchFunction = (dispatch) => {
    dispatch(incrementRequest());

    countersRef.doc(id).get()
    .then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          console.log(doc.data().value);
          countersRef.doc(id).update({
            value: doc.data().value + 1,
          })
          .then(function() {
            countersRef.get().then(function(querySnapshot) {
              let counters = {};
              querySnapshot.forEach(function(doc) {
                  counters = {
                    ...counters,
                    [doc.id]: doc.data(),
                  }
              });
              dispatch(incrementSuccess(counters));
            })
          })    
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  };

  return incrementDispatchFunction;
}

const DECREMENT = 'DECREMENT';

export const decrementRequest = () => {
  return({
    type: DECREMENT,
  });
}

export const decrementSuccess = (id) => {
  return({
    type: DECREMENT,
    status: 'success',
    id: id,
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
