import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import compression from 'compression';
import session from 'express-session';

const MongoClient    = mongodb.MongoClient;
const app            = express();



const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});