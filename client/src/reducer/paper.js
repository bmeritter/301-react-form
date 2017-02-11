import paper from '../paper-data/paper';

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

      if (!logicSection) {
        let newLogic = {
          type: 'logicPuzzle',
          definition: action.data
        }
        newPaper.sections.push(newLogic);
        return newPaper;
      }

      if (action.data) {
        let newSection = newPaper.sections.filter((section) => {
          return section.type !== 'logicPuzzle';
        });
        newPaper.sections = newSection;
        return newPaper;
      }


      logicSection = action.data;
      logicSection = newPaper.sections.map((section) => {
        if (section.type === 'logicPuzzle') {
          section.definition = logicSection;
        }
        return section;
      });
      return newPaper;
    }

    case 'ADD_HOMEWORKQUIZ' : {
      let newPaper = paper;
      let quizzes = action.data.quizzes;
      let sectionId = action.data.sectionId;
      let newSection = paper.sections.filter((section) => {
        return section.type === 'homeworkQuiz';
      });
      let newQuizzes = newSection[sectionId].definition.quizzes;
      newQuizzes = newQuizzes.concat(quizzes);

      newSection[sectionId].definition.quizzes = newQuizzes;

      let logicPuzzle = paper.sections.filter((section) => {
        return section.type === 'logicPuzzle';
      });
      newSection = logicPuzzle.concat(newSection);

      newPaper.sections = newSection;

      return newPaper;
    }


    case 'DELETE_SECTIONS' : {
      let newPaper = paper;
      let sectionId = action.data.sectionId;
      let newSection = paper.sections.filter((section) => {
        return section.type === 'homeworkQuiz';
      });

      newSection = newSection.filter((section, index) => {
        return index !== sectionId;
      });

      let logicPuzzle = paper.sections.filter((section) => {
        return section.type === 'logicPuzzle';
      });
      newSection = logicPuzzle.concat(newSection);

      newPaper.sections = newSection;

      return newPaper;
    }

    case 'ADD_SECTION' : {
      let newPaper = paper;
      let section = {
        type: 'homeworkQuiz',
        definition: {}
      };
      newPaper.sections.push(section)

      return newPaper;
    }

    default:
      return state;
  }
};

export default papers;