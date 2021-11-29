const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    surname: { type: Schema.Types.String },
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    role: { type: Schema.Types.String },
    image: { type: Schema.Types.String }
}, { versionKey: false });

module.exports = model( 'User', UserSchema );