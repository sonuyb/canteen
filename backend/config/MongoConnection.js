// const { MongoClient } = require("mongodb");

// class MongoConnection {
//   constructor() {
//     this.client = null;
//     this.db = null;
//   }
//   async connect() {
//     try {
//       const url = "mongodb://127.0.0.1:27017/";
//       const dbName = "e_canteen";
//       this.client = await MongoClient.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       this.db = this.client.db(dbName);
//       console.log("Connected to MongoDB");
//       console.log(this.db)
//     } catch (err) {
//       console.error("Error connecting to MongoDB:", err);
//       throw err;
//     }
//   }
//   async insertOne(collectionName, document) {
//     try {
//       collection(collectionName);
//       const result = await collection.insertOne(document);
//       console.log(`Inserted document with _id: ${result.insertedId}`);
//       return result.insertedId;
//     } catch (err) {
//       console.error(`Error inserting document into ${collectionName}:`, err);
//       throw err;
//     }
//   }
// }

const { MongoClient } = require("mongodb");

class MongoConnection {
  constructor() {
    this.client = null;
    this.db = null;
  }

  async connect(url, dbName) {
    try {
      const url = "mongodb://127.0.0.1:27017/";
      const dbName = "e_canteen";
      this.client = await MongoClient.connect(url);
      this.db = this.client.db(dbName);
      console.log(`Connected to MongoDB: ${url}/${dbName}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }

  async insertOne(collectionName, document) {
    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(document);
    console.log(result)
    return result.insertedId;
  }

  async findOne(collectionName, query) {
    const collection = this.db.collection(collectionName);
    const result = await collection.findOne(query);
    return result;
  }

  async updateOne(collectionName, filter, update) {
    const collection = this.db.collection(collectionName);
    const result = await collection.updateOne(filter, update);
    return result.modifiedCount;
  }

  async deleteOne(collectionName, query) {
    const collection = this.db.collection(collectionName);
    const result = await collection.deleteOne(query);
    return result.deletedCount;
  }
}
module.exports = new MongoConnection();
