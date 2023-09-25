const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../talentData.txt');

// Function to append data to a file
const appendTalentToFile = (talent) => {
 

  // Prepare the data to append (convert to JSON for example)
  const dataToAppend = JSON.stringify(talent) + '\n';

  // Append the data to the file
  fs.appendFile(filePath, dataToAppend, (err) => {
    if (err) {
      console.error('Error appending talent data to file:', err);
    } else {
      console.log('Talent data appended to file:', dataToAppend);
    }
  });
};


const readTalentDataFromFile = () => {
    try {
      // Read the content of the file and split it into an array of lines
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const talentDataArray = fileContent.trim().split('\n').map((line) => JSON.parse(line));
  
      return talentDataArray;
    } catch (err) {
      console.error('Error reading talent data from file:', err);
      return [];
    }
  };

module.exports = {
  appendTalentToFile,
  readTalentDataFromFile,
};
