//这个配置文件是js'文件,通过node.js中的模块操作,向外暴露一个配置文件

const path = require('path')//node 的语法
//第二步
const webpack = require('webpack')

//处理.vue的文件 vue-loader 需要加载一个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//使用下面这个插件自动生成js标签
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    //入口,表示要打包的源文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'//指定输出的文件名称
    },
    //第一步:
    // 类似package.json 中的配置   "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
    devServer: {
        open: true,
        port: 3001,
        contentBase: 'src',
        hot: true,
        host: '0.0.0.0'
    },
    //第三步
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    //这个节点处理所有的第三方模块加载器,如处理css
    module: {
        rules: [
            //test js里的正则 , 然后匹配到了使用后面的两个加载器来处理这种文件
            //调用use里的加载器的时候是从有往左开始调用的,如果顺序反了,那么打包会出错
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理less文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理scss文件
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //处理图片的loader, ? 后面传参数,limit=xxx , 图片小于给定的值时,打包后会变成base64 , 大于或者等于的话,打包后就是一个url地址
            //webpack 会自动hash文件名,如果不希望更改,添加name属性,ext是原来后缀名
            //不建议保留原文件名,因为如果使用原文件名,webpack在打包的时候会在内存生成相应的文件,如果是不同目录的 相同文件名的两个文件会被最后一个给覆盖,变成一个文件
            //如果要相同的名字的话 , 可以加一个hash属性,[hash:8] 8位的hash值,最大32位
            { test: /\.(jpg|png|jpeg|bmp|gif)$/, use: 'url-loader?limit=7320&name=[hash:8]-[name].[ext]' },

            //处理字体图标
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },

            //处理.vue文件的loader
            { test: /\.vue$/, use: 'vue-loader' },

            //处理es6 高级语法,无法使用,编译报错
            // { test: /\.js$/, use: 'babel-loader', exclude: /node-modules/ }
        ]
    },
    //修改默认导包的路径
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    mode: 'development' // 设置mode
}

// bf84cb66453f8b41bb1df4933097def2