var myChart = echarts.init(document.getElementById("soliderCount"))
		option = {
    title: {
        x: 'center',
        text: '抗美援朝各省牺牲人数\n总：197653'
    },
    tooltip: {
        trigger: 'item'
    },
    /*toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },*/
    calculable: true,
    grid: {
        borderWidth: 0,
        x:30,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['黑龙江','吉林','辽宁','内蒙古','河北省','北京','天津','山东','河南','山西',
            '陕西','宁夏','甘肃','青海','新疆','四川','重庆','湖北','安徽','江苏',
            '上海','浙江','福建','江西','湖南','贵州','云南','广西','广东','海南']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '抗美援朝各省牺牲人数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
                           '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        fontSize:'6px',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [8683,18499,13374,1995,11853,1551,808,19766,11048,5488,
                   3387,441,1259,56,93,21051,9468,7183,6375,8444,
                   1576,3361,1173,3258,11541,2957,1604,3418,3307,91],
            markPoint: {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params){
                        return '<img src="' 
                                + params.data.symbol.replace('image://', '')
                                + '"/>';
                    }
                },
                data: [
                    {xAxis:0, y: 350, name:'黑龙江', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:1, y: 350, name:'吉林', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:2, y: 350, name:'辽宁', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:3, y: 350, name:'内蒙古', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:4, y: 350, name:'河北省', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:5, y: 350, name:'北京', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:6, y: 350, name:'天津', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                    {xAxis:7, y: 350, name:'山东', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                    {xAxis:8, y: 350, name:'河南', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                    {xAxis:9, y: 350, name:'山西', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                    {xAxis:10, y: 350, name:'陕西', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                    {xAxis:11, y: 350, name:'宁夏', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                    {xAxis:12, y: 350, name:'甘肃', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:13, y: 350, name:'青海', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:14, y: 350, name:'新疆', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:15, y: 350, name:'四川', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:16, y: 350, name:'重庆', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:17, y: 350, name:'湖北', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:18, y: 350, name:'安徽', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                    {xAxis:19, y: 350, name:'江苏', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                    {xAxis:20, y: 350, name:'上海', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:21, y: 350, name:'浙江', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:22, y: 350, name:'福建', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:23, y: 350, name:'江西', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:24, y: 350, name:'湖南', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:25, y: 350, name:'贵州', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:26, y: 350, name:'云南', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                    {xAxis:27, y: 350, name:'广西', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                    {xAxis:28, y: 350, name:'广东', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                    {xAxis:29, y: 350, name:'海南', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                ]
            }
        }
    ]
};
 myChart.setOption(option)