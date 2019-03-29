import 'es5-shim/es5-sham';
import 'es6-shim';
import 'object-create-ie8';
import 'object-defineproperty-ie8';
import 'console-polyfill';
import 'json3';
import 'fetch-polyfill2';
import React from 'react';
import ReactDom from 'react-dom';
import 'create-react-class';
import RouterConfig from './router';

ReactDom.render(
    <RouterConfig />,
    document.getElementById('root')
);
