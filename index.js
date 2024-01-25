const mongoose = require('mongoose');
//on part de la racine / pas besoind e mettre le .js à la fin il sera jouté
//automatiquement.
const User = require('./models/User')

async function main(){
    //.connect est une fonction fourni par le paquert
    await mongoose.connect('mongodb://127.0.0.1:27017/exemple-mongoose');
    console.log('connexion ok');

    //Les modèles sont une sorte de plan et quand on fait new Modele on instancie le modèle
    //et on crée un document qui dans ce cas là est un utilisateur.
    const user1 = new User({
        email:"eldehflg@gmail.com",
        firstname:"Elisa",
        lastname:"ROBERT AOUCHER",
        age:34
    })

    //pour sauvegarder l'utilisateur dans la base de données
    await user1.save();

    //ici je ne crée pas un new User à l'intèrieur duquel je passe les informations et j'enregistre ça
    //dans une variable mais j'utilise directement User notre modèle et non pas un utilisateur et
    //je vais appeler la méthode create dessus qui va me permettre de créer directement un utilisateur
    //sans la base de données.
    //Toute cette création je vais pouvoir la stocker dans une variable
    const user2 = await User.create({
        email:"agddhleh@gmail.com",
        firstname:"ROBERT"
    })

    const user3 = await User.create({
        email:"algihlddee33@gmail.com",
        firstname : "Alice"
    })

    const user4 = new User({
        email:"sophdhldiaa@gmail.com",
        firsname:"Sophie",
        age:12
    })

    const user5 = new User({
        email:"snadrdhdline@gmail.com",
        firstname:"Sandrine",
        age:12
    })

    

    //on peut créer de deux manières en faisant new et en utilisant create directement suur le modèle avec User
    //la seule distinction c'est qu'avec le new on peut faire des modifications en faisant user1.lastname="Dupnt"

    const users=await User.find();
    
    const elisa = await User.findById("65b2347cd7e9b2b6a929f461");
    // console.log(elisa)

    //quand on utilise find => un tableau de documents / un ensemble de documents retournés
    //quand on utilise findById => alors c'est un seul document retourné

    //si on souhaite récupérer les utilisateur qui on comme prénom alice
    //même si il y en a qu'un seul on va récupere tout un ensemble de documents sous forme d'un tableau
    const alice = await User.find({
        firstname: "Alice"
    })
    
    //pour récupérer les utilisateurs au dessus de 15 ans
    //gte = greater than or equal
    const recueperationUserAvecAge = await User.find({
        age: { $gte: 15 }
    })

    

    //si on veut récupérer tout les utilisateurs qui s'appel Elisa ou Alice 
    //on peut faire cela c'est un ou inclusif par défaut donc on peut avoir
    //l'une ou l'autre ou les deux 
    //(MON EX NE MARCHE PAS=)
    const recuperationPersonnes = await User.find({
        $or : [
            {email:"snadrhdine@gmail.com"},
            {age:12}
        ],
    });

    //pour faire le ET
    const recuperationPersonnes1 = await User.find({
        age:{ $gt:50 },
        $or : [
         
            {email:"snadrmhdine@gmail.com"},
            {age:12}
        ],
    });

    //on peut faire du chainage de méthode la on veut récupérer que le champs firstname
    const recuperationPersonnes2 = await User.find({
        age:{ $gt:50 },
        $or : [
         
            {email:"snadhrmhdine@gmail.com"},
            {age:12}
        ],
    }).select("firstname");

    //pour récupérer le firsname et l'email pour faire le tri de manière ascendant
    const recuperationPersonnes3 = await User.find({
        age:{ $gt:50 },
        $or : [
         
            {email:"snadrmhdine@gmail.com"},
            {age:12}
        ],
    }).select("firstname email")
    .sort({firstname:"asc"});



    mongoose.disconnect();

}

main();

