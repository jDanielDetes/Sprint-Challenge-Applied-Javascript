// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const info = axios.get('https://lambda-times-backend.herokuapp.com/topics')
console.log(info)

function tabCompo(data){
    const newTab = document.createElement('div')

    newTab.classList.add('tab')
    newTab.textContent= data
    return newTab

}

axios.then(response)=>{
    const tabs = document.querySelector('.topics')
    response.data.topics.forEach(tabby => {
        newTab.appendChild(tabCompo(tabby))
    })
}
