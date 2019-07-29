const express = require('express');
const router = express.Router();
const questionController = require("./question-controller");
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('/api/uploadQuestion', questionController.questionUpload);
router.get('/api/getAllQuestion', questionController.getAllQuestion);
router.get('/api/getQuestion', questionController.getQuestion);

//answer
router.post('/api/saveAnswerObject',questionController.saveAnswerObject);


router.get("/test",function(req,res){
    res.send("success");
})
module.exports = router;


// node express