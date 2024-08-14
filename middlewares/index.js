const fs = require('fs');


function logReqRes(filename){
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()}:${req.method}:${req.path}\n`, (err, data) => {
            if(err) console.error(err);
            next();
        });
    }
}

module.exports = {
    logReqRes: logReqRes,
};