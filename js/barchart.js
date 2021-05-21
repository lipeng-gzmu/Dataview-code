var myCharts = echarts.init(document.getElementById("barchart"))
		   var lineColor = '#406A92';
var labelColor = 'red';
var fontSize = '15';
var lineWidth = 3;
function checkDan(param){
	if(param<10)return param+"亿吨"
	else return param+"万吨"
}
option = {
    backgroundColor: 'rgba(0,0,0,0)',
    grid: {
        left: '0%',
        right: '0%',
        top: '25%',
        bottom: '7%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        textStyle: {
            fontSize: fontSize
        }
    },
    legend: {
        show: true,
        x: '30px',
        y: '1%',
        itemWidth: 45,
        itemHeight: 18,
        textStyle: {
            color: 'blue',
            fontSize: fontSize
        },
        data:['1976年','1966年']
    },
    xAxis: [{
        type: 'category',
        name: '',
        nameTextStyle: {
            fontSize: fontSize,
            color: 'labelColor',
            lineHeight: 90,
        },
        axisLabel: {
            color: labelColor,
            fontSize: '20',
            margin: 20,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: lineColor,
                width: lineWidth
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#197584'
            }
        },
        data: ['粮食', '钢','煤']
    }],
    yAxis: [{
        type: 'value',
        name: '',
        nameTextStyle: {
            fontSize: fontSize,
            color: labelColor
        },
        nameGap: 30,
        axisLabel: {
            show: false,
            formatter: '{value}',
            margin: 20,
            textStyle: {
                color: labelColor,
                fontSize: fontSize,

            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: lineColor,
                width: lineWidth
            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: lineColor
            }
        }
    }],
    series: [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [50, 25],
            symbolOffset: [-75, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
                show: false
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    fontSize: fontSize,
                    color: '#fff'
                }
            },
            color: "#26B2E8",
            data: [2.14, 0.1532,2.5]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [70, 30],
            symbolOffset: [-75, 15],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#2EA9E5',
                    borderType: 'solid',
                    borderWidth: 3
                }
            },
            data: [2.14, 0.1532,2.5]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [90, 40],
            symbolOffset: [-75, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#26B2E8',
                    borderType: 'solid',
                    borderWidth: 4
                }
            },
            data: [2.14, 0.1532,2.5]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            tooltip: {
                show: false
            },
            symbolOffset: [-75, 10],
            z: 12,
            "color": "#26B2E8",
            "data": [2.14, 0.1532,2.5]
        },
        {
            type: 'bar',
            name:'1966年',
            "barWidth": "50",
            barGap: '200%',
            barCateGoryGap: '10%',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    fontSize: fontSize,
                    color: 'blue',
                    opacity: 1,
                    formatter: '{c}亿吨',
                    offset: [0, -20]
                }
            },
            itemStyle: {
                normal: {
                    color: '#1E93C6',
                    opacity: 1
                },
            },
            data: [2.14, 0.1532,2.5]
        },
        {
            "name": "",
            type: 'pictorialBar',
            symbolSize: [50, 25],
            symbolOffset: [75, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
                show: false
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    fontSize: fontSize,
                    color: '#fff'
                }
            },
            color: "#20D3AB",
            data: [2.86, 0.2046,4.8]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [70, 30],
            symbolOffset: [75, 15],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#20D3AB',
                    borderType: 'solid',
                    borderWidth: 3
                }
            },
            data: [2.86, 0.2046,4.8]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [90, 40],
            symbolOffset: [75, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#20D3AB',
                    borderType: 'solid',
                    borderWidth: 4
                }
            },
            data: [2.86, 0.2046,4.8]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            tooltip: {
                show: false
            },
            symbolOffset: [75, 10],
            z: 12,
            "color": "#20D3AB",
            "data": [2.86, 0.2046,4.8]
        },
        {
            type: 'bar',
            name:'1976年',
            "barWidth": "50",
            barGap: '200%',
            barCateGoryGap: '10%',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    fontSize: fontSize,
                    color: 'blue',
                    formatter: '{c}亿吨',
                    offset: [0, -20]
                }
            },
            itemStyle: {
                normal: {
                    color: '#1AAE96',
                    opacity: 1
                },
            },
            data: [2.86, 0.2046,4.8]
        },
        
    ]
};
myCharts.setOption(option)