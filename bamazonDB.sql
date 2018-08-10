
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
 id INT(30) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(40) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT(30),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bike", "Sporting Goods", 100, 15),
("Fishing Rod", "Sporting Goods", 35, 20),
("Playstation", "Video Games", 300, 15),
("Nintendo Switch", "Video Games", 350, 30),
("Sofa", "Furniture", 600, 5),
("Bed Frame", "Furniture", 700, 4),
("Toaster", "Appliances", 30, 25),
("SodaStream", "Appliances", 100, 12),
("Legos", "Toys", 60, 40),
("Drone", "Toys", 800, 5);


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Leo2691b';