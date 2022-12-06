/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e3914789462b25393653249b96d89916"
  },
  {
    "url": "assets/css/0.styles.ddaffaa5.css",
    "revision": "a7200b2938f17f10f9c2a9695ca05f79"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.37bcc12e.js",
    "revision": "93ab2de79c8b35d3f7b09110500a883d"
  },
  {
    "url": "assets/js/10.f2c42f33.js",
    "revision": "247694f7b262583eabb16c4a4e185533"
  },
  {
    "url": "assets/js/11.e27bf12a.js",
    "revision": "f9bbf71632b9e54f351cd23d60d5d3e1"
  },
  {
    "url": "assets/js/12.fc467297.js",
    "revision": "41e183f6f510391a8c9f7e3ef437b646"
  },
  {
    "url": "assets/js/13.9a09bd36.js",
    "revision": "1d3514493ff88e54b94cffc7eb1410e1"
  },
  {
    "url": "assets/js/14.49c4853c.js",
    "revision": "e8188727dd1ce98fc271f9b6653402b7"
  },
  {
    "url": "assets/js/15.7b7624ed.js",
    "revision": "25645d9dc742690a3f37e789ae002e62"
  },
  {
    "url": "assets/js/16.a89fef37.js",
    "revision": "9297df4b7b7d9a0106d1c291ec16dd57"
  },
  {
    "url": "assets/js/17.3670a28d.js",
    "revision": "35838badc4dd5cf83f23cc0e83b726c2"
  },
  {
    "url": "assets/js/18.d3f5828b.js",
    "revision": "a2a104e4ac2cce9f352341e80c8006c8"
  },
  {
    "url": "assets/js/19.d1dfe9a7.js",
    "revision": "e186f263937112e814cccef1196664f5"
  },
  {
    "url": "assets/js/20.fec72947.js",
    "revision": "4d7e3f318e97d50aafcfc14e4262b937"
  },
  {
    "url": "assets/js/21.57ed0869.js",
    "revision": "f6fe526932ed0c617828a745360278f6"
  },
  {
    "url": "assets/js/22.8ab3a6e7.js",
    "revision": "89070bab62d2d5bd47deb007bdbdbc7a"
  },
  {
    "url": "assets/js/23.f9d80470.js",
    "revision": "12aa62e53a7fd067e60c0985f44a821c"
  },
  {
    "url": "assets/js/24.172b3555.js",
    "revision": "c2f4ba0179401af0ab42954144714daf"
  },
  {
    "url": "assets/js/25.bc7195ba.js",
    "revision": "bf678a2a23c0bf770b5426233db1433b"
  },
  {
    "url": "assets/js/26.fd60aecb.js",
    "revision": "135f8b49cd55117b829d896ad4141113"
  },
  {
    "url": "assets/js/27.c174cd28.js",
    "revision": "747f5bc59ad6c7ed96243fa3f842ff40"
  },
  {
    "url": "assets/js/28.d3ff42be.js",
    "revision": "2df9e2a523f3b72f0545adbd4346ed2f"
  },
  {
    "url": "assets/js/29.891b70e4.js",
    "revision": "1ab87403b4633c2a2336fd2281a42784"
  },
  {
    "url": "assets/js/30.3663b2d7.js",
    "revision": "e03d6b91a49302d1b4e55f31e03437d7"
  },
  {
    "url": "assets/js/31.35ac4480.js",
    "revision": "01ee078517b2a8ac4c216c0934c6c995"
  },
  {
    "url": "assets/js/32.c6fe4d19.js",
    "revision": "478f574b37679b69323fa5056be846b8"
  },
  {
    "url": "assets/js/33.38ba9dbe.js",
    "revision": "21785747f23468fa46c969bb1401c806"
  },
  {
    "url": "assets/js/34.eb6619ac.js",
    "revision": "bb3882bbcb37a72a46280118f6da90e9"
  },
  {
    "url": "assets/js/35.e3360753.js",
    "revision": "0175ce6210c1eee7742efe508094bbe0"
  },
  {
    "url": "assets/js/36.37429e54.js",
    "revision": "37bc2a1124a35d3def5f1824f4b9e978"
  },
  {
    "url": "assets/js/37.3eac09aa.js",
    "revision": "09dbaeab0bb9f690b77d27e5b45cdb14"
  },
  {
    "url": "assets/js/4.b06e2b44.js",
    "revision": "e72eaab1b582ef6a9caba0a0bc036d21"
  },
  {
    "url": "assets/js/5.767608c3.js",
    "revision": "40b784e44fdfe8c6566fe622be09d7a4"
  },
  {
    "url": "assets/js/6.06c749bb.js",
    "revision": "af72660ca87d6fb8ad03f84ca7387b4f"
  },
  {
    "url": "assets/js/7.f914f228.js",
    "revision": "95264016575ea2574b70263cae686d19"
  },
  {
    "url": "assets/js/8.f8f53c36.js",
    "revision": "250d42be6af85515fb25709eb3b08a16"
  },
  {
    "url": "assets/js/9.9949d7d8.js",
    "revision": "e66539ee83684d05e0d9a85b4ba525ce"
  },
  {
    "url": "assets/js/app.a0316f84.js",
    "revision": "90d5acd263e1cb8342de9b9712a21df4"
  },
  {
    "url": "assets/js/vendors~notification.ed6e1b96.js",
    "revision": "d2e1d8e8a490ca951c1f013b1b9d0cd3"
  },
  {
    "url": "categories/DevOps/index.html",
    "revision": "622416ab911b08cdc3730783b6c7ce96"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "c2e828b1de12fabad941c628d51f39ea"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "194c3694e417ea44e93f9ee775049069"
  },
  {
    "url": "categories/index.html",
    "revision": "8a2610cec21c837c373cd63920f1df79"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "78370456e0a9a4cdec311b6be41c866c"
  },
  {
    "url": "categories/Kubernetes/index.html",
    "revision": "dca6f504f158a12ed97dad8b7cb53ba4"
  },
  {
    "url": "categories/Life/index.html",
    "revision": "45bcd85483246b4e44d276af0a85bc12"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "149ef283bb7f74d447906281544375a3"
  },
  {
    "url": "categories/Office/index.html",
    "revision": "54073d08c78542113b90cd88beea84b5"
  },
  {
    "url": "categories/PHP/index.html",
    "revision": "8378c8b9167f2fa03326b869af9cd383"
  },
  {
    "url": "categories/Tech/index.html",
    "revision": "f6cd8ec5106be72dcf96cf07537325ba"
  },
  {
    "url": "categories/TradeTech/index.html",
    "revision": "a4ead10a37b7dc870e598cdd71ed594f"
  },
  {
    "url": "DevOps/publish_vuepress_github_pages_from_azure.html",
    "revision": "e7f38f65e4e784b136764435769d6afd"
  },
  {
    "url": "DevOps/use_github_workflow_deploy_vuepress.html",
    "revision": "997df1468278986eabe70e30c7f75b69"
  },
  {
    "url": "Docker/Docker-command.html",
    "revision": "488137de24ddec91293e2cdae541a4cf"
  },
  {
    "url": "Git/git-concise-operating-tutorial.html",
    "revision": "92bdf6c822eb65b2ca96a8803652ed8c"
  },
  {
    "url": "Git/git-delete-local-and-remote-tags.html",
    "revision": "1a3ad29b2de6e5690328e822e626b885"
  },
  {
    "url": "img/hero.jpg",
    "revision": "d3301182b6927ae0468c45257e409da2"
  },
  {
    "url": "index.html",
    "revision": "bfa99604447d1378208020a807807767"
  },
  {
    "url": "Java/springboot-profiles-multiple-env-IDEA-setting.html",
    "revision": "b3a34386e63ffe9d1c70091c4b68e5ca"
  },
  {
    "url": "Kubernetes/k8s-series-Macos-setup-kubernetes-and-docker.html",
    "revision": "64d73b960838f89865dfbfcc36443e53"
  },
  {
    "url": "Life/qipashuo-fahongbao.html",
    "revision": "96b4acd3ef86779f39350960c602b78b"
  },
  {
    "url": "Nginx/nginx-access-log-develop-settings.html",
    "revision": "ea8dec22c05f8ce016c1ea7683c96764"
  },
  {
    "url": "Nginx/nginx-cdn-get-user-real-ip.html",
    "revision": "4a70110b874b61464e827fa9c934aa88"
  },
  {
    "url": "Office/How-to-Defeat-a-BOSS.html",
    "revision": "fcb6d4ecf575adfccc6dea5c9fe795fa"
  },
  {
    "url": "Office/Technical-sharing-notes.html",
    "revision": "11fd198ff82c48e74612813e18d346cb"
  },
  {
    "url": "PHP/php-aes-encrypt-for-yii.html",
    "revision": "093fb1ed19cf1e5ee90544b75477dbac"
  },
  {
    "url": "PHP/php-error-log.html",
    "revision": "0767a5c572bd8142a50f1566ebcad649"
  },
  {
    "url": "PHP/php-excel-create-column-name-by-php.html",
    "revision": "429d6c90f38218038e9ca5c59702ed0f"
  },
  {
    "url": "PHP/php-mongodb-long-int-mongoint64.html",
    "revision": "984aede7f6ea19ecd753e9ecc4aa7c52"
  },
  {
    "url": "PHP/yii-deletebyattributs-use-and-dao-delete.html",
    "revision": "d533bf42d189d6d96a48ed919140550e"
  },
  {
    "url": "tag/4g VoLTE/index.html",
    "revision": "9f7ab4174fb34c408b441a097ce00f60"
  },
  {
    "url": "tag/access_log/index.html",
    "revision": "ef55e4ead740cc1782987c2ae8325e87"
  },
  {
    "url": "tag/AES/index.html",
    "revision": "9cae89ae32f9c62e9aa92ffbc48d887d"
  },
  {
    "url": "tag/Azure Pipelines/index.html",
    "revision": "581b3054663b3b89995115b5a63fb22b"
  },
  {
    "url": "tag/bcrypt/index.html",
    "revision": "f62fee30966f1db04c8364a4141f72c0"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "5fd74a101af34c891ac587ed0170eed6"
  },
  {
    "url": "tag/BOSS/index.html",
    "revision": "7ac81499010862150da77f0161423237"
  },
  {
    "url": "tag/chrome/index.html",
    "revision": "c43315b9ad4180df422e4416e2edff7d"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "072f9907de6a4c0abb38de782590600d"
  },
  {
    "url": "tag/excel/index.html",
    "revision": "d357d1adf3d99a9f91a3b031d7ca6f0f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "29e20ec3e1b86bd828c88d58beea1b09"
  },
  {
    "url": "tag/github workflow/index.html",
    "revision": "fd841adbf9842484d46e932f0342dc6a"
  },
  {
    "url": "tag/index.html",
    "revision": "490ccb4b4b14ae3e78bf4351892228e5"
  },
  {
    "url": "tag/iPhone/index.html",
    "revision": "1389e7856661cd480c2a5ab779f49fe0"
  },
  {
    "url": "tag/java/index.html",
    "revision": "46e111a136a5d95d64c90ebc837ca7db"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3ce6f075438b008ce4f744d8733c1454"
  },
  {
    "url": "tag/kubernetes/index.html",
    "revision": "62ee6177222bffaf55b9b74be5972f28"
  },
  {
    "url": "tag/Mongo/index.html",
    "revision": "449c22c9700876f61d62d2bef4a58ac6"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "d6ef90b2537cef9009cf0f89033b783e"
  },
  {
    "url": "tag/password/index.html",
    "revision": "2a88d468347bcfd0362c975a24477cf6"
  },
  {
    "url": "tag/PBKDF2/index.html",
    "revision": "c85f972d2aa33cc1c9b3e24036e53662"
  },
  {
    "url": "tag/php/index.html",
    "revision": "c44ed207f71b193762fc95c3b02949b2"
  },
  {
    "url": "tag/phpExcel/index.html",
    "revision": "337edd29af4889ccf6df84423d0d1a88"
  },
  {
    "url": "tag/PlantUML/index.html",
    "revision": "47fef92e9f2b46743090952b77266a54"
  },
  {
    "url": "tag/Remote_addr/index.html",
    "revision": "e80b6be38715eafe6a9da1fcbd71eaee"
  },
  {
    "url": "tag/springboot/index.html",
    "revision": "c40d3d4170ee1307c8a7866e36447fd8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "59a7b360999d3fc812b3a91a8130c3e5"
  },
  {
    "url": "tag/WebRTC/index.html",
    "revision": "7f5e4de503525dd2073f8c46c037833f"
  },
  {
    "url": "tag/X-Forwarded-For/index.html",
    "revision": "7773d653fa4cb334c4368414e1fafe0e"
  },
  {
    "url": "tag/X-Real-IP/index.html",
    "revision": "20f6e9e3f7b71046d16ef29913deea91"
  },
  {
    "url": "tag/XFF/index.html",
    "revision": "cf9e160f7ca74f77f10490b71f501cb5"
  },
  {
    "url": "tag/Yii/index.html",
    "revision": "e968964dd849c63ab31978eee69a1867"
  },
  {
    "url": "tag/zsh/index.html",
    "revision": "37b8316c0436dd876764cfbe6a5de3b1"
  },
  {
    "url": "tag/乐刷/index.html",
    "revision": "7e9f1d70a93055a9ecc0feed7edb63d5"
  },
  {
    "url": "tag/奇葩说/index.html",
    "revision": "3ca185126682f2d9d1ce9178689613a0"
  },
  {
    "url": "tag/微信/index.html",
    "revision": "00cde33612d4757d75bf46ecdfd483cc"
  },
  {
    "url": "tag/技术分享/index.html",
    "revision": "395ee9e6bd8511a543599b7abb0f9dec"
  },
  {
    "url": "tag/支付宝/index.html",
    "revision": "0b1276467c035c2e2a5044ebbc016948"
  },
  {
    "url": "tag/职场/index.html",
    "revision": "59a3a717e7b66e71c634d55b1c53b89c"
  },
  {
    "url": "tag/联通/index.html",
    "revision": "f71be863922f8bb8454ad97fe6272378"
  },
  {
    "url": "Tech/china-unicom-volte-iPhone.html",
    "revision": "b0316c302de5c5d1633e2f013fa09540"
  },
  {
    "url": "Tech/disabled-chrome-firefox-webrtc.html",
    "revision": "2248d0b94cf0c07e8626fdf5564eac35"
  },
  {
    "url": "Tech/save-user-password-use-bcrypt-or-pbkdf2.html",
    "revision": "5bb17c17d5dfaec1d0d318a5dc5ba3db"
  },
  {
    "url": "Tech/use-vuepress-push-blog.html",
    "revision": "fb28be00bcd5b964ad57fe85da834eb9"
  },
  {
    "url": "Tech/vuepress-add-plantUML-plugin.html",
    "revision": "91c367eb9f23abf114938339d42a09f4"
  },
  {
    "url": "Tech/zsh-hidden-username-and-hostname.html",
    "revision": "955683f3e5eae2971a15a71dfec42610"
  },
  {
    "url": "timeline/index.html",
    "revision": "e269710db8d2e7926aa41bc91a4b2581"
  },
  {
    "url": "TradeTech/jsapi-authcode-pay-notify-rule.html",
    "revision": "da5f3e2f3f8d6569a5ddcfd0efb16271"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
