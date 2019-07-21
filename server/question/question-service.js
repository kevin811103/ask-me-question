const questionModel=require('./question-model')

const question={
    async questionUpload(){
        const resultData =await questionModel.questionUpload();
        console.log("ImageService:",resultData);
        return resultData;
    },

}

module.exports = question