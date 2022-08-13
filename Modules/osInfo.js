const os = require('os');

const server = {
    "type": os.type(),
    "arch": os.arch(),
    "uptime": os.uptime(),
}

console.table(server);