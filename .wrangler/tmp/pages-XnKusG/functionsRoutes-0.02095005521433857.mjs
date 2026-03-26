import { onRequestPost as __api_click_js_onRequestPost } from "/Users/sambencivengo/dev/dad-protest-idea/functions/api/click.js"
import { onRequestGet as __api_count_js_onRequestGet } from "/Users/sambencivengo/dev/dad-protest-idea/functions/api/count.js"

export const routes = [
    {
      routePath: "/api/click",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_click_js_onRequestPost],
    },
  {
      routePath: "/api/count",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_count_js_onRequestGet],
    },
  ]