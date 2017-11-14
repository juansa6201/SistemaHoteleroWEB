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
  console.log(usrs);
  console.log(hab);
  res_tipo = usrs.child(hab);
  console.log(res_tipo);
  res = {
    fecha_ingreso: checkin,
    fecha_salida: checkout,
    cant_huesp: huesp
  }
  var devolver = true;
  usrs.child("cantidad").child(hab).on('value', function(snapshot) {
    console.log(usrs);
    var res_tipo = usrs.child(hab);
    console.log(res_tipo);
    cant_tipo = snapshot.val();
    res_tipo.once('value', function(snapshot) {
      console.log(snapshot);
      var contador = 0;
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        var db_ingreso = new Date(childData.fecha_ingreso);
        var db_salida = new Date(childData.fecha_salida);
        var ingreso = new Date(res.fecha_ingreso);
        var salida = new Date(res.fecha_salida);
        console.log(db_ingreso);
        console.log(db_salida);
        console.log(ingreso);
        console.log(salida);
        if ((db_ingreso <= ingreso) && (ingreso <= db_salida)) {
          contador += 1;
          console.log("contando1");
        } else if ((db_ingreso <= salida) && (salida <= db_salida)) {
          contador += 1;
          console.log("contando2");
        }
        console.log(cant_tipo);
        console.log(contador);
        if (contador >= cant_tipo) {
          devolver = false;
        }
      });
    }).then(function() {
      console.log(devolver);
      if (devolver === true) {
        alert("todo ok");
        res_tipo.push(res);
      } else {
        alert("error");
      }
    });
  });
}

// function getdb() {
//   usrs.on("child_added", function(snapshot, prevChildKey) {
//     var t = snapshot.val();
//     dbCheckin = t.fecha_ingreso;
//     dbCheckout = t.fecha_salida;
//     dbHab = t.tipo_hab;
//     dbHuesp = t.cant_huesp;
//     ref = {
//       dbfecha_ingreso: dbCheckin,
//       dbfecha_salida: dbCheckout,console.log(helper);
//       dbtipo_hab: dbHab,
//       dbcant_huesp: dbHuesp
//     }
//   });
//   console.log(ref);
// }
