const express = require( 'express' );
const router = express.Router();
const { check } = require( 'express-validator' );

const ArtistController = require( '../controllers/artist' );
const { validateErrors } = require('../middlewares/validationResult');

router.post( 
    '/saveArtist',
    [
        check( 'name', 'El nombre del artista es requerido' ).not().isEmpty(),
        validateErrors
    ],
    ArtistController.saveArtist 
);

router.get( '/getArtist/:id', ArtistController.getArtist );
router.get( '/getArtists', ArtistController.getArtists );
router.put( '/updateArtist/:id', ArtistController.updateArtist );
router.delete( '/deleteArtist/:id', ArtistController.deleteArtist );

module.exports = router;