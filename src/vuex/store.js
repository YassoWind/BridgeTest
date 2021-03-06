import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
var state = {
    json:{
        inspection:[{
            "name":"巡检养护",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.43944463882328, 30.470264139949915, 10.481022566966065]
                    },
                    "properties": {
                        "name": "6198",
                        "url": "http://bhm.bsri.com.cn:200/RoutineIns/diseasedeal.aspx?KeyId=6198",
                        "type": "XJYH"
        
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.44006247134615, 30.47039528103592, 8.565323131867394]
                    },
                    "properties": {
                        "name": "6197",
                        "url": "http://bhm.bsri.com.cn:200/RoutineIns/diseasedeal.aspx?KeyId=6197",
                        "type": "XJYH"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22145651521133, 30.499845659422846, 8.868352947811917]
                    },
                    "properties": {
                        "name": "6187",
                        "url": "http://bhm.bsri.com.cn:200/RoutineIns/diseasedeal.aspx?KeyId=6187",
                        "type": "XJYH"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22451217447704, 30.497696357905582, 6.868352947811917]
                    },
                    "properties": {
                        "name": "6177",
                        "url": "http://bhm.bsri.com.cn:200/RoutineIns/diseasedeal.aspx?KeyId=6177",
                        "type": "XJYH"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.44125107679947, 30.47032050635116, 10.530668980557381]
                    },
                    "properties": {
                        "name": "6174",
                        "url": "http://bhm.bsri.com.cn:200/RoutineIns/diseasedeal.aspx?KeyId=6174",
                        "type": "XJYH"
                    }
                }
            ]
        }],
        bridge:[{
            "name":"桥梁亮化",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.31835, 30.60608, 0]
                    },
                    "properties": {
                        "name": "长江二桥夜景",
                        "url": "http://www.720yuntu.com/tour/0a94ae2839ee0b65?from=timeline",
                        "type": "CAM"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.27663, 30.53390, 0]
                    },
                    "properties": {
                        "name": "鹦鹉洲大桥",
                        "url": "http://www.720yuntu.com/tour/7919d27642171cbe?from=timeline",
                        "type": "CAM"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.31303, 30.54306, 0]
                    },
                    "properties": {
                        "name": "傅家坡人行通道",
                        "url": "http://120.55.54.89/Pano/vtour/index.html",
                        "type": "CAM"
                    }
                }
        
            ]
        }],

        health:[{
            "name":"动态应变计",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22212218986104, 30.49924858472032, 13]
                    },
                    "properties": {
                        "name": "动应变计-01",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1507",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1507",
        
                        "type": "DSS"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.2247901373646, 30.498167009655848, 19]
                    },
                    "properties": {
                        "name": "YC匝道动应变计-01",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1519",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1519",
        
                        "type": "DSS"
                    }
                }
            ]
        },
        
        
        //高清摄影机
        {
            "name":"高清摄影机",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22292062973493, 30.500455931143453, 12]
                    },
                    "properties": {
                        "name": "高清摄像机-03",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=2774",
                        "type": "CAM"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22122346992239, 30.498390003005724, 12]
                    },
                    "properties": {
                        "name": "高清摄像机-02",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=2773",
                        "type": "CAM"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22342330152102, 30.4968508761018, 14]
                    },
                    "properties": {
                        "name": "高清摄像机-05",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=2776",
                        "type": "CAM"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22521127770246, 30.49878107967148, 16]
                    },
                    "properties": {
                        "name": "高清摄像机-C4",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=2775",
                        "type": "CAM"
                    }
                }
        
            ]
        },
        
        
        //拉绳位移计
        {
            "name":"拉绳位移计",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22259954078969, 30.50015497985172, 13]
                    },
                    "properties": {
                        "name": "位移计-07-横桥向",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1789",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1789",
                        "type": "MSS"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22440645276697, 30.49809042734367, 20]
                    },
                    "properties": {
                        "name": "位移计-05-纵桥向",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1538",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1538",
                        "type": "MSS"
                    }
                }
        
                ,
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22493104004451, 30.498254366914562, 20]
                    },
                    "properties": {
                        "name": "位移计-01-纵桥向",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1534",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1534",
                        "type": "MSS"
                    }
                }
        
            ]
        },
        
        //模拟倾角仪
        {
            "name":"模拟倾角仪",
            "type": "FeatureCollection",
            "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22463469100734, 30.49813014768528, 20]
                    },
                    "properties": {
                        "name": "倾角仪02-横桥向",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1532",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1532",
        
                        "type": "INA"
                    }
                }
        
        
        
            ]
        },
        
        
        //模拟温湿度仪
        {
            "name":"模拟温湿度仪",
            "type": "FeatureCollection",
            "features": [
        
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [114.22228531379088, 30.499266992708172, 13]
                    },
                    "properties": {
                        "name": "环境温湿度-01",
                        "url": "http://10.34.4.18:86/HealthMonitor/PointMonitor.aspx?BridgeId=273&PointId=1528",
                        "realtime": "http://10.34.4.18:86/HealthMonitor/ashx/StructureMonitorHandler.ashx?action=GetPointInfo&BridgeId=273&PointId=1528",
                        "type": "THS"
        
                    }
                }
            ]
        }]


    }
}

export default new Vuex.Store({
    state
});