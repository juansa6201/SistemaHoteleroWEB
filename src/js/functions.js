function carousel() {
  $('.carousel').carousel({
    interval: 2000
  })
}

function Validador() {
  var nombre = document.getElementById('inputName');
  var apellido = document.getElementById('inputApellido');
  var dni = document.getElementById('inputDni');
  var telefono = document.getElementById('inputTelefono');
  var email = document.getElementById('inputEmail');
  if (nombre.checkValidity() == false || apellido.checkValidity() == false || dni.checkValidity() == false || telefono.checkValidity() == false || email.checkValidity() == false) {
    console.log("mal");
  } else {
    window.location = ("Checkin.html");
  }


}

function pais() {
  var HTMLskills = ' <option value = "AL">PAIS</option>';
  var bio = {
    "skills": ["Afganistán", "Alemania", "Andorra", "Arabia Saudita", "Argentina", "Australia", "Bahamas", "Bélgica", "Birmania", "Bolivia", "Bosnia-Herzegovina", "Brasil", "Bulgaria",
      "Canadá", "Catar", "Chile", "China", "Colombia", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "España", "Estados Unidos", "Finlandia", "Grecia", "Israel", "Italia", "Jamaica", "Japón", "México", "Mónaco", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Portugal", "Reino Unido", "República Dominicana", "Singapur", "Suecia", "Suiza", "Uruguay", "Venezuela"
    ]
  };

  if (bio["skills"] != undefined) {
    if (bio["skills"].length != 0) {

      for (var index in bio["skills"]) {
        $("#state_id").append(HTMLskills.replace("PAIS", bio["skills"][index]));
      }
    }
  }
};

function expmes() {
  var HTMLskills = ' <option value = "AL">expimes</option>';
  var bio = {
    "skills": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  };

  if (bio["skills"] != undefined) {
    if (bio["skills"].length != 0) {

      for (var index in bio["skills"]) {
        $("#expMes").append(HTMLskills.replace("expimes", bio["skills"][index]));
      }
    }
  }
};

function expaño() {
  var HTMLskills = ' <option value = "AL">expiaño</option>';
  var bio = {
    "skills": ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
  };

  if (bio["skills"] != undefined) {
    if (bio["skills"].length != 0) {

      for (var index in bio["skills"]) {
        $("#expAño").append(HTMLskills.replace("expiaño", bio["skills"][index]));
      }
    }
  }
};

function tarjetas() {
  var HTMLskills = ' <option value = "AL">tarjetas</option>';
  var bio = {
    "skills": ["Mastercard", "Visa", "American Express", "Discover", "jcb"]
  };

  if (bio["skills"] != undefined) {
    if (bio["skills"].length != 0) {

      for (var index in bio["skills"]) {
        $("#tarjetas").append(HTMLskills.replace("tarjetas", bio["skills"][index]));
      }
    }
  }
};
$(document).ready(pais);
$(document).ready(expmes);
$(document).ready(expaño);
$(document).ready(tarjetas);
$(function() {

  $('#hotelCarTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.date').datetimepicker({
    format: 'MM/DD/YYYY'
  });
  $('.date-time').datetimepicker();

  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Load Flexslider when everything is loaded.


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 60) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
  map.setCenter(new google.maps.LatLng(-31.363562, -64.219524));
});

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(-31.363562, -64.219524), // New York

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 18
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 21
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#000000"
      }, {
        "lightness": 16
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "saturation": 36
      }, {
        "color": "#000000"
      }, {
        "lightness": 40
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 19
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 20
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#000000"
      }, {
        "lightness": 17
      }, {
        "weight": 1.2
      }]
    }]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  map = new google.maps.Map(mapElement, mapOptions);

  // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
  var image = 'img/map-marker.svg';
  var myLatLng = new google.maps.LatLng(-31.363562, -64.219524);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });

  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

$(window).load(function() {});


// HTML document is loaded. DOM is ready.
$(function() {

  $('#hotelCarTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.date').datetimepicker({
    format: 'MM/DD/YYYY'
  });
  $('.date-time').datetimepicker();

  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Load Flexslider when everything is loaded.
$(window).load(function() {});
