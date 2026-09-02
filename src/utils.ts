import assert from 'node:assert';
import codecs from './codecs.ts';
import type { FinalOptions, Options } from './types.ts';

export const withDefaultOptions = (opt: Options): FinalOptions => {
  const options = typeof opt === 'string' ? { use: opt } : opt;
  const { defaultOptions } = codecs[options.use];
  const ret = { ...defaultOptions, ...options };
  assert('test' in ret);
  return ret;
};
