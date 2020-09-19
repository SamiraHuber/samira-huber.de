function toggleMenu(el) {
    el.classList.toggle('active');

    document.getElementById("menu").classList.toggle('hidden');
}

function typeWriter() {
    if (i < sentences[text].length) {
        document.getElementById("hello-world").innerHTML += sentences[text].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {
        text = text < sentences.length - 1 ? text + 1 : 0;
        i = 0;
        setTimeout(function() {
            document.getElementById("hello-world").innerHTML = "";
            typeWriter();
        }, 4000);
    }
}

async function writeAllLanguages() {
    sentences.push(code_cpp);
    sentences.push(code_csharp);
    sentences.push(code_python);
    sentences.push(code_java);
    sentences.push(code_js);
    typeWriter();
}

function toggleInfoText(el, button) {
  
    var more = document.getElementById(el);
    more.classList.toggle("more");
    if (more.classList.contains("more")) {
        button.innerHTML = "READ MORE";
    }
    else {
        button.innerHTML = "READ LESS";
    }
}

var i = 0;
var text = 0;
var sentences = [];
var code_cpp = 'cout << "Hello You!" << endl;';
var code_csharp = 'Console.WriteLine( "Hello You!" );';
var code_python = 'print( "Hello You!" );';
var code_java = 'System.out.println( "Hello You!" );';
var code_js = 'console.log( "Hello You" );';
var speed = 70;

writeAllLanguages();