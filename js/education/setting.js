

$(document).ready(function() {

 	var headtext = "<h5>Short Term Forecasting guided trading scenarios:</h5>";

	var ul="<ul>";
	var cul = "</ul>"; 	
	var commonstyle = "<li><a style=\"color:white\" href=\"";
	var linka1=commonstyle+"../education/signal-sector.html\">"
	+"Sector Movement Combination</a>"
	var linka2 = commonstyle+"../education/ureverse.html\">"
	+"U reverse on its own</a>";
	var linka3=commonstyle+"../education/other-doublelows.html\">Double lows</a>";	
 	var linka4 = commonstyle+"../education/other-oversold.html\">Oversold</a>"	

	var titlea = "<li  style=\"color:black\">Looking for bottom reverse";
	var linka = titlea+ul+linka1+linka2+linka3+linka4+cul;
	
	var linkb1=commonstyle+"../education/signal-er.html\">"
	+"Following Positive ER</a>";
	var linkb2 = commonstyle+"../education/signal-positivenews.html\">"
	+"Following Positive News</a>";
	var titleb ="<li style=\"color:black\">Up trend trading";
	var linkb = titleb+ul+linkb2+cul;
	
	var linkc1=commonstyle+"../education/bbandbottom.html\">"
	+"Bollinger Bands trading strategy combination</a>";
	var linkc2=commonstyle+"../education/bbandnoise.html\">Bollinger Bands trading strategy: noise</a>";
	var titlec="<li style=\"color:black\">Noise trading";
	var linkc = titlec+ul+linkc2+cul;
	

 	var linkd3=commonstyle+"../education/other-overbought.html\">Overbought</a>";	
	var titled="<li style=\"color:black\">Other Trading Signals Combination";
	var linkd = titled+ul+linkd3+cul;
	var text = headtext + ul+linka+linkb+linkc+cul;     
	$("#commonlink").html(text);
		
	var commonh="<div class=\"heading text-left\">"
         + "<h2>Short Term Trading Scenarios</h2>"
      +"<h4>Short term trading is based on TASoft LLC daily forecasting, "
	+"which is forecasting on stock daily close price."
	+"TASoft LLC has conducted trading practices with its forecasting for several years in"
    +" the process of improving our mathematical solution. "
	+"While forecasting alone already shows high accuracy, it might gain confidence with "
	+"cuing from other trading indicators and stock fundamental financials."
	+"As part of forecasting guided stock trading education, "
	+"we summaries optimized use scenarios with the TASoft LLC based forecasting trading. "
	+ "The trading scenarios listed here are work in process. They are used to illustrate trading"
	+ " scenarios only. Any suggested trading scenarios"
	+ "are encouraged and we might consider as add-on. <a style=\"color:white\" href=\"../contact.html\">Contact Us for Suggestions</a></h4>"
     +"</div>";	
	$("#commonheader").html(commonh);
	
	});


