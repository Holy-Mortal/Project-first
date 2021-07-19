const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件名称，目录中不显示
});
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // 编译模式
    mode: "development", // 开发模式 // production 上线模式
    entry: path.join(__dirname, './src/index.js'), // 打包入口路径
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=4209429' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
}