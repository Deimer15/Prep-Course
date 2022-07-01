// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    function convert() {
        /*var cla = Object.keys(objeto);
        array = [];
        for (var i = 0; i < cla.length; i++) {
            array.push([cla[i], objeto[cla[i]]]);
        }
        return array;*/
        var ob = Object.entries(objeto);
        return ob;

    }
    return convert();
}


function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    var cont = 1;
    var obj = {};
    for (var i = 0; i < string.length; i++) {
        for (var f = 0; f < string.length; f++) {
            if (string.charAt(i).toLocaleLowerCase() === string.charAt(f).toLowerCase()) {
                cont++;
            }
        }
        obj[string.charAt(i)] = cont - 1
        cont = 1;
    }
    return obj;
}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    var minu = '',
        mayu = '';
    var temp = '';
    for (var i = 0; i < s.length; i++) {
        temp = s.charAt(i);
        if (temp === temp.toUpperCase()) {
            mayu += temp;
        } else {
            if (temp === temp.toLowerCase()) {
                minu += temp;
            }
        }
    }
    return mayu + minu;
}


function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    function voltear() {
        var n_frase = '',
            str_final = '';
        var c_palabra = 0;
        for (var i = str.length - 1; i > -1; i--) {
            n_frase += str.charAt(i);
        }
        for (i = str.length; i > -1; i--) {
            if (n_frase.charAt(i) === " " && c_palabra === 0) {
                str_final += n_frase.substring(str.length, i + 1);
                c_palabra = i;
            } else if (n_frase.charAt(i) === " " && i - 1 !== -1) {
                str_final += n_frase.substring(c_palabra, i);
                c_palabra = i;
            } else if (i <= 0) {
                str_final += ' ' + n_frase.substring(c_palabra, i);
            }
        }
        return str_final;

    }
    return voltear();
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    function cap() {
        var sw = 0;
        var n_str = numero.toString();
        var j = n_str.length - 1,
            i = 0;
        do {
            if (n_str.charAt(i) === n_str.charAt(j)) {
                sw = 0;
            } else {
                sw = 1;
                break;
            }
            i++
            j--;

        } while (i < n_str.length);
        if (sw === 0) {
            return 'Es capicua';
        } else {
            return 'No es capicua';
        }
    }
    return cap();

}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    function eliminar() {
        var n_cad = '';
        for (let i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i).toLowerCase() !== 'a' && cadena.charAt(i).toLowerCase() !== 'b' && cadena.charAt(i).toLowerCase() !== 'c') {
                n_cad += cadena.charAt(i)
            }
        }
        return n_cad;
    }
    return eliminar();

}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    array = arr.sort((n1, n2) => n1.length - n2.length);
    return array;
}


function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    let array_final = [];
    for (let i = 0; i < arreglo1.length; i++) {
        for (let j = 0; j < arreglo2.length; j++) {
            if (arreglo1[i] === arreglo2[j] && arreglo1[i] !== undefined) {
                array_final.push(arreglo1[i]);
            }
        }
    }
    return array_final;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};