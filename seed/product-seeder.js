var Product = require('../models/product');


var mongoose = require('mongoose');

//mongoose.connect('localhost:27017/shopping');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://static1.bestie.vn/Mlog/ImageContent/201707/20160630-035534-13495211-483952788470984-4938013175030066483-n-600x806-20170724211823.jpg',
        title:'so mi trang',
        description:'so mi trang tron thoi trang',
        price: 210000
    }),

    new Product({
        imagePath: 'https://ann.com.vn/wp-content/uploads/so-mi-nam-han-quoc-in-hinh-ngoi-sao-108-695.jpg',
        title:'so mi den',
        description:'so mi den hoa tiet thoi trang',
        price: 250000
    }),

    new Product({
        imagePath: 'https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8th19s039-cb165-33_thumb.jpg',
        title:'so mi caro',
        description:'so mi caro thoi trang',
        price: 230000
    }),

    new Product({
        imagePath: 'https://file.yes24.vn/Upload/ProductImage/muarung201607/1717230_L.png',
        title:'so mi den',
        description:'so mi den tron thoi trang',
        price: 300000
    }),
    new Product({
        imagePath: 'https://salt.tikicdn.com/cache/550x550/ts/product/99/61/2d/2714760abafa1eaa4877a535923b94c7.jpg',
        title:'so mi dui',
        description:'so mi dui xam thoi trang',
        price: 230000
    }),
    new Product({
        imagePath:'https://media3.scdn.vn/img2/2018/1_8/OXDwoI_simg_de2fe0_500x500_maxb.png',
        title:'so mi co tau',
        description:'so mi trang co tau thoi trang',
        price:270000
    }),
];

var done=0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
