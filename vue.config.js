/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-16 15:21:04
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-06-19 22:35:24
 */
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	chainWebpack: (config) => {
			config
				.plugin('html')
				.tap(args => {
					args[0].title = '首页 . 博客 ｜ 张朕'
					return args
				}),
			config.resolve.alias
				.set('@$', resolve('src'))
				.set('@utils', resolve('src/utils'))
				.set('@assets', resolve('src/assets'))
				.set('@comp', resolve('src/components'))
				.set('@views', resolve('src/views'))
	},
	publicPath:'/deno.github.io'
	// /pony.github.io/
}