import { AbstractControl, ValidationErrors } from "@angular/forms";
import { NO_MORE_THAN_ONE_SPACE_REGEX, CURP_REGEX } from '../utils/regexs';
import { validateCurpDigit } from "../utils/validation.functions";

export class CustomValidations {
    
    /**
     *
     * @param control La instancia del control a validar.
     * @returns Un objeto tipo ValidationErrors o null.
     * @description Este método se encarga de validar que no existan más de 2 espacios seguidos en
     * una cadena, en este caso, la cadena es el valor de un control de un formulario reactivo.
     */
    public static noMoreThanOneSpace(control: AbstractControl): ValidationErrors | null {
        if (NO_MORE_THAN_ONE_SPACE_REGEX.test(control.value))
            return { hasMoreThanOneSpace: true };
        return null;
    }
    
    /**
     * 
     * @param control La instancia del control a validar.
     * @returns Un objeto de tipo ValidationErrors o null.
     * @description Este método se encarga de validar una CURP, incluyendo el dígito verificador
     * que las hace únicas de acuerdo al gobierno de México.
     */
    public static validateCurp(control: AbstractControl): ValidationErrors | null {
        const curp = control.value.toUpperCase();
        const curpRegexMatch = curp.match(CURP_REGEX);
        if (curpRegexMatch === null)
            return { isValidCurp: false };
        const curpDigit = Number.parseInt(curpRegexMatch[2]);
        return curpDigit !== validateCurpDigit(curpRegexMatch[1]) ? { isValidCurp: false } : null;
    }

}