import React, {Component}  from 'react';
import PaperInfo from '../container/paper-info';
import LogicPuzzle from '../container/logic-puzzle';
import SectionAddButton from './section-add-button';
import PaperSubmit from './paper-submit';
import Section from './section';

export default class Paper extends Component {
  componentDidMount() {
    this.props.initPaperData();
  }

  render() {
    return (
      <div>
        <PaperInfo/>
        <LogicPuzzle/>
        <Section/>
        <SectionAddButton/>
        <PaperSubmit/>
      </div>
    );
  }
}