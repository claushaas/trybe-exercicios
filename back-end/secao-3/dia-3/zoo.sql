/*
Entidades:

	Animal:
		animal_id
        nome
        sexo_id
        idade
        especie_id
        localizacao_id
        
	Sexo:
		sexo_id
        tipo
	
    Espécie:
		especie-id
        nome
    
    Localização:
		localizacao_id
        nome
    
    Cuidador:
		cuidador_id
        nome
        gerente_id
    
    Gerente:
		gerente_id
        nome
    
    Animal-Cuidador:
		animal_id
        cuidador_id
*/

DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA zoo;
USE zoo;

CREATE TABLE sexos(
	sexo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(20) NOT NULL
);

CREATE TABLE especies(
	especie_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE localizacoes(
	localizacao_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE animais(
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    sexo_id INTEGER,
    especie_id INTEGER,
    localizacao_id INTEGER,
    FOREIGN KEY (sexo_id) REFERENCES sexos (sexo_id),
    FOREIGN KEY (especie_id) REFERENCES especies (especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacoes (localizacao_id)
);

CREATE TABLE gerentes(
	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    gerente_id INTEGER,
    FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id)
);

CREATE TABLE animal_cuidador (
    animal_id INTEGER,
    cuidador_id INTEGER,
    FOREIGN KEY (animal_id)
        REFERENCES animais (animal_id),
    FOREIGN KEY (cuidador_id)
        REFERENCES cuidadores (cuidador_id)
);
