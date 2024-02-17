const { faker } = require("@faker-js/faker");
const fs = require("fs");

const createUser = (numOfUser, overwrite) => {
  if (!numOfUser) {
    console.log("please input number");
    return;
  }

  numOfUser = parseInt(numOfUser);
  console.log("Creating User");

  let data = JSON.parse(fs.readFileSync("db.json"));
  if (overwrite) {
    data.users = [];
  }

  for (let i = 0; i < numOfUser; i++) {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      avatar: faker.image.avatar(),
    };
    console.log(
      `User ${i + 1} : \n Name: ${user.name} \n Email: ${
        user.email
      } \n Phone: ${user.phone} \n Avatar: ${user.avatar}`
    );
    console.log("--------------------");
    data.users.push(user);
  }
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log("user created");
};
const numInput = process.argv.slice(2)[0];
const overInput = process.argv.slice(2)[1];

// console.log(input);
createUser(numInput, overInput);
