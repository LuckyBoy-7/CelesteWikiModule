# 皮肤制作

## 参考

* [模板](https://kuksattu.github.io/celeste/skinmod-template/){:target="_blank"}
* [蔚蓝皮肤制作教程-星夜祈梦](https://www.bilibili.com/video/BV1YpYueREPt){:target="_blank"}
    * [文字版](../../assets/mappings/graphics/skin/蔚蓝皮肤制作教程-星夜祈梦.pdf)
* [Skin Mod Helper README](https://github.com/bigkahuna443/SkinModHelper/blob/dev/docs/guide/README.md){:target="_blank"}
* [Skin Mod Helper Plus README](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/README.md){:target="_blank"}
* [蔚蓝科技之自制皮肤mod教程](https://www.bilibili.com/video/BV1Uv4y1K751){:target="_blank"}

如果你已经看过了 [Sprites.xml](../xml/sprites_xml.md) 的引导, 那么改 Madeline 皮肤这事儿应该不难理解: 无非就是改贴图, 改 Sprites.xml, 但是这样皮肤只会作用于单图, 而不是随时能使用/切换的皮肤

所以你还得下载 Skin Mod Helper(SMH)/Skin Mod Helper Plus(SMH+) 相关 Helper, 并根据他们指定的规则做相应配置

比如你可以下载 [Skin Mod Helper Plus(SMH+)](https://gamebanana.com/mods/473796){:target="_blank"}, 下载任意[模板](https://kuksattu.github.io/celeste/skinmod-template/){:target="_blank"}丢 Mods 里, 然后你改改图片直接就能用了

相对进阶的由于其他教程和 [SMH+ 的文档](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/README.md){:target="_blank"}相对来说讲的已经够详细了, 还有一堆 Mod 可以抄, 这里就简单补充一些说明就好了

## Sprites.xml 中 &lt;player&gt; 内部的特殊标签 &lt;Metadata&gt;&lt;/Metadata&gt;

```xml

<Sprites>
    <player path="characters/player/" start="idle">
        <Anim id="idle" path="idle" delay="0.1" goto="idle"/>
        <Anim id="idleA" path="idleA" delay="0.12" goto="idle"/>
        <Anim id="idleB" path="idleB" delay="0.16" goto="idle"/>
        <Anim id="idleC" path="idleC" delay="0.05" goto="idle"/>
        <Metadata>
            <!-- path: 表示当前标签作用的对应的动画的 id -->
            <Frames path="idle" hair="0,-2|0,-2|0,-2|0,-2|0,-1|0,-1|0,-1|0,-1|0,-1"/>
            <Frames path="idleA" hair="0,-2|-1,-2:1|-1,-2:2|-1,-2:2|-1,-2:2|-1,-1:2|-1,-1:2|-1,-1:2|-1,-1:1|-1,-1:1|-1,-1|0,-1|0,-1"/>
            <Frames path="idleB"
                    hair="0,-2|-1,-2|-1,-2|-1,-2|-1,-2|-1,-2|-1,-2|-1,-2|-1,-2:1|-1,-2:2|-1,-2:2|-1,-2:2|-1,-2:2|-1,-2:1|-1,-2|-1,-2|-1,-2|0,-2|0,-2|0,-1|0,-1|0,-1|0,-1|0,-1"/>
            <Frames path="idleC" hair="0,-2|-1,-2|-2,-2|-2,-2|-2,-2|-2,-2|1,-1|2,0|0,0|-1,-1|0,-1|0,-1"/>
            ...
            <Frames path="idle_carry" hair="0,-2|0,-2|0,-2|0,-2|0,-1|0,-1|0,-1|0,-1|0,-1" carry="-1,-1,-1,0,0,0,0,0,-1"/>
            <Frames path="jump_carry" hair="1,-3|1,-3|1,-2|0,-2" carry="-3,-3,-1,-1"/>
            <Frames path="run_carry" hair="1,-2|1,-1|1,-1|1,-1|1,-3|1,-2|1,-1|1,-1|1,-1|1,-1|1,-3|1,-2" carry="-1,0,0,0,-3,-2,-1,0,0,0,-3,-1"/>
        </Metadata>
    </player>
</Sprites>
```

&lt;Metadata&gt;&lt;/Metadata&gt; 内部包含了一系列 &lt;Frames&gt;&lt;/Frames&gt; 标签

这些 Frame 标签会为对应动画的某一帧附上一些额外"信息", 这里讲解两个比较重要的属性

### hair

首先你可以简单了解下蔚蓝的头发是怎么绘制的, 这里举一个相近的[例子](https://www.bilibili.com/video/BV1dy421v7o1){:target="_blank"}, 蔚蓝差不多就是这么干的(在这基础上会加个刘海, 具体看`player`素材里的
`bangs00`)

这里的刘海相当于上面例子中的头节点, 其他部分就是一个个圆形

![bangs](../../assets/mappings/graphics/skin/bangs00.png){style="width: 150px; image-rendering: pixelated; title="123"}
![bangs](../../assets/mappings/graphics/skin/hair00.png){style="width: 150px; image-rendering: pixelated; title="123"}

然后我们开始介绍 `hair` 属性

`hair` 的格式类似 `a,b|c,d|...|g,h|`, 它被 `|` 分隔成一个个组, 每个组对应了动画的一帧, 按顺序排列, 比如 `idle` 动画占 8 帧, 所以下面配置有 8 组,
每个组有两个数被 `,` 分隔, 表示刘海相对于 Madeline 头顶的某个位置的 x/y 偏移(要是不设置 Madeline 的头就掉了), 因为官方已经提前调好刘海的大概位置了, 所以你只需要微调 x/y 即可(
这也是为什么这些数字都很小的原因),
有些分组形如 `a,b:c`, 这里的 `c` 范围为`0~2`(不填默认为 `0`), 表示 Madeline 的刘海朝向(具体看`player`素材里的`bangs00` `bangs01` `bangs02` `bangs03`), 比如像 `idleA` 动画中的
Madeline 会左看看右看看, 这就得修改刘海的朝向

### carry

`carry` 的格式类似 `a,b,c,d,...,l,m,n`, 它被 `,` 分隔成一个个组, 每个组对应了动画的一帧, 表示对应帧抓取物 y 方向的偏移(不然抓取物一直僵在一个高度很不自然)

## FAQ

### Badeline 随从对应的贴图路径是什么

Graphics/Atlases/Gameplay/characters/badeline/jumpSlowXX.png

### 怎么做双马尾

把 `hair00` 改成中间镂空的形式, 画出来就是双马尾(太有想象力了), 具体可以参考[芙莉莲皮肤](https://www.bilibili.com/video/BV1HC411H7CR/){:target="_blank"}

### 怎么做尾巴

我一开始以为是把头发[弄小点](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/HairConfig.md){:target="_blank"}偏移到 Madeline 屁股后面做的,
但我看 [Foxeline](https://gamebanana.com/mods/522004){:target="_blank"} 和 [Cateline](https://gamebanana.com/mods/251793){:target="_blank"} 好像都是自己写代码的(

### 怎么在冲刺的时候更改皮肤具体区域的颜色

你需要先理解一下 [ColorGrading](./color_grading.md)

然后我们就可以使用一张图片来配置皮肤某些位置在不同冲次数下的颜色,
配置方式参考 [SMH+ 文档](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/ColorGrade.md){:target="_blank"}

你只需要把文件名改成对应的冲次数(具体配置看上面链接, 或者抄其他皮肤 Mod), 把对应颜色 A 换成你想要的颜色 B,
这样 SMH+ 就可以通过这个配置来设置, 使你在这个冲次数下你皮肤中的颜色 A 变成颜色 B

