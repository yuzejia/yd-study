const {
    build
} = require('esbuild');
console.log(1111);
const buildParams = {
        color: true,
        entryPoints: ['src/index.ts'],
        loader: {
            '.ts': 'tsx'
        },
        outfile: 'dist/worker.js',
        minify: true,
        format: 'cjs',
        bundle: true,
        sourcemap: true,
        logLevel: 'error',
        incremental: true
    }
    (async () => {
        const builder = await build(buildParams)
        process.exit(0)
    })()