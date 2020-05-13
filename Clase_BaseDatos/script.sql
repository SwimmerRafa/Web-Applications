create database ejemplobd;
use ejemplobd;

create table Users(
    id int primary key auto_increment, 
    email varchar(30), 
    nombre varchar (45)
);

create table Products(
    id int primary key auto_increment,
    titulo varchar(45),
    precio decimal (8, 2), 
    descripcion varchar(45) 
);

create table Orden(
    users_id int, 
    products_id int,
    id int primary key auto_increment,
    foreign key(users_id) references Users(id), 
    foreign key(products_id) references Products(id)
);