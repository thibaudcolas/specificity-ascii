import { generateCssData } from './lib/calculations';
import { renderChart } from './lib/chart';

const defaultOptions = {
  label: '',
  isBig: false,
};

export default (rawCSS, options = defaultOptions) => {
  const result = generateCssData(rawCSS);
  const specificities = result.map(r => r.specificity);

  return renderChart(specificities, options);
};
