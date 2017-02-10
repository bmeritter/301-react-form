import paper from '../paper-data/paper';
import homeworkQuiz from '../paper-data/homework-quiz';

const papers = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_PAPER_DATA' :
      return paper;

    case 'EDIT_PAPER_INFO' : {
      let newPaper = paper;
      const {name, description} = action.data;
      if (name) {
        newPaper.name = name;
      }
      if (description) {
        newPaper.description = description;
      }
      console.log(newPaper);
      return newPaper;
    }

    case 'UPDATE_LOGIC_PUZZLE': {
      let newPaper = paper;
      let logicSection = paper.sections.find((section) => {
        return section.type === 'logicPuzzle';
      });

      logicSection = action.data;
      logicSection = newPaper.sections.map((section) => {
        if (section.type === 'logicPuzzle') {
          section.definition = logicSection;
        }
        return section;
      });
      console.log(newPaper);
      return newPaper;
    }

    case 'INIT_HOMEWORKQUIZ' :
      return homeworkQuiz;

    default:
      return state;
  }
};

export default papers;