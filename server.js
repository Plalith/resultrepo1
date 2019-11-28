const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const app = express();
const api = require("./backend/api");
var jwt = require("jsonwebtoken");
// app.use(function(req, res, next) {
//     if((!req.secure) && (req.get("X-Forwarded-Proto") !== "https")) {
//         res.redirect("https://resultrepo.com"+ req.url);
//     }
//     else
//         next();
// });
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token_val,token_name,token_c_name");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        return res.status(200).json({});
    }
    next();
});
// Parsers
app.use(bodyParser.json({ limit: "10mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

// Angular DIST output folder
app.use(express.static(path.join(__dirname, "angular/")));
var url_exclude = [
    "/api_connect/login_college_users",
    "/api_connect/login_student",
    "/api_connect/get_coleges_names",
    "/api_connect/get_selected_coleges_names",
    "/api_connect/verify_rollno",
    "/api_connect/send_otp",
    "/api_connect/insert_user_student",
    "/api_connect/checkduplicaton",
    "/api_connect/get_c_name",
    "/api_connect/get_c_user",
    "/api_connect/insert_user_college",
];
app.use(function (req, res, next) {
    if (url_exclude.includes(req.url) || !req.url.match(/api_connect/g)) {
        next();
    } else {
        jwt.verify(req.header("token_val"), api.tokens[req.header("token_name")], (err, success) => {
            if (err) {
                res.sendStatus(202);
            } else {
                next();
            }
        });
    }
});
// API location
app.use("/api_connect", api.router);

// Send all other requests to the Angular app
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "angular/index.html"));
});

// Set Port
const port = process.env.PORT || "80";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));