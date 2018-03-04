create table food_feature( #特色菜
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_hot( #热菜
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_cool( #凉菜
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_auxiliary( #下酒菜
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_treasure( #山珍海味
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_soup( #汤
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_dessert( #点心
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_hotPot( #火锅
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);


create table food_juice( #果汁
	id int primary key not null auto_increment,
	name varchar(25),
	pic_Url Text,
	price int 
);

create table food_extra( #菜品选项
	id int primary key,
	option varchar(25),
	price int
);



