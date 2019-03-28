import 'es5-shim'; //IE8
import 'es5-shim/es5-sham';
import 'es6-shim';
import 'object-create-ie8'; //IE8
import 'object-defineproperty-ie8'; //IE8
import 'console-polyfill';
import 'json3'; 
import 'fetch-polyfill2';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import 'create-react-class';
import Home from 'components/home';
import RouterConfig from './router';

ReactDom.render(<RouterConfig />, document.getElementById('root'));
// const render = Component => {
//     ReactDom.render(
//         // <Provider store={Store}>
//             <Component />,
//         // </Provider>,
//         document.getElementById('root')
//     )
// }

// render(RouterConfig);
