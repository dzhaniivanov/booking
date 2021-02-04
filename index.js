const express=require('express');
const port = 5000;
const routes=require('./routes');

const app = express();
/* const expressConfig = require('./config/express');
expressConfig(app); */

require('./config/express')(app);

app.use(routes);






app.listen(port, () => console.log(`server is listening on ${port} port...`));