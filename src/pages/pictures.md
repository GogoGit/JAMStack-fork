---
pageTitle: Apples
navTitle: Pictures
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png
pageClass: pictures
---

<!-- 
removed the following
---
layout: layout.html
tags: page
---

as it's now done by pages.json  (commonly used nav stuff)
 -->



![alt info goes here]( {{ singleImage }} )


<!-- example of adding css to mark down but you should keep them seperated. 
        This is a best practice -->
<img src="{{ singleImage }}" alt="info goes here" style="transform: scale(50%) rotate(20deg);" />


<!-- Looping with Templates -->
{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}

<!-- looping with HTML -->
{% for filename in images %}
<img src="/img/{{ filename }}" alt="A nice picture of apples." />
{% endfor %}

[Home](/)