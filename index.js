import fs from 'fs';
import { generateCssData } from './lib/calculations';
import { renderChart } from './lib/chart';

const isBig = false;
const CHART_HEIGHT = isBig ? 20 : 3;


const testStylesheet = fs.readFileSync('./examples/test.min.css', 'utf-8');

const result = generateCssData(testStylesheet);
const specificities = result.map(function(r) { return r.specificity; });

console.log(renderChart(CHART_HEIGHT, isBig, specificities));
