var database = firebase.database();
var hab;
var huesp;
var checkin;
var checkout;
var dbCheckin;
var dbCheckout
var dbHab;
var dbHuesp;
var res;
var ref;
var contador = 0;
var usrs = database.ref("reservas/");

$("#selectHabit").change(function() {
  hab = $(this).find("option:selected").text();
});
$("#huespedes").change(function() {
  huesp = $(this).find("option:selected").text();
});

function guardarDb() {
  checkin = document.getElementById("date1").value;
  checkout = document.getElementById("date2").value;
  res = {
    fecha_ingreso: checkin,
    fecha_salida: checkout,
    tipo_hab: hab,
    cant_huesp: huesp
  }
  usrs.push(res);

}

function getdb() {
  usrs.on("child_added", function(snapshot, prevChildKey) {
    var t = snapshot.val();
    dbCheckin = t.fecha_ingreso;
    dbCheckout = t.fecha_salida;
    dbHab = t.tipo_hab;
    dbHuesp = t.cant_huesp;
    ref = {
      dbfecha_ingreso: dbCheckin,
      dbfecha_salida: dbCheckout,
      dbtipo_hab: dbHab,
      dbcant_huesp: dbHuesp
    }
  });
}

function verificador() {
  for (res in ref) {
    if (ref.dbtipo_hab == res.tipo_hab) {
      if (ref.dbfecha_ingreso < res.fecha_ingreso < res.fecha_salida) {
        contador += 1
      } else {
        console.log(hola);
      }
    }
  }
  console.log(contador);
}
