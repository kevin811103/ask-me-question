const questionModel=require('./question-model')


const question={
    async questionUpload(data){
        const resultData =await questionModel.questionUpload(data,);
        console.log("resultData:",resultData);
        return resultData;
    },
    async getAllQuestion(){
        const resultData =await questionModel.getAllQuestion();
        // console.log("getAllQuestion resultData:",resultData);
        return resultData;
    },
}

module.exports = question