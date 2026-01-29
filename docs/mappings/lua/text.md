参考

* [Jungle Helper 香蕉网](https://gamebanana.com/mods/292711)

做剧情免不了显示文本, 所以这里会简单讲解下各种文本 Entity/Trigger 的使用

<a id="ui-text"></a>
## [UI Text Trigger](https://gamebanana.com/mods/292711)

来自 Jungle Helper, 主要用来显示一些 UI 文本(显示在屏幕上的, 而不是游戏场景里的), 可以用作剧情图开头的内容警告(Content Warning)

![ui_text_trigger](../../assets/mappings/lua/text/ui_text_trigger.png){style="width: 700px; title="123"}

### Dialog

填入要显示的话, 即 dialog key

### Fade In/Out

文本淡入淡出时间

### Flag

在进入 Trigger 后, 如果满足 `flag` 条件, 则会在 `Fade In` 时间内淡入文本, 离开 Trigger 后, 如果满足 `flag` 条件, 则会在 `Fade Out` 时间内淡出文本

该选项留空则表示文本是否显示完全不受 flag 影响, 只跟是否进出 Trigger 有关

### Text X/Y

该文本默认居中显示在屏幕正中间, 如果你想调整位置可以用这个选项, 填入对应的偏移量即可
