---
layout: "post"
title: "前端开发者转行挖矿的特别技巧"
date: "2019-04-11 00:24"
categories: ['tutorial']
tags: ['cryptocurrency', 'btc']
published: True
---

比特币的热潮不是没有来过，只是这一次尤其汹涌。直接催动了区块链技术相关产业的野蛮生长，菜市场的大爷大妈也不再关心韭菜的价格，而是24小时不停歇地死盯着加密货币交易市场的起伏，随时准备贴上自己所剩无几的棺材本。比特币涨到了九万块的今天，你是继续选择做一只把头埋在土里的鸵鸟，每日996，穿着格子衬衫，吃着黄焖鸡米饭，拿着10来k的工资；还是拿出你的毕生积蓄，兑换BTC，参与ICO，西装革履同俊杰名媛谈笑风生，坐等币价翻个几千倍，从此走上人生巅峰呢？

<!--more-->

爱者把比特币、区块链当作此生的信仰；恨者觉得这不过又是一次披着高科技伪装的庞氏骗局和洗脑传销。但无论如何，身为一名技术从业者，相互切磋切磋，探讨探讨其背后的原理，也无伤大雅。

相信很多同学对挖矿一直感到好奇，并且跃跃欲试。但早已过了那个一台 PC 就能挖出几万比特币的时代。一张 1080 动辄上万还经常缺货，期货矿机遥遥无期，普通人想要挖矿成本实在太高，难道就没有一种低门槛、好上手、易操作、有收益的挖矿手段了吗？

今天，我就和同学们一起，利用你已掌握的 JavaScript 知识进行挖矿~

**P.S.** 本文所有内容可高调分享，敬请外传。

#### 什么是 Coinhive

Coinhive 是一个进行门罗币挖矿的矿池，它提供了官方的 JavaScript API 等一些列工具，运用其分布式算法，可以让你在浏览器里参与云挖矿。根据你客户端运算的贡献度，在平台扣除了一定的“手续费”之后，会返还给你相应数量的门罗币作为你的收益奖励。

#### 什么是门罗币

> 门罗币（Monero，代号XMR）是一个创建于2014年4月开源加密货币，它着重于隐私、分权和可扩展性。与自比特币衍生的许多加密货币不同，Monero基于CryptoNote协议，并在区块链模糊化方面有显著的算法差异。Monero的模块化代码结构得到了比特币核心维护者之一的Wladimir J. van der Laan的赞赏。Monero在2016年经历了市值（从5百万美元至1.85亿美元)和交易量的快速增长，这部分是因为它在2016年夏季末期得到了主要的暗网市场AlphaBay的采用。截至2017年，Monero是交易量排行第六的加密货币，市值超过3亿美元。——Wikipedia

#### 什么是 CPU 友好型加密货币

例如门罗币采用的工作验证算法 [CryptoNight](https://en.bitcoin.it/wiki/CryptoNight) 为 AES 密集型和很耗内存的操作，这显著降低了 GPU 相对 CPU 的优势。由此专业矿机或者顶级显卡相比较你的个人电脑也就失去了竞争力，通过 CPU 挖矿也就成为了可能，而不会出现赢者通吃的情况。甚至也有一些只能通过 CPU 进行计算的加密货币，如果你对此类货币感兴趣，可以在 [CPU COIN LIST](http://cpucoinlist.com/) 查看。

#### 如何使用 Coinhive 进行挖矿


Coinhive 的使用非常简单，你无须明白加密货币或区块链的原理，只需要利用你已经掌握的前端知识，分分钟配好 API 就可以在你的浏览器里进行挖矿了。

### 利用简易 UI 进行挖矿

官方提供了一个 [Coinhive Simple UI Miner](https://codepen.io/discountry/pen/PERMwj?editors=1010) ，如果你懒得自己写代码，可以直接将其示例代码复制下来，另存为 HTML 文件，用浏览器打开，就可以进行挖矿了：

```html
    <script src="https://authedmine.com/lib/simple-ui.min.js" async></script>
    <div class="coinhive-miner" 
        style="width: 256px; height: 310px"
        data-key="YOUR_SITE_KEY">
        <em>Loading...</em>
    </div>
```  

其中的 `YOUR_SITE_KEY` 是你唯一需要注意进行配置的参数，这个设置在你注册完 Coinhive 的账号之后，就可以在 [Sites & API Keys](https://coinhive.com/settings/sites) 页面里找到。

你也可以在这里测试我编写好的[在线示例](https://codepen.io/discountry/pen/PERMwj?editors=1010)进行体验。

### 使用 React 编写一个挖矿应用

也许上述如此简单的操作不能让你满足，那么你可以尝试着用官方提供的 [JavaScript API](https://coinhive.com/documentation/miner) 自己动手编写一个挖矿应用。

在这里，我就试着用最熟悉的 React 编写了一个简单的可以实时显示挖矿进度的应用：

```js
    class Miner extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          hashesPerSecond: 0,
          totalHashes: 0,
          acceptedHashes: 0,
        }
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
      }
      update() {
        this.setState({
          hashesPerSecond: this.miner.getHashesPerSecond(),
          totalHashes: this.miner.getTotalHashes(),
          acceptedHashes: this.miner.getTotalHashes(),
        })
      }
      handleStart() {
        this.miner.start()
      }
      handleStop() {
        this.miner.stop()
      }
      componentDidMount() {
        this.miner = new CoinHive.Anonymous('zyc1ClPF1ZevATB5gChyGzZklCCZHmY7','react', {
          throttle: 0.3,
          threads: Math.floor(navigator.hardwareConcurrency/1)
        })
        this.interval = setInterval(() => this.update(), 1000)
      }
      componentWillUnmount() {
        this.handleStop()
        clearInterval(this.interval)
      }
      render() {
        return (
        <div className="container">
            <div className="item">
              <h2>Hashes/s</h2>
              <p>{this.state.hashesPerSecond}</p>
            </div>
            <div className="item">
              <h2>Total</h2>
              <p>{this.state.totalHashes}</p>
            </div>
            <div className="item">
              <h2>Accepted</h2>
              <p>{this.state.acceptedHashes}</p>
            </div>
            <div className="item options">
              <button onClick={this.handleStart}>Start</button>
              <button onClick={this.handleStop}>Stop</button>
            </div>
          </div>
        )
      }
    }
```  

如果你正在学习 React ，上述代码也是一个非常好的示例，注意其中事件处理函数绑定 `this`，以及生命周期函数中设定计时器的用法。

你可以在 [React Coinhive Miner](https://codepen.io/discountry/pen/XVEQLd?editors=0010) 查看调试在线示例。

### 使用 Vue 编写一个挖矿应用

当然肯定还有许多喜欢 Vue 的同学，这里我也不会偏心，准备了一个使用 `vue.js` 编写的简单挖矿应用供同学们参考：

```html
<div id="app">
  <p>Hashes/s: {{ statistics.hashesPerSecond }}</p>
  <p>Total: {{ statistics.totalHashes }}</p>
  <p>Accepted: {{ statistics.acceptedHashes }}</p>
  <button v-on:click="startMining">Start Mining</button>
  <button v-on:click="stopMining">Stop Mining</button>
</div>

<script>
var app = new Vue({
  el: "#app",
  data: {
    miner: new CoinHive.Anonymous("zyc1ClPF1ZevATB5gChyGzZklCCZHmY7", "vue", {
      throttle: 0.3,
      threads: Math.floor(navigator.hardwareConcurrency / 1)
    }),
    statistics: {
      hashesPerSecond: 0,
      totalHashes: 0,
      acceptedHashes: 0
    }
  },
  mounted() {
    this.updateStatistics();
  },
  methods: {
    updateStatistics() {
      setTimeout(() => {
        this.statistics = {
          hashesPerSecond: this.miner.getHashesPerSecond(),
          totalHashes: this.miner.getTotalHashes(),
          acceptedHashes: this.miner.getAcceptedHashes()
        };
        this.updateStatistics();
      }, 1000);
    },
    startMining() {
      this.miner.start();
    },
    stopMining() {
      this.miner.stop();
    }
  }
});
</script>
```

你可以在 [Vue Coinhive Miner](https://codepen.io/discountry/pen/MrVMoQ) 查看调试在线示例。

另外注意到，上述的示例当中，我们都使用到了一个叫做 [navigator.hardwareConcurrency](https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorConcurrentHardware) 的 Web API，通过这个 API 我们能够获取到 CPU 的核心数，事实上还有很多其他非常强大有用的 [Web API](https://developer.mozilla.org/en-US/docs/Web/API) ，感兴趣的同学可以自行查阅研究一下。

#### 示例

* [Coinhive Simple UI Miner](https://codepen.io/discountry/pen/PERMwj?editors=1010)
* [Vue Coinhive Miner](https://codepen.io/discountry/pen/MrVMoQ)
* [React Coinhive Miner](https://codepen.io/discountry/pen/XVEQLd?editors=0010)

#### 参考资料

* [Coinhive JavaScript Miner](https://coinhive.com/documentation/miner)
* [Coinhive Simple Miner UI](https://coinhive.com/documentation/simple-ui)
* [Mine Monero XMR Cryptocurrency With CoinHive In A Vue.js Application](https://www.thepolyglotdeveloper.com/2018/01/mine-monero-xmr-cryptocurrency-coinhive-vuejs-application/)
* [精读《全链路体验浏览器挖矿》](https://zhuanlan.zhihu.com/p/32710452)
* [Wikipedia Monero (cryptocurrency)](https://en.wikipedia.org/wiki/Monero_(cryptocurrency))
