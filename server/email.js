// Packages Importing
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

// App Initialization
const app = express();
const port = process.env.PORT || 5000;

// Express Things
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// Initial Necesarry functions to minize repeat of code.

// HTML File Reader for Email Replacing Variables.
const readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      console.err(error);
    } else {
      callback(null, html);
    }
  });
};

// Send Email Function with NodeMailer
const sendEmail = (full_name, email, subject, body) => {
  const ogEmail = "ito.kobilol@gmail.com";
  const ogPass = "obwtvmxqkxqrtqev";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ogEmail,
      pass: ogPass,
    },
  });

  readHTMLFile(__dirname + "/email_template.html", function (err, html) {
    const template = handlebars.compile(html);
    const replacements = {
      subject: subject,
      full_name: full_name,
      email: email,
      body: body,
    };
    const htmlToSend = template(replacements);
    const mailOptions = {
      from: ogEmail,
      to: email,
      subject: `Kobi | Email Confirmation (${subject})`,
      html: htmlToSend,
    };
    const mailOptionsMe = {
      from: ogEmail,
      to: ogEmail,
      subject: `Kobi | You got something! (${email})`,
      html: htmlToSend,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("kobi you're so epic owo");
      }
    });
    transporter.sendMail(mailOptionsMe, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("kobi you're so epic yay me");
      }
    });
  });
};

//

// Test URL [TESTING]
app.get("/", (req, res) => {
  res.send("Good job finding my webhook :)");
});

// [POST] "/api/webhook" webhook to handle emails sending and stuff.
app.post("/api/webhook", (req, res) => {
  const { full_name, email, subject, body } = req.body;
  sendEmail(full_name, email, subject, body);
  res.json({ message: ">///< thanks for the email sir *blushes*" });
});
//

// Listening and starting the server uwu
app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Server started! Say hey at http://localhost:" + port + "/");
});
