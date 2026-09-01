> 如果你需要在 Loenn 里显示游戏内人物运动的实时轨迹, 请使用[插件](loenn/plugins.md#ghost)

### Ghost Player Playback

残影, 是用于在地图内对玩家进行路线引导的实体, 比如官图第九章玩家学习凌波微步的时候, 咖啡馆的旁边就会生成这个残影. 在这里我们不提残影对于操作的引导, 因为相较之下有更合适的实体可以引导玩家操作. 

## 残影录制

> 本质上就是使用 mod 记录玩家运动数据后存放到 `.bin` 文件中, 之后使用残影实体读取该数据并播放

在自制地图中, 如果我们想要录制残影, 实际上非常简单, 按照以下两种方法操作皆可: 

### 使用 Modder's Toolkit 录制

1. 下载所需的 mod: Modder's Toolkit
2. 开启 mod 后进入游戏
3. 在 Mod 选项中找到对应 mod 设置, 设置录制快捷键, 默认为 F12
4. 进入你的地图, 使用快捷键就可以录制啦! 
5. 录制完成后, 前往游戏程序 Celeste.exe 所在的文件夹
6. 和 Celeste.exe 同层的位置会出现一个 Playbacks 文件夹, 在这个文件夹中可以找到录制完成的文件(格式为 `*.bin`)
7. 将 bin 文件放到 `Mods/你的 Mod/Tutorials` 文件夹中并进行改名, 如 `xxx_wavedash.bin`
8. 在游戏中放置题述实体, 并在 Tutorial 一栏填入你的文件名, 不带尾缀, 如 xxx_wavedash
9. 保存, 进入游戏即可

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>默认设置中开始录制后会有 3s 的准备时间, 如果需要可以将设置取消. </p>
</div>

### 使用 Kayden Commands 录制

1. 下载所需的 mod: Kayden Commands
2. 开启后进入游戏
3. 在 Mod 选项中查明快捷键, 或者直接进入地图按键盘 `~` 键启动控制台
4. 如果使用快捷键, 直接启动即可, 如果使用控制台, 在控制台内输入 `start_rec` 启动残影录制
5. 使用快捷键或者控制台内输入 `stop_rec` 停止录制
6. 打开游戏文件夹（Celeste.exe 所在文件夹）
7. 找到 `Content/Tutorials/CustomPlaybacks` 文件夹
8. 找到 `latestCustomRecording.bin` 文件
9. 将该文件改名并放到 `Mods/你的地图文件夹/Tutorials` 文件夹中, 如 `xxx_wavedash.bin`
10. 在游戏中放置题述实体, 并在 Tutorial 一栏填入你的文件名, 不带尾缀, 如 xxx_wavedash
11. 保存, 进入游戏即可

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>
        残影的录制只记录相对于起点的位置, 而不记录具体位置, 因此如果你站在非整格的位置开始录制, 在地图中放置实体时却是按照网格位置放置, 那么在游戏中实际效果会有一些位置偏差,
        比如残影玛德琳原力抓墙等等. 
    </p>
</div>

