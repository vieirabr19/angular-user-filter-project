import { Component, OnInit } from '@angular/core';

import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { IUser } from './interfaces/user/user.interface';
import { filterUsersList } from './urils/filter-users-list';

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
    this.userListFiltered = filterUsersList(filterOptions, this.userList);
  }
}
