const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
var bodyParser = require('body-parser');
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

const question = require('./question/question-route');
app.use("/", question)


// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

// const dbUtils = require('./question/db-utils')

// app.post('/api/saveQuestion', async function (req, res) {
//   console.log(req.body)
//   //
//   const data =  await dbUtils.insertData("askmequestion", 
//   { question: JSON.stringify(req.body),answer:"text" });
//   console.log(data);

//   res.send("hi")  //return 

// });

// app.post('/test', async function (req, res) {
//   console.log(req.body)

//   const data = await dbUtils.findDataByIdTest("askmequestion",
//     4);
//   console.log(data);

//   res.send("hi")  //return 
// })

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
