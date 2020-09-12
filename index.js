const express = require("express");
const upload = require("./upload");

const PORT = 3000;
const app = express();

app.post("/file", upload("files/").single("file"), (req, res) => {
    res.json({
        uploadedFilename: req.file.filename,
    });
});

app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
