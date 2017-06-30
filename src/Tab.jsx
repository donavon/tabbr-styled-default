import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tab as RawTab } from 'tabbr';

const getBoarderTop = ({ color }) => (color ? `solid 4px ${color}` : 'none');
const getPaddingTop = ({ color }) => (color ? '4px' : '8px');

const Tab = styled(({ color, ...rest }) => (
  <RawTab {...rest} />
))`
  &[role="tab"] {
    list-style: none;
    padding: ${getPaddingTop} 18px 5px 18px;
    border: none;
    border-bottom: solid 1px #666;
    border-top: ${getBoarderTop};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-left: 10px;
    background-color: #eee;
    text-decoration: none;
    color: #444;
    font: inherit;
    &:hover {
      background-color: #fff;
    }
    &[aria-selected="true"] {
      background-color: #fff;
      border-bottom: solid 1px #fff;
    }
    &[aria-disabled="true"] {
      background-color: #ccc;
      color: #888;
    }
  }
`;

Tab.propTypes = {
  color: PropTypes.string,
};

Tab.defaultProps = {
  color: null,
};

export default Tab;
