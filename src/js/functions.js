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
    "skills": ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030" ]
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
