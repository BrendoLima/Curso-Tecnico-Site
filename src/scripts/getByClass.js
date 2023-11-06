const log = (texto) => console.log("Elemento com a classe:" + texto);
const query = (texto) => document.querySelectorAll('[class*="' + texto + '"]');

function getByClass(texto) {
  let textClass = null;
  textClass = query(texto);
  console.log(texto);
  textClass ? log(texto + "encontrado.") : log(texto + "não encontrado.");
}
