import fs from 'fs';
import dirTree from 'directory-tree';

import config from '../build-config.js';

function stripChunk(name) {
    if (name.includes('.css') || name.includes('.js') || name.includes('.mjs')) {
        const parts = name.split('.');

        if (parts.length > 2) {
            parts.splice(parts.length - 2, 1);
            return parts.join('.');
        }
    }

    return name;
}

function crawlTree(node, path = '') {
    if (node.type === 'directory') {
        const tree = {};

        node.children.forEach((childNode) => {
            const key = stripChunk(childNode.name);

            tree[key] = crawlTree(childNode, `${path}/${node.name}`);
        });

        return tree;
    }

    return `${path}/${node.name}`.replace('/assets/', '');
}

export default function manifest(cb) {
    const nodes = dirTree(config.paths.base.dest, {
        attributes: ['size', 'type', 'extension'],
    });
    const mytree = crawlTree(nodes);

    fs.writeFile(
        config.paths.base.dest + config.paths.manifest, // File to write to
        JSON.stringify(mytree), // Contents of file
        {}, // Options for the file
        (err) => {
            // Callback
            if (err) {
                throw err;
            }
        }
    );

    cb();
}
