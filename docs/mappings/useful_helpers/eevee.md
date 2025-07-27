> Myn:
>
> 宇宙是如何诞生的？是 tt 触发了那个奇点。
>
> 万物是如何运动的？是 eevee 框动着世界变化。

## 参考

* [Eevee Helper 文档](https://gamebanana.com/mods/53765)
* [AfterDawn的eevee教程](../../assets/mappings/useful_helpers/eevee/AfterDawn的eevee教程.docx)(群文件里有更新版本)

> 感谢 AD 的大力支持😘

## 介绍

简单来说 Eevee Helper 为我们提供了一些实体, 我们可以用他们方便地修改实体基础属性, 如位置, 深度大小, 是否可抛接, 是否可见, 是否激活等, 哪怕玩家不会写代码, 使用 Eevee Helper 搭配 flag 就能对一些实体做到简单的功能拓展, 正是因为它简单实用, 但又需要点代码思维, 有的人为之着迷，有的人谈之色变, 所以我将在这里跟大家共同面对这个久仰大名的 Helper -- EEVEE

## 使用

### 基本概念

首先要提出**容器**的概念: Eevee 实体会框选一部分区域(像 Trigger 一样), 这被称为容器, Eevee 实体会对容器内的对象进行操作, 知道了容器是如何挑选对象, 装载/卸载对象的, 我们就能举一反三, 快速上手各种不同实体(你可以把容器想象成一张清单, Eevee 把要处理的对象记在这张清单上, 不处理了就把名字划掉)

* Blacklist: 黑名单(由一系列以逗号分隔的[实体 Type](../loenn/faq.md#type) 组成), 在黑名单中的实体不可以被添加到容器中, 如果留空则会拉黑一些默认实体, 比如前景砖和玩家(我强烈建议不要理会这些默认值, 老老实实手动填 type 就好了)
* Whitelist: 白名单(由一系列以逗号分隔的[实体 Type](../loenn/faq.md#type) 组成), 在白名单中的实体可以被添加到容器中, 如果留空则会在白名单中加入一些默认实体, 比如和绿泡泡和圆刺
* ContainFlag: 只有对应 flag 存在时, 才会将白名单中的实体添加到容器中, 反之移出容器, 如果留空则实体的添加和删除跟 flag 无关(简单来说就是这个属性你当它不存在) 
* Force Standard Behavior: 说人话就是要不要兼容, 如果勾选则会在某些操作时统一使用一个行为, 如果不勾选则会适配, 比如在[视频]()中我们把水搬走的时候如果不做适配就会出问题, 但有时候不做适配也会有奇异搞笑的效果
* Contain Mode: 
    * RoomStart: 在你进房间的时候将容器范围内的实体添加到容器中 
    * DelayedRoomStart: 在你进房间晚一丢丢(1 帧时间不到)的时候将容器范围内的实体添加到容器中(因为哪怕 Eevee 已经尽量让自己的实体在最后更新了, 依然会有更晚更新的实体, 所以 delay 就是用来预防这种情况的)
    * FlagChanged: 在 ContainFlag 从无到有的时候将容器范围内的实体添加到容器中, 反之在 ContainFlag 从有到无的时候会清空容器
    * Always: 只记录容器范围内的实体(RoomStart 是一开始加到容器里就没然后了, 哪怕实体离开了容器范围也依然被容器记录着, 而 Always 是每帧都不断判断更新的, 离开了容器范围就会被剔除)
* Ignore Container Bounds: 你可以简单理解为容器范围变成了房间大小(容器撑满了房间)


### Modifier

#### Depth Modifier

![depth_modifier_panel](../../assets/mappings/useful_helpers/eevee/depth_modifier_panel.png){style="width: 800px; title="123"}

改实体深度的, 这会更改实体间的更新顺序和渲染顺序, 更新顺序的变化一般来说不会出现肉眼可见的 bug,
但渲染顺序决定了谁在上谁在下, 谁会被挡住, 如果遇到不能改深度的实体而你又想改, 那用这个实体就再好不过了

你还可以用这个实体做出

* [尘埃绕着行星转的效果](): 搭配后续提到的 `Attached Container` 食用

### Container

#### Attached Container

![attached_container_panel](../../assets/mappings/useful_helpers/eevee/attached_container_panel.png){style="width: 800px; title="123"}

让容器内实体依附于某一个实体, 随其移动, 仿佛粘在它身上一样(可以不贴着), 这个实体后续我将称其为父节点

* Attached To: 填 Entity Type, 表示可以作为父节点的实体
* Reletive Attach X/Y: 子节点离父节点的相对位置, 如果留空则使用一开始加入容器时的相对位置
* Destroyable: 是否跟着