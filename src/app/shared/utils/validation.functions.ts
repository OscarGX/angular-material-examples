/**
 * 
 * @param curp17 Los primeros 17 dígitos de una CURP
 * @returns El dígito verificador en función de la CURP.
 * @description Esta función se ecarga de calcular el dígito verificador de una CURP
 * dada.
 */
export const validateCurpDigit = (curp17: string): number => {
    const diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let lngSuma = 0.0;
    let lngDigito = 0.0;
    for(let i=0; i<17; i++)
        lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
    lngDigito = 10 - lngSuma % 10;
    if (lngDigito === 10) 
        return 0;
    return lngDigito;
}