mysql -u root -p
CREATE DATABASE eKonsilio;
use eKonsilio;

CREATE TABLE `conversation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(400) NOT NULL,
  `submit` VARCHAR(400) NOT NULL,
  `name` VARCHAR(400) NOT NULL,
  `game` VARCHAR(400) NOT NULL,
  `lv` VARCHAR(400) NOT NULL,
  `pseudo` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`)
); 


Epxpress/Conf/Conf.js
user / password / database 


cd Back 
npm i
npm audit fix
node server.js

cd front 
npm i 
npm audit fix 
npm start

