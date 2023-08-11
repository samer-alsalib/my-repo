window.onload = function() {
	var x = 0;
	var userinfo = document.getElementById("userinfo");
	var uimenu = document.getElementById("uimenu");
	var twitterbg = document.getElementById("twitterbg");
	var twittericon = document.getElementById("twittericon");
	var twittertext = document.getElementById("twittertext");
	var facebookbg = document.getElementById("facebookbg");
	var facebookicon = document.getElementById("facebookicon");
	var facebooktext = document.getElementById("facebooktext");
	var youtubebg = document.getElementById("youtubebg");
	var youtubeicon = document.getElementById("youtubeicon");
	var youtubetext = document.getElementById("youtubetext");
	var whatsappbg = document.getElementById("whatsappbg");
	var whatsappicon = document.getElementById("whatsappicon");
	var whatsapptext = document.getElementById("whatsapptext");
	var faq = document.getElementById("FAQ");
	var faqtext = document.getElementById("FAQtext");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	var img5 = document.getElementById("img5");
	var leftphotosarrow = document.getElementById("leftphotosarrow");
	var rightphotosarrow = document.getElementById("rightphotosarrow");
	userinfo.onmouseover = function() {
		uimenu.style.opacity = "100";
		uimenu.style.transform = "translate(0, 0)";
		userinfo.style.boxShadow = "0px 4px 10px 1px rgb(20, 20, 20)";
	}
	userinfo.onmouseout = function() {
		uimenu.style.opacity = "0";
		uimenu.style.transform = "";
		userinfo.style.boxShadow = "none";
	}
	uimenu.onmouseover = function() {
		uimenu.style.opacity = "100";
		uimenu.style.transform = "translate(0, 0)";
	}
	uimenu.onmouseout = function() {
		uimenu.style.opacity = "0";
		uimenu.style.transform = "";
	}
	faq.onmouseover = function() {
		faq.style.width = "300px";
		faq.style.height = "400px";
		faq.style.borderRadius = "2.5% 2.5% 2.5% 2.5%";
		faqtext.style.opacity = "0";
	}
	faq.onmouseout = function() {
		faq.style.width = "50px";
		faq.style.height = "50px";
		faq.style.borderRadius = "50% 50% 50% 0";
		faqtext.style.opacity = "100";
	}
	
	twitterbg.onmouseover = function() {
		twittericon.style.transform = "translate(0, -150%) scale(1.5)";
		twittertext.style.opacity = "100";
		twittertext.style.transform = "translate(0, 0) scale(1.2)";
	}
	twitterbg.onmouseout = function() {
		twittericon.style.transform = "translate(0, 0)";
		twittertext.style.opacity = "0";
		twittertext.style.transform = "";
	}
	facebookbg.onmouseover = function() {
		facebookicon.style.transform = "translate(0, -150%) scale(1.5)";
		facebooktext.style.opacity = "100";
		facebooktext.style.transform = "translate(0, 0) scale(1.2)";
	}
	facebookbg.onmouseout = function() {
		facebookicon.style.transform = "translate(0, 0)";
		facebooktext.style.opacity = "0";
		facebooktext.style.transform = "";
	}
	youtubebg.onmouseover = function() {
		youtubeicon.style.transform = "translate(0, -150%) scale(1.5)";
		youtubetext.style.opacity = "100";
		youtubetext.style.transform = "translate(0, 0) scale(1.2)";
	}
	youtubebg.onmouseout = function() {
		youtubeicon.style.transform = "translate(0, 0)";
		youtubetext.style.opacity = "0";
		youtubetext.style.transform = "";
	}
	whatsappbg.onmouseover = function() {
		whatsappicon.style.transform = "translate(0, -150%) scale(1.5)";
		whatsapptext.style.opacity = "100";
		whatsapptext.style.transform = "translate(0, 0) scale(1.2)";
	}
	whatsappbg.onmouseout = function() {
		whatsappicon.style.transform = "translate(0, 0)";
		whatsapptext.style.opacity = "0";
		whatsapptext.style.transform = "";
	}
  img1.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
	rightphotosarrow.onclick = function() {
		switch(x){
			case 0:
				img1.setAttribute("class", "leftside");
				img2.setAttribute("class", "displayed");
				/*img1.style.transform = "translate(-75%) rotateY(80deg) scale(.8)";
        		img1.style.boxShadow = "";
				img1.style.opacity = ".8";
				img2.style.transform = "translate(0) rotateY(0deg)";
        		img2.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img2.style.opacity = "1";*/
				img1.style.zIndex = "10";
				leftphotosarrow.style.filter = "invert(100%)";
				x++
				break;
			case 1:
				img2.setAttribute("class", "leftside");
				img3.setAttribute("class", "displayed");
				/*img2.style.transform = "translate(-75%) rotateY(80deg) scale(.8)";
        		img2.style.boxShadow = "";
				img2.style.opacity = ".8";
				
				img3.style.transform = "translate(0) rotateY(0deg)";
        		img3.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img3.style.opacity = "1";*/
				img2.style.zIndex = "20";
				x++
				break;
			case 2:
				img3.setAttribute("class", "leftside");
				img4.setAttribute("class", "displayed");
				/*img3.style.transform = "translate(-75%) rotateY(80deg) scale(.8)";
        		img3.style.boxShadow = "";
				img3.style.opacity = ".8";
        		
				img4.style.transform = "translate(0) rotateY(0deg)";
        		img4.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img4.style.opacity = "1";*/
				img3.style.zIndex = "30";
				x++
				break;
			case 3:
				img4.setAttribute("class", "leftside");
				img5.setAttribute("class", "diplayed");
				/*img4.style.transform = "translate(-75%) rotateY(80deg) scale(.8)";
        		img4.style.boxShadow = "";
				img4.style.opacity = ".8";
        		
				img5.style.transform = "translate(0) rotateY(0deg)";
        		img5.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img5.style.opacity = "1";*/
				img4.style.zIndex = "40";
				rightphotosarrow.style.filter = "invert(0)";
				x++
				break;
			case 4:
				break;
		}
	}
	leftphotosarrow.onclick = function() {
		switch(x){
			case 4:
				img5.setAttribute("class", "rightside");
				img4.setAttribute("class", "displayed");
				/*img5.style.transform = "translate(75%) rotateY(-80deg) scale(.8)";
        		img5.style.boxShadow = "";
				img5.style.opacity = ".8";
				
				img4.style.transform = "translate(0) rotateY(0deg)";
        		img4.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img4.style.opacity = "1";*/
				img5.style.zIndex = "10";
				rightphotosarrow.style.filter = "invert(100%)";
        		x--
				break;
			case 3:
				img4.setAttribute("class", "rightside");
				img3.setAttribute("class", "displayed");
				/*img4.style.transform = "translate(75%) rotateY(-80deg) scale(.8)";
        		img4.style.boxShadow = "";
				img4.style.opacity = ".8";
				
				img3.style.transform = "translate(0) rotateY(0deg)";
        		img3.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img3.style.opacity = "1";*/
				img4.style.zIndex = "20";
        		x--
				break;
			case 2:
				img3.setAttribute("class", "rightside");
				img2.setAttribute("class", "displayed");
				/*img3.style.transform = "translate(75%) rotateY(-80deg) scale(.8)";
        		img3.style.boxShadow = "";
				img3.style.opacity = ".8";
				
				img2.style.transform = "translate(0) rotateY(0deg)";
        		img2.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img2.style.opacity = "1";*/
				img3.style.zIndex = "30";
        		x--
				break;
			case 1:
				img2.setAttribute("class", "rightside");
				img1.setAttribute("class", "displayed");
				/*img2.style.transform = "translate(75%) rotateY(-80deg) scale(.8)";
        		img2.style.boxShadow = "";
				img2.style.opacity = ".8";
				
				img1.style.transform = "translate(0) rotateY(0deg)";
        		img1.style.boxShadow = "0rem 1rem 2rem rgb(50, 50, 50)";
				img1.style.opacity = "1";*/
				img2.style.zIndex = "40";
				leftphotosarrow.style.filter = "invert(0)";
        		x--
				break;
			case 0:
				break;
		}
	}
}