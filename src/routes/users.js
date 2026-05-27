const express = require('express');
const router = express.router();

// GET users localhost:3000/users
router.get('/', 
    (requ, res) => {
        res.json(
            {users: ['Jorge', 'Letelier']}
        );
    }
);

// GET users whith id localhost:3000/users:id
router.get('/:id',
    (req, res) => {
        res.json(
            {id: req.params.id}
        );        
    }

);

module.exports = router;

