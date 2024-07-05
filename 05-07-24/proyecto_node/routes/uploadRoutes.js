const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const { title } = require("process");

// Configuración de Multer para la carga de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Directorio donde se guardan los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname); // Nombre original del archivo subido
  },
});
const filefilter=(req,file,cb)=>{
  const tipo=file.mimetype
  const imagen=tipo.search('image')
  const pdf=tipo.search('pdf')
  if(imagen>0 || pdf>0 ){
    cb(null,true)
  }
  else{
    cb(null,false)
  }

}
const upload = multer({ storage: storage, fileFilter:filefilter });

// Ruta para mostrar el formulario de carga de archivos
router.get("/", (req, res) => {
  res.render("upload-form", {
    layout: "layouts/main",
    title: "Carga de archivos",
    message: "Formulario de carga de archivos.",
  });
});

// Ruta para manejar la carga de archivos (POST)
router.post("/upload", upload.single("file"), (req, res) => {
  if(req.file!=null){
    res.render("upload-success", {
      title: "Carga Exitosa",
      message: "Archivo cargado exitosamente",
      filename: req.file.filename,
    });
  }
  else{
    res.render('upload-success',{
      title:'Carga fallida',
      message:'Archivo no válido',
      filename:'Archivo no válido'
    })
  }
});

module.exports = router;
