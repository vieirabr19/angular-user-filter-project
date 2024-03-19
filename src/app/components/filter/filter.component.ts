import { Component } from '@angular/core';

import { IFilterOption } from '../../interfaces/filter-option.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inátivo', value: false },
  ];

  filterOption: IFilterOption = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  onFilterSelected() {
    console.log(this.filterOption);
  }
}
