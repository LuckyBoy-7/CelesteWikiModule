# 素材替换

> ￥: 会找 custom 实体直接改贴图能改 80%, 会改 xml 能改 95%, 会 code 自己写实体能改 100%

## 参考

* [正常替换](https://github.com/EverestAPI/Resources/wiki/Replacing-A-Texture){:target="_blank"}
* [高级替换](https://github.com/EverestAPI/Resources/wiki/Reskinning-Entities){:target="_blank"}
* [[Celeste蔚蓝]作图教程第五章B面-自定义对话人物与实体贴图修改(xml进阶篇)](https://www.bilibili.com/video/BV1cP4y1m7B2)
* 冬菜教程
* [替换素材 by 底龙](https://www.bilibili.com/video/BV1uUHYzLEu5/){:target="_blank"}

由于图片是最常见最需要被替换的资源, 所以本章主要围绕图片展开

总的来说, 蔚蓝有两种方式拿到对应的图片:

1. 通过硬编码的路径直接加载图片
2. 通过 `Sprites.xml` 配置文件加载图片/动画

在丰富的 Helper 生态下我们又多了无数种方式(都自己写代码了想怎么加载怎么加载), 接下来逐一介绍具体替换方式,
不过在此之前你最好了解下 [Everest 处理 Mod 资源的逻辑](../mod_structure.md#everest), 这有助于你理解替换素材背后的机制

## 对于硬编码的路径

### 暴力替换

> 别整那些有的没的, 直接把官图素材覆盖了不就不用捣鼓路径了?

如果你已经知道了 Everest 在合并 Mod 和官图资源时同路径文件会发生覆盖,
那么替换素材这件事就是非常直观的, 
因为官图图片素材都存在 <code>../Steam/steamapps/common/Celeste/<font color="red">Content/</font><font color="green">Graphics/Atlases/</font></code> 里,
我们的素材都存在 <code>../Steam/steamapps/common/Celeste/<font color="red">Mods/MyMod/</font><font color="green">Graphics/Atlases/</font></code> 里, 那么怎么换就不用我多说了吧:
直接照着[解包素材](../useful_links.md#_1)在同路径放个同名图片把官图的覆盖了就好了,
这种方法可以更换蔚蓝中几乎所有非程序生成的素材, 唯一不好的点就是"这会污染其他 Mod", 因为这么做的影响是全局的 (暴力替换的适用范围仅限于做着玩/小范围传播)

### 替换路径

> 偷偷在找图片 A 的时候替换成找图片 B 不就好了

通过代码手段将硬编码的路径导向自定义的路径:

* 可以使用 [LocalizationHelper](https://gamebanana.com/mods/644851)([镜像](https://celeste.weg.fan/submissions/detail/488461972699636480/localizationhelper)): 不同语言下可以使用不同的替换方式, 在 `.json` 文件中配置

### 重新生成

> 偷偷在你生成图片/动画对象后我把他删了换成自己的不就好了

* 可以使用 [hELPER](../useful_helpers/hELPER.md) 的 Sprite Replace Trigger
* 可以使用 GameHelper 的 EntityRespriter 实体(稍微有点复杂)

## 对于官图的 `Sprites.xml`

你可能需要先了解一下什么是 [XML](../xml/xml.md)

```xml title="Content/Graphics/Sprites.xml"

<Sprites>
    <player path="characters/player/" start="idle">
        ...
    </player>
</Sprites>
```

简单来说 `Sprites.xml` 是蔚蓝的一个管理所有动画的配置文件, 对于如上的内容, 蔚蓝会通过 player 这个标签加载 path(相对于`Gameplay 文件夹`)中的素材, 再根据 `...` 中的配置来组合出游戏中的一个动画对象

如果你想替换官图 `Sprites.xml` 中某部分的配置, 你只需要把自己[自定义的 `Sprites.xml`](../xml/sprites_xml.md#spritesxml_2) 放在`Mods/MyMod/Graphics/MyMod/Sprites.xml` 下(只要不跟官图 xml 撞路径即可), 然后在 Loenn 元数据中指定这个 XML 即可, 这样在运行这张图时就会用这个 XML 覆盖官图的 XML, 就不会污染其他 Mod 了

那为啥路径那么重要呢, 什么时候可以同路径, 什么时候要在 Loenn 中选呢, 如果你好奇的话, 可以了解下 [Sprites.xml 的覆盖原理](../mod_structure.md#spritesxml)

## Helper 提供的手段

### 使用自定义实体

> coder 写的 Helper 里自带的实体, 功能比官图自带的实体更加强大, 一般都支持换肤功能

一般就是那些以 Custom, Reskinable 之类的词为前缀的扩展实体, 显然 Helper 作者都帮我们写好了, 我们照着注释把要填的填上就好了, 一般都是填

* 图片路径, 一般相对与 gameplay 或者原贴图所在文件夹([不知道路径填什么](../loenn/faq.md#_11))
* Sprites XML ID
* 或者作者自定义的表达式
* 等等

## 自己写 Code

我又幻想了, 幻想自己写出让众人啧啧称赞的 Helper, 并且在香蕉网上收获上千 Like...