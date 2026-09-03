参考

* [Mod安装教程(视频)](https://www.bilibili.com/video/BV1WU4y1E7Y5)
* [Mod安装教程(CelesteMiaoServer.Wiki)](https://celestenyaserver.github.io/CelesteMiaoServer.Wiki/#/zh-cn/Celeste/Mods/Everest_and_mod)
* [Mod安装教程(专栏)](https://www.bilibili.com/read/cv17241217/)




## Mod 基本概念

所谓游戏, 本质上只是计算机上的一段可执行程序, 这段程序在运行的过程中使用了各种美术和音乐/音效素材, 并通过代码组织逻辑, 最后搭建起了一个虚拟的世界

如果你不满足于这个世界, 在原来世界的基础上添加/删除/修改了东西, 从这一刻, Mod 就诞生了

所谓 Mod, 就是修改, 即 Modification 的缩写, 小到配置文件的数值修改, 大到代码层面的游戏逻辑修改, 都是 Mod

## Mod 加载器

本来大家互相传播自己制作的 Mod 画面非常美好, 但是问题很快随之而来

**使用麻烦**

你需要将原本的游戏备份一份, 使用 Mod 覆盖掉游戏本体后, 在使用新的 Mod 的时候需要先恢复备份, 
然后再覆盖新的 Mod, 因为你无法保证两个 Mod 是否修改了不同的地方, 导致覆盖新 Mod 的时候老 Mod 有些残留的文件, 可能导致意想不到的问题,
同时一个 Mod 会有不同的版本, 如何方便的更新 Mod 也是个难点

**兼容性地狱**

比如有的人觉得 boss 太强了, 于是在配置文件里降低了 boss 的生命上限, 但是有的人觉得 boss 太弱了, 于是在配置文件里增加了 boss 的生命上限, 
那你说这俩 Mod 放在一起的时候听谁的, 甚至这还只是最简单的情况, 正常情况下对于大型 Mod 跟其他 Mod 发生冲突是不可避免的

所以我们急需一个解决方案让我们的 Mod 大一统起来, 于是乎, Mod 加载器诞生了, Mod 加载器本质上提供了一套规范, Modder 都按 Mod 加载器的规矩来,
做出来的 Mod 格式上就比较规整统一, 做出来就非常适合游玩/传播/学习, 尽管还是会有 Mod 冲突的问题, 但是在这个阶段玩家要考虑的就很少了(压力来到 Modder 这边), 
只需要把 Mod 加载器安装好, 然后下好的 Mod 放到规定目录下(一般是 Mods 文件夹), 然后直接就可以开玩了

然后呢, 由于蔚蓝的圈子比较小, 所以不像 MC 那样有 Forge, Fabric, NeoForge, Quilt 等那么多种类的 Mod 加载器, 
在蔚蓝我们目前只有一种主流的 Mod 加载器, 即 [Everest](https://gamebanana.com/tools/6449)

## Mod (加载器)管理器

现在我们已经知道什么是 Mod, 什么是 Mod 加载器了, 但是对玩家来说安装和管理 Mod 还是太吃操作了, 于是 Mod 管理器诞生了, 
一般来说一个现代的 Mod 管理器会提供一套非常人性化的 GUI, 让我们仅仅通过点击操作就可以实现 Mod(管理器) 的下载, 更新, 删除, 设置预设等等等等,
好似在淘宝上欣赏比对商品一样, 相中顺眼的 Mod 就下载过来, 最后运行游戏即可游玩 Mod, 简直太无脑啦!

目前蔚蓝圈中主流的 Mod 管理器有以下两种, 大家自行选择即可

* 国内的: [Celemod](https://www.bilibili.com/video/BV1Hx4y1z7L5)
* 国外的: [Olympus](https://everestapi.github.io/)

## Mod 搜索渠道

> 蔚蓝作为一个平台跳跃游戏肯定是地图类型的 Mod 比较多, 所以大家也别忘了还有其他有意思的 Mod 哟

* 使用 Mod 管理器
* [Gamebanana](https://gamebanana.com/mods/games/6460): 几乎所有的 Modder 制作完 Mod 都会上传到香蕉网上
* [香蕉网镜像](https://celeste.weg.fan/): 方便国内玩家使用, 由 WEGFan 提供

## Mod 更新

Mod 的更新目前有三种方式

1. 使用 Mod 管理器
2. 游戏内更新(由于 Everest 提供的游戏内更新方式是连上香蕉网的, 所以国内玩家想要更改这种行为连上 WEGFan 的镜像的话需要安装 [ChinaMirror](https://celeste.weg.fan/submissions/detail/2464697282266787/celeste-mod-china-mirror) 这个 Mod) 
3. 自己通过任意方式找到最新的 Mod 资源, 并在 `Celeste/Mods/` 文件夹里将老版 Mod 替换即可
