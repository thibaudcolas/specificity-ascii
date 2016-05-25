import { generateCssData } from './lib/calculations';
import { renderChart } from './lib/chart';

export default (rawCSS) => {
  const isBig = false;
  const CHART_HEIGHT = isBig ? 20 : 3;

  const result = generateCssData(rawCSS);
  const specificities = result.map(r => r.specificity);

  return renderChart(CHART_HEIGHT, isBig, specificities);
};
