import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './components/nav';
import './styles/sales.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazy-load';
import { CircularProgress } from '@material-ui/core';
function Sales(props) {
  const [value, setValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState('');
  // Loading screen
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    axios
      .get('https://backend.shounenfit.com/api/description')
      .then((data) => setValue(data.data));
  };

  const fetchPhotos = async () => {
    try {
      await axios
        .get('https://backend.shounenfit.com/api/file')
        .then((data) => {
          setPhotos(data.data);
        });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPhotos();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Nav />
      <Container fluid className="gallery-cont">
        <Row className="row-1">
          <h1 className="sale-h1" data-aos="fade-down" data-aos-duration="1500">
            Items for sale!
          </h1>
          {loading ? (
            <p
              className="description-p"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {value}
            </p>
          ) : (
            <p
              className="description-p"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <CircularProgress />
            </p>
          )}

          {loading ? (
            <div className={clickedPhoto ? 'photomodal' : 'photo-container'}>
              {clickedPhoto.length > 0 ? (
                <div>
                  <div onClick={() => setClickedPhoto('')} className="exit-btn">
                    X
                  </div>
                  <img
                    className="enlarged-photo"
                    src={`https://backend.shounenfit.com/api/file/${clickedPhoto}`}
                  />
                </div>
              ) : (
                photos.map((x) => (
                  <Col
                    xl={4}
                    md={6}
                    sm={12}
                    key={x}
                    className=""
                    onClick={() => setClickedPhoto(x)}
                  >
                    <img
                      src={`https://backend.shounenfit.com/api/file/${x}`}
                      className="item-photos"
                      alt="photos"
                    />
                  </Col>
                ))
              )}
            </div>
          ) : (
            <div className="photo-container">
              <h1 className="loading-h1">
                Loading items <CircularProgress />
              </h1>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Sales;
