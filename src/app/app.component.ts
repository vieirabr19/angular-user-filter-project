import { Component, OnInit } from '@angular/core';

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

    filteredList = this.filterUserListByName(filterOptions.name, userList);
    filteredList = this.filterUserListByStatus(
      filterOptions.status,
      filteredList
    );

    return filteredList;
  }

  filterUserListByStatus(
    status: boolean | undefined,
    userList: IUser[]
  ): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;

    if (STATUS_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) => user.ativo === status);

    return filteredList;
  }

  filterUserListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return userList;
    }

    const filteredList = userList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }
}
