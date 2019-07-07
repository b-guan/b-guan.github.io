$(document).ready(function() {
	//address bar on mobile browsers
	$('.parallax, .hero, #bryan-guan, #about, #project, #among-other-things, #contact, #about-section, #highlight-section, #other-things-sec, .footer').each(function(){
		var height = $(this).height();
		$(this).css('height', height);
	});
	/*Parallax Effect*/
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		$('.hero').css('top', -0.8*(scrollTop));
		$('#bryan-guan').css('top',-(0.8*(scrollTop)));
		$('#about').css('top',-(0.8*(scrollTop)));
		$('#project').css('top',-(0.8*(scrollTop)));
		$('#among-other-things').css('top',-(0.8*(scrollTop)));
		$('#contact').css('top',-(0.8*(scrollTop)));
	});
	
	/*Smooth Scroll*/
	$('.href-project, .href-about, .href-contact, .href-other-things').click(function(e){
		var scrollTo = $(this).attr('href');
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(scrollTo).offset().top}, 750);
		});
	
	/*menu animation*/
	$('#about').hover(
		function(){
			$('#about').attr('src', 'img/xabout.png');
		}, function(){
			$('#about').attr('src', 'img/about.png');
		}
	);
	
	$('#project').hover(
		function(){
			$('#project').attr('src', 'img/xproject.png');
		}, function(){
			$('#project').attr('src', 'img/project.png');
		}
	);
	
	$('#contact').hover(
		function(){
			$('#contact').attr('src', 'img/xcontact.png');
		}, function(){
			$('#contact').attr('src', 'img/contact.png');
		}
	);
	
	$('#among-other-things').hover(
		function(){
			$('#among-other-things').attr('src', 'img/xamong-other-things.png');
		}, function(){
			$('#among-other-things').attr('src', 'img/among-other-things.png');
		}
	);
	
	/*Project Spotlight*/
	$('.iconWrapper').on('mouseenter',function(){
		$(this).css('opacity', 0);
		$('#highlight-section').css('background', 'rgba(0,0,0,0.8)');
		$(this).css('z-index', 11);
	});
	$('.iconWrapper').on('mouseleave',function(){
		$(this).css('opacity', 1);
		$('#highlight-section').css('background', 'rgba(0,0,0,0)');
		$(this).css('z-index', 'auto');
	});
	
	//Rush
	$('#rush').on('mouseenter',function(){
		$('#expl-blackjack').toggle();
		$('#expl-blackjack').css('z-index', 10);
	});
	$('#rush').on('mouseleave',function(){
			$('#expl-blackjack').toggle();
			$('#expl-blackjack').css('z-index', 'auto');
	});
	
	//close button
	$('#close').click(function(){
		$('#alexa-project').css('display', 'none');
		$('#java-project').css('display', 'none');
		$('#python-project').css('display', 'none');
	});
	
	
	//Amazon Alexa
	$('#alexa').on('mouseenter',function(){
		$('#alexa-project').toggle();
		$('#alexa-project').css('z-index', 10);
	});
	$('#alexa').on('mouseleave',function(){
			$('#alexa-project').toggle();
			$('#alexa-project').css('z-index', 'auto');
	});
	
	//Java GUI project
	$('#triangles').on('mouseenter',function(){
		$('#java-project').toggle();
		$('#java-project').css('z-index', 10);
	});
	$('#triangles').on('mouseleave',function(){
		$('#java-project').toggle();
		$('#java-project').css('z-index', 'auto');
	});
	
	//Python project
	$('#python').on('mouseenter',function(){
		$('#python-project').toggle();
		$('#python-project').css('z-index', 10);
	});
	$('#python').on('mouseleave',function(){
		$('#python-project').toggle();
		$('#python-project').css('z-index', 'auto');
	});
	
	//Website
	$('#webpage').on('mouseenter',function(){
		$('#web-project').toggle();
		$('#web-project').css('z-index', 10);
	});
	$('#webpage').on('mouseleave',function(){
			$('#web-project').toggle();
			$('#web-project').css('z-index', 'auto');
	});

});
