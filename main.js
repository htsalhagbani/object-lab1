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