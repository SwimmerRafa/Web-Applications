const mongoose = require("mongoose");

const libroSchema = mongoose.Schema({ 
    _id : mongoose.Schema.Types.ObjectId,
    titulo: String,
    resumen: String,
    autor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autor"
    },
    creado:{
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("Libro", libroSchema);