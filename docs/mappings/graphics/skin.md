# 皮肤制作

## 参考

* [蔚蓝皮肤制作教程-星夜祈梦](https://www.bilibili.com/video/BV1YpYueREPt), [文字版](../../assets/mappings/graphics/skin/蔚蓝皮肤制作教程-星夜祈梦.pdf)
* [Skin Mod Helper README](https://github.com/bigkahuna443/SkinModHelper/blob/dev/docs/guide/README.md)
* [Skin Mod Helper Plus README](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/README.md)
* [蔚蓝科技之自制皮肤 mod 教程](https://www.bilibili.com/video/BV1Uv4y1K751)

> 如果你只是想修改素材贴图而不是可以随意切换的皮肤, 请参考[素材替换](../graphics/replace_assets.md)

了解 [Mod 结构](../mod_structure.md)有助于你理解皮肤制作

如果只是做一个皮肤那非常简单, 把官图[解包素材](../useful_links.md#_1)放到你的 Mod 里, 修改贴图即可(可以参考 [Niko 皮肤(latest version-Solo 版本)](https://gamebanana.com/mods/251814)), 
因为你的素材会[覆盖](../mod_structure.md#everest)官图的素材, 但是这样就把复杂度丢给了玩家, 如果有多个皮肤 Mod, 
玩家还需要处理他们的加载顺序, 或者是频繁将皮肤 Mod 拖入/拖出 Mods 文件夹, 所以更通用的做法是使用一个皮肤管理器

目前有两种常用的皮肤管理器 Mod:

* [Skin Mod Helper](SMH.md): 提供了基础的皮肤切换/修改冲刺颜色的功能
* [Skin Mod Helper Plus](SMHP.md): SMH 的更高级的版本(兼容 SMH), 此时我们几乎就能改皮肤的方方面面了

如果你想要制作可供管理的皮肤, 只需要按照对应皮肤管理器 Mod 的规范去配置你的皮肤即可,
图方便的话可以下载 Kuksattu 提供的 [SMHP 模板](https://kuksattu.github.io/celeste/skinmod-template/), 然后你改改图片直接就能用了


## 皮肤绘制方面

* [蔚蓝皮肤制作的一些指导 by 文顂](https://www.bilibili.com/video/BV1Axr9B8ECE/)

## FAQ

### 如何更改刘海随动画变化时的朝向以及头发的偏移

参考 [hair 属性](../xml/sprites_xml.md#hair)

### 如何更改抓取物随动画变化时的高度

参考 [carry 属性](../xml/sprites_xml.md#carry)

### 如何自定义头发

参考 [HairConfig.yaml](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/HairConfig.md)

### Badeline 随从对应的贴图路径是什么

Graphics/Atlases/Gameplay/characters/badeline/jumpSlowXX.png

### 怎么做双马尾

把 `hair00` 改成中间镂空的形式, 画出来就是双马尾(太有想象力了), 具体可以参考[芙莉莲皮肤](https://www.bilibili.com/video/BV1HC411H7CR/)

### 怎么做尾巴

我一开始以为是把头发[弄小点](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/HairConfig.md)偏移到 Madeline 屁股后面做的,
但我看 [Foxeline](https://gamebanana.com/mods/522004) 和 [Cateline](https://gamebanana.com/mods/251793) 好像都是自己写代码的(
