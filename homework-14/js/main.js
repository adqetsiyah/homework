const myProfile = {
  name: 'Адриана',
  middlename: 'Валериевна',
  lastname: 'Вальчук',
  birthday: '28.02.1995',
  age: 30,
  greet: function (name) {
    return `Hello ${name}`
  }
}

console.log(myProfile.greet(myProfile.name))

// ----------------------------

const users = [
  {
    name: 'Роман',
    age: 35,
    city: 'Краснодар',
    role: 'admin',
  },
  {
    name: 'Александр',
    age: 20,
    city: 'Москва',
    role: 'user',
  },
  {
    name: 'Ирина',
    age: 60,
    city: 'Майкоп',
    role: 'user',
  },
  {
    name: 'Константин',
    age: 18,
    city: 'Краснодар',
    role: 'user',
  },
  {
    name: 'Адриана',
    age: 30,
    city: 'Краснодар',
    role: 'admin',
  }
];

let simpleUserCountuserCount = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].role !== 'admin') {
    simpleUserCountuserCount++;
  }
}

console.log('Количество простых пользователей:', simpleUserCountuserCount);