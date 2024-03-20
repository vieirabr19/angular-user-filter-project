import { Component, EventEmitter, Output } from '@angular/core';

import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output('onFilter') onFilterEmiit = new EventEmitter();

  statusList = [
    { description: 'Todos', value: undefined },
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
    this.onFilterEmiit.emit(this.filterOptions);
  }
}
