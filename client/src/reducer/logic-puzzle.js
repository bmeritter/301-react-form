import paper from '../paper-data/paper';

const papers = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_LOGIC-PUZZLE' : {
      let logicPuzzle = paper.sections.find((section) => {
        return section.type === 'logicPuzzle';
      });

      return logicPuzzle.definition;
    }
    default:
      return state;
  }

};

export default papers;