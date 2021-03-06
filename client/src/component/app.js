import React, {Component}  from 'react';
import PaperInfo from '../container/paper-info';
import LogicPuzzle from '../container/logic-puzzle';
import SectionAddButton from '../container/section-add-button';
import PaperSubmit from './paper-submit';
import Section from '../container/sections';

export default class Paper extends Component {
  componentWillMount() {
    this.props.initPaperData();
  }

  render() {
    return (
      <div className="container">
        <PaperInfo/>
        <LogicPuzzle/>
        <Section/>
        <SectionAddButton/>
        <PaperSubmit/>
      </div>
    );
  }
}