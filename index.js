const express=require('express');
const expressConfig = require('./config/express');
const port = 5000;
const routes=require('./routes');

const app = express();

require('./config/express')(app);

app.use(routes);






app.listen(port, () => console.log(`server is listening on ${port} port...`));