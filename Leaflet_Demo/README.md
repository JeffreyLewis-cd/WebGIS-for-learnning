### 入门Leaflet之小Demo
---
> 写在前面 ---- WebGIS开发基础（以Leaflet为例）
> 1. GIS基本概念：GIS、Map、Layer、Feature、Geometry、Symbol、Data（Point、Polyline、Polygon）、Renderer、Scale、Project、Coordinates；
> 2. GIS开发概述：架构模式、常用平台和SDK、二维三维
> 3. 使用Leaflet开发常用功能
>   * 地图加载（底图类型、切换）：
>   * 地图操作（缩放、平移、定位/书签、动画）：
>   * 图层管理（加载、移除、调整顺序）：
>   * 要素标绘（点/聚簇、线、面，符号化/静态动态）：
>   * 属性标注（字段可选、样式定制）：
>   * 专题地图（点、线、面，渲染）：
>   * 查询定位（属性查询、空间查询/周边搜索/缓冲区/面查点线面/点线查面、图属互查、综合查询）：
>   * 信息窗口（入口、Popup、定制）：
>   * 坐标转换（）：
>   * 空间运算（长度面积测量、点取坐标、缓冲区、相交包含关系）：
>   * 动态监控（固定点状态切换、车辆监控）：
> 4. 技术交流：每个人举例说明自己了解或用过的GIS相关功能，或创意思路；提问交流。
<br><br> `每个功能，先简单介绍是做什么，然后用逻辑图把实现的逻辑讲清楚，再看代码（可以不在PPT里面，看IDE里就行），最后总结一下这个功能有哪些用途（你认为的）`
---
#### Demo用到的库
* Flat-UI [ Flat UI is based on Bootstrap, a comfortable, responsive, and functional framework that simplifies the development of websites.](https://github.com/designmodo/Flat-UI/)Flat-UI是基于Bootstrap的一个扁平化风格web开发框架。
* leaflet [an open-source JavaScript library
for mobile-friendly interactive maps.](http://leafletjs.com/reference-1.3.0.html)Leaflet 是一个为建设交互性好适用于移动设备地图，而开发的现代的、开源的 JavaScript 库。
* Esri Leaflet [A lightweight set of tools for using ArcGIS services with Leaflet.](http://esri.github.io/esri-leaflet/)一个轻量级的工具,基于leaflet利用ArcGIS服务。
---
### 地图加载（底图类型、切换） [Demo 1 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo1.html)
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
### 基于Demo 1 利用H5 Geolocation API 定位到当前位置 [Demo 1.1 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo1.1.html)
* 库引用  如上  Demo 1
* 判断浏览器是否支持
```
    let map;
    let Baselayer;
    // 使用H5 API定位 定位在当前位置
    if (navigator.geolocation) {
        console.log('/* 地理位置服务可用 */')
        navigator.geolocation.getCurrentPosition(h5ApiSuccess, h5ApiError);
    } else {
        console.log('/* 地理位置服务不可用 */')
        mapInit([30.374558, 104.09144]);//指定一个数据 定位在成都北纬N30°37′45.58″ 东经E104°09′1.44″
    }
```
* 定位成功或失败
```
    const h5ApiSuccess = (position) => {
        var latitude = position.coords.latitude; //纬度
        var longitude = position.coords.longitude; //经度
        console.log('你的经度纬度分别为' + longitude + ',' + latitude + '。')
        return mapInit([latitude, longitude]);
    };

    const h5ApiError = () => {
        console.log('/* 地理位置请求失败 */')
        mapInit([30.374558, 104.09144]);//指定一个数据 定位在成都北纬N30°37′45.58″ 东经E104°09′1.44″
    };
```
* 成功后初始化底图
```
    const mapInit = (LatLng) => {
        map = L.map("mapDiv", {
            crs: L.CRS.EPSG3857, //要使用的坐标参考系统，默认的坐标参考系
            // crs: L.CRS.EPSG4326, //国内的坐标参考系
            zoomControl: true,
            // minZoom: 1,
            attributionControl: true,
        }).setView(LatLng, 18);//定位在当前位置
        Baselayer = L.tileLayer(urlTemplate.mapbox_Image, {
            maxZoom: 17, //最大视图
            minZoom: 2, //最小视图
            attribution: 'liuvigongzuoshi@foxmail.com  &copy; <a href="https://github.com/liuvigongzuoshi/WebGIS-for-learnning/tree/master/Leaflet_Demo">WebGIS-for-learnning</a>'
        }).addTo(map);
        console.log(Baselayer)
    }

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
                minZoom: 1
            }).addTo(map);
            console.log(Baselayer)
        }
    }
    
```
> 更多了解geolocation对象，可参考[MDN Web 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation)
### 地图操作（缩放、平移、定位/书签、动画） [Demo 2 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo2.html)
* 库引用  如上  Demo 1

* 设置地图缩放到指定图层

```
// 设置一个定时器当作事件触发源
setTimeout(function () {
    map.setZoom(10, {
            animate: true
        })  //设置地图缩放到，默认就是开启动画
    }, 2000);
```
* 图层往里进一个图层，放大

```
// 设置一个定时器当作事件触发源
setTimeout(function () {
    map.zoomIn() //图层往里进一个图层，放大
    // map.zoomOut()  //图层往外出一个图层，缩小
    }, 2000);
```
* 地图平移至中心点

```
// 设置一个定时器当作事件触发源
setTimeout(function () {
    map.panTo([37.91082, 126.73583],{
       animate: true
    }) //地图平移，默认就是true，将地图平移到给定的中心。如果新的中心点在屏幕内与现有的中心点不同则产生平移动作。
    }, 2000);
```

* 地图飞到中心点

```
// 设置一个定时器当作事件触发源
setTimeout(function () {
    map.flyTo([37.91082, 128.73583]) // 点到点的抛物线动画，平移加缩放动画
    }, 2000);
```
> 注意：尽量避免setZoom()等地图缩放方法与flyTo、flyToBounds一起合用，因为这两类地图操作方法都有各自的缩放值，造成动画不流畅、不能定位到目的点。

* 地图飞到边界的合适的位置

```
setTimeout(function () {
   map.flyToBounds(polygon.getBounds());   //getBounds（获取边界）：返回地图视图的经纬度边界。
    //飞到这个多变形区域上面，自动判断区域块的大小，合适缩放图层，将地图视图尽可能大地设定在给定的地理边界内。
    }, 2000);
    
let polygon = L.polygon(
          [[37, -109.05], 
          [41, -109.03], 
          [41, -102.05], 
          [37, -102.04]],
     [40.774, -74.125], {
       color: 'green',
       fillColor: '#f03',
       fillOpacity: 0.5
    }).addTo(map);  //地图上绘制一个多形
```

* 地图定位到边界的合适的位置

```
setTimeout(function () {
   map.fitBounds(polygon.getBounds());  //getBounds（获取边界）：返回地图视图的经纬度边界。
  //平移到一个区域上面，自动判断区域块的大小，合适缩放图层
    }, 2000);
    
let polygon = L.polygon(
          [[37, -109.05], 
          [41, -109.03], 
          [41, -102.05], 
          [37, -102.04]],
     [40.774, -74.125], {
       color: 'green',
       fillColor: '#f03',
       fillOpacity: 0.5
    }).addTo(map);  //地图上绘制一个多边形
```

### 图层管理（加载、移除、调整顺序）： [Demo 3 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo3.html)
* 库引用
```
<link rel="stylesheet" type="text/css"  href="./lib/Flat-UI-master/dist/css/vendor/bootstrap/css/bootstrap.min.css"
    />
<link rel="stylesheet" href="./lib/Flat-UI-master/dist/css/flat-ui.min.css">
<link rel="stylesheet" href="./lib/leaflet/leaflet.css">
```
```
<script src="./lib/Flat-UI-master/dist/js/vendor/jquery.min.js"></script>
<script src="./lib/Flat-UI-master/dist/js/flat-ui.js"></script>
<script src="./lib/leaflet/leaflet.js"></script>
<script src="./lib/esri-leaflet-v2.1.2/dist/esri-leaflet.js"></script> <!-- esri-leafleat插件 -->
<script src="./js/urlTemplate.js"></script>
```
* 使用esri-leaflet插件加载ArcGIS底图服务
```
let oMap = null;
    let oLayer = [];

    oMap = L.map('mapDiv', {
        crs: L.CRS.EPSG4326,
        zoomControl: false,
        minZoom: 7,
        attributionControl: false
    }).setView([29.59, 106.59], 12); //定位在重庆
    
    oLayer.push(L.esri.tiledMapLayer({
        url: urlTemplate.SYS_CQMap_IMG_MAPSERVER_PATH,
        maxZoom: 17,
        minZoom: 0,
        useCors: false, //是否浏览器在跨域的情况下使用GET请求。
    }).addTo(oMap)); //加载第一个底图

    oLayer.push(L.esri.tiledMapLayer({
        url: urlTemplate.SYS_CQMap_IMG_LABEL_MAPSERVER_PATH,
        maxZoom: 17,
        minZoom: 0,
        useCors: false,
    }).addTo(oMap));  //加载第二个底图
```
* 切换底图(移除及加载)

```
const setLayer = (layerUrls, maxZoom) => {
        for (let i = 0; i < oLayer.length; i++) {
            oMap.removeLayer(oLayer[i]) //将图层在地图上移除
        }
        oLayer = [] //制空数组
        layerUrls.map((item) => {
            oLayer.push(L.esri.tiledMapLayer({
                url: item,
                useCors: false,
                maxZoom: maxZoom, // 设置最大放大图层值
            }).addTo(oMap));
        })
    }
```
>  不同的底图可能图层数不一样，就可能造成浏览器去请求不存在的图层，以及给用户展示出空白区域的不好体验，所以切换图层时候应注意设置最大及最小缩放值。

###  要素标绘（点、线、面，符号化/静态动态） [Demo 4 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo4.html)
* 库引用
```
 <link rel="stylesheet" href="./lib/leaflet/leaflet.css">
 ```
 ```
 <script src="./lib/leaflet/leaflet.js"></script>
 <script src="./js/urlTemplate.js"></script>
  ```
* 画一个圆
```
// 画一个circle
var circle = L.circle([36.52, 120.31], {
  color: 'green', //描边色
  fillColor: '#f03',  //填充色
  fillOpacity: 0.5, //透明度
  radius: 10000 //半径，单位米
}).addTo(map);
// 绑定一个提示标签
circle.bindTooltip('我是个圆');
```
* Maker及自定义Maker
```
// 做一个maker
const marker = L.marker([36.52, 120.31]).addTo(map);
// 绑定一个提示标签
marker.bindTooltip('这是个Marker', { direction: 'left' }).openTooltip();


//自定义一个maker
const greenIcon = L.icon({
  iconUrl: './icon/logo.png',
  iconSize: [300, 79], // size of the icon
  popupAnchor: [0, -10] // point from which the popup should open relative to the iconAnchor
});

const oMarker = L.marker([36.52, 124.31], { icon: greenIcon }).addTo(map);
// 绑定一个提示标签
oMarker.bindTooltip('这是个自定义Marker', { direction: 'left', offset: [-150, 0] });
```
* 画一根线
```
//画一根线
const polyline = L.polyline([[45.51, -122.68], [37.77, -122.43], [34.04, -118.2]], { color: 'red' }).addTo(map);
// 飞到这个线的位置
// map.fitBounds(polyline.getBounds());
```
* 画一个多边形
```
// 画一个polygon
var polygon = L.polygon([
  [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]], // outer ring
  [[37.29, -108.58], [40.71, -108.58], [40.71, -102.50], [37.29, -102.50]] // hole
], {
    color: 'green',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);
// 绑定一个提示标签
polygon.bindTooltip('this is 个多边形');
// 飞到这个多边形的位置
// map.fitBounds(polygon.getBounds());
```
 ###  信息窗口（入口、Popup、定制） [Demo 5 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo5.html)
* 库引用 如上  Demo 4
 * 画一个circle并绑定一个Popup
 ```
// 画一个circle
var circle = L.circle([36.92, 121.31], {
  color: 'green', //描边色
  fillColor: '#f03',  //填充色
  fillOpacity: 0.5, //透明度
  radius: 10000 //半径，单位米
}).addTo(map);

// 绑定一个弹窗
circle.bindPopup('我是个圆');
 ```
 * 定位一个marker，绑定一个自定义Popup
```
// 定位一个maker
var marker = L.marker([36.52, 120.31]).addTo(map);

//maker上自定义一个popup
var html = '<p>Hello world!<br />This is a nice popup.</p>';

var popup = marker.bindPopup(html, { maxHeight: 250, maxWidth: 490, className: 'content', offset: [0, 0] }).on('popupopen', function (params) {
  console.log(params)
});
```
* 实现动态改变Popup的内容
```
var mypop = L.popup();

map.on('click', function (e) {
  mypop.setLatLng(e.latlng)
    .setContent('你临幸了这个点：<br>' + e.latlng.toString())
    .openOn(map);
});
```
 ###  信息窗口（入口、Popup、定制） [Demo 6 ](https://github.com/liuvigongzuoshi/WebGIS-for-learnning/blob/master/Leaflet_Demo/demo5.html)
* 库引用 如上  Demo 4
### 写在后面 
#### 国内常用地图服务资源加载插件
> Leaflet.ChineseTmsProviders [Provider for Chinese Tms Service](https://github.com/htoooth/Leaflet.ChineseTmsProviders)

* Leaflet调用各种地图的功能十分复杂，幸好有leaflet.ChineseTmsProviders这个插件，这四种地图直接就可以加载进来，十分方便。

* 使用方法可点击上面链接去GitHub看使用说明，或可参考[这篇文章](http://blog.csdn.net/GISuuser/article/details/77600052)。

#### 模块化开发的加载包注意的问题
* 引 leaflet 包的时候不要忘记引用包里的css `import 'leaflet/dist/leaflet.css';`
