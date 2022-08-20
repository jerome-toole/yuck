import { existsSync, mkdirSync } from 'fs';

import config from '../build-config.js';

export default function create(cb) {
    // Check if the directory does not exist
    if (!existsSync(config.paths.base.dest)) {
        mkdirSync(config.paths.base.dest);
    }

    cb();
}
