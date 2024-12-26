## [B站 Wiki 的Dialog教程](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B)

## [Everest Wiki 的Dialog教程](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue)

> Dialog:
> 顾名思义就是游戏中一切跟文本有关的东西, [主要包括](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E6%96%87%E6%9C%AC%E4%BD%BF%E7%94%A8)
> 
> * 对话(人物对话文本)
> * UI(例如开始界面的文本, Mod选项界面的文本, 暂停界面的文本, 选关界面的文本, 明信片等)
>
> 你要知道游戏中的每一段文本都对应一个唯一的`id`, 叫做**键**, 或者说`key`, 游戏就是通过相同的`key`访问不同的语言文件来实现本地化的工作,
> 我们以`Celeste/Content/Dialog/English.txt`下的`Main Menu` 部分为例, 是不是和你游戏开始界面上显示的一样呢
> ```yaml
> # Main Menu
>     MENU_DEBUG=		~DEBUG~
>     MENU_BEGIN=		CLIMB
>     MENU_PICO8=		PICO-8
>     MENU_OPTIONS=	Options
>     MENU_CREDITS=	Credits
>     MENU_EXIT=		Exit
> ```
> 知道原理后我们就可以添加新的`key`来生成我们需要的文本, 甚至是替换官图文本

 首先在你Mod根目录下创建一个Dialog**文件夹**形成类似`Celeste/Mods/你的mod名/Dialog/`的目录结构

 接着你就可以创建各种`.txt`文件来做不同语言的翻译和添加文本的工作[详情见Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#setting-up-the-dialogue-file), 但最常见的是`English.txt`和`Simplified Chinese.txt`

 最简单粗暴识别哪些东西是键名的方法就是那一串东西是不是被大括号`{}`或者中括号`[]`包着, 常用在[修改自己地图名称和吃心文本上](https://github.com/EverestAPI/Resources/wiki/map-metadata#map-name)

 如果要添加自定义文本键名一定要长~, 不然很可能和别人重了出问题, 一般建议是`作者名_图名_键名`, 此时再通过如下`trigger和entity`来触发不同对话

*  Minitextbox Trigger(trigger)
*  Everest Dialog Cutscene(trigger)
*  Everest Custom NPC(entity)

## 注意事项

* `=`左边不要有空格

## 常用部分

* [文字效果(抖动, 改色, 变速等)](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E6%96%87%E5%AD%97%E6%95%88%E6%9E%9C)
* [对话效果](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E5%AF%B9%E8%AF%9D%E6%95%88%E6%9E%9C)
* [人物表情](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E4%BA%BA%E7%89%A9%E8%A1%A8%E6%83%85)(也可以在控制台输入`portraits`来查看)
* [自定义人物对话头像](https://github.com/EverestAPI/Resources/wiki/Custom-Portraits)
* [添加对话emoji](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#custom-emotes)
把你的emoji图片放到`Graphics/Atlases/Gui/emoji`目录下(`.png`格式的), 对话对应文本为`:你的图片相对路径(不带.png):`例如`:LuckyCelesteMod/shock:`
* [Lua Cutscene过场动画(即配合对话的演出)](lua_cutscene.md)
* [明信片](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=179)

## QA

 Q: [为什么我文本缺字了](https://github.com/EverestAPI/Resources/wiki/Adding-Custom-Dialogue#custom-font-loading)

 A: 因为蔚蓝字库里没有, 请自己生成, [示例](https://www.bilibili.com/video/BV1A14y1W7hr/?spm_id_from=333.788&vd_source=217bacbee37820b5bf3ed2f4fb8f6c94)