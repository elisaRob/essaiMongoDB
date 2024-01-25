const mongoose = require('mongoose');
// const userSchema = new mongoose.Schema; 
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, unique: true},
    firstname: { type: String, required: true },
    lastname: String,
    age: { type:Number, min:0 }

})

//Lorsqu'on crée quelque chose à partir d'un modèle, on crée alors ce qu'on appel un document. Là c'est un document mongoDb que l'on crée
//au niveau de notre base de donnée. Ce sont les modèles avec mongoose qui vont nous permettre d'intéragir 
//avec notre base de données en nous donnant un ensemble de fonctions pour aller par exemple créer des documents
// qui font référence à un modèle pour supprimer des documents...

//on va devoir créer un modèle qui s'appelle mongoose.model à l'intèrieur on va passer le nom du modèle 
//qui s'appel User à partir du modèle UserSchema. Ce nom il est très important puisque c'est le nom qui
//va être utilisé par mongoose pour créer notre collection d'utilisateur dans la base de données, on va donc pouvoir stocker
//ce modèle User à l'intèrieur d'une variable puis après on va pouvoir l'exporter le rendre utilisable depuis l'extèrieur.
const User = mongoose.model('User', userSchema);
module.exports = User;
//C'est ce modèle User qui vont utiliser pour définir avec la collection Utilisateur dans notre base de données.