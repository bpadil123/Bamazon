¡CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
 item_id INT(30) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(10) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(30),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, deparment_name, price, stock_quantity)
VALUES ("Bike", "Sporting Goods", 100, 15),
("Fishing Rod", "Sporting Goods", 35, 20);
