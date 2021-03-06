import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: "cory-house",
    firstName: "Cory",
    lastName: "House",
    email: "chouse@ipnxnigeria.net",
    password: "letmein"
  },
  {
    id: "scott-allen",
    firstName: "Scott",
    lastName: "Allen",
    email: "sallen@ipnxnigeria.net",
    password: "letmein"
  },
  {
    id: "dan-wahlin",
    firstName: "Dan",
    lastName: "Wahlin",
    email: "dwahlin@ipnxnigeria.net",
    password: "letmein"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = user => {
  return user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase();
};

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static getUser(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToGet = users.findIndex(
          u => u.email == userData.email
        );
        if (indexOfUserToGet >= 0) {
          if (users[indexOfUserToGet].password == userData.password) {
            resolve(users[indexOfUserToGet]);
          }
        }
        reject("Incorrect email or password");
      }, delay);
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToDelete = users.findIndex(user => {
          user.id === userId;
        });
        users.splice(indexOfUserToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 3;
        if (user.firstName.length < minUserNameLength) {
          reject(
            `First Name must be at least ${minUserNameLength} characters.`
          );
        }

        if (user.lastName.length < minUserNameLength) {
          reject(`Last Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id === user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
