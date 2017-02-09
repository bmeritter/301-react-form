import paper from '../paper-data/paper';

const papers = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_PAPER_DATA' :
      return paper;
    default:
      return state;
  }
};

export default papers;