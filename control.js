
function validar() {
	var nombre, clave; formulario;
	formulario = document.getElementById("formulario");
	nombre = document.getElementById("Usuario").value;
	clave = document.getElementById("pasword").value;
	expresion = /@/;
	if (nombre === "") {
		alert("el campo usuario está vacío");
		return false;
	}
	 if (clave === "") {
		alert("el campo clave está vacío");
		return false;
	}
	 if (!expresion.test(nombre)){
		alert("ingresa un @ en el nombre de usuario");
		return false;
	}

}
  	formulario.addEventListener("submit", (e) => {
  		e.preventDefault();
  		validar();
  	});