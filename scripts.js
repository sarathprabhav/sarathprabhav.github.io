
// Load navbar dynamically
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });



// Highlight active navbar link automatically
const links = document.querySelectorAll('.nav-link');
const current = window.location.pathname.split('/').pop();

links.forEach(link => {
  if(link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});


function convert() {
  let ly = document.getElementById("ly").value;
  let km = ly * 9.461e12;
  document.getElementById("result").innerText =
    ly + " light years = " + km + " km";
}

