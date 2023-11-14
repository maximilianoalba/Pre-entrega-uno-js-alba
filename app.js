/*creamos un pedido online de un local de comidas*/
let nombre;
let metodoPago;
let menu;
let pedido;
let continuar;
let promocion;
let cantidad;
let total;

const lomo = "1";
const hamburgesa = "2";
const pizza = "3";
const empanadas = "4";
const salir = "S";
const SI = "si";
const NO = "no";

nombre = prompt("Bienvenidos a Sabor a Rico, ingrese su  nombre");

do {
  pedido = prompt(
    "Elija unas de las siguientes Promociones" +
      `\n` +
      "1-Promo lomo con papas $3000" +
      "\n" +
      "2-Promo hamburgesa con papa $1500" +
      "\n" +
      "3- Promo pizza + 6 empanadas $2000" +
      "\n" +
      "4-Promo empanadas $2500" +
      "\n" +
      '"S" salir' +
      "\n" +
      "selecciona la promo que desees:"
  );

  cantidad = +prompt("Seleccione la cantidad de promociones");

  if (
    pedido != lomo &&
    pedido != hamburgesa &&
    pedido != pizza &&
    pedido != empanadas &&
    pedido != salir
  ) {
    alert("!usted a ingresado una opcion incorrecta¡");
  } else {
    if (pedido !== "S") {
      switch (pedido) {
        case lomo:
          promocion = 3000;
          alert(`usted selecciono ${cantidad} promo de lomo con papas`);
          break;
        case hamburgesa:
          promocion = 1500;
          alert(`usted selecciono ${cantidad} promo de hamburgesa con papas`);
          break;
        case pizza:
          promocion = 2000;
          alert(`usted selecciono ${cantidad} promo de pizza y empanadas`);
          break;
        case empanadas:
          promocion = 2500;
          alert(`usted selecciono ${cantidad} promo de empanadas`);
          break;
        default:
          alert("!ingrese una promocion  validad¡");
      }
      alert(
        `el monto total de las promociones que eligio es : $${
          promocion * cantidad
        }`
      );
    }
  }
} while (continuar === SI);

metodoPago = prompt(
  `${nombre} ingresa el metodo de pago:` +
    "\n" +
    "1-Tarjeta de credito" +
    "\n" +
    "2-Tarjeta de debito"
);

prompt("ingrese numero de tarjeta de credito");
prompt("ingrese codigo de seguridad");

total = promocion * cantidad;

alert(
  `El total de su Compra es: $${total}, el  mismo se descontara de su tarjeta ingresada`
);

alert(`!Gracias por visitar Sabor a Rico ${nombre}¡`);
