import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForOf } from '@angular/common'
import { Car } from '../../entities/car.entity'



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
    @Input({required: true})
    cars: Car[] = []

    @Output() selected: EventEmitter<number> = new EventEmitter<number>()
    @Output() deleteSelected: EventEmitter<number> = new EventEmitter<number>()

  onClickChangeSelectedCar (idCar: number): void {
    this.selected.emit(idCar)
  }

  onClickDeleteSelectedCar (idCar: number): void {
    this.deleteSelected.emit(idCar)
  }
}
