const multer= require.apply("multer");
const path=require("path");

const storage = multer.diskStorage({
    destination:function (req, file, cb){
        cb(null,path.join(__dirname, "../upload"))
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now();

        cb(null, uniqueSuffix+ '-'+ file.originalname)
    }
})

function fileFilter(req, file, cb){


    if(file.minetype=="image/jpg"|| file.minetype=="image/png"|| file.minetype=="image/jpg"){
        cb(null, true)
    }

    else{
        cb(null, false)
        
    }
}


module.exports= multer({storage, fileFilter});

