---
layout: page
title: 友情链接
---

{% for url in site.data.link %}

<p>[{{ url.text }}] <a href="{{url.link}}">{{ url.link }}</a></p>

{% endfor %}

+

可以交换链接，将链接发送至 {{ site.email }}