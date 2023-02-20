module.exports = {
    productionSourceMap: false,
     publicPath: './', 
     outputDir: 'dist', 
     assetsDir: 'assets', 
     css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                },
                // 在解析less文件之前引入a.less内的变量，作用：提前声明
                prependData: `@import "a.less";`,
                // 在解析less文件之后引入b.less内的变量，作用：进行覆盖
                appendData: `@import "b.less";`
            } 
        } 
    } 
}; 
