/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

const makeNewConnection = (uri) => {
  const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
  });

  db.on('error', function (error) {
    console.log(`MongoDB :: connection ${this.name} ${JSON.stringify(error)}`);
    db.close().catch(() => console.log(`MongoDB :: failed to close connection ${this.name}`));
  });

  db.on('connected', () => {
    console.log('MongoDB :: connected');
  });

  db.on('disconnected', function () {
    console.log(`MongoDB :: disconnected ${this.name}`);
  });
  return db;
};

const dbConnection = makeNewConnection('mongodb+srv://emelyndhadasa:plqx5k6h2aNEVfsM@cluster0.mzmk6ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = dbConnection;
