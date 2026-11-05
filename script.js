

const PERGUNTAS = [
  {
    categoria: "ARTISTA",
    obra: "Abaporu",
    imagem: "imagens/abaporu.jpg",
    contexto: "Uma figura com mãos e pés grandes aparece ao lado de um cacto.",
    pergunta: "Quem pintou a obra Abaporu?",
    opcoes: ["Tarsila do Amaral", "Frida Kahlo", "Anita Malfatti", "Claude Monet"],
    correta: 0,
    explicacao: "Tarsila do Amaral foi uma artista brasileira. Abaporu foi pintada em 1928."
  },
  {
    categoria: "CURIOSIDADE",
    obra: "Abaporu",
    imagem: "imagens/abaporu.jpg",
    contexto: "Observe a figura humana e os elementos ao seu redor.",
    pergunta: "Qual elemento aparece ao lado da figura em Abaporu?",
    opcoes: ["Um cacto", "Um barco", "Um castelo", "Uma bicicleta"],
    correta: 0,
    explicacao: "Um cacto aparece ao lado da figura humana, sob um sol."
  },
  {
    categoria: "ARTISTA",
    obra: "A Noite Estrelada",
    imagem: "imagens/noite-estrelada.jpg",
    contexto: "O céu parece se movimentar com pinceladas curvas e luminosas.",
    pergunta: "Quem pintou A Noite Estrelada?",
    opcoes: ["Sandro Botticelli", "Vincent van Gogh", "Diego Velázquez", "Tarsila do Amaral"],
    correta: 1,
    explicacao: "Vincent van Gogh foi um pintor dos Países Baixos."
  },
  {
    categoria: "OBSERVAÇÃO",
    obra: "A Noite Estrelada",
    imagem: "imagens/noite-estrelada.jpg",
    contexto: "Pense nas cores e nas formas que aparecem no céu.",
    pergunta: "Quais cores se destacam bastante no céu da pintura?",
    opcoes: ["Verde e rosa", "Preto e vermelho", "Azul e amarelo", "Laranja e marrom"],
    correta: 2,
    explicacao: "Os tons de azul e amarelo criam um contraste marcante."
  },
  {
    categoria: "ARTISTA",
    obra: "O Nascimento de Vênus",
    imagem: "imagens/nascimento-de-venus.jpg",
    contexto: "Uma figura feminina aparece sobre uma grande concha.",
    pergunta: "Quem pintou O Nascimento de Vênus?",
    opcoes: ["Tarsila do Amaral", "Vincent van Gogh", "Sandro Botticelli", "Diego Velázquez"],
    correta: 2,
    explicacao: "Sandro Botticelli foi um pintor italiano do Renascimento."
  },
  {
    categoria: "OBSERVAÇÃO",
    obra: "O Nascimento de Vênus",
    imagem: "imagens/nascimento-de-venus.jpg",
    contexto: "A personagem principal está chegando à terra.",
    pergunta: "Sobre qual objeto Vênus aparece?",
    opcoes: ["Uma grande concha", "Um cavalo", "Uma cadeira", "Uma carruagem"],
    correta: 0,
    explicacao: "Vênus aparece em pé sobre uma concha."
  },
  {
    categoria: "HISTÓRIA DA ARTE",
    obra: "O Nascimento de Vênus",
    imagem: "imagens/nascimento-de-venus.jpg",
    contexto: "A pintura apresenta personagens de histórias antigas.",
    pergunta: "A obra está relacionada a qual tema?",
    opcoes: ["Mitologia antiga", "Futebol", "Tecnologia espacial", "Vida submarina"],
    correta: 0,
    explicacao: "A pintura representa Vênus, uma deusa da mitologia romana."
  },
  {
    categoria: "ARTISTA",
    obra: "As Meninas",
    imagem: "imagens/as-meninas.jpg",
    contexto: "Várias pessoas aparecem em uma sala, incluindo o próprio pintor.",
    pergunta: "Quem pintou As Meninas?",
    opcoes: ["Leonardo da Vinci", "Claude Monet", "Diego Velázquez", "Pablo Picasso"],
    correta: 2,
    explicacao: "Diego Velázquez foi um pintor espanhol."
  },
  {
    categoria: "OBSERVAÇÃO",
    obra: "As Meninas",
    imagem: "imagens/as-meninas.jpg",
    contexto: "Olhe com atenção para o fundo da sala.",
    pergunta: "Qual objeto reflete duas figuras ao fundo da pintura?",
    opcoes: ["Uma janela", "Um espelho", "Um relógio", "Uma televisão"],
    correta: 1,
    explicacao: "Um espelho ao fundo mostra o reflexo de duas figuras."
  },
  {
    categoria: "CURIOSIDADE",
    obra: "As Meninas",
    imagem: "imagens/as-meninas.jpg",
    contexto: "O pintor também aparece representado na própria cena.",
    pergunta: "Em qual país nasceu Diego Velázquez?",
    opcoes: ["Brasil", "Itália", "Espanha", "Países Baixos"],
    correta: 2,
    explicacao: "Velázquez nasceu na Espanha."
  },
  {
    categoria: "ARTISTA BRASILEIRA",
    obra: "Abaporu",
    imagem: "imagens/abaporu.jpg",
    contexto: "Esta artista marcou a história da arte brasileira.",
    pergunta: "Qual destas artistas nasceu no Brasil?",
    opcoes: ["Tarsila do Amaral", "Vincent van Gogh", "Sandro Botticelli", "Diego Velázquez"],
    correta: 0,
    explicacao: "Tarsila do Amaral nasceu no Brasil e foi importante para o Modernismo."
  },
  {
    categoria: "PERÍODO ARTÍSTICO",
    obra: "O Nascimento de Vênus",
    imagem: "imagens/nascimento-de-venus.jpg",
    contexto: "Botticelli viveu em um período de valorização da cultura clássica.",
    pergunta: "Sandro Botticelli é associado a qual período artístico?",
    opcoes: ["Renascimento", "Arte digital", "Pop art", "Arte contemporânea"],
    correta: 0,
    explicacao: "Botticelli foi um dos artistas do Renascimento italiano."
  },
  {
    categoria: "OBSERVAÇÃO",
    obra: "A Noite Estrelada",
    imagem: "imagens/noite-estrelada.jpg",
    contexto: "Observe como o artista representou o céu noturno.",
    pergunta: "Como as pinceladas fazem o céu parecer?",
    opcoes: ["Parado e sem formas", "Em movimento", "Totalmente vazio", "Feito de quadrados"],
    correta: 1,
    explicacao: "As pinceladas curvas dão sensação de movimento ao céu."
  },
  {
    categoria: "CONHECIMENTO",
    obra: "As Meninas",
    imagem: "imagens/as-meninas.jpg",
    contexto: "A obra apresenta uma cena com várias pessoas.",
    pergunta: "Qual é uma característica importante de As Meninas?",
    opcoes: [
      "Mostra uma cena com várias personagens",
      "Mostra apenas uma paisagem vazia",
      "É uma pintura abstrata sem figuras",
      "Mostra somente o mar"
    ],
    correta: 0,
    explicacao: "A pintura reúne várias personagens em um ambiente interno."
  },
  {
    categoria: "DESAFIO FINAL",
    obra: "Quatro artistas",
    imagem: "",
    contexto: "Pense nas quatro obras que apareceram durante o jogo.",
    pergunta: "Qual alternativa relaciona corretamente a obra ao artista?",
    opcoes: [
      "Abaporu — Tarsila do Amaral",
      "A Noite Estrelada — Botticelli",
      "As Meninas — Van Gogh",
      "O Nascimento de Vênus — Velázquez"
    ],
    correta: 0,
    explicacao: "Abaporu é uma obra de Tarsila do Amaral."
  }
const TEMPO_POR_PERGUNTA = 20;
let indice = 0;
let pontos = 0;
let acertos = 0;
let tempoRestante = TEMPO_POR_PERGUNTA;
let intervalo = null;
let respondeu = false;
let nomeJogador = "";

const $ = (id) => document.getElementById(id);

const telas = [
  "tela-inicial",
  "tela-jogo",
  "tela-final"
];

function mostrarTela(id) {
  telas.forEach(tela => {
    $(tela).classList.toggle("ativa", tela === id);
  });
}

function iniciarJogo() {
  nomeJogador = $("nome-jogador").value.trim();
  indice = 0;
  pontos = 0;
  acertos = 0;

  mostrarTela("tela-jogo");
  mostrarPergunta();
}

function mostrarPergunta() {
  limparIntervalo();

  respondeu = false;
  tempoRestante = TEMPO_POR_PERGUNTA;

  const q = PERGUNTAS[indice];

  $("numero-pergunta").textContent =
    `PERGUNTA ${indice + 1} DE ${PERGUNTAS.length}`;

  $("pontuacao").textContent = `⭐ ${pontos} pontos`;
  $("progresso").style.width =
    `${(indice / PERGUNTAS.length) * 100}%`;

  $("categoria").textContent = q.categoria;
  $("titulo-fallback").textContent = q.obra;
  $("contexto-obra").textContent = q.contexto;
  $("texto-pergunta").textContent = q.pergunta;

  $("mensagem").textContent = "";
  $("mensagem").className = "mensagem";
  $("botao-proxima").hidden = true;

  $("temporizador").classList.remove("urgente");
  $("tempo").textContent = tempoRestante;

  const imagem = $("imagem-obra");
  const fallback = $("imagem-fallback");

  imagem.hidden = true;
  fallback.hidden = false;

  imagem.onload = () => {
    imagem.hidden = false;
    fallback.hidden = true;
  };

  imagem.onerror = () => {
    imagem.hidden = true;
    fallback.hidden = false;
  };

  if (q.imagem) {
    imagem.src = q.imagem;
  }

  const alternativas = $("alternativas");
  alternativas.innerHTML = "";

  q.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");

    botao.className = "alternativa";
    botao.type = "button";
    botao.textContent =
      `${String.fromCharCode(65 + i)}. ${opcao}`;

    botao.addEventListener("click", () => {
      escolherResposta(i);
    });

    alternativas.appendChild(botao);
  });

  intervalo = setInterval(contarTempo, 1000);
}

function contarTempo() {
  tempoRestante--;

  $("tempo").textContent = tempoRestante;

  if (tempoRestante <= 5) {
    $("temporizador").classList.add("urgente");
  }

  if (tempoRestante <= 0) {
    limparIntervalo();
    finalizarPergunta(null);
  }
}

function escolherResposta(escolha) {
  if (respondeu) return;

  finalizarPergunta(escolha);
}

function finalizarPergunta(escolha) {
  if (respondeu) return;

  respondeu = true;
  limparIntervalo();

  const q = PERGUNTAS[indice];

  const botoes = [
    ...$("alternativas").querySelectorAll("button")
  ];

  botoes.forEach((botao, i) => {
    botao.disabled = true;

    if (i === q.correta) {
      botao.classList.add("correta");
    }

    if (escolha === i && i !== q.correta) {
      botao.classList.add("errada");
    }
  });

  const mensagem = $("mensagem");

  if (escolha === q.correta) {
    pontos += 10;
    acertos++;

    mensagem.textContent =
      `Muito bem! +10 pontos. ${q.explicacao}`;

    mensagem.classList.add("acerto");

  } else if (escolha === null) {

    mensagem.textContent =
      `O tempo acabou! ${q.explicacao}`;

    mensagem.classList.add("erro");

  } else {

    mensagem.textContent =
      `Quase! A resposta correta está destacada. ${q.explicacao}`;

    mensagem.classList.add("erro");
  }

  $("pontuacao").textContent = `⭐ ${pontos} pontos`;

  $("botao-proxima").textContent =
    indice === PERGUNTAS.length - 1
      ? "VER RESULTADO →"
      : "PRÓXIMA PERGUNTA →";

  $("botao-proxima").hidden = false;
}

function proximaPergunta() {
  if (indice < PERGUNTAS.length - 1) {
    indice++;
    mostrarPergunta();
  } else {
    terminarJogo();
  }
}

function terminarJogo() {
  limparIntervalo();

  $("progresso").style.width = "100%";

  $("resultado-pontos").textContent = pontos;

  $("resultado-acertos").textContent =
    `${acertos}/${PERGUNTAS.length}`;

  $("nome-final").textContent =
    nomeJogador ? `, ${nomeJogador}` : ", artista";

  if (acertos === PERGUNTAS.length) {
    $("frase-final").textContent =
      "Incrível! Você acertou todas as perguntas!";

  } else if (acertos >= 10) {
    $("frase-final").textContent =
      "Muito bom! Você já conhece bastante sobre essas obras.";

  } else if (acertos >= 5) {
    $("frase-final").textContent =
      "Bom trabalho! Continue explorando o mundo da arte.";

  } else {
    $("frase-final").textContent =
      "Cada partida é uma nova oportunidade de aprender. Tente novamente!";
  }

  mostrarTela("tela-final");
}

function limparIntervalo() {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
}

$("botao-iniciar").addEventListener("click", iniciarJogo);

$("botao-proxima").addEventListener("click", proximaPergunta);

$("botao-reiniciar").addEventListener("click", () => {
  mostrarTela("tela-inicial");
  $("nome-jogador").value = nomeJogador;
});
