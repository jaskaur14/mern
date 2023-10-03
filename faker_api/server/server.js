const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

const generateUserObject = () => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const generateCompanyObject = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    country: faker.location.country(),
    },
});

app.get("/api/users/new", (request, response) => {
    const newUser = generateUserObject();
    response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
    const newCompany = generateCompanyObject();
    response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
    const newUser = generateUserObject();
    const newCompany = generateCompanyObject();
    const responseObject = {
    user: newUser,
    company: newCompany,
    };
    response.json(responseObject);
});

app.listen(port, () => console.log(`express server running on port ${port}`));