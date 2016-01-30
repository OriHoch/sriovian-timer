/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './ProgressBar.scss';
import withStyles from '../../../decorators/withStyles';

@withStyles(s)
class ProgressBar extends Component {

  render() {
    return (
      <div style={{backgroundColor:'black', padding:'5px'}}>
        <div style={{width: this.props.barwidth+'%', backgroundColor: 'white', height: '20px'}}></div>
      </div>
    );
  }

}

export default ProgressBar;
