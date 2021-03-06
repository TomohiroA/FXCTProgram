const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/calculate', (req, res) => {
  console.log(req.body.undilutedSolution);
  console.log(req.body.wantDencity);
  console.log(req.body.useWater);

  res.render('index.ejs');
});

app.listen(3000);
