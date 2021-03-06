const { Schema, model } = require('mongoose');

const SongSchema = new Schema({
    number: { type: Schema.Types.Number },
    name: { type: Schema.Types.String },
    duration: { type: Schema.Types.String },
    file: { type: Schema.Types.String },
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
}, { versionKey: false });

module.exports = model( 'Song', SongSchema );