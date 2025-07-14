* [Saplonily 的 LuaCutscenes 教程](https://sapcelestemod.netlify.app/extra_luacs/begin/)
* motonine的LuaCutscene教程(群文件里)
* [Lua Cutscenes 文档](https://maddie480.ovh/lua-cutscenes-documentation/modules/helper_functions.html)
* [Prismatic Helper 文档](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#cutscenes)
* [Lua Cutscenes Recipe Book by Everest Wiki](https://github.com/EverestAPI/ModResources/wiki/Lua-Cutscenes-Recipe-Book)
* [Lua Cutscenes without Lua Experience by Gamation](https://medium.com/@crumpledmemes/lua-cutscenes-without-lua-experience-3c2d87804e20)

由于蔚蓝是用 `C#` 编程语言编写制作的, 而官方的剧情都是硬编码的, 导致玩家写剧情的门槛太高, 所以就出现了 [Lua Cutscenes](https://gamebanana.com/mods/53678) 这样的 helper 来用 `Lua` 这种简单的编程语言来对接 `C#`, 即我们可以编写简单的 `Lua` 脚本来使用官方代码中的各种跟剧情相关的函数

还有 [Prismatic Helper](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#cutscenes) 这种 Helper(简称 ph), 主要是嵌入 Dialog 中使用的

!!! 注意事项
    因为 Lua Cutscenes 本质也是个 Mod, 所以记得开(, 问就是踩过坑

## FAQ

### 为什么对话时无法设置相机的偏移

你的代码可能是这样的

```lua
function onBegin()
    disableMovement()
    disablePause()

    say("T_01")
    setCameraOffset(3, 0)

    enablePause()
    enableMovement()
end
```

但实际得是这样

* 因为 `say` 函数会阻塞程序(还在说话呢, 自然不会执行后面的), 所以 `say` 函数得写在 `setCameraOffset` 之后
* 其次由于 `disableMovement` 本质上是将玩家的状态设置为 `StDummy`, 这个时候摄像机不会更新位置, 所以咋们还得给玩家设置下参数强制更新摄像机, 也就是这里的 `player.ForceCameraUpdate = true`(记得最后复原)

```lua
function onBegin()
    disableMovement()
    disablePause()

    player.ForceCameraUpdate = true
    setCameraOffset(3, 0)
    say("T_01")
    player.ForceCameraUpdate = false

    enablePause()
    enableMovement()
end
```

### 怎么在对完话后传送

* 写 [lua](https://sapcelestemod.netlify.app/extra_luacs/reference/#teleportto)
* 使用 [Prismatic Helper](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#goto-x--0-y--0), `{ph_trigger goto x坐标 y坐标}`

坐标可以按 `~` 打开控制台查看当前鼠标位置

### 怎么让 Badeline 出来

* 详情见 [Prismatic Helper 文档](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#baddy_split-xoffset--0-yoffset--y-faceplayer--true), 写 Dialog 即可,  下面画游的例子中也有提及(翻 Dialog)
* 使用 DJ Map Helper 的 Talk To Badeline Trigger

### 有选择的对话怎么做

写 `lua`

> Myn: 可以抄一下[画游](https://gamebanana.com/mods/494348)序章的

具体路径`gallerycollab2024_v2015\Cutscenes\cny2024\prologue\granny.lua`

主要函数 [choice](https://sapcelestemod.netlify.app/extra_luacs/reference/#choice)

[示例视频](https://www.bilibili.com/video/BV17RsWeDE3Y/)

```lua
--获取蔚蓝命名空间(c#)
local celeste= require("#Celeste")

--获取蔚蓝GFX 静态类c#）
local gfx = require("#Celeste.GFX")

function onTalk()

    
    disableMovement()
    disableRetry()
    wait(0.75)
    walkTo(1805)

    --调镜头
    say("ChineseNewYear2024_0_lobby_prologue_grannytea_first")

    --奶奶动画切换
    setFlag("decal_flag_cny_po_grannyA",true)

    --对话1
    say("ChineseNewYear2024_0_lobby_prologue_grannytea")

    --感谢sap和zzm喵(•ω•`)o

    --隐藏玩家的头发和本体
    player.Sprite.Visible = false
    player.Hair.Visible = false

    --从精灵库中创建一个叫"CollabUtils2_sitBench”的动画
    local spr = gfx.SpriteBank:Create("CollabUtils2_sitBench")

    --将动画附加到玩家身上
    player:Add(spr)

    --播放该动画的"sit"动画
    spr:Play("sit",false,false)

    --同理
    local hairSpr= gfx.SpriteBank:Create("CollabUtils2_sitBench")
    player:Add(hairSpr)

    --复制头发颜色到我们的头发上
    hairSpr.Color = player.Hair.Color;
    hairSpr:Play("sitHair",false,false)
        
    --喝茶
    if  getFlag("decal_flag_cny_po_grannyA") then
        setFlag("flag_black_granny_tea",true)
    end
    wait(3)
    setFlag("flag_black_granny_tea",false)

    --对话2
    say("ChineseNewYear2024_0_lobby_prologue_grannytea_B")

    --选择对话部分
    a=0
    repeat
        local thischoice = choice("ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_A","ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_B","ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_C","ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_D")
        if  thischoice == 1 then            
            say("ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_A_01")
        elseif thischoice == 2 then 
            say ("ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_B_01")
        elseif thischoice == 3 then 
            say("ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_C_01")
        elseif thischoice == 4 then 
            say("ChineseNewYear2024_0_lobby_prologue_grannytea_B_MAD_D_01")
            a = 514
        else
            say("ChineseNewYear2024_0_lobby_prologue_grannytea_B")
        end
    until( a > 114 )

    wait(0.5)
    setFlag("cny2024_po_endend_hahaha",true)
    say("ChineseNewYear2024_0_lobby_prologue_grannytea_end")
        
    wait(4)
    completeArea(false,false,true)
    enableMovement()
    
end

function onEnd(level,wasSkipped)
    if wasSkipped then
        setFlag("decal_flag_cny_po_grannyA",false)
        setFlag("cny2024_po_endend_hahaha",false)
        completeArea(false,true,true)
    end
end
```