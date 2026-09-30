> 其实很多换素材的逻辑都是仿照官图素材路径放素材, 然后套文件夹防冲突, 所以对照着官图素材路径摆其实蛮好理解的

<a id="postcard"></a>

## [自定义明信片贴图](https://github.com/EverestAPI/Resources/wiki/Map-Metadata#postcards)

在 [`.meta.yaml`](../../metadata/extra_metadata.md) 中填入以下内容 (记得[套文件夹](../../mod_structure.md#conflict))

```yaml
Postcard:
  Texture: {套文件夹}/postcardtexture  # 从 Graphics/Atlases/Gui/ 开始往下填到 postcard 图片名字
```