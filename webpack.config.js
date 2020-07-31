const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: [
					"style-loader", // inject css into the DOM
					"css-loader", // to import css using '@import' and interprets to import/require
					"sass-loader", //to compile scss to css
				], // use is for multiple loaders
			},
		],
	},

	devtool: "cheap-module-eval-source-map",

	devServer: {
		contentBase: path.join(__dirname, "public"),
	},
};
