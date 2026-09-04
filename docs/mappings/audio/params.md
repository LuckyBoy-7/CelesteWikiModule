下面要介绍的参数本质上都是一样的, 只是官方以不同的方式使用了他们, 例如, 
官方使用了某个参数来调整音乐音量, 起作用的是参数本身, 只不过这个参数恰好叫 fade 而已


<a id="fade"></a>

## fade

表示背景音乐的音量(当然如果你没有给对应的 `event` 添加 `fade` 参数, 那么这个参数自然也影响不到音乐, 官方的音乐同理)

例如

```lua
local Audio = require("#Celeste.Audio")

function onBegin()
    disableMovement()

    playMusic("event:/music/lvl6/main")

    wait(3)
    setFade(0)
    wait(5)
    setFade(1)
    wait(3)

    enableMovement()
end

function setFade(fade)
    Audio.SetMusicParam("fade", fade)
end

```

<div class="admonition info">
    <p class="admonition-title">提示</p>
    <p>你可以模仿这个例子去设置任意的自定义参数, Lua Cutscenes 只是给你提供了<a href="https://github.com/Cruor/LuaCutscenes/blob/master/LuaCutscenes/Assets/LuaCutscenes/helper_functions.lua" target="_blank">常用的函数</a>, 但你能做的更多</p>
</div>



<a id="progress"></a>

## progress

主要用于 8a 高潮段中的递进效果

> 如果你感兴趣的话可以在 `fmod` 中搜索 `progress` 参数具体被哪些 `event` 使用了

例如

```lua
function onBegin()
    disableMovement()
    playMusic("event:/music/lvl9/main")
    wait(5)

    jump()
    setMusicProgression(2)
    wait(5)

    jump()
    setMusicProgression(3)
    wait(5)

    jump()
    setMusicProgression(4)
    enableMovement()
end

```

<a id="layer"></a>

## layer

官方会在有些 `event` 里放很多个音轨, 并用 `layer1`, `layer2`, `layer3`, `...` 等参数来分别控制他们的音量

例如

```lua
function onBegin()
    disableMovement()

    playMusic("event:/music/lvl6/main")

    -- 设置 layer1 参数为 0
    setMusicLayer(1, 0)
    setMusicLayer(2, 0)
    setMusicLayer(3, 0)
    wait(3)
    -- 设置 layer1 参数为 1
    setMusicLayer(1, 1)
    wait(3)
    setMusicLayer(2, 1)
    wait(3)
    setMusicLayer(3, 1)
    wait(3)

    enableMovement()
end
```
