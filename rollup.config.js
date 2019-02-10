import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import requireContext from "rollup-plugin-require-context"
import { join } from "path"
import { uglify } from "rollup-plugin-uglify"
import babel from "rollup-plugin-babel"
import deepmerge from "deepmerge"

const baseConfig = {
	input: join(__dirname, "source/index.js"),
	output: {
		name: "Sandscape"
	},
	name: "Sandscape",
	plugins: [
		resolve({ jsnext: true }),
		commonjs({
			include: "node_modules/**"
		}),
		babel({
			exclude: "node_modules/**",
			presets: ["@babel/preset-env"]
		}),
		uglify({
			sourcemap: false
		})
	]
}

const branchConfigs = [
	{
		output: {
			format: "iife",
			file: join(__dirname, "dist", "Sandscape-browser.min.js")
		}
	},
	{
		output: {
			format: "cjs",
			file: join(__dirname, "dist", "Sandscape-commonjs.min.js")
		}
	},
	{
		output: {
			format: "umd",
			file: join(__dirname, "dist", "Sandscape-universal.min.js")
		}
	}
]

const configs = branchConfigs.map(config => deepmerge(baseConfig, config))

export default configs
