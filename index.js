import { generateCssData } from './lib/calculations';
import { renderChart } from './lib/chart';

export default (rawCSS) => {
  const isBig = false;

  const result = generateCssData(rawCSS);
  const specificities = result.map(r => r.specificity);

  return renderChart(isBig, specificities);
};
