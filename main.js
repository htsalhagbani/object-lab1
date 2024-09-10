const User = {
    name:"haneen",
    id:"12343322",
    email:"htsalhagbani@gmail.com",
    available: false,
    AvailabelFun() {
         if (this.available){
        return 'is available for work.'
        } else{ return ' is not available for work.'}
    },
    address: {
        street: 'mohammed khalid',
        city: {
            name: 'Riyadh',
            neighborhood: 'alqirwan'
        }
    },
    skills: ['Watch-tv', 'write-code', 'social-skills']
}

//part1
console.log(User);

//part2
console.log(User.name);

//part3
User.id = '000000000';
console.log(User.id);

//part4
delete User.email;
console.log(User.email);


//part5
User.available = true; 
console.log(User.AvailabelFun()); 

//part6
console.log(User.address);

//part7
console.log(User.address.city.neighborhood);

//part8
console.log(User.skills[2]);

//part9
console.log(User.skills.join(', '));

console.log("-----------lab2-----------");

//-----Lab2-------
characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


  //part1
const blueeye = characters.find(item => item.eye_color === 'blue');
console.log(blueeye.name);
console.log("--------------------");


//part2
const massisover50 = characters.find(item => item.mass > 50);
console.log(massisover50 );
console.log("--------------------");

//part3
const heightless200 = characters.filter(item => item.height < 200);
console.log(heightless200);
console.log("--------------------");

//part4
const male = characters.filter(item => item.gender === 'male');
console.log(male);
console.log("--------------------");

//part5
const names = characters.map(item => item.name);
console.log(names);
console.log("--------------------");

//part6
const height = characters.map(item => item.height);
console.log(height);
console.log("--------------------");

//part7
characters.sort((a, b) => a.mass - b.mass);
console.log(characters);
console.log("--------------------");

//part8
characters.sort((a, b) => b.height - a.height);
console.log(characters);
console.log("--------------------");

//part9
const massover40 = characters.every(item => item.mass > 40);
console.log(massover40);
console.log("--------------------");

//part10
const shotthan200 = characters.every(item => item.height < 200);
console.log(shotthan200);
console.log("--------------------");

//part11
const blueeye2 = characters.some(item => item.eye_color === 'blue');
console.log(blueeye2);
console.log("--------------------");

//part12
const tallover210 = characters.some(item => item.height > 210);
console.log(tallover210);
console.log("--------------------");
