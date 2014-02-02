#STCSS

Welcome to STCSS - Style The Cascading Style Sheets!

STCSS is a new standard for formatting CSS. It indents your CSS selectors based on your DOM making it easy for developers to read and know how each CSS selector is nested.

***
## How does it work?
STCSS is now in Beta. [Live Demo](http://royjulien.com/stcss)
- Download the project
- Launch index.html in any browser
- Either paste your HTML in the HTML box or start typing

Tada, your CSS is created live and indented according to your DOM.

## STCSS Formatting
You can develop your own CSS based on STCSS formatting by using the same indentation as your HTML.

HTML example:

    <section id='wrapper'>
        <header id='header'>
            <h1 id='header-h1'>
                <a class='link' href='#'>Style the Styles</a>
            </h1>
            <div id='header-slogan'></div>
        </header>
    </section>
    
Would be written:

    #wrapper {}
        #header {}
            #header-h1 {}
                .link {}
            #header-slogan {}
