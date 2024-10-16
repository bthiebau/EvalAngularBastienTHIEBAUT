import { CommonModule, NgIf } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { CardComponent } from '../../components/card/card.component'
import { TableComponent } from '../../components/table/table.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { Car, CarService } from '../../services/car/car.service'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly router = inject(Router)
  private readonly carService = inject(CarService)

  cars: Car[] = []
  selectedCar: Car;
  searchTerm: string = '';
  filteredCars: Car[]

  ngOnInit(): void {
    this.carService.cars$.subscribe((cars) => {
      this.cars = cars;
      this.filteredCars = cars;
    });
  }


  applyFilter(): void {
    const filterValue = this.searchTerm.toLowerCase();

    if (filterValue.length >= 3) {
      this.filteredCars = this.cars.filter(car =>
        car.brand.toLowerCase().startsWith(filterValue) ||
        car.model.toLowerCase().startsWith(filterValue)
      );
    } else {
      this.filteredCars = [...this.cars];
    }
  }
  
  onClickChangeSelectedCar (idCar: number): void {
    this.selectedCar = this.cars.find(car => car.id === idCar)
  }

  onClickDeteleSelectedCar (idCar: number): void {
    //On cherche l'index correspondant à l'ID passé en param
    const index = this.cars.findIndex(car => car.id === idCar);

    // Supprime la row correspondant a l'id et reaffecte les id dans l'ordre numérique
    if (index !== -1) {
      this.cars.splice(index, 1);
      this.cars.forEach((car, idx) => {
        car.id = idx + 1;
      });
      this.applyFilter();
    }
  }

  onClickAddCar (): void {
    this.router.navigate(['/nouvelle-voiture'])
  }
}