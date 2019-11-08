

const dbUtils = require('./db-utils')
function gerentNumber() {
    numText = "0123456789";
    ucharText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lcharText = "abcdefghijklmnopqrstuvwxyz";
    numText = rand(numText);
    ucharText = rand(ucharText);
    lcharText = rand(lcharText);

    console.log(numText);
    console.log(ucharText);
    console.log(lcharText);
    // 取十位數亂數取

    let urlcode = "";


    for (let i = 0; i < 12; i++) {
        switch (i % 3) {
            case 0:

                let o = Math.floor(Math.random() * 26);
                urlcode += ucharText.slice(o, o + 1);
                //10
                // console.log(Math.floor(Math.random()*10));
                break;
            case 1:
                let n = Math.floor(Math.random() * 10);
                urlcode += numText.slice(n, n + 1);
                //26
                break;
            case 2:
                let p = Math.floor(Math.random() * 26);
                urlcode += lcharText.slice(p, p + 1);
                //26
                break;
            default:
                console.log(i % 3);
                console.log("have number not do")
                break;
        }
    }
    console.log("urlCode:", urlcode);
    return urlcode;
}
function rand(orignText) {
    text = orignText.split("")
    console.log(text);
    text.forEach((element, index) => {

        // console.log(   Math.floor(Math.random()*text.length));
        let i = Math.floor(Math.random() * text.length)
        console.log(i);
        let temp = text[index];
        text[index] = text[i];
        text[i] = temp;
    });
    // text.forEach((el) => {
    //     console.log(el);
    // })
    return text.join("");
}


//  async function test11(){
// //  let c = await gerentNumber();
// // http://fred-zone.blogspot.com/2017/04/javascript-asyncawait.html
//  await setTimeout(() => {
//      console.log("eee");
//  }, 3000);
// }
const question = {
    async questionUpload(object) {
        console.log("object", object);
        let result;
        let urlcode = gerentNumber();

        // let count=0;
        // {
        //     // urlcode =  gerentNumber();
        //     console.log("URLCODE:",urlcode);
        //     dbUtils.findDataByUrlcodeCount(urlcode).then((res)=>{
        //         console.log("res:",res);
        //         console.log("重複了 要新產")
        //         count=res[0].total_count;
        //         urlcode =  gerentNumber();
        //         console.log("重複了 要新產:",urlcode)
        //     },(error)=>{
        //         console.log("errror:",error)
        //     })
        // }
        // while(count!==0);


        //     console.log("finish:",count);
        console.log("要傳出去的資料",JSON.stringify(object.questions));
        await dbUtils.insertData('askmequestion',
            { user_name: object.userName, question: JSON.stringify(object.questions), urlcode: urlcode ,answer:JSON.stringify([])}).then((res) => {
                console.log("1111", res);
                result = res;

            }, (error) => {
                console.log("222", error)
            })


        // let result = await dbUtils.insertData('askmequestion',{user_name:object.userName,question:JSON.stringify(object.questions),urlcode:urlcode })



        // if (Array.isArray(result) && result.length > 0) {
        //     // result = result[0]
        //     result = result
        //     console.log("result",result);
        // } else {
        //     result = null
        // }
        console.log("result:", { result, urlcode: urlcode });
        return { result, urlcode: urlcode };
    },
    async getAllQuestion() {
        let result = await dbUtils.select('askmequestion', "*")
        if (Array.isArray(result) && result.length > 0) {
            // result = result[0]
            result = result
            console.log("result", result);
        } else {
            result = null
        }
        // console.log("result:",result)
        return result
    },
    async getQuestion(urlcode) {
        console.log("question-model-urlcode:", urlcode);
        let result = await dbUtils.findDataByUrlcode(urlcode)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0];
            // result = result
            // console.log("result", result);
        } else {
            result = null
        }
        // console.log("result:", result)
        return result
    },
    async saveAnswerObject(data){
        console.log("saveAnswerObject model: ",data);
        let answerObj=[]
        let result =await dbUtils.updateDataWithUrlcode("askmequestion",{answer: data.answerList},data.urlcode)
         console.log("11result:", result);
        // let result = await dbUtils.findDataByUrlcode(urlcode)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0];
            // result = result
            // console.log("result", result);
        } else {
            result = null
        }
        // console.log("result:", result)
        return result
    }

}

module.exports = question