摘抄/整合自

* [Lua Cutscenes 词典 by Nacline]()(制图群群文件)
* ...

## 前言

Lua Cutscenes 是一个十分有用的 helper, 让我们能够便捷地通过编写 lua 脚本在 Celeste 中实现剧情演出, 或者实现其他你能想到的功能, 本词典旨在收录常用 lua
cutscenes 函数语句并详细说明其用法, 方便 mapper 查阅和学习使用

关于 Lua Cutscenes 的基础使用方法和 lua 语言基础知识,
推荐学习 [Saplonily 的 LuaCutscenes 教程](https://saplonily.top/celeste_modding_tutorial/code_modding/extra/lua_cutscene/begin/), Lua剧情简易教程(by
motonine)(群文件), [w3cschool 的 lua 语言教程](https://www.w3cschool.cn/lua/)

本词典参考了 [Saplonily 的 LuaCutscenes 教程](https://saplonily.top/celeste_modding_tutorial/code_modding/extra/lua_cutscene/begin/), [Lua Cutscenes文档](https://maddie480.ovh/lua-cutscenes-documentation/modules/helper_functions.html),
从 0 开始的 lua 入门教程 by Gamation(群文件), Cutscene FAQ, [w3cschool 的 lua 语言教程](https://www.w3cschool.cn/lua/), 非常感谢以上教程对本词典的帮助

## 1. 基础功能

### 1. 禁止玩家移动/允许玩家移动

```lua
disableMovement()

enableMovement()
```

禁止玩家移动的效果在剧情结束后不会恢复, 需手动重新启用

### 2. 禁止跳过剧情

```lua
makeUnskippable()
```

### 3. 禁止重试/启用重试

```lua
disableRetry()

enableRetry()
```

禁止重试的效果在剧情结束后不会恢复, 需手动重新启用

### 4. 禁止暂停/启用暂停

```lua
disablePause()

enablePause()
```

禁止暂停的效果在剧情结束后不会恢复, 需手动重新启用

### 5. 结束当前剧情

```lua
endCutscene()
```

该函数调用后后面的代码依然会执行, 直到遇到一个协程函数, 函数被返回或代码到达末尾

### 6. 结束当前章节

**函数签名:**

```lua
completeArea(spotlightWipe=false, skipScreenWipe = false, skipCompleteScreen = false)
```

**参数说明:**

- `spotlightWipe`: true 时为聚光灯型切换到黑屏, false 为渐变型
- `skipScreenWipe`: 是否跳过切换到黑屏的过程
- `skipCompleteScreen`: 是否跳过结算屏

> 以上三个参数均为可选参数, 参数名后面加等于号表示该可选参数的默认值

**示例:**

```lua
completeArea(false, false, false)
completeArea()  -- 与上面等效
completeArea(false, true, true)  -- 跳过黑屏和结算屏
```

**注意:** 该函数为非协程函数, 调用后会立即执行后面的代码

### 7. 等待

**函数签名:**

```lua
wait(duration)
```

duration 为等待的时间(单位: 秒), 如:

```lua
wait(1.5)
```

表示等待 1.5 秒

### 8. Flag

```lua
setFlag("myFlag", true)
```

使 `myFlag` 这个 flag 存在, 若为 false 则使该 flag 不存在

```lua
getFlag("myFlag")
```

监测 `myFlag` 这个 flag 是否存在, 返回 `bool` 类型的数据, 若存在则返回 `true`, 不存在则返回 `false`, 例如:

```lua
if getFlag("saysomething") then
    say("wannasay")
end
```

如果 `saysomething` 这个 flag 存在, 则播放键名为 `wannasay` 的对话

### 9. 设置玩家朝向

```lua
player.Facing = getEnum("Celeste.Facings", "Left")
```

使玩家朝向左边

```lua
player.Facing = getEnum("Celeste.Facings", "Right")
```

使玩家朝向右边

### 10. 重力

```lua
player.DummyGravity = false
```

禁用重力

```lua
player.DummyGravity = true
```

启用重力

### 11. 设置玩家状态

```lua
setPlayerState(state)
```

state 中填写玩家状态的名称或数字代码([点击此处查询有哪些状态](https://saplonily.top/celeste_modding_tutorial/code_modding/wiki/component/statemachine/){:target="_blank"})

例如将玩家状态设置为冲刺 `const int StDash = 2`, 你会发现玛德琳进行了一次冲刺:

```lua
-- 名称
setPlayerState("StDash")
-- 数字代码
setPlayerState(2)
```

### 12. 杀死玩家

**函数签名:**

```lua
die(direction={0, 0}, evenIfInvincible = false, registerDeathInStats = true)
```

**参数说明:**

- `direction`: 死亡方向, 例如 `{0, 0}` 表示原地死亡, `{1, 0}` 表示水平向右, `{-1, -1}` 表示左上方(蔚蓝的坐标系 y 轴朝下)
- `evenIfInvincible`: 是否无视玩家无敌状态将其杀死(异变中的无敌选项)
- `registerDeathInStats`: 是否记录本次死亡, 即本次死亡是否增加存档死亡数

> 以上三个参数均为可选参数, 参数名后面加等于号表示该可选参数的默认值

例如:

```lua
die()
```

原地杀死玩家, 玩家无敌时不杀死玩家, 本次死亡增加存档死亡数

```lua
die({ 1, -1 }, false, true)
```

在右上方死亡, 玩家无敌时不杀死玩家, 本次死亡增加存档死亡数

### 13. 等待玩家触碰到地板

```lua
waitUntilOnGround()
```

玩家触碰到地板后再执行后续代码

### 14. 给予玩家钥匙

```lua
giveKey()
```

使玩家获得一把钥匙

### 15. 使玩家处于羽毛状态

```lua
giveFeather()
```

使玩家在一段时间内处于羽毛状态, 过场剧情结束时, 羽毛状态会强制结束

### 16. 死亡次数

```lua
deathsInCurrentRoom()
```

这个函数会返回玩家在当前房间的死亡次数

可以做出类似 9-9 玩家死亡次数太多后 Badeline 出来安慰你的效果:

```lua
if deathsInCurrentRoom() == 300 then
    say("dontgiveup")
end
```

表示死亡次数为 300 次时, 播放键名为 dontgiveup 的对话

### 17. 泡泡飞行

#### cassetteFlyTo

**函数签名:**

```lua
cassetteFlyTo(endX, endY, controllX, controllY)
```

> 你可能需要先了解一下[贝塞尔曲线](https://www.bilibili.com/video/BV1YQCvYTEmT/?t=152)

endX 和 endy 表示二阶贝塞尔曲线的终点位置, controllX 和 controllY 表示二阶贝塞尔曲线的控制点位置(可选), 玩家本身的位置作为二阶贝塞尔曲线的起点, 泡泡飞行就是让我们沿着这个曲线跑到终点

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>这里使用的坐标为世界坐标, 坐标获取方式可参<a href="#teleport">传送章节</a></p>
</div>

```lua
cassetteFlyTo(632, 1480, 688, 1472)
```

泡泡"途径" `(688, 1472)`, 最终飞到 `(632, 1480)`

```lua
cassetteFlyTo(632, 1480)
```

以直线路径飞到 `(632, 1480)`

#### cassetteFly

**函数签名:**

```lua
cassetteFly(endX, endY, controllX, controllY)
```

这个函数中的坐标为相对值

```lua
cassetteFly(100, -200)
```

以直线路径飞到位于起点右边 `100 px`, 上方 `200 px` 的位置

注意, 由于泡泡飞行函数为非协程函数, 且飞行结束后会自动允许移动, 所以正常情况下你需要主动等待飞行消耗的时间, 像这样:

```lua
function onBegin()
    disableMovement()
    cassetteFly(100, -200)
    wait(2) -- 为飞行过程留出时间
    endCutscene()
end
```

## 二. [对话和文本](../dialog.md)

### 1. 一般对话

**函数签名:**

```lua
say(dialog)
```

dialog 里填写对话键名

例如:

```ini
CH0_GRANNY =
[MADELINE left normal]
夫人, 请问一下。

[MADELINE left normal]
前面的牌子损坏了...{n}这是{+mountain}路吗？

......
```

这是序章中玛德琳和奶奶的对话, 要让地图中出现这个对话, 可以写:

```lua
say("CH0_GRANNY")
```

如果想让对话以小文本框的形式出现, 类似于 5a 最后一节 Theo 的文本, 可以写成:

```lua
miniTextbox("CH0_GRANNY")
```

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>由于该函数不需要玩家按下按键来结束每一行文本, 所以这种情况下, 一个键名最好只对应一行文本, 不然文本会以非常快的速度依次全部出现, 来不及看清</p>
</div>

### 2. [有选择的对话](examples/intro.md#choice){:target = "_blank"}

**函数签名:**

```lua
choice(...)
```

`...` 中依此填写对话选项的键名, 在我们选择对话后该函数会返回所选对话在这些选项中的位序(从 1 开始)

例如, 你有三个键名分别为 `ask1, ask2, ask3` 的选项:

```lua
choice("ask1", "ask2", "ask3")
```

当选择第二个选项也就是 `ask2` 时, `choice("ask1", "ask2", "ask3")` 会返回数字 2

有两种方式可以实现有选择的对话, 假如你有三个键名分别为 `ask1, ask2, ask3` 的选项, 并且希望在 `ask3` 这个对话之后结束这个有选择的对话:

#### 方法一

利用 `choice(...)` 函数的返回值, 构建循环(可参考[循环部分](#loop))

假如键名为 `answer1, answer2, answer3` 的对话分别为对上述三个选项的回复:

```lua
local shouldEndDialog = false

repeat
    -- 定义一个名为 thischoice 的变量, 将 choice 函数的返回值赋予它
    local thischoice = choice("ask1", "ask2", "ask3")

    if thischoice == 1 then
        say("answer1")
    elseif thischoice == 2 then
        say("answer2")
    elseif thischoice == 3 then
        say("answer3")
        shouldEndDialog = true
    end

until (shouldEndDialog == true)

```

以上为画游序章的做法, 类似地我们也可以:

```lua

while (true) do
    local thischoice = choice("ask1", "ask2", "ask3")

    if thischoice == 1 then
        say("answer1")
    elseif thischoice == 2 then
        say("answer2")
    elseif thischoice == 3 then
        say("answer3")
        break --直接结束这个 loop, 也就不会再进到 choice 函数, 表示结束这个有选择的对话
    end
end
```

这种方法使得选项后的回复非常自由, 可以不局限于对话, 可以加一点人物动作或者光影音效镜头变化什么的

#### 方法二

> 此方法可以使已经选过的选项不再出现

```lua
choiceDialog({
    { "key1", repeatable = false },
    { "key2", repeatable = false },
    { "key3", repeatable = false, onEnd = closeChoiceDialog },
})
```

`repeatable` 为 `false` 时, 该选项在被选过后不再出现, 为 `true` 时该选项则在被选过后保留

这种方法对每个选项的回复键名的格式有要求, 比如选项键名为 `key2`, 则该选项的回复的键名需要在此基础上加上 `_SAY` 的后缀, 即 `key2_SAY`

### 3. 地图中展示明信片

**函数签名:**

```lua
postcard(dialog, sfxIn, sfxOut)
```

**参数说明:**

- `dialog`: dialog 文件中明信片文本的键名
- `sfxIn`: 明信片淡入和淡出时的音效的 ID
- `sfxOut`: 明信片淡出时的音效, 填写音效的 `event` 路径, 这一项是可选参数(这个音效只会在明信片淡出时响起, 且和 `sfxIn` 互斥, , 即当这个音效存在时 `sfxIn` 的音效不会出现)

**如何设置明信片音效([如何自定义明信片音效](../audio/audio.md#postcard){:target="_blank"}):**

在 Loenn 地图元数据设置内找到 `Postcard Sound ID`, 官图默认的可以直接填写的 ID 有 `1, 2, 3, 4, 5, 6 和 Cside`, 分别为第一到六章的明信片音效和C面解锁的明信片音效

例如:

```lua
postcard("testcard", "MySoundID")
```

明信片文本的键名为 `testcard`, 明信片音效 ID 为 `MySoundID`

> 若不希望有音效, 可以在 sfxIn 处填写一个不存在的 ID

```lua
postcard("testcard", "2", "event:/MySound")
```

明信片音效 ID 为 `2`, 明信片淡出音效路径为 `event:/MySound`, 由于后者存在, 只会播放后者

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>明信片在被展示时, 若试图跳过剧情, 明信片会停留在屏幕上, 直到玩家死亡或离开当前房间, 这可以通过禁止跳过剧情来解决</p>
</div>

## 三. 玩家运动和动作

### 1. 行走

#### walkTo

**函数签名:**

```lua
walkTo(x, walkBackwards=false, speedMultiplier = 1.0, keepWalkingIntoWalls = false)
```

**参数说明:**

- `x`: 目标位置的绝对坐标, 单位为 `px`
- `walkBackwards`: 是否倒走
- `speedMultiplier`: 动画播放速度倍率
- `keepWalkingIntoWalls`: 撞墙时是否保持行走状态直到墙被移除

例如:

```lua
walkTo(1384, false, 1.2, false)
```

表示行走至坐标 `1384`, 非倒走, 速度倍率为 `1.2`, 若行走过程中撞墙则结束行走

该函数用到的坐标为玩家的[**世界坐标(world coordinates)**](../loenn/faq.md#coordinates){:target="_bland"}

#### walk

**函数签名:**

```lua
walk(x, walkBackwards = false, speedMultiplier = 1.0, keepWalkingIntoWalls = false)
```

其中 x 表示行走距离(单位为 `px`), `x > 0` 时玩家向右走, `x < 0` 时玩家向左走, 例如:

```lua
walk(-100, false, 1.0, false)
```

向左走 `100 px`, 非倒走, 速度倍率为 `1`, 若行走过程中撞墙则结束行走

### 2. 奔跑

#### runTo

**函数签名:**

```lua
runTo(x, fastAnimation = false)
```

**参数说明:**

- `x`: 目标位置的绝对坐标(世界坐标), 单位为 `px`
- `fastAnimation`: 是否使用快跑的动画

例如:

```lua
runTo(300, true)
```

表示奔跑至世界坐标 `300 px` 处, 使用快跑动画

#### run

**函数签名:**

```lua
run(x, fastAnimation = false)
```

其中 x 为奔跑的相对值(单位为 `px`), `x > 0` 时玩家向右跑, `x < 0` 时玩家向左跑, 例如:

```lua
runTo(100, true)
```

表示向右跑 `100px`, 使用快跑动画

### 3. 跳跃

**函数签名:**

```lua
jump(duration)
```

duration 为跳跃的时间(单位: 秒), 相当于按跳跃键的时间, 默认为 2 秒, 即使玩家不在地上, 该函数也能让玩家跳跃, 例如:

```lua
jump(2)

jump()
```

两者都等效于持续按 2 秒跳跃键

### 4. 动作

#### 正向动画

```lua
player.Sprite:Play(sprite)
```

sprite 为动画名称, 在 [`Sprites.xml`](../xml/sprites_xml.md#xml){:target="_blank"} 中配置, 我们可以使用不同的动画 `id` 来播放不同的动画(如蹲下, 向上看, 晕倒, 睡觉)

```xml

<Anim id="sitDown" path="sitDown" delay="0.1"/>
```

例如, 如果我们想让玛德琳坐下可以这么写:

```lua
player.DummyAutoAnimate = false --停止播放默认动画

player.Sprite:Play("sitDown") --开始播放名为 sitDown(坐下) 的动画

wait(2) --等待2秒

player.DummyAutoAnimate = true
--开启默认动画的播放, 停止播放玛德琳坐下的动画
```

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>这个函数是非协程函数, 是瞬间执行完毕的, 一旦开始播放玛德琳动作动画, 就会执行下一行代码, 动作具体持续多长时间取决于后续代码</p>
</div>

#### 反向动画

```lua
player.Sprite:Reverse(sprite)
-- 将动画设置为第 n 帧, 我们需要设置最后一帧的位置(从 0 开始数), 比如该动画有 6 帧, 所以填入 5
-- 这里通过代码直接拿到当前动画的总帧数(所以不用自己数了)
local lastFrameIndex = player.Sprite.CurrentAnimationTotalFrames - 1
player.Sprite:SetAnimationFrame(lastFrameIndex) --从最后一帧开始
```

sprite 为动画 id, lastFrameIndex 为动画最后一帧的位置(不设置动画会从当前位置倒着播放, 而不是重新开始倒着播放)

例如, 让玛德琳抬头后再低头, 抬头动作的 xml 为:

```xml

<Anim id="lookUp" path="lookUp" delay="0.1" frames="2-7"/>
```

该动画有 7 帧(`7f`), 每帧持续时间为 0.1 秒(`0.1s`), 所以播放完一次动画消耗 `0.6s`

所以 lua 脚本可以这样写:

```lua
function onBegin()
    disableMovement()
    player.DummyAutoAnimate = false -- 停止播放默认动画

    player.Sprite:Play("lookUp")   -- 开始播放向上看(lookUp)的动画

    wait(2)

    player.Sprite:Reverse("lookUp") -- 开始反向播放 lookUp
    local lastFrameIndex = player.Sprite.CurrentAnimationTotalFrames - 1
    player.Sprite:SetAnimationFrame(lastFrameIndex) -- 从最后一帧开始

    wait(0.6)                      -- 等待反向动作完成

    player.DummyAutoAnimate = true -- 开启播放默认动画
    enableMovement()
end

```

若是翻转 sleep 这样的动画:

```xml

<Anim id="sleep" path="sleep" delay="0.1" frames="0-10,10*5,11-23"/>
```

则有 `(10 - 0 + 1) + 5 + (23 - 11 + 1) = 11 + 5 + 13 = 29f`, 最后一帧索引为 `28`, 动画持续时间为 `29 * 0.1 = 2.9s`

<a id="teleport"></a>

## 四. 传送

传送需要有一个目标位置, 而目标位置可以用一个坐标来表示, 如果你不知道如何获取坐标, 可以看[这里](../loenn/faq.md#coordinates){:target="_blank"}

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>以下传送函数均使用世界坐标, 且均为非协程函数</p>
</div>

### 1. changeRoom

```lua
changeRoom(room)

changeRoom(room, x, y)
```

这个函数可以改变玩家所在房间, `room` 为房间名称, `x` 和 `y` 为传送坐标

* 若给出坐标参数, 则该函数会将玩家传送至该房间内距离该坐标最近的重生点
* 若未给出坐标参数, 则该函数会将玩家传送至该房间内最靠近房间左下角的重生点, 若目标房间内没有重生点, 则传送至房间左下角

例如:

```lua
changeRoom("a_02", 592, 1536)
```

表示将玩家传送至 `a_02` 房间, 坐标为 `(592, 1536)` 的地方

```lua
changeRoom("a_02")
```

将玩家传送至 `a_02` 房间, 若该房间内有重生点则传送至该房间内最靠近房间左下角的重生点

### 2. teleport(To)

#### teleportTo

```lua
teleportTo(x, y, room)

teleportTo(x, y)
```

`room` 为房间名称, `x` 和 `y` 为传送坐标

* 当给出房间名称这个参数时, 效果与 `changeRoom(room, x, y)` 类似
* 当只给出坐标参数时, 该函数会将玩家传送至该坐标, 不会强制传送至重生点(但是坐标必须在一个有重生点的房间内, 不然无法正确传送)

例如:

```lua
teleportTo(592, 1536, "a_02")
```

等效于上述 `changeRoom(room, x, y)` 函数

```lua
teleportTo(532, 1516)
```

将玩家传送至坐标 `(532, 1516)` 处

#### teleport

```lua
teleport(x, y, room)

teleport(x, y)
```

`room` 为房间名称, `x` 和 `y` 为相对坐标(单位 `px`), 作用等同于 `teleportTo` 函数, 只不过传送坐标为玩家当前坐标加上相对坐标

假如玩家传送前的坐标为 `(x, y)`:

```lua
teleport(50, -30, "a_02")
```

传送坐标为 `(x + 50, y - 30)`, 其他方面等同于 `teleportTo(x, y, room)`

```lua
teleport(50, -30)
```

将玩家传送至坐标 `(x + 50, y - 30)`

### 3. instantTeleport(To)

#### instantTeleportTo

```lua
instantTeleportTo(x, y, room)

instantTeleportTo(x, y)
```

`room` 为房间名称, `x` 和 `y` 为传送坐标, 该函数会将玩家传送至目标坐标, 类似于 `teleportTo(x, y)`, 但是会立即调整镜头

例如:

```lua
instantTeleportTo(1725, 98)
```

表示将玩家传送至坐标 `(1725, 98)` 处, 无论是否给出房间名称这一参数

#### instantTeleport

```lua
instantTeleport(x, y, room)

instantTeleport(x, y)
```

`room` 为房间名称, `x` 和 `y` 为相对坐标(单位 `px`), 作用等同于 `instantTeleportTo` 函数, 只不过传送坐标为玩家当前坐标加上相对坐标

假如玩家传送前的坐标为 `(x, y)`:

```lua
instantTeleport(50, -30)
```

表示将玩家传送至坐标 `(x + 50, y - 30)` 处, 无论是否给出房间名称这一参数

## 五. 光影/视觉效果

### 1. 亮度(Darkness)

```lua
setDarkness(x)
```

将当前场景的 `darkness` 设置为 `x`(范围为 `0 ~ 1`, 数值越大, 场景越暗)

例如:

```lua
setDarkness(0.8)
```

表示将当前场景的 `darkness` 设置为 `0.8`

```lua
getDarkness()
```

获取当前场景的 `darkness`

例如:

```lua
setDarkness(getDarkness() + 0.3)
```

表示将当前场景的 `darkness` 增加 `0.3`

### 2. 泛光(Bloom)

```lua
setBloomStrength(x)
```

将当前场景的 `bloom` 设置为 `x`(范围为 `0 ~ 1`, 数值越大, 泛光越强)

```lua
setBloomStrength(0.5)
```

将当前场景的 `bloom` 设置为 `0.5`

```lua
getBloomStrength()
```

获取当前场景的 `bloom`

### 3. [滤镜(ColorGrade)](../graphics/color_grading.md){:target="_blank"}

**函数签名:**

```lua
setColorGrade(colorGrade, instant=false)
```

**参数说明:**

* `colorGrade`: 填写想要应用的滤镜名称
* `instant`: 决定滤镜是瞬间切换还是以平滑的方式切换

例如:

```lua
setColorGrade("cold", true)
```

瞬间将滤镜切换为 `cold`

```lua
setColorGrade("golden", false)
```

以平滑的方式将滤镜过渡为 `golden`

## 六. [音乐和音效](../audio/audio.md)

### 1. 音乐

#### playMusic

**函数签名:**

```lua
playMusic(event, progress)
```

**参数说明:**

* `event`: 表示要播放的音乐对应的 `event` 路径(可以在 FMOD 中鼠标右键复制路径), 或是直接使用 Loenn 地图或房间属性里那些自带的原版音乐名字(用别名访问)
* `progress`: 表示音乐 event 对应的 [`progress` 参数](../audio/audio.md#progress){:target="_blank"}(可选)

例如:

```lua
playMusic("event:/MyMap/MyMusic", 1)
```

表示播放路径为 `event:/MyMap/MyMusic` 的音乐, 并将其 `progress` 参数设置为 `1`

```lua
playMusic("music_city_theo")
```

表示播放 `1a` 中 `Theo` 剧情的音乐

#### setMusicProgression

```lua
setMusicProgression(progress)
```

设置音乐的 `progress`

例如:

```lua
setMusicProgression(0)
```

表示将音乐的 `progress` 设置为 `0`

#### getMusic

```lua
getMusic()
```

返回当前音乐的名称或 `event` 路径

#### getMusicProgression

```lua
getMusicProgression()
```

返回当前音乐的 `progress`

例如:

```lua
if getMusicProgression() == 1 then
    say("hahaha")
end
```

表示当 `progress` 为 `1` 时, 播放键名为 `hahaha` 的对话

#### setMusicLayer

```lua
setMusicLayer(layer, value)
```

设置音乐的 [`layer`](../audio/audio.md#layer){:target="_blank"} 参数的值

例如:

```lua
setMusicLayer(2, 0)
```

表示将 `layer2` 参数设置为 `0`

```lua
setMusicLayer(3, 1)
```

表示将 `layer3` 参数设置为 `1`

### 2. 音效

```lua
playSound(event)
```

`event` 为音效的 `event` 路径, 路径可以在 `FMOD` 中鼠标右键 `event` 复制

例如:

```lua
playSound("event:/MyMap/MySound")
```

表示播放路径为 `event:/MyMap/MySound` 的音效

## 七. [镜头](../camera.md)

### 1. 原版镜头

#### CameraOffset

```lua
player.ForceCameraUpdate = true
```

开启镜头更新, 若没有开启的话[无法改变镜头](mechanism.md#forcecameraupdate){:target="_blank"}!

```lua
setCameraOffset(x, y)
```

默认情况下, 相机会聚焦于玛德琳, 即玛德琳在相机正中心, 如果你调整相机偏移, 相机会聚焦于 `玛德琳位置 + offset`

例如:

```lua
player.ForceCameraUpdate = true

setCameraOffset(3, 1)
```

表示将 `CameraOffset` 设置为 `x = 3, y = 1`, 此时镜头偏向屏幕右下(别忘了蔚蓝坐标系 y 轴向下)

#### 镜头缩放

```lua
-- 让我们能够访问并操控原版游戏中的镜头代码, 因为 lua cutscenes 没有直接提供缩放镜头的函数
local level = getLevel()

-- 开启镜头更新, 否则镜头无法被改变
player.ForceCameraUpdate = true
```

以上为镜头成功缩放所需的前置代码

与玩家的传送或移动不同, 缩放镜头需要缩放中心相对于屏幕左上角的坐标

Celeste 中的屏幕宽 `320 px`, 高 `180 px`, 这意味着将坐标设置为 `(160, 90)` 将直接以屏幕中心为中心进行缩放

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>这种镜头缩放不会加载缩放前屏幕之外的画面, 这意味着当你试图缩小镜头或缩放后镜头范围超出缩放前的屏幕画面时, 可能会有一部分画面显示不出来(显示纯黑背景)</p>
</div>

以下为常用的镜头缩放函数, 其中 `x, y` 为缩放中心坐标, `zoom` 为缩放倍数, `duration` 为缩放所需时间:

```lua
coroutine.yield(level:ZoomTo(vector2(x, y), zoom, duration))
```

在一段时间内平滑缩放

```lua
coroutine.yield(level:ZoomSnap(vector2(x, y), zoom))
```

瞬间完成缩放过程

```lua
coroutine.yield(level:ZoomAcross(vector2(x, y), zoom, duration))
```

如果相机已经缩放过了(不是默认相机大小), 则应使用此函数代替 `ZoomTo`, 这将使过渡更加平滑

> 因为 `ZoomTo` 会直接更改焦点位置使得相机位置突变, 而 `ZoomAcross` 缩放相机的同时还会插值对应的焦点位置, 所以要更平滑

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>此处的坐标以第一次缩放前的屏幕为参考系</p>
</div>

```lua
coroutine.yield(level:ZoomBack(duration))
```

在一段时间内平滑地将镜头复原为最初的状态

```lua
level:ResetZoom()
```

立即将镜头重置为最初的状态

以下是一些例子:

```lua
coroutine.yield(level:ZoomTo(vector2(200, 90), 2, 3))
```

在 `3` 秒内以坐标 `(200,90)`(即屏幕中心稍右的位置)为中心, 将镜头放大至原版的 `2` 倍

```lua
coroutine.yield(level:ZoomSnap(vector2(160, 90), 3))
```

以坐标 `(160,90)`(即屏幕中心)为中心, 瞬间将镜头放大至原版的 `3` 倍

```lua
coroutine.yield(level:ZoomTo(ZoomAcross(160, 90), 2, 3))
```

在 `3` 秒内以坐标 `(160,90)`(即第一次缩放前的屏幕中心)为中心, 将镜头放大至原版的 `2` 倍

```lua
coroutine.yield(level:ZoomBack(2))
```

在 `2` 秒内将镜头的缩放复原

以下是一个完整的例子, 如果我们想让镜头多次缩放后复原, 期间让玛德琳说话, 可以这么做:

```lua
function onBegin()
    disableMovement()
    local level = getLevel()
    player.ForceCameraUpdate = true

    -- 以坐标 (130, 90) 为中心放大镜头
    coroutine.yield(level:ZoomTo(vector2(130, 90), 3, 2))

    say("test")

    -- 在第一次放大镜头的基础上平滑地移动和缩放镜头
    -- 此时镜头的中心坐标会变为 (160, 90), 为第一次缩放镜头前的屏幕中心
    coroutine.yield(level:ZoomAcross(vector2(160, 90), 4, 2))

    -- 平滑地复原镜头
    coroutine.yield(level:ZoomBack(2))

    endCutscene()
    enableMovement()
end

function onEnd(level, wasSkipped)
    if wasSkipped then
        -- 如果跳过剧情, 则立即复原镜头。这是个非协程函数, 很适合用在这种地方
        level:ResetZoom()
        endCutscene()
        enableMovement()
    end

end
```

#### 镜头移动

```lua
coroutine.yield(celeste.CutsceneEntity.CameraTo(vector2(x, y), duration))
```

`(x, y)` 为镜头移动的目标坐标, `duration` 为移动镜头所需的时间

与镜头缩放不同, 这里使用的坐标不是屏幕坐标, 而是世界坐标, 即在整个地图这个参考系中的坐标

**注意:**

* 这里的坐标为镜头左上角的坐标, 并非镜头中心的坐标
* 若移动镜头后缩放镜头, 最终的缩放中心的位置和缩放结果不会受到镜头移动的影响(毕竟是根据屏幕坐标来缩放的)
* 若在缩放镜头后移动镜头, 由于缩放不会改变镜头坐标, 所以不会改变后续镜头移动的距离(例如原本镜头的坐标为 `(0, 0)`, 镜头移动的目标坐标为 `(20, 0)`, 不管有没有经过镜头缩放, 镜头都会向右移动
  `20 px`)

<div class="admonition note">
    <p class="admonition-title">提示</p>
    <p>镜头永远都是那个镜头, 缩放的时候位置是不会变的, 因为实际上蔚蓝在做的事只是在先把镜头范围内的画面渲染到一块画布上, 然后给你呈现其中的一部分让镜头看起来像是缩放了, 
同时你可能也会意识到为什么当我们使用 <code>CelesteTAS</code> <code>Ctrl + M</code> 的居中镜头功能, 在放大镜头之后我们仍能看到其余在镜头之外的部分</p>
</div>

```lua
coroutine.yield(celeste.CutsceneEntity.CameraTo(vector2(40, 0), 2))
```

表示在 `2` 秒内将镜头坐标移动到 `(40, 0)`

### 2. 调用[扩展镜头](../camera.md#excamera){:target="_blank"}

除了原版的镜头外, 也可以调用 `扩展镜头(Extended Camera Dynamics)` 的代码来实现镜头缩放, 特别是在地图需要使用扩展镜头, 而扩展镜头会影响原版镜头代码的情况下

<div class="admonition note">
    <p class="admonition-title">提示</p>
    <p>与原版镜头相似, 镜头缩放使用屏幕坐标, 镜头移动使用世界坐标</p>
</div>

例如:

```lua
-- 让我们能够调用扩展镜头的代码(引入拓展镜头的一个类, 这样我们才能使用它提供的函数)
local exCameraHelper = require("#Celeste.Mod.ExCameraDynamics.Code.Module.ExCameraInterop")

local level = getLevel()

--在 3 秒内以坐标 (160,90) 即屏幕中心为中心, 将镜头放大至原本的 2 倍
coroutine.yield(exCameraHelper.Level_ZoomToFocus(level, vector2(160, 90), 2, 3))

--在2秒内将镜头复原
coroutine.yield(exCameraHelper.Level_ZoomBack(level, 2))

--立即将镜头移动到坐标 (1936, 4324), 镜头缩放倍数为 2
cameraZoomHooks.ForceCameraTo(level, cameraFocus.FromCenter(vector2(1936, 4324), 2))
```

<a id="loop"></a>

## 八. 循环

如果需要反复使用相同的函数, 构建循环可以让我们事半功倍, 这一部分会介绍几种构建循环的方式, 并给出具体的例子

### 1. while 循环

```lua
while (condition) do

    ...

end
```

这是最基本的循环, 当它第一次运行时, 会检查 `condition` 条件是否为真(`true`), 或者说条件是否成立, 如果是, 它会运行其中的代码, 一旦到达代码的末尾, 它会再次检查条件, 如果仍然为真,
它会再次运行其中的代码,
重复此过程, 直到条件不再为真

首先看一个例子:

```lua
local counter = 5 -- 声明一个名为 counter 的变量, 给它赋值为 5

-- 当 counter 大于 0 时, 运行其中的代码
while counter > 0 do

    walk(28, false, 0.4) -- 使玩家以 0.4 倍的速度向右走 28 px

    walk(-28, false, 0.4) -- 使玩家以 0.4 倍的速度向左走 28 px

    counter = counter - 1 -- 将 counter 的值减去 1

end -- 这里是循环的末尾, 代码执行到这里后会再次跳到 while 位置执行判断
```

上述循环可以让玛德琳左右踱步, 并且来回走了 `5` 次, 因为每运行一次循环的代码, `counter` 的值会减去 `1`, 循环 `5` 次后不再满足 `counter > 0` 的条件

> 除了 \> (大于)之外, 还可以用其他运算符来进行条件判断: ==(等于), ~=(不等于), <(小于), >=(大于等于), <=(小于等于), 多个条件可以通过 and, not 和 or 进行连接, 你可以参考下面这个例子:

```lua
function onBegin()
    disableMovement()
    makeUnskippable()

    local darkness = 0
    while (true) do
        -- 用来控制循环运行的速度, 此示例中控制的是场景不断变暗的速度
        wait(0.03)

        -- 将 darkness 的值增加1
        darkness = darkness + 1
        -- 将 darkness 除以 100 后的值赋给 setDarkness(), 改变亮度
        setDarkness(darkness / 100)

        -- 当 darkness达到 20, 同时名为 saysomething 的 flag 存在时, 播放键名为 wannasay 的对话
        if darkness == 20 and getFlag("saysomething") then
            miniTextbox("wannasay")
        end

        -- 当 darkness 达到 100 时, break 结束循环
        if darkness == 100 then
            break
        end
    end

    endCutscene()
    enableMovement()
end
```

此代码会使场景慢慢变黑, 当亮度低到一定值时, 若 flag 存在则播放对话(这里用 and 连接两个条件)

> 如果想让场景慢慢变黑, 除了上述方法, 也可以像小火箭那样, 用一个全黑的前景 foreground 搭配 Styleground Fade Controller, 通过 flag 来让黑幕淡入淡出

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>由于浮点数精度误差存在, 如果每次将 <code>darkness</code> 加 <code>0.01</code>, 则 <code>darkness == 1</code> 这样的条件有可能永远无法成立, 所以推荐做法是使用整数最后应用的时候再换算到 <code>0 ~ 1</code> 或者判断条件使用 <code>darkness >= 1</code>, 之后再把 <code>darkness</code> 赋值为 <code>1</code> 即可</p>
</div>

### 2. for 循环

```lua
for i = initial, final, delta do
    -- do something
end
```

`for loop` 本质上是 `while` 的简化版(因为 `for` 能做的 `while` 都能做), 所以这里直接给出翻译, 上面这串约等于 `while` 这么写

```lua
local i = initial

while (i <= final) do
    -- do something

    i = i + delta
end
```

下面这个 `for` 循环在效果上与 `while` 循环的第一个例子相同, 表示让玛德琳左右踱步五次

```lua
for counter = 1, 5, 1 do
    walk(28, false, 0.4)

    walk(-28, false, 0.4)
end
```

### 3. repeat 循环

```lua
repeat
    -- do something
until (condition)
```


当 `condition` 为 `false` 时, 循环会不断重复执行, `condition` 为 `true` 时, 结束循环, 由于条件判断位于循环结尾, 所以循环至少运行一次(画游序章中有选择的对话用到了这个循环)

`repeat` 翻译成 `while` 的话有点像这样

```lua
local forceUpdateOnce = true
local i = 0

while (i <= 5 or forceUpdateOnce) do
    forceUpdateOnce = false
    
    -- do something

    i = i + 1
end
```