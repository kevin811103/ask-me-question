
// export const state = () => ({
//     username: "",
//     questionOb: {},

// })
// export const mutations = {
//     setName(state, test) {
//         console.log(state);
//         state.userName = test;
//     },
//     setQuestionData(state, questionOb) {
//         state.questionOb = questionOb;
//     }
// }

// export const actions = {
//     // async questionUpload

//     async saveQuestion({ commit,state }, questionOb) {
//         console.log(state.questionOb);
//         console.log("in Store action:", questionOb)
//         const data = await this.$axios.$post("http://localhost:5914/api/saveQuestion", questionOb)
//         console.log(data)
//         return { status: 200, message: "ok" };

//     }

//     // async questionUpload({ commit }, question) {
//     //   console.log('question', question)

//     //   const data = await this.$axios.$post(
//     //     'http://localhost:5914/api/uploadQuestion',
//     //     question
//     //   )
//     //   // 'http://icanhelpyou.ml:5914/api/uploadQuestion',
//     //         // 'http://localhost:5914/api/uploadQuestion',
//     //   console.log('data: ', data)
//     //   if (data.result.insertId > 0) {
//     //     const res = data
//     //     return { status: 200, message: "ok", urlcode: data.urlcode };
//     //   } else {
//     //     const res = data
//     //     return { status: 201, message: "error" };
//     //   }
// }
