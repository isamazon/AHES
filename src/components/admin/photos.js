import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useDropzone } from "react-dropzone";
import FileBase64 from "react-file-base64";
import axios from "axios";
// CSS
import "../../styles/admin.css";

function Photos() {
  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [files, setFiles] = useState([]);

  const convertImages = (uwu) => {
    // acceptedFiles.map((x) => {
    //   const image = x.path;
    // });
    console.log(uwu);
    if (uwu.length > 0) {
      let outputFiles = [...files];
      uwu.forEach((item) => {
        const object = {
          title: item.name,
          base64: item.base64,
        };
        outputFiles.push(object);
      });
      setFiles(outputFiles);
    } else {
      const object = {
        title: uwu[0].title,
        base64: uwu[0].base64,
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
        axios.put("http://localhost:5000/api/file", object);
      });
    } else {
      return null;
    }
  };

  const deleteAllDaddysPhotos = () => {
    axios.get("http://localhost:5000/api/file").then((data) => {
      data.data.forEach((item) => {
        axios.delete(`http://localhost:5000/api/file/${item}`);
      });
    });
  };

  return (
    <div>
      <Row className="dropzone-row">
        <FileBase64 multiple={true} onDone={(e) => convertImages(e)} />
        {/* <div className="dropzone" {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div> */}
      </Row>
      <div className="photo-cont">
        {files.length > 0
          ? files.map((x) => <img src={x.base64} key={x.title} alt="image" />)
          : ""}
      </div>
      <button onClick={() => handleSubmit()}>hello submit me daddy</button>
      <button onClick={() => deleteAllDaddysPhotos()}>
        owo no plz no delete
      </button>
    </div>
  );
}

export default Photos;
