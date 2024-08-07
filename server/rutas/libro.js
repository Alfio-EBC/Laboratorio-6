const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/get-html', (req, res) => {
    const fileName = req.query.fileName;
    const validFiles = ['pag1.html', 'pag2.html'];

    if (validFiles.includes(fileName)) {
        res.sendFile(path.join(__dirname, '../../public', fileName)); 
    } else {
        res.status(404).send('File not found');
    }
});

router.post('/post-html', (req, res) => {
    const fileName = req.body.fileName;
    console.log('POST request received with fileName:', fileName); 

    const validFiles = ['pag1.html', 'pag2.html'];

    if (validFiles.includes(fileName)) {
        res.sendFile(path.join(__dirname, '../../public', fileName)); 
    } else {
        console.log('Invalid file:', fileName);  
        res.status(404).send('File not found');
    }
});

module.exports = router;
