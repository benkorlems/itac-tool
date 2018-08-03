import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    olt: {
      name: "",
      serial_no: "",
      status: "",
      olt: "",
      slot: "",
      port: "",
      ont: ""
    },
    freeside: {
      name: "ebenezer",
      customer_id: "",
      last_billed: "",
      next_bill: "",
      suspended: "",
      package: "",
      serial_no: ""
    },
    csms: {
      circuit_id: "",
      customer_name: "",
      link_state: "",
      service_type: "",
      network_platform: ""
    }
  }
];

class searchUserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static getUser(searchTerm, type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToGet = users.findIndex(
          u => u.freeside.name == searchTerm
        );
        if (indexOfUserToGet >= 0) {
          resolve(users[indexOfUserToGet]);
        }
        reject("User not found...,try a different search term");
      }, delay);
    });
  }
}

export default searchUserApi;
