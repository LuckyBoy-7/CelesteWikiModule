# 皮肤制作

## 参考

* [蔚蓝皮肤制作教程-星夜祈梦](https://www.bilibili.com/video/BV1YpYueREPt){:target="_blank"}
    * [文字版](../../assets/mappings/graphics/skin/蔚蓝皮肤制作教程-星夜祈梦.pdf)
* [Skin Mod Helper README](https://github.com/bigkahuna443/SkinModHelper/blob/dev/docs/guide/README.md){:target="_blank"}
* [Skin Mod Helper Plus README](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/README.md){:target="_blank"}
* [蔚蓝科技之自制皮肤mod教程](https://www.bilibili.com/video/BV1Uv4y1K751){:target="_blank"}

如果你只是想修改素材贴图而不是可以随意切换的皮肤, 请参考[素材替换](../graphics/replace_assets.md)

如果你已经看过了 [Sprites.xml](../xml/sprites_xml.md) 的引导, 那么改 Madeline 皮肤这事儿应该不难理解: 无非就是改贴图, 改 Sprites.xml, 但是这样皮肤只会作用于单图, 而不是随时能使用/切换的皮肤

所以你还得下载 Skin Mod Helper(SMH)/Skin Mod Helper Plus(SMH+) 相关 Helper, 并根据他们指定的规则做相应配置

比如你可以下载 [Skin Mod Helper Plus(SMH+)](https://gamebanana.com/mods/473796){:target="_blank"}, 下载任意[模板](https://kuksattu.github.io/celeste/skinmod-template/){:target="_blank"}丢 Mods 里, 然后你改改图片直接就能用了

相对进阶的由于其他教程和 [SMH+ 的文档](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/README.md){:target="_blank"}相对来说讲的已经够详细了, 还有一堆 Mod 可以抄,
这里就简单补充一些说明就好了(别忘了下载[解包素材](../useful_links.md#_1)对照着理解)

一开始皮肤 Mod 还没有出现的时候自然只能暴力替换, 可以参考 [Niko 皮肤(latest version-Solo 版本)](https://gamebanana.com/mods/251814), 但是皮肤切换什么的就比较麻烦了, 而且能实现的功能有限,
后来有了 [Skin Mod Helper](SMH.md), 提供了基础的皮肤切换/修改冲刺颜色的功能, 再到了后来就有了更高级的 [Skin Mod Helper Plus](SMHP.md)

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

把 `hair00` 改成中间镂空的形式, 画出来就是双马尾(太有想象力了), 具体可以参考[芙莉莲皮肤](https://www.bilibili.com/video/BV1HC411H7CR/){:target="_blank"}

### 怎么做尾巴

我一开始以为是把头发[弄小点](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/HairConfig.md){:target="_blank"}偏移到 Madeline 屁股后面做的,
但我看 [Foxeline](https://gamebanana.com/mods/522004){:target="_blank"} 和 [Cateline](https://gamebanana.com/mods/251793){:target="_blank"} 好像都是自己写代码的(
