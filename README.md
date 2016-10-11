# jquery.fixedheaderscroll.js
## This smooth scroll jQuery plugin automatically adjust the offset difference of the fixed header height (or any element you set).

TASKO inc.
http://tasko.jp/

### Features
* Smooth scroll
* Auto adjust the fixed header

### How to use
```html
<!-- jQery from Google Hosted Libraries -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- jquery.fixedheaderscroll.js -->
<script src="/js/jquery.fixedheaderscroll.js"></script>
<script>
	$("a[href^='#']").fixedHeaderScroll( {
		headerSelector: '#header',
	});
</script>
```

### Options
**headerSelector**  
You have to designate header in a website.
```
default: 'header'
option: (string) jQuery selector or (boolean) false
```

**offset**  
You can offset the scroll position.
```
default: 0
option: (integer)
```

**smooth**  
You can decide if you use smooth scroll or not.
```
default: true
option: (boolean) true, false
```

**smoothDuration**  
Scroll speed. (in ms)
```
default: 300
option: (integer)
```

**smoothEasing**  
Scroll easing.
```
default: 'linear'
option: (string) jQuery easing.
```
