

export const state = () => ({
    // userName: "",
    // question: {},
    askmequestionUrl: "http://http://35.247.12.200:5914/api",
    // urlcode: ""
    answerObject: {}
})
export const mutations = {
    setAnswerObject(state, obj) {
        state.answerObject = obj;
    },
    // setName(state, test) {
    //     console.log(state);
    //     state.userName = test;
    // },
    // setQuestion(state, object) {
    //     console.log("question in store:", object)
    //     state.question = object
    // },
    // setUrlcode(state, urlcode) {
    //     console.log("urlcode is:", urlcode);
    //     state.urlcode = urlcode;
    // }
}

export const actions = {
    async saveAnswerObject({ commit,state }, answerObject) {
        console.log('answerObject', answerObject);
        const data = await this.$axios.$post(
            'http://http://35.247.12.200:5914/api/saveAnswerObject',
            // state.askmequestionUrl + '/saveAnswerObject',
            answerObject
        )
        console.log('data: ', data);
        return { status: 200, message: "ok"};
        // if (data.result.insertId > 0) {
        //     const res = data
        //     return { status: 200, message: "ok", urlcode: data.urlcode };
        // } else {
        //     const res = data
        //     return { status: 201, message: "error" };
        // }
    }
    // // async questionUpload
    // async questionUpload({ commit }, question) {
    //   console.log('question', question)

    //   const data = await this.$axios.$post(
    //     'http://http://35.247.12.200:5914/api/uploadQuestion',
    //     question
    //   )
    //   console.log('data: ', data)
    //   if (data.result.insertId > 0) {
    //     const res = data
    //     return { status: 200, message: "ok", urlcode: data.urlcode };
    //   } else {
    //     const res = data
    //     return { status: 201, message: "error" };
    //   }
    // },
    // async getQuestionAll({ commit }) {

    //   const data = await this.$axios.$get(
    //     'http://http://35.247.12.200:5914/api/getAllQuestion'
    //   )
    //   console.log('data: ', data)
    //   const res = data
    //   return { status: 200, res }
    // }, async getQuestion({ commit },urlcode) {
    //   console.log("urlcode:", urlcode);
    //   const data = await this.$axios.$get(
    //     'http://http://35.247.12.200:5914/api/getQuestion?urlcode='+urlcode
    //   )
    //   console.log('data: ', data)
    //   const res = data
    //   return { status: 200, res }
    // }

    // 
}