const upload = require("../controllers/upload.controller");
const express = require("express");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const router = express.Router();

let gfs;

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("documents");
});

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const docUrl = `http://localhost:3001/file/${req.file.filename}`;
    return res.send(docUrl);
});

router.get("/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        res.set('Content-Type', file.contentType);
        res.set('Content-Disposition', 'attachment; filename="'+file.filename+'"')
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send('not found');
    }
});


router.delete("/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

module.exports = router;