import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import specificityASCII from '../index';

describe('specificity-ascii', () => {
  it('is a function', () => {
    expect(specificityASCII).to.be.a('function');
  });

  it('output', () => {
    const rawCSS = fs.readFileSync('./examples/test.min.css', 'utf-8');
    const output = specificityASCII(rawCSS);

    console.log('↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓');
    expect(output).to.be.a('string');
    process.stdout.write(output);
    console.log('↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑');
  });
});
