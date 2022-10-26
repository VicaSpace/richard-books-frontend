const DATA = {
  books: [
    {
      name: "Harry Potter and the Philosopher's Stone",
      img: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
      id: 1,
      authorName: 'J. K. Rowling',
      // noOfPages: 223,
      // dateOfPublishing: '26 June 1997',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and the Chamber of Secrets',
      img: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
      id: 2,
      authorName: 'J. K. Rowling',
      // noOfPages: 251,
      // dateOfPublishing: '2 July 1998',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and the Prisoner of Azkaban',
      img: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
      id: 3,
      authorName: 'J. K. Rowling',
      // noOfPages: 317,
      // dateOfPublishing: '8 July 1999',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and Goblet of Fire',
      img: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
      id: 4,
      authorName: 'J. K. Rowling',
      // noOfPages: 636,
      // dateOfPublishing: '8 July 2000',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and the Order of the Phoenix',
      img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
      id: 5,
      authorName: 'J. K. Rowling',
      // noOfPages: 766,
      // dateOfPublishing: '21 June 2003',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and the Half-Blood Prince',
      img: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
      id: 6,
      authorName: 'J. K. Rowling',
      // noOfPages: 607,
      // dateOfPublishing: '16 July 2005',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Harry Potter and the Deathly Hallows',
      img: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
      id: 7,
      authorName: 'J. K. Rowling',
      // noOfPages: 607,
      // dateOfPublishing: '21 July 2007',
      // illustrator: 'Cliff Wright',
      genre: 'Fiction',
      // publisher: 'Bloomsbury',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Kane and Abel',
      img: 'https://upload.wikimedia.org/wikipedia/en/f/f3/KaneAndAbel.jpg',
      id: 8,
      authorName: 'Jeffrey Archer',
      // noOfPages: 512,
      // dateOfPublishing: '1979',
      // illustrator: null,
      genre: 'Fiction',
      // publisher: 'Hodder & Stoughton',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    },
    {
      name: 'Only time will tell',
      img: 'https://upload.wikimedia.org/wikipedia/en/f/fd/OnlyTimeWillTell.jpg',
      id: 9,
      authorName: 'Jeffrey Archer',
      // noOfPages: 400,
      // dateOfPublishing: 'March 2011',
      // illustrator: null,
      genre: 'Fiction',
      // publisher: 'Macmillan',
      price: 5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 5
      // createdAt: new Date(),
      // updatedAt: new Date()
    }
  ],
  authors: [
    {
      id: 1,
      name: 'J. K. Rowling',
      // bornOn: '31 July 1965',
      // spouce: 'Neil Murray',
      // children: 3,
      // bornIn: 'USA',
      // createdAt: new Date(),
      // updatedAt: new Date(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/440px-J._K._Rowling_2010.jpg'
    },
    {
      id: 2,
      name: 'Jeffrey Archer',
      // bornOn: '15 April 1940',
      // spouce: 'Mary Weeden',
      // children: 2,
      // createdAt: new Date(),
      // updatedAt: new Date(),
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jeffrey_Archer_%40_Oslo_bokfestival_2012_4.jpg/440px-Jeffrey_Archer_%40_Oslo_bokfestival_2012_4.jpg'
    }
  ]
}

export default DATA
