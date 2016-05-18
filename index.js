'use strict';

var specificity = require('specificity');
var sparkly = require('sparkly');
var cssParse = require('css-parse');
var unminify = require('cssbeautify');

// https://github.com/pocketjoso/specificity-graph/blob/master/lib/generateCssData.js#L8
 function specSum(selector) {
    var specs = specificity.calculate(selector)[0].specificity.split(',');
    var sum = (parseInt(specs[0])*1000) + (parseInt(specs[1])*100) + (parseInt(specs[2])*10) + (parseInt(specs[3]));

    return sum;
};

var cssSelectorArray = [
  'body { color: red;}',
  '.div { color: red; }',
  '.div.div { color: red; }',
  'input[type=text] { color: red; }',
  '#kill-me { color: red; }',
  '@media screen and (min-width: 600px) { .media-query-selector { color: red; }',
  '.another-one-inside-mq { color: red; } }'
];

var result = cssSelectorArray.map(specSum);
var sparkline = sparkly(result.concat(result).concat(result).concat(result).concat(result).concat(result), {style: 'fire'});

console.log(sparkline);
