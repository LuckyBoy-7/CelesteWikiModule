## 协程

### 阻塞

指的是代码会执行完当前代码后再接着执行之后的代码, 比如下面的示例中, 如果 `setCameraOffset` 放 say 前面就会先执行再 say, 否则 say 完了才开始移动相机,
所以你在写 lua cutscene 代码的时候要注意当前函数是立即设置了什么东西还是得等自己执行完后再接着执行其余代码

```lua
function onBegin()
    disableMovement()

    setCameraOffset(3, 0)  -- 移动相机, 再开始说话
    say("T_01")
    setCameraOffset(3, 0)  -- 说完话, 再开始移动相机

    enableMovement()
end
```

### 将协程挂载在新的实体上

有时我们可能需要在说话的时候配合镜头的缩放, 如果用一般的方法要么是缩放完才开始说话, 要么是说完话才开始缩放, 所以我们可以通过将协程挂载在一个新的实体上, 
让那个实体跑缩放相机的逻辑, 当前 lua 代码跑 `say` 的逻辑

```lua

local monocle = require("#monocle")

local coroutineEntity = monocle.Entity()

function onBegin()
    local level = getLevel()
    level:add(coroutineEntity)
    coroutineEntity:add(monocle.Coroutine(level:ZoomAcross(vector2(160, 115), 1.7, 2.0)))
    say("xxx")
end

```


## ForceCameraUpdate

使用 `disableMovement` 禁用移动时, 本质上是将玩家切换到了 `StDummy` 状态, 这会同步关闭 `player.ForceCameraUpdate`, 导致相机无法自动更新位置(因为大多数的剧情都要手动控制相机, 所以如果不禁用相机自动更新会导致这俩逻辑打架)

如果你的场景不需要通过 Lua 脚本手动控制相机位移和缩放, 而是希望相机继续维持常规的自动跟随逻辑(受各种相机 Trigger 的作用), 那么将该属性设置为 `true` 即可:

```lua
function onBegin()
    disableMovement()

    player.ForceCameraUpdate = true
    setCameraOffset(3, 0)
    say("T_01")
    player.ForceCameraUpdate = false

    enableMovement()
end
```

## DummyAutoAnimate

表示是否让游戏自动帮你处理一些简单的动画, 比如根据你在地面上自动帮你播放 `idle` 或者 `walk` 动画, 根据你是否在空中自动帮你播放 `jumpSlow` 或者 `fallSlow` 动画,
如果你想自己控制这些, 那就把它关掉

```lua
function onBegin()
    disableMovement()

    player.DummyAutoAnimate = false
    player.Sprite:Play("downed", true)

    enableMovement()
end
```

## wasSkipped

有时你会发现有的代码中会在剧情被跳过时干一些东西, 那是因为正常播放剧情跟跳过剧情你就是得分别处理的, 就像假设一段剧情是往右走 100 米,
如果你在中途退出剧情那你就停在那了, 如果你做了特殊处理将 player 放在 100 米处的位置那么玩家就看不出来了, 也就是**看起来**是对的,
同时你应该也会顺便意识到官图的很多剧情 skip 技巧都是因为官方对跳过剧情的处理不够充分导致的, 让玩家钻了空子,
如果你觉得麻烦可以干脆禁止跳过剧情, 调用 `makeUnskippable()` 函数即可

```lua
function onEnd(room, wasSkipped)
    if wasSkipped then
        -- do something
    end
end
```


