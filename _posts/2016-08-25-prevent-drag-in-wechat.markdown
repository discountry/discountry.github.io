---
layout: post
title: Prevent drag in wechat
published: True
categories: ['snippets']
tags: ['wechat','mobile']
---

```js 
// Prevent Drag in Wechat
    var overscroll = function(el) {
        el.addEventListener('touchstart', function() {
            var top = el.scrollTop,
                totalScroll = el.scrollHeight,
                currentScroll = top + el.offsetHeight;
            //If we're at the top or the bottom of the containers
            //scroll, push up or down one pixel.
            //
            //this prevents the scroll from "passing through" to
            //the body.
            if (top === 0) {
                el.scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                el.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function(evt) {
            //if the content is actually scrollable, i.e. the content is long enough
            //that scrolling can occur
            if (el.offsetHeight < el.scrollHeight)
                evt._isScroller = true;
        });
    }
    overscroll(document.querySelector('.swiper-container'));
    document.addEventListener('touchmove', function(evt) {
        //In this case, the default behavior is scrolling the body, which
        //would result in an overflow.  Since we don't want that, we preventDefault.
        if (!evt._isScroller) {
            evt.preventDefault();
        }
    });
```

<!--more-->

Another version

```js
// 防止过分拉动
        preventMove: function(e) {
            // 高位表示向上滚动, 底位表示向下滚动: 1容许 0禁止
            var status = '11', 
                e = e || window.event, // 使用 || 运算取得event对象
                ele = this,
                currentY = e.touches[0].clientY,
                startY = startMoveYmap[ele.id],
                scrollTop = ele.scrollTop,
                offsetHeight = ele.offsetHeight,
                scrollHeight = ele.scrollHeight;

            if (scrollTop === 0) {
                // 如果内容小于容器则同时禁止上下滚动
                status = offsetHeight >= scrollHeight ? '00' : '01';
            } else if (scrollTop + offsetHeight >= scrollHeight) {
                // 已经滚到底部了只能向上滚动
                status = '10';
            }
            if (status != '11') {
                // 判断当前的滚动方向
                var direction = currentY - startY > 0 ? '10' : '01';
                // console.log(direction);
                // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
                if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }
            }
        },
```
