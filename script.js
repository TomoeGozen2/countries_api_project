
let countryList = document.querySelector('ul');
let button = document.getElementById('searchButton');
let userSearch = document.querySelector('input');
let option = document.querySelector('option');
let resetButton = document.getElementById('resetButton')
//regions is the drop down menu
let regions = document.getElementById('regions')

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
//This works you just have to click out of the search box
userSearch.addEventListener("change", (event) => {
  let searchValue = event.target.value.toLowerCase();

    let filteredCountries = data.filter(country =>
        country.name.toLowerCase().includes(searchValue) && region === 'all_regions' || country.region ===region
    );
      displayCountries(filteredCountries);
})
//select based on regions
  regions.addEventListener("change", (event) => {
      region = event.target.value;

      let filteredCountries = data.filter(country =>
          region === 'all_regions' || country.region.toLowerCase() === region.toLowerCase()
      );

        displayCountries(filteredCountries);
    });
//button to search for countries if you prefer
button.addEventListener("click", function(){
    let searchValue = userSearch.value.toLowerCase()
    let filteredCountries = data.filter(country => country.name.toLowerCase().includes(searchValue))
    displayCountries(filteredCountries)
})
          countryList.insertAdjacentHTML('beforeend', `<span><li><img src = "${post.flags.png}"></img> 
            <div>
             Name: ${post.name} 
            Population: ${post.population} Region: Name: ${post.region} Capital: ${post.capital}</div></li></span>`)
      //This works it just takes a second resets all countries
       resetButton.addEventListener("click", function(){
            
            displayCountries(data)
})
            
  }))
 
})


//search




