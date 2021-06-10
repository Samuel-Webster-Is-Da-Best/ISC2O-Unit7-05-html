document.getElementById("button").addEventListener("click", what)

function what () {
  const day = document.getElementById("day").value
  const age = document.getElementById("numb").value
  if (day !== 'saturday' && day !== 'sunday') {
    if (age < 18) {
      document.getElementById('answer').innerHTML = 'Time for school!  '
    } else {
      document.getElementById('answer').innerHTML = 'Time to go to work!'
    }
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}
