$(document).ready(function() {
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

//Crow
$('#crow').on('mouseenter',function(){
	$('#crow').css('opacity', 0);
	$('#project1').toggle();
	$('#helicopter').css('z-index', -1);
});
$('#crow').on('mouseleave',function(){
	$('#crow').css('opacity', 1);
	$('#project1').toggle();
	$('#helicopter').css('z-index', 'auto');
});
//Helicopter
$('#helicopter1, #helicopter2').on('mouseenter',function(){
	$('#helicopter').css('opacity', 0);
	$('#project2').toggle();
});
$('#helicopter1, #helicopter2').on('mouseleave',function(){
		$('#helicopter').css('opacity', 1);
		$('#project2').toggle();
});

//close button
$('#close').click(function(){
	$('#alexa-project').css('display', 'none');
	$('#java-project').css('display', 'none');
	$('#python-project').css('display', 'none');
});

//Amazon Alexa
$('#alexa, #bomb2').on('mouseenter',function(){
	$('#alexa-project').toggle();
	$('#alexa-project').css('z-index', 10);
});
$('#alexa, #bomb2').on('mouseleave',function(){
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
});
