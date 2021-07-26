const mongoose = require("mongoose");
const Card = require('./models/card');
const connect = require('./connect')

const cards = [
  {
    name: `Geomancer's Gambit`, 
    description: 'Destroy target land. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle.',
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '100%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1000,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 800,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1500,
  },
  {
    name: `Geomancer's Gambit`, 
    description: 'Destroy target land. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle.',
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '100%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1000,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1600,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 500,
  },
  {
    name: `Geomancer's Gambit`, 
    description: 'Destroy target land. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle.',
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '100%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1200,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 800,
  },
  {
    name: `Disintegrate`, 
    description: `Disintegrate deals X damage to any target. If it's a creature, it can't be regenerated this turn, and if it would die this turn, exile it instead.`,
    img :'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464074&type=card',
    quality: '80%', 
    owner: '60d3345ef6cb18d745c9626e',
    price: 1100,
  },
];

async function seed (){
  await connect ()
  await Card.insertMany(cards)
  await mongoose.connection.close()
} 
seed()


