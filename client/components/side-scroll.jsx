import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

export default class ScrollingHorizontally extends Component {
  render() {

    return (
      <div className='container'>
        <HorizontalScroll>
          <div style={{ 'width': '300em', 'height': '100%', 'backgroundColor': 'purple' }} />
        </HorizontalScroll>
      </div>

    );
  }
}
