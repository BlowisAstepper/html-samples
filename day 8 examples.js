var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "123456789",
    likes: ["Reading", "Swimming", "Coding"]
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "987654321",
    likes: ["Gaming", "Painting", "Traveling"]
  }
];

function lookUpProfile(name, prop) {
  // Iterate through the contacts array
  for ( i = 0; i < contacts.length; i++) {

    // Check if the current contact's firstName matches the provided name
    if (contacts[i].firstName === name) {

      // Check if the contact has the specified property (prop)
      if (contacts[i][prop] !== undefined) {

        // If both conditions are true, return the value of the property
        return contacts[i][prop];
      } else {
        // If the property does not exist, return "No such property"
        return "No such property";
      }
    }
  }
  // If the contact is not found, return "No such contact"
  return "No such contact";
}

// Example usage:
console.log(lookUpProfile("John", "likes")); // Output: ["Reading", "Swimming", "Coding"]
console.log(lookUpProfile("Jane", "lastName")); // Output: "Doe"
console.log(lookUpProfile("Bob", "number")); // Output: "No such contact"
console.log(lookUpProfile("John", "address")); // Output: "No such property"
