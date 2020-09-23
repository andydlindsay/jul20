interface IUser {
  username: string;
  password: string;
}

const loginUser = (user: IUser): boolean => {
  return user.username === 'jstamos';
}

const potentialUser = {
  username: 'alice',
  password: '1234'
};

loginUser(potentialUser);
