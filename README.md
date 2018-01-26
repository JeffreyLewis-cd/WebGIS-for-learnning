### 入门Leaflet之小Demo
---
> 写在前面 ---- WebGIS开发基础（以Leaflet为例）
> 1. GIS基本概念：GIS、Map、Layer、Feature、Geometry、Symbol、Data（Point、Polyline、Polygon）、Renderer、Scale、Project、Coordinates；
> 2. GIS开发概述：架构模式、常用平台和SDK、二维三维
> 3. 使用Leaflet开发常用功能
>   * 地图加载（底图类型、切换）：
>   * 地图操作（缩放、平移、全图、定位/书签、动画）：
>   * 图层管理（加载、移除、调整顺序）：
>   *  要素标绘（点/聚簇、线、面，符号化/静态动态）：
>   *  属性标注（字段可选、样式定制）：
>   * 专题地图（点、线、面，渲染）：
>   *  查询定位（属性查询、空间查询/周边搜索/缓冲区/面查点线面/点线查面、图属互查、综合查询）：
>   *  信息窗口（入口、Popup、定制）：
>   *  坐标转换（）：
>   *  空间运算（长度面积测量、点取坐标、缓冲区、相交包含关系）：
>   *  动态监控（固定点状态切换、车辆监控）：
> 4. 技术交流：每个人举例说明自己了解或用过的GIS相关功能，或创意思路；提问交流。
<br><br> `每个功能，先简单介绍是做什么，然后用逻辑图把实现的逻辑讲清楚，再看代码（可以不在PPT里面，看IDE里就行），最后总结一下这个功能有哪些用途（你认为的）`
---
#### Demo用到的库
* Flat-UI [ Flat UI is based on Bootstrap, a comfortable, responsive, and functional framework that simplifies the development of websites.](https://github.com/designmodo/Flat-UI/)Flat-UI是基于Bootstrap的一个扁平化风格web开发框架。
* leaflet [an open-source JavaScript library
for mobile-friendly interactive maps.](http://leafletjs.com/reference-1.3.0.html)Leaflet 是一个为建设交互性好适用于移动设备地图，而开发的现代的、开源的 JavaScript 库。
* Esri Leaflet [A lightweight set of tools for using ArcGIS services with Leaflet.](http://esri.github.io/esri-leaflet/)一个轻量级的工具,基于leaflet利用ArcGIS服务。
---
### 地图加载（底图类型、切换） [Demo 1 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/tree/master/Leaflet_Demo)
* 库引用
```
<link rel="stylesheet" type="text/css" href="./lib/Flat-UI-master/dist/css/vendor/bootstrap/css/bootstrap.min.css"
    /> 
<link rel="stylesheet" href="./lib/Flat-UI-master/dist/css/flat-ui.min.css">
<link rel="stylesheet" href="./lib/leaflet/leaflet.css">
```
```
<script src="./lib/Flat-UI-master/dist/js/vendor/jquery.min.js"></script>
<script src="./lib/Flat-UI-master/dist/js/flat-ui.js"></script>
<script src="./lib/leaflet/leaflet.js"></script>
<script src="./js/urlTemplate.js"></script>
```
* 地图加载与切换
```
const map = L.map("mapDiv", {
        crs: L.CRS.EPSG3857, //要使用的坐标参考系统，默认的坐标参考系
        // crs: L.CRS.EPSG4326, //国内的坐标参考系
        zoomControl: true,
        // minZoom: 1,
        attributionControl: true,
    }).setView([30.6268660000, 104.1528940000], 18);//定位在成都北纬N30°37′45.58″ 东经E104°09′1.44″
    let Baselayer = L.tileLayer(urlTemplate.mapbox_Image, {
       maxZoom: 17, //最大视图
        minZoom: 2, //最小视图
        attribution: 'liuvigongzuoshi@foxmail.com  &copy; <a href="https://github.com/liuvigongzuoshi/WebGIS-for-learnning/tree/master/Leaflet_Demo">WebGIS-for-learnning</a>'
    }).addTo(map);

const setLayer = (ele) => {
    map.removeLayer(Baselayer)
    if (ele == "mapbox_Image") {
        Baselayer = L.tileLayer(urlTemplate.mapbox_Image, {
            maxZoom: 17,
            minZoom: 2
        }).addTo(map);
    } else if (ele == "mapbox_Vector") {
        Baselayer = L.tileLayer(urlTemplate.mapbox_Vector, {
            maxZoom: 17,
            // minZoom: 2
        }).addTo(map);
        console.log(Baselayer)
    }
}
```

### 地图加载（底图类型、切换） [Demo 2 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/tree/master/Leaflet_Demo)
* 库引用
```
<link rel="stylesheet" type="text/css" href="./lib/Flat-UI-master/dist/css/vendor/bootstrap/css/bootstrap.min.css"
    /> 
<link rel="stylesheet" href="./lib/Flat-UI-master/dist/css/flat-ui.min.css">
<link rel="stylesheet" href="./lib/leaflet/leaflet.css">
```
```
<script src="./lib/Flat-UI-master/dist/js/vendor/jquery.min.js"></script>
<script src="./lib/Flat-UI-master/dist/js/flat-ui.js"></script>
<script src="./lib/leaflet/leaflet.js"></script>
<script src="./js/urlTemplate.js"></script>
```
* 地图加载与切换

### 写在后面 
#### 国内常用地图服务资源加载插件
> Leaflet.ChineseTmsProviders [Provider for Chinese Tms Service](https://github.com/htoooth/Leaflet.ChineseTmsProviders)

* Leaflet调用各种地图的功能十分复杂，幸好有leaflet.ChineseTmsProviders这个插件，这四种地图直接就可以加载进来，十分方便。

* 使用方法可点击上面链接去GitHub看使用说明，或可参考[这篇文章](http://blog.csdn.net/GISuuser/article/details/77600052)。

#### 模块化开发的加载包注意的问题
