const mongoose = require('mongoose');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, // default  3306
//   user: process.env.DB_USER, //default empty
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, // default  3306
//   user: process.env.DB_USER, //default empty
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0
// });
const dbState = [{
    value: 0,
    label: "disconnected"
  },
  {
    value: 1,
    label: "connected"
  },
  {
    value: 2,
    label: "connecting"
  },
  {
    value: 3,
    label: "disconnecting"
  }
];
const connection = async () => {
  const options = {
    user: "root",
    pass: "fkuO4DtTiZneBvQs",
    dbName: "dothanhvinh"
  }
  await mongoose.connect(process.env.MONGODB_CONNECT_URI, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
}

module.exports = connection;