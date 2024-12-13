import { plugin } from 'typescript-eslint';
const rule = plugin.rules['no-restricted-imports'];

console.log(
    rule.meta.schema.anyOf[1].items[0].properties.patterns.anyOf[1].items
);