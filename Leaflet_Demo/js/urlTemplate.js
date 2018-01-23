 var urlTemplate = {
    //自定义中国灰色地图（ArcGIS Server切片服务，来自arcgisonline.cn）
    chinagray: "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
    //自定义中国彩色地图（ArcGIS Server切片服务，来自arcgisonline.cn）
    chinacolor: "http://cache1.arcgisonline.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
    //天地图矢量地图服务
    TianDiTuVec: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
    //天地图矢量标注服务
    TianDiTuVec_A: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
    //天地图卫星底图服务
    TianDiTuSat: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
    //天地图卫星影像标注
    TianDiTuSat_A: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",

    //高德矢量地图服务
    GaodeVec: "http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    //高德矢量地图服务
    GaodeVec_A: "http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"
}