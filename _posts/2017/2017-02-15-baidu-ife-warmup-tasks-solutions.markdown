---
layout: "post"
title: "Baidu IFE warmup tasks solutions"
date: "2017-02-15 00:39"
---

## IFE Answers

1.umbrella

> Use your imagination, you could even draw three lines to pass this task.

<!--more-->

2.base64

> Use `Ctrl+A` select all page you will say a encrypted string, use **online decrypt tools** to decode this string to get the next task url.

3.403

> get the window's height and set the lock number equal to that value.

```js
$(window).height;
```

4.Use css `transform`

```css
{
top: 109px;
left: 580px;
}
{
top: 201px;
left: 675px;
transform: scale(1.2,1.2)
}
{
top: 109px;
left: 791px;
transform: scale(-1,1) rotate(20deg);
}
```

5.Follow the question orders.

```js
ball.at(82, 46, ball => ball.turnRight())
ball.at(82, 138, ball => ball.turnLeft())
ball.at(274, 136, ball => ball.turnLeft())
ball.at(272, 38, ball => ball.turnRight())
ball.at(374, 38, ball => ball.turnRight())
ball.at(374, 100, ball => ball.turnLeft())
ball.at(464, 100, ball => ball.turnLeft())
ball.at(464, 15, ball => ball.turnRight())
ball.at(550, 15, ball => ball.turnRight())
ball.at(550, 100, ball => ball.turnLeft())
ball.at(620, 100, ball => ball.turnRight())
ball.at(620, 180, ball => ball.turnRight())
ball.at(570, 180, ball => ball.turnLeft())
ball.at(570, 472, ball => ball.turnLeft())
```
