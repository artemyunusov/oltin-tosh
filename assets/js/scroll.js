let lastScrollTop = 0;
let scrollTimeout;
let header = document.querySelector('.header');
let logo = document.querySelector('.header-l-img');

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("scroll", , false);

	window.addEventListener('scroll', function(){
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(onScroll, 100);
	}, false);

  function onScroll(){ // or window.addEventListener("scroll"....
    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
       // downscroll code
       if(header){
         header.classList.add('scroll-d');
         logo.src = "./assets/images/logo-scroll.png";
       }
      //  console.log("scroll dwn");
    } else {
       // upscroll code
         header.classList.remove('scroll-d');
         logo.src = "./assets/images/logo.png";
      //  console.log("scrll up");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }