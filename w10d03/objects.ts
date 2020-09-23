interface IUser {
  id?: number | string;
  username: string;
  password: string;
}

const user: IUser = {
  username: 'jstamos',
  password: '1234'
};

const user2: IUser = {} as IUser;
