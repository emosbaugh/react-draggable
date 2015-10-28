module.exports = {
	entry: './index.js',
	output: {
    filename: './dist/react-draggable.js',
    sourceMapFilename: './dist/react-draggable.map',
    devtoolModuleFilenameTemplate: '../[resource-path]',
    library: 'ReactDraggable',
    libraryTarget: 'umd'
	},
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
	module: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	}
};
