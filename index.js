let data = {
    labels:[' ≥ 10', ' ≥ 20', ' ≥ 80', ' ≥ 90', '= 100'],
    datasets:[{
      label:'First Item',
      data:[
        65,
        55,
        30,
        29,
        12
      ],
     
      backgroundColor:[
        'rgb(35,54,102)',
        'rgb(35,54,102)',
        'rgb(35,54,102)',
        'rgb(35,54,102)',
        'rgb(35,54,102)'
      ],
    },
    {
      label:'Second Item',
      data:[
        75,
        60,
        27,
        25,
        15
      ],
   
      backgroundColor:[
       'rgb(238,27,38)',
       'rgb(238,27,38)',
       'rgb(238,27,38)',
       'rgb(238,27,38)',
       'rgb(238,27,38)'
  
      ],
    },
    {
      label:'Third Item',
      data:[
        10,
       8,
        5,
        4,
        3
      ],
     
      backgroundColor:[
        'rgb(88,88,88)',
        'rgb(88,88,88)',
        'rgb(88,88,88)',
        'rgb(88,88,88)',
        'rgb(88,88,88)'
      ],
    }
  ]
  }
  let delayed;
  
      let options = {
          maintainAspectRatio:false,
          responsive: true,
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 400 + context.datasetIndex * 200;
              }
              return delay;
            },
          },
          
          plugins: {
     
                   title:{
                        display:true,
                        text:['Percentage (%)'],
                        fontSize:25,
                        position:'left'
                        },
                        
                    legend:{
                        display:true,
                        position:'right',
    
    
                   labels:{
                         fontColor:'#000',
      
                      }
    
              }
             },
  
                   layout:{
           padding:{
                    left:50,
                    right:150,
                    bottom:0,
                     top:50
                    }
                  },
  
              tooltips:{
                  enabled:true
                  },
  
              scales: {
                     yAxes: [{
                        ticks: {
                           beginAtZero: true,
                            max:100
      
                           }
                              }]
                         }
                     
  
  };
  
  new Chart('chart', {
  type: 'bar',
  options: options,
  data: data
  });
  
  
  