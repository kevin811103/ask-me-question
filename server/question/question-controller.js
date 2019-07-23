
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
exports.getQuestion =async function (req,res){
    console.log("getQuestion", req.query);
    const urlcode = req.query.urlcode;
    
    // console.log( req.query.urlcdode);
    console.log("getQuestion urlcode:", urlcode);
    // console.log("getQuestion urlcode:", urlcode);
    
    const result = await questionService.getQuestion(urlcode);
    // console.log("getQuestion", result);
    res.send(result);
}
