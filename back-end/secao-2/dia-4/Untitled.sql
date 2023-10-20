INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Claus', 'Haas', 1, 'claus.haas@gmail.com', 1, 1, 'clhaas', '456'),
('Cadu', 'Nobrega', 2, 'cadu@gmail.com', 1, 1, 'cadu', '456');


INSERT INTO sakila.actor (first_name, last_name)
	SELECT sakila.customer.first_name, sakila.customer.last_name
    FROM sakila.customer
    LIMIT 5;
    
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);


DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'Karl';