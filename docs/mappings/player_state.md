以下是一些游戏中常见的玩家状态对应的数字序号以供查询, 摘抄自 [Saplonily 的代码教程](https://saplonily.top/celeste_modding_tutorial/code_modding/wiki/component/statemachine/)

```c#
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