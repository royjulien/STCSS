#STCSS

Welcome to the STCSS - Style The Cascading Style Sheets!

STCSS is a new standard for formatting CSS. It indents your CSS selectors based on your DOM making it easy for developers to read and know how each CSS declaration is nested.

***
## How does it work?
STCSS is still in Alpha.
- Download the project
- Copy any inner body HTML you've created
- Paste your HTML code in the index.html template
- Launch index.html in any browser

Tada, Check out your rendered Styled CSS, indented according to your HTML DOM.

## HTML Basics
When writing your HTML, keep efficiency in mind. ID's are the most efficient, universal are the least.
Use dash as the depth increases.

    <section id='wrapper'>
        <header id='header'>
            <h1 id='header-h1'>
                <a class='link' href='#'>Style the Styles</a>
            </h1>
            <div id='header-slogan'></div>
        </header>
    </section>

## CSS Creation
STCSS develops all your core CSS for you.

## STCSS Formatting
You can develop your own CSS based on STCSS formatting by using the same indentation that your HTML document has.

Example:

    #wrapper {}
        #header {}
            #header-h1 {}
                .link {}
            #header-slogan {}

## CSS Declaration
[Google's declaration order](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml#Declaration_Order) is set as Alphabetize however I has a different approach to offer.

While an alphabetical approach is consistent it lacks the design and behavior aspect of a developer.
This approach is consistent and makes sense to a developer the elements priorities.

    #wrapper {
        /*Visibility*/
        display: none;
        opacity: .5;
        zoom: .8;

        /*Position*/
        position: relative;

        /*Behaviors*/
        float: right
        clear: both;
        overflow: hidden;
        ...

        /*Location*/
        top: 5px;
        right: 2px;
        bottom: 1px;
        left: 0;

        /*Box Model*/
        margin: 10px 5px;
        padding: 5px 2px;
        /*Box Styles*/
        border: 1px dashed white;
        -webkit-border-radius: 5px;
         -khtml-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;

        /*Styles*/
        background: red;
        ...

        /*Text*/
        font: italic 300 13px/21px helvetica, arial, sans-serif;
        text-decoration: none;
        ...

        /*Everything else*/

    }
