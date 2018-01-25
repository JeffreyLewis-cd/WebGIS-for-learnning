 const urlTemplate = {
     mapbox_Image: "https://api.mapbox.com/styles/v1/yqcim/cizh1ma3400ez2so5x1anhuzo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoieXFjaW0iLCJhIjoiY2l6ZmhnZjExMDBhajJ4cGxnNGN5MnhpdCJ9.pcZtdfk8mSFboCdwqkvW6g",
     mapbox_Vector: "https://api.mapbox.com/styles/v1/liuvigongzuoshi/cjbf0ypqz8wp62ro6iayiivzy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGl1dmlnb25nenVvc2hpIiwiYSI6ImNqYmYwd24wczJyd24yeGxsMWE5bGpxaGkifQ.CVKELjW5ASK8EnQfQCbxFw",
    SYS_MAPSERVER_PATH: "http://www.digitalcq.com/RemoteRest/services/CQMap_IMG/MapServer",
     // 影像地图
    SYS_CQMap_IMG_MAPSERVER_PATH: "http://www.digitalcq.com/RemoteRest/services/CQMap_IMG/MapServer",
     // 影像注记
    SYS_CQMap_IMG_LABEL_MAPSERVER_PATH: "http://www.digitalcq.com/RemoteRest/services/CQMap_IMG_LABEL/MapServer",
     // 矢量地图
    SYS_CQMap_VEC_MAPSERVER_PATH: "http://www.digitalcq.com/RemoteRest/services/CQMap_VEC/MapServer",
     // 地形地图
    SYS_CQMap_DEM_MAPSERVER_PATH: "http://www.digitalcq.com/RemoteRest/services/CQMap_DEM/MapServer",
    //自定义中国灰色地图（ArcGIS Server切片服务，来自arcgisonline.cn）
     chinagray: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity_Mobile/MapServer",
    //自定义中国彩色地图（ArcGIS Server切片服务，来自arcgisonline.cn）
     chinacolor: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer",
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