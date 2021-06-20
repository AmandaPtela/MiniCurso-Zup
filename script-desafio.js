

const mudarImg = document.querySelector('imagem-inicio')

const imagem1 = document.querySelector('#personagem1')
const nome1 = document.querySelector('h4');

const imagem2 = document.querySelector('#personagem2')
const nome2 = document.getElementById('#nomeDoPersonagem2')

const imagem3 = document.querySelector('#personagem3')
const nome3 = document.getElementById('#nomeDoPersonagem3')

const imagem4 = document.querySelector('#personagem4')
const nome4 = document.getElementById('#nomeDoPersonagem4')

const button = document.querySelector('button')
const campobutton = document.getElementById('#botao')

const container = document.getElementById('personagens')

//personagens
const gerarValorAleatorio = () => {
    return Math.floor(Math.random () * 671);
}

//artigo 1
const pegarPersonagem1 = () => {
    const numeroAleatorio = gerarValorAleatorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        Method:'GET',
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'}
})
    .then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        nome1.textContent = data.name;})}

//Artigo 2
const pegarPersonagem2 = () => {
    const numeroAleatorio = gerarValorAleatorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        Method:'GET',
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'}})
    .then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        nome2.textContent = data.name;})}

//Artigo 3
const pegarPersonagem3 = () => {
    const numeroAleatorio = gerarValorAleatorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        Method:'GET',
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'}})
    .then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        nome3.textContent = data.name;})}
 
//Artigo 4
const pegarPersonagem4 = () => {
    const numeroAleatorio = gerarValorAleatorio();
        return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        Method:'GET',
        Headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'}})
    .then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        nome4.textContent = data.name;})}

document.addEventListener('DOMContentLoaded', (pegarPersonagem1))
document.addEventListener('DOMContentLoaded', (pegarPersonagem2))
document.addEventListener('DOMContentLoaded', (pegarPersonagem3))
document.addEventListener('DOMContentLoaded', (pegarPersonagem4))
