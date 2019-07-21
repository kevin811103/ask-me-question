
const questionService = require('./question-service')
exports.questionUpload = async function (req, res) {
    console.log("questionUpload");
    const result = await questionService.questionUpload();
    console.log("questionUpload", result);
    res.send(result);
}