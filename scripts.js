
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // NOW highlight active link (after navbar loads)
    const links = document.querySelectorAll('.nav-link');
    const current = window.location.pathname.split('/').pop();

    links.forEach(link => {
      if(link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });
