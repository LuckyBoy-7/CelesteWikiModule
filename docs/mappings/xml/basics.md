其他资料

* [XML 简单介绍 by Saplonily](https://saplonily.top/celeste_mod_tutorial/other/xml-speedrun/)
* [XML 通用基础教学 by 底龙](https://uddrg.notion.site/UnderDragon-s-Partial-Wiki-2737f4f27e63808582b3f0689163d8f9?p=3877f4f27e63801dacbecb51059de555&pm=s)

想象一种情况, 当我们描述一个静态场景 (没有动作)的时候, 我们该如何让计算机准确理解我们在说什么呢, 比如下面这句话:

> 我有一张<font color="red">桌子</font>, 桌子上有一个<font color="red">盒子</font>,
> 盒子里装着好多<font color="red">毛爷爷</font>, 桌子上还有一部<font color="red">手机</font>, 手机是华为型号的, 并且性能遥遥领先,
> 桌子上还有本<font color="red">书</font>, 标题是 Celeste, 里面写着 "为什么要登上那座山? 因为..."

显然计算机是无法轻易理解人类的语言的(~~人类自己都会有误解~~), 所以我们要用一种计算机看得懂的相对通用格式来描述这种话, 而 XML 格式就是用来干这个的

## 例子

先举一个简单的例子, 如果我们要用 XML 描述上面的话大概会这么写

我有一张桌子

```xml

<desk/>
```

桌子上有一个盒子, 一部手机, 一本书

```xml hl_lines="2-4"

<desk>
    <box/>
    <phone/>
    <book/>
</desk>

```

盒子里装着好多毛爷爷

```xml hl_lines="3-5"

<desk>
    <box>
        <money/>
        <money/>
        <money/>
    </box>
    <phone/>
    <book/>
</desk>

```

手机是华为手机, 并且性能遥遥领先

```xml hl_lines="7"

<desk>
    <box>
        <money/>
        <money/>
        <money/>
    </box>
    <phone type="华为" performance="遥遥领先"/>
    <book/>
</desk>

```

书名叫 Celeste, 里面写着 "为什么要登上那座山? 因为..."

```xml hl_lines="8-10"

<desk>
    <box>
        <money/>
        <money/>
        <money/>
    </box>
    <phone type="华为" performance="遥遥领先"/>
    <book title="Celeste">
        为什么要登上那座山? 因为...
    </book>
</desk>

```

你会发现 XML 能很好地描述一个静态场景里

* 有什么对象, 对象间的包含关系: 比如上面的盒子/手机/书, 盒子里的毛爷爷, 书上的字
* 对象的属性: 比如手机的型号是什么, 性能怎么样, 书的标题是什么

## 语法

上述例子中的桌子, 盒子, 毛爷爷, 手机, 书都是一个个可以被描述的静态对象, 对应到 XML 里就是一个个 XML 节点, 格式如下

```xml

<tag attribute_1="属性内容" attribute_2="属性内容" attribute_n="属性内容">content</tag>
```

* tag 标签描述了这个对象是个什么东西
* attribute 描述了这个对象有什么样的性质 (属性), 它的质感, 颜色, 形状等等
* content 描述了这个对象的内部有什么, 可以是文本也可以是其他的 XML 节点

比如上面提到的书就能描述成

```xml

<book title="Celeste">
    为什么要登上那座山? 因为...
</book>
```

### 简写

如果一个 XML 节点没有内容

```xml

<desk></desk>
```

比如桌上其实没有任何东西, 那就可以写成

```xml

<desk/>
```

### 注意事项

你可能会好奇为什么 XML 节点一定要写成 `<tag></tag>`, 那是因为如果写成 `<tag><tag>`, XML 就无法分辨出层次了, 比如

```xml
<box>
    <box>
        <money/>
    <box>
<box>
```

那这到底算是有一个空盒子, 一张钞票, 一个空盒子呢, 还是算一个盒子里有另一个盒子, 那个盒子里装着钞票呢

其他方面也同理, 为什么要加尖括号, 为什么要凑成一对等等, 你仔细想想很快就能发现问题, 总之最后为了兼顾美观和实用节点的形式就变成 `<tag></tag>` 这样了


## 常见错误

### 写法混用

```xml

<Player path="characters/player/" start="idle"/>
    <Loop id="..." path=""/>
</Player>
```

这段代码结尾有 `</Player>`, 开头却是 `<Player ... />`, 这里显然是用完整写法, 所以将第一行最后的斜杠 `/` 去掉即可

### 标签未配对

```xml

<Tilesets id="1" path="UnderDragon/mySet">
    <Set mask="..." path="..."/>
    <Set mask="..." path="..."/>
```

这里底部缺少 `</Tileset>`, XML 解析器分辨不出你这个 Tilesets 标签对应的是简写还是完整写法 
