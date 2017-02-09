import React from 'react';
import {Component} from 'react'
import PaperInfo from '../container/paper-info';
import LogicPuzzle from './LogicPuzzle';
import SectionAddButton from './SectionAddButton';
import PaperSubmit from './PaperSubmit';
import Section from './Section';

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