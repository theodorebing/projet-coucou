import React from 'react';
import Page from 'src/components/Page';
import About from './About';
import './styles.scss';

const Help = () => (
  <Page>
    <div className="help">
      <About />
    </div>
  </Page>
);

export default Help;
