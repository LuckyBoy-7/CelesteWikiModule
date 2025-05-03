## [b站 Wiki 常见问题解决方案](https://wiki.biligame.com/celeste/Loenn#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)


## 为什么不能切板

请放重生点: 请好好阅读其他教程先(

## xxx出问题了, 没反应, 没效果

内容填对了吗?

保存了吗(Save Changes了吗, Loenn保存了吗, Ctrl + S了吗)?

路径对了吗(斜杠有敲反吗, 文件名对吗, 要加后缀吗)?

xml内容对了吗(id冲突, 模板错误, 是否多加或者少加了一个/)?

Mod启用了吗?

游戏重启了吗?

## 忘了自己把地图文件保存在哪儿了

重开一次Loenn, 右下角应该会显示"Loaded map: xxxx.bin", 或者你下个`Everthing`

## 怎么修改查看对象属性

Loenn里右键对象

## 怎么置顶右侧placement条目, 方便查找

双击置顶, 双击取消置顶

## 如何找到xxx官图实体的plus版

理论上你直接输入这个实体的名字就会跳出来了(所以这个QA好像不是很有必要写, 但真的会有人会找不到, 或者可能缺helper), 一般名字会在原来的基础上加上Custom,
Grouped, Connected之类的前缀, 最稳的方法是直接在[所有Helper及其对应实体](https://maddie480.ovh/celeste/custom-entity-catalog)里搜关键词即可

## xxx这个实体叫什么

* 搜聊天记录
* 查看对照表(左边下拉`常用`菜单, 使用`Ctrl + F`搜索)
* 拆包(即打开对应地图文件查看)
* 下载CelesteTAS Mod, 运行有这个实体的图, 然后按`~`打开控制台点击相应实体查看信息
* 用你聪明的大脑猜猜看这个实体可能叫什么
* 问群友

### 经典永流传

* 灰砖：Crumble Block
* 一碰就碎的砖块：Crumble Block On Touch

## xxx效果怎么实现

* 搜搜聊天记录
* 拆包
* 尝试在Loenn里搜索关键词:
    * 比如你想改圆刺颜色, 给圆刺换贴图啥的, 那你肯定搜spinner吧, 然后发现有Custom Spinner这个Entity
    * 比如你想改电网颜色, 那你肯定搜lightning或者color吧, 然后发现有Lightning Color这个Trigger
    * 比如你想加个光照, 那肯定搜glow, bloom, light什么的吧
* 如果自己解决不了再问群友(不过偶尔随便问问是没问题的)

## xxxEntity/Trigger怎么用

* 搜搜聊天记录
* 凭直觉试试, 到游戏里看看变化
* 鼠标移到属性上可能会显示详细的描述
* 到香蕉网上搜对应的helper, 运气好的话, 它的界面上会提供wiki链接, 里面会有更加详细的描述([所有Helper及其对应实体](https://maddie480.ovh/celeste/custom-entity-catalog))
* 如果你会code, 有时直接看源码也不失为一种好办法(不是
* 还不行就请教群友

## 如何把不同tile分层

* 一种方法是用viv helper的custom depth tile entity
* 另一种方法是写foreground tile的xml 给tile加ignore

## 怎么做对准

按住ctrl就能`1px` `1px`地移动对象了

## 怎么游戏里更新不了Mod了

先关闭Loenn, 因为它占用了Mod文件, 所以你会发现开着的时候想删Mod都删不了

## 为什么我的刺吸在另一个红绿灯上了

请先阅读[更新顺序](../../general/common/mechanics.md#更新顺序), 所以你想让刺吸在另一个红绿灯上就把那个红绿灯删了重放即可, 对了, 想在Loenn里判断深度直接看谁的图层在下面即可,
这里就是在下面的红绿灯先加载, 先占刺

## 怎么将两个物体绑定在一起

用[Eevee Helper](https://gamebanana.com/mods/53765)

## 我的镜头怎么不受控制了, 看望远镜怎么死了

可参考[镜头垂直锁定](../../general/common/mechanics.md#镜头垂直锁定), 大概率是因为你的场景内有badeline球, 把它的`Lock Camera`属性取消即可

## 这个实体上的属性让我填的路径填什么

把鼠标移到属性上可能会显示详细的描述, 上面可能直接告诉你根路径在哪儿了

如果没告诉你, 那看看这个栏目有无默认值, 有默认值就可以很方便的推导出这个路径是相对什么文件夹的

如果都没有, 那就穷举吧😂, 一般都是从`Gameplay`文件夹开始的

## 路径对的但图片加载不出来

看看斜杠是不是反了, 要用正斜杠`/`而不是反斜杠`\ `

