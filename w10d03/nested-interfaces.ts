interface IAnimal {
  breed: string;
  age: number;
}

interface IOwner {
  name: string;
  animals: IAnimal[];
  bestFriend: IAnimal;
}
