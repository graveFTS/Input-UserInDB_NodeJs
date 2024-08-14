const mongoose = require('mongoose');
async function connectMongoDb() {
    return mongoose.connect('mongodb://localhost:27017/YouTube_ProjectDB');
}
module.exports = {
    connectMongoDb,
};