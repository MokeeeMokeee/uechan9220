#!/usr/bin/env node
'use strict';
const path = require('path');
const termImg = require('term-img');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink');

const ui = importJsx('./ui');

termImg(path.join(__dirname, 'mokeImage.png'));

render(React.createElement(ui));
