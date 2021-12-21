import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

var listOfImages = [];

class Fotix2 extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(require.context('../facetime/', false, /\.(png|jpe?g|svg)$/));
  }
  render() {
    return (
      <Container className="contenedor">
        <div>
          <div className="block"  > {
            listOfImages.map(
              (image, index, src) =>
                <div className="text-center"  >
                  <Image className="feed" key={index} src={image} alt="" rounded
                    style={{ width: '100%', maxWidth: '400px' }}></Image>
                </div>)}
          </div>
        </div>
      </Container>
    )
  }
};

export default Fotix2;
