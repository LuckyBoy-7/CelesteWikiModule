# 自定义瓦片(Tileset)

参考/整合

* [Tileset 教程 by 底龙](https://uddrg.notion.site/UnderDragon-s-Partial-Wiki-2737f4f27e63808582b3f0689163d8f9?p=2737f4f27e63805e903ce64c7725f62b&pm=s), [底龙的自定义tiles教程](https://www.bilibili.com/video/BV1Eu4y1L78Y), [非官方模板的tiles应用](https://www.bilibili.com/video/BV1t94y1c7ZT)
* [摘自电箱教程](https://www.bilibili.com/video/BV1kV4y137Mn/?spm_id_from=333.788&vd_source=217bacbee37820b5bf3ed2f4fb8f6c94)
* [摘自 Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Custom-Tilesets)
* [瓦片集格式参考](https://github.com/EverestAPI/Resources/wiki/Tileset-Format-Reference)
* [motonine 的自制 tiles 教程](../../assets/mappings/xml/tileset/自制tiles教程%5B23.12.17更新%20作者motonine%5D.txt)


你可能需要先了解一下什么是 [XML](./basics.md)

## Tile

> Tile 分为前景砖和背景砖, 这里我们主要讨论前景砖

Tile, 即**瓦片**, 对应到游戏就是里面一块一块的前景砖, 这些砖块大小为 `8px * 8px`, 将他们拼接起来就形成了我们日常看到的地形和背景

![tileset_explanation0](../../assets/mappings/xml/tileset/tileset_explanation0.png)


<div class="admonition note">
    <p class="admonition-title">热知识</p>
    <p>
    我们在 Loenn 里涂的砖是永远不会被卸载的, 也就是不存在进房间的时候加载对应区域的砖, 离开房间的时候卸载, 所以像 Filler 这种进不去的房间, 里面的砖也会在我们切板的时候被看到
    </p>
</div>


## Tileset

Tileset, 即 Tile-set, **瓦片-集**

表示各种瓦片的素材集合, 当你绘制 Tile 的时候, 就可以从集合里选出 `8px * 8px` 的素材来使用(后文将其称为一个**素材单元**),
我们以 cement tileset 为例, 就像下面这样

<figure style="display: flex; gap: 1rem;">
  <div>
    <img src="/celeste_wiki/assets/mappings/xml/tileset/cement.png" alt="tileset" style="width: 150px; image-rendering: pixelated;">   
    <figcaption>路径: Celeste\Graphics\Atlases\Gameplay\tilesets\cement.png</figcaption>
  </div>
  <div>
    <img src="/celeste_wiki/assets/mappings/xml/tileset/cement_cell.png" alt="tileset" style="width: 153px; image-rendering: pixelated;">   
    <figcaption>里面的一格格素材单元</figcaption>
  </div>
</figure>


![tileset_explanation1](../../assets/mappings/xml/tileset/tileset_explanation1.png)

但事实上真的是这么做的吗, 要是我们手动选择素材单元, 涂 100 个 Tile 难道要手动到 tileset 里找 100 次素材单元? 那眼睛都要挑花了,
所以显然不是也不应该这么做

仔细回想一下你会发现, 你在 Loenn 里涂砖的时候, 每个砖的样式其实会随着周围砖的摆放/清除而变化, 这是怎么做到的?

## 规则

以下面这个 `3 * 3` 大小的自定义砖为例

![tileset](../../assets/mappings/xml/tileset/3by3_tileset.png){style="width: 150px; image-rendering: pixelated; title=123"}

* 如果我告诉中间的砖: 嘿, 兄弟, 你要是看见周围都有砖的话, 你就把自己的的贴图改成 tileset 中第 i 行, 第 j 列的素材单元
* 如果我告诉正右边的砖: 嘿, 兄弟, 你要是看见周围都有砖, 但是左边没砖的话, 你就把自己的的贴图改成 tileset 中第 m 行, 第 n 列的素材单元

如果我们把所有的砖通知一遍, 那是不是就不用我们自己一个个挑素材啦, 事实也正是如此, 蔚蓝和 Loenn 都是通过这种方法渲染正确的素材单元的,
而这个规则则是通过 `ForegroundTiles.xml` 来配置的, 所以接下来讲解 `ForegroundTiles.xml`

## ForegroundTiles.xml 属性

游戏中的每一种不同的砖都对应 `ForegroundTiles.xml` 中的一种样式 `<Tileset></Tileset>`, 像下面这样,


```xml title="Celeste\Content\Graphics\ForegroundTiles.xml"
<Data>
  <Tileset id="z" path="template">
    <set mask="x0x-111-x1x" tiles="0,0;1,0;2,0;3,0"/>
    <set mask="x1x-111-x0x" tiles="0,1;1,1;2,1;3,1"/>
    <set mask="x1x-011-x1x" tiles="0,2;1,2;2,2;3,2"/>
    <set mask="x1x-110-x1x" tiles="0,3;1,3;2,3;3,3"/>

    ...

    <set mask="010-111-010" tiles="4,12"/>
    <set mask="110-111-011" tiles="4,13"/>
    <set mask="011-111-110" tiles="4,14"/>

    <set mask="padding" tiles="5,0;5,1;5,2;5,3;5,4;5,5;5,6;5,7;5,8;5,9;5,10;5,11"/>
    <set mask="center" tiles="5,12"/>
  </Tileset>
  <Tileset id="1" copy="z" path="dirt" ignores="g"/>
  <Tileset id="m" copy="z" path="lostlevels" ignores="n">
    <set mask="padding" tiles="5,0;5,1;5,2;5,3;5,4;5,5"/>
    <set mask="center" tiles="5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,6;5,7;5,8;5,9;5,10;5,11;5,13;5,14;5,7;5,8;5,9;5,10;5,11;5,13;5,14;5,12"/>
  </Tileset>
</Data>
```


下面我们先来简单介绍一下 `<Tileset></Tileset>` 中相对重要的属性

> 更多属性请参考 [Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Tileset-Format-Reference)

* `id`: 单个特殊字符(可以用英文字母, 也可以用单个汉字), 你可以理解为你的 tileset 的槽位或是别名, 游戏需要通过 id 找到你的 tileset, 所以显然 id 不能重复 
* `path`: 指明了 tileset 对应的素材位置, 路径相对于 `Gameplay/tilesets` 文件夹, 例如上面提到的 `cement` 对应的 `path` 就是 `cement`
* `sound`: Everest 添加的额外配置, 表示玩家踩上去什么声音, 写在 `set` 节点里, 如 `<set ... sound="1"/>`, 具体数字对应的声音可以看[对照表](../audio/tile_sounds.md)

现在你已经知道游戏是如何找到你的 tileset 素材了, 那么上文提到的规则呢, 这是由 `<set></set>` 节点决定的

`<set></set>` 节点由 `<Tileset></Tileset>` 包含着, 一条 `<set></set>` 对应一个规则, 它的属性有:

* `mask`: 也就是上文提到的**规则**, 表示对应位置砖周围的情况, 它有三种写法
    - `xxx-x1x-xxx`: 去掉 `-` 分三行排列刚好是个 `3 x 3` 的块, 块中间的位置对应当前砖的位置, 然后我们需要在这个九宫格内填规则, `0` 表示无砖, `1` 表示有砖, `x` 表示任意, 因为九宫格的中间对应当前砖, 所以永远填 `1`,
    - `padding`: 表示最外层的里面一层(例如对于 `4 x 4` 的块, 它的 `padding` 对应 `3 x 3` 那一圈的位置),
    - `center`: 表示剩下的没有被考虑的所有情况(一般来说就是指比 `padding` 还要里面的)
* `tiles`: 对应素材单元的坐标集合(格式为 `(第 x 列, 第 y 行)`, 列从左往右数, 行从上往下数, 位置从 0 开始)

<figure>
    <img src="/celeste_wiki/assets/mappings/xml/tileset/cement_cell_index.png" alt="tileset" style="width: 153px; image-rendering: pixelated;">   
    <figcaption>比如这里涂白的单元格坐标为 (3, 1)</figcaption>
</figure>

一个单元格通过询问 mask 找到适合的 `<set></set>`, 然后从它的 `tiles` 属性中随机抽一个来用, 以实现自然的变化感

现在我们知道了规则是如何配置的, 那么让我们反过来看 `<Tileset></Tileset>` 中剩下的几个属性吧

* `copy`: 需要拷贝配置(即内部的 `<set></set>` 节点)的 tileset 对应的 id, 这样我们就可以只写一个 template (模板) 然后复用了, 当然我们可以继续写 `<set></set>` 节点来覆盖拷贝过来的一部分配置
* `ignores`: 需要忽略的 tileset 对应的 id, 被忽略后, 周围要是有那个 tileset, 则那个位置在当前 tileset 的 mask 中会被视为空气, 即 `0(无砖)` (常用于制作 tile 分层的效果, 让画面的层次更丰富)


## 使用官图的 `ForegroundTiles.xml`

好了, 现在你已经完全懂 `ForegroundTiles.xml` 里的都是啥了, 自己加个 `<Tileset></Tileset>` 还不是随随便便?

接下来举例最简单的一种自定义砖块的情况, 即官图砖改色, 这里使用 `tileset/snow.png` 来作演示

先随便改个颜色

<figure>
    <img src="/celeste_wiki/assets/mappings/xml/tileset/colored_snow.png" alt="tileset" style="width: 153px; image-rendering: pixelated;">   
    <figcaption>路径: Graphics/Atlases/Gameplay/tilesets/WikiTest/colored_snow</figcaption>
</figure>

然后找到官图的 `ForegroundTiles.xml` (在 `Celeste/Content/Graphics/` 下), 粘贴到自己的路径下比如 `Graphics/{作者名}/{项目名}/`(也就是要[套文件夹](../mod_structure.md#everest)),
随后照猫画虎的在后面填上跟 snow tileset 类似的配置, 然后改改 id, 改改素材路径就好了

```xml hl_lines="10"
<Data>
  <Tileset id="z" path="template">
    ...
  </Tileset>
  
  ...
  
  <Tileset id="3" copy="z" path="snow"/>
  
  <Tileset id="A" copy="z" path="WikiTest/colored_snow"/>
</Data>
```

最后在 Loenn 的元数据中使用这个配置, 并且 Ctrl + F5 刷新 Loenn, Ctrl + F5 重启游戏即可

![loenn_metadata_foreground_tile](../../assets/mappings/xml/tileset/loenn_metadata_foreground_tile.png)

![colored_res](../../assets/mappings/xml/tileset/colored_res.png)


## 使用别人的 `ForegroundTiles.xml`

由于官图的 `ForegroundTiles.xml` 配置过于简单, 各个 Tile 之间没有明确的联系, 导致画砖效率低下, 于是大伙儿写出了更优的配置来方便画砖

### [`ForegroundTiles.xml` by 0x0ade](https://github.com/EverestAPI/Resources/wiki/Custom-Tilesets)

<figure markdown>
  ![tileset](../../assets/mappings/xml/tileset/0x0ade_tileset_template.png){style="width: 600px; image-rendering: pixelated; title=123"}
  <figcaption>tileset 模板(若要使用, 请右键另存为)</figcaption>
</figure>

<figure markdown>
  ![tileset](../../assets/mappings/xml/tileset/0x0ade_tileset_template_explanation.png){style="width: 800px; image-rendering: pixelated; title=123"}
  <figcaption>tileset 模板说明</figcaption>
</figure>

```xml title="ForegroundTiles.xml(未带Data标签)"
<!--
    Copy-paste this at the top of your tilesets .xml
    so that it sits next to the vanilla template (z).
    Reminder: Make sure to place the .xml into a subfolder
    and to properly set the tilesets filepath in Ahorn / Lönn.
    Also, set sound= a number from https://gist.github.com/0x0ade/2efb9532f7dc1a11daffd4dae78f07b3 
    Instead of making your custom tilesets copy z (vanilla layout),
    make them copy y (this layout) instead.
    Template image file: https://i.imgur.com/jUq838l.png
  -->
  <Tileset id="y" path="subfolder/betterTemplate">
    <!-- edges -->
    <!-- top -->
    <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5"/>
    <!-- bottom -->
    <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
    <!-- left -->
    <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
    <!-- right -->
    <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>

    <!-- h pillar == -->
    <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9"/>
    <!-- v pillar left -->
    <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9"/>
    <!-- v pillar right -->
    <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9"/>

    <!-- v pillar || -->
    <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
    <!-- v pillar top -->
    <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1"/>
    <!-- v pillar bottom -->
    <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>

    <!-- single tiles -->
    <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2"/>

    <!-- corner top left -->
    <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5"/>
    <!-- corner top right -->
    <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5"/>
    <!-- corner bottom left -->
    <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
    <!-- corner bottom right -->
    <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
    
    <!-- inside corner top left -->
    <set mask="111-111-110" tiles="1,3"/>
    <!-- inside corner bottom left -->
    <set mask="110-111-111" tiles="1,4"/>
    <!-- inside corner top right -->
    <set mask="111-111-011" tiles="2,3"/>
    <!-- inside corner bottom right -->
    <set mask="011-111-111" tiles="2,4"/>

    <!-- |== -->
    <set mask="110-111-110" tiles="11,7"/>
    <!-- _||_ -->
    <set mask="010-111-111" tiles="7,4"/>
    <!-- ==| -->
    <set mask="011-111-011" tiles="4,7"/>
    <!-- T||T -->
    <set mask="111-111-010" tiles="7,11"/>

    <!-- ???? -->
    <set mask="010-111-110" tiles="3,2"/>
    <!-- ???? -->
    <set mask="010-111-011" tiles="4,2"/>
    <!-- ???? -->
    <set mask="011-111-010" tiles="4,1"/>
    <!-- ???? -->
    <set mask="110-111-010" tiles="3,1"/>
    <!-- ???? -->
    <set mask="010-111-010" tiles="3,3"/>
    <!-- ???? -->
    <set mask="110-111-011" tiles="3,4"/>
    <!-- ???? -->
    <set mask="011-111-110" tiles="4,3"/>

    <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
    <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
  </Tileset>
```
### [`ForegroundTiles.xml` by ...](https://github.com/EverestAPI/Resources/wiki/Custom-Tilesets)

常用在 [Spooooky 素材包](https://gamebanana.com/mods/474010)中, 详情见[各种 Spooooky 砖](https://gist.github.com/Spo0o0ky/1fb2a35efda40ab7e19e403c5328aad8)(里面会自带 xml 的, 或者在[网站](https://spo0o0ky.github.io/SpooookyAssetPackBrowser/)上直接复制)

<figure markdown>
  ![tileset](../../assets/mappings/xml/tileset/Guide_Alternate.jpeg){style="width: 800px; image-rendering: pixelated; title=123"}
  <figcaption>tileset 模板说明</figcaption>
</figure>

```xml title="ForegroundTiles.xml(未带Data标签)"
    <Tileset id="y" path="alternateTemplate">
        <!-- edges -->
        <!-- top -->
        <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5"/>
        <!-- bottom -->
        <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
        <!-- left -->
        <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
        <!-- right -->
        <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>
    
        <!-- h pillar == -->
        <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9"/>
        <!-- v pillar left -->
        <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9"/>
        <!-- v pillar right -->
        <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9"/>
    
        <!-- v pillar || -->
        <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
        <!-- v pillar top -->
        <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1"/>
        <!-- v pillar bottom -->
        <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
    
        <!-- single tiles -->
        <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2"/>
    
        <!-- corner top left -->
        <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5"/>
        <!-- corner top right -->
        <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5"/>
        <!-- corner bottom left -->
        <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
        <!-- corner bottom right -->
        <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
    
        <!-- inside corner top left -->
        <set mask="111-111-110" tiles="1,3"/>
        <!-- inside corner bottom left -->
        <set mask="110-111-111" tiles="1,4"/>
        <!-- inside corner top right -->
        <set mask="111-111-011" tiles="2,3"/>
        <!-- inside corner bottom right -->
        <set mask="011-111-111" tiles="2,4"/>
    
        <!-- |== -->
        <set mask="110-111-110" tiles="11,7"/>
        <!-- _||_ -->
        <set mask="010-111-111" tiles="7,4"/>
        <!-- ==| -->
        <set mask="011-111-011" tiles="4,7"/>
        <!-- T||T -->
        <set mask="111-111-010" tiles="7,11"/>
    
        <!-- ???? -->
        <set mask="010-111-110" tiles="3,2"/>
        <!-- ???? -->
        <set mask="010-111-011" tiles="4,2"/>
        <!-- ???? -->
        <set mask="011-111-010" tiles="4,1"/>
        <!-- ???? -->
        <set mask="110-111-010" tiles="3,1"/>
        <!-- ???? -->
        <set mask="010-111-010" tiles="3,3"/>
        <!-- ???? -->
        <set mask="110-111-011" tiles="3,4"/>
        <!-- ???? -->
        <set mask="011-111-110" tiles="4,3"/>
    
        <!-- ???? -->
        <set mask="x0x-111-011" tiles="2,10"/>
        <!-- ???? -->
        <set mask="x0x-111-110" tiles="1,10"/>
        <!-- ???? -->
        <set mask="011-111-x0x" tiles="2,11"/>
        <!-- ???? -->
        <set mask="110-111-x0x" tiles="1,11"/>
        <!-- ???? -->
        <set mask="x11-011-x10" tiles="10,1"/>
        <!-- ???? -->
        <set mask="11x-110-01x" tiles="11,1"/>
        <!-- ???? -->
        <set mask="x10-011-x11" tiles="10,2"/>
        <!-- ???? -->
        <set mask="01x-110-11x" tiles="11,2"/>
    
        <!-- ???? -->
        <set mask="x0x-111-010" tiles="8,11"/>
        <!-- ???? -->
        <set mask="010-111-x0x" tiles="8,4"/>
        <!-- ???? -->
        <set mask="01x-110-01x" tiles="4,8"/>
        <!-- ???? -->
        <set mask="x10-011-x10" tiles="11,8"/>
    
        <!-- ???? -->
        <set mask="x0x-011-x10" tiles="6,4"/>
        <!-- ???? -->
        <set mask="x0x-110-01x" tiles="9,4"/>
        <!-- ???? -->
        <set mask="x10-011-x0x" tiles="6,11"/>
        <!-- ???? -->
        <set mask="01x-110-x0x" tiles="9,11"/>
    
        <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
        <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
    </Tileset>
```


## 自定义 `ForegroundTiles.xml`

虽说你可以直接改色或者抄, 我还是撸了一份样例来帮助大家理解/自制` ForegroundTiles.xml`

我们这次将制作纯色砖, 为的是便于理解点和线之间的关系, 而且无需为一种规则的单元画多种样式, ~~绝对不是我懒~~

> 制作耗时不超过 4 节水课, 不难的(小声

### 借用 xml

首先你肯定得有 xml 才能写吧, 简单点就是直接从官图文件(路径: `Celeste\Content\Graphics\ForegroundTiles.xml`)里复制粘贴出来, 
不然就自己建一个, 之后放在自己的 mod 里, 随便取什么名字, 放哪儿都行(但要记得之前提过的重名问题, 需要套文件夹来降低风险)

这里仿照官图就直接塞 Graphics 文件夹里了, 就像这样

![custom_foreground_tile_xml_location](../../assets/mappings/xml/tileset/custom_foreground_tile_xml_location.png)

### 清理, 补充 xml

既然都是自制 ForegroundTiles.xml, 那官图相关的配置就没必要留了(你想留的话也可以), 清理一下, 然后加上自己的配置后大概长这样(记得看里面灰灰的注释)
```xml 

<Data>
    <!-- 这里是一些官图配置, 如果你不删的话 -->
    ...
    
  <Tileset id="A" path="awa">
      <!-- 我们之后在这里写规则-->
  </Tileset>
      <!-- 好像得至少写一个带 copy 的节点 Loenn 才会显示, 所以这里我们重复写一遍 -->
  <Tileset id="B" copy="A" path="awa"/>
</Data>

```

### 准备 tileset 素材

可以使用任意像素绘画软件(Aseprite, Pixel Studio, PS等)

<figure markdown>
  ![tileset](../../assets/mappings/xml/tileset/awa.png){style="width: 700px; image-rendering: pixelated; title=123"}
  <figcaption>路径: Celeste\Mods\CelesteWikiTutorial\Graphics\Atlases\Gameplay\tilesets\awa.png</figcaption>
  <figcaption>可右键图像另存为</figcaption>
</figure>

<figure markdown>
  ![tileset](../../assets/mappings/xml/tileset/awa_with_grid.png){style="width: 700px; image-rendering: pixelated; title=123"}
  <figcaption>使用软件自带网格查看更加清晰</figcaption>
</figure>

### 写配置

虽然写配置在准备素材之后, 但实际操作上我们是边写配置边画的

对于一个素材单元来说, 它的关键部分只会由点和线组成, 最多 4 个点, 4 条边, 最少 0 个点, 0 条边, 所以我们可以分类讨论穷举所有情况

我们用绿色/蓝色来表示规则里对应的砖, 红色只是为了方便理解对应的情况

```xml title="Celeste\Mods\CelesteWikiTutorial\Graphics\PureColorForegroundTiles.xml"
<Data>
  <Tileset id="A" path="awa">
    <!-- 0 个点, 0 条边 -->
    <!-- 绿色 -->
    <set mask="center" tiles="0,0"/>
    <!-- 蓝色 -->
    <set mask="padding" tiles="0,2"/>  

    <!-- 0 个点, 1 条边 -->
    <set mask="x0x-111-111" tiles="3,0"/>
    <set mask="111-111-x0x" tiles="3,2"/>
    <set mask="x11-011-x11" tiles="2,1"/>
    <set mask="11x-110-11x" tiles="4,1"/>

    <!-- 0 个点, 2 条边 -->
    <!-- L型 -->
    <set mask="x0x-011-x11" tiles="6,0"/>
    <set mask="x0x-110-11x" tiles="8,0"/>
    <set mask="11x-110-x0x" tiles="8,2"/>
    <set mask="x11-011-x0x" tiles="6,2"/>
    <!-- 平行 -->
    <set mask="x0x-111-x0x" tiles="12,14"/>
    <set mask="x1x-010-x1x" tiles="12,11"/>

    <!-- 0 个点, 3 条边 -->
    <set mask="x0x-010-x1x" tiles="11,0"/>
    <set mask="x0x-110-x0x" tiles="12,1"/>
    <set mask="x1x-010-x0x" tiles="11,2"/>
    <set mask="x0x-011-x0x" tiles="10,1"/>

    <!-- 0 个点, 4 条边 -->
    <set mask="x0x-010-x0x" tiles="14,1"/>

    <!-- 1 个点, 0 条边 -->
    <set mask="011-111-111" tiles="17,1"/>
    <set mask="110-111-111" tiles="18,1"/>
    <set mask="111-111-110" tiles="18,2"/>
    <set mask="111-111-011" tiles="17,2"/>

    <!-- 1 个点, 1 条边 -->
    <!-- 左上 -->
    <set mask="01x-110-11x" tiles="23,1"/>
    <set mask="011-111-x0x" tiles="22,2"/>
    <!-- 右上 -->
    <set mask="110-111-x0x" tiles="26,2"/>
    <set mask="x10-011-x11" tiles="25,1"/>
    <!-- 右下 -->
    <set mask="x11-011-x10" tiles="25,5"/>
    <set mask="x0x-111-110" tiles="26,4"/>
    <!-- 左下 -->
    <set mask="x0x-111-011" tiles="22,4"/>
    <set mask="11x-110-01x" tiles="23,5"/>

    <!-- 1 个点, 2 条边 -->
    <set mask="01x-110-x0x" tiles="1,5"/>
    <set mask="x10-011-x0x" tiles="3,5"/>
    <set mask="x0x-011-x10" tiles="3,7"/>
    <set mask="x0x-110-01x" tiles="1,7"/>

    <!-- 1 个点, 3 条边(不存在) -->
    <!-- 1 个点, 4 条边(不存在) -->
     
    <!-- 2 个点, 0 条边 -->
    <!-- 同侧 -->
    <set mask="111-111-010" tiles="9,5"/>
    <set mask="011-111-011" tiles="11,7"/>
    <set mask="010-111-111" tiles="9,9"/>
    <set mask="110-111-110" tiles="7,7"/>
    <!-- 对角 -->
    <set mask="110-111-011" tiles="15,12"/>
    <set mask="011-111-110" tiles="19,12"/>

    <!-- 2 个点, 1 条边 -->
    <set mask="x0x-111-010" tiles="16,5"/>
    <set mask="01x-110-01x" tiles="18,7"/>
    <set mask="010-111-x0x" tiles="16,9"/>
    <set mask="x10-011-x10" tiles="14,7"/>

    <!-- 2 个点, 2 条边(不存在) -->
    <!-- 2 个点, 3 条边(不存在) -->
    <!-- 2 个点, 4 条边(不存在) -->


    <!-- 3 个点, 0 条边 -->
    <set mask="010-111-011" tiles="1,11"/>
    <set mask="010-111-110" tiles="5,11"/>
    <set mask="110-111-010" tiles="5,15"/>
    <set mask="011-111-010" tiles="1,15"/>

    <!-- 3 个点, 1 条边(不存在) -->
    <!-- 3 个点, 2 条边(不存在) -->
    <!-- 3 个点, 3 条边(不存在) -->
    <!-- 3 个点, 4 条边(不存在) -->

    <!-- 4 个点, 0 条边 -->
    <set mask="010-111-010" tiles="8,13"/>

    <!-- 4 个点, 1 条边(不存在) -->
    <!-- 4 个点, 2 条边(不存在) -->
    <!-- 4 个点, 3 条边(不存在) -->
    <!-- 4 个点, 4 条边(不存在) -->

  </Tileset>

  <!-- 好像得至少写一个带 copy 的节点 Loenn 才会显示-->
  <Tileset id="B" copy="A" path="awa"/>
</Data>
```
### 在 Loenn 元数据中选择配置

记得 `ForegroundTiles.xml` 改名或者套文件夹(如果你不知道这意味着什么, 请看[这里](../mod_structure.md#everest))

![loenn_xml_config](../../assets/mappings/xml/loenn_xml_config.png)

然后 `Ctrl + F5` 刷新 Loenn, 随便涂涂画画即可

### 成果展示

理论上 Loenn 在这里只会显示绿色和蓝色的砖

![custom_tileset_showcase](../../assets/mappings/xml/tileset/custom_tileset_showcase.png)

## 自定义 `AnimatedTiles.xml`

为了完整性这里再提一嘴 `AnimatedTiles.xml`

我们可以使用它来为每种砖的样式附加上可偏移的动画, 操作与 `ForegroundTiles.xml` 类似

这里我们直接借用原版自带的 grass 动画也就是 `Celeste/Graphics/Atlases/Gameplay/animatedTiles/grass/top_a`

```xml title="Celeste\Mods\CelesteWikiTutorial\Graphics\PureColorAnimatedTiles.xml"
<Data>
    <!--  delay: 一帧动画持续多少秒  -->
    <!--  posX/Y: 相对于砖的 xy 偏移, 比如这里 y 刚好向上偏移了一个砖的长度, 草就长到了砖上  -->
    <!--  origX/Y: 就是动画的锚点, 或者说中心在哪儿, 比如一张图片放在某个位置, 光有坐标还不够, 还得有图片的中心, 也就是图片的哪个点该放在那个位置  -->
	<sprite name="awa_top_a" path="animatedTiles/grass/top_a" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
</Data>
```

然后我们在 `ForegroundTiles.xml` 给想生草的砖加个 `sprites` 属性即可, 名字就填我们定义好的 `awa_top_a`

```xml title="Celeste\Mods\CelesteWikiTutorial\Graphics\PureColorForegroundTiles.xml" hl_lines="6"

<Data>
  <Tileset id="A" path="awa">
    ...

    <!-- 0 个点, 1 条边 -->
    <set mask="x0x-111-111" tiles="3,0" sprites="awa_top_a"/>
    <set mask="111-111-x0x" tiles="3,2"/>
    <set mask="x11-011-x11" tiles="2,1"/>
    <set mask="11x-110-11x" tiles="4,1"/>

    ...

  </Tileset>

  <!-- 好像得至少写一个带 copy 的节点 Loenn 才会显示-->
  <Tileset id="B" copy="A" path="awa"/>
</Data>
```

别忘了在 Loenn 元数据里选择 `AnimatedTiles.xml`

然后你就能看到生草的砖了😋
![custom_tileset_showcase](../../assets/mappings/xml/tileset/custom_tileset_with_animated_tiles.png)
