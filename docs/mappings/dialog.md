## 部分引用

* [B站 Wiki 的Dialog教程](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B)
* [Everest Wiki 的Dialog教程](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue)
* [[Celeste蔚蓝]作图教程第四章-背景, 元数据, 文本教程](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=158)

## 什么是Dialog
 顾名思义就是游戏中一切跟文本有关的东西, [主要包括](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E6%96%87%E6%9C%AC%E4%BD%BF%E7%94%A8)

 * 对话(人物对话文本)
 * UI(例如开始界面的文本, Mod选项界面的文本, 暂停界面的文本, 选关界面的文本, 明信片等)

 你要知道游戏中的每一段文本可能对应不同的语言, 所以该怎么组织这些文本呢

 官方的做法是一种语言对应一个`.txt`, 一段文本对应一个唯一的`id`, 叫做**键**, 或者说`key`, 游戏就是通过你使用的语言来访问对应的文件, 用`key`来访问对应的文本来实现本地化的工作

 我们以 `Celeste/Content/Dialog/English.txt` 下的 `Main Menu` 部分为例(找不到可以`Ctrl + F`搜索), 看看这是不是和你游戏开始界面上显示的一样呢(左边是`key`, 右边是
`对应语言的文本`)

 ```
  # Main Menu
  MENU_DEBUG=		~调试~
  MENU_BEGIN=		攀登
  MENU_PICO8=		PICO-8
  MENU_OPTIONS=	    选项
  MENU_CREDITS=	    主创人员
  MENU_EXIT=		退出
 ```
 知道原理后我们就可以添加新的`key`来生成我们需要的文本, 甚至是替换官图文本(同名的key后加载的的会覆盖先加载的), 在使用上我们只需要写好对话, 在地图里放个触发对话的Trigger, 然后填入对应的`key`就好了

首先在你Mod根目录下创建一个Dialog**文件夹**形成类似`Celeste/Mods/你的mod名/Dialog/`的目录结构

接着你就可以创建[各种语言的`.txt`](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#setting-up-the-dialogue-file)
文件来做不同语言的翻译和添加文本的工作, 但一般加英文 `English.txt` (必备)跟中文 `Simplified Chinese.txt` 就够了

写好对应的文本后在对应Trigger中填入对应`id/key`即可

## 修改自己地图名称和吃心文本
* [教程 by Everest](https://github.com/EverestAPI/Resources/wiki/map-metadata#map-name)
* [教程 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=174)

最简单粗暴识别哪些东西是键名的方法就是那一串东西是不是被大括号`{}`或者中括号`[]`包着, 所以照抄就好了, 例如

![localization](../assets/mappings/dialog/localization/localization0.png){style="width: 200px; title="123"}
![localization](../assets/mappings/dialog/localization/localization3.png){style="width: 200px; title="123"}

![localization](../assets/mappings/dialog/localization/localization1.png){style="width: 350px; title="123"}
![localization](../assets/mappings/dialog/localization/localization4.png){style="width: 350px; title="123"}

![localization](../assets/mappings/dialog/localization/localization2.png){style="width: 450px; title="123"}
![localization](../assets/mappings/dialog/localization/localization5.png){style="width: 300px; title="123"}

```
Lucky_Tutorial=教程小标题
Lucky_Tutorial_CelesteWikiTutorial=教程主标题
poem_Lucky_Tutorial_CelesteWikiTutorial_A=你好, 我是爱心
```

如果要添加自定义文本键名一定要长~, 不然很可能和别人重了出问题, 一般建议是`作者名_图名_键名`

## 常用对话Trigger

* Minitextbox Trigger(trigger)
* Everest Dialog Cutscene(trigger)
* Custom NPC(entity)

## 注意事项

* `=`左边不要有空格

## 常用部分

推荐下载 [VSCode](https://code.visualstudio.com/) 并安装 `Celeste Dialog Highlighter` 插件

* [文字效果(抖动, 改色, 变速等)](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E6%96%87%E5%AD%97%E6%95%88%E6%9E%9C)
* [对话效果](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E5%AF%B9%E8%AF%9D%E6%95%88%E6%9E%9C): 翻转头像, 对话框置底, 引用等
* [人物表情](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E4%BA%BA%E7%89%A9%E8%A1%A8%E6%83%85)(也可以在控制台输入`portraits`来查看)
* [添加对话emoji](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#custom-emotes)
  把你的emoji图片放到`Graphics/Atlases/Gui/emoji`目录下(`.png`格式的), 对话对应文本为`:你的图片相对路径(不带.png):`例如`:MyCelesteMod/shock:`
* [Lua Cutscene过场动画(即配合对话的演出)](lua_cutscene.md)
* [明信片](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=179)

### 自定义人物对话头像
* [by Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Custom-Portraits)
* [[Celeste蔚蓝]作图教程第五章B面-自定义对话人物与实体贴图修改(xml进阶篇)](https://www.bilibili.com/video/BV1cP4y1m7B2)
* [素材替换](./graphics/replace_assets.md)



## FAQ

### [为什么我文本缺字了](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#custom-font-loading)

因为蔚蓝字库里没有, 请自己按[示例](https://www.bilibili.com/video/BV1A14y1W7hr)生成([字库生成网站](https://maddie480.ovh/celeste/font-generator)), 或者你直接依赖[`Extended Chinese Font`](https://gamebanana.com/mods/53736)/[`Chinese Font Pack`](https://gamebanana.com/mods/493138)这个Mod, 大概率不会缺字, 但可能还是会缺

