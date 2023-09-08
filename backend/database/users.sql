CREATE DATABASE registers;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_password VARCHAR(100) NOT NULL
);