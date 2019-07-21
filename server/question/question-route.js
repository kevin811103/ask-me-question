const express = require('express');
const router = express.Router();
const questionController = require("./question-controller");
// const bodyParser = require('body-parser')
// // create application/json parser
// var multer  = require('multer');
// var upload = multer({ dest: '/tmp/'});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './tmp/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// })
// var upload = multer({ storage: storage });
// router.post('/upload', upload.single('file'),image_controller.uploadImg);
// router.post('/uploadd',image_controller.account_list);
// router.get('/getImage',image_controller.loadImg);
// router.get('/getAllImg',image_controller.getAllImg);

router.post('/api/uploadQuestion',questionController.questionUpload);
module.exports = router;


