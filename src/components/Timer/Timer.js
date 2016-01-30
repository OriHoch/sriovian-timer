/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './Timer.scss';
import withStyles from '../../decorators/withStyles';
import ProgressBar from './ProgressBar';

@withStyles(s)
class Timer extends Component {

  constructor() {
    super();
    this.startms = (new Date()).getTime();
    this.total = 100*1000;
  }

  componentDidMount() {
    this.timer = setInterval(() => {this.tick()}, 50);
  }

  tick() {
    this.setState({
      ms: (new Date()).getTime() - this.startms
    });
  }

  state = {
    ms: 0
  };

  render() {
    let barWidth = (this.state.ms / this.total)*100;
    return (
      <div>
        <h1>SrIoViAN Timer</h1>
        <ProgressBar barwidth={barWidth}></ProgressBar>
        <p>{this.state.ms}</p>
      </div>
    );
  }

}

export default Timer;
