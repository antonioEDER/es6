// Padrão IIFE
// IIFE - Immediately invoked function expression
// Uma expressão de função imediatamente chamada é um idioma de linguagem de 
// programação que produz um escopo léxico usando o escopo de função. 

// Não polue o scopo global
(
    function () {
        var $ = this.Jquery
        this.myExample = $
    }
)

// mode de exportação
var $ = required("jquery");
exports.myExample = function () {}


