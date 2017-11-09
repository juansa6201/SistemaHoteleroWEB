var database = firebase.database();
var hab;
var huesp;
var checkin;
var checkout;

$("#selectHabit").change(function(){
  hab = $(this).find("option:selected").text();
});
$("#huespedes").change(function(){
  huesp = $(this).find("option:selected").text();
});
function guardarDb(){
  checkin = document.getElementById("date1").value;
  checkout = document.getElementById("date2").value;
  data = {
    fecha_ingreso: checkin,
    fecha_salida: checkout,
    tipo_hab: hab,
    cant_huesp: huesp
  }
  database.ref("reservas/").push(data);
}
