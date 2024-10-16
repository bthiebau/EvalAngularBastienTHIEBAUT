import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule , NgIf],
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.scss']
})
export class AddCarFormComponent implements OnInit{

  @Output() formSubmitted: EventEmitter<AddCarFormComponent> = new EventEmitter<AddCarFormComponent>()

  carForm: FormGroup;

    ngOnInit(): void {
      this.carForm = new FormGroup({
        brand: new FormControl('', [Validators.required]),
        model: new FormControl ('', [Validators.required]),
        picture: new FormControl('', [Validators.required, Validators.pattern('(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)')])
      });
    }
    
  onSubmit(): void {
    if (this.carForm.valid) {

      const newCar = this.carForm.value;
      this.formSubmitted.emit(newCar)

      console.log('Nouvelle voiture ajoutée : ', newCar);

    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
