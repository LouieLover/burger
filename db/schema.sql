DROP DATABASE IF EXISTS burgers;

CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(40) NOT NULL,
  devoured BOOL DEFAULT TRUE,
  PRIMARY KEY (id)
);

SELECT * FROM iu4w30efsewsuf5a.burgers;
		
		
