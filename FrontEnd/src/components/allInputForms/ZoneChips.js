import React, { Component } from 'react';
import Chips, { Chip } from 'react-chips'

class ZoneChips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chips: [],
      zone: [ "Georgia", "Germany", "Greece", "Hungary"]
    }
  }

  onChange = chips => {
    this.setState({ chips });
  }

  render() {

    return (
        
      <div style={ { width: '100%', color: 'blue'}}>

              <Chips
              placeholder="Enter Here"
              value={this.state.chips}
              onChange={this.onChange}
              suggestions={this.state.zone}

              />
      </div>
    );
  }
}

export default ZoneChips;