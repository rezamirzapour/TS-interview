const users: string[] = ['reza mirzapour', 'mehri chehrepak']

// complete parameters and body of mapCallback function
const mapCallback = (user: string, index: number) => {

}

users.map(mapCallback);
/*
[
  {
    id: 1,
    firstName: "Reza",
    lastName: "Mirzapour",
    createdAt: '7/28/2025',
  },
  {
    id: 2,
    firstName: "Mehri",
    lastName: "Chehrepak",
    createdAt: '7/28/2025',
  },
]
*/
