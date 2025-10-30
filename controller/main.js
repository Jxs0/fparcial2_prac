function crearEmpleado() {
  document.getElementById("divAgregarEmpleado").style.display = "block";
}

function agregarEmpleado() {
  let cc = document.getElementById("cc").value;
  let nombresyApellidos = document.getElementById("nombresyApellidos").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let sueldoBase = document.getElementById("sueldoBase").value;
  let tipoEmpleado = document.getElementById("tipoEmpleado").value;
  let tipoBonificacion = document.getElementById("tipoBonificacion").value;

  let nuevoEmpleado = new Empleado(
    cc,
    nombresyApellidos,
    direccion,
    email,
    telefono,
    sueldoBase,
    tipoEmpleado,
    tipoBonificacion
  );

  let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
  empleados.push(nuevoEmpleado);

  localStorage.setItem("empleados", JSON.stringify(empleados));

  mostrarEmpleados();

  document.getElementById("formEmpleado").reset();
  document.getElementById("divAgregarEmpleado").style.display = "none";

  alert("Empleado agregado");
}

function mostrarEmpleados() {
  let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
  let tbody = document.getElementById("tbodyEmpleados");
  tbody.innerHTML = "";
  let totalNomina = 0;

  empleados.forEach((emp, index) => {
    totalNomina += emp.sueldoTotal;

let fila = "<tr>";
fila += "<td>" + (index + 1) + "</td>";
fila += "<td>" + emp.cc + "</td>";
fila += "<td>" + emp.nombresyApellidos + "</td>";
fila += "<td>" + emp.direccion + "</td>";
fila += "<td>" + emp.email + "</td>";
fila += "<td>" + emp.telefono + "</td>";
fila += "<td>" + emp.sueldoBase + "</td>";
fila += "<td>" + emp.tipoEmpleado + "</td>";
fila += "<td>" + emp.tipoBonificacion + "</td>";
fila += "<td>" + emp.sueldoTotal + "</td>";
fila += "</tr>";

    tbody.innerHTML += fila;
  });

  document.getElementById("totalNomina").innerText =
    "Total Nómina: $" + totalNomina.toLocaleString();
}

window.onload = function () {
  document.getElementById("divAgregarEmpleado").style.display = "none";
  mostrarEmpleados();
};
