import { defineConfig } from 'vite';
import path from 'path';
import { NodePackageImporter } from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: true,
		cssMinify: true,
		rollupOptions: {
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
				includePaths: [
					path.join(
						__dirname,
						'node_modules/@nciocpl/ncids-css/packages',
					),
					path.join(
						__dirname,
						'node_modules/@nciocpl/ncids-css/uswds-packages',
					),
				],
                api: "modern",
                importers: [new NodePackageImporter()],
			},
		},
	},
});