const quizData = {

  HTML: [
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Tool Markup", "Home Tool Markup Language"], answer: 0 },
    { q: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
    { q: "Which tag inserts an image?", options: ["<img>", "<image>", "<pic>", "<src>"], answer: 0 },
    { q: "HTML is a ___ language.", options: ["Programming", "Markup", "Scripting", "Query"], answer: 1 },
    { q: "Which attribute provides image path?", options: ["src", "href", "path", "link"], answer: 0 },
    { q: "Which tag creates a numbered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: 1 },
    { q: "Which tag is used for largest heading?", options: ["<h6>", "<head>", "<h1>", "<title>"], answer: 2 },
    { q: "Which tag is used for line break?", options: ["<br>", "<lb>", "<break>", "<hr>"], answer: 0 },
    { q: "Which tag is used for table row?", options: ["<td>", "<th>", "<tr>", "<table>"], answer: 2 },
    { q: "Which attribute opens link in new tab?", options: ["new", "open", "target", "blank"], answer: 2 },
    { q: "Which HTML tag is semantic?", options: ["<div>", "<span>", "<section>", "<b>"], answer: 2 },
    { q: "Which tag is used to display video?", options: ["<media>", "<movie>", "<video>", "<mp4>"], answer: 2 },
    { q: "Which tag is used for forms?", options: ["<input>", "<form>", "<button>", "<textarea>"], answer: 1 },
    { q: "Which attribute is required for input?", options: ["required", "validate", "important", "needed"], answer: 0 },
    { q: "Which tag defines footer?", options: ["<bottom>", "<footer>", "<end>", "<section>"], answer: 1 }
  ],

  CSS: [
    { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Color Style Sheets", "Computer Style Sheets"], answer: 0 },
    { q: "Which property changes text color?", options: ["font-color", "text-color", "color", "background"], answer: 2 },
    { q: "Which symbol selects class?", options: ["#", ".", "*", "&"], answer: 1 },
    { q: "Which symbol selects ID?", options: ["#", ".", "*", "&"], answer: 0 },
    { q: "Which property sets background color?", options: ["bgcolor", "background-color", "color", "background"], answer: 1 },
    { q: "Which unit is relative?", options: ["px", "cm", "%", "mm"], answer: 2 },
    { q: "Which property controls font size?", options: ["font-style", "text-size", "font-size", "size"], answer: 2 },
    { q: "Which display hides element?", options: ["none", "hidden", "block", "inline"], answer: 0 },
    { q: "Which property adds shadow?", options: ["shadow", "box-shadow", "border-shadow", "element-shadow"], answer: 1 },
    { q: "Which property aligns text?", options: ["align", "text-align", "float", "position"], answer: 1 },
    { q: "Which property makes rounded corners?", options: ["corner-radius", "radius", "border-radius", "round"], answer: 2 },
    { q: "Which position removes element from flow?", options: ["static", "relative", "absolute", "sticky"], answer: 2 },
    { q: "Which property sets flex direction?", options: ["flex-flow", "flex-direction", "align-items", "justify-content"], answer: 1 },
    { q: "Which property controls spacing inside?", options: ["margin", "padding", "border", "gap"], answer: 1 },
    { q: "Which property creates animation?", options: ["transform", "transition", "animation", "motion"], answer: 2 }
  ],

  JavaScript: [
    { q: "JavaScript is ___ language.", options: ["Compiled", "Markup", "Interpreted", "Assembly"], answer: 2 },
    { q: "Which keyword declares variable?", options: ["int", "let", "varr", "define"], answer: 1 },
    { q: "Which symbol is used for comments?", options: ["//", "<!-- -->", "#", "**"], answer: 0 },
    { q: "Which function prints output?", options: ["print()", "console.log()", "echo()", "write()"], answer: 1 },
    { q: "Which operator checks equality & type?", options: ["==", "=", "===", "!="], answer: 2 },
    { q: "Which data type stores true/false?", options: ["String", "Boolean", "Number", "Object"], answer: 1 },
    { q: "Which keyword creates function?", options: ["func", "method", "function", "define"], answer: 2 },
    { q: "Which array method adds element?", options: ["push()", "add()", "insert()", "append()"], answer: 0 },
    { q: "Which keyword stops loop?", options: ["exit", "stop", "break", "return"], answer: 2 },
    { q: "Which event runs on page load?", options: ["onstart", "onload", "ready", "load"], answer: 1 },
    { q: "Which method selects ID?", options: ["querySelector()", "getElement()", "getElementById()", "selectId()"], answer: 2 },
    { q: "Which keyword handles errors?", options: ["error", "try", "catch", "throw"], answer: 1 },
    { q: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], answer: 2 },
    { q: "Which keyword creates constant?", options: ["let", "var", "const", "static"], answer: 2 },
    { q: "Which operator combines strings?", options: ["+", "&", ".", ","], answer: 0 }
  ],

  Java: [
    { q: "Java is ___ language.", options: ["Procedural", "Object-Oriented", "Markup", "Functional"], answer: 1 },
    { q: "Which keyword creates object?", options: ["class", "new", "this", "object"], answer: 1 },
    { q: "Which method starts program?", options: ["start()", "main()", "run()", "execute()"], answer: 1 },
    { q: "Which keyword inherits class?", options: ["extends", "implements", "inherits", "super"], answer: 0 },
    { q: "Which datatype stores decimal?", options: ["int", "float", "char", "boolean"], answer: 1 },
    { q: "Which access modifier is private?", options: ["public", "protected", "private", "default"], answer: 2 },
    { q: "Which keyword handles exception?", options: ["try", "throw", "catch", "error"], answer: 0 },
    { q: "Which loop checks condition first?", options: ["do-while", "while", "for", "foreach"], answer: 1 },
    { q: "Which keyword prevents inheritance?", options: ["static", "final", "abstract", "private"], answer: 1 },
    { q: "Which keyword refers current object?", options: ["this", "self", "current", "super"], answer: 0 },
    { q: "Which package stores utilities?", options: ["java.io", "java.util", "java.lang", "java.net"], answer: 1 },
    { q: "Which method compares strings?", options: ["==", "equals()", "compare()", "match()"], answer: 1 },
    { q: "Which keyword implements interface?", options: ["extends", "inherits", "implements", "interface"], answer: 2 },
    { q: "Which type stores single character?", options: ["String", "char", "int", "byte"], answer: 1 },
    { q: "Which keyword creates constant?", options: ["static", "const", "final", "fixed"], answer: 2 }
  ],

  "C++": [
    { q: "C++ is ___ language.", options: ["Procedural", "Object-Oriented", "Scripting", "Markup"], answer: 1 },
    { q: "Which symbol ends statement?", options: [".", ":", ";", ","], answer: 2 },
    { q: "Which keyword outputs text?", options: ["print", "cout", "output", "echo"], answer: 1 },
    { q: "Which header supports IO?", options: ["<stdio>", "<iostream>", "<conio>", "<input>"], answer: 1 },
    { q: "Which operator accesses class member?", options: [".", "->", "::", ":"], answer: 0 },
    { q: "Which keyword creates class?", options: ["struct", "class", "object", "define"], answer: 1 },
    { q: "Which keyword handles inheritance?", options: ["extends", "inherits", ":", "public"], answer: 2 },
    { q: "Which loop runs fixed times?", options: ["while", "do-while", "for", "foreach"], answer: 2 },
    { q: "Which keyword allocates memory?", options: ["malloc", "alloc", "new", "create"], answer: 2 },
    { q: "Which keyword frees memory?", options: ["delete", "free", "remove", "clear"], answer: 0 },
    { q: "Which datatype stores true/false?", options: ["int", "bool", "char", "float"], answer: 1 },
    { q: "Which symbol is scope resolution?", options: ["::", ".", "->", ":"], answer: 0 },
    { q: "Which feature allows same name?", options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"], answer: 1 },
    { q: "Which keyword stops loop?", options: ["exit", "stop", "break", "return"], answer: 2 },
    { q: "Which file extension is C++?", options: [".c", ".cpp", ".cp", ".cc"], answer: 1 }
  ]

};
