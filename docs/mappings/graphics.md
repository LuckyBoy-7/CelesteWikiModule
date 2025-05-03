## 资源

[官图素材资源](../mods/resources.md)

## 界面

[b wiki](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#.meta.yaml_%E6%96%87%E4%BB%B6)

### 开始

* [自定义开始界面(包括山体建模等) by Everest](https://github.com/EverestAPI/Resources/wiki/Overworld-Customisation)
* [自定义开始界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)

### 结束

* [自定义结束界面 by Everest](https://github.com/EverestAPI/Resources/wiki/Chapter-Complete-Screen)
* [自定义结束界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)
* 使用`XaphanHelper/CustomEndScreenController`, 放在你结束关卡的房间里即可(Myn力推)

## 自制皮肤

* [模板](https://kuksattu.github.io/celeste/skinmod-template/)
* [蔚蓝科技之自制皮肤mod教程](https://www.bilibili.com/video/BV1Uv4y1K751)
* [蔚蓝皮肤制作教程-星夜祈梦](https://www.bilibili.com/video/BV1YpYueREPt)
    * [文字版](../assets/mappings/graphics/skin/蔚蓝皮肤制作教程-星夜祈梦.pdf)

## Decal

* [Decal](https://wiki.biligame.com/celeste/Decal)
* [春暮Q 中翻 - Donker's Deco Guide](../assets/mappings/graphics/decals/中翻%20-%20Donker's%20Deco%20Guide.docx)
* [废话deco教程]()(群文件里下)
* [jpyx258的deco轮椅]()(群文件里下)

## DecalRegistry

* [摘自b站 Wiki(描述不详细, 但很全, 含helper自定义的decalregistry内容)](https://wiki.biligame.com/celeste/DecalRegistry)
* [celeste地图制作指南(装饰, decals)(适合新手, 有配图)](https://www.bilibili.com/read/cv18389517/)
* [摘自Everest Wiki(描述详细, 且提供了自定义decalregistry的教程)](https://github.com/EverestAPI/Resources/wiki/Decal-Registry)

## 替换官图素材

> ￥: 会找custom实体直接改贴图能改80%, 会改xml能改95%, 会code自己写实体能改100%

* [正常替换](https://github.com/EverestAPI/Resources/wiki/Replacing-A-Texture)
* [高级替换](https://github.com/EverestAPI/Resources/wiki/Reskinning-Entities)
* [[Celeste蔚蓝]作图教程第五章B面-自定义对话人物与实体贴图修改(xml进阶篇)](https://www.bilibili.com/video/BV1cP4y1m7B2)
* 冬菜教程

### 暴力替换

前面我们已经说过Everest在合并Mod和官图资源时同路径文件会发生覆盖, 那么也就是说如果我们按照官图素材路径放我们的图片, 那么自然我们的图片能覆盖官图的, 唯一不好的点就是"这会污染其他Mod, 因为这么做的影响是全局的" 

#### 官图素材路径

可参照`../Steam/steamapps/common/Celeste/Content/Graphics/Atlases`这个路径, 具体内容参照[解包素材](../mods/resources.md), 这里的`Content`相当于我们Mod的根目录

### 使用自定义实体

一般就是那些以Custom Reskinable之类的词为前缀的扩展实体, 显然Helper作者都帮我们写好了, 我们把路径填上直接用就好了([不知道路径填什么](./loenn/faq.md#_9))

### 修改`Sprites.xml`

你可能需要先了解一下什么是[XML](https://saplonily.top/celeste_mod_tutorial/other/xml-speedrun/)

`Sprites.xml`是蔚蓝的一个管理所有动画的配置文件

```xml title="Sprites.xml"
<Sprites>
  <player path="characters/player/" start="idle">
    ...
  </player>
</Sprites>
```

对于如上的内容, 蔚蓝会通过player这个标签加载path(相对于`Gameplay文件夹`)中的素材, 再根据`...`中的配置来组合出游戏中的一个动画对象, 听不懂也没关系, 既然你已经学会了"覆盖大法", 如果你要修改player的配置, 显然你可以自己创建一个`Sprites.xml`, 然后把下面这部分内容粘进去, 然后把path改成你自己的, 之后在Loenn`Map -> Metadata`中选择你的`Sprites.xml`即可,
这样它就会覆盖一部分官图的配置, 从而达到替换素材的效果, 而且这方法不会影响别人的图(不过有的实体不一定会有对应配置, 视情况而定)

### 自己写code

我又幻想了, 幻想自己写出让众人啧啧称赞的Helper, 并且在香蕉网上收获上千Like...  



## 自定义瓦片集

* [摘自电箱教程](https://www.bilibili.com/video/BV1kV4y137Mn/?spm_id_from=333.788&vd_source=217bacbee37820b5bf3ed2f4fb8f6c94)
* [摘自Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Custom-Tilesets)
* [瓦片集格式参考](https://github.com/EverestAPI/Resources/wiki/Tileset-Format-Reference)
* [motonine的自制tiles教程](../assets/mappings/graphics/tileset/自制tiles教程%5B23.12.17更新%20作者motonine%5D.txt)
* [底龙的自定义tiles教程](https://www.bilibili.com/video/BV1Eu4y1L78Y)

### QA

#### 怎么设置存档点(章节)的插图

[看电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程

#### 怎样获取精美的美术素材

1. 自己画
2. 利用生成器自动生成
3. 在群“制图素材”文件夹里寻找素材。
4. 官图素材改色
5. [Itch.io](https://itch.io/game-assets)
6. [opengameart](https://opengameart.org/)

注：

1. 这些素材文件中有些是香蕉网的mod, 可直接取用而有些则要解压取用。可以通过celemod/Olympus搜索mod名区分, 搜不到=需解压。
2. 在解压取用的文件中, 如果有则请先阅读readme.txt/docx.了解格式和原作者的取用限制。并请严格按其规则执行。如果没有明确规定或只有“give a credit”, 请在地图明显处或香蕉网界面设置其为素材提供者。
