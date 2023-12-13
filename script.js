const nombre = "Fridda Pérez"
//alert(nombre);

console.log(nombre);

document.write(nombre);

console.log(document.getElementById('titulo'));
let elementoHTMLTitulo = document.getElementById('titulo');

let elementoDeTypewriter = new Typewriter(elementoHTMLTitulo, {
    loop: true
});

elementoDeTypewriter.typeString('Fridda Pérez')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web JR.')
    .pauseFor(2500)
    .deleteAll()
    .start();
