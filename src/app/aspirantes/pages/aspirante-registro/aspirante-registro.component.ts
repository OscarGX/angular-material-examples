import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ONLY_LETTERS_REGEX } from '../../../shared/utils/regexs';
import { CustomValidations } from '../../../shared/helpers/validations';

@Component({
  selector: 'app-aspirante-registro',
  templateUrl: './aspirante-registro.component.html',
  styleUrls: ['./aspirante-registro.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false, showError: true }
    }
  ]
})
export class AspiranteRegistroComponent implements OnInit {

  public form1!: FormGroup;
  public form2!: FormGroup;
  public form3!: FormGroup;
  public form4!: FormGroup;

  constructor(private _fb: FormBuilder) { 
    this.createForm1();
    this.createForm2();
    this.createForm3();
    this.createForm4();
  }

  ngOnInit(): void {
  }

  //#region Formulario Step 1 Region

  //#region Instanciación, configuración y asignación de validaciones del formulario 1

  private createForm1(): void {
    this.form1 = this._fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern(ONLY_LETTERS_REGEX),
        CustomValidations.noMoreThanOneSpace
      ]],
      apellidoPaterno: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(ONLY_LETTERS_REGEX),
        CustomValidations.noMoreThanOneSpace
      ]],
      apellidoMaterno: ['', [
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern(ONLY_LETTERS_REGEX),
        CustomValidations.noMoreThanOneSpace
      ]],
      curp: ['', [
        Validators.required,
        CustomValidations.validateCurp
      ]],
      estadoCivil: ['', [
        Validators.required
      ]],
      fechaNacimiento: ['', [
        Validators.required
      ]]
    });
  }

  //#endregion

  //#region Form 1 Error Message Methods

  public getForm1ErrorMessage(controlName: string): string {
    const field = this.form1.get(controlName);
    if (field?.errors) {
      const errorKeys = Object.keys(field.errors);
      return this.getErrorMessage(errorKeys[0], field.errors, field);
    }
    return '';
  }

  private getErrorMessage(errorKey: string, errors: ValidationErrors, field: AbstractControl): string {
    let errorMessage = '';
    switch (errorKey) {
      case 'required':
        errorMessage = 'Este campo es requerido.';
        break;
      case 'minlength':
        errorMessage = `Este campo debe de tener al menos ${ errors.minlength.requiredLength } caractéres.`
        break;
      case 'maxlength':
        errorMessage = `Este campo no puede tener más de ${ errors.maxlength.requiredLength } caractéres.`
        break;
      case 'pattern':
        if (typeof errors.hasMoreThanOneSpace !== 'undefined') {
          errorMessage = 'Este campo no puede contener más de 2 espacios seguidos';
        } else if (field.value[0].includes(' ') || field.value[field.value.length - 1].includes(' ')) {
          errorMessage = 'Este campo no puede contener espacios en blanco';
        } else {
          errorMessage = 'Este campo solo acepta letras';
        }
        break;
        case 'hasMoreThanOneSpace':
          errorMessage = 'Este campo no puede contener más de 2 espacios seguidos';
          break;
        case 'isValidCurp':
          errorMessage = 'El Curp no es válido';
          break;
      default:
        break;
    }
    return errorMessage;
  }

  //#endregion

  //#region Form 1 Getters Validation

  public get isForm1NombreValid(): boolean {
    const nombre = this.form1.get('nombre');
    if (nombre !== null)
      return nombre.invalid && nombre.touched;
    return false;
  }

  public get isForm1ApaValid(): boolean {
    const apellidoP = this.form1.get('apellidoPaterno');
    if (apellidoP !== null)
      return apellidoP.invalid && apellidoP.touched;
    return false;
  }

  public get isForm1AmaValid(): boolean {
    const apellidoM = this.form1.get('apellidoMaterno');
    if (apellidoM !== null)
      return apellidoM.invalid && apellidoM.touched;;
    return false;
  }

  public get isForm1CurpValid(): boolean {
    const curp = this.form1.get('curp');
    if (curp !== null)
      return curp.invalid && curp.touched;;
    return false;
  }

  public get isForm1ECivilValid(): boolean {
    const estadoCivil = this.form1.get('estadoCivil');
    if (estadoCivil !== null)
      return estadoCivil.invalid && estadoCivil.touched;;
    return false;
  }

  public get isForm1FechaNValid(): boolean {
    const fechaNacimiento = this.form1.get('fechaNacimiento');
    if (fechaNacimiento !== null)
      return fechaNacimiento.invalid && fechaNacimiento.touched;
    return false;
  }

  //#endregion 

  //#endregion

  private createForm2(): void {
    this.form2 = this._fb.group({
      carajo: ['', []]
    });
  }

  private createForm3(): void {
    this.form3 = this._fb.group({
      carajo: ['', []]
    });
  }

  private createForm4(): void {
    this.form4 = this._fb.group({
      carajo: ['', []]
    });
  }

  public onForm1Submit(): void {
    console.log('olv');
  }

}
