var bings = echarts.init(document.getElementById("dabingtu"));
var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
    title: {
        text: '你幸福吗？',
        //subtext: 'From ExcelHome',
        //sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 35,
            fontWeight : 'bolder'
        }
    },
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        //x : document.getElementById('main').offsetWidth / 2,
        x:'right',
        y : 45,
        itemGap:12,
        data:['68%的人表示过的不错','29%的人表示生活压力很大','3%的人表示“我姓曾”']
    },
   
    series : [
        {
            name:'1',
            type:'pie',
            clockWise:false,
            radius : [85, 110],
            itemStyle : dataStyle,
            data:[
                {
                    value:68,
                    name:'68%的人表示过的不错'
                },
                {
                    value:32,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'2',
            type:'pie',
            clockWise:false,
            radius : [60, 85],
            itemStyle : dataStyle,
            data:[
                {
                    value:29, 
                    name:'29%的人表示生活压力很大'
                },
                {
                    value:71,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'3',
            type:'pie',
            clockWise:false,
            radius : [35, 60],
            itemStyle : dataStyle,
            data:[
                {
                    value:3, 
                    name:'3%的人表示“我姓曾”'
                },
                {
                    value:97,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
};

bings.setOption(option);