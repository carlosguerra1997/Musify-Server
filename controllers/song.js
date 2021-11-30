const mongoose = require( 'mongoose' );

const Song = require( '../models/Song' );

module.exports.saveSong = async( req, res ) => {
    const { number, name, duration, file } = req.body;

    const song = new Song({
        number,
        name,
        duration: duration || '',
        file: file || ''
    });
    const songStored = await song.save();
    return res.status(200).json({ ok: true, msg: 'La canción se ha añadido correctamente' });
}

module.exports.getSong = async( req, res ) => {
    const songId = mongoose.Types.ObjectId( req.params.id );
    const song = await Song.findOne({ _id: songId });

    if ( !song ) return res.status(400).json({ ok: false, msg: 'La canción no se ha podido obtener' });
    else return res.status(200).json({ ok: true, song });
}

module.exports.getSongs = async( req, res ) => {
    const songs = await Song.find();

    if ( !songs ) return res.status(400).json({ ok: false, msg: 'No se ha podido obtener ninguna canción' });
    else return res.status(200).json({ ok: true, songs });
}

module.exports.updateSong = async( req, res ) => {

}

module.exports.deleteSong = async( req, res ) => {

}