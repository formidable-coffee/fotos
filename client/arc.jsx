import React from 'react';
import ReactDOM from 'react-dom'; 
import Lightbox from 'react-images';


class Arc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage () {
    if (this.state   === this.props.images.length - 1) return;

    this.gotoNext();
  }

  
  renderGallery () {
    if (!this.props.photoArc) return;
    const gallery = this.props.photoArc.map((obj, i) => {
      return (
        <a
          href={obj.src}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
          style={styles.thumbnail}
          >
          <img
            height={styles.thumbnail.size}
            src={obj.thumbnail}
            style={styles.thumbnailImage}
            width={styles.thumbnail.size}
          />
        </a>
      );
    });

    return (
      <div className="section" style={styles.gallery}>
        {gallery}
      </div>
    );
  }
  
    render () {
      return (
        <div style={styles.container}>
            {this.renderGallery()}
          <Lightbox
            currentImage={this.state.currentImage}
            images={this.props.photoArc}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClickImage={this.handleClickImage}
            onClose={this.closeLightbox}
          />
        </div>
    );
  }

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Arc.propTypes = {
  photoArc: React.PropTypes.array.isRequired
};

const THUMBNAIL_SIZE = 80;

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gallery: {
    marginLeft: 0,
    marginRight: 0,
    overflow: 'hidden',
  },
  thumbnail: {
    backgroundSize: 'cover',
    borderRadius: 3,
    float: 'left',
    height: THUMBNAIL_SIZE,
    margin: 5,
    overflow: 'hidden',
    width: THUMBNAIL_SIZE,
  },
  thumbnailImage: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    height: THUMBNAIL_SIZE
    // left: '50%',
    // position: 'relative',
    //
    // WebkitTransform: 'translateX(-50%)',
    // MozTransform:    'translateX(-50%)',
    // msTransform:     'translateX(-50%)',
    // transform:       'translateX(-50%)',
  },
};


export default Arc;
