* [冰激凌的镜头教程](https://wiki.biligame.com/celeste/%E9%95%9C%E5%A4%B4){:target="_blank"}
* [bits-像素的镜头教程](../assets/mappings/camera/镜头教程-bits.docx)
* [星夜祈梦的镜头教程](https://www.bilibili.com/video/av113689092953564){:target="_blank"}
* [Everest Wiki 的镜头教程](https://github.com/EverestAPI/Resources/wiki/Camera){:target="_blank"}
* [Celeste Camera in 3 Levels of Complexity by Gamation](https://medium.com/@crumpledmemes/celeste-camera-in-3-levels-of-complexity-243efd7872bc){:target="_blank"}


## FAQ

### 启动望远镜的同时开始播放残影

使用 `VivHelper/CustomPlayerbackWatchtower` 搭配 `VivHelper/CustomPlaybackGhost` 即可

![custom_playback_watchtower](../assets/mappings/camera/custom_playback_watchtower.png){style="width: 700px; title="123"}

<a id="excamera"></a>

### 使用拓展镜头

首先下载并启用[拓展镜头(Extended Camera Dynamics)](https://gamebanana.com/mods/548940), 在自己地图旁边创建一个同名的 `.meta.yaml` 元数据文件, 并填入以下信息

```yaml title="Mods/LuckyTestMap/Maps/Lucky_boy/0/FirstMap.meta.yaml"
ExCameraMetaData:
    EnableExtendedCamera: true
    RestingZoomFactor: 1.0
```

之后直接在游戏中使用 `Camera Zoom` 等 Trigger 即可

![excamera_dynamics](../assets/mappings/camera/excamera_dynamics.png){style="width: 700px; title="123"}

 