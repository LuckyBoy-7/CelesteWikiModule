## 代码生成的 Dialog ID

其实 Dialog 原理部分讲完后, 很自然会有一个疑问就是, 如果 Dialog ID 和文本内容我都能自己定义的话, 
那我不是想让地图用哪个地图就能用哪个了? 我想让我的地图用 id 为 `abc123456` 的文本当标题, 用 id 为 `cde12345678` 的文本当章节名称, 可以吗? 

理论上当然可以, 但是反正最后都是要翻译出来的, 你的 id 名字取的再花哨也没有意义, 所以为了规范, Everest 会预设一些占位符作用的 id(一般用 `{}` 包裹), 
后续我们要翻译的话直接使用这些占位符作为 id 即可

## 地图集与地图名称

现在我们来举一个例子, 假设, 我现在需要做一张图, 这个图可能有一到三个章节, 合在一起这个地图集的名称我想叫 Map Demos, 
其中第一个章节我希望叫 First Demo, 而我的名字是底龙(UnderDragon), 那么根据社区规范, 我会建立好文件夹如下: 

- 📁 Mods
    - 📁 MapDemos
        - 📁 Maps
          - 📁 UnderDragon
              - 📁 MapDemos
                  - 📄 FirstDemo.bin ←这是我的地图 bin 文件
                  - 📄 SecondDemo.bin 
                  - 📄 ThirdDemo.bin 


这时 Everest 就会生成对应的 Dialog ID 占位符, 比如这里的图名占位符就是通过地图路径生成的

![02](../../assets/mappings/dialog/localization/02.png){style="height: 300px;"}

同理, 选关页面右下角地图集的名称也是占位符(只不过这个没用 `{}` 框起来): 

![01](../../assets/mappings/dialog/localization/01.png)

现在我们准备开始翻译了, 先准备好相关的 Dialog 文件, 如下

- 📁 Mods
    - 📁 MapDemos
        - 📁 Dialog
            - 📄 English.txt
            - 📄 Simplified Chinese.txt
        - 📁 Maps
            - 📁 UnderDragon
                - 📁 MapDemos
                    - 📄 FirstDemo.bin ←这是我的地图 bin 文件
                    - 📄 SecondDemo.bin
                    - 📄 ThirdDemo.bin

然后就可以开始写 dialog 了, 这里我们选择 `English.txt`(请保证游戏语言和对应文本文件对应), 然后照着占位符把 dialog id 抄上并翻译即可

```plaintext title="路径: Mods/MapDemos/Dialog/English.txt"
UnderDragon_MapDemos= Map Demos
UnderDragon_MapDemos_FirstDemo= First Demo
```

保存后 Ctrl + F5 快速重启游戏, 你就会发现: 

![04](../../assets/mappings/dialog/localization/04.png){style="height: 250px;"}
![03](../../assets/mappings/dialog/localization/03.png){style="height: 250px;"}

你的地图文本已经替换成功啦！

## 常用占位 Dialog ID

除了上面所说的地图名字外, 还有各种占位符等着我们去使用, 例如:

### 小节名称

我的地图中有一个房间叫 First_Checkpoint, 这个房间经过设置后是地图的第一个分节记录点位置, 记录点名字是 Section 1

它对应的 ID 是在 `章节名字 ID` 后面接下划线, 再接 `房间名(如果有空格转为下划线)`

```plaintext
UnderDragon_MapDemos_FirstDemo_First_Checkpoint= Section 1
```

### “第 1 章”字样

> 该功能由 Maddie’s Helping Hand 提供, 需要依赖 Maddie’s Helping Hand

`maddiehelpinghand_chapternumber_` 接 `章节 ID`

```plaintext
maddiehelpinghand_chapternumber_UnderDragon_MapDemos_FirstDemo= 章节零一
```

### 章节“开始”字样

```plaintext
# 这是A面“开始”: 
UnderDragon_MapDemos_FirstDemo_A_start= A面走起！
# 这是B面“开始”: 
UnderDragon_MapDemos_FirstDemo_B_start= B面坐牢！
```

### ABC 面的“攀登”字样

> 该功能由底龙的 Chronia Helper 提供, 需要依赖 Chronia Helper

`chroniahelper_climbtext_` 接 `章节 ID`

如果有 B 面或者 C 面, 需要在后面接一个 `_B` 或者 `_C`

```plaintext
chroniahelper_climbtext_UnderDragon_MapDemos_FirstDemo=点击开始爬
chroniahelper_climbtext_UnderDragon_MapDemos_FirstDemo_B=还有B面? 
chroniahelper_climbtext_UnderDragon_MapDemos_FirstDemo_C=甚至还有C面? 
```

### 吃心结束语

`poem_` 接 `章节名 ID` 接 `_A`(或者 `_B`, 看 AB 面)

```plaintext
poem_UnderDragon_MapDemos_FirstDemo_A= A面拿心！
```

### 进图明信片

A面: `章节名 ID` 接 `_postcard`

非A面: `章节名 ID` 接 `_b(或者_c等)` 接 `_postcard`

```plaintext
UnderDragon_MapDemos_FirstDemo_postcard= A面注意事项
UnderDragon_MapDemos_FirstDemo_b_postcard= B面注意事项
UnderDragon_MapDemos_FirstDemo_c_postcard= C面注意事项
```

### 混音作者

仿照原版 B 面进地图的 remix 作者

remix 名字: `章节名 ID` 接 `_remix`

remix 作者: `章节名 ID` 接 `_remix_artist`

```plaintext
UnderDragon_MapDemos_FirstDemo_remix= Exciting Remix
UnderDragon_MapDemos_FirstDemo_remix_artist= 某个作者
```