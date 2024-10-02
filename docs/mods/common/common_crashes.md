# [常见报错解决方案(这个蓝蓝的可以点你知道的吧)](https://saplonily.elecho.dev/celeste_common_issues/index.html)

# 我蔚蓝崩了，怎么办😭

**_别害怕，只需呼吸_**

请阅读log文件下（崩溃时可选择打开log文件）离当前时间最近的error信息（建议直接ctrl + f搜索），它通常包含下面两种情况之一

### `Yo, I heard you like Everest so I put Everest in your Everest{...}`:

正如这条报错信息的其他部分所说, Everest遇到了一个常规手段无法解决的问题（一般是bug）. 跟随 [指示](#报告问题)上报该情况并获取帮助.

### `System.{ERRORNAME}Exception: {Description of the error}`:

说明该错误在Everest的可控范围内，你获得了详细的报错信息，如果你不懂代码，建议先查看接下来几条常见的报错信息，看看对你有没有帮助，还没有帮助的话再去[询问](#报告问题)

---
<br/>

## `System.OutOfMemoryException`

你下的mod太多啦！电脑内存有点遭不住，请尝试关掉一些mod

* 如果你正在运行蔚蓝, 打开 `Mod 选项` 中的 `启用或禁用Mod(Enable or Disable Mods)`选项来管理各个mod的开关.
* 如果你现在蔚蓝都打不开了, 到Mods目录下把mod名填到`blacklist.txt`文件里，比如要关闭`CrystalValley.zip`mod，就整个照抄就好了，开启`Dadbod.zip`
  mod，要么把那行删了，要么加上注释(`#`)

```
CrystalValley.zip
# Dadbod.zip
```

* 如果你要删除mod，把对应的mod文件删除即可
* 或者直接通过Olympus或者CeleMod管理mod

> [!TIP]
> 你要列入黑名单的mod可能已经在`blacklist.txt`里了，这时把mod前的注释`#`(有的话)去掉即可

如果你还有没足够的内存（一般是不可能的（不是）），你可以开启Everest的懒加载功能（_可能有bug_）

请通过文本编辑器（比如Notepad，记事本等）打开文件 `Saves/modsettings-Everest.celeste`，把 `LazyLoading_Yes_I_Know_This_Can_Cause_Bugs` 后面的 `false` 改成 `true`.

## `System.NullReferenceException`

空引用（最常见的bug之一）

### 当它发生在你进入存档的时候

目前这个问题时大概率是由Viv's Helper引起的，当我们进入mod图A，保存并退出，然后禁用该mod，再次尝试进入，一般来说会弹出一个警告的明信片，而在这里Viv's
Helper可能导致游戏崩溃，所以你要么把Viv's Helper禁了，要么把那个mod图再开了

### 当你用alt + tab切屏的时候

似乎Celeste在全屏时发生分辨率的改变有时会使游戏崩溃，而这常常由切屏导致

你可以尝试把蔚蓝版本切换到[FNA 版本 :link:](https://github.com/LuckyBoy-7/EverestWiki/wiki/FAQ#我可以为电脑端什么平台的蔚蓝做Mod)来解决这个问题

### 如果报错信息提及类似 `at Celeste.Parallax..ctor`的话

这是因为styleground纹理缺失，请确保依赖的mod已被下载，如果是你自己的图纹理缺失，请确保填入格式正确的png文件

### 当离开一个带有Theo水晶的房间（复现不出来, 等群友解答）

当你从一个theo房间穿过非右边的房间（也就是往上下左边的房间走），那么游戏会崩溃，此时请使用拓展异变（Extended Variants）里的Theo水晶

## `IOException: Too Many Open Files`

Mods文件夹下有过多的文件

请保证mod文件最好是zip格式的，这样Everest可以把它当作一整个文件来读，还能处理的更快（你可以想象1k个1KB的文件放到一个文件夹下，你打开或者拷贝这个文件夹要好久，但是打包成一个zip或者rar就快很多）

## `Ionic.Zip.BadCrcException`

下载mod时报错
你的某个mod zip文件坏了，需要重新下载
请阅读log文件下离当前时间最近的error信息（建议直接ctrl + f搜索），最近加载的mod一般就是损坏的mod

## `Exception: FMOD Failed: ERR_EVENT_ALREADY_LOADED`

两个 FMOD bank 定义了相同的 event.
如果不是你自己在用FMOD，那么这大概率是由于你拷贝了某个MOD（所以有两个相同的event）
如果是的话，找到并删掉其中之一即可

## `Exception: FMOD Failed: ERR_OUTPUT_INIT`

蔚蓝的音频系统出了故障
可能的解决方案:

- 插拔你的扬声器/耳机
- 换一个扬声器/耳机
- 重启音频驱动/电脑
- 更新音频驱动

## `Steam not found!`

确保Steam正在运行

## `AggregateException: One or more errors occurred`

Everest版本太老导致的，请更新

## `System.ComponentModel.Win32Exception: SELinux execheap probe failed! Please ensure Everest has this permission, then try again`

该报错发生在Linux上运行的[SELinux :link:](https://en.wikipedia.org/wiki/Security-Enhanced_Linux)比如Fedora引起的权限错误，请跟随引导尝试修复此问题：

1. 在崩溃的位置打开终端并运行`sudo cat /var/log/audit/audit.log | grep -a execheap | grep -a Celeste`
    - 这会查找the SELinux logs 下拒绝 Celeste `execheap`访问的目录项, 而这是.Net所需的权限.
2. 如果你看到了类似 `type=AVC msg=audit(1702580366.688:3126): avc:  denied { execheap } for  pid=353681 comm="Celeste" ...`的输出, 继续即可
   如果报错了或者不输出了, 请跟随 [指示](#报告问题) 上报问题.
    - 这输出说明确实有东西拒绝了蔚蓝的访问
3. 运行 `sudo cat /var/log/audit/audit.log | grep -a execheap | grep -a Celeste | sudo audit2allow -M everest_core_fix`
    - 这会在 SELinux logs里找到之前那些拒绝访问的条目, 然后创建规则给予Celeste相应权限
4. 运行 `sudo semodule -i everest_core_fix.pp`
    - 这会使先前的规则生效
      在做完这些后, 尝试重启蔚蓝. 如果问题还没解决, 请[上报问题](#报告问题).

<br/>

# 报告问题

有两种报告问题的方式:

### Discord (推荐)

- 加入 the Mt Celeste Climbers Association Discord:  
  [![Discord Invite](https://raw.githubusercontent.com/EverestAPI/Everest/dev/github/invite.png) :link:](https://discord.gg/6qjaePQ)
- 在 `#modding_help` 频道报告你的问题, 格式请遵循 [报告清单](#报告清单).
- 请耐心等待他人的帮助

### GitHub (只接受关于Everest的问题)

- 在 [main Everest GitHub :link:](https://github.com/EverestAPI/Everest/issues)上创建Issue
- 使用 *描述性的标题* (而不是"游戏崩了，救救").
- 请跟随 [报告清单](#报告清单) 来上报问题.

<br/>

---

## 报告清单

- **请描述你在游戏崩溃前正在做什么**
- 如果先前游戏运行良好, **请列出此后你对游戏做的任何改变**
- 请写出**你做了什么尝试**去修复这个问题
- **请附上`error_log.txt` 和 `log.txt`** (在你蔚蓝根目录下)  
  如果你得到了灾难性的错误警告, 则只需附上`log.txt`
- 如果你觉得这个错误是由某个特定mod引起的, 那么如果可以的话请通知**对应mod作者**

> [!IMPORTANT]
> 如果你在游戏崩溃后重启了游戏, 你的 `log.txt` 会被重置.  
> Everest 会自动存储之前的log到 `LogHistory` 目录下, 这个目录也在蔚蓝的根目录下