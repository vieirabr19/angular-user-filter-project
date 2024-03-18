import { Component, EventEmitter, Output } from '@angular/core';

import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  userList: IUser[] = UsersList;

  @Output() selectedUserist = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log(user);
    this.selectedUserist.emit(user);
  }
}
