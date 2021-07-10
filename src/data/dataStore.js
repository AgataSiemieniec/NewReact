export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things that I planned!',
  image: '../src/images/image.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'AAAAA',
        },
        {
          key: 1,
          title: 'BBBBB',
        },
      ],
    },
    {
      key: 1,
      title: 'Projects',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'CCCCC',
        },
        {
          key: 1,
          title: 'DDDDD',
        },
      ],
    },
    {
      key: 2,
      title: 'Articles',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'EEEEE',
        },
        {
          key: 1,
          title: 'FFFFF',
        },
      ],
    },
  ],
};
