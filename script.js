
let countryList = document.querySelector('ul');
fetch ('./data.json')
.then(response => response.json())
.then(data => {
  console.log(data.forEach(post => {
          countryList.insertAdjacentHTML('beforeend', `<li><img src = "${post.flags.png}"></img> Name: ${post.name} 
            Population: ${post.population} Region: Name: ${post.region} Capital: ${post.capital}</li>`)
  }))
})