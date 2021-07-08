// Importing Core Packages
const express = require("express");
const is_ = require("is-base64");
const cors = require("cors");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Images Directory
const directoryPath = path.join(__dirname, "images/");

// Initializing Application
const app = express();
const port = process.env.PORT || 5000;

// Express Things
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// Open The Database
const db = new sqlite3.Database("./owo.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

const serializeError = () => {
  db.serialize(() => {
    db.run("CREATE TABLE dbowo(description text)");
  });
};

const deleteDescription = () => {
  db.run(`DELETE FROM dbowo`);
};

// Body

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath);
}

// Gets the description
app.get("/api/description", (req, res) => {
  db.all(`SELECT description FROM dbowo`, [], (err, result) => {
    if (err) {
      serializeError();
      return console.log(err);
    }
    res.json(result[0]["description"]);
  });
});

// Updates the description
app.put("/api/description", (req, res) => {
  const { description } = req.body;
  deleteDescription();
  db.run(`INSERT INTO dbowo(description)
          VALUES('${description}')`);
  res.json({ status: "success" });
});

// Returns all the image in the directory
app.get("/api/file", (req, res) => {
  let arrayOfFiles = [];
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      arrayOfFiles.push(file);
    });
    res.json(arrayOfFiles);
  });
});

// Gets the specific image
app.get("/api/file/:file", (req, res) => {
  const filePath = req.params.file;
  res.sendFile(directoryPath + filePath);
});

// Saves the image
app.put("/api/file", (req, res) => {
  let { title, base64 } = req.body;

  console.log(title);

  let newTitle = title.split(".");

  if (fs.existsSync(directoryPath + newTitle[0] + "." + newTitle[1])) {
    newTitle = `${newTitle[0]}_${Math.floor(Math.random() * 100)}.${
      newTitle[1]
    }`;
  } else {
    newTitle = `${newTitle[0]}.${newTitle[1]}`;
  }

  if (is_(base64)) {
    fs.writeFile(directoryPath + newTitle, base64, "base64", (err) => {
      if (err) {
        console.log("something fucked up you jerg askdijsiofjasf");
        return res.json({ status: "failure... oniiichan messed up >///<" });
      }
      console.log("owo it is a base64");
      res.json({ status: "success... owo" });
    });
  } else {
    console.log("not base64 uwu");
    res.json({ status: "senpai it's not a base64 image." });
  }
});

// Deletes the file
app.delete("/api/file/:file", (req, res) => {
  const file = req.params.file;
  fs.unlink(directoryPath + file, (err) => {
    if (err) {
      console.log(err);
      res.json(err);
    }
    res.json({
      status: "deleted successfully",
    });
  });
});

// Starting Application
app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Server started! Say hey at http://localhost:" + port + "/");
});
