// const apiKey = process.env.key
// const url = "https://api.restcountries.com/countries/v5?q=canada"
// fetch(
//   'https://api.restcountries.com/countries/v5?q=canada',
//   { headers: { 'Authorization': 'Bearer rc_live_72bc538a1fef4e5989d54367d0dc31d6' } }
// )
// .then(response => response.json())
// .then(data => console.log("Fetched data:", data))
// .catch(error => console.error("Fetch error:", error));

fetch ('./data.json')
.then(response => response.json)
.then(data => {
  console.log(data)
})