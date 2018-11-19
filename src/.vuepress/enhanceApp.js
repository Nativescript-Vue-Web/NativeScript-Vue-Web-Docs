import * as NVW from "nativescript-vue-web";
import("./public/style.scss");
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    Object.keys(NVW).forEach(function(key) {
      if (NVW[key].name) {
        // Component registration
        Vue.component(key, NVW[key]);
      } else if (NVW[key].install) {
        // Plugin registration
        Vue.use(NVW[key]);
      }
    });
  }

  router.push("/docs/");
};
