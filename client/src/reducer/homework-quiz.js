import homeworkQuiz from '../paper-data/homework-quiz';

const papers = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_HOMEWORKQUIZ' :
      return homeworkQuiz;

    default:
      return state;
  }
};

export default papers;