import React from 'react';

export const useDeteccion = () => {
  const generar = (cadena = '', isEven = true, onLeft = false) => {
    let bit = '';
    let result = '';
    if (cadena.length === 7) {
      if (isEven) {
        bit = isPair(counter(cad)) == true ? '0' : '1';
      } else {
        bit = isPair(counter(cad)) == true ? '1' : '0';
      }
    }
    if (onLeft) {
      result += bit;
    } else {
      result = bit + cadena;
    }
    return result.trim();
  };




  const obtenerValores = (cadena) => {
    let aux = cadena.trim()
    const result = aux.split('').map( c => {
        const bit = c.charCodeAt(0).toString(2).split('');
        const isEven = bit.filter( n => n === '1').length % 2 === 0;

        return {
            val: c,
            bit: bit.join(''),
            parity: isEven ? '0' : '1',
        }
    })

    return result;
  }

  const getVRC = (arr = []) => {
    const bits = arr.map(c => c.bit);

    let vrc = ''
    for (const bit of bits) {
        vrc += bit.split('').filter( n => n === '1').length % 2 === 0 ? '0' : '1'
    }
    return vrc;
  }

  return {


    obtenerValores,
    getVRC,
  };
};
