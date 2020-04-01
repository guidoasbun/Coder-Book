import React, { Component } from 'react';

import AceEditor from 'react-ace';


import 'brace/mode/javascript'
import 'brace/theme/monokai'

export default class Main extends Component {
  render() {
    return <div >
      <AceEditor mode="javascript" theme="monokai" />
    </div>;
  }
}