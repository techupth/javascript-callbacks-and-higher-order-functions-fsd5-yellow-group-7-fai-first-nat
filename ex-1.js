// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    let newSalary = operation(array[i]);
    newEmployeeSalaries.push(newSalary);
  }
}

function salaryIncrease(salary) {
  return salary + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

forEach(employeeSalaries, salaryIncrease);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
