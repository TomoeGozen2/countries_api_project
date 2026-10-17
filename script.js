
let countryList = document.querySelector('ul');
let button = document.querySelector('button');
let userSearch = document.querySelector('input');
let option = document.querySelector('option');

fetch ('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data.forEach(post => {
          countryList.insertAdjacentHTML('beforeend', `<li><img src = "${post.flags.png}"></img> 
            <div>
             Name: ${post.name} 
            Population: ${post.population} Region: Name: ${post.region} Capital: ${post.capital}</div></li>`)
            
  }))
})


button.addEventListener("click", function(){
fetch ('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data.forEach(post => {
          if(userSearch.value.toLowerCase() == post.name.toLowerCase()){
            
          }
  }))
})
})

option.addEventListener("change", (event) => {
  
  const selectedValue = event.target.value;
  
  
  fetch ('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data.forEach(post => {
          if(selectedValue === post.region){
            alert(`The regions you chose are ${post.region}`)
          }
  }))
})
});

