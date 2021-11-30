const express = require( 'express' );
const router = express.Router();
const { check } = require( 'express-validator' );

const AlbumController = require( '../controllers/album' );
const { validateErrors } = require('../middlewares/validationResult');

router.post( 
    '/saveAlbum', 
    [
        check( 'title', 'El título del álbum es obligatorio' ).not().isEmpty(),
        validateErrors
    ], 
    AlbumController.saveAlbum 
);

router.get( '/album/:id', AlbumController.getAlbum );
router.get( '/albums', AlbumController.getAlbums );
router.put( '/updateAlbum/:id', AlbumController.updateAlbum );
router.delete( '/deleteAlbum/:id', AlbumController.deleteAlbum );

module.exports = router;