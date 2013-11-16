/* 
 * Julien Roy
 * 11.14.13
 * STCSS preliminary code
 */


//create a new file and insert the css into that file and name the file when the javascript is being ran.
//Create multiple options that can be controlled by the user.


var tag = 'code',
    tab = '&#09',//This is a TAB, you can change it to spaces if you prefer using &nbsp;
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
    }
    css = '',
    maxDepdth = 0,
    allTags = [],
    tagNames = [],
    ids = [],
    classes = [],
    recursive = function($node) {
        $node.children().each(function(){
            allTags.push(this);
            recursive($(this));
        });
    },
    append = function(content) {
        return $(tag).append(content);
    };

recursive($('body'));

css+=ul.o;
    for (i=0; i < allTags.length; i++) {
        liDepth = $(allTags[i]).parents().length;
        tagName = allTags[i].tagName.toLowerCase();
        if (tagName != 'script') {
            css+=li.o;
                for (j=2; j < liDepth; j++) css+=tab;
                /**********************
                 * ATTRIBUTES
                 **********************/
                attr = allTags[i].attributes;
                if (attr.length) {
                    for (k=0; k < attr.length; k++) {
                        attrName = attr[k].nodeName;
                        attrValue = attr[k].nodeValue;
                        switch (attrName) {
                            case 'id':
                                ids.push(attrValue);
                                css+='#'+attrValue;
                                break;
                            case 'class':
                                classes.push(attrValue);
                                var rpl = attrValue.replace(' ', '.');
                                css+='.'+rpl;
                                break;
                            case 'href':
                                css+=tagName;
                                break;
                            case 'src':
                                css+=tagName;
                                break;
                            default:
                                css+='['+attrName+'='+attrValue+']';
                                break;
                        }
                    }
                } else {
                    tagNames.push(tagName);
                    
                    if (tagNames[tagNames.length-1] == tagName) {
                        css+=tagName;
                    } else {
                        css+=tagName;
                    }
                }
                css+=brackets.o;
                //for (j=2; j < liDepth; j++) css+=tab;
                css+=brackets.c;
            css+=li.c;
        }
    }
css+=ul.c;

append(css);


/*
for (var i=0; i < allTags.length; i++) {
    css+='<li>';
        currentTag = allTags[i];
        if (allTags[i-1]) {
            
            //console.log('Current: '+currentTag.tagName);
            //console.log(' | Parent:'+currentTag.parentNode.tagName);
            //console.log('   | Previous: '+allTags[i-1].tagName);
            
            if (currentTag.parentNode.tagName == allTags[i-1].tagName || 
                currentTag.previousElementSibling.tagName == allTags[i-1].tagName) {
                css+='<ul>';
                    css+='<li>';
                        css+=currentTag.tagName.toLowerCase() + brackets;
                    css+='</li>';
                css+='</ul>';
            } else {
                css+=currentTag.tagName.toLowerCase() + brackets;
            }
            
        } else {
            css+=currentTag.tagName.toLowerCase() + brackets;
        }
        console.log(allTags);
    /*
        if (allTags[i].children.length) {
            css+='<ul>';
            var children = allTags[i].children;
            for (var h=0; h < children.length; h++) {
                css+='<li>';
                css+=children[h].tagName.toLowerCase();
                css+='</li>';
            }
            css+='</ul>';
        }
    /*
        if (allTags[i].childElementCount) {
            css+=(allTags[i].tagName.toLowerCase());
            
            css+='<ul>';
                for(var j=0; j < allTags[i].childElementCount; j++) {
                    css+='<li>'+(allTags[i+1+j].tagName.toLowerCase())+'</li>';
                }
            css+='</ul>';
            
        } else {
            css+=(allTags[i].tagName.toLowerCase());
        }

    css+='</li>';
}
css+='</ul>';


append(css);

/*
for (i; i < tags.length; i++) {
    var tagNames = tags[i].tagName.toLowerCase(),
        numTagAttributes = tags[i].attributes.length;
    
    css += '<br/><span class=\'selector\'>' + tagNames;
    
    if (numTagAttributes > 0) {
        css += '<span class=\'selector\'>';
        for (var x = 0; x < numTagAttributes; x++) {
            if (tags[i].attributes[x].nodeName == selectorCharacter[0][0])
                css += selectorCharacter[0][1];
            if (tags[i].attributes[x].nodeName == selectorCharacter[1][0])
                css += selectorCharacter[1][1];
                css += tags[i].attributes[x].nodeValue;
        }
        css += '</span>';
    }
    css += ' {';
    css += '<br/>';
    css += '<span class=\'comment\'>';
    css += '    ';
    css += 'property:value';
    css += '</span>';
    css += '<br/>';
    css += '}';
    css += '</span>';
}*/

