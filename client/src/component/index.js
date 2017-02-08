import React from 'react';
import {Component} from 'react'
import PaperInfo from './PaperInfo';
import LogicPuzzle from './LogicPuzzle';
import SectionAddButton from './SectionAddButton';
import PaperSubmit from './PaperSubmit';
import Section from './Section';

export default class Paper extends Component {
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