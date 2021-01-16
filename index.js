const app = require('express')();
const routes = require('./router');
const PORT = 3000;

//  Connect all routes to the app
app.use('/', routes);

// runs when start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
