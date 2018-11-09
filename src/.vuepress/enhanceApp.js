import { Label, Nvw } from "nativescript-vue-web";
import("./public/style.scss");
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router // the router instance for the app
}) => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    Vue.use(Nvw);
  }

  Vue.component("Label", Label);

  router.push("/docs/");
};
