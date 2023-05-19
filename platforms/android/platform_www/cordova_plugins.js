cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-globalization.GlobalizationError",
      "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "id": "cordova-plugin-globalization.globalization",
      "file": "plugins/cordova-plugin-globalization/www/globalization.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "id": "cordova-keyri.CordovaKeyri",
      "file": "plugins/cordova-keyri/www/CordovaKeyri.js",
      "pluginId": "cordova-keyri",
      "clobbers": [
        "cordova.plugins.CordovaKeyri"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-add-swift-support": "2.0.2",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-keyri": "0.0.1"
  };
});