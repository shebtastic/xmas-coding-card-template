# Xmas Coding

## guide

> 00/blank

starting off with the blank project, let's explain the structure and what we're about to build.

> 💡 Maybe show a final card as a teaser?

```
.
├── README.md // you're here
├── css // all our stylings go in this folder
│   └── style.css // preferrably this file
├── images // the images we're going to pick from, unless you want to upload your own. that image should also go here.
│   ├── bokeh-ornament.jpg
│   ├── bokeh-tree.jpg
│   ├── candy-cane.jpg
│   ├── candy-heart.jpg
│   ├── christmas-lights.jpg
│   ├── cones-and-cookies.jpg
│   ├── doorway.jpg
│   ├── mouse-in-socks.jpg
│   ├── nutcracker.jpg
│   ├── presents-under-tree.jpg
│   ├── snowy-cones.jpg
│   ├── sugar-cookies.jpg
│   ├── tree-decorations.jpg
│   └── white-tree-decorations.jpg
├── index.html // our landing page
├── js // everything that gives our page interactivity
│   └── script.js // this file will import some functions and
│   // ignore all of these
├── package-lock.json
├── package.json
├── sandbox.config.json
└── .there-be-dragons
```

### semantic html

> 01/semantic_html

#### Explainer

- [Semantics](https://developer.mozilla.org/en-US/docs/Glossary/semantics)
- [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
- [order of headlines](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#accessibility_concerns)
- [paragraphs in general](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

we want to use [landmarks](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#landmark) like [`<main>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main#landmark) as descriptively as possible. since the card is going to be our core functionality, this will be part of our main tag.

- HTML is short for `HyperText Markup Language`.
- It is giving content on websites `meaning and structure`. You can imagine HTML as the skeleton
  or the most basic building block of the Web.

Let's analyze the word for more
clarification:

- `Hypertext`: Refers to the ability of HTML to create links that link one webpage to another. (Either on a single website or in between different websites.) This is a fundamental aspect of the web and the idea behind the "world wide" interconnection.
- `Markup Language`: Refers to a syntax that uses specific element to structure or format a document. You have already learned about a markup language, which is called "Markdown". While Markdown has a very simple syntax and is primarily used for formatting, HTML is more complex and its primarily used to structure a document.

- `HTML element`: every piece of content in a HTML document is placed inside of an HTML element
- `HTML tags`: the elements are written in form of HTML tags, meaning surrounded by `<>` and
  `</>`
- `HTML attributes`: some HTML elements need additional information in order to work properly. This information is given by HTML attributes
- `local attributes`: There are attributes that are specific to some HTML elements, for example `src`, which only makes sense if a resource is supposed to be embedded into the webpage (e.g. images or videos)
- `global attributes`: There are also attributes that can be added to any kind of element. (e.g. `class`, `id`, `style`, `hidden`)

#### The benefits of writing semantic HTMl are:

- `Accessibility`: Screenreaders can function much better with semantic HTML, which can help e.g. visually impaired users to navigate the webpage and have a better user experience
- `SEO`: It's relevant for search engines to evaluate the importance and the context of the different parts of a web page
- `Readability`: It's easier for other developers to understand your code. And also for yourself in the future!

#### Coding

Write the base structure for the following tasks:

```
<main>
  <section>
    <h1>Happy Holidays!</h1>
    <h2>Cheers to whoever</h2>
    <p>Lorem Impsum</p>
    <p>Cheers, XOXO</p>
  </section>
</main>
```

### style fonts with own classes

> 02/styling_fonts

#### Explainer

CSS means Cascading Stylesheets. While HTML defines the structure and semantics of your content, we use CSS for design and layout.

- Selector: A CSS selector is used to specify the elements to which CSS rules apply.
- Property: Name for a particular property to which a value is attributed.
- Value: The value we assign to a property.
- Declaration: Each pair of property and value is a declaration.

we only show `.class` selectors to keep specificity simple at `(0,1,0)`.
if the participants want to overwrite styles, they should either edit the class or write add a new one, but keep them in order of how they want the styles to be applied.

#### Coding

recommended stylings are:

- `h1` with
  ```
  .headline {
    font-family: "Mountains of Christmas";
    color: maroon;
  }
  ```
- either specific classes setting the `font-family` for all other text,
- OR let the styles cascade.
  ```
  .card {
    font-family: "Caveat";
  }
  ```

> 💡 maybe a third font for signing the card?

### split into two sections

> 03/splitting_sections

we need the predefined classes `.card`, `.front` and `.back` to be added to their respective tags in order to apply the global styles:

- `.card` gives padding and is what will be flipped
- `.font` creates a default background color, stays in place absolutely positioned within `.card`
- `.back` gets rotated and flipped to the back

```
<main class="card">
  <section class="front">
    <h1>Happy Holidays!</h1>
  </section>
  <section class="back">
    <h2>Cheers to whoever</h2>
    <p>Lorem Impsum</p>
    <p>Cheers, XOXO</p>
  </section>
</main>
```

> 💡 this _hides_ the back of the card. this might be surprising but is what we want.

### import click in script.js

> 04/import_js_click

#### Explainer and Coding

click around and show that nothing happens, which is why we're going to add JavaScript to our page for interactivity.

explain `import`:

- Show how to import functions and variables into the `script.js` file.
- Imports must be at the top of the importing file.
- Note the curly braces {} around the name.
- Make sure that the `.js` file extension is present.
- prepared functionality by another developer, makes code easier to share and reuse.

explain that the imported function needs to be called.

```
import { createCardFlip } from "/.there-be-dragons/sketch.js";

createCardFlip();
```

try clicking/flipping around again and show that the card flips.

### add static image from /images

> 05/add_image

add image to the end of the `.front` section. show that the order of the tags makes a significant difference.

use one of the prepared images in `/images`.

```
<img
  class="postcardimage"
  src="/images/christmas-lights.jpg"
  alt="christmas postcard image"
/>
```

explain `src` and `alt`

> 💡 raise awareness about the importance of `alt` for accessibility!

> 💡 `.postcardimage` is a prepared global class that makes the image cover the front of the card. sets `object-fit: cover`.

this is a good chance to update the color of the `.headline` and add another class `.contrasted` with:

```
.contrasted {
  text-shadow: 5px 4px black;
}
```

### add snow in indexjs

> 06/import_js_snow

add `<div class="snowfall"></div>` to the end of `.front`. this does not show anything until the `createSnowfall` function is called.

add another import and call the function:

```
import { createCardFlip, createSnowfall } from "/.there-be-dragons/sketch.js";

createCardFlip()
createSnowfall()
```

### keep styling

- change colors
- change images
  - upload own images to codesandbox
  - use random url `https://source.unsplash.com/random?christmas`, tell them to keep in mind that this is an external resource.
- change text shadow
- update texts, add more paragraphs
- add small image to back?
- configure snowfall - `createSnowfall({ count: 1, speed: 1, wind: 0, angularMomentum: 0.7 });`

## Credits

### Used Libraries

- p5.js - https://p5js.org/

### Images

- mouse-in-socks.jpg - Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- tree-decorations.jpg - Photo by <a href="https://unsplash.com/@frostroomhead?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rodion Kutsaiev</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- bokeh-tree.jpg - Photo by <a href="https://unsplash.com/@mougrapher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mourad Saadi</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- christmas-lights.jpg - Photo by <a href="https://unsplash.com/@t_rampersad?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tessa Rampersad</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- candy-cane.jpg - Photo by <a href="https://unsplash.com/@fluffmedia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deidre Schlabs</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- bokeh-ornament.jpg - Photo by <a href="https://unsplash.com/@ttrapani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Todd Trapani</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- cones-and-cookies.jpg - Photo by <a href="https://unsplash.com/@natinati?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nati Melnychuk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- white-tree-decorations.jpg - Photo by <a href="https://unsplash.com/@daniloalvesd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">danilo.alvesd</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- sugar-cookies.jpg - Photo by <a href="https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diliara Garifullina</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- nutcracker.jpg - Photo by <a href="https://unsplash.com/es/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Mossholder</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- presents-under-tree.jpg - Photo by <a href="https://unsplash.com/@tinavanhove?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tina Vanhove</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- candy-heart.jpg - Photo by <a href="https://unsplash.com/@lilartsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">lilartsy</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- doorway.jpg - Photo by <a href="https://unsplash.com/@sinzianasusa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sinziana Susa</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- snowy-cones.jpg - Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

### Fonts

- Caveat - https://fonts.google.com/specimen/Caveat/about
- Mountains of Christmas - https://fonts.google.com/specimen/Mountains+of+Christmas/about