# Loenn 插件

我将在这里对一些相对简单的插件(也可能是插件的部分功能)作简短的介绍

[记得先把该下的 Mod 都下了(](../start/must_do.md#helper)

## Room

![room_plugin_panel](../../assets/mappings/Loenn/plugins/room_plugin_panel.png){style="width: 150px; title="123"}

原来移动房间需要按 `Alt + 方向键`, 现在你可以用鼠标拖动/创建房间了

## [styleground preview](https://gamebanana.com/tools/11768)

![styleground_plugin_panel](../../assets/mappings/Loenn/plugins/styleground_plugin_panel.png){style="width: 500px; title="123"}

方便我们在 Loenn 里查看 Parallax 背景在游戏中的实际效果

## [Entity Brush](https://gamebanana.com/tools/10691)

按鼠标中键选取实体, 接着像刷砖块一样刷实体

## [Teleporter](https://gamebanana.com/tools/11768)

点击地图上的某个位置传送过去, 类似 F6 的功能

## [Copy / Paste Stylegrounds](https://gamebanana.com/tools/11768)

在 Scripts 一栏找到这两项

![copy_paste_stylegrounds](../../assets/mappings/Loenn/plugins/copy_paste_stylegrounds.png){style="width: 700px; title="123"}

首先进入你想拷贝背景的图, 然后使用如下插件

![copy_stylegrounds](../../assets/mappings/Loenn/plugins/copy_stylegrounds.png){style="width: 700px; title="123"}

* Convert Apply Groups To Flattened List: 将拷贝出来的数据扁平化(就是减少嵌套), 看起来简洁点
* Only Selected Rooms: 只拷贝当前选中的房间的背景

然后回到你的地图来粘贴你复制的背景

![paste_stylegrounds](../../assets/mappings/Loenn/plugins/paste_stylegrounds.png){style="width: 700px; title="123"}

* Replace Only: 将背景应用于特定的房间
* Add Tags: 给你的背景打上 Tag, 一般用于 Mask
* Replace Existing Stylegrounds: 清除掉原来的背景
