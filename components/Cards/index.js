// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const info = axios.get(' https://lambda-times-backend.herokuapp.com/articles')
console.log(info)

function newCard(data) {
    const cardContainer = document.createElement('div');
    const cardHeadline = document.createElement('div')
    const cardAuthor= document.createElement('div')
    const imgContainer= document.createElement('div')
    const cardImg= document.createElement('img')
    const authorname= document.createElement('span')

    cardContainer.classList.add('card')
}