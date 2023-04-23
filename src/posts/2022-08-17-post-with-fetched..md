---
title: 'Some of my popular GitHub repositories'
description: 'This list of GitHub repos is fetched from the GitHub API and cached for 1 day.'
date: 2023-04-22
---

Sometimes I write code a meetup and people "star" it to find later. Have fun digging through these old repos!

{% for repository in github  %}
{% if repository.stargazers_count > 0 %}

## [{{ repository.name }}]({{ repository.html_url }})

{% include 'svg/star.svg' %} {{ repository.stargazers_count }} / {{ repository.description }}

{% endif %}
{% endfor %}
