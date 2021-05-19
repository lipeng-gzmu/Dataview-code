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
        text: '国民经济的恢复',
        //subtext: 'From ExcelHome',
        //sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 10,
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
        x:'80px',
        y : 55,
        itemGap:12,
        data:['其它','重工业']
    },
   
    series : [
        {
            name:'类型',
            type:'pie',
            clockWise:false,
            radius : [85, 130],
            itemStyle : dataStyle,
            data:[
                {
                    value:91,
                    name:'其它'
                },
                {
                    value:9,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'类型',
            type:'pie',
            clockWise:false,
            radius : [40, 85],
            itemStyle : dataStyle,
            data:[
                {
                    value:9, 
                    name:'重工业'
                },
                {
                    value:91,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
      
    ]
};

bings.setOption(option);