
const courseActing = document.querySelector('.acting')
const descriptionActing = document.querySelector('.description-acting')

const courseArch = document.querySelector('.architecture')
const descriptionArch = document.querySelector('.description-architecture')

const artsManagement = document.querySelector('.arts-management');
const descriptionArts = document.querySelector('.description-arts')

const biology = document.querySelector('.biology');
const descBiol = document.querySelector('.description-biology');

const biomedical = document.querySelector('.biomedical-science')
const biomedicalDesc = document.querySelector('.description-biomedical')

const businessMan = document.querySelector('.business-and-management')
const businessManDesc = document.querySelector('.description-business-management')

const businessManPost = document.querySelector('.business-and-management-post')
const businessManPostDesc = document.querySelector('.description-business-management-post')

const businessManAcc = document.querySelector('.business-and-management-accounting')
const businessManAccDesc = document.querySelector('.description-business-management-accounting')

const businessManEcon = document.querySelector('.business-and-management-economics')
const businessManEconDesc = document.querySelector('.description-business-management-economics')

const businessManEnt = document.querySelector('.business-and-management-ent')
const businessManEntDesc = document.querySelector('.description-business-management-ent')

const fashion = document.querySelector('.business-and-management-fashion')
const fashionDesc = document.querySelector('.description-business-management-fashion')

const festivals = document.querySelector('.business-and-management-festivals')
const festivalsDesc = document.querySelector('.description-business-management-festivals')

festivals.addEventListener('mouseover', () => {
festivalsDesc.classList.add('show')
})

festivals.addEventListener('mouseout', () => {
    festivalsDesc.classList.remove('show')
    })

fashion.addEventListener('mouseover', () => {
    fashionDesc.classList.add('show')
})

fashion.addEventListener('mouseout', () => {
    fashionDesc.classList.remove('show')
})


businessManAcc.addEventListener('mouseover', ()=>{
    businessManAccDesc.classList.add('show')
})

businessManAcc.addEventListener('mouseout', ()=>{
    businessManAccDesc.classList.remove('show')
})

businessManEnt.addEventListener('mouseover', ()=> {
    businessManEntDesc.classList.add('show')
})

businessManEnt.addEventListener('mouseout', ()=> {
    businessManEntDesc.classList.remove('show')
})

businessManEcon.addEventListener('mouseover', ()=>{
    businessManEconDesc.classList.add('show')
})

businessManEcon.addEventListener('mouseout', ()=>{
    businessManEconDesc.classList.remove('show')
})



businessManPost.addEventListener('mouseover', ()=>{
    businessManPostDesc.classList.add('show')
})
businessManPost.addEventListener('mouseout', ()=>{
    businessManPostDesc.classList.remove('show')
})

businessMan.addEventListener('mouseover', ()=> {
    businessManDesc.classList.add('show')
})

businessMan.addEventListener('mouseout', ()=> {
    businessManDesc.classList.remove('show')
})

biomedical.addEventListener('mouseover', () => {
    biomedicalDesc.classList.add('show')
})

biomedical.addEventListener('mouseout', () => {
    biomedicalDesc.classList.remove('show')
})

courseActing.addEventListener('mouseover', () =>{

   descriptionActing.classList.add('show')
    console.log('working')
})

courseActing.addEventListener('mouseout', () => {
    descriptionActing.classList.remove('show')
})

courseArch.addEventListener('mouseover', () => {
    descriptionArch.classList.add('show')
})

courseArch.addEventListener('mouseout', () => {
    descriptionArch.classList.remove('show')
})

artsManagement.addEventListener('mouseover', ()=> {
    descriptionArts.classList.add('show')
})

artsManagement.addEventListener('mouseout', () => {
    descriptionArts.classList.remove('show')
})

biology.addEventListener('mouseover', () => {
    descBiol.classList.add('show')
})

biology.addEventListener('mouseout', () => {
    descBiol.classList.remove('show')
})

// const masonryCont = document.querySelector('#masonry-container')
// const msnry = new Masonry(masonryCont, {
//     itemSelector: '.course',
//     columnWidth:100,
// })
