'use strict';

var specificity = require('specificity');
var sparkly = require('sparkly');
var cssParse = require('css-parse');
var unminify = require('cssbeautify');

// https://github.com/pocketjoso/specificity-graph/blob/master/lib/generateCssData.js#L8
var specSum = function(selector){
  var specs = specificity.calculate(selector)[0].specificity.split(',');
  var sum = (parseInt(specs[0])*1000) + (parseInt(specs[1])*100) + (parseInt(specs[2])*10) + (parseInt(specs[3]));
  return sum;
};

/*
 * Adds rule to results. Modifies pass in results array
 * PARAMS: rule (object), selectorIndex (int), results (array)
 * RETURNS: selectorIndex
 */
var addRuleToResults = function(rule, selectorIndex, results) {
  var selectors = rule.selectors || [];
  var line = rule.position.start.line;

  selectors.forEach(function(selector){
    if(selector.length === 0) return;
    results.push({
      selectorIndex: selectorIndex,
      line: line,
      specificity: specSum(selector),
      selectors: selector
    });
    selectorIndex++;
  });
  return selectorIndex;
};

var generateCssData = function(origCss) {

  var testCSS = unminify(origCss);
  var astObj = cssParse(testCSS, {silent: true});

  var results = [],
      selectorIndex = 0;

  astObj.stylesheet.rules.map(function(rule){
    if (rule.type === 'media') {
      rule.rules.forEach(function(rule){
        selectorIndex = addRuleToResults(rule, selectorIndex, results);
      });
    } else if (rule.type === 'rule') {
      selectorIndex = addRuleToResults(rule, selectorIndex, results);
    }

  });

  return results;

};

var fs = require('fs');
var testStylesheet = fs.readFileSync('./examples/test.min.css', 'utf-8');

var result = generateCssData(testStylesheet);
var specificities = result.map(function(r) { return r.specificity; });

console.log('specificities80\n', sparkly(specificities.slice(0, 80), { style: 'fire' }));
//console.log('specificities\n', sparkly(specificities, { style: 'fire' }));


var blessed = require('blessed')
, contrib = require('blessed-contrib')
, screen = blessed.screen({
    smartCSR: true,
})
, line = contrib.line(
   {
    left: 0,
    top: 0,
    //width: 80,
   height: 8,
   showLegend: false,
   //, left 0
   //, top: 0
   //, xPadding: 0
   //, label: 'Title'
   numYLabels: 3,
   //, wholeNumbersOnly: true
   style: {
    baseline: 'black',
   },
    data: [
        {
            title: '',
            x: specificities.map(function (s, i) { return i; }),
            y: specificities,
            style: {
                line: 'red'
            }
        }
    ],
});

screen.append(line) //must append before setting data
//line.setData(data)

// var spark = contrib.sparkline(
//      { label: 'Throughput (bits/sec)'
//      , tags: true
//      , style: { fg: 'blue' }})

// screen.append(spark);
// spark.setData(
// [ 'Sparkline1'],
// [ specificities ])

screen.render();
var screenshot = line.screenshot(null, null, null, null);
screen.destroy();
process.stdout.write(screenshot.split('\n').slice(0, 3).join('\n'));
