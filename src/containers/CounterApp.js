import { CounterApp } from '../components/CounterApp';
import { increment, decrement } from '../actions/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return ({
    count: state.count,
  });
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      {
        handleIncrement: increment,
        handleDecrement: decrement,
      }, 
    dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);