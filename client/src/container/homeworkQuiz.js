import {connect} from 'react-redux';
import HomeworkQuiz from '../component/HomeworkQuiz';

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomeworkQuiz);