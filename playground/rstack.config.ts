// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginImageCompress } from '../src/index.ts';

define.app({
  plugins: [pluginImageCompress()],
});
