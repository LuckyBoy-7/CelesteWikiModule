# XML

如果你还不知道什么是 XML 可以看[这里](https://saplonily.top/celeste_mod_tutorial/other/xml-speedrun/)

推荐下载 [VSCode](https://code.visualstudio.com/) 并安装 `XML` 插件, 不要再对着纯色的文本文档看半天 XML 不知道哪儿出问题了(小声


这一部分主要讲解蔚蓝 `Content/Graphics/` 中的各种 XML 文件

但由于原理大同小异, 所以这里会挑有代表性的讲

## [ForegroundTiles.xml](./tilesets.md)

类似的有

* AnimatedTiles.xml
* BackgroundTiles.xml

## [Sprites.xml](./sprites_xml.md)

类似的有

* SpritesGui.xml
* Portraits.xml

## CompleteScreens.xml

官图结束背景对应的配置, 这一部分被 `meta.yaml` 配置收容, 所以你要是真的感兴趣随便看看就好

## [.meta.yaml](../loenn/metadata.md)

详情见[Everest](https://github.com/EverestAPI/Resources/wiki/Map-Metadata#setting-up-a-metayaml-file)

因为很多原版的配置都是写在代码里的(俗称**硬编码**), 所以 Everest 为我们提供了 `.meta.yaml` 配置文件以修改原版更多配置


## [DecalRegistry.xml](../graphics.md#decalregistry)

因为很多原版的 Decal 配置都是硬编码的(所以有时候你会奇怪为什么有的 Decal 莫名其妙多了些特性, 因为代码里写死了), 所以 Everest 为我们提供了 `DecalRegistry.xml` 配置文件以修改更多 Decal 配置
