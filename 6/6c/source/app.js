const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); // middleware
const mysql = require('mysql');

const app = express();

// Create Connnection
const connectionDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'posarkademy',
  multipleStatements: true
});

// Connect database
connectionDB.connect(err => {
  if (err) throw err;
  console.log('💾 Database connected ...');
});

// Set view File
app.set('views', path.join(__dirname, 'views'));

// Set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set folder public
app.use('/assets', express.static(__dirname + '/public'));

// ROUTES
app.get('/', (req, res) => {
  const sql = `
  SELECT cashier.name AS nameCashier,
  cashier.id AS idCashier,
  product.name AS nameProduct,
  category.id AS idCategory,
  category.name AS nameCategory,
  product.price AS priceProduct,
  product.id AS idProduct
  FROM product
  INNER JOIN cashier
  ON product.id_cashier = cashier.id
  INNER JOIN category
  ON product.id_category = category.id;

  SELECT * FROM cashier;
  
  SELECT * FROM category;
  `;

  connectionDB.query(sql, (err, results) => {
    if (err) throw err;
    res.render('pos', {
      viewPoss: results[0],
      viewCashiers: results[1],
      viewCategories: results[2]
    });
  });
});

// Insert Data
app.post('/save', (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    id_category: req.body.id_category,
    id_cashier: req.body.id_cashier
  };
  const sql = "INSERT INTO product SET ?";
  connectionDB.query(sql, data, err => {
    if (err) throw err;
    res.redirect("/");
  });
})

// Update Data
app.post("/update", (req, res) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    id_category: req.body.id_category,
    id_cashier: req.body.id_cashier
  };
  const sql = `
  UPDATE product SET 
    name='${data.name}', 
    price='${data.price}', 
    id_category=${data.id_category}, 
    id_cashier=${data.id_cashier}
  WHERE id=${data.id}
  `;
  connectionDB.query(sql, err => {
    if (err) throw err;
    res.redirect("/");
  });
});

// Delete Data
app.post("/delete", (req, res) => {
  const sql = `DELETE FROM product WHERE id=${req.body.id}`;
  connectionDB.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});


// SERVER LISTENING
app.listen(9090, () => {
  console.log('🚀 Server running on PORT 9090 ...');
});
