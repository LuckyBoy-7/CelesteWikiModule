参考

* [Saplonily 的 LuaCutscenes 教程](https://sapcelestemod.netlify.app/extra_luacs/begin/){:target="_blank"}
* [Lua Cutscenes 词典 by Nacline]()(制图群群文件)
* motonine 的 LuaCutscene 教程(群文件里)
* [Lua Cutscenes 文档](https://maddie480.ovh/lua-cutscenes-documentation/modules/helper_functions.html){:target="_blank"}
* [Lua Cutscenes 函数源码](https://github.com/Cruor/LuaCutscenes/blob/master/LuaCutscenes/Assets/LuaCutscenes/helper_functions.lua){:target="_blank"}
* [Prismatic Helper 文档](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#cutscenes){:target="_blank"}
* [Prismatic Helper 指令 by 底龙](https://uddrg.notion.site/Text-Dialog-2737f4f27e6380419593c9bedbe01795#2737f4f27e6380788771c5a9a78c3a39){:target="_blank"}
* [Lua Cutscenes Recipe Book by Everest Wiki](https://github.com/EverestAPI/ModResources/wiki/Lua-Cutscenes-Recipe-Book){:target="_blank"}
* [Lua Cutscenes without Lua Experience by Gamation](https://medium.com/@crumpledmemes/lua-cutscenes-without-lua-experience-3c2d87804e20){:target="_blank"}

由于蔚蓝是用 `C#` 编程语言编写制作的, 而官方的剧情都是硬编码的(直接在代码里写好), 导致玩家写剧情的门槛太高, 所以就出现了 [Lua Cutscenes](https://gamebanana.com/mods/53678){:target="_blank"} 这样的
helper 来用 `Lua` 这种简单的编程语言来对接 `C#`, 即我们可以编写简单的 `Lua` 脚本来使用官方代码中的各种跟剧情相关的函数

还有 [Prismatic Helper](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#cutscenes){:target="_blank"} 这种 Helper(简称 ph), 主要是嵌入 Dialog 中使用的

> 在侧边栏里你可以找到一些剧情的拆解示例, 如果你有拆包也无法理解的剧情, 随时欢迎投稿 awa

!!! 注意事项
    因为 Lua Cutscenes, Prismatic Helper 都是 Mod, 所以别忘了开

## FAQ

### 怎么在对完话后传送

* 写 [lua](https://sapcelestemod.netlify.app/extra_luacs/reference/#teleportto){:target="_blank"}
* 使用 [Prismatic Helper](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#goto-x--0-y--0){:target="_blank"}, `{ph_trigger goto x坐标 y坐标}`
* 使用 flag 触发 Trigger Trigger 来使用各种传送 Trigger

坐标可以按 `~` 打开控制台查看当前鼠标位置

### 怎么让 Badeline 出来

* 详情见 [Prismatic Helper 文档](https://github.com/l-Luna/PrismaticHelper/blob/master/DOCUMENTATION.md#baddy_split-xoffset--0-yoffset--y-faceplayer--true){:target="_blank"}, 写
  Dialog 即可
* 使用 DJ Map Helper 的 Talk To Badeline Trigger

