const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: "mongodb+srv://af_assignment2:asdfg@cluster0.5ttcv.mongodb.net/scad_db?retryWrites=true&w=majority",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["application/pdf", "application/msword", 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "documents",
            filename: `${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });
