
   //基于准备好的dom，初始化Echarts实例
   var myChart = echarts.init(document.getElementById('windows02'));
   option = {
    title : {
        text: '战争占比变化',
//      subtext: '纯属虚构',
        x:'180',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'horizontal',
        x : '70px',
        y : '0px',
        data:['国内战争\n(1927-1937年)','抗日战争 \n(1931-1945年)','解放战争\n(1946-1950年)']
    },
    calculable : false,
    series : (function (){
        var series = [];
        for (var i = 0; i <21; i++) {
            series.push({
                name:'战争时长',
                type:'pie',
                itemStyle : {normal : {
                    label : {show : i >19},
                    labelLine : {show : i > 19, length:20}
                }},
                radius : [i * 4 + 10, i * 4 + 13],
                data:[
                    {value: i * 0.5 ,  name:'国内战争\n(1927-1937年)'},
                    {value: i * 0.70,  name:'抗日战争 \n(1931-1945年)'},
                    {value: i * 0.15,  name:'解放战争\n(1946-1950年)'},
                   /* {value: i * 0.5 ,  name:'国内战争'},
                    {value: i * 0.70,  name:'抗日战争'},
                    {value: i * 0.15,  name:'解放战争'},*/
                ]
            })         
        }
        series[0].markPoint = {
            symbol:'emptyCircle',
            symbolSize:series[0].radius[0],
            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
            data:[{x:'50%',y:'50%'}]
        };
        return series;
    })()
};
myChart.setOption(option);

