import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from './components/nav';
import './styles/sales.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazy-load';
import Loadingpic from './assets/loading.jpg';
import { CircularProgress } from '@material-ui/core';
function Sales(props) {
  const [value, setValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState('');
  // Loading screen
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    axios
      .get(
        'https://ahesbackend.americanhouseholdestatesales.com/api/description'
      )
      .then((data) => setValue(data.data));
  };

  const fetchPhotos = async () => {
    try {
      await axios
        .get('https://ahesbackend.americanhouseholdestatesales.com/api/file')
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
      <div className="gallery-cont">
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

          <div className={clickedPhoto ? 'photomodal' : 'photo-container'}>
            {clickedPhoto.length > 0 ? (
              <div>
                <div onClick={() => setClickedPhoto('')} className="exit-btn">
                  X
                </div>
                <img
                  className="enlarged-photo"
                  src={`https://ahesbackend.americanhouseholdestatesales.com/api/file/${clickedPhoto}`}
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
                  <LazyLoad height="100%" offsetTop={0}>
                    <img
                      src={`https://ahesbackend.americanhouseholdestatesales.com/api/file/${x}`}
                      className="item-photos"
                      alt="photos"
                    />
                  </LazyLoad>
                </Col>
              ))
            )}
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Sales;
