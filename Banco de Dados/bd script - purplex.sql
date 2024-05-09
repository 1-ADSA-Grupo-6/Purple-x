create database PurpleX;
use PurpleX;

drop user 'purplex'@'localhost'; 
create user 'purplex'@'localhost' identified by 'purplex100';
grant all privileges on *.* to 'purplex'@'localhost';

create table representante(
idRepresentante int primary key auto_increment not null, 
nome varchar(45) not null,
cpf char(11) not null unique,
email varchar(264) not null unique,
senha varchar(100) not null
);

create table empresa (
idEmpresa int primary key not null auto_increment,
nomeEmpresa varchar(100) not null,
telefone char(11) not null,
qtdFranquias int,
cnpj char(14) unique,
fkRepresentante int,
foreign key (fkRepresentante) references representante(idRepresentante)
);

create table endereco(
idEndereco int primary key not null auto_increment,
cep char(9) not null,
numero varchar(45) not null,
complemento varchar(45), 
fkEndereco int,
foreign key (fkEndereco) references empresa(idEmpresa)
);

create table usuario(
idUsuario int not null auto_increment,
nomeCompleto varchar(100) not null,
dataNascimento date not null,
cpf char(11) unique,
telefone char(8),
email varchar(264) not null unique,
senha varchar(100),
fkEmpresa int,
primary key (idUsuario, fkEmpresa),
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table parametro(
idParametro int primary key not null,
qtdMax int,
qtdMin int
);

create table aparelhos(
idAparelhos int not null, 
fkAparelhos int, 
nome varchar(45),
descricao varchar(100) not null,
idSensor int,
fkParametro int,
primary key (idAparelhos, fkAparelhos, idSensor),
foreign key (fkAparelhos) references empresa(idEmpresa),
foreign key (idSensor) references aparelhos(idAparelhos),
foreign key (fkParametro) references parametro(idParametro)
);

create table dados(
idDados int auto_increment,
medida char(1) not null,
momento datetime not null,
fkDados int,
primary key (idDados, fkDados),
foreign key (fkDados) references aparelhos(idAparelhos)
);

create table contato(
idContato int auto_increment primary key, 
nome varchar(45),
email varchar(264) unique,
assunto varchar(100),
descreva varchar(1000)
);

insert into representante values
(default, 'Lorenzo Do Nascimento', '21436587946', 'lorenzo@yahoo.com', 'LO123456'),
(default, 'Luiza Chianezzi', '68356912365', 'luiza@yahoo.com', 'LU98765'),
(default, 'Vinícius Lima', '65896321654', 'vinicius@yahoo.com', 'VI67678'),
(default, 'Cassandra Dante', '91253856345', 'cassandra@yahoo.com', 'CA341245'),
(default, 'Marcos Ribeiro', '54567898798', 'marcos@yahoo.com', 'MA847651');

insert into empresa (nomeEmpresa, telefone, qtdFranquias, cnpj, fkRepresentante) values
('Checkfit', '11912345678', '3', '01234567890123', 1),
('Xyz', '21987654321', 20, '12345678901234', 1),
('Fitness Body', '21987384321', 49, '23456789012345', 2),
('Academia Fortaleza', '31998765432', 38, '34567890123456', 3),
('PowerBoom', '31998778432', 300, '45678901234567', 4),
('Academia Forma Nova', '11919645678', 62, '56789012345678', 5);

insert into endereco (cep, numero, complemento, fkEndereco) values
('01234-567', '2Check', null, '1'),
('04567-890', '354', '11º andar', '2'),
('06789-012', '496', null, '3'),
('02345-678', '69', 'Dentro do condomínio Fortaleza', '4'),
('05678-901', '9B0', 'Em frente à padaria rosa', '5'),
('03456-789', '1A', 'Próximo da floricultura', '6');

insert into usuario (nomeCompleto, dataNascimento, cpf, telefone, email, fkEmpresa) values 
 ('Maria da Silva', '1990-05-15','12345648901', '12345678', 'maria@gmail.com', '1'),
 ('João Santos', '1985-10-20', '23452389012', '23456789', 'joao@gmail.com', '1'),
 ('Ana Oliveira', '1995-02-28', '34527890123', '34567890', 'ana@gmail.com', '2'),
 ('Pedro Souza', '1988-08-10', '45678245567', '45678901', 'pedro@gmail', '3'),
 ('Juliana Pereira', '1993-04-25', '46789012345', '56789012', 'juliana@gmal.com', '3'),
 ('Lucas Lima', '1990-12-03', '56789013456', '67890123', 'lucas@gmail.como', '4'),
 ('Carla Costa', '1987-07-18', '78900234567', '78901234', 'carla@gmail.com', '5'),
 ('Rafael Oliveira', '1991-09-30', '89012345878', '89012345', 'rafa@gmail.com', '6');
 
 insert into contato (nome, email, assunto, descreva) values
('Academia ABC', 'contato@academiaabc.com', 'Consulta sobre soluções de gerenciamento', 'Gostaríamos de saber mais sobre as soluções de gerenciamento que sua empresa oferece para academias.'),
('Academia XYZ', 'contato@academiaxyz.com', 'Orçamento para software de gestão', 'Estamos interessados em receber um orçamento para o software de gestão de academias.'),
('Academia Fitness Body', 'contato@academiafitness.com', 'Pedido de Socorro', 'Gostaríamos que enviassem o suporte tecnico para nos ajudar, deu problema no sensor de uma de nossas maquinas.'),
('Academia Fortaleza', 'contato@academiafortaleza.com', 'Consulta sobre serviços de consultoria', 'Estamos buscando serviços de consultoria para melhorar o desempenho e eficiência de nossa academia.'),
('Academia PowerBoom', 'contato@academiapowerboom.com', 'Agendamento de demonstração de produtos', 'Desejamos agendar uma demonstração de seus produtos e serviços para entender melhor como podem beneficiar nossa academia.'),
('Academia Forma Nova', 'contato@formanova.com', 'Dúvidas sobre implementação de soluções', 'Temos dúvidas sobre o processo de implementação de suas soluções de gerenciamento em nossa academia.'),
('Academia Saúde & Bem-Estar', 'contato@academiasaudebemestar.com', 'Solicitação de informações sobre treinamento para funcionários', 'Estamos interessados em treinamentos para nossa equipe visando melhorar a qualidade de nossos serviços.'),
('Academia Quality Life', 'contato@academiaqualitylife.com', 'Consulta sobre suporte técnico', 'Gostaríamos de saber mais sobre o suporte técnico oferecido após a implementação de suas soluções.');

-- insert into aparelhos (fkAparelhos, nome, descricao) values
-- ('Leg Press', 'perna'),
-- ('Smith', 'perna'),
-- ('Supino Inclinado', 'peito');

-- insert into parametros (qtdMax, qtdMin) values

select * from representante;
select * from empresa;
select * from endereco;
select * from usuario;
select * from aparelhos;
select * from parametro;

select * from usuario 
where nomeCompleto like '%_a';

select * from usuario 
where nomeCompleto like 'Rafael%';

select * from contato;

select assunto from contato;

select assunto as Assunto,
descreva as Decrição from contato 
where assunto like 'Orçamento%';

select assunto as Assunto,
descreva as Decrição from contato 
where assunto like '%Suporte%';

select * from dados;

select empresa.nomeEmpresa as 'Nome Empresa',
empresa.telefone,
empresa.cnpj,
empresa.qtdFranquias,
endereco.cep,
endereco.numero,
endereco.complemento,
representante.nome as 'Nome Represetante',
representante.cpf,
representante.email
from empresa join endereco on fkendereco = idEmpresa 
join representante on fkRepresentante = idRepresentante;
