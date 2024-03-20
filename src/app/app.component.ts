import { Component, OnInit } from '@angular/core';

import { endOfDay, isWithinInterval } from 'date-fns';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];
  showUserDetails = false;

  ngOnInit() {
    setTimeout(() => {
      this.userList = UsersList;
      this.userListFiltered = UsersList;
    }, 1);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = this.filterUsersList(filterOptions, this.userList);
  }

  filterUsersList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, userList);

    filteredList = this.filterUsersListByStatus(
      filterOptions.status,
      filteredList
    );

    filteredList = this.filterUsersListByDate(
      filterOptions.startDate,
      filterOptions.endDate,
      filteredList
    );

    return filteredList;
  }

  filterUsersListByDate(
    startDate: Date | undefined,
    endDate: Date | undefined,
    userList: IUser[]
  ): IUser[] {
    const DATES_NOT_TYPPE = startDate === undefined || endDate === undefined;

    if (DATES_NOT_TYPPE) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endOfDay(endDate),
      })
    );

    return filteredList;
  }

  filterUsersListByStatus(
    status: boolean | undefined,
    userList: IUser[]
  ): IUser[] {
    const STATUS_NOT_TYPPE = status === undefined;

    if (STATUS_NOT_TYPPE) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPE = name === undefined;

    if (NAME_NOT_TYPPE) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }
}
