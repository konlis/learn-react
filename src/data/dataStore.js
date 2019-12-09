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
  pages: {
    home: '/',
    info: '/info',
    faq: '/faq',
  },
  nav: {
    homePage: 'Home',
    infoPage: 'Info',
    faqPage: 'FAQ',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};


export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
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
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
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
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to remember!',
    description: 'If my brain dissapoint me.',
    image: 'https://blog.daveasprey.com/wp-content/uploads/2018/09/How-to-Hack-Your-Mental-Energy-to-Be-More-Productive_header-752x401.jpg',
  },
  {
    id: 'list-3',
    title: 'Things to check!',
    description: 'Are you sure?',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbgdlw_p71UN5olpv6Ih5XqrCNBS3L3ULVpsJskP4WE5Uj1132Q&s',
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
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
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
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const faq = {
  title: 'This is FAQ?',
  description: 'Yes',
  imageFaq: 'https://serialesrebrnegoekranu.pl/wp-content/uploads/2019/06/FAQ-Cz%C4%99%C5%9B%C4%87-2-Plakat-732x380.jpg',
  titleFaq: 'Frequently asked questions',
};

const info = {
  title: 'Check it out',
  description: 'This app help you to remember things.',
  imageInfo: 'https://intarchmed.com/wp-content/uploads/2019/11/about1.png',
  titleInfo: 'Say whaaat?',
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
  info: {...info},
  faq: {...faq},
};

export default initialStoreData;
