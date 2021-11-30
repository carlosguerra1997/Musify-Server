const mongoose = require( 'mongoose' );

const Artist = require( '../models/Artist' );

module.exports.saveArtist = async( req, res ) => {
    const { name, description, image } = req.body;
    
    const artist = new Artist({
        name,
        description: description || '',
        image: image || ''
    });

    const artistStored = await artist.save();
    return res.status(200).json({ ok: true, msg: 'Artista almacenado correctamente' });
}

module.exports.getArtist = async( req, res ) => {
    const artistId = mongoose.Types.ObjectId( req.params.id );
    const artist = await Artist.findOne({ _id: artistId });

    if ( !artist ) return res.status(500).json({ ok: false, msg: 'No se ha podido encontrar el artista' });
    else return res.status(200).json({ ok: true, artist });
}

module.exports.getArtists = async( req, res ) => {
    const artists = await Artist.find();
    if ( !artists ) return res.status(500).json({ ok: false, msg: 'No existe ningún artista' });
    else return res.status(200).json({ ok: true, artists });
}

module.exports.updateArtist = async( req, res ) => {
    
}

module.exports.deleteArtist = async( req, res ) => {
    const artistId = mongoose.Types.ObjectId( req.params.id );
    const artist = await Artist.findOne({ _id: artistId });

    if ( !artistId ) return res.status(400).json({ ok: false, msg: 'El artista no ha podido ser borrado' });
    else {
        await Artist.deleteOne( artist );
        res.status(200).json({ ok: true, msg: 'El artista ha sido borrado correctamente' });
    }
}