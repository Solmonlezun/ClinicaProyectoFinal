window.addEventListener('load', function() {
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


// Cree expresiones regulares para campo //
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
// cada campo sin rellenar es denominado false //
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

// Valido el formulario //
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

// Valido cada campo a rellenar siendo incorrecto o correcto a lo que requiere el formulario //
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
// Valida que las contraseñas coincidan entre si y tengan de 4 a 12 digitos //
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}
// Retorno el valor del evento asignado al presionar una tecla, asi, como el evento de desenfocar //
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// Evito que por default el formulario se envíe sin validar todos los campos correctamente //
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
     //ciclo de confirmacion, si encuentra todos los campos validos envia un mensaje, al igual que si es incorrecto. //
	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
});

// storage// 

let database = 'formulario'
//función que obtiene datos del localStorage
const getData = async () => {
const res = await localStorage[database] ? JSON.parse(localStorage[database]) : []
return res
}

//función que llena datos del localStorage
const setData = (data) => {
localStorage[database] = JSON.stringify(data)
}

const formId = "grupo__usuario";
let form = document.querySelector(`#${formId}`);

const datosFormulario = [];
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");


const obtenerDatos = async () => {
  const datos = await getData()

  usuario.value = datos[0].usuario
  nombre.value = datos[0].nombre
  password.value = datos[0].password
  password2.value = datos[0].password2
  email.value = datos[0].correo
  telefono.value = datos[0].telefono
}


//Cree un elemento que aparece en el documento
let caja = document.createElement("div")
let encabezado = document.createElement("h1")

encabezado.innerText ="Formulario de usuario"
caja.appendChild(encabezado)
document.querySelector("main").appendChild(caja)

