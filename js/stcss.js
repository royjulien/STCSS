/*! STCSS v1.3 Beta | Julien Roy - royjulien.com | 12.03.13 */

/******************************************************
 * BUG: > 2 classes on a single tag not working
 ******************************************************/
var checkPaceStatus = function() {
	if ($('body').attr('class').trim() === 'pace-done') {
		$('#wrapper').fadeIn(333);
		clearInterval(intrvl);
		
		var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-box"), {
			theme: 'monokai',
			mode: 'xml',
			htmlMode: true,
			lineNumbers: true,
			lineWrapping: true,
			matchBrackets: true
		}),
		i = 0,
		processTag = '#generate',
		renderTag = 'code',
		indentation = '&nbsp;&nbsp;&nbsp;&nbsp;',// For Tab use: \t or &#09
		brackets = {
			o : ' {',
			c : '}'
		},
		ul = {
			o : '<ul>',
			c : '</ul>'
		},
		li = {
			o : '<li>',
			c : '</li>'
		},
		cssComment = '<span class="comment">/* MAIN CSS <br/> ********************/ <br/></span>',
		globalCssComment =  '<span class="comment">/* GLOBALS <br/> ********************/ <br/></span>',
	
		stcss = function () {
			'use strict';
	
			var globalCss = '',
				css = '',
				warning = '',
				allTags = [],
				tagArray = [],
				attArray = [],
				ids = [],
				classes = [],
				recursive = function ($node) {
					$node.children().each(function () {
						allTags.push(this);
						recursive($(this));
					});
				},
				append = function (content) {
					return $(renderTag).append(content);
				};
	
			// go through the entire dom
			recursive($(processTag));
	
			globalCss += ul.o;
			css += ul.o;
				for (i = 0; i < allTags.length; i += 1) {
					var liDepth = $(allTags[i]).parents().length,
						tagName = allTags[i].tagName.toLowerCase();
	
					if (tagName !== 'script') {
						// attributes
						var attr = allTags[i].attributes;
						if (attr.length) {
							for (var k = 0; k < attr.length; k += 1) {
								var attrName = attr[k].nodeName,
									attrValue = attr[k].nodeValue;
	
								// Duplicate ID's
								if (ids.indexOf(attrValue) > 0){
									warning += '<span class="warning">';
									warning += 'Duplicate Found: ';
									warning += '#'+attrValue;
									warning += '</span><br/>';
								} else if (attArray.indexOf(attrValue) < 0) {
									attArray.push(attrValue);
	
									if (attrName == 'id' || attrName == 'class') {
										css += li.o;
										for (var j = 2; j < liDepth; j += 1) css+=indentation;
										switch (attrName) {
											case 'id':
												ids.push(attrValue);
												css += '#'+attrValue;
												css += brackets.o;
												//for (j = 2; j < liDepth; j += 1) css+=indentation;
												css += brackets.c;
												break;
											case 'class':
												classes.push(attrValue);
												var rpl = attrValue.replace(' ', '.');
												css += '.'+rpl;
												css += brackets.o;
												//for (j = 2; j < liDepth; j += 1) css+=indentation;
												css += brackets.c;
												break;
										}
										css += li.c;
									}
								}
							}
						} else if (tagName == 'header' || tagName == 'nav' || tagName == 'footer') {
							for (var j = 2; j < liDepth; j += 1) css+=indentation;
							// Adds comments to majorags
							css += '<span class="comment">';
								css += '/* '+tagName.toUpperCase()+' */';
							css += '</span><br/>';
							for (var j = 2; j < liDepth; j += 1) css += indentation;
							css += tagName;
							css += brackets.o;
							//for (var j = 2; j < liDepth; j += 1) css += indentation;
							css += brackets.c;
						} else {
							if (tagArray.indexOf(tagName) < 0) {
								tagArray.push(tagName);
								globalCss += li.o;
									globalCss += tagName;
									globalCss += brackets.o;
									globalCss += brackets.c;
								globalCss += li.c;
							}
						}
					}
				}
			globalCss += ul.c;
			css += ul.c;
	
			if (warning.length) append(warning);
			if (globalCss.length) globalCss = globalCssComment + globalCss;
			append(globalCss);
	
			if (css.length) css = cssComment + css;
			append(css);
		};
	
		htmlEditor.on('change',function(cMirror) {
			this.value = cMirror.getValue();
		
			$('#generate').html($(this.value));
			//clear board if not empty
			if ($(renderTag).html().length > 0)
				$(renderTag).html('')
			stcss();
		});
		
		stcss();
	}
},intrvl = setInterval(checkPaceStatus, 100);