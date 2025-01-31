// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var frase = '';
    sw = 0;
    for (i = 0; i < palabras.length; i++) {
        if (i === palabras.length - 1 && sw < 1) {
            frase = frase + palabras[i];
            sw = 1;
        } else {
            frase = frase + palabras[i] + ' ';
        }

    }
    return frase;
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (elemento === array[i]) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    var suma = 0;
    for (i = 0; i < resultadosTest.length; i++) {
        suma = suma + resultadosTest[i];
    }
    return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    num_mayor = 0;
    var i = 0
    num_mayor = numeros[0];
    do {
        i++;
        if (num_mayor < numeros[i]) {
            num_mayor = numeros[i];
        }

    } while (i < numeros.length)
    return num_mayor;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    str = '';
    num = 1;
    if (arguments.length === 0) {
        return 0;
    } else {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments.length === 1) {
                str = arguments[i];
                return str;
            } else {
                num = num * arguments[i];
            }
        }
    }
    return num;
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    count = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 18) {
            count++;
        }
    }
    return count;
}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    var dia = '';
    if (numeroDeDia === 1 || numeroDeDia === 7) {
        return dia = 'Es fin de semana';
    } else if (diaDeLaSemana > 7) {
        return dia = 'Dia incorrecto';
    } else {
        return dia = 'Es dia Laboral';
    }
}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aqui
    var str = '';
    str = String(n);
    if (str.charAt(0) === '9') {
        return true;
    } else {
        return false;
    }
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí
    var sw = 0;
    var com = arreglo[0];
    if (arreglo.length === 0) {
        return false;
    } else {
        for (var i = 0; i < arreglo.length; i++) {
            if (com === arreglo[i]) {
                sw = 0;
            } else {
                sw = 1;
                return false;
            }
        }
        if (sw === 0) {
            return true;
        }
    }

}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    var n_array = [];
    sw = 0;
    if (array.length === 0) {
        return 'No se encontraron los meses pedidos';
    } else {
        for (var i = 0; i < array.length; i++) {
            if (array[i].toLowerCase() === 'enero' || array[i].toLowerCase() === 'marzo' || array[i].toLowerCase() === 'noviembre') {
                n_array[sw] = array[i];
                sw = sw + 1;
            }
        }
        if (n_array.length === 3) {
            return n_array;
        } else {

            return 'No se encontraron los meses pedidos';
        }
    }
}



function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    var n_array = [];
    var sw = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            n_array[sw] = array[i];
            sw = sw + 1;
        }
    }
    return n_array;
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var n_array = [];
    var sw = 0;
    var cont = 1;
    var ite = 1;
    while (ite <= 10) {
        ite++;
        n_array[sw] = numero + (2 * cont);
        sw++;
        cont++;
        if (numero + (2 * cont) === sw) {
            return 'Se interrumpió la ejecución';
            break;
        }
    }
    return n_array;
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    var n_array = [];
    var sw = 0;
    var cont = 1;
    var ite = 1;
    while (ite <= 10) {
        ite++;
        if (ite !== 5) {
            n_array[sw] = numero + (2 * cont);
            sw++;
            cont++;
        } else {
            continue;
        }

    }
    return n_array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};