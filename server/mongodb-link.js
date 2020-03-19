
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://huliang:huliang@cluster0-2fgex.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
