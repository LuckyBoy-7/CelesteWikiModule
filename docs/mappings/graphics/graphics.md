## 资源

* [官图素材资源](../useful_links.md#_1)
* [UnderDragon’s Repository 2.5](https://gamebanana.com/mods/427729)
* [Spooooky's Asset Pack](https://gamebanana.com/mods/427729)
* [Asset Drive Browser](https://maddie480.ovh/celeste/asset-drive): 更方便的浏览社区资源盘

## 自定义界面

[b wiki](https://wiki.biligame.com/celeste/%E5%85%83%E6%95%B0%E6%8D%AE#.meta.yaml_%E6%96%87%E4%BB%B6)

### 开始

* [自定义开始界面(包括山体建模等) by Everest](https://github.com/EverestAPI/Resources/wiki/Overworld-Customisation)
* [自定义开始界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)
* [从零开始的蔚蓝山体建模 by crylone](https://www.bilibili.com/video/BV15V3n65EmY)

### 结束

* [自定义结束界面 by Everest](https://github.com/EverestAPI/Resources/wiki/Chapter-Complete-Screen)
* [自定义结束界面 by 电箱](https://www.bilibili.com/video/BV1Av4y1D7a8/?t=154)
* 使用 `XaphanHelper/Custom End Screen Controller`, 放在你结束关卡的房间里即可(Myn 力推)

## [自制皮肤](skin.md)

## [Decal/DecalRegistry](decals.md)

## [替换素材](replace_assets.md)

## [自定义瓦片(Tileset)](../xml/tilesets.md)

## [滤镜制作](color_grading.md)

## 杂

* [Remaking Celeste’s Lighting / 蔚蓝的光源实现原理](https://medium.com/@NoelFB/remaking-celestes-lighting-3478d6f10bf)

### 像素画教程

* [像素宝典 -- 风农译制](https://www.bilibili.com/read/readlist/rl38114?spm_id_from=333.1369.opus.module_collection.click)
* [Pedro's Pixel Art Tutorials (Patreon)](https://www.patreon.com/collection/266583?view=condensed)
* [Pedro's Pixel Art Tutorials (Lospec)](https://lospec.com/pixel-art-tutorials/author/pedro-medeiros)

## 工具

* [Aseprite](https://www.aseprite.org/): 像素画绘制工具(推荐), 收费但[开源](https://github.com/aseprite/aseprite), 群里有群友 build 的版本
* [存档点插图生成器](https://postcard.leo60228.space/mask/)
* [行星生成器](https://deep-fold.itch.io/pixel-planet-generator)
* [宇宙背景生成器](https://deep-fold.itch.io/space-background-generator)
* [更科学的颜色调色盘](https://meodai.github.io/poline/): 调整左侧设置和右侧锚点即可在下方粘贴各颜色编号
* [渐变色调色盘](https://cssgradient.io/)
* [Spooooky 各种素材路径复制](https://spo0o0ky.github.io/SpooookyAssetPackBrowser/)

## FAQ

### 怎么设置存档点(章节)的插图

[看电箱教程](https://www.bilibili.com/video/BV1A14y1W7hr)或者冬菜教程

### 怎样获取精美的美术素材

1. 自己画
2. 利用生成器自动生成
3. 在群“制图素材”文件夹里寻找素材。
4. 官图素材改色
5. [Itch.io](https://itch.io/game-assets)
6. [opengameart](https://opengameart.org/)

注：

1. 这些素材文件中有些是香蕉网的mod, 可直接取用而有些则要解压取用。可以通过Celemod/Olympus搜索mod名区分, 搜不到=需解压。
2. 在解压取用的文件中, 如果有则请先阅读readme.txt/docx.了解格式和原作者的取用限制。并请严格按其规则执行。如果没有明确规定或只有“give a credit”, 请在地图明显处或香蕉网界面设置其为素材提供者。

### `Decal` 像素错位

* 请检查 `decal` 画布大小是否为偶数, 奇数可能会导致这种问题
* 如果把 `decal` 的 `Scale` 调整为不是 `2` 的幂的数值, 也可能会导致像素分布不均匀

> 如果想让 `decal` 贴近 Loenn 里面的网格一些, 画布大小最好能被 `16` 整除