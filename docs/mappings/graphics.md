## 资源

* [官图素材资源](./useful_links.md#_1)
* [UnderDragon’s Repository 2.5](https://gamebanana.com/mods/427729){:target="_blank"}
* [Spooooky's Asset Pack](https://gamebanana.com/mods/427729){:target="_blank"}
* [Asset Drive Browser](https://maddie480.ovh/celeste/asset-drive){:target="_blank"}: 更方便的浏览社区资源盘

## 自定义界面

[b wiki](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#.meta.yaml_%E6%96%87%E4%BB%B6){:target="_blank"}

### 开始

* [自定义开始界面(包括山体建模等) by Everest](https://github.com/EverestAPI/Resources/wiki/Overworld-Customisation){:target="_blank"}
* [自定义开始界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154){:target="_blank"}

### 结束

* [自定义结束界面 by Everest](https://github.com/EverestAPI/Resources/wiki/Chapter-Complete-Screen){:target="_blank"}
* [自定义结束界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154){:target="_blank"}
* 使用 `XaphanHelper/Custom End Screen Controller`, 放在你结束关卡的房间里即可(Myn 力推)

## [自制皮肤](./graphics/skin.md)

## Decal

* [Decal](https://wiki.biligame.com/celeste/Decal){:target="_blank"}
* [废话 deco 教程]()(群文件里下)
* [jpyx258 的 deco 轮椅]()(群文件里下)
* [静态/动态 Decal 使用 by 底龙](https://uddrg.notion.site/Decal-2787f4f27e638051a265e8b708adbe03)

### 心得

> KaileyTheAlien: I remember when I found that room in Paint on my first playthrough and just stood there crying for like 10-15 minutes

* [春暮Q 中翻 - Donker's Deco Guide](../assets/mappings/graphics/decals/中翻%20-%20Donker's%20Deco%20Guide.docx), [原文](https://docs.google.com/document/d/1ebzZTL7eX21M0FJR2IAUPCCGxnDUscZdRW8GiGl8Yus/edit?tab=t.0){:target="_blank"}
* [Creating Atmosphere in Celeste Mods by ricky06](https://www.youtube.com/watch?v=n5iHuXW8TyY){:target="_blank"}

## DecalRegistry

你可能需要了解一下什么是[XML](./xml/xml.md)

简单来说官方通过硬编码路径来为一些 decal 添加额外的效果, 比如官方会为以 `7-summit/cloud_` 为前缀(路径从 `Gameplay/decals/` 开始)的所有云都添加一定的视差, 所以你会发现你 decal 摆出来马上就有额外效果了

Everest 也提供了一种方式让你使用上面的效果也就是使用 `DecalRegistry.xml`, 你填上你需要影响的 decal 对应的路径, 之后在内部加上各种效果并填入对应参数即可

* [摘自b站 Wiki(描述不详细, 但很全, 含 helper 自定义的 DecalRegistry 内容)](https://wiki.biligame.com/celeste/DecalRegistry){:target="_blank"}
* [celeste 地图制作指南(装饰, decals)(适合新手, 有配图)](https://www.bilibili.com/read/cv18389517/){:target="_blank"}
* [摘自 Everest Wiki(描述详细, 且提供了自定义 DecalRegistry 的教程)](https://github.com/EverestAPI/Resources/wiki/Decal-Registry){:target="_blank"}
* [DecalRegistry 使用 by 底龙](https://uddrg.notion.site/Decal-2787f4f27e638051a265e8b708adbe03){:target="_blank"}

在你熟悉 DecalRegistry 后, 你可能会有发现如果要给各种图片加上类似的效果就会很头疼, 因为效果都差不多, 但是路径得写好几次, 
所以 `LuckyHelper/DecalWithCombinedRegistry` 提供了一种**组合**的方式, 此时你可以把 `path` 当作对应的**效果组**, 之后直接在实体里填入需要的效果即可, 这些效果也可以反复使用 


## [替换素材](./graphics/replace_assets.md)

## [自定义瓦片(Tileset)](./xml/tilesets.md)

## [滤镜制作](./graphics/color_grading.md)

## 杂

* [Remaking Celeste’s Lighting / 蔚蓝的光源实现原理](https://medium.com/@NoelFB/remaking-celestes-lighting-3478d6f10bf){:target="_blank"}

### 像素画教程

* [像素宝典 -- 风农译制](https://www.bilibili.com/read/readlist/rl38114?spm_id_from=333.1369.opus.module_collection.click){:target="_blank"}
* [Pedro's Pixel Art Tutorials (Patreon)](https://www.patreon.com/collection/266583?view=condensed){:target="_blank"}
* [Pedro's Pixel Art Tutorials (Lospec)](https://lospec.com/pixel-art-tutorials/author/pedro-medeiros){:target="_blank"}

## 工具

* [Aseprite](https://www.aseprite.org/){:target="_blank"}: 像素画绘制工具(推荐), 收费但[开源](https://github.com/aseprite/aseprite){:target="_blank"}, 群里有群友 build 的版本
* [存档点插图生成器](https://postcard.leo60228.space/mask/){:target="_blank"}
* [行星生成器](https://deep-fold.itch.io/pixel-planet-generator){:target="_blank"}
* [宇宙背景生成器](https://deep-fold.itch.io/space-background-generator){:target="_blank"}
* [更科学的颜色调色盘](https://meodai.github.io/poline/){:target="_blank"}: 调整左侧设置和右侧锚点即可在下方粘贴各颜色编号
* [渐变色调色盘](https://cssgradient.io/){:target="_blank"}

## FAQ

### 怎么设置存档点(章节)的插图

[看电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr){:target="_blank"}或者冬菜教程

### 怎样获取精美的美术素材

1. 自己画
2. 利用生成器自动生成
3. 在群“制图素材”文件夹里寻找素材。
4. 官图素材改色
5. [Itch.io](https://itch.io/game-assets){:target="_blank"}
6. [opengameart](https://opengameart.org/){:target="_blank"}

注：

1. 这些素材文件中有些是香蕉网的mod, 可直接取用而有些则要解压取用。可以通过Celemod/Olympus搜索mod名区分, 搜不到=需解压。
2. 在解压取用的文件中, 如果有则请先阅读readme.txt/docx.了解格式和原作者的取用限制。并请严格按其规则执行。如果没有明确规定或只有“give a credit”, 请在地图明显处或香蕉网界面设置其为素材提供者。

### `Decal` 像素错位

* 请检查 `decal` 画布大小是否为偶数, 奇数可能会导致这种问题
* 如果把 `decal` 的 `Scale` 调整为不是 `2` 的幂的数值, 也可能会导致像素分布不均匀

> 如果想让 `decal` 贴近 Loenn 里面的网格一些, 画布大小最好能被 `16` 整除