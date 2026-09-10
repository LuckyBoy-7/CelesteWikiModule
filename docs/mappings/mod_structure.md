## 引用

* [everest.yaml](https://github.com/EverestAPI/Resources/wiki/everest.yaml-Setup)
* [Mod结构(摘自b站 Wiki)](https://wiki.biligame.com/celeste/Mod%E7%BB%93%E6%9E%84)
* [Mod结构(摘自Everest Wiki)](https://github.com/EverestAPI/Resources/wiki/Mod-Structure)
* [【Celeste蔚蓝】作图教程第一章-路径](https://www.bilibili.com/video/BV1tR4y1X7wu)
* [【Celeste蔚蓝】二代作图教程 1-5 基础路径](https://www.bilibili.com/video/BV1394y1C7Fy)
* [Mod结构 by Saplonily](https://saplonily.top/celeste_modding_tutorial/mapping/mod_structure/)
* [Mod Structure Tutorial by Snip](https://gist.github.com/SnipUndercover/7ca0051ed649a32aac46ae2a9e034e37)
* [Mod 结构 by 底龙](https://uddrg.notion.site/UnderDragon-s-Partial-Wiki-2737f4f27e63808582b3f0689163d8f9?p=2737f4f27e63807cb0fbcc838765ab5b&pm=s)

本篇会讲解一个 Mod 的结构大概是怎么样的, Everest 是如何加载我们的 Mod 的

如果你很急, 那么你在 Loenn 里作好图之后可以直接把保存后的 `.bin` 文件丢在蔚蓝根目录的 Mods 文件夹下, 此时打开游戏理论上你就能看到你作的图了,
但是这样你的 Mod 会被视作 `Uncategorized 未分类的`, 因为 Everest 只知道这有一张图, 但是其他啥也不知道, 所以你才需要学习 Mod 结构告诉 Everest 你的 Mod 长啥样

一个比较标准的 Mod 大概长下面这个样子(用 `{}` 包裹的部分都是占位符, 你想取什么名字都可以)

* 📁 Celeste
    - 📁 Mods
        - 📁 {MyMod}
            - 📄 everest.yaml
            - 📁 Maps
                - 📁 {作者名}
                    - 📁 {项目名}
                    > 这里放地图 bin 文件
                        - 📄 {MyMap}.bin
            - 📁 Dialog
                - 📄 English.txt
                - 📄 Simplified Chinese.txt
            - 📁 Graphics
                - 📁 Atlases
                    - 📁 Gui
                    > 主要放置游戏 UI 相关的图片素材
                    - 📁 Gameplay
                    > 主要放置游戏关卡中的各种图片素材
            - 📁 Audio
            > 放置你的自定义音乐/音效, 可以有多对(每对名字要相同, 名字本身无特殊要求, 但是 bank 中的 event 建议套路径防止覆盖)
                - 📄 {BankName}.bank 
                - 📄 {BankName}.guid.txt 
            - 📁 Tutorials

首先我们需要一个文件夹来存放我们的地图, 素材和其他的各种数据, 后续我们会将它们[打包](#pack)并[上传至香蕉网](publish_mod.md)以供别人游玩

以下列出了几个在 Mod 里经常出现的文件(夹), 你可以参考一下

> 你可以直接搭配着游戏本体结构 `../Steam/steamapps/common/Celeste/Content/` 或者其他 Mod 结构一起看
> 
> 你可能需要先下载好[官图图片解包素材](./useful_links.md)以了解 Graphics 文件夹中文件的具体结构
 
| 文件/文件夹       | 是否必须 | 作用             |
|:-------------|:-----|:---------------|
| everest.yaml | √    | 这是Mod的身份证      |
| Maps         | √    | 放地图文件          |
| Dialog       | ×    | 放对话, 本地化文本等    |
| Graphics     | ×    | 放自定义贴图以及自定义xml |
| Audio        | ×    | 放自定义音乐         |
| Tutorials    | ×    | 放自定义残影动画       |

下面开始逐一介绍

## everest.yaml

它是一个 `.yaml` 格式的文件, 你可以简单把它当作有一定格式规范的 `.txt`, 你可以用记事本打开编辑,
至于它的作用, 当然就是用来告诉 Everest 有关你这 Mod 的所有信息, 所以下面举例来解释里面各个参数代表的含义

首先这是最精简的 `everest.yaml` 格式

```yaml
- Name: MyMod
  Version: 1.0.0 
  Dependencies:
    - Name: Everest
      Version: 1.4000.0
```

### Name

你的 Mod 的名字, 用英文, Everest 总得知道你 Mod 叫什么吧

### Version

你的 Mod 的版本号, 你每次更新 Mod 的时候都要调整这些数字, 这被称为版本迭代, 一次更新对应一个版本, 这样才不会出现同一个版本有两个不同 Mod 的尴尬情况, 而且这可能导致其他人无法及时更新对应的 Mod

#### 举例

一般修修 Bug 啥的小更新会在第一位 `+1` 变成 `1.0.1`, 一般加一些新东西的小更新会在第二位 `+1` 变成 `1.1.0`, 一般变化巨大的更新会在第三位 `+1` 变成 `2.0.0`, 一般都是改第一或者第二位

这里举个例子: 今天我第一次上传Mod, 版本号是 `1.0.0`, 第二天发现有些地方的刺摆的不美观, 于是修了下重投, 版本号是 `1.0.1`, 第三天发现有个地方有鸡, 修了下重投, 版本号是 `1.0.2`, 第四天心血来潮,
给自己的图又加了几面, 这时候版本号应该是 `1.1.0`, 第五天 bro 你做了个草莓酱(或者不开玩笑的话就是你把整张图重做/翻新了), 这时候版本号应该是 `2.0.0`, 大概是这样没错(, 反正你不用特别在意自己写的对不对, 关键是更新前后版本号是递增的即可

### Dependencies

你的 Mod 的依赖, 即你这个 Mod 使用了哪些 Mod 的东西, 可能是 Code(也就是别人写的各种各样的实体, 即所谓的 Helper, 也是 Mod), 也可能是美术素材(有的 bro 会依赖草莓酱💀),
这样当别人使用 Mod 管理器下载你的 Mod 的时候也会自动下载你依赖的 Mod, 缺依赖或者版本低了 Everest 都会警告玩不了, 如果没问题则被依赖的 Mod 会先被加载, 总之 Everest 总得知道你的 Mod 需要什么 Mod 吧

!!!提示
    现在 Loenn 可以自动加依赖了, 详情见顶部导航栏 `Map/Dependencies` 选项

稍微复杂点的 `everest.yaml` 举例

``` yaml
- Name: YourModName
  Version: 1.0.0
  DLL: Code/YourCode.dll
  Dependencies:
    - Name: Everest
      Version: 1.0.0
    - Name: FakeModForSecondDLL
      Version: 1.0.0
    - Name: SomeHelper
      Version: 1.0.0
  OptionalDependencies:
    - Name: Randomizer
      Version: 1.0.0

- Name: FakeModForSecondDLL
  Version: 1.0.0
  DLL: Code/YourCode2.dll
  Dependencies:
    - Name: Everest
      Version: 1.0.0
```

### DLL

你编译出来的 DLL 的位置, 如果你会 Code, 写了自定义实体或者别的什么功能, Everest 总得知道你 DLL 在哪儿吧

### OptionalDependencies

跟 `Dependencies` 同理, 就是多了 `Optional 可选的`, 也就是说这个依赖缺了/没开也能玩, 但如果开了, 那依赖的版本不能低于 `OptionalDependencies` 里写的版本(跟 `Dependencies` 同理), 且在你的 Mod 加载之前加载, 

你就把它想象成 `Dependencies`, 但是缺了依赖也没事就行

常用于:

* 你做了一个皮肤 Mod, 但是你只想这个皮肤应用于某两张图, 我们就需要画素材或者写 .xml 去覆盖别人的东西(这就需要人家 Mod 先加载), 而且别人可能只玩其中一张图, 那么下你皮肤就不会同时把两张图下过来, 更灵活
* 比如你整了个美术很好的图, 然后有一个 Helper 能让你的光效锦上添花, 但是用了之后太卡怎么办, 有的机子可能直接跑不动, 此时你可以选择将这个 Helper 作为可选依赖, 同时在入场添加一张明信片, 告知玩家`开启 xxx Helper 将获得更佳体验`
* 你写 Code Mod 给其他 Mod 做适配的时候需要别人的 Mod 先加载

## Maps

放地图资源的

这里假设我们的 Mod 名称叫做 `MyMod`, 我们的 Mod 要放到 Mods 文件夹内, 然后假设你的地图文件为 `MyFirstMap.bin`, 那么你的 Mod 文件路径大概长这样

* 📁Celeste
    - 📁Mods
        - 📁OtherMod1
            - ...
        - 📁OtherMod2
            - ...
        - 📁MyMod  // 你的 Mod
            - 📄everest.yaml
            - 📁Maps 
                - 📄MyFirstMap.bin  // A 面
                - 📄MyFirstMap-B.bin  // B 面
                - 📄MyFirstMap-C.bin  // C 面
                - 📄MySecondMap.bin  // 如果名字不一样地图就会被分成多个模块, 就像官图 1a, 2a ... 8a 一样

## Dialog

放文本资源的, [详情见](./dialog/dialog.md)

## Graphics

放图片资源的, [详情见](./graphics/graphics.md)

## Audio

放音频资源的, [详情见](./audio/audio.md)

## Tutorials

放残影的, [详情见](./ghost_player_playback.md)

<a id="conflict"></a>

## [了解 Everest 处理这些文件的逻辑](https://github.com/EverestAPI/Resources/wiki/FAQ#why-do-i-have-to-include-my-nickname-and-modname-in-my-folders)

在开始了解这一概念之前, 请先在制图群(QQ: 633125440)群文件里下载好官图图片素材, 
叫做 `[图像类] Celeste Graphics Dump v1400`, 它的结构如下:

* 📁 <font color=green>[图像类] Celeste Graphics Dump v1400</font>
    * 📁 Gameplay
    * 📁 Gui
    * 📁 Portraits
    * 📁 ...

此时你可以观察一下你蔚蓝根目录, 它的的结构如下

* 📁 Celeste
    * 📁 <font color="orange">Content</font>
        * 📁 Graphics
            * 📁 <font color=green>Atlases</font> (对应官图解包素材根目录)
                * 📁 Gameplay
                * 📁 Gui
                * 📁 Portraits
                * 📁 ...

你会发现, 欸, 这里的 `Atlases` 不就对应官图解包后的素材吗

这时你再对照你自己的 Mod 结构看看, 你就会发现...

* 📁 Mods
    * 📁 <font color="orange">你的 Mod</font>
        * 📁 Graphics
            * 📁 <font color=green>Atlases</font>
                * 📁 Gameplay
                * 📁 Gui
                * 📁 Portraits
                * 📁 ...

这也太像了吧, 简直完全一样啊!

事实也确实如此, Everest 会先从 <font color="orange">Content</font> 目录开始加载原版资源, 
然后再从 <font color="orange">你的 Mod </font> 目录开始加载你的资源, 所以对于相同路径的内容会发生完全覆盖, 
即你放置的素材会覆盖官图的

所以做蔚蓝 Mod 的一个通用心法就是: 虽然我在做 Mod, 但是可以想象自己就是蔚蓝制作组在开发蔚蓝, 
我们放置的文件路径跟官图的完全一样, 没有任何问题, 因为放了之后也会覆盖掉官图对应位置的素材,
从某种意义上来说这就像是我们将那个素材更换掉了, 但其实是覆盖掉了

除了 `Graphics` 外, 其他类型的 Mod 资源也是同理, 比如 `Maps`,  `Dialog`,  `Audio`, `Tutorials` 等, 
做好合并覆盖工作后 Everest 就可以集中处理这些资源了

### 外部覆盖和内部覆盖

对于大部分文件来说同路径会发生外部覆盖, 比如图片 A 和图片 B 同路径会相互覆盖, A 先加载, 那最后活着的图片就是 B, B 先加载, 那最后活着的图片就是 A,
这里是整个文件都被替换掉了, 所以叫做外部覆盖

但是对于 `Dialog` 里的文件和 `.xml`, `.bank` 等文件来说是内部覆盖, 因为里面的内容才是本体, 比如

* 在 `Dialog` 文件夹中大家都放了 `English.txt`, 总不能只用你的 dialog 或者我的 dialog, 所以其实都会被加载,
而其中的 `Dialog ID` 会相互覆盖
* 对 `.xml` 来说则是里面的标签名相互覆盖
* 对 `.bank` 来说则是里面的 `event` 路径相互覆盖

当你理解了上面提到的这些, Mod 中的很多东西就会立即变得清晰明了, 比如:

* 为什么别人的素材我能用, 因为合并完都是一个东西
* 为什么要加依赖, 因为能在 Loenn 里使用是因为你有这个 Mod 而且启用了, 而打包出去别人用的时候别人可能没有对应 Mod 或者没开
* 为什么文件夹要套多层, 为什么 Dialog 的 key 要写的很长, 为什么 Fmod 里 bank 中的 event 也要套路径, 因为合并完可能发生覆盖

> 所以你可能意识到了作者名 + 项目名的套文件夹规范, 作者名_项目名_Dialog_ID 的 Dialog ID 规范, 作者名/项目名/.../event 的 event 路径规范等等,
> 本质上只是用尽可能少的文件夹保证 Mod 素材不冲突, 所以其实你完全可以取一个比较特殊的不容易撞的名字只套一层即可

因为怕大家还是听不懂, 所以接下来将简单做个说明

### 以 Dialog 为例

如果别人写了

```ini
a=我的天
b=真的是你呀
```

你写了

```ini
b=哎哟
c=你干嘛
```

因为你这里的 `b` 跟别人的同路径, 所以如果此时别人 Mod 先加载, 则最后会变成下面这样, 这意味着别人的图会加载到错误的对话

```ini
a=我的天
b=哎哟
c=你干嘛
```

我们可以通过这个性质更改官图/Mod 文本, 比如 [FunnyDialog](https://www.bilibili.com/video/BV1Pz421i7SZ) 的应用

### 以 Sprites.xml 为例

```xml title="假设这是官图 Sprites.xml" hl_lines="2"

<Sprites>
    <a path="a" start="a">
    </a>
    <b path="b" start="b">
    </b>
</Sprites>
```

如果你写了

```xml title=" 路径: Mods/MyMod/Graphics/Sprites.xml" hl_lines="2"

<Sprites>
    <a path="b" start="b">
    </a>
    <c path="c" start="c">
    </c>
</Sprites>
```

那么恭喜你, 所有玩家开启你的 Mod 之后, 合并后的 `Sprites.xml` 都会变成下面这样

```xml hl_lines="2"

<Sprites>
    <a path="b" start="b">
    </a>
    <b path="b" start="b">
    </b>
    <c path="c" start="c">
    </c>
</Sprites>
```

不过反过来说, 如果你知道了覆盖是如何运作的, 那么只要你把标签名字取特殊一点就基本能保证不会发生覆盖和污染了, 
比如很多 Helper 作者如果要给自己的某些实体加自定义皮肤, 又想让皮肤可以配置, 一般都是用[这种方法](https://www.bilibili.com/video/BV1uUHYzLEu5/?t=3232),
之后你自己要更换皮肤的话把配置抄过来改下标签名就好了

避免路径污染还有第二种方法, 就是你把上面写的 `Sprites.xml` 移动到一个特殊路径下(不发生外部覆盖即可), 
比如 `Mods/MyMod/Graphics/MyMod/Sprites.xml`, 然后在 Loenn 元数据里的 `Sprites.xml` 栏目选择这个 XML 即可, 
这表示只有在运行这张图的时候才会用这个 XML 覆盖官图的 `Sprites.xml`, 这样自然就不会污染其他 Mod 了

!!! 注意
    xml 的内部覆盖作用范围只包括 `Mod/Graphics/Sprite.xml`, `Mod/Graphics/SpritesGui.xml`, `Mod/Graphics/Portraits.xml`, `Mod/DecalRegistry.xml`, 如果是 Helper 自定义的 xml, 那么同路径会发生外部覆盖 

### 以 Maps 为例

比如你和它的 Mod 都长这样, 你俩有个人的图就加载不出来了, 如果贴图也重名重路径了, 你的图可能会加载到错误的素材

* 📁Celeste
    - 📁Mods
        - 📁OtherMod
            - 📄everest.yaml
            - 📁Maps 
                - 📄MyFirstMap.bin
        - 📁MyMod  // 你的Mod
            - 📄everest.yaml
            - 📁Maps 
                - 📄MyFirstMap.bin

所以我们添加自定义的资源时文件路径要多套几层, 目的就是为了不和官图也不和其他人的 Mod 重名, 一般来说两层足矣, 所以地图结构一般是
`Maps/{作者名}/{地图集名字}/{地图}.bin`, 基本上就是如下图所示

* 📁Celeste
    - 📁Mods
        - 📁OtherMod1
        - 📁OtherMod2
        - 📁OtherMod3
        - 📁MyMod  // 你的Mod
            - 📄everest.yaml
            - 📁Maps 
                - 📁作者名
                    - 📁地图集名字
                         - 📄MyFirstMap.bin  
                         - 📄MyFirstMap-B.bin
                         - 📄MyFirstMap-C.bin
                         - 📄MyFirstMap1.bin 

#### 注意事项

如果你在此期间移动了 `.bin` 文件, 再次打开 Loenn 后, Loenn 可能记住的是原来的文件位置, 所以如果此时你保存了, Loenn 会在原位置生成一个 `.bin`, 
而不是修改你放在新的位置的 `.bin`, 所以移动 `.bin` 文件之后记得在 Loenn 里重新打开新的 `.bin` 文件


## 常见问题

### [如何自定义 ABC 面](https://saplonily.top/celeste_modding_tutorial/mapping/room_meta_text/#bc)

在 `.bin` 文件 后面加 `-大写字母` 即可, 如 `FirstMap-A.bin`, ``SecondMap-B.bin``

#### [如何自定义 DEF 面](https://gamebanana.com/mods/166210)

### [如何自定义多章节地图顺序](https://saplonily.top/celeste_modding_tutorial/mapping/mod_structure/#bin)

在 `.bin` 文件 前加 `数字-` 即可, 如 `0-FirstMap.bin`, ``1-SecondMap.bin``

### 如何设置存档点(章节)的插图

[电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程 ([存档点图片生成器](http://postcard.leo60228.space/mask/))


比如你的地图路径是 <code>Mods/CelesteWikiTutorial/Maps/<font color="green">TestMap/awa</font>.bin</code>, 那你就在 <code>Mods/CelesteWikiTutorial/Graphics/Atlases/<font color="red">Checkpoints</font>/<font color="green">TestMap/awa</font>/A/</code> 里放存档点图片即可(字母 `A` 表示 `A` 面)

初始存档点(也就是一开始默认进入的房间)对应的图片命名为 `start`, 其他图片改成章节存档点房间的名称即可

### 为什么我照着教程做没效果啊

> 重启解决 99% 的问题

新放置的文件可能无法被及时加载, 所以请 Ctrl + F5 重启让文件被正确加载, 
不过一般如果已经有对应文件但只是做了修改或者替换一般还是能被正确热重载的




## 常用工具

* [文件结构检查 / Celeste Mod Structure Verifier](https://maddie480.ovh/celeste/mod-structure-verifier)

## 常见错误

<a id="pack"></a>

### Mod 打包问题

当你发布你的 Mod 的时候你要把你 Mods 里 `Maps` 同级的所有文件打包到一个 `.zip` 文件里, 而不是把你的整个 Mod 打包成 `.zip`

例如这样是对的

- 📁你的 Mod.zip
    - 📁Maps
    - 📁Graphics
    - 📄everest.yaml

这样是错的

- 📁你的 Mod.zip
    - 📁xxx
        - 📁Maps
        - 📁Graphics
        - 📄everest.yaml
