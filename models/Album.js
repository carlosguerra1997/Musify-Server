const { Schema } = require('mongoose');

const AlbumSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    description: { type: Schema.Types.String },
    year: { type: Schema.Types.Number },
    image: { type: Schema.Types.String },
    artist: { type: Schema.Types.ObjectId, required: true, ref: 'Artist' }
}, { versionKey: false });

module.exports = model( 'Album', AlbumSchema );