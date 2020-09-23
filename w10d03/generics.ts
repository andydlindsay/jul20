interface IContainer<T, S> {
  title: string;
  contents: T;
  moreStuff: S;
}

const stringContainer: IContainer<string, boolean> = {
  title: 'string container',
  contents: 'hello there',
  moreStuff: false
}

const numContainer: IContainer<number, string[]> = {
  title: 'number container',
  contents: 42,
  moreStuff: ['abc']
}
