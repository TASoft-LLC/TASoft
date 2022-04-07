

$(document).ready(function() {
	
	var commonstyle = "<li><a style=\"color:white\" href=\"";
	var linka=commonstyle+"../education/signal-sector.html\">"
	+"Sector Movement Combination</a>"
	var titlea = "<li>Sector Movement Combination";
	var linkb=commonstyle+"../education/signal-er.html\">"
	+"Following Positive ER</a>"
	+commonstyle+"../education/signal-positivenews.html\">"
	+"Following Positive News</a>";
	var titleb ="<li>Trading Signal Combination";
	var linkc=commonstyle+"../education/bbandbottom.html\">"
	+"Bollinger Bands trading strategy combination</a>"	
	+commonstyle+"../education/bbandnoise.html\">Bollinger Bands trading strategy: noise</a>";
	var titlec="<li>Bollinger Bands Combination";
	var linkd=commonstyle+"../education/other-doublelows.html\">Double lows</a>"
 	+commonstyle+"../education/other-oversold.html\">Oversold</a>"	
 	+commonstyle+"../education/other-overbought.html\">Overbought</a>";	
	var titled="<li>Other Trading Signals Combination";

	var ul="<ul>";
	var cul = "</ul>"; 
	var text = ul+titlea+ul+linka+cul+titleb+ul+linkb+cul+titlec+ul+linkc+cul+titled+ul+linkd+cul+cul;     
	$("#commonlink").html(text);
		
	var commonh="<div class=\"heading text-left\">"
         + "<h2>Short Term Trading Scenarios</h2>"
      +"<p>Short term trading is based on TASoft LLC daily forecasting. "
	+"TASoft LLC has conducted trading practices with its forecasting for several years in"
    +" the process of improving our mathematical solution. "
	+"As part of forecasting guided stock trading education, "
	+"we summaries optimized use scenarios with the TASoft LLC based forecasting trading. </p>"
     +"</div>";	
	$("#commonheader").html(commonh);
	
	});


