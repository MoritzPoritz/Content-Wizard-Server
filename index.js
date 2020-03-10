const express = require('express');
const app = express();


app.post('/', (req, res) => {
    res.send(req);
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));