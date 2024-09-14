* [everest.yaml](https://github.com/EverestAPI/Resources/wiki/everest.yaml-Setup)(mod的身份证)
  提供了当前mod的种种信息如`名称`, `版本`, `依赖(需要别的什么Mod)`

* [Mod结构（摘自b站 Wiki）](https://wiki.biligame.com/celeste/Mod%E7%BB%93%E6%9E%84)
* [Mod结构（摘自Everest Wiki）](https://github.com/EverestAPI/Resources/wiki/Mod-Structure)
* [录制残影1](https://github.com/EverestAPI/Resources/wiki/Mod-Structure#adding-custom-tutorial-ghosts), [录制残影2](https://wiki.biligame.com/celeste/%E5%AE%9E%E4%BD%93/%E5%AE%98%E5%9B%BE%E5%AE%9E%E4%BD%93#Ghost_Player_Playback)

首先你要做个Mod你肯定要有个文件夹放相关资源如地图, 贴图, 对话, 音频等, 我们这里称他为`MyMod`, 又由于Everest会从蔚蓝根目录下的Mods文件夹里读取所有Mod, 所以这里的`MyMod`要放到Mods文件夹内, 然后假设你的地图文件为`MyFirstMap.bin`(在Loenn里作完图保存后的文件)

此时只需摆出如下文件结构你就可以开始游玩你的地图了, 记得放重生点(憋笑)
```
Celeste
    - Mods
        - OtherMod1
        - OtherMod2
        - OtherMod3
        - MyMod  // 你的Mod
            - Maps 
                - MyFirstMap.bin  // A面
                - MyFirstMap-B.bin  // B面
                - MyFirstMap-C.bin  // C面
                - MyFirstMap1.bin  // 如果名字不一样地图就会被分成多个模块, 就像草莓酱的初级, 高级, 大师级大厅那样
```
但此时你需要了解一下`Everest`处理这些文件的逻辑: 按照原版的路径(请查看`Celeste/Content`路径下的文件夹), `Everest`会把要加载的Mod里的的资源(包括官图的`Maps, Dialog, Audio, Graphics`等)合并到一起(对于大部分文件来说是覆盖, 而对`Dialog`文件来说是合并), 做好合并工作后Everest就可以像处理原版东西那样处理我们的东西了 

这也是为什么我们添加自定义的资源时文件路径要多套几层, 目的就是为了不和其他人的Mod重名, 一般来说两层足矣, 所以结构一般是`Maps/{作者名}/{地图集名字}/{地图}.bin`
```
Celeste
    - Mods
        - OtherMod1
        - OtherMod2
        - OtherMod3
        - MyMod  // 你的Mod
            - Maps 
                - 作者名
                    - 地图集名字
                         - MyFirstMap.bin  
                         - MyFirstMap-B.bin
                         - MyFirstMap-C.bin
                         - MyFirstMap1.bin 
```
然后你这个Mod肯定还要提供一些必要的信息吧, 比如你这个Mod叫什么, 已经是第几个版本了(Mod也会更新的嘛), 需要别的什么Mod(即你的Mod用到了哪些Mod里的东西), 如果是CodeMod, 还需要填上Dll相关信息, 而这些就需要`everest.yaml`出手了, 具体格式看上面教程的

