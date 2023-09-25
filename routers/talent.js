const express=require('express');
const {appendTalentToFile,readTalentDataFromFile} = require('./talentlogger');
const router=express.Router();
const path = require('path');


router.get('/', async (req, res) => {
    const talent = {
      name: 'Jarin Arpita',
      identity: 'Programmar',
    };
  
    
  
    // Append the talent data to the log file
    appendTalentToFile(talent);
   

    const talentDataFromFile = readTalentDataFromFile();

    console.log('Talent data from file:', talentDataFromFile);
    res.sendFile(path.join(__dirname,'../views/talent.html'));
})

module.exports = router;