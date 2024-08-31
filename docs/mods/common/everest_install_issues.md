Everest和mod的下载安装问题及解决方案

请注意：我们无法提供支持盗版Celeste的解决方案，因为我们不知道游戏已经被修改了什么，所以如果它不生效，你可能得不到相应帮助

请确保您已经做了接下来的事：

- 下载了最新的蔚蓝版本
- 蔚蓝至少启动了一次
- 下载Everest及Mod的时候保证游戏关闭
- Olympus已经更新到最新版（但也别太新，可能会有奇奇怪怪的bug）
- 你蔚蓝下的文件有读取和修改权限

# 错误信息

## MonoModRules failed resolving Microsoft.Xna.Framework.Game

下载前请保证蔚蓝至少启动了一次，因为Windows XNA版本的蔚蓝需要XNA对应的库，并且在第一次启动时检索。

## The process cannot access the file '...' because it is being used by another process.

请下载Everest及Mod的时候保证游戏关闭

也有可能发生在OneDrive 或者 Google Drive Desktop扫描文件的时候

## Unsupported version of Celeste

请更新你的蔚蓝

Everest对蔚蓝做的修改只会作用于最新版的蔚蓝，因为维护各个版本间Mod的兼容性简直是个噩梦，所以干脆就只支持一个版本的蔚蓝算了

当然这个错误也有可能是因为你使用的是盗版蔚蓝

## Ionic.Zip.BadCrcException

有时下载mod导致的报错，说明你的其中一个mod.zip文件损坏，需要重新下载

如果你对这个损坏的mod文件是哪个有头绪的话，删掉重下即可，否则请到`log.txt`文件内查看最后一个加载的文件是什么

## System.UnauthorizedAccessException: Access to the path '...' is denied.

你需要更改文件读写权限，请看[第三方教程](https://www.thewindowsclub.com/change-files-and-folders-permissions-in-windows-10)（如果能自己在网上找到解决办法那更好了，实在不行再找群友）

## Unexpected version of MonoMod patcher

请更新Olympus

## 还报错?

来 [Celeste Discord :link:](https://discord.gg/celeste) 的 `#modding_help` 频道或者[Q群]() 并附上 Olympus 的`log-sharp` 文件，群友会出手