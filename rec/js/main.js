//recupera o elemento canvas
const canvas = document.getElementById('field');
//obtem o contexto 2d
const ctx = canvas.getContext('2d');

alert("Sou um jogo feito pela Maria Eduarda Santos e pelo Gustavo Gomes dos Santos ")
alert("Fui feito a partir de uma fusão das aulas da prof. Aline + tutoriais e cursos de JavaScript")
alert("Originalmente, era para estar nevando, mas por algum motivo, quando o Zezin (personagem) é adicionado, a neve para.")


//inicializa a classe sky
let field = new Sky(ctx);
field.inicializa();
field.start();


