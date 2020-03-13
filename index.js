const express = require('express');
var indexRouter = require('./routes/index');
const app = express();
/*
./cloud_sql_proxy -instances=gothic-context-270820:us-central1:apicloud=tcp:3306
*/
app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.send('Primera publicación en la nube de google!');
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});