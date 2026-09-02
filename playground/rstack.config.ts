// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginImageCompress } from '../dist/index.js';

define.app({
  plugins: [pluginImageCompress()],
});
