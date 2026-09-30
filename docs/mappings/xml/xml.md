# XML

如果你还不知道什么是 XML 可以先看看[XML 基础教程](basics.md)

推荐下载 [VSCode](https://code.visualstudio.com/) 并安装 `XML` 插件, 不要再对着纯色的文本文档看半天 XML 不知道哪儿出问题了 (小声

这一部分主要讲解蔚蓝 `Content/Graphics/` 中的各种 XML 文件, 虽然看起来很多, 
但其实原理大同小异, 因为只要你理解了各个标签影响的是哪部分的配置你就知道怎么改怎么写了, 又因为有的 xml
内容相似, 所以这里会挑有代表性的讲

## [ForegroundTiles.xml / AnimatedTiles.xml](./tilesets.md)

砖的配置, 类似的有

* BackgroundTiles.xml

## [Sprites.xml](./sprites_xml.md)

贴图配置, 类似的有

* SpritesGui.xml
* [Portraits.xml](portraits_xml.md)

## CompleteScreens.xml

官图结束背景对应的配置, 这一部分被 [`meta.yaml`](../metadata/extra_metadata.md#completescreen) 配置收容, 所以你随便看看就好

## [.meta.yaml](../metadata/loenn_metadata.md)

因为很多原版的配置都是写在代码里的 (俗称 **硬编码**), 所以 Everest 为我们提供了 `.meta.yaml` 配置文件以修改原版更多配置

## [DecalRegistry.xml](../graphics/decal_registry.md)

因为很多原版 Decal 的额外效果都是硬编码的 (比如摆放官图的云朵素材可能就会莫名带上 Parallax 的效果), 所以 Everest 为我们提供了 `DecalRegistry.xml` 配置文件让我们也能给自己的 Decal
加上有趣的效果
