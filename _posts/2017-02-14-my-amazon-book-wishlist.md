---
layout: post
title: My Amazon Books Wish List
published: True
categories: ['list']
tags: ['js', 'amazon']
---

The Amazon wish list has many bugs.I even can not share it to my friends via URL.

So I use two lines JavaScript to convert them into markdown:

```js
list = $$('h5 a')
list.forEach(function(link){console.log('* ['+link.innerText+']' +'(' +link.href+')')})
```

<!--more-->

You could inspect HTML content to find out why this snippet would work.

**Here goes the book list:**

#### Programming

* [黑客攻防技术宝典:Web实战篇(第2版) (图灵程序设计丛书 99)](https://www.amazon.cn/dp/B00CBBJYQC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3LA1IR6VWK5GA)
* [程序员面试金典（第5版）](https://www.amazon.cn/dp/B00M2DL35O/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1UPXGT3Y67GR7)
* [计算机英语 (重点大学计算机基础课程教材)](https://www.amazon.cn/dp/B016Q6N3UK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1E511UPI73TTM)
* [代码整洁之道](https://www.amazon.cn/dp/B00CBBJWJQ/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1O2YIPC6RQ8AA)
* [UNIX环境高级编程(第3版)](https://www.amazon.cn/dp/B01HZFHE1U/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1Y4URZQUDSZQF)
* [重构 改善既有代码的设计](https://www.amazon.cn/dp/B01HZFHIH0/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IBE3X4PH0G7WK)
* [大教堂与集市（开源运动的《圣经》，中文版首次出版） (O'Reilly精品图书系列)](https://www.amazon.cn/dp/B00L2XQY0Y/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IUWX9GH8CJMSH)
* [黑客攻防实战从入门到精通](https://www.amazon.cn/dp/B0186QPOXW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IJ1UGD58308BD)
* [JavaScript忍者秘籍](https://www.amazon.cn/dp/B01IV39JJK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IJ25HJ25OCRNW)
* [JavaScript设计模式与开发实践 (图灵原创)](https://www.amazon.cn/dp/B01F7IELCW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IDZ3BXAUL1IXG)
* [学习JavaScript数据结构与算法 (图灵程序设计丛书)](https://www.amazon.cn/dp/B01F7IELU4/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2VZEYW2IHPOFW)
* [编写可维护的JavaScript (无)](https://www.amazon.cn/dp/B01MQFP65R/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3BXXLQ3ZLSRRK)
* [你不知道的JavaScript（上卷） (图灵程序设计丛书)](https://www.amazon.cn/dp/B0153179VI/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1P2YU6DQ4R13Y)
* [JavaScript权威指南（原书第6版）](https://www.amazon.cn/dp/B00E593MTS/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IMX7DWX4UC1VW)
* [JavaScript高级程序设计(第3版) (图灵程序设计丛书)](https://www.amazon.cn/dp/B00CBBJS5Y/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I7KLLGSFHIMYK)
* [编程之美:微软技术面试心得](https://www.amazon.cn/dp/B00FF1Y96K/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2VJRL27S0USI2)
* [Raspberry Pi开发实战 (O’Reilly精品图书系列)](https://www.amazon.cn/dp/B00TD75Z1A/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1Z2V9GZ3FTOHS)
* [Kali Linux高级渗透测试 (信息安全技术丛书)](https://www.amazon.cn/dp/B01FQ6966G/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3CWCIPBWPD6YK)
* [游戏编程模式](https://www.amazon.cn/dp/B01M8N162R/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2ZS3K9W0B1Y0R)
* [函数式编程思维 (图灵程序设计丛书)](https://www.amazon.cn/dp/B01F7IEMGC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1TE0LWZ9XE0EB)
* [统计思维：程序员数学之概率统计（第2版） (图灵程序设计丛书)](https://www.amazon.cn/dp/B01F7IEM7Q/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1Q8SQ3AM93Y9H)
* [白帽子讲Web安全](https://www.amazon.cn/dp/B00Y1UYRJK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IQC4LUFKN378E)
* [Python编程快速上手 让繁琐工作自动化](https://www.amazon.cn/dp/B01M68PABD/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I11WR98G4MILXN)
* [游戏设计的100个原理](https://www.amazon.cn/dp/B016PX3NCC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I50WK7ECP1IM9)
* [黑客秘笈:渗透测试实用指南](https://www.amazon.cn/dp/B011LPUAP2/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I33JPR5DJMA6ZR)
* [Python绝技:运用Python成为顶级黑客](https://www.amazon.cn/dp/B019ZRGBVU/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I229SK3AZUVV0U)
* [Python黑帽子:黑客与渗透测试编程之道](https://www.amazon.cn/dp/B013KKCLE4/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2QL60EYU5ZZOI)
* [安全技术大系:Web前端黑客技术揭秘](https://www.amazon.cn/dp/B01I4PQYY8/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I12NA023NYOUWL)
* [编程珠玑（第2版·修订版）](https://www.amazon.cn/dp/B01HZFHFIM/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1YUF8TGSOJQ84)
* [Swift编程实战：iOS应用开发实例及完整解决方案 (O’Reilly精品图书系列)](https://www.amazon.cn/dp/B01IEMZFKU/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1JT8D36NIBQU4)
* [Spark快速大数据分析 (图灵程序设计丛书)](https://www.amazon.cn/dp/B01F7IEM80/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1SB9D4TMM4BSH)
* [数据结构与算法JavaScript描述 (图灵程序设计丛书)](https://www.amazon.cn/dp/B0153173KK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3KPR1PVNO78ZO)
* [游戏开发物理学 第2版](https://www.amazon.cn/dp/B01IV39IOQ/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2MX29KFCDU4WO)
* [学习R (图灵程序设计丛书)](https://www.amazon.cn/dp/B0153170GC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I230E7D5NU805J)
* [深入HTML5应用开发 (图灵程序设计丛书 53)](https://www.amazon.cn/dp/B00HECX4OQ/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1IYKS7OZIGR74)
* [HTML5实战](https://www.amazon.cn/dp/B015QSNJIK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2Z9SOQBDEPZJB)
* [HTML5 canvas开发详解(第2版) (无)](https://www.amazon.cn/dp/B01IV39IOG/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2TZW2W12RAZPA)
* [HTML5秘籍（第2版） (图灵程序设计丛书)](https://www.amazon.cn/dp/B015316VJY/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3V0411RJ0KQS0)
* [HTML5与CSS3基础教程(第8版) (图灵程序设计丛书)](https://www.amazon.cn/dp/B015316ZWC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1MCXJ1A3D4A4R)
* [iOS应用逆向工程（第2版） (信息安全技术丛书)](https://www.amazon.cn/dp/B00V32OY6U/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=ITLZFCLFOHHLO)
* [MongoDB权威指南(第2版) (图灵程序设计丛书 17)](https://www.amazon.cn/dp/B00JVLEYYW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I20TEEZDL805EI)
* [Web前端工程师修炼之道（原书第4版） (O'Reilly精品图书系列)](https://www.amazon.cn/dp/B00NNIUHJK/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I30NLAIBKAA6UV)
* [CSS禅意花园(修订版)](https://www.amazon.cn/dp/B00LITFG88/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2U188JOAYI70O)
* [CSS设计指南（第3版） (图灵程序设计丛书 93)](https://www.amazon.cn/dp/B00M2DKZ1W/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1N9R0RV6VCXDV)
* [哥德尔、艾舍尔、巴赫:集异璧之大成](https://www.amazon.cn/dp/B0049MPCAS/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I1YRC8NWL8DXKQ)
* [黑客攻防技术宝典:Web实战篇(第2版) (图灵程序设计丛书 99)](https://www.amazon.cn/dp/B00CBBJYQC/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=I1EVUOSV72PO85)
* [单页Web应用：JavaScript从前端到后端](https://www.amazon.cn/dp/B015QSNI18/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=I3UJGEA8OCP0ER)
* [Swift基础教程 (图灵程序设计丛书)](https://www.amazon.cn/dp/B015317BT8/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=I2HSYS6R3Z4632)
* [算法导论(原书第3版)](https://www.amazon.cn/dp/B00AK7BYJY/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=II7LH6A2ZLBB7)
* [计算机程序的构造和解释(原书第2版)](https://www.amazon.cn/dp/B0011AP7RY/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=I3ESDG644MOWT7)

#### Fictions

* [曾国藩家书（李鸿章校勘，随文夹注版） (慢读系列)](https://www.amazon.cn/dp/B01BKB2IPM/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=I14X1RRSIZMNRJ)
* [神的九十亿个名字 (读客全球顶级畅销小说文库 35)](https://www.amazon.cn/dp/B014DAN6VC/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3OEA3IVOXDL2S)
* [王小波全集（终结版）（套装全10册）（李银河独家授权，将他的一生以文字和图片的形式，系统、全面地呈现给读者。）](https://www.amazon.cn/dp/B01F6U737G/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I22P9742I33I18)
* [蝴蝶梦（全球公认20世纪伟大爱情经典，大陆独家合法授权。20世纪百部推理经典；BBC百部英国人挚爱文学，1938年美国国家图书奖，希区柯克电影原著。我错了，我曾以为付出自己就是爱你。) (读客全球顶级畅销小说文库 229)](https://www.amazon.cn/dp/B01AL0NKKA/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2J9OCM5JMQMIU)
* [神们自己（科幻巨匠阿西莫夫本人偏爱的作品，也是他首部包揽星云奖、雨果奖、轨迹奖三奖的传奇之作，中文版全译本首次在国内成书出版。） (读客全球顶级畅销小说文库 166)](https://www.amazon.cn/dp/B00RRCUBN0/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=ISEPN5EIXGRF8)
* [私人侦探PRIVATE系列:柏林面具人+伦敦迷踪+私人侦探+头号嫌疑人(套装共4册)](https://www.amazon.cn/dp/B00DKOMCIG/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IVRMZVJYPNJIG)
* [阿加莎畅销精选系列1(套装共5册)](https://www.amazon.cn/dp/B00UEOZ09I/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I252J6S7AIVH6R)
* [贾平凹散文自选集 (名家自选文库)](https://www.amazon.cn/dp/B00KMSW0TY/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IGJT917850KAQ)
* [细说民国大文人套装:民国文学大师、国学大师、思想大师(全三册）](https://www.amazon.cn/dp/B01DF0QJGA/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3JC7E2YW2EQ7M)
* [被禁锢的头脑(比《一九八四》更伟大，2013年度深圳读书月十大好书) (米沃什作品系列)](https://www.amazon.cn/dp/B00JO193ZY/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I32TPGHLTW8136)
* [艾伦·图灵传——如谜的解谜者（87届奥斯卡最佳改编剧本奖《模仿游戏》原著，计算机科学之父的传奇人生)](https://www.amazon.cn/dp/B00SWJEBC4/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I35TLKB2H8CKHR)
* [反乌托邦小说三部曲(美丽新世界，1984，我们)](https://www.amazon.cn/dp/B0126KICHY/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=IRE20I1T0D0OY)
* [菲利普·迪克作品集（高城堡里的人+少数派报告+流吧！我的眼泪+尤比克+仿生人会梦见电子羊吗？）（套装共5册） (译林幻系列)](https://www.amazon.cn/dp/B00K5K7AI0/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I3Q912S23XN78F)
 [纳尼亚传奇全集:中英双语版（套装共7册） (English Edition)](https://www.amazon.cn/dp/B00J7DZ524/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I2EUBVIU43HBOC)
* [千禧年系列（龙文身的女孩、玩火的女孩、直捣蜂窝的女孩，三部曲）](https://www.amazon.cn/dp/B01M6BMIMP/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I15967REP9U6I5)
* [新媒体营销圣经：引诱，引诱，引诱，出击！(公号狗跪读！硅谷大神，亲笔力作，彻底讲透新媒体！近百个全球经典新媒体案例实解！全中国5000万新媒体运营者、自媒体人、企业营销、品牌策划的从业必读权威读本！)](https://www.amazon.cn/dp/B01GLCZ1HW/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=2VB7LY8ZQRQVF&coliid=I17YH6VEDSSP8G)

#### DIY

* [30天自制操作系统 (图灵程序设计丛书 10)](https://www.amazon.cn/dp/B00ALPRMFU/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I1XFX4NW1IMS15)
* [自制搜索引擎](https://www.amazon.cn/dp/B019CRHPWC/ref=wl_it_dp_o_pd_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I34EFRLFOVMI0Z)
* [CPU自制入门 (图灵程序设计丛书)](https://www.amazon.cn/dp/B015316WUW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I1PH27TN08PXF3)
* [自己动手写CPU(附CD光盘1张)](https://www.amazon.cn/dp/B00MQKRLG8/ref=wl_it_dp_o_pC_S_ttl?_encoding=UTF8&colid=3K9YKUKRVD9CJ&coliid=IND0ZII2YB3ZI)
* [两周自制脚本语言](https://www.amazon.cn/dp/B00KVLDS20/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I70R8N4Q17QZD)
* [自制编程语言 (图灵程序设计丛书)](https://www.amazon.cn/dp/B00ORFFUR2/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I2JE5D8ZLD13BS)
* [自制编译器](https://www.amazon.cn/dp/B01GQTY6WQ/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=ITT9BXWXP9JSF)
* [自己动手设计物联网](https://www.amazon.cn/dp/B01IBZWTWW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I1JA5UU4A39E4T)
* [自己动手设计数据库](https://www.amazon.cn/dp/B0158WYUP0/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I27UKP1E4AXKCV)
* [自己动手构造编译系统：编译、汇编与链接 (自己动手系列)](https://www.amazon.cn/dp/B01KHJXE42/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=I18SUDPPGNQX6N)
* [自己动手写Java虚拟机 (Java核心技术系列)](https://www.amazon.cn/dp/B01GE4LNJW/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=NQ8IRHAPJFJC&coliid=ITCOG8YEUX5EC)
