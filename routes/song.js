const express = require( 'express' );
const router = express.Router();
const { check } = require( 'express-validator' );

const SongController = require( '../controllers/song' );
const { validateErrors } = require('../middlewares/validationResult');

router.post( 
    '/saveSong', 
    [
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        validateErrors
    ],
    SongController.saveSong );

router.get( '/getSong/:id', SongController.getSong );
router.get( '/getSongs', SongController.getSongs );
router.put( '/updateSong/:id', SongController.updateSong );
router.delete( '/deleteSong/:id', SongController.deleteSong );

module.exports = router;