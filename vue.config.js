module.exports = {
  productionSourceMap: false,
   publicPath: './', 
   outputDir: 'dist', 
   assetsDir: 'assets', 
   lintOnSave: false,
   css: {
      loaderOptions: {
          less: {
              lessOptions: {
                  javascriptEnabled: true
              },
          } 
      } 
  } 
}; 
