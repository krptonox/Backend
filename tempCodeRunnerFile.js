// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('Aggregate_DB');

// Create a new document in the collection.
db.getCollection('Author').insertMany({
 [
    {
      "id": 1,
      "name": "J. K. Rowling",
      "birthYear": 1965
    },
    {
      "id": 2,
      "name": "George R. R. Martin",
      "birthYear": 1948
    },
    {
      "id": 3,
      "name": "Haruki Murakami",
      "birthYear": 1949
    },
    {
      "id": 4,
      "name": "Stephen King",
      "birthYear": 1947
    },
    {
      "id": 5,
      "name": "Agatha Christie",
      "birthYear": 1890
    }
  ]
});
