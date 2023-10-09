window.onload = () => {
  // Evento de botón submit
  document.querySelector("#registrar").addEventListener("click", function() {
// Obtenemos los valores del formulario cuando se hace clic en el botón
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let contraseña = document.querySelector("#contraseña").value;
    let contraseña2 = document.querySelector("#contraseña2").value;
// Cree un objeto JSON con los datos del formulario
    let formData = {
      nombre: nombre,
      email: email,
      contraseña: contraseña,
      contraseña2: contraseña2,
    };

// Converti objeto a JSON
    let formDataJSON = JSON.stringify(formData);

    // Almacenamos la cadena JSON en el sessionStorage
    sessionStorage.setItem('formData', formDataJSON);
  });

  // Mostramos por consola los datos recuperados fuera del evento click
  console.log(JSON.parse(sessionStorage.getItem('formData')));
}


let caja = document.createElement("div")
let encabezado = document.createElement("h1")

encabezado.innerText ="Formulario de usuario"
caja.appendChild(encabezado)
document.querySelector("main").appendChild(caja)




//ejercicios
//JSON
// let jsonDeProductos = `[
  // {
  // "Obra social": "pami",
      // "plan": "familiar",
      // "identificacion": "2259334"
// },
// {
      // "Obra social": "osde",
      // "plan": "410",
      // "identificacion": "2482354"
    // } 
  // ]`
// console.log(jsonDeProductos);
// let jsonConvertido = JSON.parse(jsonDeProductos)
// console.log(jsonConvertido);

// const persona = {
  // nombre: "fulanito",
  // apellido: "pepe",
  // edad : 10,
// }
// let personaConvertida = JSON.stringify(persona)
// console.log(personaConvertida);

//storage


// localStorage.setItem("remember", true)
// localStorage.setItem("nombre", "pepito")
// localStorage.setItem("email", "pepito@gmail.com")
// localStorage.setItem("contraseña", 1265)

// for (let i = 0; i < localStorage.length; i++ ){
//  let clave = localStorage.key(i)
//  console.log(clave);
//}

// let remember = localStorage.getItem("remember")
// console.log(remember);

// sessionStorage.setItem("id", 1234)

// let id = sessionStorage.getItem("id")
// console.log(id);

//queryselector

// let parrafo = document.querySelector("div")
// console.log(parrafo);
