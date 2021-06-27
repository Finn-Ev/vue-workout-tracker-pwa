module.exports = {
  transpileDependencies: ["vuetify"],
  // ...other vue-cli plugin options...
  pwa: {
    name: "Workout-App",
    themeColor: "#ffffff",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the manifest options
    manifestOptions: {
      display: "landscape",
      background_color: "#ffffff"
    }
  }
};
