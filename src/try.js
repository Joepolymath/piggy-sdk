// This file is mainly to try and play around with the api requests from here
const dotenv = require('dotenv');
const Auth = require('./auth');

dotenv.config();

const authenticate = new Auth(
  '918cf576-6c79-4d73|sTOZBixJzkUMe/MilMAkstU51iM8oEgt16sPJcCji8Q='
);

const payload = {
  mode: 'normal',
  platform: 'web',
  ref: '',
  username: 'joshuatobiajagbe@gmail.com',
};

authenticate
  .login(payload, process.env.PASSWORD)
  .then((data) => console.log(data));
