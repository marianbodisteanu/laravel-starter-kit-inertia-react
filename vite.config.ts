import babel from '@rolldown/plugin-babel';
import {wayfinder} from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react, {reactCompilerPreset} from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import {bunny} from 'laravel-vite-plugin/fonts';
import {RECOMMENDED_RULES} from 'oxlint-plugin-react-doctor';
import {defineConfig} from 'vite-plus';

export default defineConfig({
    lint: {
        options: {
            typeAware: true,
            typeCheck: true,
        },
        plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import'],
        jsPlugins: [
            {name: 'react-doctor', specifier: 'oxlint-plugin-react-doctor'},
            {name: 'local', specifier: './.oxlint/no-comments.mjs'},
        ],
        rules: {
            ...RECOMMENDED_RULES,
            'import/no-cycle': 'error',
            'import/no-default-export': 'error',
            'local/no-comments': 'error',
        },
        overrides: [
            {
                files: ['resources/js/pages/**', '.ncurc.mjs', '.oxlint/**'],
                rules: {
                    'import/no-default-export': 'off',
                },
            },
        ],
        ignorePatterns: [
            'vite.config.ts',
            'resources/js/components/ui/*',
            'resources/js/wayfinder/*',
        ],
    },
    fmt: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        semi: true,
        singleQuote: true,
        overrides: [
            {
                files: ['**/*.yml'],
                options: {
                    tabWidth: 2,
                },
            },
        ],
        sortTailwindcss: {
            functions: ['clsx', 'cn'],
            stylesheet: 'resources/css/app.css',
        },
        sortImports: {
            groups: [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index',
            ],
            newlinesBetween: false,
        },
        ignorePatterns: [
            'resources/js/components/ui/*',
            'resources/views/mail/*',
            'resources/js/wayfinder/*',
        ],
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
        tailwindcss(),
        wayfinder({
            command: 'composer wayfinder:generate',
        }),
    ],
});
