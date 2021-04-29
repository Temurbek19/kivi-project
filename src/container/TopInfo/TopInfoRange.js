import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 100, max: 600 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={1000}
        minValue={0}
        step={100}
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
      />
    );
  }
}

export default Range;