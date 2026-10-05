> 你是 [Eevee Helper](./eevee.md) 的兄弟呀😭

其他资料

* [Auspicious Helper 香蕉网](https://gamebanana.com/mods/578559)
* [Auspicious Helper Github 文档](https://github.com/cloudsbelow/auspicioushelper/wiki)

## Template

ausp 提供了一系列模板让你非常方便的把一些对象变成另一个东西

比如我们要把把 `Booster` 和 `Refill` 变成果冻, 只需要用 `Connected Container` 将需要影响的对象框住

> ausp 自己的模板砖不用框

![00](../../assets/mappings/useful_helpers/auspicious/00.png)

然后在框内放一个果冻模板

![01](../../assets/mappings/useful_helpers/auspicious/01.png)

然后就完事了!

![02](../../assets/mappings/useful_helpers/auspicious/02.png)

### 其他 Template 模板
* [`Behavior Chain`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=418): 组装用的模板, 默认情况下框内只能放一个模板, 如果要放多个则要用 `Behavior Chain` 组装 (别把子节点放在框内了)
* [`Belt`](https://www.bilibili.com/video/BV1jVHp6EE17/?t=108): `FireBall` 循环火球模板
* [`Cloud`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=92): 云朵模板
* [`Kevin`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=117): Kevin 模板
* [`Rotator`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=139): 旋转模板, 将内容复制并均匀放在圆周上[缓动](https://easings.net/zh-cn)旋转 (喜欢煤球的有福了)
* [`Holdable`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=171): 可抓取物模板 
* [`Ice Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=200): 冰块模板 
* [`Zip Mover`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=217): 红绿灯模板 
* [`Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=238): 碎裂块模板 
* [`Fake Wall`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=254): 假墙模板 
* [`Moon Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=280): 月亮块模板 
* [`Move Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=302): 移动块模板 
* [`Swap Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=320): `Swap Block` 模板 
* [`Push Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=345): `Push Block` 模板 (类似草莓酱里的[霜冻碎片里的实体](https://www.bilibili.com/video/BV1sL411y7gY/?p=2&t=5)) 
* [`Falling Block`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=396): 掉落块模板
* [`Static Mover`](https://www.bilibili.com/video/BV1ZVHp6EEcd/?t=494): 附着模板, 类似 [Eevee Helper 的 Attached Container](./eevee.md#attached-container)
* 其他: 待施工


## Channel

[Flag](../flag/flag.md) 只能表示有和无两种状态, 而 Channel 引入了数字, 这样我们可以就把数值绑定到对应名字的 Channel 上, 像下面这样

![04](../../assets/mappings/useful_helpers/auspicious/04.png)

我们把数字 `10` 绑定到一个名为 `awa` 的 Channel 上

> 要开启调试面板请见 [Mapping Utils](./mapping_utils.md#channels)

![03](../../assets/mappings/useful_helpers/auspicious/03.png)

后续对于一些 [Template](#template), 他们的属性可能会带有 `Channelable` 字样, 表示该属性既可以是一个固定的值, 也可以是你填入的 Channel 对应的动态的值,
比如这里的 `Speed` 属性就可以接收一个 Channel, 所以我们将 awa 绑定上去, 这样该移动块后续的移动速度就会变成 `10px/s` 了

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>Channel 对应的数值会在玩家死亡后重置, 切板不会</p>
</div>


### Trigger

知道 Channel 的含义后我们就可以使用 Trigger 或者实体变着法子改变 Channel 的数值了

#### Channel Player Trigger

![05](../../assets/mappings/useful_helpers/auspicious/05.png)

类似于 `Flag Trigger`, 但是用来设置 Channel

* `Channel`: 你要设置的 Channel 名字, 比如这里是 `a`
* `Value`: 你要设置的 Channel 对应的数值
* `Advanced`: 该 Trigger 触发后额外设置里面的内容用逗号分隔, 比如这里的 `b:3,c:@b[*2,+1,*3]` 表示将 `Channel b` 设置成 `3`, 将 `Channel c` 设置成 `Channel b` 乘二加一再乘三也就是 `21`, 更高级的写法请参考[高级表达式](#advanced-expression)
* `Action`: Trigger 触发方式
* `Op`: 用于决定 `Value` 的计算方式
    * `set`: 表示直接将对应 Channel 设置为 `Value`, 即 `channel = Value`
    * `add`: 表示直接在原来 Channel 数值的基础上加上 `Value`, 即 `channel = old Value + new Value`
    * `and`: `channel = old Value & new Value`
    * `or`: `channel = old Value | new Value`
    * `xor`: `channel = old Value ^ new Value`
    * `min`: `channel = min(old Value, new Value)`
    * `max`: `channel = max(old Value, new Value)`
* `Everywhere`: 相当于将该 Trigger 撑满房间
* `Only Once`: 是否触发一次就销毁
* `Only When Channel`: 当该 Channel 对应的数值大于 `0` 时, 此 Trigger 才能生效, 留空表示此项不起作用, 即该 Trigger 是否触发与该选项无关

#### Channel Fade Trigger

![06](../../assets/mappings/useful_helpers/auspicious/06.png)

根据玩家位置和 `Position Mode` 使某个 Channel 在 From Channel 和 To Channel 之间 lerp

比如上方这个例子如果移动块速度绑定到 `awa` Channel 上, 那么我们在该 Trigger 内就可以调整位置使 `awa` 在 `0 ~ 100` 之间变化

#### Channel Position Trigger

![07](../../assets/mappings/useful_helpers/auspicious/07.png)

根据玩家玩家在 Trigger 内的相对位置, 在 X/Y 两个维度上分别返回 `0 ~ 1` 之间的值并分别存入 `X Channel` 和 `Y Channel`

`Path` 表示要跟踪的对象, 默认为玩家 `player`, 如果你要跟踪其他对象, 比如这里的水母, 你需要在场上放置一个 `Entity Marker` 实体, 
并在 `Path` 属性处填入对应[实体的 ID](../loenn/faq.md#entity-id), 并在 `Identifier` 随意填入一个特殊的名字即可, 
之后在 `Channel Position Trigger` 的 `Path` 属性中填入 `Entity Marker` 的 `Path` 就可以跟踪对应实体了

#### Channel Math Controller

![08](../../assets/mappings/useful_helpers/auspicious/08.png)

你可以在酣畅淋漓的[少儿编程](https://cloudsbelow.neocities.org/celestestuff/visualmathcompiler) 后点击黄色方块编译拿到编码后的 Base64, 
最后把它粘贴到 `Compiled Operations` 中即可

![09](../../assets/mappings/useful_helpers/auspicious/09.png)

比如这里的 Base64 编码是 `AgAAAAIADABDAAAAQgAHZ2V0RmxhZwVmbGFnQToAQgAAAAMAZAAAAAUADGFjY2VsZXJhdGlvbgMAAQAAAEMBB3NldEZsYWcFZmxhZ0IASA`,
对应的逻辑为, 当场景内有 `flagA` 的时候, 将 `acceleration` Channel 的数值设置为 `100` 并启用 `flagB`


<a id="advanced-expression"></a>

### [表达式](https://github.com/cloudsbelow/auspicioushelper/wiki/Channels#legacy-note)

| 写法                  | 参数 | 实际功能                 |
|-----------------------|-----:|--------------------------|
| `pi()`                |    0 | π                        |
| `floor(x)`            |    1 | 向下取整                 |
| `ceil(x)`             |    1 | 向上取整                 |
| `round(x)`            |    1 | 四舍五入                 |
| `exp(x)`              |    1 | `e^x`                    |
| `ln(x)`               |    1 | 自然对数 `ln(x)`         |
| `log(x)`              |    1 | `log₂(x)`                |
| `sqrt(x)`             |    1 | 平方根                   |
| `saturate(x)`         |    1 | 限制到 `[0,1]`           |
| `max(x,y)`            |    2 | 最大值                   |
| `min(x,y)`            |    2 | 最小值                   |
| `pow(x,y)`            |    2 | `x^y`                    |
| `clamp(x,a,b)`        |    3 | 限制到 `[a,b]`           |
| `mix(f,a,b)`          |    3 | `f*a + (1-f)*b`          |
| `when(f,a,b)`         |    3 | `f != 0 ? a : b`         |
| `take(f,a,b)`         |    3 | `f < 1 ? a : b`          |
| `take(f,a,b,c)`       |    4 | 根据 `f` 选择 4 个值之一 |
| `take(f,a,b,c,d)`     |    5 | 根据 `f` 选择 5 个值之一 |
| `take(f,a,b,c,d,e)`   |    6 | 根据 `f` 选择 6 个值之一 |
| `take(f,a,b,c,d,e,g)` |    7 | 根据 `f` 选择 7 个值之一 |
