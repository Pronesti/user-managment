const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const api = require('./routes/api/');
const admin = require('./admin');

async function verifyToken(req, res ,next) {
  const idToken = req.headers.authorization;
  console.log('verifing token...')
  try{
      const decodedToken = await admin.auth().verifyIdToken(idToken)
      if (decodedToken){
          req.body.uid = decodedToken.uid
          console.log(decodedToken)
      return next();
      }else{
          return res.status(401).send('You are not authorized!')
      }
  } catch( e ){
      return res.status(401).send('You are not authorized!')
  }
}

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(verifyToken);
app.use('/api', api);



// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Example app listening on port port!`));
