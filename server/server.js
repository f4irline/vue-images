const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, '../dist'));

app.use(staticFileMiddleware);
app.use(history({
  index: '/index.html'
}));
app.use(staticFileMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
