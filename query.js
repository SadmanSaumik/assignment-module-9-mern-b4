//Create a new collection
db.createCollection("myCollection");

//Removes a collection from the database
db.myCollection.drop();

//Inserts a single document into a collection
db.myCollection.insertOne({
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
});

//Delete/remove a single document from the collection
db.myCollection.deleteOne({ name: "John Doe" });
