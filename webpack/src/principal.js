// const Pessoa = require('./pessoa')
import Pessoa from './pessoa'
// vai procurar automaticamente o index.js
import './assets'

const atendente = new Pessoa
console.log(atendente.cumprimentar())