---
layout: "post"
title: "Use Atom as your Markdown editor"
date: "2017-02-15 11:46"
---

I've tested all the popular text/markdown editors on Valentine's Day.

Including:

* [Sublime Text](https://www.sublimetext.com/)
* [VS Code](https://code.visualstudio.com)
* [Atom](https://atom.io/)
* [Typora](https://typora.io/)
* [Texts](http://www.texts.io/)
* [Mou](http://25.io/mou/)
* [Ulysses](https://ulyssesapp.com/)

As a front-end developer who often write technical articles on github, I found that the best writing editor for me is [Atom](https://atom.io/).

<!--more-->

- [Installation](#installation)
- [Packages & Theme](#packages-theme)
- [Hack on the init script](#hack-on-the-init-script)
- [Blog settings](#blog-settings)
- [Using Atom](#using-atom)

I have to declare my demands at first:

* Most of my articles contains code showcases, so I need good code highlight supportings.
* I need to publish my articles to my blog on Github, it would save lots of my time if I could push git commits right in the editor.
* I'm not an English native speaker, so I need some auto completion or dictionary plugins for help.
* I'm using jekyll powering my blog, it would be better if the editor support post template.

If you are a developer like me, the following guide may works for you too.

## Installation

**Download from here: [Atom](https://atom.io/)**

Download the installer accroding to your platform. Atom supports all the operating systems including Windows/OSX/Linux.

![2017-02-15_13-43-01](https://ooo.0o0.ooo/2017/02/15/58a3eac1ec055.png)

## Packages & Theme

You can find all the packages I'm using at [my Atom personal page](https://atom.io/users/discountry/stars).

And I'm using [Material UI](https://atom.io/themes/atom-material-ui) theme.

## Hack on the init script

You can find your init script here:

![1](https://ooo.0o0.ooo/2017/02/15/58a3ec534d9f3.png)

Add there code in your file:

```coffee
atom.workspace.observeTextEditors (editor) ->
  defaultGrammarScopeName =  "source.gfm"
  unless editor.getPath()
    grammar = atom.grammars.grammarForScopeName defaultGrammarScopeName
    if grammar
      editor.setGrammar grammar
    else
      disposable = atom.grammars.onDidAddGrammar (grammar) ->
        if grammar.scopeName == defaultGrammarScopeName
          editor.setGrammar grammar
          disposable.dispose()

{TextEditor} = require 'atom'

atom.workspace.observeActivePaneItem (activePaneItem) ->
  if activePaneItem instanceof TextEditor
    editor = activePaneItem

    # https://github.com/atom/markdown-preview/blob/master/lib/main.coffee#L63
    # grammars = atom.config.get('markdown-preview.grammars') ? []
    grammars = ['source.gfm', 'text.md'] # markdown-preview's defaults include text files...
    return unless editor.getGrammar().scopeName in grammars

    # https://github.com/atom/markdown-preview/blob/master/lib/main.coffee#L68
    uri = "markdown-preview-enhanced://editor/#{editor.id}"
    previewPane = atom.workspace.paneForURI(uri)
    if previewPane?
      previewPane.activateItemForURI(uri)
    else
      activeView = atom.views.getView(editor)
      atom.commands.dispatch(activeView, 'markdown-preview-enhanced:toggle')
    editor.onDidDestroy ->
      for pane in atom.workspace.getPanes()
        for item in pane.items when item.getURI() is uri
          pane.destroyItem(item)
          break
```

This init script helps you to set the default language to markdown. And open the markdown preview automatically when you click on an existing markdown file.

## Blog settings

Open your markdown-writer package setting:

![2017-02-15_13-58-38](https://ooo.0o0.ooo/2017/02/15/58a3ee51d5019.png)

Set your local blog file folder and your blog website address:

![2017-02-15_13-59-14](https://ooo.0o0.ooo/2017/02/15/58a3ee5e92bf0.png)

## Using Atom

Press `ctrl+shift+p` to open the command window:

![2017-02-15_14-02-07](https://ooo.0o0.ooo/2017/02/15/58a3eed6b39f5.png)

Input 'post' and press `Enter` to create a new post, this command would generate the post meta for you:

![2017-02-15_14-03-45](https://ooo.0o0.ooo/2017/02/15/58a3ef3788508.png)

Click on your markdown file and the previewer will open automatically:

![2017-02-15_14-06-56](https://ooo.0o0.ooo/2017/02/15/58a3eff7ae875.png)

If you've installed all the packages I recommended, when you save your markdown file, the linter plugin will check your grammer and spelling:

![2017-02-15_14-09-44](https://ooo.0o0.ooo/2017/02/15/58a3f09e34c90.png)

And when you are typing English words, the [autocomplete-en-cn](https://atom.io/packages/autocomplete-en-cn) package would help you to choose the right word:

![2017-02-15_14-11-45](https://ooo.0o0.ooo/2017/02/15/58a3f12b91e1f.png)

That's all, enjoy!
