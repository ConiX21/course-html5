

$().ready(function(){
		$("ul.ss_menu").hide();

		$("p#first_step").next("p").hide();
		$("a#first").click(function(){
			$("#p_step").slideToggle("fast");
		});	

		$("a.share").click(function(){
				var a=window,
				b=document,
				c=encodeURIComponent,
				d=a.open("http://www.easylinkr.com/popup/?link="+c(b.location)+"&title="+c(b.title),"lnkt_popup","left="+((a.screenX||a.screenLeft)+10)+",top="+((a.screenY||a.screenTop)+10)+",height=500px,width=440px,resizable=1,alwaysRaised=1,scrollbars=1");
				a.setTimeout(function(){d.focus()},300)
			}
		);
						   


		$("a#extender").toggle( 
			function(){
				$(".right_area").hide("fast"); 
				$(".inner_banner").width('686px'); 
				$("#linksbar").width('700px'); 
				$(this).html('<img src="/images/reduire.png" alt="Reduire" />'); 
			} , 
			function(){
				$(".right_area").show("fast"); 
				$(".inner_banner").width('475px'); 
				$("#linksbar").width('507px'); 
				$(this).html('<img src="/images/etendre.png" alt="Etendre" />');
			}
		);

		$("a.innermenu_hover").click(function(){
			$("#hider").slideToggle("fast");
			
			if ( $(this).text() == 'Afficher'){
				$(this).html( 'Masquer' );
			}else{
				$(this).html( 'Afficher' );
			}
		});	

		$("a.morelink").click(function(){
			$(this).next("ul.ss_menu").slideToggle("fast");
		});	

       // add a "rel" attrib if Opera 7+  
       if(window.opera) {  
           if ($("a.jqbookmark").attr("rel") != ""){ // don't overwrite the rel attrib if already set  
               $("a.jqbookmark").attr("rel","sidebar");  
           }  
       }  
     
       $("a.jqbookmark").click(function(event){  
           event.preventDefault(); // prevent the anchor tag from sending the user off to the link  
           var url = this.href;  
           var title = this.title;  
     
           if (window.sidebar) { // Mozilla Firefox Bookmark  
               window.sidebar.addPanel(title, url, "");  
           } else if( window.external ) { // IE Favorite  
               window.external.AddFavorite( url, title);  
           } else if(window.opera) { // Opera 7+  
               return false; // do nothing - the rel="sidebar" should do the trick  
           } else { // for Safari, Konq etc - browsers who do not support bookmarking scripts (that i could find anyway)  
                alert('Unfortunately, this browser does not support the requested action, please bookmark this page manually.');  
           }  
     
       });  
   });  	
