import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset ,counters , onDelete , onIncrement } =this.props;
    return (
      <div>
        <button
          onClick={ onReset}
          className="btn btn-primary btn-xl m-2"
        >
          Reset
        </button>
        { counters.map((
          counter //here counter denote as a single counter of other file
        ) => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//2:10:58
