
d3.csv("groupData.csv", function(data) {

    var grouped = d3.nest()
        .key(function(d){return d.Group})
        .entries(data)
        console.log(data)
        
    var colorScale = d3.scaleOrdinal(d3.schemeCategory20);
    

    var simulation = d3.forceSimulation()
        .force("x", d3.forceX(650).strength(0.05))
        .force("y", d3.forceY(650).strength(0.04))
        .force("collide", d3.forceCollide(function(d){
            return((d.Score))
    }))

    var svg = d3.select(".svgBoard")
        .append('svg')                
        .attr('height', 1300)
        .attr('width', 1300)
        .append('g')
        .attr("transform", "translate(0,0)")

    var tooltip =  d3.select(".svgBoard")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("color", "white")
        .style("padding", "8px")
        .style("background-color", "#242625")
        .style("opacity", 0.8)
        .style("border-radius", "8px")
        .style("text-align", "center")
        .style("font-family", "Helvetica")
        .style("width", "300px")
        .text("");

    var details =  d3.select(".details")   
        .style("position", "absolute")
        //.style("margin-top", "-1000px")
        .style("visibility", "hidden")
        .style("color", "#242625")
        .style("text-align", "center")
        .style("font-family", "Helvetica")
        .style("width", "300px")
        .text("")

            
    var groupSvg = svg.selectAll(".people")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "people")
        .attr("id", function(d){
            return d.Group
        })
        .attr("r", function(d){
            return((d.Score))
        })
        .style("fill", function(d, i){
                return colorScale(d.Group)
           })  
        .on("mouseover", function(d) {
            tooltip.html("<br>"+ "Alias: " + d.Alias  + "<br>" + "<br>"
                        +"Major: " + d.Major +"<br>" + "<br>"
                        +"Total Score: " + d.Score +"<br>" + "<br>"
                        +"<p style = font-weight:bold>"
                        + "Group: " + d.Group +  "<br>" + "<br>" + "Group " + d.Group + " has a total score of " +  d.GroupScore +  "</p>" + "<br>"
                        );
            return tooltip.style("visibility", "visible");
        })
        .on("mousemove", function() {
            return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
        })
        .on("mouseout",function() {
            return tooltip.style("visibility", "hidden");
        })

        .on("click", function(d){
            d3.select(this)
            //console.log(d)
            for(i=0;i<data.length;i++){
                var elements = document.getElementsByClassName("people");
                for(var i = 0, length = data.length; i < length; i++) {
                    if(i != d.index){
                       elements[i].style.display = 'none';
                    } 
                 }
            }
            details.html("<h1>"+ "Alias: " + d.Alias  + "</h1>"
                        +"<p style= font-style:italic;font-weight=normal;font-size:15px;>" + "'" + d.Expectations + "'" + "</p>"
                        +"<p style = font-weight:bold;font-size:15px;>" + "In a scale from 1-10, I would rate myself: " + "</p>"
                        +"<p>" + "Stats: " + d.Stats + "</p>" 
                        +"<p>" + "Math: " + d.Math + "</p>" 
                        +"<p>"+ "Visualisation: "+ d.Visualisation + "</p>" 
                        +"<p>"+ "Programming: "+ d.Programming + "</p>" 
                        +"<p>"+ "GitSkills: "+ d.GitSkill + "</p>" 
                        +"<p>"+ "Graphics: "+ d.Graphics + "</p>" 
                        +"<p>"+ "Artisctic features: "+ d.Artistics + "</p>" 
                        +"<p>"+ "HCI: "+ d.HCI + "</p>" 
                        +"<p>"+ "UX: "+ d.UX + "</p>" 
                        +"<p>"+ "Communication: "+ d.Communication + "</p>" 
                        +"<p>"+ "Collaboration: "+ d.Collaboration + "</p>"
                        );
        
            return details.style("visibility", "visible")

        })
        .on("dblclick", function(d){
            for(i=0;i<data.length;i++){
                var elements = document.getElementsByClassName("people");
                for(var i = 0, length = data.length; i < length; i++) {
                    if(i != d.index){
                       elements[i].style.display = 'block';
                    } 
                 }
            }
            return details.style("visibility", "hidden")
        })

    var button1 = d3.select("#group1")
        .on("click", (function(d) {
            for(i=0;i<data.length;i++){
                var elements = document.getElementsByClassName("people");
                for(var i = 0, length = data.length; i < length; i++) {
                    if(data[i].Group != 1){
                       elements[i].style.display = 'none';
                    } 
                 }
            }
        var topGroup = document.getElementById("topGroups") 
        var group2 = document.getElementById("group2") 
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 

        group2.style.visibility="hidden"
        group3.style.visibility="hidden"
        group4.style.visibility="hidden"
        group5.style.visibility="hidden"
        group6.style.visibility="hidden"
        group7.style.visibility="hidden"
        group8.style.visibility="hidden"
        group9.style.visibility="hidden"

        topGroup.style.visibility="hidden"

        return details.style("visibility", "hidden")
        }))
        
    var button2 = d3.select("#group2")
        .on("click", (function(d) {
            for(i=0;i<data.length;i++){
                var elements = document.getElementsByClassName("people");
                for(var i = 0, length = data.length; i < length; i++) {
                    if(data[i].Group != 2){
                    elements[i].style.display = 'none';
                    } 
                }
            }
            var group1 = document.getElementById("group1")
            var group3 = document.getElementById("group3") 
            var group4 = document.getElementById("group4") 
            var group5 = document.getElementById("group5") 
            var group6 = document.getElementById("group6") 
            var group7 = document.getElementById("group7") 
            var group8 = document.getElementById("group8") 
            var group9 = document.getElementById("group9") 
            var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"
            return details.style("visibility", "hidden")
    }))   

    var button3 = d3.select("#group3")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 3){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group2 = document.getElementById("group2")
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group2.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"
        
        return details.style("visibility", "hidden")
    }))   


    var button4 = d3.select("#group4")
    .on("click", (function(d) {
        console.log("hejhkre")
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 4){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group3 = document.getElementById("group3") 
        var group2 = document.getElementById("group2") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group3.style.visibility="hidden"
            group2.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"

        return details.style("visibility", "hidden")
    }))   


    var button5 = d3.select("#group5")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 5){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group2 = document.getElementById("group2") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group2.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"
       
        return details.style("visibility", "hidden")
    }))   


    var button6 = d3.select("#group6")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 6){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group2 = document.getElementById("group2")
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group2.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"

        return details.style("visibility", "hidden")
    }))   


    var button7 = d3.select("#group7")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 7){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group2 = document.getElementById("group2")
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group8 = document.getElementById("group8") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group2.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group8.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"
        return details.style("visibility", "hidden")
    }))   


    var button8 = d3.select("#group8")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 8){
                elements[i].style.display = 'none';
                } 
            }
        }
        var group1 = document.getElementById("group1")
        var group2 = document.getElementById("group2")
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group9 = document.getElementById("group9") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group2.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group9.style.visibility="hidden"
            topGroup.style.visibility="hidden"
        return details.style("visibility", "hidden")
    }))   
    var button9 = d3.select("#group9")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].Group != 9){
                elements[i].style.display = 'none';
                }  
            }
        }
        var group1 = document.getElementById("group1")
        var group2 = document.getElementById("group2")
        var group3 = document.getElementById("group3") 
        var group4 = document.getElementById("group4") 
        var group5 = document.getElementById("group5") 
        var group6 = document.getElementById("group6") 
        var group7 = document.getElementById("group7") 
        var group8 = document.getElementById("group8") 
        var topGroup = document.getElementById("topGroups")    

            group1.style.visibility="hidden"
            group2.style.visibility="hidden"
            group3.style.visibility="hidden"
            group4.style.visibility="hidden"
            group5.style.visibility="hidden"
            group6.style.visibility="hidden"
            group7.style.visibility="hidden"
            group8.style.visibility="hidden"
            topGroup.style.visibility="hidden"
        return details.style("visibility", "hidden")
    }))   
    
    var button10 = d3.select("#allGroups")
        .on("click", (function(d) {
            for(i=0;i<data.length;i++){
                var elements = document.getElementsByClassName("people");
                for(var i = 0, length = data.length; i < length; i++) {
                    elements[i].style.display = 'block';
                }
            }
            var group1 = document.getElementById("group1")
            var group2 = document.getElementById("group2")
            var group3 = document.getElementById("group3") 
            var group4 = document.getElementById("group4") 
            var group5 = document.getElementById("group5") 
            var group6 = document.getElementById("group6") 
            var group7 = document.getElementById("group7") 
            var group8 = document.getElementById("group8") 
            var group9 = document.getElementById("group9") 
            var topGroup = document.getElementById("topGroups")    
    
                group1.style.visibility="visible"
                group2.style.visibility="visible"
                group3.style.visibility="visible"
                group4.style.visibility="visible"
                group5.style.visibility="visible"
                group6.style.visibility="visible"
                group7.style.visibility="visible"
                group8.style.visibility="visible"
                group9.style.visibility="visible"
                topGroup.style.visibility="visible"  
            topGroup.style.visibility="visible"
            return details.style("visibility", "hidden")
    }))


    var buttonTop = d3.select("#topGroups")
    .on("click", (function(d) {
        for(i=0;i<data.length;i++){
            var elements = document.getElementsByClassName("people");
            for(var i = 0, length = data.length; i < length; i++) {
                if(data[i].GroupScore < 456){
                elements[i].style.display = 'none';
                } 
            }
        }

        group1.style.visibility="hidden"
        group2.style.visibility="hidden"
        group3.style.visibility="hidden"
        group4.style.visibility="hidden"
        group5.style.visibility="hidden"
        group6.style.visibility="hidden"
        group7.style.visibility="hidden"
        group8.style.visibility="hidden"
        group9.style.visibility="hidden"
    }))

    simulation.nodes(data)
        .on("tick",ticked)
        function ticked (){
            groupSvg
            .attr("cx",function(d){
                return d.x 
            })
            .attr("cy",function(d){
                return d.y  
            })
        } 

})
