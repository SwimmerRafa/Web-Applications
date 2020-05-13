const mongoose = require("mongoose");

const autorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        nombres:{
            type: String,
            required: true
        },
        apellidos:{
            type: String
        },
    },
    creado:{
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("Autor", autorSchema);