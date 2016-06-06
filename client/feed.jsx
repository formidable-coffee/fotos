import React from 'react';
import ReactDOM from 'react-dom'; 
import Arc from './arc';
import $ from 'jquery'; 


// expecting to be passed an array of urls in props


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcs: [] 
    }
    // this.componentDidMount.bind(this);
    // this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    console.log(fbId);
    $.get('/dashboard', {user_id: fbId}, function(data) {
      console.log("Data from db =>", data);
      this.setState({arcs:data});
      console.log('state is: ', this.state.arcs);
    }.bind(this));
  }

  render() {
    var sampleData = [
      [{
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
      }],
      [{
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
      }],
      [{
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
      }],
      [{
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
      }]
    ];
    return (
      <div>
        <h2 className="page-title">Your past stories</h2>
        <div className="gallery-container">
          {sampleData.map((arc) => {
            // console.log(arc);
            return (
            <Arc photoArc={arc} />
            );} 
          )}
        </div>
      </div>
    )
  }

};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Feed.propTypes = {
  arcs: React.PropTypes.array.isRequired
};

export default Feed;