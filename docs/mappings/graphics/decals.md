参考/引用

* [Decal](https://wiki.biligame.com/celeste/Decal)
* [废话 deco 教程]()(群文件里下)
* [jpyx258 的 deco 轮椅]()(群文件里下)
* [静态/动态 Decal 使用 by 底龙](https://uddrg.notion.site/Decal-2787f4f27e638051a265e8b708adbe03)

心得

> KaileyTheAlien: I remember when I found that room in Paint on my first playthrough and just stood there crying for like 10-15 minutes

* [春暮Q 中翻 - Donker's Deco Guide](../../assets/mappings/graphics/decals/中翻%20-%20Donker's%20Deco%20Guide.docx), [原文](https://docs.google.com/document/d/1ebzZTL7eX21M0FJR2IAUPCCGxnDUscZdRW8GiGl8Yus/edit?tab=t.0)
* [Creating Atmosphere in Celeste Mods by ricky06](https://www.youtube.com/watch?v=n5iHuXW8TyY)

Decal 装饰物文件放置位置

- 📁 Mods
    - 📁 项目名
        - 📁 Graphics
            - 📁 Atlases
                - 📁 Gameplay
                    - 📁 decals
                        - 📁 作者名
                            - 📁 项目名
                            > 你的装饰图片文件放到这里
                                - 📄 decal.png
                    


## 静态 Decal

对于一般 Decal 而言, 如果想在地图中使用, 只需要将 Decal 文件(透明背景画布 `.png` 格式)放入上面所述的位置即可, 
Loenn 的 Decal 栏就会自动显示出你的 Decal 了(记得 Ctrl + F5 刷新或重启)

### 注意事项

* Decal 的大小一般没有限制, 但是过大的 Decal 堆叠多了之后, 会导致游戏卡顿
* Decal 文件名中不建议使用空格, 如果需要可以使用下划线代替, 一般建议文件名只包括字母, 数字, 以及下划线
* Decal 文件名的结尾不可以是数字, 最好也不要是下划线

## 动态 Decal

对于动态 Decal, 文件放置的位置也是上述结构中, 但是与静态 Decal 不同的是, 动态 Decal 的文件名结尾必须是数字, 表示帧序号, 
比如我有一张三帧的动画素材, 它的命名可能是这样的 `animatedDecal00.png`,`animatedDecal01.png`,`animatedDecal02.png`

<div class="admonition note">
    <p class="admonition-title">注意</p>
    <p>同一个动画序列的数字必须从 0 开始, 否则会导致地图编辑器不读取</p>
</div>

