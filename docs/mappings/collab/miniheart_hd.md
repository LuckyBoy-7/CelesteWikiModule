# Mini 水晶之心高清贴图

本篇讲一个相对来说比较常见的需求, 如果你是在做一个个人合集或者地图包的话, 这个知识, 说不准你会用上. 也就是, 如何更换自己合集的小图章节界面的水晶之心材质.

为了方便后面教程的讲述, 现在底龙随便假设一个合集, 比如, 假设底龙想开启一个“龙之合集”, DragonLand 什么的, 那么正常情况我的 mod 应该看起来像这么一个结构:

- 📁 Mods
    - 📁 DragonLand
        - 📄 everest.yaml
        - 📄 CollabUtils2CollabID.txt (这个里面需要写一个 ID, 而这个写的 ID 很重要, 后面会用到, 在目前的假设下, 这个“合集”的 ID 应该为 DragonLand)
        - 📁 Dialog
        - 📁 Maps
            - 📁 DragonLand
                - 📁 0-Lobbies
                    - 📄 1-Mainland.bin
                - 📁 1-Mainland
                    - 📄 UnderDragon.bin
        - 📁 Graphics
            - 📁 Atlases

如果你玩过或者接触过合集, 你应该会知道在小图游玩结束后, 返回大厅时, 你通关的这个小图(以吃心收尾)的章节选择界面会出现水晶之心的图案, 且默认为原版蓝色的水晶之心.

那么, 为了修改它, 我们需要按照如下操作进行.

在你的地图中创建文件夹 `你的合集/Graphics/CollabUtils2`, 并创建一个新的文本文件, 连同尾缀一起重新命名为 `CrystalHeartSwaps_合集ID.xml`

这个`合集ID`就是上面路径展示里面提到过的`合集ID`

以当前假设的 DragonLand 合集为例, 我要创建的文件应该在这里:

- 📁 Mods
    - 📁 DragonLand
        - 📁 Graphics
            - 📁 CollabUtils2
                - 📄 CrystalHeartSwaps_DragonLand.xml


之后打开 xml 文件并写下以下内容:

```xml

<Sprites>
    <!-- 注意 crystalHeart 前缀不可更改, 且注意大小写 -->
    <crystalHeart_地图路径展开 path="CollabUtils2/miniHeart/bgr/" start="idle">
        <Center/>
        <Loop id="idle" path="" frames="0"/>
        <Loop id="spin" path="" frames="0*10,1-10" delay="0.08"/>
        <Loop id="fastspin" path="" frames="1-10" delay="0.08"/>
    </crystalHeart_地图路径展开>
</Sprites>
```

稍微有一些经验的 mapper 应该注意到了, 这个文件的格式基本上和原版 `Sprites.xml` 的写法一模一样, 这么说没错, 那么你自然也应该知道, 这个 xml 的子项目名字和 `Sprites.xml` 一样是有要求的,
在上面提到了一个`地图路径展开`, 这个`地图路径展开`的意思就是将地图 bin 文件所在的路径抄下来, 然后替换掉所有的斜杠横杠和空白字符为下划线.

仍然以当前假设的 DragonLand 合集为例, 底龙的小图所在的路径为

```plaintext
Maps/DragonLand/1-Mainland/UnderDragon.bin
```

那么我如果想要修改这个小图出来之后的章节选择页面的水晶之心, 我的这个路径抄进 xml 的时候就应该写成

```plaintext
DragonLand_1_Mainland_UnderDragon
```

我的 xml 就应该写成:

```xml

<Sprites>
    <crystalHeart_DragonLand_1_Mainland_UnderDragon path="" start="idle">
        <Center/>
        <Loop id="idle" path="" frames="0"/>
        <Loop id="spin" path="" frames="0*10,1-10" delay="0.08"/>
        <Loop id="fastspin" path="" frames="1-10" delay="0.08"/>
    </crystalHeart_DragonLand_1_Mainland_UnderDragon>
</Sprites>
```

相应的, 我如果要修改大厅的章节选择界面, 大厅所在路径为

```plaintext
Maps/DragonLand/0-Lobbies/1-Mainland.bin
```

那么抄写下来就应该是

```plaintext
DragonLand_0_Lobbies_1_Mainland
```

写出来的 xml 就是

```xml

<Sprites>
    <crystalHeart_DragonLand_0_Lobbies_1_Mainland path="" start="idle">
        <Center/>
        <Loop id="idle" path="" frames="0"/>
        <Loop id="spin" path="" frames="0*10,1-10" delay="0.08"/>
        <Loop id="fastspin" path="" frames="1-10" delay="0.08"/>
    </crystalHeart_DragonLand_0_Lobbies_1_Mainland>
</Sprites>
```

<div class="admonition note">
    <p class="admonition-title">特别说明</p>
    <p>由于合集的大厅一般是在游戏的章节选择列表中的, 所以理论上是存在大厅 B 面或者 C 面的, 那么只需要在前文强调的文本后加一个 <code>_B</code> 或者 <code>_C</code> 即可.</p>
</div>
