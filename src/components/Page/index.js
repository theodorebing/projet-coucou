import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'src/components/Menu';

import './style.scss';

const Page = ({ children }) => (
  <main className="page">
    {/* <Menu /> */}
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;