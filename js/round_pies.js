var mycharts = echarts.init(document.getElementById("round_pie"));
	option = {
    title : {
        text: '农民与地主占地比例图',
        x:'70px'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : '470px',
        data:['地主','农民']
    },
    
    calculable : true,
    series : [
        {
            name:'人口比例',
            type:'pie',
            radius : [20, 100],
            center : ['50%', 135],
            roseType : 'radius',
            width: '85%',       // for funnel
            max: 0,            // for funnel
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        show : true
                    }
                }
            },
            data:[
                {value:10, name:'地主'},
                {value:90, name:'农民'}   
            ]
        },
        {
            name:'土地比例',
            type:'pie',
            radius : [20, 100],
            center : ['50%', 350],
            roseType : 'area',
            width:'85%',
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:[
                {value:70, name:'地主'},
                {value:30, name:'农民'}  
            ]
        }
    ]
};
	mycharts.setOption(option);