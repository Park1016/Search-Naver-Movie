// import { createProxyMiddleware } from "http-proxy-middleware";
const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//   // export default function (app) {
//   app.use(
//     "/v1/search",
//     createProxyMiddleware({
//       target: "https://openapi.naver.com",
//       changeOrigin: true,
//       // pathRewrite: {
//       //   "^/api": "",
//       // },
//     })
//   );
// };

module.exports = function (app) {
  app.use(
    proxy("/v1/search", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
};
