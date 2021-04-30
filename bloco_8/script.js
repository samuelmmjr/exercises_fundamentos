// const newEmployees = (employeeGenerator) => {
//     const employees = {
//         id1: employeeGenerator('Pedro Guerra'),
//         id2: employeeGenerator('Luiza Drumond'),
//         id3: employeeGenerator('Carla Paiva'),
//     }
//     return employees;
// };
// const employeeGenerator = (fullName) => {
//     const email = fullName.toLowerCase().split(' ').join('_');
//     return {fullName, email: `${email}@betrybe.com`};
// }
// console.log(newEmployees(employeeGenerator));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
