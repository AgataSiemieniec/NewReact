export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
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
  description: 'Interesting things I want to check out!',
  image: '../src/images/image.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Projects',
      icon: 'laptop-code',
      cards: [
        {
          key: 0,
          title: 'To-do app',
        },
        {
          key: 1,
          title: 'Portfolio',
        },
      ],
    },
    {
      key: 2,
      title: 'Articles',
      icon: 'newspaper',
      cards: [
        {
          key: 0,
          title: '-',
        },
        {
          key: 1,
          title: '-',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: '../src/images/image.jpg',
  },
]; 

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Projects',
    icon: 'laptop-code',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Articles',
    icon: 'newspaper',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'To-do app',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Portfolio',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: '-',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: '-',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;