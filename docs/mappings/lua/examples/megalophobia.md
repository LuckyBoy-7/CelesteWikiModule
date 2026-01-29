参考

* [[Celeste/优质mod]最花哨的合集?我已经开始头晕了()Welcome to Megalophobia初见部分流程](https://www.bilibili.com/video/BV1WzXHY3Eho)
* [地图](https://gamebanana.com/mods/582533)

## [结尾](https://www.bilibili.com/video/BV1WzXHY3Eho/?t=5265)

房间名: FALL

### 流程

> 我操这是真帅吧

碰到 `badelineBoost`, 开始上升

碰到 `ExtendedVariantMode/BooleanExtendedVariantTrigger` 设置了 `UpsideDown`, 镜像了画面的垂直方向

随后碰到 `ExtendedVariantMode/FloatExtendedVariantFadeTrigger` 设置了 `GameSpeed`, 画面流速减慢, 音乐随之响起

再往后显示的 STAFF ROLL 单纯就是一张张图片, 用 `JungleHelper/UIImageTrigger` 实现即可

期间还使用了 `StylegroundMask` 丰富了背景

![staff](../../../assets/mappings/lua/megalophobia/staff.png){style="width: 800px; title="123"}
