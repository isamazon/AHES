import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useDropzone } from "react-dropzone";
import FileBase64 from "react-file-base64";
import axios from "axios";

// CSS
import "../../styles/admin.css";

function Photos() {
  const [files, setFiles] = useState([]);

  const convertImages = (pics) => {
    console.log(pics);
    if (pics.length > 0) {
      let outputFiles = [...files];
      pics.forEach((item) => {
        const object = {
          title: item.name,
          base64: item.base64,
        };
        outputFiles.push(object);
      });
      setFiles([...outputFiles]);
    } else {
      const object = {
        title: pics[0].title,
        base64: pics[0].base64,
      };
      setFiles([...files, object]);
    }
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      files.forEach((item) => {
        const base64Image = item.base64.split(",")[1];
        const object = {
          title: item.title,
          base64: base64Image,
        };
        axios.put("https://backend.shounenfit.com/api/file", object);
      });
    } else {
      return null;
    }
  };

  const deleteAllPhotos = () => {
    console.log("it works");
    axios.get("https://backend.shounenfit.com/api/file").then((data) => {
      data.data.forEach((item) => {
        axios.delete(`https://backend.shounenfit.com/api/file/${item}`);
      });
    });
  };

  return (
    <div>
      <Row className="dropzone-row">
        <FileBase64 multiple={true} onDone={(e) => convertImages(e)} />
      </Row>
      <div className="photo-cont">
        {files.length > 0
          ? files.map((x) => (
              <img
                src={x.base64}
                key={x.title}
                className="images"
                alt="image"
              />
            ))
          : ""}
      </div>
      <div className="button-container">
        <button onClick={() => handleSubmit()} className="button-post">
          Post pictures to website
        </button>
        <button onClick={() => deleteAllPhotos()} className="button-post">
          Delete photos on website
        </button>
      </div>
    </div>
  );
}

export default Photos;
