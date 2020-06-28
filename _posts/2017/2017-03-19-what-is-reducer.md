---
layout: post
title: Redux 中的 reducer 到底是什么? 
published: True
categories: ['theory']
tags: ['react', 'redux']
---

**Redux**有3大核心概念：

*   Action
*   Reducer
*   Store

其中**Action**和**Store**都非常好理解，我们可以直接按照其字面意思，将他们理解为**动作**和**储存**。

<!--more-->

**Action**表示应用中的各类动作或操作，不同的操作会改变应用相应的**state**状态，说白了就是一个带**type**属性的对象。

**Store**则是我们储存**state**的地方。我们通过**redux**当中的**createStore**方法来创建一个**store**，它提供3个主要的方法，在这里我们可以模拟一下**createStore**的源码：

    // 以下代码示例来自redux官方教程
    const createStore = (reducer) => {
      let state;
      let listeners = [];
      // 用来返回当前的state
      const getState = () => state;
      // 根据action调用reducer返回新的state并触发listener
      const dispatch = (action) => {
          state = reducer(state, action);
          listeners.forEach(listener => listener());
        };
      /* 这里的subscribe有两个功能
       * 调用 subscribe(listener) 会使用listeners.push(listener)注册一个listener
       * 而调用 subscribe 的返回函数则会注销掉listener
       */
      const subscribe = (listener) => {
          listeners.push(listener);
          return () => {
            listeners = listeners.filter(l => l !== listener);
          };
        };
    
      return { getState, dispatch, subscribe };
    };
    

那么剩下的这个**reducer**连翻译都很难翻译的东西应该怎么理解呢？

我们注意到**redux**的官方文档里专门有一句对reducer命名的解释：

> It's called a reducer because it's the type of function you would pass to [Array.prototype.reduce(reducer, ?initialValue)](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

中文版的文档把这一句话翻译成了：

> 之所以称作 **reducer** 是因为它将被传递给 [Array.prototype.reduce(reducer, ?initialValue)](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 方法。

我们要注意到这里的中文翻译理解其实是错误的。原文的本意并不是说**redux**里的**reducer**会被传入到 **Array.prototype.reduce** 这个方法中。真的要翻译的话，应该翻译为：

> 之所以将这样的函数称之为reducer，是因为这种函数与被传入 **Array.prototype.reduce(reducer, ?initialValue)** 的回调函数属于相同的类型。

为什么这么讲呢？我们来看一下**array**使用**reduce**方法的具体例子：

    // 以下代码示例来自 MDN JavaScript 文档
    
    /* 这里的callback是和reducer非常相似的函数
     * arr.reduce(callback, [initialValue])
     */
    
    var sum = [0, 1, 2, 3].reduce(function(acc, val) {
      return acc + val;
    }, 0);
    // sum = 6
    
    /* 注意这当中的回调函数 (prev, curr) => prev + curr
     * 与我们redux当中的reducer模型 (previousState, action) => newState 看起来是不是非常相似呢
     */
    [0, 1, 2, 3, 4].reduce( (prev, curr) => prev + curr );
    

我们再来看一个简单的具体的reducer的例子：

    // 以下代码示例来自redux官方教程
    
    // reducer接受state和action并返回新的state
    const todos = (state = [], action) => {
      // 根据不同的action.type对state进行不同的操作，一般都是用switch语句来实现，当然你要用if...else我也拦不住你
      switch (action.type) {
        case 'ADD_TODO':
          return [
            // 这里是ES7里的对象展开运算符语法
            ...state,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
          ];
        // 不知道是什么action类型的话则返回默认state
        default:
          return state;
      }
    };
    

如果非要翻译**reducer**的话，可以将其翻译为缩减器或者折叠器？

为了进一步加深理解，我们再了解一下**reduce**是什么东西，这个名词其实是函数式编程当中的一个术语，在更多的情况下，**reduce**操作被称为**Fold**折叠（下图来自维基百科）。

![fold.png](https://i.loli.net/2020/06/29/qH2J84ozIRNus5f.png)

直观起见，我们还是拿JavaScript来理解。**reduce**属于一种高阶函数，它将其中的回调函数**reducer**递归应用到数组的所有元素上并返回一个独立的值。这也就是“缩减”或“折叠”的意义所在了。

**总而言之一句话，redux当中的reducer之所以叫做reducer，是因为它和 Array.prototype.reduce 当中传入的回调函数非常相似。**

当然，如果你认为这种命名不完美容易产生歧义，你完全可以去给**redux**提交一个PR，提供一种更加恰当的命名方式。

有任何好的意见或者是建议欢迎在评论区参与讨论，如果文中有任何错误也欢迎在评论区批评指正。

参考资料
----

*   [Why is a Redux reducer called a reducer?](https://link.zhihu.com/?target=http%3A//stackoverflow.com/questions/40599496/why-is-a-redux-reducer-called-a-reducer)
*   [Reducers](https://link.zhihu.com/?target=http%3A//redux.js.org/docs/basics/Reducers.html)
*   [Reducer 中文文档](https://link.zhihu.com/?target=http%3A//cn.redux.js.org/docs/basics/Reducers.html)
*   [Array.prototype.reduce()](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
*   [Fold (higher-order function)](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/Fold_%28higher-order_function)
