let List = require('./list');
let fs = require('fs');
let readline = require('readline');
class Customer {
  constructor (name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

function displayList (list) {
  for (list.front(); list.hasNext(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement().name + ',' + list.getElement().movie);
    } else {
      console.log(list.getElement());
    }
  }
}

function checkOut (name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    let customer = new Customer(name, movie);
    customerList.append(customer);
    movieList.remove(movie);
    rentalList.append(movie);
  } else {
    console.log('movie: ' + movie +  'is not available');
  }
}

function checkIn (name, movie, rentalList, movieList, customerList) {
  if (rentalList.contains(movie)) {
    rentalList.remove(movie);
    movieList.append(movie);
    for(customerList.front(); customerList.hasNext(); customerList.next()) {
      if (customerList.getElement().name == name && customerList.getElement().movie == movie) {
        customerList.remove(customerList.getElement());
        return;
      }
    }
  } else {
    console.log('movie: ' + movie + 'is not rental for you');
  }
}


let movieList = new List();
let rentalList = new List();
let customerList = new List();

let res = fs.readFileSync(__dirname + '/movies.txt', 'utf-8');

res.split('\r\n').forEach(movie => {
  movieList.append(movie.trim());
});

console.log('Available movies: ');
displayList(movieList);
// checkOut('John', 'The Godfather', movieList, customerList);
// console.log('Customer Rentals: ');
// displayList(customerList);
// console.log('Available movie: ');
// displayList(movieList);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('What movie would you like: ', movie => {
    checkOut(name, movie, movieList, customerList);
    console.log('\r\nRental movie: ');
    displayList(rentalList);
    console.log('\r\nCustomer Rentals: ');
    displayList(customerList);
    console.log('\r\nAvailable movie: ');
    displayList(movieList);
    rl.question('\r\nEnter your name: ', name => {
      rl.question('Return movie: ', movie => {
        rl.close();
        checkIn(name, movie, rentalList, movieList, customerList);
        console.log('\r\nRental movie: ');
        displayList(rentalList);
        console.log('\r\nAvailable movie: ');
        displayList(movieList);
      })
    })
  })
});






