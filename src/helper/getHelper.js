const { v4 } = require('uuid');
let employeeData = [];

const getMethodHandler = (url, req, res) => {
  const employeeId = url.substring(1);
  const employee = findEmployee(employeeId);
  if (!employee) {
    res.writeHead(400);
    res.end(`The employee with id ${employeeId} is not present.`);
    return;
  }
  res.writeHead(200);
  res.contentType = 'application/json';
  res.end(JSON.stringify(employee));
};

const postMethodHandler = (res, body) => {
  const emp = addEmployee(body);
  res.writeHead(204);
  res.end(`The Employee object with id is ${emp._id} added.`);
};

const findEmployee = (id) => {
  return employeeData.find((employee) => {
    if (employee._id === id) return employee;
  });
};

const addEmployee = (employee, req, res) => {
  const emp = { _id: v4(), ...employee };
  employeeData.push(emp);
  return emp;
};

const updateEmployee = (req, res, payload) => {
  if (findAndReplace(payload)) {
    res.writeHead(200);
    res.end(`Successfully updated employee with id ${payload._id}`);
  } else {
    res.writeHead(500);
    res.end(`employee not found with id ${payload._id}`);
  }
};

const findAndReplace = (employee) => {
  let employeeFound = findEmployee(employee._id);
  if (employeeFound) {
    for (var key in employee) {
      employeeFound[key] = employee[key];
    }
    return true;
  } else {
    return false;
  }
};

const getAllEmployees = (req, res) => {
  res.contentType = 'application/json';
  res.writeHead(200);
  res.end(JSON.stringify(employeeData));
};

const deleteEmployee = (id, req, res) => {
  if (employeeData.length) {
    const index =
      employeeData.length &&
      employeeData.findIndex((employee) => employee._id === id);
    employeeData = employeeData.splice(index, 1);
    console.log('indes', index);
    if (index !== -1) {
      res.writeHead(200);
      res.end(`Successfully Deleted with id ${id}`);
    } else {
      res.writeHead(500);
      res.end(`id not found ${id}`);
    }
  } else {
    res.writeHead(500);
    res.end(`no data in db`);
  }
};

exports.getMethodHandler = getMethodHandler;
exports.postMethodHandler = postMethodHandler;
exports.addEmployee = addEmployee;
exports.getAllEmployees = getAllEmployees;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
