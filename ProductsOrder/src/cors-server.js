const express = require('express');
const corsAnywhere = require('cors-anywhere');

const PORT = 8080;

const app = express();
app.use(corsAnywhere());

app.listen(PORT, () => {
  console.log(`CORS-anywhere server running on http://localhost:${PORT}`);
});
