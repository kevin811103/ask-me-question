
const questionService = require('./question-service')
exports.questionUpload = async function (req, res) {
    console.log("questionUpload",req.body);
    const data =req.body ;
    const result = await questionService.questionUpload(data);
    console.log("questionUpload", result);
    res.send(result);
}
exports.getAllQuestion = async function (req, res) {

    const result = await questionService.getAllQuestion();
    // console.log("getAllQuestion", result);
    res.send(result);
}
