import React from 'react';
import ReactDOM from 'react-dom'; 
import Arc from './arc'

// expecting to be passed an array of urls in props

var Feed = (props) => {
  var sampleData = [{
    thumbnail:"http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg",
    src:"http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg"
  }, {
    thumbnail: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg",
    src: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg"
  }, {
    thumbnail: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2", 
    src: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2" 
  }, {
    thumbnail: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg",
    src: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg"
  }, {
    thumbnail: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg",
    src: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg"
  }];
  return (
    <div>
      <h2 className="page-title">Your Stories</h2>
      <div className="gallery-container">
        <Arc photoArc={sampleData} />
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Feed.propTypes = {
  arcs: React.PropTypes.array.isRequired
};

export default Feed;