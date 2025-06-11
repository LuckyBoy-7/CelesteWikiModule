本篇会讲解一个Mod的结构大概是怎么样的, Everest是如何加载我们的Mod的

## 引用

* [everest.yaml](https://github.com/EverestAPI/Resources/wiki/everest.yaml-Setup)
* [Mod结构（摘自b站 Wiki）](https://wiki.biligame.com/celeste/Mod%E7%BB%93%E6%9E%84)
* [Mod结构（摘自Everest Wiki）](https://github.com/EverestAPI/Resources/wiki/Mod-Structure)
* [【Celeste蔚蓝】作图教程第一章-路径](https://www.bilibili.com/video/BV1tR4y1X7wu)
* [【Celeste蔚蓝】二代作图教程 1-5 基础路径](https://www.bilibili.com/video/BV1394y1C7Fy)
* [Mod Structure Tutorial by Snip](https://gist.github.com/SnipUndercover/7ca0051ed649a32aac46ae2a9e034e37)

你可能需要下载[官图素材](./useful_links.md)来更好的了解蔚蓝素材的结构

如果你很急, 那么你在Loenn里作好图之后可以直接把`.bin`文件丢在蔚蓝根目录的Mods(一般应该运行过一次`Everest`应该就有了)文件夹下, 此时打开游戏理论上你就能看到你作的图了,
但是这样你的Mod会被当作`Uncategorized未分类的`, 因为`Everest`只知道这有一张图, 但是其他啥也不知道, 所以你才需要学习Mod结构,
一个比较标准的Mod一般会包含`Audio`, `Dialog`, `Graphics`, `Maps`, `Tutorials`文件夹, `everest.yaml`文件(你可以直接配着游戏本体结构`../Steam/steamapps/common/Celeste/Content/`或者其他Mod结构一起看)

| 文件/文件夹       | 是否必须 | 作用             |
|:-------------|:-----|:---------------|
| everest.yaml | √    | 这是Mod的身份证      |
| Maps         | √    | 放地图文件          |
| Dialog       | ×    | 放对话, 本地化文本等    |
| Graphics     | ×    | 放自定义贴图以及自定义xml |
| Audio        | ×    | 放自定义音乐         |
| Tutorials    | ×    | 放自定义残影动画       |

## everest.yaml

它是一个`.yaml`格式的文件, 你可以简单把它当作有一定格式规范的`.txt`, 你可以用记事本打开编辑,
至于它的作用, 当然就是用来告诉`Everest`有关你这Mod的所有信息, 所以下面举例来解释里面各个参数代表的含义

首先这是最精简的`everest.yaml`格式

```yaml
- Name: MyMod
  Version: 1.0.0 
  Dependencies:
    - Name: Everest
      Version: 1.4000.0
```

### Name

你的Mod的名字, 用英文, `Everest`总得知道你Mod叫什么吧

### Version

你的Mod的版本号, 你每次更新Mod的时候都要调整这些数字, 这被称为版本迭代, 一次更新对应一个版本, 这样才不会出现同一个版本有两个不同Mod的尴尬情况, 而且这可能导致其他人无法及时更新对应的Mod

#### 举例

一般修修Bug啥的小更新会在第一位`+1`变成`1.0.1`, 一般加一些新东西的小更新会在第二位`+1`变成`1.1.0`, 一般变化巨大的更新会在第三位`+1`变成`2.0.0`, 一般都是改第一或者第二位

这里举个例子: 今天我第一次上传Mod, 版本号是`1.0.0`, 第二天发现有些地方的刺摆的不美观, 于是修了下重投, 版本号是`1.0.1`, 第三天发现有个地方有鸡, 修了下重投, 版本号是`1.0.2`, 第四天心血来潮,
给自己的图又加了几面, 这时候版本号应该是`1.1.0`, 第五天bro你做了个草莓酱(或者不开玩笑的话就是你把整张图重做/翻新了), 这时候版本号应该是`2.0.0`, 大概是这样没错(, 反正你不用特别在意自己写的对不对, 关键是更新前后版本号是递增的即可

### Dependencies

你的Mod的依赖, 即你这个Mod使用了哪些Mod的东西, 可能是Code(也就是别人写的各种各样的实体等功能, 即所谓的Helper, 也是Mod), 也可能是美术素材(有的bro会依赖草莓酱💀),
这样当别人使用Mod管理器下载你的Mod的时候也会自动下载你依赖的Mod, 缺依赖或者版本低了`Everest`都会警告玩不了, 如果没问题则被依赖的Mod会先被加载, 总之`Everest`总得知道你Mod需要什么Mod吧

稍微复杂点的`everest.yaml`举例

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

你编译出来的DLL的位置, 如果你会Code, 写了自定义实体或者别的什么功能, `Everest`总得知道你DLL在哪儿吧

### OptionalDependencies

跟`Dependencies`同理, 就是多了`Optional可选的`, 按照`Everest Wiki`的说法, 这和`Dependencies`区别就是这个依赖不强制要求, 缺了也能玩

## Maps

这里假设我们的Mod名称叫做`MyMod`, 我们的Mod要放到Mods文件夹内, 然后假设你的地图文件为`MyFirstMap.bin`, 那么你的Mod文件路径大概长这样

```
Celeste
    - Mods
        - OtherMod1
            - ...
        - OtherMod2
            - ...
        - MyMod  // 你的Mod
            - everest.yaml
            - Maps 
                - MyFirstMap.bin  // A面
                - MyFirstMap-B.bin  // B面
                - MyFirstMap-C.bin  // C面
                - MyFirstMap1.bin  // 如果名字不一样地图就会被分成多个模块, 就像官图1a, 2a ... 8a一样
```

### [了解`Everest`处理这些文件的逻辑](https://github.com/EverestAPI/Resources/wiki/FAQ#why-do-i-have-to-include-my-nickname-and-modname-in-my-folders)

`Everest`在加载Mod资源的时候会把里面的资源(比如`Maps, Dialog, Audio, Graphics`等)
连带官图的整合到一起(对于大部分文件来说同路径会覆盖, 而对`Dialog`里的文件来说是合并), 做好合并工作后Everest就可以集中处理这些资源了

当你理解了这回事, Mod中的很多东西就会立即变得清晰明了, 比如:

* 为什么别人的素材我能用, 因为合并完都是一个东西
* 为什么要加依赖, 因为能在Loenn里使用是因为你有这个Mod, 而打包出去别人用的时候别人可能没有对应Mod
* 为什么文件夹要套多层, 为什么 Dialog 的 key 要写的很长, 因为合并完可能发生覆盖

正是因为地图和素材等文件同路径的时候会被覆盖, 比如你和它的Mod都长这样, 你俩有个人的图就加载不出来了, 如果贴图和音频等文件也重名重路径了, 你的图可能会加载到错误的素材

```
Celeste
    - Mods
        - HisMod
            - everest.yaml
            - Maps 
                - MyFirstMap.bin
        - MyMod  // 你的Mod
            - everest.yaml
            - Maps 
                - MyFirstMap.bin
```

所以我们添加自定义的资源时文件路径要多套几层, 目的就是为了不和官图也不和其他人的Mod重名(写Dialog的key的时候也是同理), 一般来说两层足矣, 所以地图结构一般是
`Maps/{作者名}/{地图集名字}/{地图}.bin`, 基本上就是如下图所示

```
Celeste
    - Mods
        - OtherMod1
        - OtherMod2
        - OtherMod3
        - MyMod  // 你的Mod
            - everest.yaml
            - Maps 
                - 作者名
                    - 地图集名字
                         - MyFirstMap.bin  
                         - MyFirstMap-B.bin
                         - MyFirstMap-C.bin
                         - MyFirstMap1.bin 
```

### 注意事项

如果你在此期间移动了`.bin`文件, 再次打开Loenn后, Loenn可能记住的是原来的文件位置, 所以如果此时你保存了, Loenn会在原位置生成一个`.bin`, 
而不是修改你放在新的位置的`.bin`, 所以移动`.bin`文件之后记得在Loenn里重新打开新的`.bin`文件

## Tutorials

### 录制像9a凌波微步那样的残影

* [录制残影1](https://wiki.biligame.com/celeste/%E5%AE%9E%E4%BD%93/%E5%AE%98%E5%9B%BE%E5%AE%9E%E4%BD%93#Ghost_Player_Playback)
* [录制残影2](https://github.com/EverestAPI/Resources/wiki/Mod-Structure#adding-custom-tutorial-ghosts)

### 在Loenn里显示游戏内人物的实时尾迹

下载`Aurora's Loenn Plugin`插件(本质上也是个Mod, 所以Mod怎么下它也怎么下), 在Loenn上方导航栏点击打开`View -> Show Player Sihouette [Aurora's Loenn Plugin]`, 在游戏内随便走走,
返回Loenn即可, 如果需要清空尾迹, 则点击`View -> Clear Player Sihouette [Aurora's Loenn Plugin]`

## 常见错误

### Mod打包问题

当你发布你的Mod的时候你要把你Mods里`Maps`同级的文件打包到一个`.zip`文件里, 而不是把你的整个Mod打包成`.zip`

例如这样是对的

```
- 你的Mod.zip
    - Maps
    - Graphics
    - everest.yaml
```

这样是错的

```
- xxx.zip
  - MyMod
      - Maps
      - Graphics
      - everest.yaml
```
