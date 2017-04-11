var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js'
    , output: {
        path: __dirname + '/dist'
        , filename: 'js/[name].bundle.js'
    }
    , module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/, // 排除文件
                include: [
                    path.resolve(__dirname, 'src') // var path = require('path'); 获取到绝对的路径
                ], //打包那些文件
                query: {
                    presets: ["es2015"]
                }
            }
            , {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                        ,options: {
                            autoprefixer: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                ]
            }
            , {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    , {
                        loader: "css-loader"
                    }
                    , {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                    , {
                        loader: "less-loader"
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    , {
                        loader: "css-loader"
                    }
                    , {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    }
                    , {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.tpl/,
                use: [
                    {
                        loader: "ejs-loader"
                    }
                ]
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        query: {
                            name:'assets/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            }
        ]
        // loaders: [
        //
        //     , {
        //         test: /\.css$/
        //         , loader: 'style-loader!css-loader!postcss-loader' // import './css/common.css';进来的css内容会在页面中通过style标签插入进来
        //     }
        // ]
    }

    , plugins: [
        new htmlWebpackPlugin({
            'title': 'layer',
            'filename': 'index.html' // 指定文件名
            , 'template': 'index.html' // 指定模板文件
            , 'inject': 'body' // script标签的存放位置
        })
    ]
}