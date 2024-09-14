!!! warning
    请先阅读Wiki首页的[提问的艺术](../../index.md)

## [b站 Wiki](https://wiki.biligame.com/celeste/Loenn#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

## 忘了自己把地图文件保存在哪儿了

重开一次Loenn, 右下角应该会显示"Loaded map: xxxx.bin"

## ForegroundTiles, BackgroundTiles, Entity, Trigger, Decal都是什么

[详情见](loenn_basis.md)

## 为什么不能切板

请放重生点: 请好好阅读其他教程先(

## 怎么修改查看对象属性

Loenn里右键对象

## 怎么置顶右侧placement条目, 方便查找

双击置顶, 双击取消置顶

## xxx这个实体叫什么

* 搜聊天记录
* 查看对照表(左边下拉`常用`菜单)
* 拆包(即打开对应地图文件查看)
* 下载CelesteTAS Mod, 运行有这个实体的图, 然后按`~`打开控制台点击相应实体查看信息
* 用你聪明的大脑猜猜看这个实体可能叫什么
* 问群友(不建议)

## xxx效果怎么实现

* 搜搜聊天记录
* 搜一下即可:
    * 比如你想改圆刺颜色, 给圆刺换贴图啥的, 那你肯定搜spinner吧, 然后发现有Custom Spinner这个Entity
    * 比如你想改电网颜色, 那你肯定搜lightning或者color吧, 然后发现有Lightning Color这个Trigger
    * 比如你想加个光照, 那肯定搜glow, bloom, light什么的吧
* 如果自己解决不了再问群友(不过偶尔随便问问是没问题的)

## xxxEntity/Trigger怎么用

* 搜搜聊天记录
* 凭直觉试试, 到游戏里看看变化
* 鼠标移到属性上可能会显示详细的描述
* 到香蕉网上搜对应的helper, 运气好的话, 它的界面上会提供wiki链接, 里面会有更加详细的描述
* 如果你会code, 有时直接看源码也不失为一种好办法(不是
* 还不行就请教群友

## 如何把不同tile分层

* 一种方法是用viv helper的custom depth tile entity
* 另一种方法是写foreground tile的xml 给tile加ignore

## 怎么做对准

按住ctrl就能`1px` `1px`地移动对象了
