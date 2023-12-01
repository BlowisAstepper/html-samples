// Record collection for a music library
const recordCollection = [
  {
    id: 1,
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
    genre: "Pop",
    tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean"]
  },
  {
    id: 2,
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    genre: "Progressive Rock",
    tracks: ["Speak to Me", "Breathe", "On the Run", "Time", "Money"]
  },
  // Additional records can be added here
];

// Accessing information from a record
const thriller = recordCollection[0];
console.log(thriller.title);  // Output: Thriller
console.log(thriller.tracks); // Output: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean"]

// Modifying a record
thriller.year = 1984;
console.log(thriller.year); // Output: 1984

// Adding a new record
const newRecord = {
  id: 3,
  title: "Back in Black",
  artist: "AC/DC",
  year: 1980,
  genre: "Hard Rock",
  tracks: ["Hells Bells", "Back in Black", "You Shook Me All Night Long"]
};
recordCollection.push(newRecord);

// Removing a record
const recordToRemove = recordCollection.find(record => record.id === 2);
const indexToRemove = recordCollection.indexOf(recordToRemove);
recordCollection.splice(indexToRemove, 1);
 
console.log("This shit isnt easy bro !!!");
