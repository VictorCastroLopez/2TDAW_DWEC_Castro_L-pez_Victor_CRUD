"use strict"

const tienda = [
    {
        "nombre":"Lebron James",
        "precio":62.95,
        "descripcion":"Camiseta de Lebron James en LA",
        "imagen":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/be682f16-ff07-4b80-86e6-e4298094c95f/camiseta-nba-swingman-city-edition-lebron-james-lakers-icon-edition-2020-hH6KpH.png",
        "fecha":"2019-2-25",
        "categoria":"Dunker",
        "original":true
    },
    {
        "nombre":"Stephen Curry",
        "precio":70.00,
        "descripcion":"Camiseta de Stephen Curry en Golden State Warriors",
        "imagen":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/ff50ee77-053c-4d83-9b51-980752e6e85a/warriors-icon-edition-camiseta-nba-swingman-nino-a-22VQBL.png",
        "fecha":"2020-7-3",
        "categoria":"Shooter",
        "original":true
    },
    {
        "nombre":"Allen Iverson",
        "precio":80.00,
        "descripcion":"Camiseta de Allen Iverson en Sixers",
        "imagen":"https://www.fuikaomar.es/22767-tm_large_default/camiseta-allen-iverson-sixers-swingman-negra.jpg",
        "fecha":"2020-5-16",
        "categoria":"Shooter",
        "original":false
    },
    {
        "nombre":"Vince Carter",
        "precio":76.95,
        "descripcion":"Camiseta de Vince Carter en Toronto Raptors",
        "imagen":"https://basketworld.com/5925-home_default/vince-carter-toronto-raptors-purple-hardwood-classic.jpg",
        "fecha":"2021-11-1",
        "categoria":"Dunker",
        "original":true
    },
    {
        "nombre":"Shaquille ONeal",
        "precio":119,
        "descripcion":"Camiseta de Shaquille O'Neal en Orlando",
        "imagen":"https://www.fuikaomar.es/22758-tm_cart_default/camiseta-shaquille-oneal-orlando-magic-swingman-azul.jpg",
        "fecha":"2018-1-3",
        "categoria":"Dunker",
        "original":false
    },
    {
        "nombre":"Spalding",
        "precio":200,
        "descripcion":"Pelota de baloncesto de spalding oficial",
        "imagen":"https://www.goalinn.com/f/13835/138357425/spalding-balon-baloncesto-tf-model-m-leather.jpg",
        "fecha":"2019-12-31",
        "categoria":"Pelotas",
        "original":false
    },
    {
        "nombre":"Wilson",
        "precio":25.49,
        "descripcion":"Pelota de baloncesto de Wilson oficial",
        "imagen":"https://m.media-amazon.com/images/I/61ve1WE8wWL._AC_SY355_.jpg",
        "fecha":"2022-9-11",
        "categoria":"Pelotas",
        "original":false
    },
    {
        "nombre":"Adidas",
        "precio":25,
        "descripcion":"Pelota de baloncesto de Adidas oficial",
        "imagen":"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8d1778943c7644a9bd01abfb0127cc46_9366/Balon_de_baloncesto_All_Court_2.0_Negro_GL3946_01_standard.jpg",
        "fecha":"2020-7-3",
        "categoria":"Pelotas",
        "original":true
    },
    {
        "nombre":"Molten",
        "precio":25,
        "descripcion":"Pelota de baloncesto dorada de Molten oficial",
        "imagen":"https://m.media-amazon.com/images/I/812+W8I7kXL._AC_SY450_.jpg",
        "fecha":"2015-6-9",
        "categoria":"Pelotas",
        "original":false
    },
    {
        "nombre":"Mamba fury",
        "precio":150.99,
        "descripcion":"Zapatillas de Nike en memoria a Kobe Bryant",
        "imagen":"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mamba-fury-zapatillas-nike-1594367827.jpg?crop=1.00xw:0.283xh;0,0.394xh&resize=1200:*",
        "fecha":"2021-8-15",
        "categoria":"Zapatillas",
        "original":true
    },
    {
        "nombre":"LeBron Witness 6 The Hunter",
        "precio":89,
        "descripcion":"Zapatillas de Nike en colaboración con Lebron James",
        "imagen":"https://www.manelsanchez.com/uploads/media/images/lebron-witness-6-the-hunter-14.jpg",
        "fecha":"2021-4-27",
        "categoria":"Zapatillas",
        "original":true
    },
    {
        "nombre":"Jordan AIR XXXV LOW",
        "precio":147.95,
        "descripcion":"Zapatillas de Michael Jordan",
        "imagen":"https://img01.ztat.net/article/spp-media-p1/e0b4506a247e4e2381a8b997cc0092ff/fc644098c7b948ee8ff1c26d59c162d4.jpg?imwidth=1800",
        "fecha":"2022-9-6",
        "categoria":"Zapatillas",
        "original":false
    },
    {
        "nombre":"Giannis Immortality Dragon Eye",
        "precio":69,
        "descripcion":"Zapatillas de Nike en colaboración con Giannis Antetokounmpo",
        "imagen":"https://www.manelsanchez.com/uploads/media/images/396x396/giannis-immortality-dragon-eye-1.jpg",
        "fecha":"2019-2-16",
        "categoria":"Zapatillas",
        "original":true
    },
    {
        "nombre":"Anillo GS",
        "precio":8.86,
        "descripcion":"Anillo de Golden State Warrios ganado en el temporada 2016/2017",
        "imagen":"https://www.joyeriaroyo.com/wp-content/uploads/2019/06/image5bc7525b27f40.jpg",
        "fecha":"2022-3-16",
        "categoria":"Anillos",
        "original":false
    },
    {
        "nombre":"Anillo Toronto Raptors",
        "precio":15.90,
        "descripcion":"Anillo Toronto Raptors ganado en el temporada 2019/2020",
        "imagen":"https://tiempomuertoweb.files.wordpress.com/2019/10/d99f4-109359864_raptorring.jpg",
        "fecha":"2016-6-3",
        "categoria":"Anillos",
        "original":false
    },
    {
        "nombre":"Anillo Cleveland Cavaliers",
        "precio":11.60,
        "descripcion":"Anillo Cleveland Cavaliers ganado en el temporada 2013/2014",
        "imagen":"https://www.joyeriaroyo.com/wp-content/uploads/2019/06/2016-Cleveland-Cavaliers-NBA-Championship-rings.jpg",
        "fecha":"2020-1-30",
        "categoria":"Anillos",
        "original":true
    },
    {
        "nombre":"Anillo LA Lakers",
        "precio":19.46,
        "descripcion":"Anillo LA Lakers ganado en el temporada 2001/2002",
        "imagen":"https://i.pinimg.com/originals/80/f2/86/80f286707025f9a3206863a734c830ea.jpg",
        "fecha":"2021-7-12",
        "categoria":"Anillos",
        "original":false
    }
];

