create database registroCOVID2;
use registroCOVID2;

create table paciente(
    id_paciente int primary key auto_increment, 
    nombre varchar(30),
    edad int,
    genero varchar(30),
    seguridad_social VARCHAR(10) ,
    dolor_de_garganta varchar(30),
    tos_seca varchar(30),
    fiebre varchar(30),
    dificultad_para_respirar varchar(30),
    diabetes varchar(30),
    hipertension varchar(30),
    sobrepeso varchar(30)
);


