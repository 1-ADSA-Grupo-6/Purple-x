CREATE DATABASE purplex;
USE purplex;

create user 'API'@'localhost' identified by 'webDataViz0API@';
grant insert, select, update, delete on purplex.* to 'API'@'localhost';
show grants for 'API'@'localhost';

CREATE TABLE contato (
	idContato INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100),
    assunto VARCHAR(100),
    momentoContato DATETIME
);

CREATE TABLE sensor (
	idSensor INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE parametro (
	idParametro INT PRIMARY KEY AUTO_INCREMENT,
    demandaAlta INT,
    demandaMedia INT
);

CREATE TABLE registro (
	idRegistro INT,
    fkSensor INT,
    registro CHAR(1),
    momento DATETIME
);

ALTER TABLE registro ADD CONSTRAINT chavesPrimariasRegistro PRIMARY KEY (idRegistro, fkSensor);
ALTER TABLE registro MODIFY COLUMN idRegistro INT AUTO_INCREMENT;
ALTER TABLE registro ADD CONSTRAINT fkSensorRegistro FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor);

CREATE TABLE academia (
	idAcademia INT,
    fkMatriz INT,
    nome VARCHAR(100),
    token CHAR(6)
);

ALTER TABLE academia ADD CONSTRAINT chavesPrimariasAcademia PRIMARY KEY (idAcademia, fkMatriz);
ALTER TABLE academia MODIFY COLUMN idAcademia INT AUTO_INCREMENT;
ALTER TABLE academia ADD CONSTRAINT fkMatrizAcademia FOREIGN KEY (fkMatriz) REFERENCES academia(idAcademia);

CREATE TABLE aparelho (
	idAparelho INT,
    fkAcademia INT,
    fkSensor INT,
    fkParametro INT,
    nome VARCHAR(45),
    categoria VARCHAR(45),
    urlImg VARCHAR(150),
    mapeamento VARCHAR(160)
);

ALTER TABLE aparelho ADD CONSTRAINT chavesPrimariasAparelho PRIMARY KEY (idAparelho, fkAcademia, fkSensor, fkParametro);
ALTER TABLE aparelho MODIFY COLUMN idAparelho INT AUTO_INCREMENT;
ALTER TABLE aparelho ADD CONSTRAINT fkAcademiaAparelho FOREIGN KEY (fkAcademia) REFERENCES academia(idAcademia);
ALTER TABLE aparelho ADD CONSTRAINT fkSensorAparelho FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor);
ALTER TABLE aparelho ADD CONSTRAINT fkParemetroAparelho FOREIGN KEY (fkParametro) REFERENCES parametro(idParametro); 
ALTER TABLE aparelho ADD CONSTRAINT chkAparelho CHECK (categoria in ('Peito', 'Costas', 'Braço', 'Perna'));

CREATE TABLE endereco (
	idEndereco INT,
    fkAcademia INT,
    cep CHAR(9),
    numero VARCHAR(45),
    complemento VARCHAR(45)
);

ALTER TABLE endereco ADD CONSTRAINT chavesPrimariasEndereco PRIMARY KEY (idEndereco, fkAcademia);
ALTER TABLE endereco MODIFY COLUMN idEndereco INT AUTO_INCREMENT;
ALTER TABLE endereco ADD CONSTRAINT fkAcademia FOREIGN KEY (fkAcademia) REFERENCES academia(idAcademia);

CREATE TABLE usuario (
	idUsuario INT,
    fkAcademia INT,
    nomeCompleto VARCHAR(45),
    cargo VARCHAR(45),
    telefone CHAR(11),
	email VARCHAR(100),
    senha VARCHAR(50)
);

ALTER TABLE usuario ADD CONSTRAINT chavesPrimariasUsuario PRIMARY KEY (idUsuario, fkAcademia);
ALTER TABLE usuario MODIFY COLUMN idUsuario INT AUTO_INCREMENT;
ALTER TABLE usuario ADD CONSTRAINT fkAcademiaUsuario FOREIGN KEY (fkAcademia) REFERENCES academia(idAcademia);
ALTER TABLE usuario ADD CONSTRAINT chkCargoUsuario CHECK(cargo IN('Representante', 'Funcionário'));

	
INSERT INTO contato (nome, email, assunto, momentoContato) VALUES
('João Silva', 'joao.silva@gmail.com', 'Informações sobre serviços', '2024-05-25 10:30:00'),
('Maria Souza', 'maria.souza@yahoo.com', 'Horários de funcionamento', '2024-05-24 15:20:00'),
('Carlos Pereira', 'carlos.pereira@hotmail.com', 'Descontos e promoções', '2024-05-23 09:15:00');

-- PARA INSERIR 3 IDS NA TABELA DOS SENSOR
INSERT INTO sensor VALUES
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default),
(default);

INSERT INTO parametro (demandaAlta, demandaMedia) VALUES
(6, 4);

-- Inserir dados na tabela registro para todos os sensores com números mais aleatórios
INSERT INTO registro (fkSensor, registro, momento) VALUES
(1, '1', '2024-06-14 14:00:05'),
(2, '1', '2024-06-14 14:00:05'),
(3, '1', '2024-06-14 14:00:05'),
(4, '1', '2024-06-14 14:00:05'),
(5, '1', '2024-06-14 14:00:05'),
(6, '1', '2024-06-14 14:00:05'),
(7, '1', '2024-06-14 14:00:05'),
(8, '1', '2024-06-14 14:00:05'),
(1, '1', '2024-06-14 14:00:10'),
(2, '0', '2024-06-14 14:00:10'),
(3, '0', '2024-06-14 14:00:10'),
(4, '0', '2024-06-14 14:00:10'),
(5, '0', '2024-06-14 14:00:10'),
(6, '0', '2024-06-14 14:00:10'),
(7, '0', '2024-06-14 14:00:10'),
(8, '0', '2024-06-14 14:00:10');

INSERT INTO academia (fkMatriz, nome, token) VALUES
(1, 'Purple X', 'PLX100');

INSERT INTO endereco (fkAcademia, cep, numero, complemento) VALUES
(1, '06020-010', 1400, 'Dentro do shopping União');

INSERT INTO aparelho (fkAcademia, fkSensor, fkParametro, nome, categoria, urlImg, mapeamento) VALUES
(1, 1, 1, 'Leg Press', 'Perna', '../assets/dashboard/imgMaq/legPress.png','Máquina localizada na área de pernas, ao lado direito da máquina Smith'),
(1, 2, 1, 'Supino Inclinado', 'Peito', '../assets/dashboard/imgMaq/supinoInclinado.webp', 'Máquina Localizada na área de peito, próximo à máquina Remada Convergente'),
(1, 3, 1, 'Smith', 'Perna', '../assets/dashboard/imgMaq/smith.png', 'Máquina localizada na área de pernas, ao lado direito da máquina Leg Press'),
(1, 4, 1, 'Remada Convergente', 'Costas', '../assets/dashboard/imgMaq/remadaConvergente.png', 'Máquina Localizada na área de costas, próximo à máquina Supino Inclinado'),
(1, 5, 1, 'Bíceps Convergente', 'Braço', '../assets/dashboard/imgMaq/bicepsConvergente.png', 'Máquina localizada na área de braço, ao lado direito da máquina Shoulder Press'),
(1, 6, 1, 'Shoulder Press', 'Braço', '../assets/dashboard/imgMaq/shoulderPress.png', 'Máquina localizada na área de braço, ao lado direito da máquina Bíceps Convergente'),
(1, 7, 1, 'Fly', 'Peito', '../assets/dashboard/imgMaq/fly.png', 'Máquina Localizada da área de peito, próximo à máquina Supino Inclinado'),
(1, 7, 1, 'Puxada Alta', 'Costas', '../assets/dashboard/imgMaq/puxadaAlta.png', 'Máquina Localizada na área de costas, próximo à máquina Remada Convergente');

SELECT * FROM contato;
SELECT * FROM sensor;
SELECT * FROM parametro;
SELECT * FROM registro;
SELECT * FROM academia;
SELECT * FROM aparelho;
SELECT * FROM endereco;
SELECT * FROM usuario;

-- DROP DATABASE purplex; --
-- DROP USER 'API'@'localhost'; --