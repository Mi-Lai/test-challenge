// Imports small array of users
// Pretend it's an API request
/*API Call Simulation
Develop a function in users.js to simulate fetching user data.
The function should accept a user ID.
Return a promise that resolved user data. You can mock this inside tests.
You can include error handling for cases where the ID is invalid or unavailable
*/
const users = require(".src/data.js").default;
//./
// Fetches all users
const getUsers = () => {
  return users;};


// Filters users by specific ID
const getUser = (id) => {
  //return users.find((user) => user.id === id);
  //};
  // Simulate fetching user data asynchronously
  return new Promise((resolve, reject) => {
    // Mocking user data fetching with a delay
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user); // Resolve with user data if found
      } else {
        reject(new Error("User not found")); // Reject with an error if user not found
      }
    }, 1000); 
  });
};

module.exports = { getUsers, getUser };



// test
// console.log(getUser(3));


