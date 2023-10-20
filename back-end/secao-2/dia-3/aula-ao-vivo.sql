USE sakila;

-- Encontre o ator JOhnny Cage
SELECT * FROM actor WHERE first_name LIKE 'Johnny' AND last_name LIKE 'Cage';
SELECT * FROM actor WHERE first_name = 'Johnny' AND last_name = 'cage';

-- Encontre os filmes que podem ser alugados por 6 dias
SELECT * FROM film WHERE rental_duration = 6;

-- Encontre os filmes de Classificação R que podem ser alugados exatamente por 6 dias
SELECT * FROM film WHERE rating = 'R' AND rental_duration = 6;

-- Encontre os filmes de classificação R ou PG-13 que podem ser alugados exatamente por 6 dias
SELECT * FROM film WHERE rating IN ('R', 'PG-13') AND rental_duration = 6;
SELECT * FROM film WHERE (rating = 'R' OR rating = 'PG-13') AND rental_duration = 6;

-- Encontre os filmes: 'AFFAIR PREJUDICE', 'African Egg', 'Agent Truman', 'Airplane Sierra'
SELECT * FROM film WHERE title IN ('AFFAIR PREJUDICE', 'African Egg', 'Agent Truman', 'Airplane Sierra');

-- Encontre todos os filmes menos os listados anteriormente
SELECT * FROM film WHERE title NOT IN ('AFFAIR PREJUDICE', 'African Egg', 'Agent Truman', 'Airplane Sierra');

SELECT * FROM actor WHERE last_name NOT IN ('peck', 'hackman');

SELECT * FROM film WHERE length BETWEEN 120 AND 150;

SELECT NOW();

SELECT DATE(NOW());
SELECT curdate();
SELECT CURTIME();

SELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW());

SELECT * FROM rental WHERE rental_date = '2005-05-26 00:07:11';

SELECT * FROM rental WHERE TIME(rental_date) = '00:07:11';

SELECT * FROM rental WHERE DATE(rental_date) = '2005-05-26';

SELECT * FROM rental WHERE DATE(return_date) BETWEEN '2005-05-26' AND '2005-06-27';

SELECT * FROM actor WHERE first_name LIKE '%rey%';

SELECT * FROM actor WHERE first_name LIKE '%dra';

SELECT * FROM actor WHERE first_name LIKE 'B__'
