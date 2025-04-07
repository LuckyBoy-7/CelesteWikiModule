> sam在捣鼓Dialog百思不得其解拼尽全力无法战胜后表示: 我以后一定要做一个更加详细易懂的教程
>
> 我听到这句话后感觉天都塌了, 我们的教程不能被sam所理解, 那一定是写的还不够清晰易懂, 感谢sam旁敲侧击, 我马上就改😭

!!! note
    本文使用的环境为Windows 11

请先阅读[引言](https://wiki.biligame.com/celeste/%E6%96%B0%E6%89%8B%E5%BC%95%E5%AF%BC), 不管你是做着玩的还是想做出东西的, 制图都值得你认真对待,
在那之后制图一定会成为你[独特的回忆](is_that_a_dream.md)

## 建议

* 建议你下载的所有东西, 蔚蓝, 制图工具和素材等都放在英文路径下(如果用户名是中文那么桌面也算中文路径), 不然可能会有奇奇怪怪的bug
* 建议一开始的时候先过一遍教程有个印象, 虽然我知道你很想赶紧在制图器里摆几个砖然后开u, 但还是请你先忍一忍
  > K: 所有不看群文件教程就在群里问教程讲过的东西的人直接踢出群聊
* 建议学会使用搜索工具(比如[bing](https://cn.bing.com))和AI(比如deepseek), 什么? 你问我为什么deepseek没链接, 我说你自己去搜啊😡
* 建议善用`Ctrl + F`搜索和网页上方的全局搜索: 帮你快速定位想要的内容
* 建议善用翻译软件(比如[有道翻译](https://fanyi.youdao.com/download-Windows)), 遇到不会的单词时第一反应应该是查而不是问
* 建议学会提问, 只需要如下要素就会有大佬来帮你了🥰, 详情见wiki首页的`提问的艺术`
    * 努力的证明: 先动手再问, 不做伸手党
    * 详细的信息: 别惜字如金, 能提供越多清晰详细信息越好
        * 口头描述: 不管是需求还是游戏崩了都请描述清晰点
        * 截图
            * 下载snipaste这个软件
            * 用QQ截屏
            * `Shift + Win徽标键 + S`截屏
        * [log.txt](https://saplonily.top/celeste_common_issues/index.html#logtxt): 存放了游戏的调试信息, 方便在游戏崩溃时向群友求助(求助前确保所有Mod已是最新版且bug能稳定复现)
    * 谦卑的语气
    * 将心比心: 问问自己"如果我是大佬那么这个人提的问题值得我解答吗还是说得不断追问最后发现是别人自己🐷了结果别人也没学到东西自己也浪费了时间"
* 有些链接需要上Github, 国内裸连不稳定, 建议自行搜索解决方案, 或者下载相关加速工具(如FastGithub), 会科学上网更好

## 词汇解释

* `蔚蓝根目录`: `.../Steam/steamapps/common/Celeste/`, 游戏本体所在目录
* `Everest`: Mod加载器
* `Olympus`, `Celemod`: Mod管理器
* `Ahorn`, `Loenn`: 制图器
* `实体(Entity)`: 一般游戏内看得见能交互的都是, 比如新浪Seeker, 胖头鱼Puffer, 单向板JumpThru, 玩家Player本身, 刺Spike等等
* `触发器(Trigger)`: 一般指游戏内看不见的一块区域, 玩家在进入Trigger时它会改变游戏内的一些参数(比如游戏亮度, 玩家冲刺数)或是触发一些东西(比如让玩家立即死亡, 触发一段对话)
* `Player`: 指Madeline自身

## 前期准备

### 显示文件后缀/扩展名

请上网搜索`显示文件后缀名`并自行打开

文件后缀名一般用于表示文件的类型, 比如常见的音乐都是`.mp3`格式的, 常见的视频都是`.mp4`格式的, 常见的图片都是`.jpg` `.png`格式的, 要知道, 这些音乐, 视频, 图片啥的本质上都是一些0/1数据,
所以文件后缀名只是告诉电脑该怎么解释这些数据, 因此后续我们作图保存出来的文件格式是`.bin`的时候大伙儿也别太惊讶, 只是你做图的内容被存储为该格式了而已

## 初出茅庐

### 了解什么是Mod, 什么是Everest

要知道我们在电脑上运行一款软件本质上是跑了一段`.exe程序`, 游戏也是如此, 它会在程序运行后先加载需要的资源(比如启动蔚蓝的时候你看到小Madeline在跑说明就是在加载资源),
然后程序将使用这些资源来将`玩`的部分呈现给你

所以简单来说我们可以把蔚蓝分解成程序和资源两个部分:

#### 程序

* 核心程序: 资源的加载, 游戏逻辑的执行

#### 资源

* 代码`Code`: `Coders`写的各种Helper
* 美术`Graphics`: 游戏中你看得见的几乎都是, 就是一张张`.png`图片
* 音乐音效`Audio`: BGM, [玛德琳音](https://www.bilibili.com/video/BV1vrFieDEak)等等
* 文本`Dialog`: 对话, 文本本地化
* 过场`Lua Cutscenes`: 游戏中各种剧情的演绎
* 残影`Tutorials`: 9a凌波教程
* 地图`Maps`: 包含上述所有内容
* 等等

你会发现当我们把蔚蓝分解之后它几乎就是以全裸的形式呈现在我们面前, 我们几乎可以随意对它进行修改, 就好像我们自己是开发者一样, 事实也确实如此

但如果我们各改各的, 那势必会造成混乱, 所以需要一个中间商来制定一套规则, 只要大伙儿都遵循这套规则, 做出来的东西就方便传播和使用

这就是[Everest Mod加载器](https://github.com/EverestAPI/Everest)在干的事, 它修改了游戏的核心程序并在此基础上添加了更丰富的内容, 我们无需关心资源是怎么读取的,
只需要按它规定的把我们的Mod放到`.../Steam/steamapps/common/Celeste/Mods/`文件夹下, 然后把上文说的所谓的游戏资源也按它[规定的格式](../mod_structure.md)放在自己的Mod里该放的位置,
理论上你的Mod就能被正确的加载并运行

### 下载[Olympus](https://everestapi.github.io/)或[CeleMod](https://www.bilibili.com/video/BV1Hx4y1z7L5)并安装Everest

简单来说这俩就是Mod管理器, 方便我们下载和更新`Everest`, 启用和禁用Mod, 下载安装Mod, 设置Mod预设等等, 这里推荐小白用`Celemod`

### 下载[Loenn](https://github.com/CelestialCartographers/Loenn/releases)(或者群文件里下)

`Loenn`被称作制图器, 它的前辈是`Ahorn`, 它为作图提供了图形化界面, 让我们制作`Map`这个游戏内容方便不少, 要知道, 前文提及的`Code, Graphics, Audio, Dialog, Lua Cutscenes`都是为了`Map`
服务的, 所以`Loenn`可以说是制图的核心,
我们可以使用原版`Celeste`或是`Everest`和`Coders`额外提供的实体和Trigger来作图, `Coders`写的Mod一般会叫作`XXX Helper`

#### 注意事项

Loenn初次打开就报错的[解决方案](../loenn/loenn_issues.md)

## 小试牛刀

理论上, 现在你应该已经了解了什么是`Mod`, 什么是`Everest`, 并且已经下载好`Celemod`和`Loenn`并且`Loenn`能正常启动了

### 随便捣鼓下Loenn并保存生成`.bin`地图文件

可以先简略阅读下[教程](../overall.md)

或者你很急的话可按照如下操作光速出图:

1. 打开Loenn
2. 点击上侧导航栏`File -> New`新建一张图
3. 点击上侧导航栏`Room -> Add`, 在`Room Name`这一栏写一个不那么抽象的名字(建议使用数字/字母/下划线, 例如A_01), 然后点击下方`Create Room`来创建一个房间
4. 点击右侧`Rectangle`, 随便选个砖在房间里随便涂涂(主要是为了让Player有个落脚的地方)
5. 点击右侧`Placement`, 下方选择`Entities`, 在右下角搜索栏输入`Player`, 选择`Player (Spawn Point)`, 并在房间内放置至少一个重生点(Player无法进入没有重生点的房间)
6. 点击右侧`Placement`, 下方选择`Entities`, 在右下角搜索栏输入`Crystal Heart`, 选择`Crystal Heart`, 并在房间内放置一个水晶之心
7. 点击上侧导航栏`Map -> Metadata`, 把`General`这一栏的`End Level on Heart`勾上, 点击`Save changes`
8. 最后`Ctrl + S`保存地图到随便一个位置(重点是你知道存哪儿了), 格式为`.bin`

### [了解Mod的结构](../mod_structure.md)

我们要遵循前文所提到的`Everest`所定的规范, 即我们的Mod应该有哪些东西, 层次是怎样的, 这样我们的Mod才能被正确加载, 而且方便传播和学习(俗称拆包), 其实是方便抄(bushi

### 丰富地图内容

理论上, 现在你应该已经做好了一个流程勉强能跑通的图, 并且Mod的格式也没什么问题, 接下来我们会丰富游戏各方面的内容(有些不是必须的)

#### 建议

* 下载`CelesteTas`这个Mod, 在游戏内按`Ctrl + B`就能查看Entity和Trigger碰撞箱, 方便制图
* 下载[官图图片素材](../../mods/resources.md), 以后肯定用得上
* 上网了解下什么是相对路径和绝对路径, 当使用自定义实体替换贴图的时候填写的路径几乎都是相对路径, 一般都是相对于官图素材里`Gameplay`里的一些文件夹的路径
* 了解[啥是Flag](https://www.bilibili.com/video/BV1p44y1S79A), 简单来说就是带名字的开关, 我们一般使用某个实体或者Trigger触发某个flag, 以触发对应flag实体(例如`FlagSwitchGate`),
  做到一对一的交互
* 了解[啥是XML](https://saplonily.top/celeste_mod_tutorial/other/xml-speedrun/), 方便你以后改`XML`
* 碰到问题时可以查看[Loenn常见问题](../loenn/faq.md)
* 不会就抄别人的Mod, 抄多了就会了

#### [本地化你的地图](../dialog.md)

此时你会发现你地图的名字还没有取, 吃心文本等显示的都是一些被括号包裹键名如`{XXX_Tutorial_CelesteWikiTutorial}`, 这就需要你自己去配置对应的内容

#### [设置选关界面图标](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#overworld)

#### 修改地图的[元数据Metadata](../loenn/metadata.md)

- 游戏外: 修改章节等各种图标
- 游戏内: bgm, 核心模式, 擦除方式, 入场方式, 滤镜, 泛光, 冲刺模式, 添加自定义xml, 吃心结算, 结算背景图等

#### 设置存档点(章节)的插图

[看电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程

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


## 进阶

### 怎么改背景

详情见[Stylegrounds](../loenn/stylegrounds.md)

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

### 怎么写自定义Entity和Trigger

详情见[Code](../code.md)

### 怎么发布我的Mod, 又该注意些什么

详情见[发布Mod](../publish_mod.md)
