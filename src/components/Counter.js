import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const counter = useSelector((state) => state.count.counter);
  console.log(counter)
  const show = useSelector((state) => state.count.showCounter);
  console.log(show)
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({
    //   type: "increment",
    // });
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    // dispatch({
    //   type: "decrement",
    // });
    dispatch(counterActions.decrement())
  };

  const increaseHandler = () => {
    // dispatch({
    //   type: "increase",
    //   payload: 5,
    // });
    dispatch(counterActions.increase(5)) // type: SOME_UNIQUE_IDENTIFIER, payload: some value
  };

  const toggleCounterHandler = () => {
    // dispatch({
    //   type: "toggle",
    // });
    dispatch(counterActions.toggleCounter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
