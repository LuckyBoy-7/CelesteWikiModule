整合/摘抄

* [官图元数据 by Everest Wiki](https://github.com/EverestAPI/Resources/wiki/Vanilla-Metadata)


由于官图的元数据是硬编码的, 所以你会发现如果直接把官图地图粘出来改不少地方都跟原来的效果对不上, 
所以你可以将下面这些数据填入 [`.meta.yaml`](./extra_metadata.md) 里来达到和官图一样的效果 
(~~虽然官图里还是有一大堆其他硬编码的东西啦~~)

这里需要注意一件事, `.meta.yaml` 也是 A/B/C 面共享的, 所以如果你需要单独配置, 
请在 Loenn 里勾选 [`Override A-Side Meta`](./loenn_metadata.md#general),
或是通过 `Modes` 分别为 A/B/C 面配置, 其他部分共用, 例如

```yaml
Modes:
  - Inventory: Default # A side
    HeartIsEnd: false
  - Inventory: TheSummit # B side
    HeartIsEnd: true
  - Inventory: Farewell # C side
    HeartIsEnd: true
```

## Prologue 序章

```yaml
Icon: areas/intro
Interlude: true
TitleBaseColor: 383838
TitleAccentColor: 50afae
TitleTextColor: ffffff
IntroType: WalkInRight
Dreaming: false
ColorGrade: none
Wipe: Celeste.CurtainWipe
DarknessAlpha: 0.05
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
Modes:
  - AudioState:
      Music: event:/music/lvl0/intro
      Ambience: event:/env/amb/00_prologue
    Inventory: Prologue
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -1.374, 1.224, 7.971 ]
    Target: [ -0.440, 0.499, 6.358 ]
  Select:
    Position: [ -1.390, 0.784, 7.593 ]
    Target: [ -0.052, 0.545, 6.125 ]
  Zoom:
    Position: [ -1.104, 0.661, 7.292 ]
    Target: [ -0.324, 0.565, 5.452 ]
  Cursor: [ -0.880595, 0.8781773, 6.77277 ]
  State: 0
LoadingVignetteText:
  Dialog: "CH0_INTRO"
```

## Forsaken City 被遗弃的城市

```yaml
Icon: areas/city
Interlude: false
# CassetteCheckpointIndex: 2 # specific to the map, automatically determined by Everest
TitleBaseColor: 6c7c81
TitleAccentColor: 2f344b
TitleTextColor: ffffff
IntroType: Jump
Dreaming: false
ColorGrade: none
Wipe: Celeste.AngledWipe
DarknessAlpha: 0.05
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
CassetteNoteColor: 33a9ee
CassetteSong: event:/music/cassette/01_forsaken_city
Modes:
  - AudioState:
      Music: event:/music/lvl1/main
      Ambience: event:/env/amb/01_main
    Inventory: Default
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/01_forsaken_city
      Ambience: event:/env/amb/01_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/01_forsaken_city
      Ambience: event:/env/amb/01_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -0.952, 4.218, 9.744 ]
    Target: [ -0.111, 3.393, 8.127 ]
  Select:
    Position: [ -0.052, 1.659, 9.902 ]
    Target: [ 1.110, 1.526, 8.280 ]
  Zoom:
    Position: [ 1.437, 1.896, 7.061 ]
    Target: [ 1.376, 0.881, 5.338 ]
  Cursor: [ 1.319535, 2.07172, 5.113717 ]
  State: 0
CompleteScreen:
  Atlas: "ForsakenCity"
  Scale: 2
  Start: [ -10.0, 2000.0 ]
  Center: [ -10.0, 1200.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "01" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.03 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.05 ]
      Scale: 2
    - Type: "layer"
      Images: [ "snow-back" ]
      Position: [ -920.0, -720.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.07 ]
      Scale: 2
    - Type: "ui"
      Scroll: [ 0.62 ]
    - Type: "layer"
      Images: [ "07" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "08a" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "08b" ]
      Position: [ -800.0, -700.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "09" ]
      Position: [ -920.0, -720.0 ]
      Scroll: [ 0.10 ]
    - Type: "layer"
      Images: [ "10" ]
      Position: [ -920.0, -720.0 ]
      Scroll: [ 0.10 ]
    - Type: "layer"
      Images: [ "snow-front" ]
      Position: [ -920.0, -720.0 ]
      Scroll: [ 0.12 ]
      Scale: 2
    - Type: "layer"
      Images: [ "11" ]
      Position: [ -800.0, -520.0 ]
      Scroll: [ 0.14 ]
      Scale: 2
```

## Old Site 旧址

```yaml
Icon: areas/oldsite
Interlude: false
# CassetteCheckpointIndex: 0 # specific to the map, automatically determined by Everest
TitleBaseColor: 247f35
TitleAccentColor: e4ef69
TitleTextColor: ffffff
IntroType: WakeUp
Dreaming: true
ColorGrade: oldsite
Wipe: Celeste.DreamWipe
DarknessAlpha: 0.15
BloomBase: 0.5
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
CassetteNoteColor: 33eea2
CassetteSong: event:/music/cassette/02_old_site
Modes:
  - AudioState:
      Music: event:/music/lvl2/beginning
      Ambience: event:/env/amb/02_dream
    Inventory: OldSite
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/02_old_site
      Ambience: event:/env/amb/02_dream
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/02_old_site
      Ambience: event:/env/amb/02_dream
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -3.399, 5.614, 3.870 ]
    Target: [ -2.240, 4.436, 2.743 ]
  Select:
    Position: [ -3.890, 3.903, 3.702 ]
    Target: [ -2.037, 3.815, 2.955 ]
  Zoom:
    Position: [ -3.247, 4.407, 3.251 ]
    Target: [ -1.937, 3.720, 1.904 ]
  Cursor: [ -2.407315, 4.364232, 2.323102 ]
  State: 0
CompleteScreen:
  Atlas: "OldSite"
  Start: [ 0.0, 1050.0 ]
  Center: [ 0.0, 250.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -108.0, -20.0 ]
      Scroll: [ 0.11 ]
    - Type: "layer"
      Images: [ "07" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.12 ]
      Scale: 2
    - Type: "ui"
      ScrollX: [ 0.2 ]
    - Type: "layer"
      Images: [ "08" ]
      Position: [ -108.0, -680.0 ]
      Scroll: [ 0.13 ]
    - Type: "layer"
      Images: [ "09" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.13 ]
      Scale: 2
    - Type: "layer"
      Images: [ "10" ]
      Position: [ -108.0, -680.0 ]
      Scroll: [ 0.15 ]
      Scale: 2
```

## Celestial Resort 天空度假山庄

```yaml
Icon: areas/resort
Interlude: false
# CassetteCheckpointIndex: 2 # specific to the map, automatically determined by Everest
TitleBaseColor: b93c27
TitleAccentColor: ffdd42
TitleTextColor: ffffff
IntroType: WalkInRight
Dreaming: false
ColorGrade: none
Wipe: Celeste.KeyDoorWipe
DarknessAlpha: 0.15
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
CassetteNoteColor: eed933
CassetteSong: event:/music/cassette/03_resort
Modes:
  - AudioState:
      Music: event:/music/lvl3/intro
      Ambience: event:/env/amb/03_exterior
    Inventory: Default
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/03_resort
      Ambience: event:/env/amb/03_exterior
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/03_resort
      Ambience: event:/env/amb/03_exterior
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ 5.961, 8.823, 5.058 ]
    Target: [ 5.061, 7.757, 3.626 ]
  Select:
    Position: [ 4.294, 6.633, 5.193 ]
    Target: [ 5.027, 6.828, 3.343 ]
  Zoom:
    Position: [ 5.200, 6.650, 2.595 ]
    Target: [ 5.007, 6.391, 0.621 ]
  Cursor: [ 4.993515, 6.881229, 1.536384 ]
  State: 1
CompleteScreen:
  Atlas: "CelestialResort"
  Start: [ 0.0, 1050.0 ]
  Center: [ 0.0, 250.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "00b" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.04 ]
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04a" ]
      Position: [ -68.0, -64.0 ]
      Scroll: [ 0.08 ]
    - Type: "layer"
      Images: [ "04b" ]
      Position: [ -68.0, -64.0 ]
      Scroll: [ 0.08 ]
    - Type: "layer"
      Images: [ "05a" ]
      Position: [ -78.0, 0.0 ]
      Scroll: [ 0.09 ]
    - Type: "layer"
      Images: [ "05b" ]
      Position: [ -78.0, 0.0 ]
      Scroll: [ 0.09 ]
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "ui"
      ScrollX: [ 0.2 ]
```

## Golden Ridge 黄金山脊

```yaml
Icon: areas/cliffside
Interlude: false
# CassetteCheckpointIndex: 0 # specific to the map, automatically determined by Everest
TitleBaseColor: ff7f83
TitleAccentColor: 6d54b7
TitleTextColor: ffffff
IntroType: WalkInRight
Dreaming: false
ColorGrade: none
Wipe: Celeste.WindWipe
DarknessAlpha: 0.1
BloomBase: 0.25
BloomStrength: 1.0
Jumpthru: cliffside # not necessary for custom maps
CassetteNoteColor: eb4bd9
CassetteSong: event:/music/cassette/04_cliffside
Modes:
  - AudioState:
      Music: event:/music/lvl4/main
      Ambience: event:/env/amb/04_main
    Inventory: Default
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/04_cliffside
      Ambience: event:/env/amb/04_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/04_cliffside
      Ambience: event:/env/amb/04_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ 9.626, 8.824, -4.140 ]
    Target: [ 7.924, 8.240, -3.267 ]
  Select:
    Position: [ 8.429, 5.837, -5.086 ]
    Target: [ 6.662, 6.019, -4.167 ]
  Zoom:
    Position: [ 7.036, 5.347, -3.231 ]
    Target: [ 5.522, 5.584, -1.946 ]
  Cursor: [ 4.481695, 6.766555, -2.226157 ]
  State: 2
CompleteScreen:
  Atlas: "Cliffside"
  Start: [ 200.0, 1050.0 ]
  Center: [ 200.0, 250.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01" ]
      Position: [ 0.0, -50.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ 0.0, -40.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ 0.0, -30.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "08" ]
      Position: [ 0.0, 0.0 ]
      Scroll: [ 0.14 ]
      Scale: 2
    - Type: "ui"
      ScrollX: [ 0.2 ]
```

## Mirror Temple 镜之寺庙

```yaml
Icon: areas/temple
Interlude: false
# CassetteCheckpointIndex: 1 # specific to the map, automatically determined by Everest
TitleBaseColor: 8314bc
TitleAccentColor: df72f9
TitleTextColor: ffffff
IntroType: WakeUp
Dreaming: false
ColorGrade: none
Wipe: Celeste.DropWipe
DarknessAlpha: 0.15
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: temple # not necessary for custom maps
CassetteNoteColor: 5a56e6
CassetteSong: event:/music/cassette/05_mirror_temple
Modes:
  - AudioState:
      Music: event:/music/lvl5/normal
      Ambience: event:/env/amb/05_interior_main
    Inventory: Default
    SeekerSlowdown: true
  - AudioState: # B side
      Music: event:/music/remix/05_mirror_temple
      Ambience: event:/env/amb/05_interior_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: true
  - AudioState: # C side
      Music: event:/music/remix/05_mirror_temple
      Ambience: event:/env/amb/05_interior_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: true
Mountain:
  Idle:
    Position: [ -0.963, 10.542, -5.314 ]
    Target: [ -0.178, 9.588, -3.741 ]
  Select:
    Position: [ 1.786, 8.760, -5.080 ]
    Target: [ 0.494, 8.810, -3.554 ]
  Zoom:
    Position: [ -0.205, 9.318, -4.217 ]
    Target: [ -0.729, 9.108, -2.298 ]
  Cursor: [ 0.2264417, 9.015848, -2.010033 ]
  State: 2
CompleteScreen:
  Atlas: "MirrorTemple"
  Start: [ 0.0, 1050.0 ]
  Center: [ 0.0, 250.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.01 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -108.0, -100.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.022 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.03 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05a" ]
      Position: [ -108.0, 30.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05b" ]
      Position: [ -108.0, 30.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05c" ]
      Position: [ -108.0, 30.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06a" ]
      Position: [ -108.0, -50.0 ]
      Scroll: [ 0.05 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06b" ]
      Position: [ -108.0, -50.0 ]
      Scroll: [ 0.05 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06c" ]
      Position: [ -108.0, -50.0 ]
      Scroll: [ 0.05 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07a" ]
      Position: [ -108.0, -100.0 ]
      Scroll: [ 0.03 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07b" ]
      Position: [ -108.0, -100.0 ]
      Scroll: [ 0.03 ]
      Scale: 2
    - Type: "layer"
      Images: [ "08" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.05 ]
      Scale: 2
    - Type: "layer"
      Images: [ "09a" ]
      Position: [ -108.0, -15.0 ]
      Scroll: [ 0.07 ]
    - Type: "layer"
      Images: [ "09b" ]
      Position: [ -108.0, -15.0 ]
      Scroll: [ 0.07 ]
    - Type: "ui"
      ScrollX: [ 0.2 ]
    - Type: "layer"
      Images: [ "10" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.12 ]
      Scale: 2
```

## Reflection 沉思

```yaml
Icon: areas/reflection
Interlude: false
# CassetteCheckpointIndex: 2 # specific to the map, automatically determined by Everest
TitleBaseColor: 359fe0
TitleAccentColor: 3c5cbc
TitleTextColor: ffffff
IntroType: None
Dreaming: false
ColorGrade: reflection
Wipe: Celeste.FallWipe
DarknessAlpha: 0.2
BloomBase: 0.2
BloomStrength: 1.0
Jumpthru: reflection # not necessary for custom maps
CassetteNoteColor: 56e6dd
CassetteSong: event:/music/cassette/06_reflection
Modes:
  - AudioState:
      Music: event:/music/lvl6/main
      Ambience: event:/env/amb/06_main
    Inventory: Default
    SeekerSlowdown: false
  - AudioState:
      Music: event:/music/remix/06_reflection
      Ambience: event:/env/amb/06_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState:
      Music: event:/music/remix/06_reflection
      Ambience: event:/env/amb/06_main
    Inventory: Default
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ 1.113, 12.154, 6.334 ]
    Target: [ -0.086, 11.118, 5.115 ]
  Select:
    Position: [ 1.113, 12.154, 6.334 ]
    Target: [ 0.945, 11.175, 4.599 ]
  Zoom:
    Position: [ -0.165, 9.961, 2.608 ]
    Target: [ -0.726, 8.975, 0.961 ]
  Cursor: [ -1.464781, 9.340404, 0.830584 ]
  State: 0
CompleteScreen:
  Atlas: "TheFall"
  Start: [ 0.0, 1050.0 ]
  Center: [ 0.0, 250.0 ]
  Title:
    ASide: 'AREACOMPLETE_NORMAL'
    BSide: 'AREACOMPLETE_BSIDE'
    CSide: 'AREACOMPLETE_CSIDE'
    FullClear: 'AREACOMPLETE_NORMAL_FULLCLEAR'
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01" ]
      Position: [ -110.0, 0.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -110.0, 0.0 ]
      Scroll: [ 0.04 ]
      Scale: 2
    - Type: "layer"
      Images: [ "03a" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.05 ]
    - Type: "layer"
      Images: [ "03b" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.05 ]
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a0", "05a1", "05a2", "05a3", "05a3", "05a3", "05a3", "05a3", "05a3", "05a3", "05a3", "05a3", "05a2", "05a1" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.14 ]
    - Type: "layer"
      Images: [ "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b0", "05b1", "05b2", "05b3", "05b4", "05b4", "05b4", "05b4", "05b4", "05b4", "05b4", "05b3", "05b2", "05b1" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.14 ]
    - Type: "layer"
      Images: [ "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c0", "05c1", "05c2", "05c2", "05c2", "05c2", "05c2", "05c2", "05c2", "05c2", "05c2", "05c2", "05c1" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d0", "05d1", "05d2", "05d3", "05d4", "05d4", "05d4", "05d4", "05d4", "05d4", "05d4", "05d3", "05d2", "05d1" ]
      Position: [ -100.0, 0.0 ]
      Scroll: [ 0.14 ]
    - Type: "ui"
      ScrollX: [ 0.2 ]
```

<a id="summit"></a>

## The Summit 山顶

```yaml
Icon: areas/Summit
Interlude: false
# CassetteCheckpointIndex: 3 # specific to the map, automatically determined by Everest
TitleBaseColor: ffd819
TitleAccentColor: 197db7
TitleTextColor: 000000
IntroType: None
Dreaming: false
ColorGrade: none
Wipe: Celeste.MountainWipe
DarknessAlpha: 0.05
BloomBase: 0.2
BloomStrength: 1.0
Jumpthru: temple # not necessary for custom maps
CassetteNoteColor: e69156
CassetteSong: event:/music/cassette/07_summit
Modes:
  - AudioState:
      Music: event:/music/lvl7/main
      Ambience:
    Inventory: TheSummit
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/07_summit
      Ambience:
    Inventory: TheSummit
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/07_summit
      Ambience:
    Inventory: TheSummit
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -14.620, 3.606, 19.135 ]
    Target: [ -13.134, 4.115, 17.897 ]
  Select:
    Position: [ -13.453, 5.141, 18.179 ]
    Target: [ -11.907, 5.751, 17.067 ]
  Zoom:
    Position: [ -9.156, 6.872, 12.432 ]
    Target: [ -8.014, 7.516, 10.922 ]
  Cursor: [ -0.2239623, 14.5, -0.6094461 ]
  State: 1
  ShowCore: false
LoadingVignetteScreen: # note: unlike vanilla, the vignette will play for the B and C side as well as the A side
  Atlas: "SummitIntro"
  Start: [ 0.0, 1500.0 ]
  Center: [ 0.0, -4000.0 ]
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01a" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01b" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02a" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.04 ]
    - Type: "layer"
      Images: [ "02b" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.04 ]
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -168.0, -180.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07a" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07b" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.09 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.14 ]
      Scale: 2
    - Type: "layer"
      Images: [ "08" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "09a" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "09b" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.10 ]
      Scale: 2
    - Type: "layer"
      Images: [ "10" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "11" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "12a" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.13 ]
      Scale: 2
    - Type: "layer"
      Images: [ "12b" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.13 ]
      Scale: 2
    - Type: "layer"
      Images: [ "13" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.14 ]
      Scale: 2
CompleteScreen:
  MusicBySide:
    - event:/music/menu/complete_summit
    - event:/music/menu/complete_bside
    - event:/music/menu/complete_bside
  Atlas: "SummitEnd"
  Start: [ 0.0, 0.0 ]
  Center: [ 0.0, -800.0 ]
  Layers:
    - Type: "layer"
      Images: [ "00" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "01a", "01b", "01c", "", "01c", "01b", "01a", "01a", "01a", "01a", "01a", "01a", "01a", "01a", "01a" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.01 ]
    - Type: "layer"
      Images: [ "02a", "02a", "02a", "02a", "02a", "02a", "02a", "02b", "02c", "", "", "", "", "02c", "02b", "02a", "02a" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.01 ]
    - Type: "layer"
      Images: [ "", "", "", "", "", "03c", "03b", "03a", "03a", "03a", "03b", "03c" ]
      Position: [ -108.0, 0.0 ]
      Scroll: [ 0.01 ]
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -148.0, -160.0 ]
      Scroll: [ 0.02 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.04 ]
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -108.0, -160.0 ]
      Scroll: [ 0.08 ]
      Alpha: 0.8
      Scale: 2
    - Type: "layer"
      Images: [ "07a", "07b", "07c", "07b", "07d", "07c" ]
      Position: [ -108.0, -78.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "08" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "09a", "09b", "09c", "09d", "09e", "09f", "09g", "09h" ]
      Position: [ -108.0, -80.0 ]
      Scroll: [ 0.12 ]
    - Type: "layer"
      Images: [ "10" ]
      Position: [ -78.0, -90.0 ]
      Scroll: [ 0.14 ]
    - Type: "layer"
      Images: [ "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11b", "11c", "11b", "11c", "11b", "11a" ]
      Position: [ -68.0, -70.0 ]
      Scroll: [ 0.14 ]
    - Type: "layer"
      Images: [ "12" ]
      Position: [ -108.0, -200.0 ]
      Scroll: [ 0.18 ]
      Speed: [ -50.0, 0.0 ]
      Alpha: 0.7
      Scale: 2
```

## Epilogue 尾声

```yaml
Icon: areas/intro
Interlude: true
TitleBaseColor: 383838
TitleAccentColor: 50afae
TitleTextColor: ffffff
IntroType: WalkInLeft
Dreaming: false
ColorGrade: none
Wipe: Celeste.CurtainWipe
DarknessAlpha: 0.05
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
Modes:
  - AudioState:
      Music: event:/music/lvl8/main
      Ambience: event:/env/amb/00_prologue
    Inventory: TheSummit
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -1.234, 0.677, 7.598 ]
    Target: [ -0.221, 0.734, 5.875 ]
  Select:
    Position: [ -1.234, 0.677, 7.598 ]
    Target: [ 0.010, 0.694, 6.032 ]
  Zoom:
    Position: [ -1.104, 0.661, 7.292 ]
    Target: [ -0.324, 0.565, 5.452 ]
  Cursor: [ -0.880595, 0.8781773, 6.77277 ]
  State: 0
  ShowCore: false
```

## Core 核心

```yaml
Icon: areas/core
Interlude: false
# CassetteCheckpointIndex: 3 # specific to the map, automatically determined by Everest
TitleBaseColor: 761008
TitleAccentColor: e0201d
TitleTextColor: ffffff
IntroType: WalkInRight
Dreaming: false
ColorGrade: none
Wipe: Celeste.HeartWipe
DarknessAlpha: 0.05
BloomBase: 0.0
BloomStrength: 1.0
Jumpthru: core # not necessary for custom maps
CoreMode: Hot
CassetteNoteColor: e6566a
CassetteSong: event:/music/cassette/09_core
Modes:
  - AudioState:
      Music: event:/music/lvl9/main
      Ambience: event:/env/amb/09_main
    IgnoreLevelAudioLayerData: true
    Inventory: Core
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # B side
      Music: event:/music/remix/09_core
      Ambience: event:/env/amb/09_main
    Inventory: Core
    HeartIsEnd: true
    SeekerSlowdown: false
  - AudioState: # C side
      Music: event:/music/remix/09_core
      Ambience: event:/env/amb/09_main
    Inventory: Core
    HeartIsEnd: true
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ -4.473, 7.158, 5.463 ]
    Target: [ -3.630, 6.660, 3.719 ]
  Select:
    Position: [ -3.404, 6.677, 3.846 ]
    Target: [ -2.093, 6.202, 2.413 ]
  Zoom:
    Position: [ -3.546, 5.962, 0.270 ]
    Target: [ -1.596, 5.598, 0.017 ]
  Cursor: [ -2.392866, 6.412613, 1.44175 ]
  State: 2
  ShowCore: true
LoadingVignetteText: # the vignette plays the audio from the prologue intro
  Dialog: "APP_INTRO"
CompleteScreen:
  Atlas: "Core"
  Start: [ 0.0, 200.0 ]
  Center: [ 0.0, 0.0 ]
  Layers:
    - Type: "layer"
      Images: [ "01" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.0 ]
      Scale: 2
    - Type: "layer"
      Images: [ "02" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.02 ]
    - Type: "layer"
      Images: [ "03" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.06 ]
      Scale: 2
    - Type: "layer"
      Images: [ "04" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.08 ]
      Scale: 2
    - Type: "layer"
      Images: [ "05" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.10 ]
    - Type: "layer"
      Images: [ "06" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.12 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07a" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.16 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07b" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.16 ]
      Scale: 2
    - Type: "layer"
      Images: [ "07c" ]
      Position: [ -108.0, -110.0 ]
      Scroll: [ 0.16 ]
      Scale: 2
```

## Farewell 再见

```yaml
Icon: areas/farewell
Interlude: false
TitleBaseColor: 240d7c
TitleAccentColor: ff6aa9
TitleTextColor: ffffff
IntroType: ThinkForABit
Dreaming: false
ColorGrade: none
Wipe: Celeste.StarfieldWipe
DarknessAlpha: 0.05
BloomBase: 0.5
BloomStrength: 1.0
Jumpthru: wood # not necessary for custom maps
CassetteNoteColor: e6566a
CassetteSong:
Modes:
  - AudioState:
      Music: event:/new_content/music/lvl10/part01 # the progress of the track should be set to 1, e.g. via room config
      Ambience: event:/env/amb/00_prologue
    Inventory: Farewell
    SeekerSlowdown: false
Mountain:
  Idle:
    Position: [ 6.4, 33.050, 7.4 ]
    Target: [ 0, 32.5, 0 ]
  Select:
    Position: [ 5.881, 31.525, 2.871 ]
    Target: [ 4.393, 31.481, 1.534 ]
  Zoom:
    Position: [ 2, 31, 1 ]
    Target: [ 0, 31, 0 ]
  Cursor: [ 0, 33.3, 0 ]
  # Available: 0, 1, 2
  State: 3
  Rotate: true
  ShowCore: false
  BackgroundMusicParams:
    moon: 1
```