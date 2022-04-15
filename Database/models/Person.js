import mongoose from "mongoose";

/* creation du shema(structure de donnee des documents de la colletion person) */
let personschema= new mongoose.Schema({
    name:{type:'string', required:true},
    age:{type:'number'},
    favoritefoods:[String]
})

/*  creation du model(colletion) person*/
const Person= mongoose.model('person',personschema)

export default Person;