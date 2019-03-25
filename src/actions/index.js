/*
 * Action Creators - addCounter, increment, decrement
 */

import firebase from "firebase";
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const countersRef = db.collection("counters");

export const CREATE_COUNTER = 'CREATE_COUNTER';
export const FETCH_COUNTERS = 'FETCH_COUNTERS';

export const createCounterRequest = () => {
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

export const createCounterFailure = () => {
  return({
    type: CREATE_COUNTER,
    status: 'error',
    error: 'Oops something went wrong',
  });
};

const createCounterFS = async () => {
    const timestamp = firebase.firestore.Timestamp.now().seconds;
    // Create new counter & add to Firestore
    let counter = {
      value: 0,
      created: timestamp,
    };

  const newCounter = await countersRef.add(counter);
  const counterId = newCounter.id;

  // Set counter key to counter id
  const setCounterIdFS = () => {
    countersRef.doc(counterId).update({
      id: counterId,
    });
  };

  // Add counterId to local counter object
  const setCounterIdLocal = () => {
    counter.id = counterId;
    return counter;
  }

  const result = await Promise.all([setCounterIdFS(), setCounterIdLocal()]);
  return result[1];
};

export const createCounter = () => {
  const createCounterDispatchFunction = (dispatch) => {
    // Toggle isFetching flag ON.
    dispatch(createCounterRequest());

    createCounterFS().then((counter) => {
      dispatch(createCounterSuccess(counter));
    });
  };
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

export const fetchCountersFailure = () => {
  return({
    type: FETCH_COUNTERS,
    status: 'error',
    error: 'Oops something went wrong',
  });
};

export const fetchCounters = () => {
  const fetchCountersDispatchFunction = (dispatch) => {
    // Toggle isFetching flag on (fetchCountersRequest)
    dispatch(fetchCountersRequest());

    countersRef.orderBy('created').get().then(function(querySnapshot) {
      let counters = [];
      querySnapshot.forEach(function(doc) {
        counters.push(doc.data());
      });
      dispatch(fetchCountersSuccess(counters));
    }, function(error) {
      console.error("Error fetching counters: ", error);
      dispatch(fetchCountersFailure());
    });

    // countersRef.orderBy('created').onSnapshot(function(querySnapshot) {
    //   let counters = [];
    //   querySnapshot.forEach(function(doc) {
    //     counters.push(doc.data());
    //   });
    //   dispatch(fetchCountersSuccess(counters));
    // }, function(error) {
    //   console.error("Error fetching counters: ", error);
    //   dispatch(fetchCountersFailure());
    // });
  };

  return fetchCountersDispatchFunction;
};

const DELETE_COUNTER = 'DELETE_COUNTER';
export const deleteCounterRequest = () => {
  return({
    type: DELETE_COUNTER,
  });
};

export const deleteCounterSuccess = (id) => {
  return({
    type: DELETE_COUNTER,
    status:'success',
    id: id,
  });
};

export const deleteCounterFailure = () => {
  return({
    type: DELETE_COUNTER,
    status: 'error',
    error: 'Oops something went wrong',
  });
};

export const deleteCounter = (id) => {
  const deleteCounterDispatchFunction = (dispatch) => {
    // Dispatch deleteCounterRequest
    dispatch(deleteCounterRequest());

    // Delete counter from Firestore
    countersRef.doc(id).delete().then(function() {
      console.log('deleted counter');
      dispatch(deleteCounterSuccess(id));
    })
    .catch(function(error) {
        console.error("Error removing document: ", error);
        dispatch(deleteCounterFailure());
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

export const incrementSuccess = (counter) => {
  return({
    type: INCREMENT,
    status: 'success',
    response: counter,
  });
}

export const incrementFailure = () => {
  return({
    type: INCREMENT,
    status: 'error',
    error: 'Oops something went wrong',
  });
};

const updateCounterFS = async (id, type) => {
  const doc = await countersRef.doc(id).get();
  if(doc.exists) {
    let newValue;
    if(type === 'INCREMENT') {
      newValue = doc.data().value + 1;
    } else if(type === 'DECREMENT') {
      newValue = doc.data().value - 1;
    }
    
    const update = countersRef.doc(id).update({
      value: newValue,
    });

    const counter = {
        ...doc.data(),
        value: newValue,
        id: id,
    }    

    const result = await Promise.all([update, counter]);
    return result[1];

  } else {
    console.log("No such document");    
  };
};

export const increment = (id) => {
  const incrementDispatchFunction = (dispatch) => {
    dispatch(incrementRequest());

    const INCREMENT = 'INCREMENT';
    updateCounterFS(id, INCREMENT).then( (counter) => {
      dispatch(incrementSuccess(counter));
    })
    .catch( (error) => {
      console.log("Error getting document:", error);
      dispatch(incrementFailure());
    });
  }

  return incrementDispatchFunction;
};

const DECREMENT = 'DECREMENT';

export const decrementRequest = () => {
  return({
    type: DECREMENT,
  });
}

export const decrementSuccess = (counter) => {
  return({
    type: DECREMENT,
    status: 'success',
    response: counter,
  });
};

export const decrementFailure = () => {
  return({
    type: DECREMENT,
    status: 'error',
    error: 'Oops something went wrong',
  });
};

export const decrement = (id) => {
  const decrementDispatchFunction = (dispatch) => {
    dispatch(decrementRequest());

    const DECREMENT = 'DECREMENT';
    updateCounterFS(id, DECREMENT).then((counter) => {
      dispatch(decrementSuccess(counter));
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        dispatch(decrementFailure());
    });
  };

  return decrementDispatchFunction;
};