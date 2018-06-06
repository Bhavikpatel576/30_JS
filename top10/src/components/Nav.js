import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          {/* <li><Link>Weather</Link></li>
          <li><Link>Sports</Link></li>
          <li><Link>Business</Link></li>
          <li><Link>News</Link></li> */}
        </ul>
      </div>
    );
  }
}

export default Nav;
