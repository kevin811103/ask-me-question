

const dbUtils = require('./db-utils')
const question = {

    // async loadImg(){
    //     // let result = await dbUtils.insertData('Images',{PicNum:1234,Image:imgFile})
    //     let _sql = ` SELECT * FROM Images where PicNum = 1234`;

    //     let result = await dbUtils.query(_sql)
    //     if (Array.isArray(result) && result.length > 0) {
    //         // result = result[0]
    //         result = result
    //         console.log("result",result);
    //     } else {
    //         result = null
    //     }
    //     return result
    // },
    async questionUpload(object){
        console.log("object",object);
        


        let result = await dbUtils.insertData('askmequestion',{user_name:object.userName,question:JSON.stringify(object.questions)  })
        // if (Array.isArray(result) && result.length > 0) {
        //     // result = result[0]
        //     result = result
        //     console.log("result",result);
        // } else {
        //     result = null
        // }
        console.log("result:",result)
        return result
    },
    async getAllQuestion(){
        let result = await dbUtils.select('askmequestion',"*")
        if (Array.isArray(result) && result.length > 0) {
            // result = result[0]
            result = result
            console.log("result",result);
        } else {
            result = null
        }
        // console.log("result:",result)
        return result
    }

}

module.exports = question