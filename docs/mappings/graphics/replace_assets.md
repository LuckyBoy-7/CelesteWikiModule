# 替换素材

> ￥: 会找 custom 实体直接改贴图能改 80%, 会改 xml 能改 95%, 会 code 自己写实体能改 100%

## 参考:

* [正常替换](https://github.com/EverestAPI/Resources/wiki/Replacing-A-Texture){:target="_blank"}
* [高级替换](https://github.com/EverestAPI/Resources/wiki/Reskinning-Entities){:target="_blank"}
* [[Celeste蔚蓝]作图教程第五章B面-自定义对话人物与实体贴图修改(xml进阶篇)](https://www.bilibili.com/video/BV1cP4y1m7B2)
* 冬菜教程
* [替换素材 by 底龙](https://www.bilibili.com/video/BV1uUHYzLEu5/){:target="_blank"}

## 暴力替换

如果你已经了解了 [Everest 处理 Mod 资源的逻辑](../mod_structure.md#everest), 知道了 Everest 在合并 Mod 和官图资源时同路径文件会发生覆盖, 
那么替换素材这件事就是非常直观的, 因为官图图片素材都存在 <code>../Steam/steamapps/common/Celeste/<font color="red">Content/</font><font color="green">Graphics/Atlases/</font></code> 里,
我们的素材都存在 <code>../Steam/steamapps/common/Celeste/<font color="red">Mods/MyMod/</font><font color="green">Graphics/Atlases/</font></code> 里, 那么怎么换就不用我多说了吧: 直接照着[解包素材](../useful_links.md#_1)在同路径放个同名图片把官图的覆盖了就好了
这种方法可以更换蔚蓝中几乎所有非程序生成的素材, 唯一不好的点就是"这会污染其他 Mod", 因为这么做的影响是全局的

暴力替换的适用范围仅限于做着玩/小范围传播, 对于以前[没皮肤 Mod 的时期](https://www.bilibili.com/video/BV1uUHYzLEu5/?t=4104){:target="_blank"}大家可能还会使用暴力替换, 但是在有了 Skin Mod Helper (Plus) 之后咋们就可以自由切换皮肤了, 贴图这些都变成了可以配置的东西, 也就不需要那么"暴力"了

## 使用自定义实体

一般就是那些以 Custom, Reskinable 之类的词为前缀的扩展实体, 显然 Helper 作者都帮我们写好了, 我们照着注释把要填的填上就好了, 一般都是填

* 图片路径, 一般相对与 gameplay 或者原贴图所在文件夹([不知道路径填什么](../loenn/faq.md#_11))
* Sprites XML ID
* 或者作者自定义的表达式
* 等等

### [邪道](../loenn/faq.md#_13)

对于一些特殊实体, 可能有办法通过额外添加属性的方式来替换素材

## 修改[`Sprites.xml`](../xml/sprites_xml.md)

你可能需要先了解一下什么是 [XML](../xml/xml.md)

```xml title="Sprites.xml"
<Sprites>
  <player path="characters/player/" start="idle">
    ...
  </player>
</Sprites>
```

`Sprites.xml` 是蔚蓝的一个管理所有动画的配置文件

对于如上的内容, 蔚蓝会通过 player 这个标签加载 path(相对于`Gameplay 文件夹`)中的素材, 再根据 `...` 中的配置来组合出游戏中的一个动画对象

听不懂也没关系, 不是我喜欢的 `Sprites.xml` 直接不看,
咋们[自己整一个](../xml/sprites_xml.md#spritesxml_2), 然后把配置里的路径改一下就好了, 这种方法不会影响别人的图, 还是比较推荐的做法(不过有的实体不一定会有对应配置, 视情况而定), 还有些皮肤也是[类似的换法](https://www.bilibili.com/video/BV1uUHYzLEu5/?t=3232){:target="_blank"},
不过只要你理解了 [Sprites.xml 的覆盖原理](../mod_structure.md#spritesxml)就可以随便换了, 所以我也不再赘述了


## 添加 `.meta.yaml`

然鹅, 哪怕我们学会了 xml 大法, 官图中依然充斥着各种不依赖于 xml 的路径, 如果没有 Helper 为我们提供这个实体的自定义版本, 那我们确实没辙,
但也许会有 Helper 提供通过配置文件来修改皮肤的功能, 虽然稍显麻烦, 但也不是不能改

### Helper 提供的额外元数据

* [真的大 Helper](https://gamebanana.com/mods/597196){:target="_blank"}, [Wiki](https://github.com/kyfex-uwu/ReallyBigHelper/wiki/Using-ReallyBigHelper){:target="_blank"}: 改章节图标
* [Communal Helper](https://gamebanana.com/mods/53697){:target="_blank"}, [Wiki](https://github.com/CommunalHelper/CommunalHelper/blob/db7b27060ebf64553e299fa1c98ab21534e360de/docs/Home.md#custom-textures){:target="_blank"}: 改默认 Gem 材质
* [Lucky Helper](https://gamebanana.com/mods/553921){:target="_blank"}, [Wiki](https://github.com/LuckyBoy-7/LuckyHelper/blob/main/README.md#metadata){:target="_blank"}: 改默认 Textbox 材质


## 自己写 Code

我又幻想了, 幻想自己写出让众人啧啧称赞的 Helper, 并且在香蕉网上收获上千 Like...  