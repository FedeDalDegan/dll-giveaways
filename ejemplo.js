function obtenerMultiplosDeCuatro(desde) {
    const multiplosDeCuatro = [];

    for (let i = desde; i <= 1000; i++) {
        if (i % 4 === 0) {
            multiplosDeCuatro.push(i);
        }
    }

    return multiplosDeCuatro;
}

const desde = 1;
const multiplos = obtenerMultiplosDeCuatro(desde);
console.log("Multiplos de 4 en el rango de", desde, "a", multiplos);