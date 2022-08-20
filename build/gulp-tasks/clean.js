import del from 'del';

import config from '../build-config.js';

export default function clean() {
    return del([config.paths.base.dest]);
}
