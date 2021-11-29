const { Schema, model } = require('mongoose');

const ArtistSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    description:{ type: Schema.Types.String },
    image: { type: Schema.Types.String }
}, { versionKey: false });

module.exports = model( 'Artist', ArtistSchema );