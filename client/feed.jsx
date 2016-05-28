import React from 'react';
import ReactDOM from 'react-dom'; 
import {Arc} from './arc'

// expecting to be passed an array of urls in props

var Feed = (props) => (
  <div className="feed">
    <Arc photoArc={props.arcs} />
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Feed.propTypes = {
  arcs: React.PropTypes.array.isRequired
};

export {Feed};