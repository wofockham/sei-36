import React from 'react';

// class Gallery extends Component {
//   render() {
//     return (
//       <div>
//         { this.props.images.map( (url) => <Thumbnail src={ url } /> ) }
//       </div>
//     );
//   }
// }

// Functional components receive a single object parameter: props.
const Gallery = (props) => {
  console.log( '<Gallery />', props );
  return (
    <div>
      { props.images.map( (url) => <Thumbnail picture={ url } /> ) }
    </div>
  );
};

// Incredibly: this is a function with implicit return.
const Thumbnail = (props) => <img src={ props.picture } alt="" />;


export default Gallery;
