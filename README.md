# 蔚蓝 Wiki

## 自行 host

> 摘自 [Sap 的网站](https://github.com/Saplonily/CelesteModTutorial)

文档网页使用 python 工具 `mkdocs` 构建, 自行 host 很简单:

首先 clone 仓库:

```sh
git clone https://github.com/Saplonily/CelesteModTutorial
```

安装 `mkdocs` python 工具环境, 如果你还没有的话:

```sh
pip install mkdocs
pip install mkdocs-material
```

此外还有插件:

```sh
pip install mkdocs-git-revision-date-localized-plugin
pip install mkdocs-git-authors-plugin
pip install mkdocs-glightbox
```

开放网页服务:

```sh
mkdocs serve
```

默认开放在 `localhost:8000`.

----

本系列内容依据 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可证进行授权