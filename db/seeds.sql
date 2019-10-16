USE burgers_db

INSERT INTO burger (name, devoured) VALUES ('cheeseburger', TRUE);
INSERT INTO burger (name, devoured) VALUES ('hamburger', TRUE);
INSERT INTO burger (name, devoured) VALUES ('baconburger', FALSE);

SELECT * FROM burger;