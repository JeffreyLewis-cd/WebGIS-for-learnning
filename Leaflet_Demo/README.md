### WebGIS-for-learnning
---
> GIS开发基础（以Leaflet为例）
> 1. GIS基本概念（黄东）：GIS、Map、Layer、Feature、Geometry、Symbol、Data（Point、Polyline、Polygon）、Renderer、Scale、Project、Coordinates；
> 2. GIS开发概述（黄东）：架构模式、常用平台和SDK、二维三维
> 3. 使用Leaflet开发常用功能（刘朋辉）
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
* Flat-UI [ Flat UI is based on Bootstrap, a comfortable, responsive, and functional framework that simplifies the development of websites.](https://github.com/designmodo/Flat-UI/)Flat-UI是基于Bootstrap的一个扁平化风格web开发框架
* leaflet [an open-source JavaScript library
for mobile-friendly interactive maps.](http://leafletjs.com/reference-1.3.0.html)Leaflet 是一个为建设交互性好适用于移动设备地图，而开发的现代的、开源的 JavaScript 库
* Esri Leaflet [A lightweight set of tools for using ArcGIS services with Leaflet.](http://esri.github.io/esri-leaflet/)一个轻量级的工具,基于leaflet利用ArcGIS服务