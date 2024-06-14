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
(default);

INSERT INTO parametro (demandaAlta, demandaMedia) VALUES
(6, 4);

-- Inserir dados na tabela registro para todos os sensores com números mais aleatórios
INSERT INTO registro (fkSensor, registro, momento) VALUES
(1, '1', '2024-06-14 14:00:00'),
(2, '0', '2024-06-14 14:00:00'),
(3, '1', '2024-06-14 14:00:00'),
(1, '0', '2024-06-14 14:00:01'),
(2, '1', '2024-06-14 14:00:01'),
(3, '0', '2024-06-14 14:00:01'),
(1, '0', '2024-06-14 14:00:02'),
(2, '1', '2024-06-14 14:00:02'),
(3, '0', '2024-06-14 14:00:02'),
(1, '1', '2024-06-14 14:00:03'),
(2, '0', '2024-06-14 14:00:03'),
(3, '1', '2024-06-14 14:00:03'),
(1, '1', '2024-06-14 14:00:04'),
(2, '0', '2024-06-14 14:00:04'),
(3, '1', '2024-06-14 14:00:04'),
(1, '0', '2024-06-14 14:00:05'),
(2, '1', '2024-06-14 14:00:05'),
(3, '0', '2024-06-14 14:00:05');

INSERT INTO academia (fkMatriz, nome, token) VALUES
(1, 'Smart Fit', 'ABC123'),
(1, 'Smart Fit - Unidade 1', 'AAA111'),
(1, 'Smart Fit - Unidade 2', 'BBB222');

INSERT INTO aparelho (fkAcademia, fkSensor, fkParametro, nome, categoria, urlImg, mapeamento) VALUES
(1, 1, 1, 'Leg Press', 'Perna', '../assets/dashboard/imgMaq/legPress.png','Máquina localizada na área de pernas, ao lado direito da máquina Smith'),
(1, 2, 1, 'Supino Inclinado', 'Peito', '../assets/dashboard/imgMaq/supinoInclinado.webp', 'Única máquina da área de peito, próximo à máquina Remada Convergente'),
(1, 3, 1, 'Smith', 'Perna', '../assets/dashboard/imgMaq/smith.png', 'Máquina localizada na área de pernas, ao lado direito da máquina Leg Press'),
(1, 4, 1, 'Remada Convergente', 'Costas', '../assets/dashboard/imgMaq/remadaConvergente.png', 'Única máquina da área de costas, próximo à máquina Supino Inclinado'),
(1, 5, 1, 'Bíceps Convergente', 'Braço', '../assets/dashboard/imgMaq/bicepsConvergente.png', 'Máquina localizada na área de braço, ao lado direito da máquina Shoulder Press'),
(1, 6, 1, 'Shoulder Press', 'Braço', '../assets/dashboard/imgMaq/shoulderPress.png', 'Máquina localizada na área de braço, ao lado direito da máquina Bíceps Convergente'),
(1, 7, 1, 'Leg Press2', 'Perna', '../assets/dashboard/imgMaq/legPress.png', 'Máquina localizada na divisão da área de pernas e costas, ao lado esquerdo da máquina Remada Convergente');

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

-- SELECIONANDO OS HORARIOS DA MAQUINA COM MAIS REGISTRO
SELECT a.nome, r.momento
FROM registro r
JOIN aparelho a ON r.fkSensor = a.fkSensor
WHERE r.fkSensor = (
    SELECT fkSensor
    FROM registro
    GROUP BY fkSensor
    ORDER BY COUNT(*) DESC
    LIMIT 1
);



-- SELECIONANDO OS HORARIOS DA MAQUINA COM MENOS REGISTROS7
SELECT a.nome, r.momento
FROM registro r
JOIN aparelho a ON r.fkSensor = a.fkSensor
WHERE r.fkSensor = (
    SELECT fkSensor
    FROM registro
    GROUP BY fkSensor
    ORDER BY COUNT(*) ASC
    LIMIT 1
);

-- SELECIONANDO O TEMPO INATIVO DA MAQUINA E O ATIVO COM SQL 
-- WITH É UMA CLÁUSULA ONDE SE TORNA POSSIVÉL CRIAR TABELAS TEMPORARIAS QUE SÃO SEMELHANTES A SUB CONSULTAS
-- AQUI EU USEI PARA PODER JÁ PUXAR O BANCO A DIFERENÇA DE MINUTOS E SEGUNDOS DE CADA MAQUINA DE FORMA INDIVIDUAL
-- ELE PUXA O REGISTRO DE ACORDO COM O FKSENSOR PASSADO NA LINHA 217
-- AI ELE FAZ OS OUTROS SELECTS PARA PUXAR OS REGISTROS
-- AS CONTAS PARA PEGAR SOMENTE OS MINUTOS E SEGUNDOS E MOSTRA CERTINHO
WITH registros_com_lag AS (
    SELECT
        r.fkSensor,
        a.nome,
        r.registro,
        r.momento,
        LAG(r.momento) OVER (PARTITION BY r.fkSensor ORDER BY r.momento) AS momento_anterior
    FROM
        registro r
    JOIN
        aparelho a ON r.fkSensor = a.fkSensor
    WHERE
        r.fkSensor = 4 -- ID da máquina desejada
),
tempos_calculados AS (
    SELECT
        fkSensor,
        nome,
        registro,
        momento,
        momento_anterior,
        TIMESTAMPDIFF(SECOND, momento_anterior, momento) AS diferenca_segundos
    FROM
        registros_com_lag
    WHERE
        momento_anterior IS NOT NULL
),
tempos_agrupados AS (
    SELECT
        fkSensor,
        nome,
        IFNULL(SUM(CASE WHEN registro = '1' THEN diferenca_segundos ELSE 0 END), 0) AS tempo_ativo_segundos,
        IFNULL(SUM(CASE WHEN registro = '0' THEN diferenca_segundos ELSE 0 END), 0) AS tempo_inativo_segundos
    FROM
        tempos_calculados
    GROUP BY
        fkSensor, nome
)
SELECT
    fkSensor,
    nome,
    FLOOR(tempo_ativo_segundos / 60) AS tempo_ativo_minutos,
    tempo_ativo_segundos % 60 AS tempo_ativo_segundos_restantes,
    FLOOR(tempo_inativo_segundos / 60) AS tempo_inativo_minutos,
    tempo_inativo_segundos % 60 AS tempo_inativo_segundos_restantes
FROM
    tempos_agrupados;


-- PARA SELECIONAR A MÉDIA NUM DIA ESPECIFICO DA SEMANA
SELECT ROUND(AVG(total_usos)) AS media_usos
FROM (
    SELECT COUNT(*) AS total_usos
    FROM registro
    WHERE fkSensor = 1
      AND DATE(momento) = '2024-06-14'
      AND registro = '1'
) AS subquery;

-- DROP DATABASE purplex; --
-- DROP USER 'API'@'localhost'; --
