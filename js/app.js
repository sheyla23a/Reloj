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

