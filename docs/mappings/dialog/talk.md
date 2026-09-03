有了前面的 Dialog ID 知识, 这里我们再来讲 Dialogues (游戏内对话)

对话的 Dialog ID 是比较自由的, 一般可以自由写, 如果担心你的不同地图之间文本冲突, 你也可以按照社区的潜规则写 Dialog ID: `你的名字_地图_独特ID`

比如

```plaintext
UnderDragon_FirstDemo_Intro=
[madeline left normal]
Hi!
```

没错, 这就是一个简单的对话, 如果你在地图中调用了这个 ID 的对话 (比如使用了 Dialog Trigger), 就会有一只 Madeline 一脸开心的表情对你说 Hi!

以下是对话的基本形式:

```plaintext
某个 Dialog ID=
[人物ID 头像位置 表情]
第一句话
第二句话
[可能换个人物ID 头像位置 表情]
第三句话
[可能换个人物ID 头像位置 可能换个表情]
第四句话
第五句话
......
```

由于我们在这里只讲对话的定义, 因此对于 `人物`, `头像位置`, 和 `表情` 所对应的部分应该用什么替换,
这里直接给出[对照表](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E4%BA%BA%E7%89%A9%E8%A1%A8%E6%83%85)

* 关于人物 ID 如果想要进一步自定义的话可以参考[portrait_madeline 栏目](../xml/portraits_xml.md#portrait_madeline)
* 关于人物表情如果想要进一步自定义的话可以参考[音效原理 (sfxs 栏目)](../xml/portraits_xml.md#sfxs)和[动画原理 (Animations 栏目)](../xml/portraits_xml.md#animations)

这个部分比较复杂, 用的时候需要多处比对, 所以需要自己理解 `人物`, `头像位置`, 和 `表情` 所对应的用法, 比如 madeline 头像在左边一脸分心的表情, 就是

```plaintext
[madeline left distracted]
```

theo 头像在右边一脸欢呼的表情就是

```plaintext
[theo right yolo]
```

## 对话文本指令

在原版文本中, 有一些对话是有特效的, 他们可能是带颜色, 或者会波动等等, 这些特效的实现依赖于对话特效, 而使用方法在原版文本文件中就有给出:

```plaintext
# Inline Text Commands:
# {~}wavy text{/~}
# {!}impact text{/!}
# {>> x}changes speed at which characters are displayed{>>}
# {# 000000}this text is black{#} (uses HEX color values)
# {+MENU_BEGIN} inserts the dialog from the MENU_BEGIN value (in English, "CLIMB")
# {n} creates a newline, without a page break
# {0.5} creates a 0.5 second pause
# {big}this text is large{/big}

# Gameplay Control Commands (should never change)
# {trigger x} this triggers an in-game event
# {anchor} controls the visual position of the textbox in-game
```

简单来讲, 就是用大括号 `{}` 包起来的, 就是一个指令, 而指令被识别后, 就会产生对应的效果, 使用的方法就是:

`{~}`波动文本`{/~}`

`{!}`紧密文本`{/!}`

`{>> x}`显示速度变化, x 是数字`{>>}`这里文本速度就恢复了

`{# 000000}`这段文本的颜色是黑色的, 000000 是颜色的 hex 代码`{#}`到这里恢复默认颜色

`{+Dialog ID}`会引用 Dialog ID 的文本及特效,
常用名[看这里](https://wiki.biligame.com/celeste/%E6%96%87%E6%9C%AC%E6%95%99%E7%A8%8B#%E5%AE%98%E5%9B%BE%E8%AE%BE%E5%AE%9A%E5%A5%BD%E7%9A%84%E5%B8%B8%E7%94%A8%E5%90%8D){:target="_
blank"}

`{n}`换行

`{0.5}` 暂停 0.5s, 数字可以更改

`{big}`字贼大`{/big}`

`{trigger 0}` 和`{trigger 1}` 在某些 trigger 中有自己的用处

`{anchor 位置}` 将对话框的位置固定: top, center, bottom 三种位置

使用举例:

```plaintext
UnderDragon_FirstDemo_Intro=
[madeline left distracted]
Hello? {0.3}Anyone there?
[madeline left normal]
{~}Wow{/~}, this is so exciting!
{anchor bottom}
[madeline left distracted]
Hmm? What is this, a note? It says...
{#ff0000}The blood moon is coming{#}
[madeline right upset]
That sounds... {>> 0.5}So damn weird{>>}
[madeline right surprised]
I feel like I feel that I feel like I should I dunno{n}I don't really know I don't I I I don't
{big}SHIT{/big}
```

## Prismatic Helper 指令

Prismatic 作为一个常见的过场 Helper, 它为 mapper 提供了许多的 Dialog 形式的指令, 十分方便使用, 这里将可用指令也简单讲解一下,
如有疑问可以查看[原文档](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md)

Prismatic 的使用方法与前文对话指令一致, 指令格式分以下三种:

### 标准模式

对话进行至此会结束上一个对话框并开始逐行执行指令

```plaintext
{ph_trigger 指令}
```

### 强制模式

对话进行至此会停止对话的进行直到指令运行结束

```plaintext
{&ph_trigger 指令}
```

### 并行模式

> 感谢 @苹果羊 对本部分内容的指正

对话进行至此不会等待指令执行, 而是继续对话内容, 同时执行指令

```plaintext
{~ph_trigger 指令}
```

如果你想在跳过对话的时候才执行某个指令, 应当使用

```plaintext
{ph_on_skip 指令}
```

### 指令

对于上面提到的 Prismatic 指令中的“指令”部分, 我们在这里进行详述:

使用时直接将指令放入上面的格式中替换即可, 例如下面如果一个指令为 `walk 3`, 那么你带入上方标准模式的写法, 写进对话文本文件应该是 `{ph_trigger walk 3}`

#### walk run

```plaintext
walk d
run d
```

玩家向右移动 d 个像素, d 为整数

玩家向右奔跑 d 个像素, d 为整数

(与 walk 不同在于调用玩家动画不同)

#### walk_to run_to

```plaintext
walk_to x
run_to x
```

与 walk 和 run 的区别在于, 这里的 x 是玩家会移动到的终点的具体坐标, 而不是距离

x 为整数

#### goto

```plaintext
goto x y
```

将玩家瞬移至地图坐标 (x,y) 的位置, 坐标的查看需要在游戏中进入 Mod 选项开启调试模式, 然后进入地图打开控制台 (默认按键为 `~`), 左上角的信息面板会有坐标信息

#### look

```plaintext
look left 或者 right
```

玩家朝向

#### camera_zoom camera_zoom_back

```plaintext
camera_zoom n t easer
camera_zoom_back t
```

将镜头缩放, n 为缩放倍数, t 为缩放过程用时, easer 为[缓动函数](https://easings.net/zh-cn)

camera_zoom_back 将镜头还原, t 为过程用时

n 为小数, t 为小数

**常用 easer**: `linear`, `quad`, `cube`, `quint`, `exp`, `back`, `big_back`, `elastic` 和 `bounce`. 除了 `linear` 之外所有 easer 都有 `_in` 和 `_out` 版本, 可以简单调整缓动函数的形状

#### camera_pan camera_pan_to

```plaintext
camera_pan x y t easer
camera_pan_to x y t easer
```

移动镜头, 向右 x 像素, 向下 y 像素, 用时 t, easer 为[缓动函数](https://easings.net/zh-cn)

camera_pan_to 表示将镜头移动到坐标 (x,y) 而不是移动距离, 用时 t, easer 为[缓动函数](https://easings.net/zh-cn)

x 和 y 为整数, t 为小数

#### attach_camera_to_player

```plaintext
attach_camera_to_player
```

字面意思, 镜头固定于玩家

#### wait_for_ground

```plaintext
wait_for_ground
```

等待玩家触碰地面

#### disable_skip

```plaintext
disable_skip
```

禁用跳过动画

#### hide_entities

```plaintext
hide_entities type
```

隐藏[类型为 type 的实体](../loenn/faq.md#type)类型 (这里 type 需要填完整)

#### show_next_booster

```plaintext
show_next_booster
```

显示下一个被隐藏的泡泡

#### show_next_door

```plaintext
show_next_door n
```

显示索引序号为 n 的钥匙门, 这个指令适用于制作类 9a 分叉路的钥匙门出现动画

n 为非负整数

#### player_animation baddy_animation

```plaintext
player_animation name mode
baddy_animation name mode
```

第一个是播放玩家动画, 动画 id 为 name, 动画 id 需要查看地图 [Sprites.xml](../xml/sprites_xml.md) (原版的动画id在下面的参考中给出), 例如 `id="idle”`, 那么这里的 name 就填`idle`

第二个是播放 Badeline 动画, name 处同上 (原版动画 id 在下面参考中给出)

mode 为 `start`, 播放动画时指令仍会继续往下执行

mode 为 `play`, 指令等待动画播放结束才继续执行

<details><summary>原版 Madeline 动画 Sprites.xml 参考</summary>

```xml

<Loop id="idle_carry" path="idle_carry" delay="0.1"/>
<Anim id="runSlow_carry" path="run_carry" delay="0.07"/>
<Loop id="jumpSlow_carry" path="jump_carry" delay="0.1" frames="0,1"/>
<Anim id="fallSlow_carry" path="jump_carry" delay="0.1" frames="2,3"/>
<Anim id="pickUp" path="pickup" delay="0.06"/>
<Anim id="throw" path="throw" delay="0.06" goto="idle"/>

<Anim id="idle" path="idle" delay="0.1" goto="idle"/>

<Anim id="idleA" path="idleA" delay="0.12" goto="idle"/>
<Anim id="idleB" path="idleB" delay="0.16" goto="idle"/>
<Anim id="idleC" path="idleC" delay="0.05" goto="idle"/>

<Anim id="lookUp" path="lookUp" delay="0.1" frames="2-7"/>
<Loop id="walk" path="walk" delay="0.06"/>
<Loop id="push" path="push" delay="0.1"/>
<Anim id="runSlow" path="runSlow" delay="0.07" goto="runFast"/>
<Loop id="runFast" path="runFast" delay="0.05"/>
<Anim id="runStumble" path="runStumble" delay="0.05" frames="10-11,0-11" goto="runFast"/>
<Loop id="runWind" path="run_wind" delay="0.095" frames="0-11"/>
<Loop id="dash" path="dash" delay="0.09"/>
<Anim id="dreamDashIn" path="dreamDash" frames="0-3" delay="0.04" goto="dreamDashLoop"/>
<Loop id="dreamDashLoop" path="dreamDash" frames="4-16" delay="0.03"/>
<Anim id="dreamDashOut" path="dreamDash" frames="17-20" delay="0.04"/>
<Loop id="slide" path="slide" delay="0.03"/>
<Loop id="jumpSlow" path="jumpSlow" delay="0.1" frames="0,1"/>
<Loop id="jumpFast" path="jumpFast" delay="0.1" frames="0,1"/>
<Anim id="fallSlow" path="jumpSlow" delay="0.1" frames="2,3"/>
<Anim id="fallFast" path="jumpFast" delay="0.1" frames="2,3"/>
<Loop id="tired" path="tired" delay="0.18"/>
<Anim id="tiredStill" path="tired" frames="0"/>
<Loop id="wallslide" path="climb" frames="0"/>
<Anim id="climbLookBackStart" path="climb" delay="0.08" frames="6,7,8" goto="climbLookBack"/>
<Loop id="climbLookBack" path="climb" frames="8"/>
<Loop id="climbup" path="climb" delay="0.04" frames="0-5"/>
<Anim id="climbPush" path="climb" delay="0.04" frames="0,9-11"/>
<Anim id="climbPull" path="climb" delay="0.04" frames="0,12-14"/>
<Loop id="duck" path="duck" delay="0" frames="0"/>
<Anim id="fallPose" path="fallPose" delay="0.1" frames="0-10" goto="idle"/>
<Loop id="edge" path="edge" delay="0.25" frames="0-13"/>
<Loop id="edgeBack" path="edge_back" delay="0.25"/>
<Anim id="faint" path="faint" delay="0.1" frames="0-10" goto="fainted"/>
<Loop id="fainted" path="faint" delay="0.1" frames="10"/>
<Anim id="flip" path="flip" delay="0.04" frames="0-7" goto="runFast"/>
<Loop id="skid" path="flip" delay="0.04" frames="8"/>
<Loop id="dangling" path="dangling" delay="0.11" frames="0-9"/>
<Anim id="deadside" path="death_h" delay="0.02" frames="0-12"/>
<Anim id="deadup" path="death_h" delay="0.02" frames="0-12"/>
<Anim id="deaddown" path="death_h" delay="0.02" frames="0-12"/>

<Loop id="swimIdle" path="swim" frames="0-5" delay="0.08"/>
<Loop id="swimUp" path="swim" frames="6-11" delay="0.08"/>
<Loop id="swimDown" path="swim" frames="12-17" delay="0.08"/>

<Anim id="startStarFly" path="startStarFly" delay="0.08" goto="starFly"/>
<Loop id="starFly" path="starFly" delay="0.08"/>
<Loop id="bubble" path="bubble" delay="0.08"/>

<Anim id="fall" path="fall" delay="0.06" frames="0-7"/>
<Loop id="bigFall" path="bigFall" frames="0-4" delay="0.06"/>
<Anim id="bigFallRecover" path="bigFall" frames="5*5,6*4,7*3,8,8,9,9,10,10,10" delay="0.08" goto="swimIdle"/>

<Anim id="sleep" path="sleep" delay="0.1" frames="0-10,10*5,11-23"/>
<Anim id="bagdown" path="sleep" delay="0.1" frames="0-10"/>
<Anim id="asleep" path="wakeUp/" frames="0"/>
<Anim id="wakeUp" path="wakeUp/" delay=".1" frames="0-4,5*10,6-14"/>
<Anim id="halfWakeUp" path="halfWakeUp" delay=".1"/>

<Loop id="spin" path="spin" delay="0.1"/>
<Loop id="shaking" path="shaking" delay="0.1"/>
<Loop id="hug" path="hug" delay="0.08"/>

<Anim id="starMorph" path="starMorph" delay="0.06" frames="0-9" goto="starMorphIdle"/>
<Loop id="starMorphIdle" path="starMorph" frames="10" delay="0.06"/>

<Loop id="carryTheoWalk" path="walk_carry_theo" frames="0-11" delay="0.06"/>
<Anim id="carryTheoCollapse" path="walk_carry_theo" frames="12-18" delay="0.06"/>

<Anim id="tentacle_grab" path="tentacle/grab" delay="0.06" frames="0-14" goto="tentacle_grabbed"/>
<Loop id="tentacle_grabbed" path="tentacle/grab" delay="0.1" frames="15-23"/>
<Loop id="tentacle_pull" path="tentacle/grab" frames="24" delay="0.1"/>
<Loop id="tentacle_dangling" path="tentacle/grab" frames="25" delay="0.1"/>

<Anim id="sitDown" path="sitDown" delay="0.1"/>

<Loop id="launch" path="launch" delay="0.06" frames="0-7"/>
<Anim id="launchRecover" path="launchRecover" delay="0.06"/>
```

</details>

<details><summary>原版 Badeline 动画 Sprites.xml 参考</summary>

```xml

<Loop id="idle" path="idle" delay="0.1"/>
<Loop id="idleA" path="idle" delay="0.1"/>
<Loop id="idleB" path="idle" delay="0.1"/>
<Loop id="idleC" path="idle" delay="0.1"/>
<Anim id="lookUp" path="lookUp" delay="0.1"/>
<Loop id="walk" path="walk" delay="0.06"/>
<Loop id="push" path="push" delay="0.1"/>
<Anim id="runSlow" path="runSlow" delay="0.07" goto="runFast"/>
<Loop id="runFast" path="runFast" delay="0.05"/>
<Anim id="runStumble" path="runStumble" delay="0.05" frames="10-11,0-11" goto="runFast"/>
<Loop id="dash" path="dash" delay="0.06"/>
<Anim id="dreamDashIn" path="dreamDash" frames="0-3" delay="0.04" goto="dreamDashLoop"/>
<Loop id="dreamDashLoop" path="dreamDash" frames="4-16" delay="0.03"/>
<Anim id="dreamDashOut" path="dreamDash" frames="17-20" delay="0.04"/>
<Loop id="slide" path="slide" delay="0.03"/>
<Loop id="jumpSlow" path="jumpSlow" delay="0.1" frames="0,1"/>
<Loop id="jumpFast" path="jumpFast" delay="0.1" frames="0,1"/>
<Anim id="fallSlow" path="jumpSlow" delay="0.1" frames="2,3"/>
<Anim id="fallFast" path="jumpFast" delay="0.1" frames="2,3"/>
<Loop id="tired" path="tired" delay="0.18"/>
<Loop id="wallslide" path="climb" frames="0"/>
<Anim id="climbLookBackStart" path="climb" delay="0.08" frames="6,7,8" goto="climbLookBack"/>
<Loop id="climbLookBack" path="climb" frames="8"/>
<Loop id="climbup" path="climb" delay="0.04" frames="0-5"/>
<Loop id="duck" path="duck" delay="0" frames="0"/>
<Loop id="edge" path="edge" delay="0.25" frames="0-13"/>
<Anim id="sleep" path="sleep" delay="0.1" frames="0-10,10*5,11-23"/>
<Anim id="faint" path="faint" delay="0.1" frames="0-10" goto="fainted"/>
<Loop id="fainted" path="faint" delay="0.1" frames="10"/>
<Anim id="flip" path="flip" delay="0.04" frames="0-7" goto="runFast"/>
<Loop id="skid" path="flip" delay="0.04" frames="8"/>
<Loop id="dangling" path="dangling" delay="0.11" frames="0-9"/>
<Anim id="spawn" path="spawn" delay="0.08" frames="0*3,0-9" goto="fallSlow"/>
<Loop id="laugh" path="laugh" delay="0.04"/>
<Loop id="angry" path="angry" delay="0.04"/>
<Anim id="boost" path="boost" delay="0.05"/>

<Loop id="pretendDead" path="sleep" delay="0" frames="23"/>
<Loop id="spin" path="spin" delay="0.1"/>
<Loop id="hug" path="hug" delay="0.08"/>
```

</details>

#### player_inventory

```plaintext
player_inventory inventory
```

这个解释起来比较麻烦, 但是其实就是设置玩家的初始状态, inventory 处的写法可以进地图编辑器的 Map - Metadata, 找到 Inventory 设置查看, 里面的选项原样填入 inventory 即可, 例如默认状态为
Default, 这里就填 `Default`, 注意大小写

#### baddy_appear

```plaintext
baddy_appear x y
```

Badeline 出现在玩家右边 x 像素, 下边 y 像素的位置, x 与 y 为整数

#### baddy_split

```plaintext
baddy_split x y b
```

Badeline 从玩家内部分裂出来, 并移动到玩家右边 x 像素, 下面 y 像素的位置, b 表示是否脸朝玩家

x 和 y 为整数, b 为 `true` 或者 `false`

#### baddy_float_to baddy_float_by baddy_float_by_player

```plaintext
baddy_float_to x y b
baddy_float_by x y b
baddy_float_by_player x y b
```

三种指令分别表示

Badeline 飘到地图坐标 (x,y) 处

Badeline 飘到距离自己目前位置右边 x 像素, 下面 y 像素的位置

Badeline 飘到距离玩家目前位置右边 x 像素, 下面 y 像素的位置

b 表示是否朝向玩家

x 和 y 为整数, b 为 `true` 或者 `false`

#### baddy_combine

```plaintext
baddy_combine
```

Badeline 回到玩家体内

#### baddy_vanish

```plaintext
baddy_vanish
```

Badeline 消失

#### set_flag

```plaintext
set_flag flag b
```

将地图中 flag 的状态设置为 b

flag 写 `flag 名字`, b 为 `true` 或者 `false`

#### run_playback

```plaintext
run_playback name
```

播放名字为 name 的幻影教学

## Femto Helper指令

由于这部分指令量比较少, 直接给出完整的指令, 就不需要考虑代入了.

### femto_obfuscated

```plaintext
{femto_obfuscated X}
```

类似于 Minecraft 中出现的一种文字 bug 了的效果, 这个指令能让文本变成一团乱码, X 是一个 0-100 之间的数字, 表示的是乱码贴近原文本的程度

### femto_caseshift

```plaintext
{femto_caseshift}
```

让文本的大小写出现随机变化