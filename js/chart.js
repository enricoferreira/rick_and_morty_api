const filtrarPersonagem = (json) => json.map( objeto => objeto.name)

const filtrarEpisodios = (json) => json.map( objeto => objeto.episode)

export const generateChart = (chartId, json) => {
    var data = {
        // A labels array that can contain any sort of values
        labels: filtrarPersonagem(json),
        // Our series array that contains series objects or in this case series data arrays
        series: [ filtrarEpisodios(json)]
      };


      var options = {
        width: 600,
        height: 800,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        },
       
      };
            
      new Chartist.Bar(chartId, data, options)
    
}