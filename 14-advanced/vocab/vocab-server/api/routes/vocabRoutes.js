const vocabBuilder = require('../controllers/vocabController');

module.exports = (app) => {
  app.route('/words')
    .get(vocabBuilder.listAllWords) // index
    .post(vocabBuilder.createWord); // create

  app.route('/words/:wordId')
    .get(vocabBuilder.readWord) // show
    .put(vocabBuilder.updateWord) // update
    .delete(vocabBuilder.deleteWord); // destroy
};
