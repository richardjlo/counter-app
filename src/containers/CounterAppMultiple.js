import { CounterAppMultiple } from '../components/CounterAppMultiple';
import { addCounter } from '../actions/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/*
 * Turns CounterApp into a container component by calling connect() on it.
 * By calling connect(), we are able to pass the state and event handlers 
 * as props to CounterApp component.
 */

 function mapStateToProps(state) {
  return ({
    countersList: state,
  });
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      {
        addCounter: addCounter,
      }, 
    dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterAppMultiple);