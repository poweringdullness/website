/* sourced from https://tantek.com/log/2004/undohtml.css */
/* undohtml.css */
/* (CC) 2004 Tantek Celik. Some Rights Reserved.             */
/*   http://creativecommons.org/licenses/by/2.0                   */
/* This style sheet is licensed under a Creative Commons License. */

/* Purpose: undo some of the default styling of common (X)HTML browsers */


/* link underlines tend to make hypertext less readable, 
   because underlines obscure the shapes of the lower halves of words */
:link,:visited { text-decoration:none }

/* no list-markers by default, since lists are used more often for semantics */
ul,ol { list-style:none }

/* avoid browser default inconsistent heading font-sizes */
/* and pre/code too */
h1,h2,h3,h4,h5,h6,pre,code { font-size:1em; }

/* remove the inconsistent (among browsers) default ul,ol padding or margin  */
/* the default spacing on headings does not match nor align with 
   normal interline spacing at all, so let's get rid of it. */
/* zero out the spacing around pre, form, body, html, p, blockquote as well */
/* form elements are oddly inconsistent, and not quite CSS emulatable. */
/*  nonetheless strip their margin and padding as well */
ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,body,html,p,blockquote,fieldset,input
{ margin:0; padding:0 }

/* whoever thought blue linked image borders were a good idea? */
a img,:link img,:visited img { border:none }

/* de-italicize address */
address { font-style:normal }

/* more varnish stripping as necessary... */
