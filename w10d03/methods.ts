interface IAuthor {
  name: string;
  writeBook: (title: string, b?: number) => boolean;
}

const myAuthor: IAuthor = {
  name: 'Agatha',
  writeBook: (title) => {
    return true;
  }
};
