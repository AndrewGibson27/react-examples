import React from 'react';

import { AuthContext } from './Example';

export default () => (
  <AuthContext.Consumer>
    {
      isLoggedIn => (
        isLoggedIn ?
        <p style={style}>Welcome back!</p> :
        <p style={style}>Please log in</p>
      )
    }
  </AuthContext.Consumer>
);

const style = { color: 'red' };
