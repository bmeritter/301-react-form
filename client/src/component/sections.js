import React, {Component} from 'react';
import Section from '../container/section';

export default class Sections extends Component {
  componentDidMount() {
    this.props.loadSections();
  }

  render() {
    let sections = this.props.sections || [];
    return (
      <div>
        {
          sections.map((section, index) => {
            return (
              <Section key={index} sectionId={index} {...section}/>
            )
          })
        }
      </div>
    );
  }
}
