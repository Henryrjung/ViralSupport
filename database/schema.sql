DROP DATABASE IF EXISTS viral_support_db;
CREATE DATABASE viral_support_db;

USE viral_support_db;

CREATE TABLE user_profile (
    email VARCHAR(30),
    username VARCHAR(30),
);