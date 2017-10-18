const button = document.querySelector('button')

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(json => {updatePage(json)})
})

function updatePage(json){
  const name = json.results[0].name.title + '. ' + json.results[0].name.first + ' ' + json.results[0].name.last
  const email = json.results[0].email
  const street = json.results[0].location.street
  const city = json.results[0].location.city
  const state = json.results[0].location.state
  const zip = json.results[0].location.postcode
  const phone = json.results[0].phone
  const cell = json.results[0].cell
  const dob = json.results[0].dob

  document.getElementById('fullname').innerText = name
  document.getElementById('email').innerText = email
  document.getElementById('street').innerText = street
  document.getElementById('city').innerText = city
  document.getElementById('state').innerText = state
  document.getElementById('postcode').innerText = zip
  document.getElementById('date_of_birth').innerText = dob
  document.getElementById('phone').innerText = phone
  document.getElementById('cell').innerText = cell
}
