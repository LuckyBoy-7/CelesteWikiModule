参考

* [Journeys of a Bygone Wanderer 中文流程](https://www.bilibili.com/video/BV1SbWSe6EAT/): 搭配汉化文件科研效果更佳
* [地图](https://gamebanana.com/mods/532531)


## [内容警告](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=0)

房间名: cw(Content Warning)

### 技巧

* [禁用玩家行走声音](./intro.md#close-walk_sound)
* [关闭背景音乐](./intro.md#close-bgm)
* [黑色背景](./intro.md#black-background)
* [隐藏玩家](./intro.md#hide-player)
* [按序触发 UI Text](./intro.md#show-text-by-order)
* [传送](./intro.md#teleport)

```lua title="Assets/LuaCutscenes/SS2024/fonda/fonda_valhalla.lua(已简化一定内容)"
function onBegin()
    player.ForceCameraUpdate = true
    disableMovement()

    walk(1100)
    wait(0.5)
    setFlag("teleporting", true)
end
```

## [Intro](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=19)

房间名: intro0

### 技巧

* [创建 NPC](./intro.md#create-npc)
* [播放 NPC 动画](./intro.md#play-npc-animation)
* [播放擦除动画](./intro.md#play-wipe)
* [淡入/出 Logo](./intro.md#fade-in-out-logo)
* [路过的 Bird](./intro.md#bird-path)
* [闪烁的火堆](./intro.md#flicker-bonfire)

```lua title="Assets/LuaCutscenes/SS2024/fonda/fonda_intro.lua(已简化一定内容)"
local celeste = require("#celeste")
local monocle = require("#monocle")

local coroutineEntity = monocle.Entity()

local spotlight = require("#Celeste.SpotlightWipe")

function onBegin()
    if not getFlag("introWatched") then
        -- 没播过剧情的话那就播一次
        -- madeline 坐好
        player.DummyAutoAnimate = false
        player.Sprite:Play("downed", true)

        -- 创建一个 NPC, 添加并播放动画
        theo = celeste.NPC(player.Position + vector2(60, 0))
        level:Add(theo)
        local sprite = celeste.GFX.SpriteBank:Create("theo")
        theo:Add(sprite)
        theo.Sprite = sprite
        -- theo 朝左坐好
        sprite.Scale = vector2(-1, 1)
        sprite:Play("sitDown", false, false)

        -- 先设置一个很近的镜头
        level:ZoomSnap(vector2(160, 120), 2)

        -- 使用一个蔚蓝自带的聚光灯式的擦除动画
        spotlight.FocusPoint = player.Position - getRoom().Camera.Position + vector2(30, 0)
        local wipe = spotlight(getRoom(), true)
        wipe.Duration = 2
        wait(wipe.Duration)

        -- 镜头拉远(恢复)
        coroutine.yield(level:ZoomBack(4.0))
        -- 开始聊天
        say("SSC2024_fonda_intro01")
        -- 继续说 ...

        -- 镜头上移
        coroutineEntity:add(monocle.Coroutine(celeste.CutsceneEntity.CameraTo(vector2(0, -850), 3)))
        -- 因为这个时候需要手动控制了, 所以得把 camera 的自动控制关了
        player.ForceCameraUpdate = false
        wait(3.0)
        -- 显示 logo
        setFlag("logo", true)
        wait(3.5)
        -- bird 出场
        setFlag("bird", true)
        wait(4.0)
        -- 隐藏 logo
        setFlag("logo", false)
        wait(2.5)
        -- 天亮了
        setFlag("night", true)
        setFlag("ambience", true)
        -- madeline 播放睡觉动画(为了后续衔接醒来的动画)
        player.Sprite:Play("asleep", true)
        -- 当前剧情已经不需要 theo 了, 将其移除
        theo:RemoveSelf()
        wait(3.0)
        -- 相机往下移回来
        coroutineEntity:add(monocle.Coroutine(celeste.CutsceneEntity.CameraTo(return_pos, 3)))
        wait(4.5)

        -- madeline 醒来
        player.Sprite:Play("wakeUp", true)

        -- 记录下表示播放剧情了
        setFlag("introWatched", true)

        -- 至此剧情结束, 操控权返回至玩家手里
    end
end
```

## [出发前](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=281)

房间名: intro0.5

```lua title="Assets/LuaCutscenes/SS2024/fonda/fonda_morning.lua(已简化一定内容)"
function onBegin()
    -- madeline 走到 theo 跟前
    walkTo(636, false, 0.5)
    -- 开始聊天
    say("SSC2024_fonda_morning01")
    say("SSC2024_fonda_morning02")
    -- 黑色前景淡出
    setFlag("rocket-end", true)
    -- 播放上车, 启程, 下车音效
    playSound("event:/game/00_prologue/intro_vignette", player.Position)
    -- theo 表达关心
    say("SSC2024_fonda_morning03")
    -- 传送到火箭启程场景(通过 tt -> teleport trigger)
    setFlag("teleporting", true)
end
```

## [火箭发射前](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=323)

房间名: intro1

```lua title="Assets/LuaCutscenes/SS2024/fonda/fonda_morning2.lua(已简化一定内容)"
function onBegin()
    -- 创建 theo NPC, 并添加动画
    theo = celeste.NPC(player.Position + vector2(20, 0))
    level:Add(theo)
    local sprite = celeste.GFX.SpriteBank:Create("theo")
    theo:Add(sprite)
    theo.Sprite = sprite
    -- theo 最多能走多快
    theo.Maxspeed = 45

    -- spotlight wipe 特效
    spotlight.FocusPoint = player.Position - getRoom().Camera.Position
    local wipe = spotlight(getRoom(), true)
    wipe.Duration = 2
    wait(wipe.Duration)

    say("SSC2024_fonda_morning04")
    -- 火箭镜头特写
    coroutineEntity:add(monocle.Coroutine(celeste.CutsceneEntity.CameraTo(vector2(1487, -644), 3.0)))
    say("SSC2024_fonda_morning05")
    -- 镜头返回
    coroutineEntity:add(monocle.Coroutine(celeste.CutsceneEntity.CameraTo(return_pos, 3.0)))
    say("SSC2024_fonda_morning06")

    -- theo 播放走路动画, madeline 由 DummyAutoAnimate 控制
    sprite:Play("walk", false, false)
    -- 两人走到火箭跟前
    coroutineEntity:add(monocle.Coroutine(theo:MoveTo(vector2(player.Position.X + 550, theo.Y))))
    coroutineEntity:add(monocle.Coroutine(walk(450, false, 0.7)))

    -- 黑屏是通过游戏里设置 flag trigger 实现的, 而不是在代码里
    -- 之后进入传送 trigger 进入到火箭内部 rocket-inside-intro
end
```

## [出发前火箭内部](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=350)

房间名: rocket-inside-intro

```lua title="Assets/LuaCutscenes/SS2024/fonda/fonda_morning3.lua(已简化一定内容)"
function onBegin()
    theo = celeste.NPC(player.Position + vector2(135, 0))
    -- ...

    -- 设置一个近的镜头
    level:ZoomSnap(vector2(160, 95), 2.5)
    -- 黑屏淡出
    setFlag("rocket-end", false)
    -- 尽头拉远
    coroutine.yield(level:ZoomBack(3.0))
    -- madeline 走进控制室
    walk(105)
    -- Theo: 你准备好了吗
    say("SSC2024_fonda_morning08")
    -- 镜头拉近
    coroutine.yield(getLevel():ZoomTo(vector2(160, 95), 1.5, 2.0))
    say("SSC2024_fonda_morning09")
    -- 镜头再次
    coroutineEntity:add(monocle.Coroutine(getLevel():ZoomAcross(vector2(160, 95), 2.0, 0.5)))
    -- 一阵强劲的音乐响起
    playSound("event:/game/05_mirror_temple/button_activate", player.Position)
    playSound("event:/game/03_resort/clutterswitch_finish", player.Position)
    playSound("event:/game/01_forsaken_city/console_red", player.Position)
    playSound("event:/moladan/Ignition", player.Position)
    playSound("event:/moladan/rocketstartfade", player.Position)
    -- 警告, 警告
    setFlag("red", true)
    wait(0.1)
    setFlag("red", false)
    
    -- 传送到火箭发射场景 intro1
    setFlag("teleporting", true)
end

```

## [火箭发射](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=374)

房间名: intro1, intro2, intro3, intro4

### 技巧

* [火箭发射粒子特效](./intro.md#particle-effect)
* 进入太空后原背景淡出, 显露出星空: 设置背景的 Fade Y 即可
* 加载动画: 通过一个 decal 实现(本质上就是播放了)
* 火箭起飞: 通过 Eevee 的 [Attached Container](../../useful_helpers/eevee.md#attached-container) 搭配 Switch Gate 实现的

最后通过在 lua 中启用 flag 传送到小行星带场景

## [小行星带](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=445)

房间: rocket1

### 技巧

* 变成火箭: 自己写的代码, 使用了一个 `Rocket Trigger`
* 小行星带: 伟大的 Eevee 的 [Flag Gate Container](../../useful_helpers/eevee.md#flag-gate-containerflag-mover)


## [Halcyon note 部分](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=788)

房间: a-08

### 技巧

* [在 lua 中监听键盘输入](./intro.md#keyboard)
* [移动背景图片](./intro.md#move-stylegrounds)

## [初见 <font color="EE9933">Salem</font>](https://www.bilibili.com/video/BV1SbWSe6EAT/?t=1243)

房间: b-09a

### 技巧

* [自定义 NPC](./intro.md#custom-npc)

> 我居然才发现 victor 和 salem 使用的都是 oshiro 的音效😱



## 碎碎念

我发现随着剧情的展开, lua 代码的质量, 各种剧情手法的实现方式都有了很大的进步, 所以如果你也想做剧情图但是觉得自己没有能力, 
不要这么早放弃鸭, 会变强的!
