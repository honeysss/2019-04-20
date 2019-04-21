var express = require('express');
var router = express.Router();

// locallhost:3000/users/
router.get('', function (req, res) {
	res.send('respond with a resourse');
});

moudle.exports = router;
