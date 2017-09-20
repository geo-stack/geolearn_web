var width = 1050;
var height = 500;

var margin = {
    left: 50,
    top: 20,
    right: 50,
    bottom: 20
  },
  width = width - margin.left - margin.right,
  height = height - margin.top - margin.bottom;
// width = 1000;
var data = [{
  "name": "Novembre ",
  "year": "2016",
  "text": "Intéressés par l’intelligence artificielle appliquée aux géosciences, Martin Blouin, Antoine Caté et Lorenzo Perozzi fondent geoLEARN.",
  "date": -1,
  "y": Math.random() * (-1.5 - (-2.5)) + (-2.5),
  "y0": 0,
  "startAngle": 0,
  'endAngle': Math.PI * 2,
  "offset": "33%",
  "color": "#3498db",
  'delay': 0,
  "desc1": 'geoLEARN',
  "desc2": 'est fondée',
  "year1":'2016',
  "credits":'Placer la souris sur le cercle pour les détails'
}, {
  "name": "Janvier ",
  "year": "2017",
  "text": "geoLEARN se classe parmi les 10 meilleures équipes du concours SEG Machine Learning, un concours style Kaggle utilisant des données géophysiques.",
  "date": 02,
  "y": Math.random() * (3.5 - (1.5)) + (1.5),
  "y0": 0,
  "startAngle": 0,
  'endAngle': Math.PI * 2,
  "offset": "8%",
  "color": "#366a93",
  'delay': 0.2,
  "desc1": 'Classé top 10 au concours  ',
  "desc2": 'SEG Machine Learning',
  "year1":'|',
  "credits":''
}, {
  "name": "Mars ",
  "year": "2017",
  "text": "geoLEARN a été sélectionné comme semi-finaliste pour la vitrine #DisruptMining où nous avons eu l'opportunité de présenter la plate-forme Augmented Intelligent Mining (AIM).",
  "date": 04,
  "y": Math.random() * (-1.5 - (-2.5)) + (-2.5),
  "y0": 0,
  "startAngle": 0,
  'endAngle': Math.PI * 2,
  "offset": "33%",
  "color": "#2c3e50",
  'delay': 0.4,
  "desc1": 'DisruptMining',
  "desc2": 'semi-finaliste',
  "year1":'2017',
  "credits":''
}, {
  "name": "Juin ",
  "year": "2017",
  "text": "geoLEARN obtient son premier contrat de service.",
  "date": 06,
  "y": Math.random() * (3.5 - (1.5)) + (1.5),
  "y0": 0,
  "startAngle": 0,
  'endAngle': Math.PI * 2,
  "offset": "50%",
  "color": "#366a93",
  'delay': 0.6,
  "desc1": 'Premier contrat',
  "desc2": 'de service',
  "year1":'',
  "credits":''


// }, {
//   "name": "September ",
//   "year": "2017",
//   "text": "geoLEARN starts collaborating with Geotic.",
//   "date": 09,
//   "y": Math.random() * (-1.5 - (-2.5)) + (-2.5),
//   "y0": 0,
//   "startAngle": 0,
//   'endAngle': Math.PI * 2,
//   "offset": "50%",
//   "color": "#3498db",
//   'delay': 0.7,
//   'desc1': 'Partnership',
//   "desc2": 'with Geotic',
//   "year1":'',
//   "credits":''
}];

// var gs = d3.graphScroll()
//         // .container(d3.select("#timeline"))
//         // .graph(d3.selectAll("#chart"))
//         .sections(d3.selectAll("#chart"))
//         .on("active", function() {
//             if (document.getElementById('chart').className == "graph-scroll-active") {

var xScale = d3.scaleLinear()
  .domain([-2, 08])
  .range([0, width]);

var yScale = d3.scaleLinear()
  .domain([-3, 3])
  .range([height / 2 - 150, height / 2 + 150]);


var innerRadius = 0,
  outerRadius = innerRadius + 1 * 10
innerRadius2 = 30,
  outerRadius2 = innerRadius2 * 1.15;
var arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

var arc2 = d3.arc()
  .innerRadius(innerRadius2)
  .outerRadius(outerRadius2);

var svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  .attr("transform", "translate(110,20)");


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .direction('e')
  .html(function(d) {
    return "<h3 style='font-family:Lato; font-weight:300;font-size:20px'>" + d.name + d.year + "</h3>  <hr> <p>" + d.text + "<p>";
  })
  .html(function(d) {
    return "<h3 style='font-family:Lato; font-weight:300;font-size:20px'>" + d.name + d.year + "</h3>  <hr> <p style='margin-top:10px;font-size:13px;line-height: 18px;'>" + d.text + "</p>";
  })

var wrap = d3.textwrap().bounds({
  height: 30,
  width: 30
});




svg.call(tip);

var defs = svg.append("defs");
var linearGradient = defs.append("linearGradient")
  .attr("id", "animate-gradient")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "0")
  .attr("spreadMethod", "reflect");

linearGradient.selectAll(".stop")
  .data(data)
  .enter().append("stop")
  .attr("offset", function(d, i) {
    return i / (data.length - 1);
  })
  .attr("stop-color", function(d) {
    return d.color;
  });

linearGradient.append("animate")
  .attr("attributeName", "x1")
  .attr("values", "0%;100%")
  .attr("dur", "7s")
  .attr("repeatCount", "indefinite");

linearGradient.append("animate")
  .attr("attributeName", "x2")
  .attr("values", "100%;200%")
  .attr("dur", "7s")
  .attr("repeatCount", "indefinite");

///////////////////////////////////////////////////////////////////////////
////////////////////////// Create the horizontal line /////////////////////
///////////////////////////////////////////////////////////////////////////

var horiz_line = svg.selectAll("horizline").data(data).enter()

horiz_line.append("rect")
  .attr("x", 0)
  .attr("y", yScale(0))
  .attr("rx", 15)
  .attr("ry", 15)
  .attr("width", width - 30)
  .attr("height", height / 2 - 200)
  .style("fill", "url(#animate-gradient)")



// function timeForTimeline(){ // har

var vert_line = svg.selectAll("vertline").data(data).enter()

vert_line.append("line")
  .attr("x1", function(d) {
    return xScale(d.date);
  })
  // .attr("y1", function(d) {
  //   return yScale(0) + 30;
  // })
  .attr("y1", function(d) {
    if (d.y < 0) {
      return yScale(0)
    } else {
      return yScale(0) + 30
    };
  })
  .attr("x2", function(d) {
    return xScale(d.date);
  })
  .attr("y2", function(d) {
    if (d.y < 0) {
      return yScale(0)
    } else {
      return yScale(0) + 30
    };
  })
  // .attr("y2", 30)
  // .attr("stroke-opacity", 0)
  .attr("stroke", function(d) {
    return d.color;
  })
  // repeat();

  // .attr("x1", function(d) {
  //     return xScale(d.date);
  //   })
    // .attr("y1", function(d) {
    //   return yScale(0) + 30;
    // })
    // .attr("y1", function(d) {
    //   if (d.y < 0) {
    //     return yScale(0)
    //   } else {
    //     return yScale(0) + 30
    //   };
    // })
    // .attr("x2", function(d) {
    //   return xScale(d.date);
    // })
    // .attr("y2", function(d) {
    //   return yScale(0);
    // })
  .transition().duration(1000)
  .delay(function(d) {
    return d.delay * 20000;
  })
  .ease(d3.easeLinear)
  .attr("stroke-opacity", 1)
  .attr("stroke-width", 4)
  .attr("y2", function(d) {
    return yScale(d.y);
  })
  .on('end', function repeat() {
  //   d3.active(this)
    svg.selectAll("dot")
      .data(data)
      .enter().append("circle")
      .attr("cx", function(d) {
        return xScale(d.date);
      })
      .attr("cy", function(d) {
        return yScale(d.y);
      })
      .style("fill", function(d) {
        return d.color;
      })
      .attr("r", 0)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .transition().duration(500)
      .delay(function(d) {
        return d.delay * 20000;
      })
      .ease(d3.easeLinear)
      .attr("r", 15)
      .attr("cx", function(d) {
        return xScale(d.date);
      })
      .attr("cy", function(d) {
        return yScale(d.y);
      })
      .style("fill", function(d) {
        return d.color;
      });
    text.selectAll("text")
      .transition()
      .duration(500)
      .delay(function(d) {
        return d.delay * 20000;
      })
      .style("opacity", 1)
      // .on('end',repeat);
  });





var text = svg.selectAll("text")
  .data(data)
  .enter();
text.append('text')
  .attr("x", function(d) {
    return xScale(d.date)
  })
  .attr("y", 250)
  // .attr("y", 244)

  .text(function(d) {
    return d.name;
  })
  // .attr("fill", "#fff")
  .style('text-anchor', 'middle')
  .style('opacity', 1)
  .attr("fill", "#fff");

text.append('text')
  .attr("x", function(d) {
    return xScale(d.date) + 30
  })
  .attr("y", function(d) {
    return yScale(d.y) - 7;
  })
  .text(function(d) {
    return d.desc1;
  })
  .style('text-anchor', 'left')
  .style('opacity', 0)
  .attr('font-family', 'Lato')
  .attr('font-weight', '300')
  .attr('font-size', '15px')
  .attr("fill", "#000");
text.append('text')
  .attr("x", function(d) {
    return xScale(d.date) + 30
  })
  .attr("y", function(d) {
    return yScale(d.y) + 13;
  })
  .text(function(d) {
    return d.desc2;
  })
  // .attr("fill", "#fff")
  .style('text-anchor', 'left')
  .style('opacity', 0)
  .attr('font-family', 'Lato')
  .attr('font-weight', '300')
  .attr('font-size', '15px')
  .attr("fill", "#000");
text.append("text")
  .attr("x", function(d) {
    return xScale(-1.8)
  })
  .attr("y", 270)
  // .attr("y", 244)

  .text(function(d) {
    return d.credits;
  })
  // .attr("fill", "#fff")
  .style('text-anchor', 'start')
  .attr('font-family', 'Lato')
  .attr('font-weight', '300')
  .attr('font-size', '10px')
  .attr("fill", "#666666")
  .attr("stroke-opacity", 0);
text.append("text")
  .attr("x", function(d) {
    if (d.year1 == 2016) {
      return xScale(d.date) + 120
    } else if (d.year1 == 2017) {
      return xScale(d.date) - 300 // if september: -120
    } else {
      return xScale(d.date) - 120 // if september: -50
    };
  })
  .attr("y", 220)
  // .attr("y", 244)

  .text(function(d) {
    return d.year1;
  })
  // .attr("fill", "#fff")
  .style('text-anchor', 'start')
  .attr('font-family', 'Lato')
  .attr('font-weight', '400')
  .attr('font-size', '17px')
  .attr("fill", "#4c4c4c")
  .attr("stroke-opacity", 0);

// }});
