import { endOfDay, isWithinInterval } from 'date-fns';
import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';

const filterUsersListByName = (
  name: string | undefined,
  userList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPE = name === undefined;

  if (NAME_NOT_TYPPE) {
    return userList;
  }

  const filteredList = userList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  userList: IUser[]
): IUser[] => {
  const STATUS_NOT_TYPPE = status === undefined;

  if (STATUS_NOT_TYPPE) {
    return userList;
  }

  const filteredList = userList.filter((user) => user.ativo === status);

  return filteredList;
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  userList: IUser[]
): IUser[] => {
  const DATES_NOT_TYPPE = startDate === undefined || endDate === undefined;
  if (DATES_NOT_TYPPE) {
    return userList;
  }

  const filteredList = userList.filter((user) =>
    isWithinInterval(user.dataCadastro, {
      start: startDate,
      end: endOfDay(endDate),
    })
  );

  return filteredList;
};

export const filterUsersList = (
  filterOptions: IFilterOptions,
  userList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, userList);

  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};
