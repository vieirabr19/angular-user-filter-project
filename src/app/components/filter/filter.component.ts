import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  foods = [
    { value: 'Teste 1', viewValue: 'Teste 1' },
    { value: 'Teste 2', viewValue: 'Teste 2' },
    { value: 'Teste 3', viewValue: 'Teste 3' },
  ];
}
