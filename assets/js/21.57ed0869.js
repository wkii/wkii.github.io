(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{434:function(e,r,a){"use strict";a.r(r);var _=a(3),t=Object(_.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_1-背景知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景知识"}},[e._v("#")]),e._v(" 1.背景知识")]),e._v(" "),r("h3",{attrs:{id:"_1-1-前提知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前提知识点"}},[e._v("#")]),e._v(" 1.1. 前提知识点：")]),e._v(" "),r("p",[e._v("关键词："),r("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_realip_module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngx_http_realip_module"),r("OutboundLink")],1),e._v("，"),r("code",[e._v("HAProxy")]),e._v("，"),r("code",[e._v("反向代理")]),e._v("，"),r("code",[e._v("出口IP")]),e._v(" 还有nginx中的几个变量：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("remote_addr 代表客户端的IP，但它的值不是由客户端提供的，而是服务端根据客户端的ip指定的，当你的浏览器访问某个网站时，假设中间没有任何代理，那么网站的web服务器（Nginx，Apache等）就会把remote_addr设为你的机器IP，如果你用了某个代理，那么你的浏览器会先访问这个代理，然后再由这个代理转发到网站，这样web服务器就会把remote_addr设为这台代理机器的IP,除非代理将你的IP附在请求header中一起转交给web服务器。")])]),e._v(" "),r("li",[r("p",[e._v("X-Forwarded-For（简称XFF） X-Forwarded-For 是一个 HTTP 扩展头部。HTTP/1.1（RFC 2616）协议并没有对它的定义，它最开始是由 Squid 这个缓存代理软件引入，用来表示 HTTP 请求端真实 IP。如今它已经成为事实上的标准，被各大 HTTP 代理、负载均衡等转发服务广泛使用，并被写入 "),r("a",{attrs:{href:"http://tools.ietf.org/html/rfc7239",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7239"),r("OutboundLink")],1),e._v("（Forwarded HTTP Extension）标准之中。 XFF的格式为：")])])]),e._v(" "),r("blockquote",[r("p",[e._v("X-Forwarded-For: client, proxy1, proxy2")])]),e._v(" "),r("p",[e._v("XFF 的内容由「英文逗号 + 空格」隔开的多个部分组成，最开始的是离服务端最远的设备 IP，然后是每一级代理设备的 IP。（"),r("strong",[e._v("注意：如果未经严格处理，可以被伪造")]),e._v("） 如果一个 HTTP 请求到达服务器之前，经过了三个代理 Proxy1、Proxy2、Proxy3，IP 分别为 IP1、IP2、IP3，用户真实 IP 为 IP0，那么按照 XFF 标准，服务端最终会收到以下信息：")]),e._v(" "),r("blockquote",[r("p",[e._v("X-Forwarded-For: IP0, IP1, IP2")])]),e._v(" "),r("p",[e._v("Proxy3 直连服务器，它会给 XFF 追加 IP2，表示它是在帮 Proxy2 转发请求。列表中并没有 IP3，IP3 可以在服务端通过 Remote Address 字段获得。我们知道 HTTP 连接基于 TCP 连接，HTTP 协议中没有 IP 的概念，Remote Address 来自 TCP 连接，表示与服务端建立 TCP 连接的设备 IP，在这个例子里就是 IP3。Remote Address 无法伪造，因为建立 TCP 连接需要三次握手，如果伪造了源 IP，无法建立 TCP 连接，更不会有后面的 HTTP 请求。但是在正常情况下，web服务器获取Remote Address只会获取到上一级的IP，本例里则是proxy3 的 IP3，"),r("em",[e._v("这里先埋个伏笔")]),e._v("。")]),e._v(" "),r("ul",[r("li",[e._v("X-Real-IP 这又是一个自定义头部字段，通常被 HTTP 代理用来表示与它产生 TCP 连接的设备 IP，这个设备可能是其他代理，也可能是真正的请求端，这个要看经过代理的层级次数或是是否始终将真实IP一路传下来。（"),r("strong",[e._v("注意：如果未经严格处理，可以被伪造")]),e._v("）")])]),e._v(" "),r("h3",{attrs:{id:"_1-2-前提与铁律"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-前提与铁律"}},[e._v("#")]),e._v(" 1.2.前提与铁律")]),e._v(" "),r("blockquote",[r("p",[e._v("铁律：当多层代理或使用CDN时，如果代理服务器不把用户的真实IP传递下去，那么业务服务器将永远不可能获取到用户的真实IP。")])]),e._v(" "),r("h3",{attrs:{id:"_1-3-用户真实ip的来源和现实情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-用户真实ip的来源和现实情况"}},[e._v("#")]),e._v(" 1.3.用户真实IP的来源和现实情况")]),e._v(" "),r("p",[e._v("首先说用户真实的IP也会存在很多人共用一个IP的情况。用户的请求到达业务服务器会经过以下几种情形：")]),e._v(" "),r("h4",{attrs:{id:"_1-3-1-宽带供应商提供独立ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-宽带供应商提供独立ip"}},[e._v("#")]),e._v(" 1.3.1.宽带供应商提供独立IP")]),e._v(" "),r("p",[e._v("比如家里电信宽带上网，电信给分配了公网ip，那么一个请求经过的ip路径如下： 192.168.0.101(用户电脑ip)--\x3e192.168.0.1/116.1.2.3(路由器的局域网ip及路由器得到的电信公网ip)--\x3e119.147.19.234(业务的前端负载均衡服务器)--\x3e192.168.126.127(业务处理服务器)。 这种情况下，119.147.19.234会把得到的116.1.2.3附加到头信息中传给192.168.126.127,因此这种情况下，我们取得的用户ip则为:116.1.2.3。如果119.147.19.234没有把116.1.2.3附加到头信息中传给业务服务器，业务服务器就只能取上上一级的119.147.19.234的内网IP.")]),e._v(" "),r("h4",{attrs:{id:"_1-3-2-宽带供应商不能提供独立ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-宽带供应商不能提供独立ip"}},[e._v("#")]),e._v(" 1.3.2.宽带供应商不能提供独立IP")]),e._v(" "),r("p",[e._v("宽带提供商没有足够的公网ip，分配的是个内网ip，比如长宽等小的isp。请求路径则可能为： 192.168.0.123(用户电脑ip)--\x3e192.168.0.1/10.0.1.2(路由器的局域网ip及路由器得到的运营商内网ip)--\x3e211.162.78.1（网络运营商长城宽带的公网ip）--\x3e119.147.19.234(业务的前端负载均衡服务器)--\x3e192.168.126.127(业务处理服务器)。")]),e._v(" "),r("p",[e._v("这种情况下得到的用户ip，就是211.162.78.1。")]),e._v(" "),r("p",[e._v("这种情况下，就可能出现一个ip对应有数十上百个用户的情况了（受运营商提供的代理规模决定，比如可能同时有几千或上万的宽带用户都是从211.162.78.1这个ip对外请求）。")]),e._v(" "),r("h4",{attrs:{id:"_1-3-3-手机2g上网"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-手机2g上网"}},[e._v("#")]),e._v(" 1.3.3. 手机2g上网")]),e._v(" "),r("p",[e._v("网络提供商没法直接提供ip给单个用户终端，以中国移动cmwap上网为例，因此请求路径可能为： 手机（手机上没法查看到ip）--\x3e 10.0.0.172(cmwap代理服务器ip)--\x3e10.0.1.2(移动运营商内网ip)--\x3e202.96.75.1（移动运营商的公网ip）--\x3e119.147.19.234(业务的前端负载均衡服务器)--\x3e192.168.126.127(业务处理服务器)。")]),e._v(" "),r("p",[e._v("这种情况下得到的用户ip，就是202.96.75.1。2008年的时候整个广东联通就三个手机上网的公网ip，因此这种情况下，同一ip出现数十万用户也是正常的。")]),e._v(" "),r("h4",{attrs:{id:"_1-3-4-大厂"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-大厂"}},[e._v("#")]),e._v(" 1.3.4.大厂")]),e._v(" "),r("p",[e._v("有几万或数十万员工的大厂，但是出口上网ip就一个 这种也会出现来自同一ip的超多用户，比如腾讯、百度等某一个办公区，可能达到几万人，但出口IP可能就那么几个。")]),e._v(" "),r("h3",{attrs:{id:"_2-如何获取用户真实ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何获取用户真实ip"}},[e._v("#")]),e._v(" 2.如何获取用户真实IP")]),e._v(" "),r("h4",{attrs:{id:"_2-1-当业务服务器直接暴露在公网上-并且未使用cdn和反向代理服务器时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-当业务服务器直接暴露在公网上-并且未使用cdn和反向代理服务器时"}},[e._v("#")]),e._v(" 2.1. 当业务服务器直接暴露在公网上，并且未使用CDN和反向代理服务器时：")]),e._v(" "),r("p",[e._v("可以直接使用remote_addr。如 PHP 可以直接使用")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$_SERVER['REMOTE_ADDR']\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("这时候，HTTP_X_FORWARDED_FOR 和 HTTP_X_REAL_IP 都是可以被伪造的，但REMOTE_ADDR是客户端和服务器的握手IP，即client的出口IP，伪造不了。 比如用下面这条命令来请求一个php文件，并且输出$_SERVER信息")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    curl http://10.200.21.32/test.php -H 'X-Forwarded-For: unkonw, aa,11.22.33.44,11\" 1.1.1.1' -H 'X-Real-IP: 2.2.2.2'\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("结果是(只取部分信息，10.100.11.25是我电脑的IP，服务器是内网服务器，所以不会有公网IP）")]),e._v(" "),r("blockquote",[r("p",[e._v('[HTTP_X_FORWARDED_FOR] => unkonw, aa,11.22.33.44,11" 1.1.1.1'),r("br"),e._v("\n[REMOTE_ADDR] => 10.100.11.25"),r("br"),e._v("\n[HTTP_X_REAL_IP] => 2.2.2.2,")])]),e._v(" "),r("p",[e._v("可以看到，HTTP_X_FORWARDED_FOR 和 HTTP_X_REAL_IP "),r("strong",[e._v("是万万不可直接拿来用的")]),e._v("。使用"),r("code",[e._v("$remote_addr")]),e._v("是明智的选择。 比如我们伪造一下来源IP发给著名的 ip138.com")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("    "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" http://1212.ip138.com/ic.asp "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'X-Forwarded-For: unkonw, aa,11.22.33.44,11\" 1.1.1.1'")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("它原样输出了我们伪造的XFF。")]),e._v(" "),r("h4",{attrs:{id:"_2-2-在代理服务器或cdn之后的业务服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-在代理服务器或cdn之后的业务服务器"}},[e._v("#")]),e._v(" 2.2.在代理服务器或CDN之后的业务服务器")]),e._v(" "),r("p",[e._v("前提：上面的每一层代理或CDN，都将原始请求的 remote_addr 一路传递下去。我们先来看其中一种方案。 如果web服务器上层也是使用nginx做代理或负载均衡，则需要在代理层的nginx配置中明确XFF参数，累加传递上一个请求方的IP到header请求中。以下是代理层的nginx配置参数。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header Host $http_host;\n    proxy_set_header X-NginX-Proxy true;\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("如果web服务器前面使用了HAProxy，则需要增加以下配置来将用户的真实IP转发到web服务器。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("        option forwardfor\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("如果想在业务服务器获取完整的链路信息，还是通过XFF获取，需要在nginx的配置中加一条配置，加上此配置可以让我们获取整个链路信息:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    fastcgi_param  HTTP_X_FORWARDED_FOR $http_x_forwarded_for;\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("实测此参数最好加在被 include 的"),r("code",[e._v("fastcgi.conf")]),e._v("中，就是有一堆"),r("code",[e._v("fastcgi_param")]),e._v("配置的那个文件否则就写入"),r("code",[e._v("location")]),e._v("段。这个配置可能会影响你的nginx日志，这个后续会详细说明。如果不配置此项，则我们在WEB SERVER 上直接获取到的XFF信息则是上一个代理层的IP。当然，也不影响获取用户真实IP。不过如果你是在调试配置的情况下，就不方便查看整个链路了。")]),e._v(" "),r("h5",{attrs:{id:"_2-2-1-在只有一层代理的情况下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-在只有一层代理的情况下"}},[e._v("#")]),e._v(" 2.2.1 在只有一层代理的情况下")]),e._v(" "),r("p",[e._v("我们按上面的配置发起一个伪造请求, 10.100.11.25 是我电脑的IP，链路为：")]),e._v(" "),r("blockquote",[r("p",[e._v("10.100.11.25(client)->10.200.21.33(Proxy)->10.200.21.32(Web Server)")])]),e._v(" "),r("p",[e._v("curl 请求：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    curl http://10.200.21.33:88/test.php -H 'X-Forwarded-For: unkonw, <8.8.8.8> 1.1.1.1' -H 'X-Real-IP: 2.2.2.2'\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("结果如下：")]),e._v(" "),r("blockquote",[r("p",[e._v("[HTTP_X_FORWARDED_FOR] => unkonw, <8.8.8.8> 1.1.1.1, 10.100.11.25"),r("br"),e._v("\n[REMOTE_ADDR] => 10.200.21.33"),r("br"),e._v("\n[HTTP_X_REAL_IP] => 10.100.11.25")])]),e._v(" "),r("p",[e._v("我们可以看到，XFF被附加上了我的IP，但前面的一系列伪造内容，可以轻易骗过很多规则，而"),r("code",[e._v("HTTP_X_REAL_IP")]),e._v(" 则传递了我电脑的IP。因为在上面的配置中，"),r("code",[e._v("X-Real-IP")]),e._v(" 已经被设置为握手 IP。 但多层代理之后，以上面的规则，显然 "),r("code",[e._v("HTTP_X_REAL_IP")]),e._v(" 也不会是真实的用户IP了。而 "),r("code",[e._v("HTTP_X_FORWARDED_FOR")]),e._v(" 则在原有信息（我们伪造的信息）之后附上了握手 IP 一起传递过来了。")]),e._v(" "),r("h5",{attrs:{id:"_2-2-2-在两层或更多代理的情况下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-在两层或更多代理的情况下"}},[e._v("#")]),e._v(" 2.2.2 在两层或更多代理的情况下")]),e._v(" "),r("p",[e._v("我们这里只测试两层，实际链路为：")]),e._v(" "),r("blockquote",[r("p",[e._v("10.100.11.25(client)->10.200.21.34(Proxy)->10.200.21.33(Proxy)->10.200.21.32(Web Server)")])]),e._v(" "),r("p",[e._v("Curl 命令：")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("    "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" http://10.200.21.34:88/test.php "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'X-Forwarded-For: unkonw, <8.8.8.8> 1.1.1.1'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'X-Real-IP: 2.2.2.2'")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("两层代理的情况下结果为：")]),e._v(" "),r("blockquote",[r("p",[e._v("[HTTP_X_FORWARDED_FOR] => unkonw, <8.8.8.8> 1.1.1.1, 10.100.11.25, 10.200.21.34"),r("br"),e._v("\n[REMOTE_ADDR] => 10.200.21.33"),r("br"),e._v("\n[HTTP_X_REAL_IP] => 10.200.21.34")])]),e._v(" "),r("p",[e._v("根据上面的情况，怎么挑出真正的用户IP呢？设想三种方案： * 第一层代理将用户的真实 IP 放在 X-Real-IP 中传递下去，后面的每一层都使用 X-Real-IP 继续往下传递。配置为：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    proxy_set_header X-Real-IP $remote_addr;    # 针对首层代理，拿到真实IP\n    proxy_set_header X-Real-IP $http_x_real_ip; # 针对非首层代理，一直传下去\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ul",[r("li",[e._v("从首层开始，将用户的真实IP 放在 X-Forwarded-For 中，而不是累加各层服务器的 IP，但这样也不够合理，因为丢掉了整个链路信息。配置为：")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    proxy_set_header X-Forwarded-For $remote_addr;  # 针对首层代理\n    proxy_set_header X-Forwarded-For $http_x_forwarded_for; # 针对非首层代理\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ul",[r("li",[e._v("从 X-Forwarded-For 中获取的用户真实IP，排除掉所有代理IP，取最后一个符合IP规则的，注意不是第一个，因为第一个可能是被伪造的（除非首层代理使用了握手会话 IP 做为值向下传递）。")])]),e._v(" "),r("p",[e._v("一般CDN都会将用户的真实 IP 在XFF中传递下去。我们可以做几个简单的测试就能知道我们该怎么做。 注意：nginx配置的这两个变量： * "),r("code",[e._v("$proxy_add_x_forwarded_for")]),e._v(" 会累加代理层的IP向后传递 * "),r("code",[e._v("$http_x_forwarded_for")]),e._v(" 仅仅是上层传过来的值")]),e._v(" "),r("h4",{attrs:{id:"_3-配合nginx-realip模块获取用户真实ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-配合nginx-realip模块获取用户真实ip"}},[e._v("#")]),e._v(" 3.配合nginx realip模块获取用户真实IP")]),e._v(" "),r("p",[e._v("我们应该秉承一个原则：")]),e._v(" "),r("blockquote",[r("p",[e._v("能通过配置让事情变的更简单和通用的事儿，就不要用程序去解决。即环境对程序透明。这当然少不了系统运维人员的辛苦。")])]),e._v(" "),r("p",[e._v("如果能在配置中理清，就不必用复杂的程序去解决，因为Server上可能有各种应用都要来获取用户IP，如果规则不统一，结果会不一致。 程序不知道链路到底经过了几层才转到web server上，所以让程序去做兼容并不是个好主意。索性就让程序把所有的代理都当成透明的好了。 终于说到重点了。上面介绍的三种方法中，如果不能保证前面的代理层使用我们指定的规则，这时候怎么办呢？只能使用第三种方法。然后我们将各层代理的IP排除在外，就取到了真实的用户IP。这个可以使用nginx的一个模块儿 "),r("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_realip_module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("realip_module"),r("OutboundLink")],1),e._v(" 来实现。原理是从XFF中抛弃指定的代理层 IP，那么最后一个符合规则的就是用户 IP。也可以配合第一起方法一起使用。但无论如何，首层代理的规则最重要，直接影响后面的代理层和web service的接收结果。 nginx realip_module 模块需要在编译nginx的时候加上参数"),r("code",[e._v("--with-http_realip_module")]),e._v("。 然后在nginx配置中增加以下配置（可以在http,server或location段中增加）")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    # set user real ip to remote addr\n    set_real_ip_from   10.200.21.0/24;\n    set_real_ip_from   10.100.23.0/24;\n    real_ip_header     X-Forwarded-For;\n    real_ip_recursive on;\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[r("code",[e._v("set_real_ip_from")]),e._v(" 后面是可信 IP 规则，可以有多条。如果启用CDN，知道CDN的溯源IP，也要加进来，除排掉可信的，就是用户的真实IP，会写入 "),r("code",[e._v("remote addr")]),e._v("这个变量中。 比如在PHP中可以使用"),r("code",[e._v("$_SERVER['REMOTE_ADDR']")]),e._v(" 来获取。而WEB SERVER 不使用任何反向代理时，也是取这个值，这就达到了我们之前所说的原则。 "),r("code",[e._v("real_ip_recursive")]),e._v(" 是递归的去除所配置中的可信IP。如果只有一层代理，也可以不写这个参数。 然后我在外网请求一下，结果是这样的")]),e._v(" "),r("blockquote",[r("p",[e._v("[HTTP_X_FORWARDED_FOR] => unkonw, <8.8.8.8> 1.1.1.1, 112.193.23.51, 10.200.21.50"),r("br"),e._v("\n[REMOTE_ADDR] => 112.193.23.51")])]),e._v(" "),r("p",[e._v("112.193.23.51 是 client 的 IP， 10.200.21.50 是WEB SERVER 前面的负载均衡。 真实IP拿到了。")]),e._v(" "),r("h4",{attrs:{id:"再说下nginx日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#再说下nginx日志"}},[e._v("#")]),e._v(" 再说下nginx日志")]),e._v(" "),r("p",[e._v("如果nginx日志中记录了XFF，那么可能会有一些是我们不想记录的，比如我们现在使用的默认的nginx日志格式为：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                  \'$status $body_bytes_sent "$http_referer" \'\n                  \'"$http_user_agent" "$http_x_forwarded_for"\';\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("这时候由于XFF里包含太多信息，甚至可能是一些伪造的未经过滤的文本，在使用和分析日志的时候会出现麻烦，所以我们干脆不记录它。nginx 的日志格式"),r("code",[e._v("log_format")]),e._v("还有一个默认值"),r("code",[e._v("“combined”")]),e._v(". 默认格式为：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("log_format combined '$remote_addr - $remote_user [$time_local] '\n                    '\"$request\" $status $body_bytes_sent '\n                    '\"$http_referer\" \"$http_user_agent\"';\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("p",[e._v("我们使用这个格式就好了。")]),e._v(" "),r("h3",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("我们建议使用以下规则：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("首层代理将握手 IP 附在 X-Forwarded-For 上一直向后传递（或者将 X-Forwarded-For 设置为握手 IP 向后传递），后面的每一层累加握手 IP 往后传递。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("首层代理将握手 IP 设置为 HTTP 请求头的 X-Real-IP 中向后传递。后面的每一层原样传递下去（有则原样传递，无则设置为握手 IP ）。")])])])]),e._v(" "),r("p",[e._v("握手IP：即请求方的 remote_addr, 重要的话要说三遍：")]),e._v(" "),r("blockquote",[r("p",[e._v("运维很重要，首个代理层的处理方式很重要。")]),e._v(" "),r("p",[e._v("运维很重要，首个代理层的处理方式很重要。")]),e._v(" "),r("p",[e._v("运维很重要，首个代理层的处理方式很重要。")])]),e._v(" "),r("p",[e._v("在只有运维最清楚网络环境的时候，尽量通过配置对应用透明。减少应用层的复杂判断。如果环境很复杂，比如使用了CDN，则有可能需要多方协调。")]),e._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[e._v("http://nginx.org/en/docs/http/ngx_http_realip_module.html")]),e._v(" "),r("li",[e._v("https://www.zhihu.com/question/23810075")]),e._v(" "),r("li",[e._v("http://www.cnblogs.com/zhengyun_ustc/archive/2012/09/19/getremoteaddr.html")]),e._v(" "),r("li",[e._v("http://zhensheng.im/2013/08/31/1952/MIAO_LE_GE_MI")]),e._v(" "),r("li",[e._v("http://stackoverflow.com/questions/25929599")]),e._v(" "),r("li",[e._v("http://www.ttlsa.com/nginx/nginx-get-user-real-ip/")]),e._v(" "),r("li",[e._v("https://imququ.com/post/x-forwarded-for-header-in-http.html")]),e._v(" "),r("li",[e._v("http://freeloda.blog.51cto.com/2033581/1288553")]),e._v(" "),r("li",[e._v("http://nginx.org/en/docs/http/ngx_http_log_module.html")])])])}),[],!1,null,null,null);r.default=t.exports}}]);