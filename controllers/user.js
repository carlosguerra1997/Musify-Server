const bcrypt = require( 'bcryptjs' );

const User = require( '../models/User' );

module.exports.saveUser = ( req, res ) => {
    const { name, surname, email, password, role, image } = req.body;

    // Encriptamos la contraseña.
    const salt = bcrypt.genSaltSync();
    const passwordHashed = bcrypt.hashSync( password, salt );

    // Setteamos los valores que nos llegan con la instancia del usuario que tenemos.
    const userStored = new User({ 
        name, 
        surname, 
        email, 
        password: passwordHashed, 
        role: role || 'ROLE_USER' ,
        image: image || null
    });

    // Guardamos el usuario
    userStored.save();

    // Mandamos un mensaje de registro correcto.
    return res.status(200).json({ ok: true, msg: 'El usuario se ha registrado correctamente' });
}