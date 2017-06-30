import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TabGroup as RawTabGroup } from 'tabbr';

const getBackgroundColor = ({ backgroundColor }) => backgroundColor;

const TabGroup = styled(({ backgroundColor, ...rest }) => (
  <RawTabGroup {...rest} />
))`
  &[role="tablist"] {
    background-color: ${getBackgroundColor};
    padding: 0;
    margin: 0;
    & > li {
      display: inline-block;
      vertical-align: bottom;
      }
    }
  }
`;

TabGroup.propTypes = {
  backgroundColor: PropTypes.string,
};

TabGroup.defaultProps = {
  backgroundColor: 'transparent',
};

export default TabGroup;
