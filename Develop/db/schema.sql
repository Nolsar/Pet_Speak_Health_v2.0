-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS pet_speak_health_db;
-- Creates the database --
CREATE DATABASE pet_speak_health_db;
-- uses specified database --
use pet_speak_health_db;
-- create the client table --
CREATE TABLE Clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(30) NOT NULL,
  first_name varchar(30) NOT NULL,
  address VARCHAR(60) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(20) NOT NULL,
  zipcode INT(10) NOT NULL,
  cell_phone INT(11) NULL,
  house_phone INT(11) NULL,
  work_phone INT(11) NULL,
  email VARCHAR(50) NULL,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime
);

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(30) NOT NULL,
  first_name varchar(30) NOT NULL,
  email VARCHAR(50) NULL,
  uid TEXT,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime
);
-- create the pets table --
CREATE TABLE Pets (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  animal_type VARCHAR(30) NOT NULL,
  birthdate VARCHAR(30) NOT NULL,
  breed VARCHAR(100) NOT NULL,
  color VARCHAR(100) NULL,
  client_id INT NOT NULL,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime
);
-- create the table that hold each pet's medical records--
CREATE TABLE Medical_Records (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  pet_id INT NOT NULL,
  vaccine_records ENUM(
    'Rabies',
    'DAPP',
    'Bordetella',
    'Leptospirosis',
    'Lyme',
    'Influenza'
  ),
  medication_list MEDIUMTEXT NULL,
  physical_exam MEDIUMTEXT NULL,
  client_education MEDIUMTEXT NULL,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime
);