const mongoose = require("mongoose");
const Card = require('./models/card');
const User = require('./models/user')
 const connect = require('./connect')
const users = [{
  username: 'Anton', 
    email: 'anton@anton.anton',
    password: 123456,
    city :'SPB',
},
{
  username: 'Федор', 
    email: 'федор@anton.anton',
    password: 1234567,
    city :'Уфа',
}];

async function seed (){
  await connect ();
  await User.insertMany(users)
  await mongoose.connection.close;
} 
seed();
