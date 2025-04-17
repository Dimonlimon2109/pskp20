const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const IndexRouter = require('./routes/indexRouter');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use('/', IndexRouter);
app.use('/Add', IndexRouter);
app.use('/Update', IndexRouter);
app.use('/Delete', IndexRouter);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  
