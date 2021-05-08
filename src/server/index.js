const { app } = require("./app");

// var path = require('path');

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('running on http://localhost:8081');
});
