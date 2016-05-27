import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import specificityASCII from '../index';

const showOutput = (output) => {
  process.stdout.write(output);
  process.stdout.write('\n');
};

const rawCSS = fs.readFileSync('./examples/test.min.css', 'utf-8');

describe('specificity-ascii', () => {
  it('is a function', () => {
    expect(specificityASCII).to.be.a('function');
  });

  it('output is a string', () => {
    expect(specificityASCII(rawCSS)).to.be.a('string');
  });

  it('default output ↑', () => {
    const output = specificityASCII(rawCSS);
    showOutput(output);
  });

  it('big output ↑', () => {
    const output = specificityASCII(rawCSS, { isBig: true });
    showOutput(output);
  });

  it('label of the chart ↑', () => {
    const output = specificityASCII(rawCSS, { label: 'Specificity of test.min.css' });
    showOutput(output);
  });
});
