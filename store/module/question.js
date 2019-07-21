import { questionUpload } from "../../server/question/question-controller";


export const state = () => ({
    userName: "",
    question: { }
})
export const mutations = {
    setName(state, test) {
        console.log(state);
        state.userName = test;
    },
    setQuestion(state,object){
        console.log("question in store:",object)
        state.question = object

    }
}

export const actions = {
    // async questionUpload
    async questionUpload({ commit }, question) {
        console.log('question', question)

        const data = await this.$axios.$post(
          'http://localhost:3000/api/uploadQuestion' ,{
            imageData
          }
        )
        console.log('data: ', data)
        const res = data
        return { status: 200, res }
      },

    // 
}