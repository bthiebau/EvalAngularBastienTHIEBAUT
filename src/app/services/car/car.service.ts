import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Car {
  id: number;
  brand: string;
  model: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  
  private carsSubject = new BehaviorSubject<Car[]>([
    { id: 1, brand: 'BMW', model: 'X5', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_BMW_X5_M50d_Automatic_3.0.jpg/640px-2019_BMW_X5_M50d_Automatic_3.0.jpg' },
    { id: 2, brand: 'Audi', model: 'Q5', picture: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Audi_Q5_FY_Facelift_IMG_IMG_5014.jpg' },
    { id: 3, brand: 'Mercedes', model: 'GLE', picture: 'https://i.gaw.to/content/photos/41/09/410908_2021_Mercedes-Benz_GLE-Class.jpg' },
    { id: 4, brand: 'Tesla', model: 'Model X', picture: 'https://cdn.futura-sciences.com/sources/images/tesla-model-X-occasion.jpg' },
    { id: 5, brand: 'Porsche', model: 'Cayenne', picture: 'https://carfans.fr/wp-content/uploads/2023/04/Porsche-Cayenne-restyle-2023.jpeg.webp' },
    { id: 6, brand: 'Volvo', model: 'XC90', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinRftzJ2x1RczEqDZTNJHF2Q11ezNpV278A&s' },
    { id: 7, brand: 'Land Rover', model: 'Range Rover', picture: 'https://cdn.drivek.com/configurator-imgs/cars/fr/Original/LAND-ROVER/RANGE-ROVER/40715_SUV-5-DOORS/land-rover-range-rover-2021-side-front.jpg' },
    { id: 8, brand: 'Toyota', model: 'Land Cruiser', picture: 'https://content.presspage.com/uploads/1523/b9fff74e-97f2-454e-9fd5-27ccdc78f55f/1920_2024-landcruiser-mte-dynamic-022.jpg?10000' },
    { id: 9, brand: 'Jeep', model: 'Grand Cherokee', picture: 'https://automaxgroup.me/wp-content/uploads/2023/08/2024-Jeep-Grand-Cherokee-4xe.jpg' },
    { id: 10, brand: 'Ford', model: 'Explorer', picture: 'https://cdn.drivek.com/configurator-imgs/cars/fr/Original/FORD/EXPLORER-ELECTRIC/44148_SUV-5-DOORS/ford-explorer-electric-front-view.jpg' }
  ]);
  // Observable pour que d'autres composants puissent s'y abonner
  cars$ = this.carsSubject.asObservable();

  getCars(): Car[] {
    return this.carsSubject.value;
  }

  addCar(car: Car): void {
    const cars = this.getCars();
    //Assigner un nouvel ID (le prochain ID disponible)
    const newId = cars.length ? cars[cars.length - 1].id + 1 : 1;
    const newCar = { ...car, id: newId };
    this.carsSubject.next([...cars, newCar]); // Met à jour la liste des voitures
  }
}