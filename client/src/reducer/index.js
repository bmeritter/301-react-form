import paper from '../paper-data/paper';

const papers = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_PAPER_DATA' :
      return paper;

    case 'EDIT_PAPER_INFO' : {
      let newData = paper;
      const {name, description} = action.data;
      if (name) {
        newData.name = name;
      }
      if (description) {
        newData.description = description;
      }
      return newData;
    }

    default:
      return state;
  }
};

export default papers;