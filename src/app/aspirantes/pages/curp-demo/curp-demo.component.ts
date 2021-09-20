import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidations } from '../../../shared/helpers/validations';
import { ONLY_NUMBERS_REGEX } from '../../../shared/utils/regexs';

@Component({
  selector: 'app-curp-demo',
  templateUrl: './curp-demo.component.html',
  styleUrls: ['./curp-demo.component.scss']
})
export class CurpDemoComponent implements OnInit {

  public form!: FormGroup;

  constructor(private _fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm(): void {
    this.form = this._fb.group({
      curp: ['', [Validators.required, CustomValidations.validateCurp]],
      edad: ['', [
        Validators.required,
        Validators.pattern(ONLY_NUMBERS_REGEX),
        Validators.maxLength(2),
        Validators.min(1),
        Validators.max(90)
      ]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this._snackBar.open('Formulario válido.', '', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 1500
      });
    } else {
      this._snackBar.open('Formulario inválido. xd', '', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 1500
      });
    }
  }

  public get isCurpValid(): boolean {
    const curp = this.form.get('curp');
    if (curp !== null)
      return curp.invalid && curp.touched;
    return false;
  }

  public get isAgeValid(): boolean {
    const edad = this.form.get('edad');
    if (edad !== null)
      return edad.invalid && edad.touched;
    return false;
  }

  public getErrorMessage(controlName: string): string {
    const field = this.form.get(controlName);
    if (field?.errors) {
      const errorKeys = Object.keys(field.errors);
      //return this.getErrorMessage(errorKeys[0], field.errors, field);
      return errorKeys[0] === 'required' ? 'Este campo es requerido' : 'El Curp no es válido';
    }
    return '';
  }

}
