//let nombre: string = prompt("ingrese su nombre");

/* const ALTURA_MINIMA: number = 1.3;

let alturaUsuario: number = Number(prompt("Ingrese la altura del usuario:"));

if (alturaUsuario >= ALTURA_MINIMA) {
  console.log("la altura es " + alturaUsuario + " Tiene permitido el ingreso");
} else {
  console.log(
    "la altura es " + alturaUsuario + " No tiene permitido el ingreso"
  );
}
 */
let usuarioRegistrado: string = "juan";
let claveRegistrada: string = "claveJuan";

//console.log("Ingrese  su nombre de usuario");
let nombreDeUsuario: string | null = prompt("Ingrese la altura del usuario:");
//console.log("Ingrese su contraseña");
let contrasena: string | null = prompt("Ingrese su contraseña");

if (nombreDeUsuario === usuarioRegistrado && contrasena === claveRegistrada) {
  console.log("Usted ingreso correctamente");
} else {
  console.log("Usuario y/o contraseña incorrectos");
}
//while()
