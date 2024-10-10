---
layout: page
title: 链接
---

{% for url in site.data.link %}

<p>[{{ url.text }}] <a href="{{url.link}}">{{ url.link }}</a></p>

{% endfor %}