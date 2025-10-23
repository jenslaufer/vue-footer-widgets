import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        tailwindcss(),
        vue()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'FooterWidgets',
            fileName: (format) => `vue-footer-widgets.${format}.js`,
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
            },
        },
    },
})