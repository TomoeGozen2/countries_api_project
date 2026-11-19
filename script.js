
let countryList = document.querySelector('ul');
let button = document.querySelector('button');
let userSearch = document.querySelector('input');
let option = document.querySelector('option');

fetch ('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data.forEach(post => {
    function displayCountries(countriesData){
    countryList.innerHTML = ''
    countriesData.forEach(post => {
          countryList.insertAdjacentHTML('beforeend', `<span><li><img src = "${post.flags.png}"></img> 
            <div>
             Name: ${post.name} 
            Population: ${post.population} Region: Name: ${post.region} Capital: ${post.capital}</div></li></span>`)
            
  })
    
}
button.addEventListener("click", function(){
    let searchValue = userSearch.value.toLowerCase()
    let filteredCountries = data.filter(country => country.name.toLowerCase().includes(searchValue))
    displayCountries(filteredCountries)
})
          countryList.insertAdjacentHTML('beforeend', `<span><li><img src = "${post.flags.png}"></img> 
            <div>
             Name: ${post.name} 
            Population: ${post.population} Region: Name: ${post.region} Capital: ${post.capital}</div></li></span>`)
            
  }))
})

//search




