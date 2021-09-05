import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ONLY_LETTERS_REGEX } from '../../../shared/utils/regexs';
import { CustomValidations } from '../../../shared/helpers/validations';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  public form!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.form = this._fb.group({
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
      ]]
    });
  }

  public getNombreErrorMessage(): string {
    const nombreField = this.form.get('nombre');
    if (nombreField?.hasError('required'))
      return 'Este campo es requerido';
    else if (nombreField?.hasError('minlength'))
      return 'Este campo debe tener al menos 5 caracteres';
    else if (nombreField?.hasError('maxlength'))
      return 'Este campo no puede tener más de 30 caracteres'
    else if (nombreField?.hasError('pattern') && nombreField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos'
    else if(nombreField?.hasError('pattern') && nombreField.value.length > 1) {
      return (nombreField.value[0].includes(' ') || nombreField.value[nombreField.value.length-1].includes(' ')) ? 
        'Este campo no puede contener espacios en blanco' : 'Este campo solo acepta letras'
    } 
    else if (nombreField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos';
    return '';
  }

  public getApaErrorMessage(): string {
    const apaField = this.form.get('apellidoPaterno');
    if (apaField?.hasError('required'))
      return 'Este campo es requerido';
    else if (apaField?.hasError('minlength'))
      return 'Este campo debe tener al menos 5 caracteres';
    else if (apaField?.hasError('maxlength'))
      return 'Este campo no puede tener más de 30 caracteres'
    else if (apaField?.hasError('pattern') && apaField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos'
    else if(apaField?.hasError('pattern') && apaField.value.length > 1) {
      return (apaField.value[0].includes(' ') || apaField.value[apaField.value.length-1].includes(' ')) ? 
        'Este campo no puede contener espacios en blanco' : 'Este campo solo acepta letras'
    } 
    else if (apaField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos';
    return '';
  }

  public getAmaErrorMessage(): string {
    const amaField = this.form.get('apellidoMaterno');
    if (amaField?.hasError('minlength'))
      return 'Este campo debe tener al menos 5 caracteres';
    else if (amaField?.hasError('maxlength'))
      return 'Este campo no puede tener más de 30 caracteres'
    else if (amaField?.hasError('pattern') && amaField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos'
    else if(amaField?.hasError('pattern') && amaField.value.length > 1) {
      return (amaField.value[0].includes(' ') || amaField.value[amaField.value.length-1].includes(' ')) ? 
        'Este campo no puede contener espacios en blanco' : 'Este campo solo acepta letras'
    } 
    else if (amaField?.hasError('hasMoreThanOneSpace'))
      return 'Este campo no puede contener más de 2 espacios seguidos';
    return '';
  }

  public get isForm1NombreValid(): boolean {
    const nombre = this.form.get('nombre');
    if (nombre !== null)
      return nombre.invalid && nombre.touched;
    return false;
  }

  public get isForm1ApaValid(): boolean {
    const apellidoP = this.form.get('apellidoPaterno');
    if (apellidoP !== null)
      return apellidoP.invalid && apellidoP.touched;
    return false;
  }

  public get isForm1AmaValid(): boolean {
    const apellidoM = this.form.get('apellidoMaterno');
    if (apellidoM !== null)
      return apellidoM.invalid && apellidoM.touched;
    return false;
  }

}
