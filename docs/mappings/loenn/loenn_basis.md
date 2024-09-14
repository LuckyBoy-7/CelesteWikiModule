> Loenn为了方便制图将蔚蓝的东西分成以下几个部分

## Tile

* 按功能分为`前景砖(即可以踩的实心砖)`和`后景砖(即背景)`
* 提供的绘制方式有`Brush(普通笔刷)` `Bucket(油漆桶填充)` `Circle(正圆)` `Ellipse(椭圆)` `Line(线段)` `Rectangle(矩形)` 等

## Entity

即实体, 大多数时候就是那些可见, 可交互的物体, 例如:

* 水母, Theo水晶, 红绿灯, Swap块, 移动块, 新浪, 单向板, 月亮块等, 

也有例外, 例如: 

* Player(Spawn Point)重生点

## Trigger

即触发器, 顾名思义就是当player碰到的时候触发某些东西, 做某些事, 大多数时候不可见, 例如:

* Everest Dialog Cutscene: 在player碰到trigger时播放对应对话(详情见[Dialog栏目](../dialog.md))

或者当player呆在Trigger里的时候干某些事, 例如:

* Bloom Fade Trigger可以根据玩家在Trigger中的不同位置来调整泛光的强度的大小

## Decals

分为前景decal和后景decal, 用于装饰