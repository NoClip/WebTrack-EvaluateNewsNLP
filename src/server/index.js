const app = require("./app");

// var path = require('path');

const cors = require('cors');
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('running on http://localhost:8081');
});
