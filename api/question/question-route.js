const express = require('express');
const router = express.Router();
const questionController = require("./question-controller");
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.post('uploadQuestion', questionController.questionUpload);
router.get('getAllQuestion', questionController.getAllQuestion);
router.get('getQuestion', questionController.getQuestion);

//answer
router.post('saveAnswerObject',questionController.saveAnswerObject);


router.get("test",function(req,res){
    res.send("success");
})
module.exports = router;


// node express