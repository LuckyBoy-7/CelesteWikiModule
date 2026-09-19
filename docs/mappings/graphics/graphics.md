资源

* 官图素材资源: 请在制图群 (QQ: 633125440)群文件里下载, 叫做 `[图像类] Celeste Graphics Dump v1400`
* [UnderDragon’s Repository 2.5](https://gamebanana.com/mods/427729): 素材包
* [Spooooky's Asset Pack](https://gamebanana.com/mods/427729): 素材包
* [Asset Drive Browser](https://maddie480.ovh/celeste/asset-drive): 更方便的浏览社区资源盘

## 游戏开始前

### 自定义开始界面

* [自定义开始界面 (包括山体建模等) by Everest](https://github.com/EverestAPI/Resources/wiki/Overworld-Customisation)
* [自定义开始界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)
* [b wiki](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#.meta.yaml_%E6%96%87%E4%BB%B6)
* [从零开始的蔚蓝山体建模 by crylone](https://www.bilibili.com/video/BV15V3n65EmY)

### 设置存档点 (章节)的插图

> 可参考[电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程 ([存档点图片生成器](http://postcard.leo60228.space/mask/))

比如你的地图路径是 <code>Mods/CelesteWikiTutorial/Maps/<font color="green">TestMap/awa</font>.bin</code>, 那你就在 <code>
Mods/CelesteWikiTutorial/Graphics/Atlases/<font color="red">Checkpoints</font>/<font color="green">TestMap/awa</font>/A/</code> 里放存档点图片即可 (字母 `A` 表示 `A` 面)

初始存档点 (也就是一开始默认进入的房间)对应的图片命名为 `start`, 其他图片改成章节存档点房间的名称即可

## 游戏进行时

### [替换素材](replace_assets.md)

### [自定义瓦片 (Tileset)](../xml/tilesets.md)

### [Decal/DecalRegistry](decals.md)

### [滤镜制作](color_grading.md)

### [自制皮肤](skin.md)

## 游戏结束后

### 自定义结束界面

* [自定义结束界面 by Everest](https://github.com/EverestAPI/Resources/wiki/Chapter-Complete-Screen)
* [自定义结束界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)
* [b wiki](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#.meta.yaml_%E6%96%87%E4%BB%B6)
* 使用 `XaphanHelper/Custom End Screen Controller`, 放在你结束关卡的房间里即可 (Myn 力推)

## 其他

* [Remaking Celeste’s Lighting / 蔚蓝的光源实现原理](https://medium.com/@NoelFB/remaking-celestes-lighting-3478d6f10bf)

### 像素画教程

* [像素宝典 -- 风农译制](https://www.bilibili.com/read/readlist/rl38114?spm_id_from=333.1369.opus.module_collection.click)
* [Pedro's Pixel Art Tutorials (Patreon)](https://www.patreon.com/collection/266583?view=condensed)
* [Pedro's Pixel Art Tutorials (Lospec)](https://lospec.com/pixel-art-tutorials/author/pedro-medeiros)

### 工具

* [Aseprite](https://www.aseprite.org/): 像素画绘制工具 (推荐), 收费但[开源](https://github.com/aseprite/aseprite), 群里有群友 build 的版本
* [存档点插图生成器](https://postcard.leo60228.space/mask/)
* [行星生成器](https://deep-fold.itch.io/pixel-planet-generator)
* [宇宙背景生成器](https://deep-fold.itch.io/space-background-generator)
* [更科学的颜色调色盘](https://meodai.github.io/poline/): 调整左侧设置和右侧锚点即可在下方粘贴各颜色编号
* [渐变色调色盘](https://cssgradient.io/)
* [Spooooky 各种素材路径复制](https://spo0o0ky.github.io/SpooookyAssetPackBrowser/)

## FAQ

### `Decal` 像素错位

* 请检查 `decal` 画布大小是否为偶数, 奇数可能会导致这种问题
* 如果把 `decal` 的 `Scale` 调整为不是 `2` 的幂的数值, 也可能会导致像素分布不均匀

> 如果想让 `decal` 贴近 Loenn 里面的网格一些, 画布大小最好能被 `16` 整除