const mongoose = require( 'mongoose' );

const Album = require( '../models/Album' );

module.exports.saveAlbum = async( req, res ) => {
    const { title, description, year, image } = req.body;

    const album = new Album({
        title,
        description: description || '',
        year: year || 1967,
        image: image || ''
    });

    // Guardamos el álbum.
    const albumStored = await album.save();

    // Devolvemos un mensaje
    return res.status(200).json({ ok: true, msg: 'El ábum ha sido creado correctamente', albumStored });

}

module.exports.getAlbum = async( req, res ) => {
    // Transformamos el parámetro ID a un ObjectId y buscamos el álbum.
    const albumId = mongoose.Types.ObjectId( req.params.id );
    const album = await Album.findOne({ _id: albumId });
    if ( !album ) return res.status(500).send({ ok: false, msg: 'El album no existe' });
    else return res.status(200).json({ ok: true, album });
}

module.exports.getAlbums = async( req, res ) => {
    // Buscamos todos los albums
    const albums = await Album.find();
    if ( !albums ) return res.status(500).json({ ok: false, mgs: 'No existe ningún album' });
    else return res.status(200).json({ ok: true, albums });
}

module.exports.updateAlbum = async( req, res ) => {
    console.log(' Estoy en updateAlbum ');
}

module.exports.deleteAlbum = async( req, res ) => {
    // Transformamos el parámetro ID a un ObjectID y buscamos el álbum.
    const albumId = mongoose.Types.ObjectId( req.params.id );
    const albumToDelete = await Album.findOneAndRemove({ _id: albumId });
    if ( !albumToDelete ) return res.status(500).json({ ok: false, msg: 'El album no existe' });
    else return res.status(200).json({ ok: true, msg: 'El album ha sido borrado correctamente' });
}