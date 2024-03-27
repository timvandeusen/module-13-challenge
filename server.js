const express = require('express');
const routes = require('./routes');


const categoryRoutes = require('./routes/category-routes'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use('/categories', categoryRoutes); // Use categoryRoutes middleware for '/categories' endpoint

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
