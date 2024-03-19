import { Component, EventEmitter, Output } from '@angular/core';

import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output('onFilter') onFilterEmitter = new EventEmitter();

  statusList = [
    { description: 'Selecione', value: undefined },
    { description: 'Ativo', value: true },
    { description: 'Inátivo', value: false },
  ];

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  onFilter() {
    this.onFilterEmitter.emit(this.filterOptions);
  }
}
