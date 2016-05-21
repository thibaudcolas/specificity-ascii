import blessed from 'blessed';
import contrib from 'blessed-contrib';

export const renderChart = (height, isBig, data) => {
  const screen = blessed.screen({
    smartCSR: true,
  });

  const line = contrib.line({
    left: 0,
    top: 0,
    // width: 80,
    height: height + 5,
    showLegend: false,
    xPadding: 0,
    // TODO Assess whether this is a good idea, as the label will truncate
    // the parts of the chart that go under it.
    label: 'Specificity in main.css',
    numYLabels: isBig ? 7 : height,
    wholeNumbersOnly: true,
    style: {
      baseline: 'green',
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

  const screenshot = line.screenshot(null, null, null, null);

  screen.destroy();

  return screenshot.split('\n').slice(0, height + (isBig ? 1 : 0)).join('\n');
};
