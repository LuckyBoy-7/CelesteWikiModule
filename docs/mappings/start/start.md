请先阅读[引言](https://wiki.biligame.com/celeste/%E6%96%B0%E6%89%8B%E5%BC%95%E5%AF%BC)

这一章尽量让你做出一张能玩的图, 并且对蔚蓝的Mod制作有个大致的认识(哪怕只是来做皮肤什么的也是建议阅读的)

## 词汇解释

碰到不懂的词可以来这翻翻看

* `蔚蓝根目录`: `.../Steam/steamapps/common/Celeste/`
* `Everest`: Mod加载器
* `Olympus`, `Celemod`: Mod管理器
* `Ahorn`, `Loenn`: 制图器
* `实体(Entity)`: 一般游戏内看得见的都是, 比如新浪Seeker, 胖头鱼Puffer, 单向板JumpThru, 玩家Player本身, 刺Spike等等
* `触发器(Trigger)`: 一般指游戏内看不见的一块区域, 玩家在进入Trigger时它会改变游戏内的一些参数(比如游戏亮度, 玩家冲刺数)或是触发一些东西(比如让玩家立即死亡, 触发一段对话)
* `Player`: 指Madeline自身

## 前期准备

### 显示文件后缀名

请上网搜索`显示文件后缀名`并自行打开

文件后缀名一般用于表示文件的类型, 比如常见的音乐都是`.mp3`格式的, 常见的视频都是`.mp4`格式的, 常见的图片都是`.jpg` `.png`格式的, 要知道, 这些音乐, 视频, 图片啥的本质上都是一些0/1数据,
所以文件后缀名只是告诉电脑该怎么解释这些数据, 因此后续我们作图保存出来的文件格式是`.bin`的时候大伙儿也别太惊讶, 只是你做图的内容被存储为该格式了而已

## 初出茅庐

### 了解什么是Mod, 什么是Everest

Mod和游戏本体实际上并没有太大差别, 都只是计算机上的一段段程序而已, 所以写Mod更像是玩家用爱发电帮开发者补充游戏内容(代码`Code`, 美术`Graphics`, 音乐音效`Audio`, 文本`Dialog`, 过场
`Lua Cutscenes`, 地图`Maps`等),
但是这些`新的游戏内容的加载`是如何实现的呢, 总不能让玩家自己写代码吧, 不仅门槛高, 而且大伙儿写的都不一样, 所以就需要有一个团队来专门干这件事,
于是[Everest Mod加载器](https://github.com/EverestAPI/Everest)横空出世! 下载(一般我们用Mod管理器来下载)之后我们运行`Celeste`本质上就是运行了`Everest`, `Everest`像操控傀儡般保证原版游戏运行的同时,
加入我们想要的自定义内容,
此时我们无需关注那些琐碎的细节,
只需要按它规定的把我们的Mod放到`.../Steam/steamapps/common/Celeste/Mods/`文件夹下, 然后把上文说的所谓的游戏内容也按它规定的格式放在自己的Mod里该放的位置, 理论上就能玩了

### 下载[Olympus](https://everestapi.github.io/)或[CeleMod](https://www.bilibili.com/video/BV1Hx4y1z7L5)并安装Everest

简单来说这俩就是Mod管理器, 方便我们下载和更新`Everest`, 启用和禁用Mod, 下载安装Mod的, 设置Mod预设等等, 这里推荐小白用`Celemod`

### 下载[Loenn](https://github.com/CelestialCartographers/Loenn/releases)(或者群文件里下)

`Loenn`被称作制图器, 它的前辈是`Ahorn`, 它为作图提供了图形化界面, 让我们制作`Map`这个游戏内容方便不少, 要知道, 前文提及的`Code, Graphics, Audio, Dialog, Lua Cutscenes`都是为了`Map`
服务的, 所以`Loenn`可以说是制图的核心,
我们可以使用原版`Celeste`或是`Everest`额外提供的实体和Trigger, 同时它也让我们得以使用所谓的`Helper`(即其他Coder所写的Mod, 里面包含了他们写的新实体(
例如改变游戏机制的Trigger和不损失速度的羽毛), 分享出来造福全Mapper的)里的实体和Trigger, 以作出更丰富精彩的Mod图

#### 注意事项

Loenn初次打开就报错的[解决方案](../loenn/loenn_issues.md)

## 小试牛刀

理论上, 现在你应该已经了解了什么是`Mod`, 什么是`Everest`, 并且已经下载好`Celemod`和`Loenn`并能正常启动了, 现在我们的制图之旅算是正式开启哩!

### 随便捣鼓下Loenn并保存生成`.bin`地图文件

可以先简略阅读下[教程](../overall.md)

或者你很急的话可按照如下操作光速出图:

1. 打开Loenn
2. 点击上侧导航栏`Room -> Add`, 在`Room Name`这一栏写一个不那么抽象的名字(建议使用数字/字母/下划线, 例如A_01), 然后点击下方`Create Room`来创建一个房间
3. 然后点击右侧`Rectangle`, 随便选个砖在房间里随便涂涂(主要是为了让Player有个落脚的地方)
4. 然后点击右侧`Placement`, 下方选择`Entities`, 在右下角搜索栏输入`Player`, 选择`Player (Spawn Point)`, 并在房间内放置至少一个重生点(Player无法进入没有重生点的房间)
5. 然后点击右侧`Placement`, 下方选择`Entities`, 在右下角搜索栏输入`Crystal Heart`, 选择`Crystal Heart`, 并在房间内放置一个水晶之心
6. 点击上侧导航栏`Map -> Metadata`, 把`General`这一栏的`End Level on Heart`勾上, 点击`Save changes`
7. 最后`Ctrl + S`保存地图到随便一个位置(重点是你知道存哪儿了), 格式为`.bin`

### [了解Mod的结构](../mod_structure.md)

我们要遵循前文所提到的`Everest`所定的规范, 即我们的Mod应该有哪些东西, 层次是怎样的, 这样我们的Mod才能被正确加载, 而且方便传播和学习(俗称拆包), 其实是方便抄(bushi

### 丰富地图内容

理论上, 现在你应该已经做好了一个流程勉强能跑通的图, 并且Mod的格式也没什么问题, 接下来我们会丰富游戏各方面的内容(有些不是必须的)

#### 建议

* 下载`CelesteTas`这个Mod, 在游戏内按`Ctrl + B`就能查看Entity和Trigger碰撞箱, 方便制图
* 下载[官图图片素材](../../mods/resources.md), 以后肯定用得上
* 上网了解下什么是相对路径和绝对路径, 这在替换图片, 选择的路径几乎都是相对路径, 一般都是相对于官图素材里`Gameplay`里的一些文件夹的路径
* 了解[啥是Flag](https://github.com/EverestAPI/Resources/wiki/FAQ#what-are-flags)
* 碰到问题时可以查看[Loenn常见问题](../loenn/faq.md)
* 不会就抄别人的Mod, 抄多了就会了

#### [本地化你的地图](../dialog.md)

#### 修改地图的[元数据Metadata](../loenn/metadata.md)

- 游戏外: 修改章节等各种图标
- 游戏内: bgm, 核心模式, 擦除方式, 入场方式, 滤镜, 泛光, 冲刺模式, 添加自定义xml, 吃心结算, 结算背景图等

#### [设置选关界面图标](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#overworld)

#### 设置存档点(章节)的插图

[看电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程

#### 设置[背景Stylegrounds](../loenn/stylegrounds.md)

#### 为游戏添加更多自定义实体丰富内容

你可以通过如下渠道下载别的Helper来拓展更多的功能(可能是扩展Loenn的, 也可能是扩展游戏的), 或者一些素材包(本质上也是Mod), 一般下个草莓酱大部分Helper就不缺了😋

* 使用`Olympus`或者`Celemod`
* [香蕉网](https://gamebanana.com/mods/games/6460), 登不上可以挂梯子或者尝试[替换Google CDN](https://www.bilibili.com/opus/959792914272092167)来连接,
  或者直接使用[WEG的镜像网站](https://celeste.weg.fan/)
* 制图群群文件(制图群QQ: [633125440](https://qm.qq.com/q/XG1hPIMKQg))

常见问题([解决方案](../loenn/faq.md)):

* 不知道某个实体叫什么
* 不知道自己缺什么Helper
* 不知道用什么实体实现某个功能
* ...

### 遇到报错

当你遇到报错时, 大概率是由Helper引起的, 但也别太慌张, 更别喷原作者, mapper和coder之间要相互体谅,
所以你可以先尝试[自己解决问题](https://saplonily.top/celeste_common_issues/index.html)

如果解决了(或者说知道为什么, 但是只能等作者修bug): 可以有能力的话建议向作者反馈这个bug
如果没解决: 那么务必准备好`log.txt`, 并且有能力的话请详细描述复现bug所需的步骤等等

## 进阶

### 怎么修改房间属性

详情见[房间属性](https://wiki.biligame.com/celeste/%E6%88%BF%E9%97%B4%E5%B1%9E%E6%80%A7)

详情见[Metadata](../loenn/metadata.md)

### 怎么改对话, 地图名字等

详情见[Dialog](../dialog.md)

### 怎么做皮肤, 改贴图等

详情见[Graphics](../graphics.md)

### 怎么运镜

详情见[Camera](../camera.md)

### 怎么写音乐音效等

详情见[Audio](../audio.md)

### 怎么写过场动画等

详情见[LuaCutscene](../lua_cutscene.md)

### 怎么写自定义Entity和Trigger, 操控游戏逻辑等

详情见[Code](../code.md)

### 怎么发布我的Mod, 又该注意些什么

详情见[发布Mod](../publish_mod.md)
