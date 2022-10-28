import React from 'react';

export const useDeteccion = () => {

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
    let vrc = ''
    let  a1 = 0
    let  a2 = 0
    let  a3 = 0
    let  a4 = 0
    let  a5 = 0
    let  a6 = 0
    let  a7 = 0

    for (let i = 0; i < arr.length; i++) {
        a1 += arr[i][0] === '1' ? 1 : 0 
        a2 += arr[i][1] === '1' ? 1 : 0 
        a3 += arr[i][2] === '1' ? 1 : 0 
        a4 += arr[i][3] === '1' ? 1 : 0 
        a5 += arr[i][4] === '1' ? 1 : 0 
        a6 += arr[i][5] === '1' ? 1 : 0 
        a7 += arr[i][6] === '1' ? 1 : 0
    }
    vrc = ((a1 % 2 === 0) ? '0' : '1' ) +
    ((a2 % 2 === 0) ? '0' : '1' ) + 
    ((a3 % 2 === 0) ? '0' : '1' ) + 
    ((a4 % 2 === 0) ? '0' : '1' ) + 
    ((a5 % 2 === 0) ? '0' : '1' ) + 
    ((a6 % 2 === 0) ? '0' : '1' ) + 
    ((a7 % 2 === 0) ? '0' : '1' ); 
    
    // return '0001010'
    return vrc
  }

  return {


    obtenerValores,
    getVRC,
  };
};
