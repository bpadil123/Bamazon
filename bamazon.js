var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  // Your password
  password: "Leo2691b",
  database: "bamazonDB"
});


connection.connect(function (err) {
  if (err) throw err;


  showProducts();
});

function showProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // console.log(res);
    connection.end;

    console.log(' ~~~~~~~~~~~~~ Welcome to BAMazon ~~~~~~~~~~~~~  ');
    console.log('----------------------------------------------------------------------------------------------------');
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].id + " | " + "Product: " + res[i].product_name + " | " + "Price: " + res[i].price + " | " + "QTY: " + res[i].stock_quantity);
      console.log('--------------------------------------------------------------------------------------------------')
    }
    console.log(" ");
  })
}

inquirer.prompt([{
    type: "input",
    name: "selection",
    message:"What would you like to purchase? Please input the ID that is to the left of the item you would like?    ",
  },
  {
    type: "input",
    name: "quantity",
    message:"How many would you like to purchase?",
  }
]).then(function (inquiry) {
  var idSelect = inquiry.selection
  connection.query('SELECT * FROM products WHERE id = ' + idSelect, function (err, res) {
    let currentStock = res[0].stock_quantity;
    var quantSelect = inquiry.quantity

    if (err) console.log(err);

    if (quantSelect > currentStock) {
      console.log("We appologize, we do not have enough stock in our inventory, please see the inventory qty and try again.")


    } else {
      currentStock -= quantSelect

      connection.query('UPDATE products SET stock_quantity =' + currentStock + ' WHERE id =' + idSelect, function (err) {
        if (err) throw err;

        console.log("Great Choice! We will see you soon!")
      })
    }
  })


})