// Sampe datas
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For
// forEach
// Map
// Sort
// Filter
// Sort
// Factorial & Fibonacci of a number.

/* for loop */
console.error("**************************** For loops **********************");
for (let i = 0; i < companies.length; i++) {
  console.log("Sample For Loop: " + companies[i]);
}

console.error(
  "**************************** forEach loops **********************"
);

/* forEach loop */
companies.forEach(function(company) {
  console.log("forEach loop: " + company);
});
// es6 format
companies.forEach(company => console.log("Es6 fomat: " + company));

console.error("**************************** Filter **********************");

/* filter */
const canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log("using for loop(filter)" + canDrink);
// es6 formats for filter:
const drinkAge = ages.filter(age => age >= 21);
console.log("Get drink Age: " + drinkAge);

const companyInEighties = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
console.log("Get Companies start in 80's: " + companyInEighties);

const retailCompanies = companies.filter(
  retail => retail.category === "Retail"
);
console.log("Get only Retail Companies: " + retailCompanies);

/* map */
console.error("**************************** Maps **********************");

const companyName = companies.map(company => company.name);
console.log("Get company names: " + companyName);

const nameWithStartEnd = companies.map(company => {
  return ` ${company.name} & ${company.start}:${company.end}`;
});
console.log("Added template literalas: " + nameWithStartEnd);

/* sort */
console.error("**************************** Sort **********************");

const sortByYears = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log("Sort by starting year: " + sortByYears);

const sortByYearsEsSix = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

console.log("Sort by starting year [es6 format]:" + sortByYearsEsSix);

/* Bonus code */

// Number Factorial.
console.error(
  "**************************** Factorila of a number **********************"
);

let num = 3;
let fact = 1;

for (let i = num; i >= 1; i--) {
  fact = fact * i;
}

console.log("Get factorial of a number: " + fact);

// Fibonacci numbers.
console.error(
  "**************************** Fibonacci of a number **********************"
);

function fib(n) {
  const result = [0, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
}
console.log("Get fibonacci of number: " + fib(10));
