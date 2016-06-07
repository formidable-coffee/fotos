import React from 'react';
import ReactDOM from 'react-dom'; 
import Arc from './arc';
import $ from 'jquery'; 


// expecting to be passed an array of urls in props

<<<<<<< HEAD
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arcs: [[{
        thumbnail:'https://scontent.xx.fbcdn.net/v/t1.0-9/167755_497227698982_1920506_n.jpg?oh=a471771e7b582e97973c57d16b6e93ba&oe=580C2851',
        src:'https://scontent.xx.fbcdn.net/v/t1.0-9/167755_497227698982_1920506_n.jpg?oh=a471771e7b582e97973c57d16b6e93ba&oe=580C2851'
      }, {
        thumbnail: "https://scontent.xx.fbcdn.net/v/t1.0-9/15616_10151388460539359_838434950_n.jpg?oh=746dc01788dce5a8e13286a0946e2dc3&oe=580416C4",
        src: "https://scontent.xx.fbcdn.net/v/t1.0-9/15616_10151388460539359_838434950_n.jpg?oh=746dc01788dce5a8e13286a0946e2dc3&oe=580416C4"
      }, {
        thumbnail: "https://scontent.xx.fbcdn.net/t31.0-8/10818202_10204523535902787_7021998894279067222_o.jpg", 
        src: "https://scontent.xx.fbcdn.net/t31.0-8/10818202_10204523535902787_7021998894279067222_o.jpg" 
      }, {
        thumbnail: "https://scontent.xx.fbcdn.net/v/t1.0-9/150609_10151388457509359_1019271306_n.jpg?oh=86feb0e0c960c632c87c83da0f8f88f6&oe=57CE3BAB",
        src: "https://scontent.xx.fbcdn.net/v/t1.0-9/150609_10151388457509359_1019271306_n.jpg?oh=86feb0e0c960c632c87c83da0f8f88f6&oe=57CE3BAB"
      }, {
        thumbnail: "https://scontent.xx.fbcdn.net/v/t1.0-9/24523_410348024358_6847090_n.jpg?oh=0e7de98d7978a3936a29d1a0a01a773d&oe=57D65F98",
        src: "https://scontent.xx.fbcdn.net/v/t1.0-9/24523_410348024358_6847090_n.jpg?oh=0e7de98d7978a3936a29d1a0a01a773d&oe=57D65F98"
      }]] 
    }
    // this.componentDidMount.bind(this);
    // this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    console.log('cdm'); 
  }

  getData() {
    console.log(fbId);

    var self = this; 
    $.get('/dashboard', {user_id: fbId}, function(data) {
      console.log("Data from db =>", data);
    
      data = data.filter(function(val) {
        console.log(val); 
        if (val.length > 0) {
          self.state.arcs.push(val); 
          console.log('filter function', self.state.arcs); 
          self.forceUpdate(); 

          return true; 
        } else {
          return false; 
        }
      }); 

      // this.setState({arcs: this.state.arcs.push([data])});
      console.log(this.state.arcs); 
      console.log('state is: ', this.state.arcs);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Your Stories</h2>
        <div className="gallery-container">
          {this.state.arcs.map((arc) => {
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