import React from 'react';
import './Globalstyle.scss';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}

export default GlobalStyles;
