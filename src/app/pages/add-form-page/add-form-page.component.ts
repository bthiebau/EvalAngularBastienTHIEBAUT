import { Component, inject,  } from '@angular/core';
import { AddCarFormComponent } from "../../components/add-car-form/add-car-form.component";
import { CarService } from '../../services/car/car.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-form-page',
  standalone: true,
  imports: [AddCarFormComponent],
  templateUrl: './add-form-page.component.html',
  styleUrl: './add-form-page.component.scss'
})
export class AddFormPageComponent {
  private readonly router = inject(Router)
  private readonly carService = inject(CarService)

  onSubmitAddCarForm(newCar) {
    this.carService.addCar(newCar)
    this.router.navigate(['/'])
  }
}
