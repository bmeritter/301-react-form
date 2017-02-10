import paper from '../paper-data/paper';

const papers = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_SECTIONS' : {
      let homeworkQuiz = paper.sections.filter((section) => {
        return section.type === 'homeworkQuiz';
      });

      return homeworkQuiz;
    }
    default:
      return state;
  }
};

export default papers;