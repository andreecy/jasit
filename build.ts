import { build } from 'esbuild'

const result = await build({
    entryPoints: ['index.tsx'],
    outdir: 'out',
    bundle: true,
    // minify: true,
    format: 'esm',
    target: ["chrome99", "firefox99", "safari15"],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
})