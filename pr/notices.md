---
layout: page
title: 공지사항
---
{% assign items = site.notices | sort: 'date' | reverse %}
<ul class='list'>
{% for it in items %}
<li><a href='{{ it.url | relative_url }}'>{{ it.title }}</a><time>{{ it.date | date: "%Y-%m-%d" }}</time></li>
{% endfor %}
</ul>
