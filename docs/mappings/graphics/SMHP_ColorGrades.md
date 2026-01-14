# [ColorGrades](https://github.com/AAA1459/SkinModHelper/blob/release/docs/guide/skinconfig/ColorGrade.md)

## 皮肤具体区域的颜色随冲刺数变化

你可以先参考下[在 SMH 中的做法](SMH.md#_4), 唯一不一样的就是这里滤镜贴图需要放在 `Graphics/Atlases/Gameplay/{人物皮肤目录}/ColorGrading/` 中,
比如 `Graphics/Atlases/Gameplay/Neuro_Skin/characters/player/Evil_Neuro/ColorGrading/`, 还是不明白的话可以参考下 [Ralsei SMH+ 版本的皮肤做法](https://gamebanana.com/mods/download/385893#FileInfo_1115502)

### 头发 Flash 状态下使用 flash 滤镜贴图覆盖 dash 滤镜贴图

flash 指的是回复冲刺那一瞬间的闪白(吃 refill 或者落地回冲之类的), 我们可以用上述类似的手法替换, 只需要将滤镜贴图改名为 `flash0~n` 然后放到 `dash0~n` 的同级目录下即可,
这样在白闪过程中就会使用 flash 滤镜贴图而不是 dash 滤镜贴图

比如我们把滤镜贴图的白色点成黑色可以让白闪变成黑闪(见右下角)

![none](../../assets/mappings/graphics/skin/smhp/flash1.png){ width="900" style="image-rendering: pixelated;"}

<p style="text-align: center;"> 路径: Graphics/Atlases/Gameplay/Neuro_Skin/characters/player/Neuro/ColorGrading/flash1.png</p>