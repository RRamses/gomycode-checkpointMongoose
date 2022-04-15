import Database from "./Database/Database.js";
import Person from "./Database/models/Person.js";

/* lisaison de la base de donnée a index.js*/
let db=new Database ();

/* creation de la collection person avec save */
//

/*  creation d un document*/

//let person=new Person(
  //  {name:"Robert Axelrod",
   // age:27,
    //favoritefoods:["pizza","placali"]
//});

//person.save().then((person)=>{
  //  console.log(person);

//})

/* creation de plusieurs document  */
// 

//Person.create([
    //  {
    //name: "Tommy Shelby",
    //age:25,
    //favoritefoods:["garba","sushi"]
    //},

    // {
    //name: "Arthur",
    //age:30,
    //favoritefoods:["choukouya","tchep"]
    //},
    // {
    //    name: "Mary",
    //   age : 29,
    //   favoritefoods:["pizza", "placali"]
    // }
    //])


/* trouver(afficher) tous les documents de la colletion person*/

  //Person.find().then((person)=>{ console.log(person)})

   /* trouver un document selon le critere de la nourriture*/

   //Person.findOne({favoritefoods:"garba"}).then((person)=>{console.log(person)})

   /* trouver un document selon son id*/

   //let id='62587f631b28ec6818d1ed65'
   //Person.findById(id).then((person)=>console.log(person))

   /* trouver un document selon son id et ajouter humberger a sa liste de plat prefere*/

    // let id='62587f631b28ec6818d1ed65'
    //Person.findById(id).update({favoritefoods:"humberger"}).then((person)=>console.log(person))

   /*modifier l age d une personne apres l avoir trouver grace a son nom , en utilisant*/
       // Person.findOneAndUpdate(
       // {name:"Wags"},
       // {age:20}).then((person)=>console.log(person))

     /* supprimer une personne apres l avoir trouver gracea son id */

     //Person.findByIdAndRemove({_id:"62587f631b28ec6818d1ed64"}).then((person)=>console.log(person))

     /* supprimer toute personne qui s apple Mary avec model.remove*/

     //Person.remove({name:"Mary"}).then((person)=>console.log(person))

     /*Trouvez des gens qui aiment les burritos.
      Triez-les par nom, limitez les résultats à deux documents
       et masquez leur age grace au query helper. */

      //Person.find({favoritefoods:"garba"})
        //        .limit(2)
          //      .sort({name:1})
            //    .select({age:true})
                //.then((person)=>console.log(person))
                

                




