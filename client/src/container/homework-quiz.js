import {connect} from 'react-redux';
import HomeworkQuiz from '../component/homework-quiz';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomeworkQuiz);