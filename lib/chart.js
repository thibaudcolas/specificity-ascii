import blessed from 'blessed';
import contrib from 'blessed-contrib';

export const renderChart = (isBig, data) => {
  const chartHeight = isBig ? 20 : 3;

  const screen = blessed.screen({
    smartCSR: true,
  });

  const line = contrib.line({
    left: 0,
    top: 0,
    // width: 80,
    height: chartHeight + 5,
    showLegend: false,
    xPadding: 0,
    // TODO Assess whether this is a good idea, as the label will truncate
    // the parts of the chart that go under it.
    label: 'Specificity in main.css',
    numYLabels: isBig ? 7 : chartHeight,
    wholeNumbersOnly: true,
    style: {
      baseline: 'black',
      line: 'red',
    },
    data: [
      {
        x: data.map((s, i) => i),
        y: data,
      },
    ],
  });

  screen.append(line);
  screen.render();

  const screenshot = line.screenshot();

  screen.destroy();

  return screenshot.split('\n').slice(0, chartHeight + (isBig ? 1 : 0)).join('\n');
};
