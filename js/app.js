function actualizarReloj() {
  const ahora = new Date();

  document.getElementById("diaSemana").textContent = obtenerNombreDia(
    ahora.getDay()
  );
  document.getElementById("dia").textContent = ahora.getDate();
  document.getElementById("mes").textContent = obtenerNombreMes(
    ahora.getMonth()
  );
  document.getElementById("year").textContent = ahora.getFullYear();

  const horas = ahora.getHours() % 12 || 12;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = agregarCero(
    ahora.getMinutes()
  );
  document.getElementById("segundos").textContent = agregarCero(
    ahora.getSeconds()
  );
  let ampm;
  if (ahora.getHours() >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  document.getElementById("ampm").textContent = ampm;
}

function obtenerNombreDia(dia) {
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  return diasSemana[dia];
}

function obtenerNombreMes(mes) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return meses[mes];
}

function agregarCero(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}

setInterval(actualizarReloj, 1000);
actualizarReloj();
