---
layout: "post"
title: "如何用 jekyll 搭建你自己的播客 Podcast 频道"
date: "2022-08-15 12:00"
categories: ['blog']
tags: ['tutorial', 'podcast']
published: True
---

3 分钟，教会你如何用 jekyll 创建你的播客（Podcast）频道！

<!--more-->

jekyll 是 Github 默认的博客站点生成系统，提供了功能非常完善的模版语言。

因此 jekyll 不光可以用来生成 HTML 文件，同样可以很轻松地生成 XML 文件。

这个 XML 文件也就是我们的播客需要订阅生成的 RSS Feed 文件，你只需要拷贝这个模版到你 jekyll 站点的根目录：

```xml
{% raw %}
---
layout: none
---
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0" xml:lang="{{ site.lang }}">
   <channel>
      <atom:link href="{{ site.url }}/podcast.xml" rel="self" type="application/rss+xml" />
      <title>{{ site.title }}</title>
      <link>{{ site.url }}{{ site.baseurl }}</link>
      <language>{{ site.lang }}</language>
      <copyright>© {{ site.time | date: "%Y" }} {{ site.title }}</copyright>
      <itunes:subtitle>{{ site.subtitle | xml_escape }}</itunes:subtitle>
      <itunes:author>{{ site.author }}</itunes:author>
      <itunes:summary>{{ site.description | xml_escape }}</itunes:summary>
      <description>{{ site.description | xml_escape }}</description>
      <webMaster>{{ site.email }} ({{ site.author }})</webMaster>
      <itunes:owner>
         <itunes:name>{{ site.author }}</itunes:name>
         <itunes:email>{{ site.email }}</itunes:email>
      </itunes:owner>
      <itunes:image href="{{ site.url }}{{ site.baseurl }}/images/itunes.png" />
      <itunes:category text="Technology" />
      <itunes:category text="Business"> <itunes:category text="Investing" /></itunes:category>
      <itunes:category text="Education" />
      <itunes:explicit>no</itunes:explicit>
      {% for post in site.categories.podcast %}
      <item>
         <title>{{ post.title | xml_escape }}</title>
         <itunes:author>{{ site.author }}</itunes:author>
         <itunes:subtitle>{{ site.title | xml_escape }}: {{ post.title | xml_escape }}</itunes:subtitle>
         <itunes:summary>{{ post.summary | xml_escape }}</itunes:summary>
         <itunes:image href="{{ site.url }}/images/itunes.png" />
         <link>{{ post.url | prepend: site.url }}</link>
         <enclosure url="{{ post.file }}" length="{{ post.length }}" type="audio/x-m4a" />
         <guid isPermaLink="true">{{ site.url }}{{ site.baseurl }}{{ post.url }}</guid>
         <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
         <itunes:duration>{{ post.duration }}</itunes:duration>
         <itunes:explicit>{{ post.explicit }}</itunes:explicit>
         <description><![CDATA[ {{ post.content }} ]]></description>
         <itunes:keywords>{{ post.keywords }}</itunes:keywords>
         <itunes:block>{{ post.block }}</itunes:block>
      </item>
      {% endfor %}
   </channel>
</rss>
{% endraw %}
```

确保你站点的 `_config.yaml` 文件当中有定义上述相应的变量，例如 `author` `subtitle` 等。

接下来你只需要在撰写新的 `post` 时添加相关的头部描述：

```md
---
layout: post
title: "Title Goes Here"
date: Publishing date and time
categories: ['podcast']
file: link to file in S3
summary: "Quick exerpt of episode"
description: "Longer information"
duration: "how long in minutes and seconds" 
length: "in seconds"
explicit: "do we swear" 
keywords: "keyword tags"
block: "hold back publishing it" 
voices: "who did the talking"
---
```

注意分类要填写我们模版当中定义的 `podcast` 分类，当然你也可以通过 `jekyll collection` 等方式区分发布的播客类型页面。

之后等待站点生成，我们就能够获得标准的 Podcast RSS Feed 文件啦，你只需要把这个地址提供给 Apple 或者 Google，就能够分发你的播客内容了！

* [Apple](https://podcastsconnect.apple.com/)
* [Google](https://podcasts.google.com/)
* [Spotify](https://podcasters.spotify.com/)

当然，还有很多朋友可能会对如何存储播客的音频文件有所疑问，其实使用任意的支持外链的云存储平台即可，例如 AWS 的 S3 之类的服务。

假如你拥有自己的服务器，也可以轻松搭建独立的文件伺服站点，常规的 FTP 或者利用 `caddy` 我们可以很轻松地通过 HTTP 分发指定目录下的文件内容：

```
you.domain.com {
 root * /var/www/podcast
 file_server browse
}
```

如此你只需把音频文件存放在站点目录下即可。







