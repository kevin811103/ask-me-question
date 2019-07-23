const questionModel=require('./question-model')


const question={
    async questionUpload(data){
        const resultData =await questionModel.questionUpload(data);
        console.log("resultData:",resultData);
        return resultData;
    },
    async getAllQuestion(){
        const resultData =await questionModel.getAllQuestion();
        // console.log("getAllQuestion resultData:",resultData);
        return resultData;
    },
    async getQuestion(urlcode){
        const resultData =await questionModel.getQuestion(urlcode);
        // console.log("getAllQuestion resultData:",resultData);
        return resultData;
    }
}

module.exports = question