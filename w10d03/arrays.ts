const nums: (number | string)[] = [1, 2, 3];

nums.push(4);
nums.push('hello');

interface IUser {
  id?: number | string;
  username: string;
  password: string;
}

const users: IUser[] = [];
