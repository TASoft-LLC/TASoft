

$(document).ready(function() {

	var aul="<li><a href=\"";
	var aaul ="<li class=\"active\"><a href=\"";
	var cul ="</ul>";

	var cdiv = "</div>";
	var level1 = "../";
	var level = "";
	
	var navcommon="<div class=\"navbar navbar-default navbar-static-top\">"
            	+"<div class=\"container\">";
	var  navbar="<div class=\"navbar-header\">";
	var  navbutton = "<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"\.navbar-collapse\">"
                     + "<span class=\"icon-bar\"></span>"
                     + "<span class=\"icon-bar\"></span>"
                     + "<span class=\"icon-bar\"></span>"
                     + "</button>";
    var navheadlink = "<a class=\"navbar-brand\" href=\""
					+ level+"index.html\"><img src=\""
					+ level+"img/logo.png\" width=\"20%\""
					+" height=\"auto\" alt=\"logo\"/>TASoft</a>";
	var navheadlink1 = "<a class=\"navbar-brand\" href=\""
					+ level1+"index.html\"><img src=\""
					+ level1+"img/logo.png\" width=\"20%\""
					+" height=\"auto\" alt=\"logo\"/>TASoft</a>";
					
	var navbarhead = navbar+navbutton+navheadlink+cdiv;
	var navbarhead1 = navbar+navbutton+navheadlink1+cdiv;

	var indexlinkc = "index.html\">Home</a>";
	var indexlink = aul+indexlinkc;
	var indexlinka = aaul+indexlinkc;
	var indexlink1= aul+level1+indexlinkc;
	var aboutlinkc ="about.html\">About Us</a>";
	var aboutlinka = aaul+aboutlinkc;
	var aboutlink = aul+aboutlinkc;
	var aboutlink1= aul+level1+aboutlinkc;
	var faqlinkc ="faq.html\">FAQ</a>";
	var faqlink = aul+faqlinkc;
	var faqlinka= aaul+faqlinkc;
	var faqlink1= aul+level1+faqlinkc;
	var productlinkc = "products.html\">Products</a>";
	var productlink = aul+productlinkc;
	var productlinka = aaul+productlinkc;
	var productlink1 = aul+level1+productlinkc;
	var servicelinkc = "services.html\">Services</a>";
	var servicelink = aul+servicelinkc;
	var servicelinka = aaul+servicelinkc;
	var servicelink1 = aul+level1+servicelinkc;
	var contactlinkc = "contact.html\">Contact</a>";
	var contactlink = aul+contactlinkc;
	var contactlinka = aaul+contactlinkc;
	var contactlink1 = aul+level1+contactlinkc;
	var bloglinkc = "blog.html\" target=\"_blank\">Blog</a>";
	var bloglink = aul+bloglinkc
	var bloglinka = aaul+bloglinkc
	var bloglink1 = aul+level1+bloglinkc;
	
	var sciencelinkc = "science/science.html\">Foundational Science</a>";
	var sciencelink = aul+sciencelinkc;
	var sciencelink1= aul+level1+sciencelinkc;
	var resourcelinkc = "science/resources.html\">Resources</a>";
	var resourcelink = aul+resourcelinkc;
	var resourcelink1 = aul+level1+resourcelinkc;
	var scenariolinkc= "science/tradingscenarios.html\">Trading Scenarios</a>";
	var scenariolink = aul+scenariolinkc
	var scenariolink1 = aul+level1+scenariolinkc;

	var dropdownlink = "<li class=\"dropdown\">"
  					+"<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">"
                    +"Science<span class=\"caret\"></span></a>"  
                    +"<ul class=\"dropdown-menu\" >";

	var navdropdown = dropdownlink+sciencelink+resourcelink+scenariolink+cul;
	var navdropdown1= dropdownlink+sciencelink1+resourcelink1+scenariolink1+cul;

	var navcollapse = "<div class=\"navbar-collapse collapse \">"
                   +"<ul class=\"nav navbar-nav\">";

	var navindexlink = navcommon+navbarhead+navcollapse+indexlinka+aboutlink+faqlink
					+productlink+servicelink
					+navdropdown
					+contactlink+bloglink
					+cul+cdiv+cdiv+cdiv;
	var navaboutlink = navcommon+navbarhead+navcollapse+indexlink+aboutlinka+faqlink
					+productlink+servicelink
					+navdropdown
					+contactlink+bloglink
					+cul+cdiv+cdiv+cdiv;
	var navfaqlink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlinka
					+productlink+servicelink
					+navdropdown
					+contactlink+bloglink
					+cul+cdiv+cdiv+cdiv;
	var navproductlink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlink
					+productlinka+servicelink
					+navdropdown
					+contactlink+bloglink
					+cul+cdiv+cdiv+cdiv;
	var navservicelink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlink
					+productlink+servicelinka
					+navdropdown
					+contactlink+bloglink
					+cul+cdiv+cdiv+cdiv;
	var navcontactlink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlink
					+productlink+servicelink
					+navdropdown
					+contactlinka+bloglink
					+cul+cdiv+cdiv+cdiv;	
	var navcontactlink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlink
					+productlink+servicelink
					+navdropdown
					+contactlinka+bloglink
					+cul+cdiv+cdiv+cdiv;	
					
	var navbloglink = navcommon+navbarhead+navcollapse+indexlink+aboutlink+faqlink
					+productlink+servicelink
					+navdropdown
					+contactlink+bloglinka
					+cul+cdiv+cdiv+cdiv;				
 
	var navsublink = navcommon+navbarhead1+navcollapse+indexlink1+aboutlink1+faqlink1
					+productlink1+servicelink1
					+navdropdown1
					+contactlink1+bloglink1
					+cul+cdiv+cdiv+cdiv;	
	  
	$("#indexlink").html(navindexlink);
	$("#aboutlink").html(navaboutlink);
	$("#faqlink").html(navfaqlink);
	$("#productlink").html(navproductlink);
	$("#servicelink").html(navservicelink);
	$("#contactlink").html(navcontactlink);
	$("#bloglink").html(navbloglink);
		$("#sublink").html(navsublink);

	var navfootlink ="<div class=\"container  bg-secondary\">"
			+"<div class=\"row\">"
			+"<div class=\"col-lg-6\">"
			+"	<div class=\"copyright\">"
			+"			<p>"
			+"				<span>&copy; Copyright 2022 | All Rights Reserved -- TASoft LLC </span>"
			+"			</p>"
			+"		</div></div>"
			+"	<div class=\"col-lg-6\">"
			+"		<ul class=\"social-network\">"
			+"			<li><a style=\"color:white\" href=\"https://www.linkedin.com/in/frank-zhu-743600107\" "
			+"target=\"_blank\" data-placement=\"top\" title=\"Linkedin\">"
			+"<i class=\"fa fa-linkedin\"></i></a>"
			+"	</ul></div></div></div>";	
	
	$("#footlink").html(navfootlink);
	});


