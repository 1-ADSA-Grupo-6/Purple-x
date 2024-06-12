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
    demandaBaixa INT
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
    urlImg VARCHAR(150)
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
(default);

INSERT INTO parametro (demandaAlta, demandaBaixa) VALUES
(80, 20),
(90, 10),
(70, 30);

-- Inserir dados na tabela registro para todos os sensores com números mais aleatórios
INSERT INTO registro (fkSensor, registro, momento) VALUES
(1, '1', '2024-05-25 08:00:00'),
(1, '0', '2024-05-25 08:07:00'),
(1, '1', '2024-05-25 08:15:00'),
(1, '0', '2024-05-25 08:22:00'),
(1, '1', '2024-05-25 08:30:00'),
(1, '0', '2024-05-25 08:45:00'),
(2, '0', '2024-05-25 09:00:00'),
(2, '1', '2024-05-25 09:05:00'),
(2, '0', '2024-05-25 09:12:00'),
(2, '1', '2024-05-25 09:20:00'),
(2, '0', '2024-05-25 09:35:00'),
(2, '1', '2024-05-25 09:50:00'),
(3, '1', '2024-05-25 10:00:00'),
(3, '0', '2024-05-25 10:08:00'),
(3, '1', '2024-05-25 10:16:00'),
(3, '0', '2024-05-25 10:25:00'),
(3, '1', '2024-05-25 10:32:00'),
(3, '0', '2024-05-25 10:48:00');


INSERT INTO academia (fkMatriz, nome, token) VALUES
(1, 'Smart Fit', 'ABC123'),
(1, 'Smart Fit - Unidade 1', 'AAA111'),
(1, 'Smart Fit - Unidade 2', 'BBB222');

INSERT INTO aparelho (fkAcademia, fkSensor, fkParametro, nome, categoria) VALUES
(1, 1, 1, 'Leg Press', 'Perna', '../assets/dashboard/imgMaq/legPress.png'),
(1, 2, 1, 'Supino Inclinado', 'Peito', '../assets/dashboard/imgMaq/supinoInclinado.webp'),
(1, 3, 1, 'Smith', 'Perna', '../assets/dashboard/imgMaq/smith.png'),
(1, 4, 1, 'Remada Convergente', 'Costas', '../assets/dashboard/imgMaq/remadaConvergente.png'),
(1, 5, 1, 'Bíceps Convergente', 'Braço', '../assets/dashboard/imgMaq/bicepsConvergente.png'),
(1, 6, 1, 'Shoulder Press', 'Braço', '../assets/dashboard/imgMaq/shoulderPress.png'),
(1, 7, 1, 'Leg Press', 'Perna', '../assets/dashboard/imgMaq/legPress.png'),
(1, 8, 1, 'Remada Convergente', 'Costas', '../assets/dashboard/imgMaq/remadaConvergente.png');


SELECT * FROM contato;
SELECT * FROM sensor;
SELECT * FROM parametro;
SELECT * FROM registro;
SELECT * FROM academia;
SELECT * FROM aparelho;
SELECT * FROM endereco;
SELECT * FROM usuario;

-- SELECIONANDO OS APARELHOS E A DEMANDA ALTA E BAIXA DE CADA
SELECT ap.nome AS 'Nome do aparelho', pa.demandaAlta AS 'Valor de demanda alta', 
pa.demandaBaixa AS 'Valor da demanda baixa' FROM aparelho AS ap
JOIN parametro AS pa ON ap.fkParametro = pa.idParametro;

-- SELECIONANDO A QUANTIDADE DE VEZES QUE O APARELHO 1 TEVE O REGISTRO 0
SELECT ap.nome AS 'Nome do aparelho', COUNT(*) AS 'Quantidade de resgitros 0' FROM registro AS re
JOIN aparelho AS ap ON re.fkSensor = ap.fkSensor
WHERE ap.idAparelho = 1 AND re.registro = 0
GROUP BY ap.nome;

-- DROP DATABASE purplex --
-- DROP USER 'API'@'localhost' --