
window.onload = function() {
  window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      if (window.scrollY > 200) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
  });
};

// Navbar

var navbars = document.getElementById("navbars");
var hamburgerMenu = document.getElementById("hamburger-menu");
var closee = document.getElementById("close");
var consultacy = document.getElementById("consultacy");
var dropdownes = document.getElementById("dropdownes");
var certificatdropdown = document.getElementById("certificatdropdown");
var certificat = document.getElementById("certificat");
var services = document.getElementById("services");
var servicesdropdown = document.getElementById("servicesdropdown");
var company = document.getElementById("company");
var companydropdown = document.getElementById("companydropdown");



company.addEventListener("click", function() {
  if (companydropdown.style.display === "flex") {
    companydropdown.style.display = "none"; // Navbarı göster
  } else {
    companydropdown.style.display = "flex"; // Navbarı gizle
  }
});



services.addEventListener("click", function() {
  if (servicesdropdown.style.display === "flex") {
    servicesdropdown.style.display = "none"; // Navbarı göster
  } else {
    servicesdropdown.style.display = "flex"; // Navbarı gizle
  }
});


certificat.addEventListener("click", function() {
  if (certificatdropdown.style.display === "flex") {
    certificatdropdown.style.display = "none"; // Navbarı göster
  } else {
    certificatdropdown.style.display = "flex"; // Navbarı gizle
  }
});


consultacy.addEventListener("click", function() {
  if (dropdownes.style.display === "flex") {
    dropdownes.style.display = "none"; // Navbarı göster
  } else {
    dropdownes.style.display = "flex"; // Navbarı gizle
  }
});


hamburgerMenu.addEventListener("click", function() {
    if (navbars.style.display === "none") {
        navbars.style.display = "flex"; // Navbarı göster
    } else {
        navbars.style.display = "none"; // Navbarı gizle
    }
});

closee.addEventListener("click", function() {
  if (navbars.style.display === "none") {
      navbars.style.display = "flex"; // Navbarı göster
  } else {
      navbars.style.display = "none"; // Navbarı gizle
  }
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}


var searchIcon = document.getElementById('search');
var searchInput = document.getElementById('search-input');

searchIcon.addEventListener('mouseenter', function() {
  searchInput.classList.remove('hidden');
  searchInput.focus();
});

searchInput.addEventListener('mouseleave', function() {
  searchInput.classList.add('hidden');
});

searchInput.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    // Arama işlemini burada gerçekleştirin (örneğin, bir AJAX isteği gönderin)
    console.log("Arama: ", searchInput.value);
  }
});


// Contact Form


const mainform = document.getElementById('mainform')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const cname = document.getElementById('cname')
const pname = document.getElementById('pname')
const tname = document.getElementById('tname')
const ename = document.getElementById('ename')
const countryselect = document.getElementById('countryselect')
const servicesselect = document.getElementById('servicesselect')
const standard = document.getElementById('standards')
const messages = document.getElementById('message')


mainform.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('https://655c83b925b76d9884fd6eb7.mockapi.io/api1/Api1', {
      firstname: fname.value,
      lastname: lname.value,
      countryname: cname.value,
      phone: pname.value,
      job: tname.value,
      ename: ename.value,
      country: countryselect.value,
      services: servicesselect.value,
      standards: standard.value,
      message: messages.value
    })
    .then(res => {
        console.log(res.data)
        mainform.reset()
    })
})




