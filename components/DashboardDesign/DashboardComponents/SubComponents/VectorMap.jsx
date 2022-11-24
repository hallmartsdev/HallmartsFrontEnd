import React from 'react'
import NigeriaNew from '../../../MapData/NigeriaNew.json'
import NigeriaStates from '../../../MapData/NigeriaStates.json'
import Nigeria from '../../../MapData/Nigeria.json'
import NigeriaRegions from '../../../MapData/NigeriaRegions.json'
import Countries from '../../../MapData/Countries.json'

import USA from '../../../MapData/USA.json'
import { useEffect,useState } from 'react'
//import  Chart  from 'chart.js';

import  Chartjs  from 'chart.js/auto'

import * as ChartGeo from 'chartjs-chart-geo'

const VectorMap = () => {

let [staticVal,setStaticVal] = useState(0)

        
            useEffect(()=>{
        
          
               let  intialiseChart = ()=>{
                const nation = ChartGeo.topojson.feature(USA, USA.objects.nation).features[0];
                const states = ChartGeo.topojson.feature(USA, USA.objects.states).features;


           
                
                let naijaGeometries = []
                let naijaArcsConfig = {
                    type: "MultiPolygon",
                    arcs:NigeriaStates.arcs
                }
                naijaGeometries.push(naijaArcsConfig)

                let nationSetup = {
                    type:"GeometryCollection",
                    geometries:naijaGeometries
                }

          

                NigeriaNew.objects.nation = nationSetup

               console.log({NigeriaNew})
               console.log({NigeriaStates})
               console.log({USA})
               console.log({Countries})

 


                
           const NaijaNation = ChartGeo.topojson.feature(Countries, Countries.objects.land).features[0];
                const naijastates = ChartGeo.topojson.feature(Countries, Countries.objects.countries).features;

    
                
                //console.log({nation,states})
                console.log(naijastates.map((d) => ({feature: d, value: 5})))
          
                console.log(states.map((d) => ({feature: d, value: 5})))
          


                    const ctx = document.getElementById('myChart');                    
                      const data = {
                        labels: naijastates.map((d) => d.properties.name),
                        datasets: [{
                          label: 'Nigeria',
                          outline: NaijaNation,
                          data: naijastates.map((d) => ({feature: d, value: 5})),
                        }]
                      };
                    
                      const config = {
                        type: 'choropleth',
                        data: data,
                      
                          options: {
                            legend: {
                              display: true
                            },
                            scale: {
                              projection: '1000'
                            },
                            geo: {
                              colorScale: {
                                display: false,
                                position: 'right',
                                quantize: 500,
                                legend: {
                                  position: 'bottom-left',
                                },
                              },
                            },
                            }
                    
                          
                      };


                  
                      const myChart = new Chartjs(
                        ctx,
                        config
                      );          

                     
                     
                }
                     
                   
                intialiseChart()                    
                },[staticVal])
                    
                  
                
                
            return(
                <div>
                    <canvas id="myChart" width="1280px" height="768px"></canvas>
            
                </div>
            )
        
}

export default VectorMap

    
                   /* const myChart = new Chart(ctx, {
                      type: 'choropleth',
                      data: {
                        labels: states.map((d) => d.properties.name),
                        datasets: [{
                          label: 'States',
                          outline: nation,
                          data: states.map((d) => ({feature: d, value: Math.random() * 10})),
                        }]
                      },
                      options: {
                        legend: {
                          display: false
                        },
                        scale: {
                          projection: 'albersUsa'
                        },
                        geo: {
                          colorScale: {
                            display: true,
                            position: 'bottom',
                            quantize: 5,
                            legend: {
                              position: 'bottom-right',
                            },
                          },
                        },
                      }
                    });
                    */


/**
 * fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
  const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
  const states = ChartGeo.topojson.feature(us, us.objects.states).features;

  const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: 'choropleth',
    data: {
      labels: states.map((d) => d.properties.name),
      datasets: [{
        label: 'States',
        outline: nation,
        data: states.map((d) => ({feature: d, value: Math.random() * 10})),
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        xy: {
          projection: 'albersUsa'  
        },
        color: {
          quantize: 5,
          legend: {
            position: 'bottom-right',
            align: 'bottom'
          },
        }
      },
    }
  });
});
 */


/**
 * // whole US for the outline
const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
// individual states
const states = ChartGeo.topojson.feature(us, us.objects.states).features;
const california = states.find((d) => d.properties.name === 'California');

 * const config = {
  data: {
    labels: ['Alaska', 'California'],
    datasets: [{
      label: 'States',
      outline: nation, // ... outline to compute bounds
      showOutline: true,
      data: [
        {
          value: 0.4,
          feature: alaska // ... the feature to render
        },
        {
          value: 0.3,
          feature: california
        }
      ]
    }]
  },
  options: {
    scales: {
      xy: {
        projection: 'albersUsa' // ... projection method
      }
    }
  }
};

 */


/***
 * 
 * 
 * import { Chart } from 'react-chartjs-2'
import * as ChartGeo from 'chartjs-chart-geo'

    const USPageMap = () =>{
    
        useEffect(()=>{
    
            let canvas = document.getElementById("canvas")
            if(!canvas) return
    
            fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
    
                const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0];
                const states = ChartGeo.topojson.feature(us, us.objects.states).features;
              
                const chart = new Chart(canvas.getContext("2d"), {
                  type: 'choropleth',
                  data: {
                    labels: states.map((d) => d.properties.name),
                    datasets: [{
                      label: 'States',
                      outline: nation,
                      data: states.map((d) => ({feature: d, value: Math.random() * 10})),
                    }]
                  },
                  options: {
                    legend: {
                      display: false
                    },
                    scale: {
                      projection: 'albersUsa'
                    },
                    geo: {
                      colorScale: {
                        display: true,
                        position: 'bottom',
                        quantize: 5,
                        legend: {
                          position: 'bottom-right',
                        },
                      },
                    },
                  }
                });
              });
        })
        
        return(
            <div>
                <canvas id='canvas'></canvas>
            </div>
        )
    }
 */


/**
 * 
    const us = await fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json());

    
// Whole NGA for the outline
const nigeriaNation = ChartGeo.topojson.feature(NigeriaNew, NigeriaNew.objects.nga).features[0];
const nigeriaStates = ChartGeo.topojson.feature(NigeriaNew, NigeriaNew.objects.nga).features;
const Borno = states.find((d) => d.properties.name === 'Borno');


const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: 'choropleth',
    data: {
      labels: states.map((d) => d.properties.name),
      datasets: [{
        label: 'States',
        outline: nation,
        data: states.map((d) => ({feature: d, value: Math.random() * 10})),
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        xy: {
          projection: 'albersUsa'  
        },
        color: {
          quantize: 5,
          legend: {
            position: 'bottom-right',
            align: 'bottom'
          },
        }
      },
    }
  });


  return (
    <canvas id="canvas"></canvas>
  )
}





    const config = {
                        type: 'choropleth',
                        data: data,
                        options: {
                              legend: {
                            display: false
                          },
                          scale: {
                            projection: ''
                          },
                          geo: {
                            colorScale: {
                              display: true,
                              position: 'bottom',
                              quantize: 5,
                              legend: {
                                position: 'bottom-right',
                              },
                            },
                          },}
                          
                      };
 */