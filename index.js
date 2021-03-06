const express = require('express');
const app = express();
const mongoose = require('mongoose');

//convert to json
app.use(express.json({extended: true}))

//processing request by react
app.use('/', require('./routes/routerSingUp'))  //sign up
app.use('/', require('./routes/routerSignIn'))  //sign in

const port = process.env.PORT || 5000

//start server, connect mongo
async function mongoStart() {
  try {
    await mongoose.connect('mongodb+srv://root:mon1042goDB@cluster0.ykify.mongodb.net/users?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(port, () => { console.log(`Sever has runned on port - ${port}`) })
  } catch (e) {
    console.log(`ERROR - ${e}`)
    process.exit(1)   //exit with connect at error
  }
}

mongoStart()