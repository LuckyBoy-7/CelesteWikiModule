> 做这个栏目主要是为了整合各方资料, 顺便也是了了我萌新时期的心愿: 至少能看懂这个操作吧
>
> 由于应该没什么人看, 更别提勘误什么了, 所以更多可能是当作类似自己的笔记一样的东西
>
> 又由于我毕竟不是搞科研的, 所以有些可能无法提供详细的数据(而且有些细节真的是说都说不完, 而且也没必要)

* [b站 wiki高级技巧说明](https://wiki.biligame.com/celeste/%E9%AB%98%E7%BA%A7%E6%8A%80%E5%B7%A7)
* [全国首发!(?) 带你详解蔚蓝逆天技巧大串烧Alaska 你会的你不会的都在这里!](https://www.bilibili.com/video/BV1oV411L7Kp)
* [奇怪的望远镜小寄巧(和原理解释)](https://www.bilibili.com/video/BV1vZ421N7Ps)
* [Celeste Tech](https://celeste.ink/wiki/Tech)
* [Celeste TAS Tech](https://docs.google.com/document/d/1RVXyO7AZB-r7X3FxkxrBob775qWdhfOyBEOGGbnTgws)
* [狼狼赞专栏](https://space.bilibili.com/361792051/article)
* [Celeste 机制详解 (第 0 版) by 反向钟](../../assets/general/mechanics/Celeste%20机制详解%20(第%200%20版).pdf)

## 前置知识

### 人物状态机

<details>
<summary>状态查询</summary>

引用自Code栏目Saplonily制作的code教程

``` csharp
const int StNormal = 0; // 正常
const int StClimb = 1; // 攀爬
const int StDash = 2; // 冲刺
const int StSwim = 3; // 水中
const int StBoost = 4; // 绿泡泡中
const int StRedDash = 5; // 红泡泡中
const int StHitSquash = 6; // 红泡泡撞墙或撞地
const int StLaunch = 7; // 被 弹球, 鱼 弹开
const int StPickup = 8; // 捡起抓取物
const int StDreamDash = 9; // 穿果冻
const int StSummitLaunch = 10; // badeline最后一次上抛
const int StDummy = 11; // 剧情过场状态
const int StIntroWalk = 12; // Walk 类型的 Intro (Intro 即玩家进入关卡的表现方式)
const int StIntroJump = 13; // Jump 类型的 Intro (1a)
const int StIntroRespawn = 14; // Respawn 类型的 Intro (重生)
const int StIntroWakeUp = 15; // WakeUp 类型的 Intro (2a awake)
const int StBirdDashTutorial = 16; // 序章教冲刺时冲刺结束后进入的状态
const int StFrozen = 17; // 未知
const int StReflectionFall = 18; // 6a-2 掉落剧情段
const int StStarFly = 19; // 羽毛飞行
const int StTempleFall = 20; // 5a 镜子后的掉落段
const int StCassetteFly = 21; // 捡到磁带后的泡泡包裹段
const int StAttract = 22; // 6a badeline boss 靠近时的吸引段
const int StIntroMoonJump = 23; // 9a 开场上升剧情段
const int StFlingBird = 24; // 9a 鸟扔状态
const int StIntroThinkForABit = 25; // 9a Intro
```

</details>

你要知道madeline(之后会称作player)的移动冲刺攀爬都是一个单独的状态, 我们在移动的时候按下冲刺player状态变为`StDash`, 冲刺结束后状态变为`StNormal`,
面向墙时按抓进入`StClimb`状态, 松抓又进入`StNormal`, 所以我们的player能干什么, 会干什么都是由当前的状态决定的, 很多技巧或是特性都是基于状态的强制退出产生的,
以平u为例, 就是因为抓取某些东西导致player进入`StPickup`状态, 打断了`StDash`冲刺状态, 于是速度被保留(更详细的原因后面说)

### 更新顺序

蔚蓝的每个实体都有个Depth(深度)属性, 越深的物体越先更新, 也越先绘制, 如果两个实体Depth相同则先加载的先更新(在Loenn里对应的应该是对象摆放的先后顺序, 先放的先加载), 正是因为更新顺序不同, 所以它有时会导致一些奇妙的特性或是细微的差异(例如你想让刺吸附在红绿灯上, 但现在有两个重叠的红绿灯, 则先加载的先把刺占用)

### 人物碰撞箱

人物的碰撞箱分为两个部分, 一个是伤害碰撞箱, 就是碰到会死的, 一个是普通碰撞箱, 就是管物理交互和一些trigger触发什么的

两个碰撞箱大小不同使得`踩刺`等一些操作成为可能(配合CelesteTAS查看碰撞箱更清晰)

* 站姿普通碰撞箱大小: (`8px x 11px`), 伤害碰撞箱大小: (`8px x 9px`),
* 蹲姿普通碰撞箱大小: (`8px x 6px`), 伤害碰撞箱大小: (`8px x 4px`)(这也是`dd` `退出羽毛状态后穿单向板`等一些机制的基础)

### [亚像素](https://www.bilibili.com/opus/919762384568975396)

### [对准导论](https://www.bilibili.com/video/BV1UP411w7d2)

### 游戏帧率

蔚蓝的游戏帧率保持在`60fps`, 也就是1秒60帧, 0.016666667s == 1f, 每帧更新一次

### 冻结帧

简单理解就是整个游戏都被时停了, 所以有无冻结帧并不影响游戏的逻辑

但冻结帧可以为我们的预输入等操作提供更大的容错

### 辅助Mod`CelesteTAS`(双击ctrl查看信息面板)

* 方便你查看player的状态, 碰撞箱和亚像素等一系列信息
* 在你手操不出来某些技巧但又很想试试的时候的时候可以使用其来编写操作序列(玩帧的)

### 后文的一些表示

* 像素: `px`
* 秒: `s`
* 帧: `f`
* 速度为每秒移动几像素: `90px/s`
* 速度为每帧移动几像素: `1.5px/f`
* 如果说`3 x 2大小`: 指宽为`3px`, 高为`2px`
* `Solid`: 一般就是那些实心对象, 例如: 玩家踩着的实心tile, kevin, swap块, 移动块等

## Mechanics(机制)

### retention

当玩家水平撞墙时, 游戏会给予玩家`4f`的计时器, 并将玩家水平速度置零, 若玩家在`4f`内离开了当前砖(判断方法是player前面`1px`有无阻挡)且此时速度与被阻挡前的速度不相反,
则会归还原来的水平速度(所以有时候对着1格高的砖hyper, 会在角那里卡一下, 然后又飞出去)

### LiftBoost

你在会动的`Solid`上会获得`10f`计时器, 如果你在这期间跳, 冲刺你就可以继承对应`Solid`的速度(相当于吃到`Solid`给你的`LiftBoost`, 一般被称为机关加速),
由于`LiftBoost`在被使用后计时器没有被清空, 所以你可以在某些操作下吃到成吨的`LiftBoost`(起飞)

### [Stun, 挂机118小时取消2/3圆刺加载](https://www.bilibili.com/video/BV1Sj41167Xv)

### 人物持续阻挡节奏块, 节奏块会周期性上移(bug, 特性)

简单理解：当节奏块由亮变暗, 碰撞箱会关闭, 并下移`2px`, 当节奏块由暗变亮, 碰撞箱会开启并向上移`2px`, 移动的方向由碰撞箱是否开启决定, 所以如果人物一直挡着节奏块,
那么节奏块碰撞箱就一直开不了, 就会不断上移

### player被Kevin, SwapBlock等推动挤压(可能"致死")的时候的修正

<details>
<summary>由于可能讲不清楚, 干脆直接配合代码理解(这里pusher就是Solid)</summary>

```csharp 
// player被挤压时调用的函数
protected override void OnSquish(CollisionData data)
{
    bool flag = false;
    if (!this.Ducking && this.StateMachine.State != 1)
    {
        flag = true;
        this.Ducking = true;
        data.Pusher.Collidable = true;
        if (!base.CollideCheck<Solid>())
        {
            data.Pusher.Collidable = false;
            return;
        }
        Vector2 position = this.Position;
        this.Position = data.TargetPosition;
        if (!base.CollideCheck<Solid>())
        {
            data.Pusher.Collidable = false;
            return;
        }
        this.Position = position;
        data.Pusher.Collidable = false;
    }
    if (!base.TrySquishWiggle(data, 3, 5))
    {
        bool flag2 = false;
        if (data.Pusher != null && data.Pusher.SquishEvenInAssistMode)
        {
            flag2 = true;
        }
        this.Die(Vector2.Zero, flag2, true);
        return;
    }
    if (flag && this.CanUnDuck)
    {
        this.Ducking = false;
    }
}
```

```csharp 
// player尝试的修正
protected bool TrySquishWiggle(CollisionData data, int wiggleX = 3, int wiggleY = 3)
{
    data.Pusher.Collidable = true;
    for (int i = 0; i <= wiggleX; i++)
    {
        for (int j = 0; j <= wiggleY; j++)
        {
            if (i != 0 || j != 0)
            {
                for (int k = 1; k >= -1; k -= 2)
                {
                    for (int l = 1; l >= -1; l -= 2)
                    {
                        Vector2 vector = new Vector2((float)(i * k), (float)(j * l));
                        if (!base.CollideCheck<Solid>(this.Position + vector))
                        {
                            this.Position += vector;
                            data.Pusher.Collidable = false;
                            return true;
                        }
                    }
                }
            }
        }
    }
    for (int m = 0; m <= wiggleX; m++)
    {
        for (int n = 0; n <= wiggleY; n++)
        {
            if (m != 0 || n != 0)
            {
                for (int num = 1; num >= -1; num -= 2)
                {
                    for (int num2 = 1; num2 >= -1; num2 -= 2)
                    {
                        Vector2 vector2 = new Vector2((float)(m * num), (float)(n * num2));
                        if (!base.CollideCheck<Solid>(data.TargetPosition + vector2))
                        {
                            this.Position = data.TargetPosition + vector2;
                            data.Pusher.Collidable = false;
                            return true;
                        }
                    }
                }
            }
        }
    }
    data.Pusher.Collidable = false;
    return false;
}
```

</details>

* 蔚蓝的移动都是先移动水平方向再移动竖直方向(不管是Solid还是player都一样)
* player被推的原理实际上是Solid先直接把自己放到下一帧的位置(根据速度推出来的, 先水平, 再竖直), 然后判断跟player有无碰撞, 有的话说明player被推了,
  会尝试把player向这个方向移动到刚好不跟自己接触(也就是刚好贴着), 移动到的这个位置被称作`TargetPosition`(注意这个时候Solid的碰撞箱是关着的,
  后面修正判断的时候会打开)
* 被推的时候player实际上是`1px` `1px`的移动并检测碰撞的(即移动后player在那个位置有没有跟什么实心的东西重叠)

当player被Solid压缩时(即`1px` `1px`移动时发现前面被挡住了):

1. 游戏会先强制player进入蹲姿(前提是player原来不是蹲姿且不是攀爬状态, 否则跳到`第3条`)
2. 若修正成功则跳到`第5条`, 若发生碰撞, 则尝试把player放到`TargetPosition`上, 若修正成功则跳到`第5条`, 若发生碰撞则
3. 尝试从原位置开始上下移动`5px`左右移动`3px`看看能不能修正(我在这里把它称为`修正1`), 如果不能修正就干脆直接把player放到`TargetPosition`上, 然后上下移动`5px`
   左右移动`3px`看看能不能修正(我在这里把它称为`修正2`)
4. 还不行就修正失败, 如果成功且之前强制player进入蹲姿了, 则尝试取消蹲姿
5. 判断结束

所以比如说像swap块移速过大时, 玩家在上面是可能在一帧内穿过砖块的)这同时也是player被kevin挤压可以穿过单向板(单向板不是实心的)的原因之一

#### [例子](https://www.bilibili.com/video/BV1oV411L7Kp/?share_source=copy_web&vd_source=88291083a8b9233d0006bb44b0331137&t=1280)

swap块是往左上移动的, 首先swap块水平移动, 把player推向墙边, 由于修正, player会进入蹲姿然后向下修正出去, 然后取消蹲姿, 然后swap块竖直移动, 带动player往上移动,
由于player撞顶(上面有砖),
触发修正, 修正1失败, 修正2成功, 于是player就从上面出来了, 至于为什么没有取消蹲姿, 因为在第二步就已经修正成功跳出来了

### [偷泡泡状态](https://www.bilibili.com/video/BV1oJ4m1M7YA)

首先要知道启动泡泡本质上就是冲刺, 只不过冲刺时会判断之前有没有进过泡泡, 没有就普通冲刺, 有就普通冲刺、启动泡泡并遗忘这个泡泡,
但如果进入泡泡后被胖头鱼或者新浪等打断进入`StLaunch`状态(所以本质还是状态被打断),
就不会进行这个冲刺, 也就不会遗忘这个泡泡, 所以能存储这个"状态", 之后使用即可

### 绑键

首先你要知道游戏判断一个键按下和抬起是需要`2f`的(因为游戏更新是看帧的, 是不连续的, 所以要判断一个键的按下和抬起各需要`1f`来检测到状态的变化)

如果你写过TAS的话就会知道

```csharp
// 对应的是你按了2f的跳, 实际上只跳出一次
1, J
1, J
    
// 对应的是你按了1f跳, 松开1f, 再按了1f跳, 这样就能跳两次出来
1, J
1
1, J
    
// 如果绑了键, 那就是这样, 能在2f内跳两次, 而不是用一个键位在3f内跳两次
1, J
1, K
```

所以你不要想着松跳再按跳就能按出"连续"的跳(不过用pause好像就可以), 这也是我们为什么要绑键的原因, 有时候就是这一帧的区别导致速度不够, 位置有偏差什么的,
使得某些操作容错很小,
甚至有的操作只能靠绑键完成, 不过有时候绑键只是为了简化操作而已

主要应用但不限于

- 各种无冲技巧, 例如`dcb`, `2f cp`等
- 咖啡, 因为有的咖啡跳满容错高, 有的只能跳满才能操作
- 速通, 一般会绑个左右抓跳方便rcb
- 简化操作, 例如[反丢](https://www.bilibili.com/opus/905695842667593749)

### 镜头垂直锁定

当场景内有badeline球(属性内可关闭该效果)的时候, 镜头上移一定程度后将不能再下移超过某个临界线, 而且它还会限制你向上移动的距离, 也就是让镜头有个上界, 若超过上界会顶头, 超过下界则会直接死亡(此时可以把镜头的边界简单当作房间的边界)

## Dashless Tech(无冲技巧)

### 亚像素调整

当人物撞墙/撞地(后面只说墙), 游戏会重置那个方向的亚像素, 撞墙即当前你的速度足够让你在这一帧陷到墙里面, 这样游戏就会判断撞墙(这同时也是ultra有时预输入吃不到加速的原因,
因为运气不好可能没有撞地)

所以一般操作是先撞墙重置亚像素, 再一帧帧地按方向键找某个特定区间的亚像素, 当然可能也有些奇奇怪怪的对准

### slow fall(缓降)

当你按着跳的时候, 如果你的y方向速度范围在`[-40, 40]px/s`之间(也就是刚跳起到最高点和刚落下那一小段)的话, 重力加速度会减半, 比如正常来说`g`是`15px/s*f`,
如果按着跳就是`7.5px/s*f`, 所以说有时候你打蔚蓝的时候死按着跳会觉得madeline有那么点儿轻飘飘的感觉

作用

- 提供了一定对准
- 增大了一定容错, 例如对于一个`7`字形的结构, 通过缓降你扒在左上角是可以轻易滑倒右下角上的砖上的, 如果没有缓降, 就会比较麻烦(`cp`)或者比较极限(
  不缓降直直的滑下去)
- 让一些操作成为可能

### cp = ceiling pop

[这里直接放狼哥cp那一栏的链接](https://www.bilibili.com/read/cv33425228/)

### cb = corner boost(抓角加速)

结合retention和抓跳水平速度`+40px/s`, 来理解, 又能吃到加速又能保留速度(前提是cb在撞墙之前)

### rcb = reversed cb

比如你的速度向右但是你可以向左墙抓跳吃到`-40px/s`的水平速度, 虽然目前看是速度损失的, 但是你可以吃到`LiftBoost`带给你的速度, 它还可以打断你的冲刺,
这在[5b速通新路线](https://www.bilibili.com/video/BV1wEW5ehE4a/?t=26)里用到了, 大概就是中性跳, 左抓跳(rcb), 右上冲, 左抓跳(rcb), 吃到3次机关加速而且抓跳打断了冲刺,
至于第二个冲刺有没有吃到机关加速就不清楚了, 反正大概是这么飞起来的

### dcb = double cb(双cb)

在retention前吃到两次cb加速(要绑两个跳跃键位), 因为player离墙`2px`还能抓跳, 所以如果亚像素允许的话, 可以做到第一次cb贴墙但不撞墙, 第二次cb又吃一次加速然后撞墙触发retention

### 5jump

由于玩家抓在有刺的砖上时最高也就头探出`4px`, 但如果原地起跳然后第二次预输入跳就能在更高的位置起跳, 足够跳过5格刺

<details>
<summary>TAS Input举例(player朝右抓住墙的最上端)</summary>

```csharp
  1,G
  ***
  1,J
  3
  38,R,J,G
```

</details>

### 6jump

5jump + 满的的水平速度(`90px/s`)：1a无冲著名景点有多种过法, 如缓降对准, 中性跳对准, 抽等等

<details>
<summary>TAS Input举例(player朝右抓住墙的最上端(这里应该没有亚像素影响, 有应该也很小))</summary>

```csharp
   1,G
   ***
  13
   1,J
  24,R,J
  40,R,K,G
```

</details>

### [7jump](https://www.bilibili.com/video/BV19zvCeZE3U) (想想当初什么都不懂的时候看7jump都觉得开了)

亚像素 + 满的的水平速度(`90px/s`) + dcb

<details>
<summary>TAS Input举例(player朝右站在墙的最底端, 墙为2格高, player初始亚像素为(0.5, 0.5))</summary>

```csharp
   1,G
   ***
  19,U,G
   1,D,G
   1,G
   1,D,G
   1,G
   1,D,G
   1,G
  34,J
   2,L,J
   1,L,K
  38,R,K
   1,R,J,G
   1,R,K,G
 100,R,K
```

</details>

### 8jump

亚像素 + 满的的水平速度(`90px/s`) + 地面起跳 + dcb

<details>
<summary>TAS Input举例(player朝右站在墙的最底端, 墙为1格高, player初始亚像素为(0.5, 0.5))</summary>

```csharp
   8,L
   1
  11,D
   9,R
   1,R,J
   1,R,K,G
 100,R,J,G
```

</details>

### 9jump

亚像素(相对8jump垂直方向的亚像素要更高) + 满的的水平速度(`90px/s`) + 地面起跳 + dcb + 抓跳(抬升高度)

<details>
<summary>TAS Input举例(player朝右站在墙的最底端, 墙为1格高, player初始亚像素为(0.5, 0.5))</summary>

```csharp
# adjust vertical subpixel

   1,R,G
   1
  36,J
  13,G
   1,D,G
   1
   2,G
   1
  10,U,G
   2,D,G
   3,U,G
# adjust horizontal subpixel
   2
   8,L
   1
  11,D
   9,R
# ground jump
   1,R,J
# cb
   1,R,K,G
# cb
   1,R,J,G
# climb jump
   1,R,K,G
# climb jump
 100,R,J,G

```

</details>

### 普通咖啡(1~3格无冲跳, 或者更多格但是搭配斜冲或者dd)

#### 咖啡就是踢墙, 这时`如何咖啡`这个问题就变成了`如何到墙角下`:

* 可以通过修正也就是你向上撞天花板, 把你修正到一边(跳、冲刺、dd都可)
* 可以通过斜上冲结束时带给你的向上速度, 在出墙后上升的一瞬间踢墙, 由于是冲刺结束所以有时候你会发现冲刺贴顶时太近太远都不行, 得在冲刺结束后刚好在墙边,
  不然又撞顶y速度归零, 或者飞出去了但冲刺还没结束
* dd结束人物碰撞箱抬升(不是位置抬升, 是高度变回去了(`11px`))

### 4格咖啡

对准跳满即可(绑两个跳键)

### [5格咖啡](https://www.bilibili.com/video/BV1n4421U7Wc)

关键在于亚像素的调整和双踢墙(保留初始速度的同时起步位置更靠右)

### [6格咖啡](https://www.bilibili.com/video/BV1acvCeREWG)

吓死了, 看不懂, 大概感觉是亚像素 + 蹲姿 + 中性抓跳保留垂直速度顺便保留蹲姿

<details>
<summary>TAS Input举例(player初始亚像素为(0.5, 0.5))</summary>

```csharp
# adjust subpixel
  25,J,G
  10,K,G
  34,D,G
   1
   1,R
   1
   1,L,D
# jump
   6,D,J
   1,K,G
   1,R,K
   1,L,K
   1,J,G
  26,R,J
   5,L,K,G
```

</details>

### 2*1咖啡

抓到最下面按`1 ~ 2f`跳即可(稍微抽一抽, 亚像素可能也要对)

### 3*1咖啡

大概应该是一定的竖直亚像素 + 蹲姿中性抓跳 + 缓降

<details>
<summary>TAS Input举例(player初始亚像素为(0.5, 0.5))</summary>

```
// * 为砖, x为空气, p为player
****
*
x
x
*p
*****
```

```csharp
# adjust vertical subpixel
   1,L,G
   1,J
   9
  11,G
   6,D,G
# jump
   1
   1,L,D
  11,D,J
# neutral grab jump
   1,K,G
   4,R
# slow fall
  11,R,J
  10,K
```

</details>

### 中性跳咖啡

大概原理就是中性跳, 然后你在进入刺的时候顺着刺的方向移动, 所以跟普通咖啡差不多, 反正这类一般都是在速度上做文章: 怎么保证进入刺能跳的范围且有顺着刺的速度

<details>
<summary>TAS Input举例(player初始亚像素为(0.5, 0.5))</summary>

```
// * 为砖, x为刺, a为空气, p为player
**x
**x
xx
a
a
a    xxx
a    ***
aaaap***
********
```

```csharp
20,U,G
   2,J,G
  15,K
   1,R
 100,R,J
```

</details>

### 抓刺跳(我也不知道叫什么, 感觉这个挺合适)

参考[Dashless+](https://www.bilibili.com/video/BV1dyWCeNEhJ/?t=363)这一面

首先要知道如下几个机制

* 抓墙后垂直方向速度变为原来的`1/5`
* 你在墙角下`2px`仍可以抓墙(不按`下键`且不吹下风的情况下)
* 抓墙状态在离开墙后会保持`1f`后退出(这也是cp的原理之一)

所以原理就是你在下落的时候抓到墙, 但是y方向的速度/5后依然够你下移1px移出刺的范围, 所以你没死, 同时保留了抓墙状态, 可以往另一个方向跳

### cp(ceiling pop) [无对准cp手操教学](https://www.bilibili.com/read/cv33425228)

#### Q: 为什么cp调整的时候有时会听到两次抓墙的声音, 而且为什么听到`1`次对应竖直亚像素`0 ~ 0.75`, 听到`2`次对应`0.75 ~ 1`

- 当我们在最底下的像素一帧一帧按下的时候`1f`移动`0.25px`, 当这一帧离开了这个像素(说明我们亚像素在`0 ~ 0.25px`), 我们会`1f`保留StClimb, `1f`进入StNormal, `1f`
  恢复StClimb, 我们在这三个状态间的速度为`15px/s`,` 15px/s`, `3px/s`, 相当于亚像素往下移动了`0.55px`(记得取余), 我们会进入`0.45 ~ 0.7`区间,
  接下来只要连续按两帧下没有听到抓墙声即可把亚像素调整到`0 ~ 0.25px`间,这样按最多只听到一次抓墙声

- 但如果我们按随机帧的下(更近似手操), 就会出现比较大的速度, 导致状态从StNormal进入StClimb的时候, 如果此时亚像素偏下, 速度`/5`提供的位移依然离开了当前像素,
  又进入StNormal, 然后又返回StClimb, 于是就听到了两次抓墙声, 此时亚像素区间为`0.75~1`(应该是不够精准的, 但区间肯定是被这个区间包着的)

### gwoost

* [狼哥解释](https://www.bilibili.com/video/BV1bSeUeYE1X/)
* 简单理解就是偷体力获得的`130px/s`的速度, 结合落地后的狼跳跳的更远

### [Cornerslip](https://www.bilibili.com/video/BV15w4m1k7P2)

首先要知道player的移动是根据当前速度先移动水平方向再移动竖直方向

所以如果亚像素对好的话, 是有可能在下落过程中当前帧落地不撞地(撞地后竖直方向速度会归零), 回复冲刺和获得狼跳后, 下一帧移出当前方块而不撞地

## Dash Tech

### 冲刺基本机制

#### 组成

`1f按下按键` + `3f冻结帧` + `11f冲刺` + `6f额外的dashAttackTimer`, 前`15f`组成了冲刺状态, 冲刺结束后仍然保留`6f的dashAttackTimer`

#### 基本

* 冲刺提供`240px/s`的速度, 意味着斜冲提供的一个方向速度只有`240 * √2 / 2 = 169.7px/s`
* 若player撞顶, 则`dashAttackTimer`会清零
* 如果在水里冲刺, 则速度衰减为原来的`0.75倍`, 即`240 * 0.75 = 180px/s`
* 如果冲刺后的水平速度 < 冲刺前的水平速度, 则冲刺后的水平速度更改为冲刺前的水平速度
* player 有一个`DashDir`的变量来记录冲刺的方向
* 冲刺时单向板的修正有`6px`的容错
* 当冲刺结束后若player的竖直方向速度朝上, 则y方向速度衰减为原来的`0.75倍`
* super, hyper, 踢墙, 抓跳, 踩鱼头, 被鱼炸, 被新浪炸等操作都会导致冲击状态被打断, 只不过有的状态改变会覆盖你的速度, 而有的是在原来的基础上再加
* 冲刺开始时获得`6f`的回复冲刺延迟(所以瞬发hyper之类的不会充能, 很多反向技巧可以保证触碰到平台的一瞬间就充能)
* 冲刺的方向由冻结帧结束后下一帧(按键方向)决定
* 当冲刺结束后若`DashDir`的垂直方向不向下, 那么player会获得`DahsDir * 160px/s`的速度(斜上冲能咖啡的原理之一)(这个速度是覆盖而不是叠加, 所以平u不能无限叠速,
  因为撞地会导致`DashDir`被改变)
* 当player撞地的时候只要这个`DashDir`水平方向不为`0`, 且垂直方向向下, 且player有向下速度(总的来说就是上一次斜下冲了)player的水平速度就会`*1.2`(
  这也是延迟ultra的原理之一), 但游戏会在player撞地后把把`DashDir`的垂直方向置零(撞顶不会, 因为前提是速度向下)
* 斜下冲撞地的一瞬间会使player进入蹲姿状态

### hyper/wave/super dash

本质都是一样的: 只需在冲刺结束前按跳即可触发, 而至于按出来的是super还是hyper/wave取决于跳的时候是否是蹲姿

### 蹲姿抓墙(碰撞箱为蹲姿的, 显示的madeline图片是抓取的)

可通过dd进果冻反抓, 或者斜下冲抓墙撞地实现, 由于斜下冲会让下次落地进入蹲姿, 而冲刺时无法进入抓墙状态, 所以要借着冲刺结束后的那点速度抓墙后滑下墙撞地进入蹲姿(注意在空中有向下的速度且没有狼跳帧就会尝试取消蹲姿)

### ultra

理解了冲刺的基本机制就理解了ultra: 由于我们需要撞地来加速, 而冲刺结束前撞地会导致冲刺结束后更改速度, 所以ultra对高度有一定要求以保证冲刺结束后马上撞地同时又不损失过多速度

### du = delayed ultra 延迟ultra

理解了冲刺的基本机制就理解了延迟ultra: 就是提前斜下冲而不撞地以存储`*1.2`这个操作, 在适当的位置撞地然后立即接u, 跟普通的u比对高度的要求少了很多, 更多的是时机的把控

### 手操dd

你需要在冲刺前按下`下`, 并且在冻结帧结束前松开, 这样就能保持蹲姿并以自己想要的方向冲出

### Undemo dashing(避免蹲姿冲刺)

如果我们站在果冻上右下冲, 一般情况出来的时候会是蹲姿, 此时如果输入果冻hyper会导致蹲姿取消从而输出果冻super, 所以我们要使用类似手操dd的方式来避免蹲姿:
即按下冲刺的时候不按`下`, 冻结帧结束之前按住`右下`

### db = dashbounce

见[狼哥解释](https://www.bilibili.com/video/BV1Zb421Y7UX/), 已经讲得非常清楚了

### Climbhop Cancel

* climbhop就是指爬墙到顶往上小跳一下的动作
* 节奏块消失时也会有这个动作

当你在这个状态时, 游戏会记录你hop的solid(即砖, sawp块等实心物), 如果这个solid位置变了, 你也会跟着过去(就像在swap块上冲刺一样), 有了这个特性我们就可以在hop期间冲刺,
来激活类似swap块一样会移动的东西, 我们就会在冲刺的基础上带上solid移动的位移, 你可以想象一下: 我们面朝左扒在swap块上然后上冲做一个`Climbhop Cancel`(如果swap块速度够快,
我们就可以获得朝左的速度和朝右的位移), 如果我们因这个位移进入了一个朝左的刺, 而我们又预输入了跳, 是不是就能做出一个蹭墙而不被杀死了呢

## Entity Tech

### [泡泡retention](https://www.bilibili.com/video/BV1Fu41137NH)

进入泡泡速度归零, 但retention会返还速度, 所以可以用来提前触发某些东西(比如硬币)

### 速降穿刺

由于朝上的刺判定伤害的方式略微特殊(人物伤害碰撞箱`8 x 9`底部必须在刺之上(包括重合)并且人物没有向上的速度才会死), 而刺的高度为`3px`这意味着如果player有`> 3px/f`
的垂直速度就可以在上一帧在刺的上方一格像素(亚像素偏下), 下一帧在刺的下方一格像素(亚像素偏上), 而速降提供的速度`240px/s` `4px/f`完全足够, 所以如果速降起始位置亚像素对好就能穿刺

### 踩刺(以酱5 gym举例)

* 刺在swap块上, 对准后player碰到刺"无伤"
    * 首先要知道在swap块上的刺不是一个独立的个体是由swap块管理的, 所以swap块更新自己的移动时也会更新刺的移动
    * 由于先前提到的深度问题, player会在swap块之前更新, 而碰撞的判断在player的update函数内, 这导致先判断了碰撞, 再更新刺的移动, 所以更新完移动后看似player碰到刺了,
      实际上碰撞检测早已结束, 所以无事发生
* 草莓酱那个风是来自FactoryHelper的WindTunnel实体(由于它的更新顺序在player之后, 所以也可以类比swap块的例子, 也就是这一帧碰撞先于移动, 看起来碰到了实际上检测已结束,
  然后风把player向某个方向吹一定距离, 下一帧通过跳跃什么的离开碰撞范围)
* 然后就是原版的风WindController, 它的更新顺序在player之前
    * 对于下风(速度为`30px/s` `0.5px/f`)和朝上的刺, 如果亚像素对好, 那么可以保证在当前帧位于刺的上一像素偏下的位置, 下一帧风把你吹到地上然后预输入跳即可
    * 对于左(右)狂风, 你只需按着反向的键即可, 这样风带给你的位移会让你持续贴着刺, 而你有顺着刺的速度所以不会死
  > 有趣的的是正是因为更新顺序不同, 所以当例如狂风向右吹, player向左走的时候, 对于原版的风player最终会保持在靠墙偏左的位置, 因为先更新的风再更新的player,
  而对于windTunnel版的风则是贴着墙, 因为player先更新好, 风再把player吹到墙上

### Koral Clip

当player被kevin水平推出房间, 由于player会强制自己限制在房间范围内(`EnforceBounds`), 之后kevin返回时由于上面提到的修正, player会从另一侧出来

### Bino Tech

#### 基本

* 当与望远镜交互时player会进入`StDummy`状态(一般用于Cutscene), 当结束交互时player的状态会强制变为`StNormal`, 并把`interacting`变量设为`true`
* 由于代码本身的限制, 交互时下一帧才进入`StDummy`状态
* 交互第一部分: player会走向bino, 但过程中但凡离地`1px`, player就会进入`StNormal`状态, 但没有把`interacting`改回去(`Bino Interaction Storage`的基础)

#### Bino Clip

游戏会卸载镜头外的刺

#### Bino Control Storage

你能同时操控望远镜和madeline

一般是看望远镜的时候跳过过场动画或者被什么东西打断(比如胖头鱼把你顶起来, 或者把你爆开)

#### Bino Interaction Storage

`1f`按交互, `1f`按跳, 可以使你退出`StDummy`状态的同时保留`interacting`, 这样在你切板的时候, bino发现`interacting`为`true`, 就会把player状态设为`StNormal`,
这使平u保留速度成为可能(打断了冲刺)

## QA

### [为什么这里吃到了416加速](https://www.bilibili.com/video/BV1fKvkeaEqk)

胖头鱼正常情况爆炸提供水平速度`280`, 超级弹提供`280 * 1.2 = 336`, 这里由于你抓取后胖头鱼爆炸了, 游戏会强制你扔出胖头鱼(本质上胖头鱼不是爆炸消失了, 而是爆炸后隐藏了,
但你还抓着), 由于此时你面朝左边, 你又吃到了一个反丢加速`336 + 80 = 416`, 于是你就飞起来啦, 但, 这里记录主要还有个原因——"
为什么最后一帧抓取好像会吞掉player一帧update一样速度不会减", 经研究得出"因为抓取时的那一帧会改抓取物的深度, 导致上一帧是先更新puffer的, 抓取后的下一帧则是先更新player,
导致如果最后一帧抓, player没速度, 然后更新puffer获得`416`水平速度, 但如果早点抓, puffer update又把深度改回去了, 所以先更新puffer获得`416`
再更新player减速为`412.67`"

### 为什么左右切板时如果只有一格空间左边会卡死, 右边则没事

先上图

![ReasonForStuckOnSceneTransition](https://github.com/LuckyBoy-7/CelesteWiki/blob/main/Images/Mechanism/ReasonForStuckOnSceneTransition.jpg)

黄框为当前场景范围, 黑框为当前场景往外扩`4px`范围, 橙框是隔壁场景脚下的砖块, 绿红那个就是player的碰撞箱, 天蓝色是player的position位置,
原理：左右切场景时游戏会先将当前场景向外padding `4px`, 然后将player向左(右)移动直到position移出场景, 但由于player position不在正中间, 导致隔壁若只有一格(`8px`),
左边会卡住, 右边则正常, 如果到达不了指定位置, 那么持续一段时间后游戏会重载当前关卡.


