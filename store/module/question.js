

export const state = () => ({
  userName: "",
  question: {},
  askmequestionUrl: "authinit",
  // askmequestionUrl: "http://http://localhost:5914/authinit",
  urlcode: ""
})
export const mutations = {
  setName(state, test) {
    console.log(state);
    state.userName = test;
  },
  setQuestion(state, object) {
    console.log("question in store:", object)
    state.question = object
  },
  setUrlcode(state, urlcode) {
    console.log("urlcode is:", urlcode);
    state.urlcode = urlcode;
  }
}

export const actions = {
  // async questionUpload
  async questionUpload({ commit, state }, question) {
    console.log('question', question)
    //        state.askmequestionUrl +  '/uploadQuestion',
    const data = await this.$axios.$post(
      'authinit/uploadQuestion',
      question
    )
    // 'http://icanhelpyou.ml:5914/authinit/uploadQuestion',
    // 'http://localhost:5914/authinit/uploadQuestion',
    console.log('data: ', data)
    if (data.result.insertId > 0) {
      const res = data
      return { status: 200, message: "ok", urlcode: data.urlcode };
    } else {
      const res = data
      return { status: 201, message: "error" };
    }
  },
  async getQuestionAll({ commit }) {

    const data = await this.$axios.$get(
      'authinit/getAllQuestion'
    )
    console.log('data: ', data)
    const res = data
    return { status: 200, res }
  }, async getQuestion({ commit, state }, urlcode) {
    // console.log("urlcode:", urlcode);
    const data = await this.$axios.$get(
      'authinit/getQuestion?urlcode=' + urlcode
      // state.askmequestionUrl + 'authinit/getQuestion?urlcode=' + urlcode
    )
    // 'http://icanhelopyou.ml:5914authinit/getQuestion?urlcode='+urlcode
    // 'http://http://localhost:5914authinit/getQuestion?urlcode='+urlcode
    // console.log('data: ', data)
    const res = data
    return { status: 200, res }
  }

  // 
}
