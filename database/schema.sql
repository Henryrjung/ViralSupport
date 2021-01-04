DROP DATABASE IF EXISTS viral_support_db;

CREATE DATABASE viral_support_db;

USE viral_support_db;

CREATE TABLE stats (
    covid19 INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    number_of_cases DECIMAL, 
    number_of_death DECIMAL,
    number_of_recoveries DECIMAL,
    PRIMARY KEY (covid19)
);

CREATE TABLE news (
    covid19 INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    local_news VARCHAR(100),
    national_news VARCHAR(100),
    global_news VARCHAR(100),
    PRIMARY KEY (covid19)
);

SELECT * FROM stats;
SELECT * FROM news;

GET * FROM stats; https://covid-193.p.rapidapi.com/ 
GET * FROM news; coronavirus-smartable.p.rapidapi.com
