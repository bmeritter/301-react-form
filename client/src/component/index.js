import React from 'react';
import {Component} from 'react'
import PaperInfo from './PaperInfo';
import LogicPuzzle from './LogicPuzzle';

export default class Paper extends Component {
  render() {
    return (
      <div>
        <PaperInfo/>
        <LogicPuzzle/>
      </div>
    );
  }
}