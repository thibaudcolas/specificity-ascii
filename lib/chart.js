import blessed from 'blessed';
import contrib from 'blessed-contrib';

export const renderChart = (data, options) => {
  const chartHeight = options.isBig ? 20 : 3;

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
    label: options.label || null,
    numYLabels: options.isBig ? 7 : chartHeight,
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

  return screenshot.split('\n').slice(0, chartHeight + (options.isBig ? 1 : 0)).join('\n');
};
