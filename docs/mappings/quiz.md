# 第一届蔚蓝制图小测(总分: 202 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"})

> 本次考试没有监考老师, 请同学们不要交流打闹, 诚信考试, 不要作弊, 考试时间为 2h
>
> 叮铃铃 ...... 同学们, 考试现在开始! 请大家仔细阅读试卷上的题目和答题要求, 合理安排答题时间。遇到难题不要慌张, 可以先跳过, 等做完其他题目后再回来思考

## 单选题(总分 100 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"}, 一题 5 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"})

### 1. 使用 Bird Path 时, 算上头节点跟子节点, 总共需要多少个游戏才不会崩溃

<table>
<tr>
<td>A. 随便几个都可以</td>
<td>B. 3n + 1</td>
<td>C. 2n + 1</td>
<td>D. 3n + 2</td>
</tr>
</table>


### 2. 当你冲刺进入果冻, 尝试反抓的时候完全没入水中会发生?

<table>
<tr>
<td>A. 反抓成功</td>
<td>B. 反抓失败</td>
<td>C. 游戏崩溃</td>
<td>D. 玩家会瞬间浮到水面</td>
</tr>
</table>

### 3. 当你放置了红绿灯 A, 并在它的上面叠了一个红绿灯 B, 你在他俩上面放了一个刺, 刺会吸附到?

<table>
<tr>
<td>A. 红绿灯 A 上面</td>
<td>B. 红绿灯 B 上面</td>
<td>C. 都吸附失败</td>
<td>D. 会额外生成一个刺, 各吸附一个</td>
</tr>
</table>

### 4. 当使用 parallax 背景并设置了 flag 和 fade In, 开启 flag 后背景会淡入, 但如果此时关闭了 flag 会发生?

<table>
<tr>
<td>A. 背景正常淡出</td>
<td>B. 背景直接消失</td>
<td>C. 取决于其他设置</td>
<td>D. 钝角</td>
</tr>
</table>

### 5. 以下哪一个是实体`水母`的官方名字?

<table>
<tr>
<td>A. Glider</td>
<td>B. Jellyfish</td>
<td>C. ShuiMu</td>
<td>D. TheoCrystal</td>
</tr>
</table>


### 6. 中华古诗词是中国优秀传统文化之一, 如图, 在优质国产地图《万家灯火》中存在以下贴图元素, 呈现了诗句: “奔流到海不复回”, 但图示 decal 摆放并不规范, 请问应该按照以下哪个 loenn 快捷键顺序调整 decal 位置, 使其合乎中国传统诗句的阅读顺序?

<figure markdown>
  ![decal_wrong](../assets/mappings/quiz/decal_wrong.png){style="width: 300px; image-rendering: pixelated; title=123"}
  <figcaption>错的</figcaption>
</figure>

<table>
<tr>
<td>A. L, R, H, R</td>
<td>B. R, H, L, L</td>
<td>C. H, R, L, R</td>
<td>D. R, R, H, L</td>
</tr>
</table>

## 填空题(总分 72 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"}, 一题 4 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"})

### 1. 蔚蓝的 `log.txt` 存放在 `______`(填路径)
### 2. 蔚蓝的 Mod 加载器叫 `______`, 蔚蓝的 Mod 管理器有 `______`, `______`
### 3. 蔚蓝的人物音效主要用到了 Fmod 中的 `______` 技术
### 4. 蔚蓝的一般画布大小为 `______` x `______`(填数字)
### 5. 设置 flag 的方式: `______`, `______`(至少两种)
### 6. 显示碰撞箱的方式: `______`, `______`(至少两种)
### 7. 游戏内更新 Mod 失败原因: `______`, `______`(至少两种)
### 8. 默写草莓 idle 动画的第一个图片路径, 从 `Graphics/` 开始 `______`


## 判断题(总分 30 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"}, 一题 1 ![strawberry](../assets/mappings/quiz/strawberry.png){style="width: 40px; image-rendering: pixelated; vertical-align: middle;"})

###

### 1. 我们无法进入 Filler 房间

### 2. 在地图同路径创建同名 `.meta.yaml` 文件即可使用拓展镜头的功能

### 3. 在原版游戏中, 我们可以通过替换 Dialog 文件来替换所有的官图文本

### 4. 你作弊了吗

## 答案

<details>
<summary>单选题答案</summary>
```
1 ~ 5: C, D, A, B, A
6 ~ 10: B



```

</details>


<details>
<summary>填空题答案</summary>

* 1~5: C

</details>

<details>
<summary>判断题答案</summary>

* 1~5: C

</details>

## 解析

### 单选题

#### 1

因为 bird path 需要使用贝塞尔曲线, 所以从第一个节点开始, 每次往后必须多两个节点才够构造这个曲线, 不然找不到点就会报错

#### 2

代码是这么写的: 如果玩家在抓的状态下被水淹没, 游戏就会把玩家不断上移

#### 3

更新顺序问题, 先加载的实体会先把刺占了

#### 4

因为本来就没有 fade out 设置, 所以如果没 flag 就是直接消失, 如果加 fade out 并设置 fade in/out 的持续时间, 请使用 `MaxHelpingHand/StylegroundFadeController`

#### 5

这就是事实, 所以解析略...(感觉是一开始本来就没想做水母, 到后面发现用水母比较贴切, 但是名字已经不方便改回去了)

#### 6

先逆时针旋转, 再水平翻转(一个 L 和一个 R 可以相互消掉不看, H/V 同理), 由于是像素字比较难辨认, 所以这里盯住**到**这个字会看的清楚一点
