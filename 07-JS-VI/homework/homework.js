// Do not change any of the function names

function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    var nm = [];
    for (var i = 0; i < nombre.length; i++) {
        if (i === 0) {
            nm[0] = nombre[0].toUpperCase();
        } else {
            nm[i] = nombre[i];
        }
    }
    var frase = nm.reduce(function(acc, elemento) {
        return acc + elemento;
    });
    return frase;
}

function invocarCallback(cb) {
    // Invoca al callback `cb`
    //Tu código:
    function agregar(usuario, cb) {
        return cb(usuario);
    }
    agregar(1, cb);
}

function operacionMatematica(n1, n2, cb) {
    //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:
    function restar(n1, n2, cb) {
        return cb(n1 - n2);
    }
    restar(5, 9, cb);
}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
    function sumar_array(numeros, cb) {
        const sum = numeros.reduce(function(acc, elemento) {
            return acc + elemento;
        });
        return cb(sum);
    }
    sumar_array(numeros, cb);
}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    //Tu código:
    array.forEach(function(elemento, indice) {
        return cb(elemento);
    });
}

function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:
    var n_array = [];
    array.map(function(x) {
        return n_array.push(cb(x));
    });
    return n_array;
}

function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    var n_array = [];
    array.map(function(x) {
        if (x.charAt(0).toLowerCase() === 'a') {
            return n_array.push(x);
        };
    });
    return n_array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    mayuscula,
    invocarCallback,
    operacionMatematica,
    sumarArray,
    forEach,
    map,
    filter
};