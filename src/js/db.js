var database = firebase.database();
var hab;
var huesp;
var checkin;
var checkout;
var dbCheckin;
var dbCheckout;
var res;
var usrs = database.ref("reservas/");



var hab1 = document.getElementById('selectHabit')
hab = hab1.options[selectHabit.selectedIndex].text;
$("#selectHabit").change(function() {
  hab = $(this).find("option:selected").text();
});

var huesp1 = document.getElementById('huespedes')
huesp = huesp1.options[selectHabit.selectedIndex].text;
$("#huespedes").change(function() {
  huesp = $(this).find("option:selected").text();
});

function guardarDb() {
  cant = {
    "Habitacion Doble": "10",
    "Habitacion Grande": "40",
    "Habitacion Individual": "5"
  }
  database.ref("reservas/Cantidad").set(cant);

  checkin = document.getElementById("date1").value;
  checkout = document.getElementById("date2").value;
  res_tipo = usrs.child(hab);
  res = {
    fecha_ingreso: checkin,
    fecha_salida: checkout,
    cant_huesp: huesp
  }
  var devolver = true;
  usrs.child("Cantidad").child(hab).on('value', function(snapshot) {
    var res_tipo = usrs.child(hab);
    cant_tipo = snapshot.val();
    console.log(cant_tipo);
    res_tipo.once('value', function(snapshot) {
      var contador = 0;
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        dbCheckin = new Date(childData.fecha_ingreso);
        dbCheckout = new Date(childData.fecha_salida);
        checkin = new Date(res.fecha_ingreso);
        checkout = new Date(res.fecha_salida);
        if ((dbCheckin <= checkin) && (checkin <= dbCheckout)) {
          contador += 1;
        } else if ((dbCheckin <= checkout) && (checkout <= dbCheckout)) {
          contador += 1;
        }
        if (contador >= cant_tipo) {
          devolver = false;
        }
      });
    }).then(function() {
      if (devolver === true) {
        res_tipo.push(res);
        window.location = ("MetodoPago.html");
      } else {
        alert("NO HAY DISPONIBILIDAD");
      }
    });
  });
}
