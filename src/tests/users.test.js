// You already have the methods imported
//import { default as expect } from "expect";
//import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
const users= require(".src/data.js");//.....

const { getUser,}=require("../src/users.js");
   
//.//
// READ documentation
describe('getUser', () => {
    it('should return the correct user object for a valid ID', async () => {
      const user = await getUser(3);
      expect(user).toBeDefined(); // Check if user object is defined
      expect(user.id).toBe(3); // Check if the user ID matches
      expect(user.name).toBe("goosemotionless"); // Check if other data matches
      // Add more expect statements as needed to verify other data
    });
  
    it('should return an error for an invalid ID', async () => {
      expect.assertions(1); // Ensure that at least one assertion is made
      try {
        await getUser(8); // Invalid ID
      } catch (error) {
        expect(error.message).toBe('User not found, ID invalid'); // Check if the correct error message is returned
      }
    });
  });

