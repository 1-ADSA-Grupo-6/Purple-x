create database PurpleX;
use PurpleX;

drop user 'purplex'@'localhost'; 
create user 'purplex'@'localhost' identified by 'purplex100';
grant all privileges on *.* to 'purplex'@'localhost';

create table sensor (
idSensor int primary key auto_increment,
nome varchar(45),
descricao varchar(100)
);

create table dados(
idDados int auto_increment,
medida char(1) not null,
momento datetime not null,
fkDados int,
constraint fkDadosSen foreign key (fkDados) references sensor(idSensor),
constraint pkCompostaDados primary key (idDados, fkDados)
);

create table empresa (
cnpj char(14) primary key not null,
nomeEmpresa varchar(100) not null,
telefone char(11) not null,
tamanhoEmpresa varchar(45),
constraint chkTamanhoEmpresa check(tamanhoEmpresa in('Pequeno', 'Médio', 'Grande')),
qtdFuncionario int
);
 
create table aparelhos (
idAparelhos int, 
fkAparelhos char(14), 
constraint pkCompostaAparelhos primary key (idAparelhos, fkAparelhos),
nome varchar(45),
descricao varchar(100),
fkSensor int,
constraint fkEmpresaApa foreign key (fkAparelhos) references empresa(cnpj),
constraint fkSensorApa foreign key (fkSensor) references sensor(idSensor)
);

create table endereco(
idEndereco int primary key not null auto_increment,
cep char(9) not null,
numero varchar(45) not null,
complemento varchar(45), 
fkEndereco char(14),
constraint fkEnderecoEmpresa foreign key (fkEndereco) references empresa(cnpj)
);

create table funcionario (
idFuncionario int not null auto_increment,
cpf char(11) not null,
nomeCompleto varchar(100) not null,
genero varchar(45) not null,
constraint chkGenero check(genero in('Feminino', 'Masculino', 'Outro', 'Prefiro não informar')),
dataNascimento date not null,
telefone char(8),
nomeEmpresa varchar(100) not null,
fkCnpj char(14),
constraint pkCompostaFunc primary key (idFuncionario, fkCnpj),
constraint fkCnpjFunc foreign key (fkCnpj) references empresa(cnpj)
);

create table contato(
idContato int auto_increment primary key, 
nome varchar(45),
email varchar(264) unique,
assunto varchar(100),
descreva varchar(1000)
);

insert into empresa (cnpj, nomeEmpresa, telefone, tamanhoEmpresa, qtdFuncionario) values
('01234567890123', 'Checkfit', '11912345678', 'Médio', 53),
('12345678901234', 'Xyz', '21987654321', 'Pequeno', 20),
('23456789012345', 'Fitness Body', '21987384321', 'Médio', 49),
('34567890123456', 'Academia Fortaleza', '31998765432', 'Pequeno', 38),
('45678901234567', 'PowerBoom', '31998778432', 'Grande', 300),
('56789012345678', 'Academia Forma Nova', '11919645678', 'Médio', 62);

insert into endereco (cep, numero, complemento, fkEndereco) values
('01234-567', '2Check', null, '01234567890123'),
('04567-890', '354', '11º andar', '12345678901234'),
('06789-012', '496', null, '23456789012345'),
('02345-678', '69', 'Dentro do condomínio Fortaleza', '34567890123456'),
('05678-901', '9B0', 'Em frente à padaria rosa', '45678901234567'),
('03456-789', '1A', 'Próximo da floricultura', '56789012345678');

insert into funcionario (cpf, nomeCompleto, genero, dataNascimento, telefone, nomeEmpresa, fkCnpj) values 
 ('12345648901', 'Maria da Silva', 'Feminino', '1990-05-15', '12345678', 'Academia Checkfit', '01234567890123'),
 ('23452389012', 'João Santos', 'Masculino', '1985-10-20', '23456789', 'Academia Checkfit', '01234567890123'),
 ('34527890123', 'Ana Oliveira', 'Prefiro não informar', '1995-02-28', '34567890', 'Academia Checkfit', '01234567890123'),
 ('45678245567', 'Pedro Souza', 'Prefiro não informar', '1988-08-10', '45678901', 'Academia Fortaleza', '34567890123456'),
 ('46789012345', 'Juliana Pereira', 'Outro', '1993-04-25', '56789012', 'Academia Fortaleza', '34567890123456'),
 ('56789013456', 'Lucas Lima', 'Masculino', '1990-12-03', '67890123', 'Academia Forma Nova', '56789012345678'),
 ('78900234567', 'Carla Costa', 'Feminino', '1987-07-18', '78901234', 'Academia PowerBoom', '45678901234567'),
 ('89012345878', 'Rafael Oliveira', 'Masculino', '1991-09-30', '89012345', 'Academia PowerBoom', '45678901234567'),
 ('90123256789', 'Fernanda Santos', 'Feminino', '1983-03-08', '90123456', 'Academia Fitness Body', '23456789012345'),
 ('01234567890', 'Gustavo Silva', 'Prefiro não informar', '1986-11-22', '01234567', 'Academia Fitness Body', '23456789012345'),
 ('89012345678', 'Gabriel Silva', 'Outro', '1990-10-07', '89012345', 'Academia XYZ', '12345678901234');
 
 insert into contato (nome, email, assunto, descreva) values
('Academia ABC', 'contato@academiaabc.com', 'Consulta sobre soluções de gerenciamento', 'Gostaríamos de saber mais sobre as soluções de gerenciamento que sua empresa oferece para academias.'),
('Academia XYZ', 'contato@academiaxyz.com', 'Orçamento para software de gestão', 'Estamos interessados em receber um orçamento para o software de gestão de academias.'),
('Academia Fitness Body', 'contato@academiafitness.com', 'Pedido de Socorro', 'Gostaríamos que enviassem o suporte tecnico para nos ajudar, deu problema no sensor de uma de nossas maquinas.'),
('Academia Fortaleza', 'contato@academiafortaleza.com', 'Consulta sobre serviços de consultoria', 'Estamos buscando serviços de consultoria para melhorar o desempenho e eficiência de nossa academia.'),
('Academia PowerBoom', 'contato@academiapowerboom.com', 'Agendamento de demonstração de produtos', 'Desejamos agendar uma demonstração de seus produtos e serviços para entender melhor como podem beneficiar nossa academia.'),
('Academia Forma Nova', 'contato@formanova.com', 'Dúvidas sobre implementação de soluções', 'Temos dúvidas sobre o processo de implementação de suas soluções de gerenciamento em nossa academia.'),
('Academia Saúde & Bem-Estar', 'contato@academiasaudebemestar.com', 'Solicitação de informações sobre treinamento para funcionários', 'Estamos interessados em treinamentos para nossa equipe visando melhorar a qualidade de nossos serviços.'),
('Academia Quality Life', 'contato@academiaqualitylife.com', 'Consulta sobre suporte técnico', 'Gostaríamos de saber mais sobre o suporte técnico oferecido após a implementação de suas soluções.');

select * from empresa;
select * from endereco;
select * from funcionario;

select * from funcionario 
where nomeCompleto like '%_a';

select * from funcionario 
where nomeCompleto like 'Gabriel%';

select * from funcionario 
where genero like 'feminino';

select * from funcionario 
where genero like 'outro';

select * from funcionario 
where nomeEmpresa like '%check%';

select funcionario.nomeCompleto as 'Nome do Funcionario',
funcionario.cpf as 'CPF do Funcionario',
empresa.nomeEmpresa as 'Nome da Empresa',
empresa.cnpj as 'CNPJ da Empresa'
from funcionario join empresa on funcionario.fkCnpj = empresa.cnpj;

select empresa.nomeEmpresa as 'Nome da Empresa',
empresa.cnpj as 'CNPJ da Empresa',
endereco.cep as 'CEP da Empresa',
endereco.complemento as 'Complemento da Empresa',
endereco.numero as 'Numero da Empresa'
from empresa join endereco on endereco.fkEndereco = empresa.cnpj;

select funcionario.nomeCompleto as 'Nome do Funcionario',
funcionario.cpf as 'CPF do Funcionario',
funcionario.genero as 'Gênero do Funcionario',
funcionario.dataNascimento as 'Data de Nascimento do Funcionario', 
funcionario.telefone as 'Telefone do  Funcionario',
empresa.nomeEmpresa as 'Nome da Empresa',
empresa.cnpj as 'CNPJ da Empresa',
endereco.cep as 'CEP da Empresa',
endereco.complemento as 'Complemento da Empresa',
endereco.numero as 'Numero da Empresa'
from funcionario join empresa on funcionario.fkCnpj = empresa.cnpj
join endereco on endereco.fkEndereco = empresa.cnpj;

select funcionario.nomeCompleto as 'Nome do Funcionario',
funcionario.cpf as 'CPF do Funcionario',
funcionario.genero as 'Gênero do Funcionario',
funcionario.dataNascimento as 'Data de Nascimento do Funcionario', 
funcionario.telefone as 'Telefone do  Funcionario',
empresa.nomeEmpresa as 'Nome da Empresa',
empresa.cnpj as 'CNPJ da Empresa',
endereco.cep as 'CEP da Empresa',
endereco.complemento as 'Complemento da Empresa',
endereco.numero as 'Numero da Empresa'
from funcionario join empresa on funcionario.fkCnpj = empresa.cnpj
join endereco on endereco.fkEndereco = empresa.cnpj 
where cnpj = '23456789012345';

select funcionario.nomeCompleto as 'Nome do Funcionario',
funcionario.cpf as 'CPF do Funcionario',
funcionario.genero as 'Gênero do Funcionario',
funcionario.dataNascimento as 'Data de Nascimento do Funcionario', 
funcionario.telefone as 'Telefone do  Funcionario',
empresa.nomeEmpresa as 'Nome da Empresa',
empresa.cnpj as 'CNPJ da Empresa',
endereco.cep as 'CEP da Empresa',
endereco.complemento as 'Complemento da Empresa',
endereco.numero as 'Numero da Empresa'
from funcionario join empresa on funcionario.fkCnpj = empresa.cnpj 
join endereco on endereco.fkEndereco = empresa.cnpj 
where nomeCompleto = 'Juliana Pereira';

select * from contato;

select assunto from contato;

select assunto as Assunto,
descreva as Decrição from contato 
where assunto like 'Orçamento%';

select assunto as Assunto,
descreva as Decrição from contato 
where assunto like '%Suporte%';
