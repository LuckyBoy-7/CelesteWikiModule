# 替换官图素材

> ￥: 会找custom实体直接改贴图能改80%, 会改xml能改95%, 会code自己写实体能改100%

* [正常替换](https://github.com/EverestAPI/Resources/wiki/Replacing-A-Texture)
* [高级替换](https://github.com/EverestAPI/Resources/wiki/Reskinning-Entities)
* [[Celeste蔚蓝]作图教程第五章B面-自定义对话人物与实体贴图修改(xml进阶篇)](https://www.bilibili.com/video/BV1cP4y1m7B2)
* 冬菜教程

## 暴力替换

前面我们已经说过 Everest 在合并 Mod 和官图资源时同路径文件会发生覆盖, 那么也就是说如果我们按照官图素材路径放我们的图片, 那么自然我们的图片能覆盖官图的, 理论上所有素材都可以换(不过有的画面是程序生成的, 还是写code罢), 唯一不好的点就是"这会污染其他 Mod", 因为这么做的影响是全局的

### 官图素材路径

可参照 `../Steam/steamapps/common/Celeste/Content/Graphics/Atlases` 这个路径, 具体内容参照[解包素材](../useful_links.md), 这里的 `Content` 相当于我们 Mod 的根目录

## 使用自定义实体

一般就是那些以 Custom, Reskinable 之类的词为前缀的扩展实体, 显然 Helper 作者都帮我们写好了, 我们把路径填上直接用就好了([不知道路径填什么](../loenn/faq.md#_9))

## 修改[`Sprites.xml`](../xml/sprites_xml.md)

你可能需要先了解一下什么是 [XML](../xml/xml.md)

`Sprites.xml` 是蔚蓝的一个管理所有动画的配置文件

```xml title="Sprites.xml"
<Sprites>
  <player path="characters/player/" start="idle">
    ...
  </player>
</Sprites>
```

对于如上的内容, 蔚蓝会通过 player 这个标签加载 path(相对于`Gameplay文件夹`)中的素材, 再根据`...`中的配置来组合出游戏中的一个动画对象, 听不懂也没关系, 既然你已经学会了"覆盖大法", 如果你要修改player的配置, 显然你可以自己创建一个`Sprites.xml`, 然后把下面这部分内容粘进去, 然后把path改成你自己的, 之后在Loenn`Map -> Metadata`中选择你的`Sprites.xml`即可,
这样它就会覆盖一部分官图的配置, 从而达到替换素材的效果, 而且这方法不会影响别人的图(不过有的实体不一定会有对应配置, 视情况而定)

## 添加 `.meta.yaml`

然鹅, 哪怕我们学会了 xml 大法, 官图中依然充斥着各种不依赖于 xml 的路径, 如果没有 Helper 提供这个实体的自定义版本, 那我们确实没辙,
但也许会有 Helper 提供通过配置文件来修改皮肤的功能, 虽然占比相对少, 但也可以[看看](../loenn/metadata.md#helper)


## 自己写code

我又幻想了, 幻想自己写出让众人啧啧称赞的 Helper, 并且在香蕉网上收获上千 Like...  