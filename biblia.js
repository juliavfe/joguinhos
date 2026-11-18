// Conteúdo da aba Bíblia. Texto escrito com as próprias palavras, com a referência de onde está na Bíblia.
// Lição: { t: título, ref, cor, cards: [[título, texto]], q: [[pergunta, certa, errada, errada]] }
const LICOES = [
  { t: 'A criação', ref: 'Gênesis 1 e 2', cor: 'verde', cards: [
    ['No princípio', 'A Bíblia começa contando que Deus criou tudo em seis dias: a luz, o céu, os mares e a terra, as plantas, o sol, a lua e as estrelas, os animais e, por último, o ser humano.'],
    ['O sétimo dia', 'Depois de terminar, Deus viu que tudo era muito bom. No sétimo dia ele descansou e abençoou esse dia.'],
    ['Adão e Eva', 'Deus formou o homem do pó da terra e soprou nele o fôlego de vida. Depois formou a mulher a partir de uma costela de Adão. Os dois viviam no jardim do Éden.'],
  ], q: [
    ['Segundo Gênesis, em quantos dias Deus criou tudo?', '6', '7', '3'],
    ['O que Deus fez no sétimo dia?', 'Descansou', 'Criou os animais', 'Criou a luz'],
    ['A mulher foi formada a partir de quê?', 'De uma costela de Adão', 'Do barro do rio', 'De um galho de árvore'],
  ]},
  { t: 'Noé e o dilúvio', ref: 'Gênesis 6 a 9', cor: 'azul', cards: [
    ['Um homem justo', 'O mundo estava cheio de maldade, mas Noé andava com Deus. Deus mandou que ele construísse uma arca enorme de madeira pra salvar sua família e os animais.'],
    ['Chuva de 40 dias', 'Noé, sua família e os animais entraram na arca. Choveu quarenta dias e quarenta noites, e a água cobriu a terra. Quando baixou, a arca parou nos montes de Ararate.'],
    ['A pomba e o arco-íris', 'Noé soltou uma pomba, que voltou com uma folha de oliveira no bico: sinal de que a terra estava secando. Depois Deus colocou o arco-íris no céu como sinal da sua promessa.'],
  ], q: [
    ['Onde a arca parou quando a água baixou?', 'Nos montes de Ararate', 'No monte Sinai', 'No monte Carmelo'],
    ['Que ave voltou com uma folha de oliveira?', 'A pomba', 'O corvo', 'A águia'],
    ['Qual foi o sinal da promessa de Deus depois do dilúvio?', 'O arco-íris', 'Uma estrela nova', 'Uma nuvem de fogo'],
  ]},
  { t: 'Abraão', ref: 'Gênesis 12 a 22', cor: 'amarelo', cards: [
    ['Sai da tua terra', 'Deus chamou Abrão pra deixar sua terra e sua parentela e ir pra uma terra que ele mostraria. Abrão obedeceu, mesmo sem saber direito pra onde ia.'],
    ['Pai de muitas nações', 'Deus prometeu que a descendência dele seria como as estrelas do céu e mudou seu nome pra Abraão, que quer dizer pai de muitas nações. Isaque nasceu quando Abraão tinha 100 anos.'],
    ['O carneiro no monte', 'Deus provou a fé de Abraão pedindo Isaque em sacrifício. Na hora, um anjo o impediu, e Abraão viu um carneiro preso pelos chifres num arbusto, que foi oferecido no lugar.'],
  ], q: [
    ['Quantos anos Abraão tinha quando Isaque nasceu?', '100', '75', '40'],
    ['O que quer dizer o nome Abraão?', 'Pai de muitas nações', 'Filho da promessa', 'Homem do deserto'],
    ['O que foi oferecido no lugar de Isaque?', 'Um carneiro', 'Um bezerro', 'Uma pomba'],
  ]},
  { t: 'José do Egito', ref: 'Gênesis 37 a 50', cor: 'vermelho', cards: [
    ['O filho preferido', 'José era o filho preferido de Jacó e ganhou dele uma túnica colorida. Ele também tinha sonhos em que a família se curvava diante dele. Os irmãos ficaram com tanta inveja que o venderam como escravo.'],
    ['Do cárcere ao palácio', 'No Egito, José foi preso injustamente. Lá, interpretou sonhos, até o dia em que explicou o sonho do faraó: viriam sete anos de fartura e depois sete de fome. O faraó o colocou como governador.'],
    ['O perdão', 'Na época da fome, os irmãos foram ao Egito comprar comida e não o reconheceram. José se revelou e os perdoou: disse que eles planejaram o mal, mas Deus transformou aquilo em bem.'],
  ], q: [
    ['O que José ganhou do pai?', 'Uma túnica colorida', 'Um anel de ouro', 'Um cajado'],
    ['O sonho do faraó anunciava o quê?', 'Sete anos de fartura e sete de fome', 'Uma guerra com os vizinhos', 'Um grande dilúvio'],
    ['Quem era o pai de José?', 'Jacó', 'Isaque', 'Abraão'],
  ]},
  { t: 'Moisés e o Êxodo', ref: 'Êxodo', cor: 'amarelo', cards: [
    ['O bebê no cesto', 'O faraó mandou matar os meninos hebreus. A mãe de Moisés o escondeu num cesto no rio Nilo, e a filha do faraó o encontrou e o criou no palácio.'],
    ['A sarça ardente', 'Já adulto, Moisés viu um arbusto que pegava fogo sem se queimar. Dali Deus falou com ele e o enviou pra libertar o povo. Depois de dez pragas, o faraó deixou o povo sair.'],
    ['O mar e o deserto', 'O mar Vermelho se abriu pro povo passar. No monte Sinai, Moisés recebeu os Dez Mandamentos. O povo andou quarenta anos no deserto, comendo o maná que Deus mandava.'],
  ], q: [
    ['Como Deus falou com Moisés pela primeira vez?', 'De um arbusto que ardia sem se queimar', 'Num sonho com um anjo', 'Por meio de uma pomba'],
    ['Por quantos anos o povo andou no deserto?', '40', '7', '12'],
    ['Qual era o alimento que Deus mandava no deserto?', 'O maná', 'O mel silvestre', 'O trigo do Egito'],
  ]},
  { t: 'Davi', ref: '1 e 2 Samuel', cor: 'verde', cards: [
    ['O menino pastor', 'Davi era o filho mais novo de Jessé e cuidava das ovelhas. O profeta Samuel foi até a casa dele e o ungiu como futuro rei de Israel.'],
    ['Contra o gigante', 'O gigante filisteu Golias desafiava o exército de Israel. Davi enfrentou Golias só com uma funda e pedras, confiando em Deus, e venceu.'],
    ['Rei e poeta', 'Davi tocava harpa e acalmava o rei Saul. Depois virou rei, escreveu muitos salmos e também errou feio, mas se arrependeu de coração. Seu filho Salomão construiu o templo.'],
  ], q: [
    ['O que Davi fazia antes de ser rei?', 'Cuidava de ovelhas', 'Era pescador', 'Era carpinteiro'],
    ['Que profeta ungiu Davi?', 'Samuel', 'Elias', 'Isaías'],
    ['Que instrumento Davi tocava pro rei Saul?', 'Harpa', 'Trombeta', 'Flauta'],
  ]},
  { t: 'Daniel', ref: 'Daniel 1 a 6', cor: 'azul', cards: [
    ['Longe de casa', 'Ainda jovem, Daniel foi levado pra Babilônia. Ele e seus amigos recusaram a comida do rei, comeram legumes e beberam água, e ficaram mais saudáveis que os outros.'],
    ['A fornalha', 'Os amigos de Daniel, Sadraque, Mesaque e Abede-Nego, não quiseram adorar uma estátua de ouro. Foram jogados numa fornalha ardente e saíram sem nem cheiro de fogo.'],
    ['Na cova dos leões', 'Daniel orava três vezes por dia com a janela aberta. Por isso foi jogado na cova dos leões, mas Deus enviou seu anjo e fechou a boca dos leões.'],
  ], q: [
    ['Pra que reino Daniel foi levado?', 'Babilônia', 'Egito', 'Roma'],
    ['Quantas vezes por dia Daniel orava?', '3', '1', '7'],
    ['Onde os amigos de Daniel foram jogados?', 'Numa fornalha ardente', 'Num poço fundo', 'No mar'],
  ]},
  { t: 'O nascimento de Jesus', ref: 'Mateus 1 e 2, Lucas 1 e 2', cor: 'vermelho', cards: [
    ['O anúncio', 'O anjo Gabriel visitou Maria, uma jovem de Nazaré, e anunciou que ela teria um filho e que o chamaria de Jesus.'],
    ['Em Belém', 'Jesus nasceu em Belém e foi colocado numa manjedoura, porque não havia lugar pra eles na hospedaria. Anjos avisaram uns pastores, que foram correndo ver o menino.'],
    ['Os magos', 'Magos do Oriente seguiram uma estrela até encontrar Jesus. Eles se ajoelharam e deram presentes: ouro, incenso e mirra.'],
  ], q: [
    ['Que anjo visitou Maria?', 'Gabriel', 'Miguel', 'Rafael'],
    ['Onde o bebê Jesus foi colocado?', 'Numa manjedoura', 'Num berço de ouro', 'Num cesto no rio'],
    ['Quais foram os presentes dos magos?', 'Ouro, incenso e mirra', 'Prata, pão e vinho', 'Joias, perfume e seda'],
  ]},
  { t: 'Jesus ensina', ref: 'Os Evangelhos', cor: 'verde', cards: [
    ['Os doze', 'Jesus escolheu doze apóstolos. Vários eram pescadores, como Pedro e André, Tiago e João. Ele disse que os faria pescadores de gente.'],
    ['Histórias que ensinam', 'Jesus ensinava contando parábolas: o filho pródigo que volta pra casa, o bom samaritano que ajuda um estranho, a ovelha perdida que o pastor vai buscar.'],
    ['Milagres', 'Com cinco pães e dois peixes, Jesus alimentou uma multidão de cerca de cinco mil homens. Ele também andou sobre as águas e acalmou uma tempestade.'],
  ], q: [
    ['Com quanta comida Jesus alimentou a multidão?', 'Cinco pães e dois peixes', 'Sete pães e três peixes', 'Dois pães e cinco peixes'],
    ['Como se chama a parábola do filho que gasta a herança e volta pra casa?', 'Filho pródigo', 'Bom samaritano', 'O semeador'],
    ['Qual era a profissão de Pedro?', 'Pescador', 'Cobrador de impostos', 'Carpinteiro'],
  ]},
  { t: 'A cruz e a ressurreição', ref: 'Os Evangelhos e Atos 1', cor: 'amarelo', cards: [
    ['A última ceia', 'Antes de morrer, Jesus jantou com os discípulos. Ele partiu o pão e deu o cálice, pedindo que fizessem isso em memória dele.'],
    ['A cruz', 'Jesus foi traído por Judas, preso e crucificado. Ele foi colocado num túmulo fechado com uma pedra.'],
    ['O túmulo vazio', 'No terceiro dia, Maria Madalena e outras mulheres foram ao túmulo e o encontraram vazio: Jesus tinha ressuscitado. Ele apareceu aos discípulos e, quarenta dias depois, subiu ao céu.'],
  ], q: [
    ['Em que dia Jesus ressuscitou?', 'No terceiro dia', 'No sétimo dia', 'No quadragésimo dia'],
    ['Quem encontrou primeiro o túmulo vazio?', 'Maria Madalena e outras mulheres', 'Pôncio Pilatos', 'Os soldados romanos'],
    ['O que Jesus repartiu na última ceia?', 'O pão e o cálice', 'Leite e mel', 'Peixe assado'],
  ]},
  { t: 'A igreja começa', ref: 'Atos', cor: 'azul', cards: [
    ['Pentecostes', 'Os discípulos estavam reunidos quando o Espírito Santo veio sobre eles, como línguas de fogo. Eles começaram a falar em outras línguas, e cerca de três mil pessoas foram batizadas naquele dia.'],
    ['No caminho de Damasco', 'Saulo perseguia os cristãos. No caminho de Damasco, uma luz do céu o derrubou e Jesus falou com ele. Saulo ficou três dias sem enxergar e depois passou a seguir Jesus.'],
    ['Paulo viaja', 'Conhecido como Paulo, ele fez longas viagens anunciando Jesus e fundando igrejas. Muitas das cartas que escreveu a essas igrejas estão no Novo Testamento.'],
  ], q: [
    ['Como o Espírito Santo apareceu no Pentecostes?', 'Como línguas de fogo', 'Como uma pomba', 'Como um trovão'],
    ['Onde Saulo encontrou Jesus?', 'No caminho de Damasco', 'No templo de Jerusalém', 'Num navio pra Roma'],
    ['Quantas pessoas foram batizadas no dia de Pentecostes?', 'Cerca de três mil', 'Cerca de cento e vinte', 'Doze'],
  ]},
];

// Quem sou eu: [nome, pista difícil, pista, pista, pista fácil]
const QUEM = [
  ['Noé', 'Recebi de Deus uma tarefa enorme de carpintaria.', 'Passei muito tempo fechado com minha família e um monte de bichos.', 'Soltei uma pomba pela janela.', 'Construí a arca.'],
  ['Moisés', 'Fui criado num palácio, mas não era egípcio.', 'Ouvi Deus falar de um arbusto em chamas.', 'Vi o mar se abrir na minha frente.', 'Recebi os Dez Mandamentos.'],
  ['Davi', 'Eu cuidava das ovelhas do meu pai.', 'Tocava harpa pra acalmar um rei.', 'Escrevi muitos salmos.', 'Venci o gigante Golias.'],
  ['Daniel', 'Fui levado ainda jovem pra Babilônia.', 'Recusei a comida do rei e comi legumes.', 'Orava três vezes por dia com a janela aberta.', 'Passei uma noite na cova dos leões.'],
  ['José', 'Meu pai gostava mais de mim que dos meus irmãos.', 'Eu tinha sonhos estranhos que se cumpriam.', 'Fui vendido pelos meus irmãos.', 'Virei governador do Egito.'],
  ['Jonas', 'Deus me mandou pra Nínive e eu fugi pro lado oposto.', 'Peguei um navio e veio uma tempestade.', 'Os marinheiros me jogaram no mar.', 'Fiquei três dias dentro de um grande peixe.'],
  ['Sansão', 'Fui consagrado a Deus desde antes de nascer.', 'Matei um leão com as mãos.', 'Dalila descobriu meu segredo.', 'Minha força estava ligada ao meu cabelo.'],
  ['Ester', 'Fui criada pelo meu primo Mardoqueu.', 'Virei rainha num reino estrangeiro.', 'Arrisquei a vida indo falar com o rei sem ser chamada.', 'Salvei meu povo na Pérsia.'],
  ['Elias', 'Fui alimentado por corvos junto a um riacho.', 'Desafiei os profetas de Baal no monte Carmelo.', 'Fogo desceu do céu quando orei.', 'Fui levado ao céu num carro de fogo.'],
  ['Pedro', 'Eu era pescador e tinha um irmão chamado André.', 'Andei sobre as águas por alguns passos.', 'Neguei Jesus três vezes.', 'Preguei no dia de Pentecostes.'],
  ['Paulo', 'Eu perseguia os cristãos.', 'Fiquei três dias sem enxergar.', 'Meu nome antes era Saulo.', 'Escrevi muitas cartas do Novo Testamento.'],
  ['Maria', 'Eu era uma jovem de Nazaré.', 'O anjo Gabriel me visitou.', 'Viajei com José até Belém.', 'Sou a mãe de Jesus.'],
  ['Zaqueu', 'Eu cobrava impostos e era rico.', 'Eu era baixinho.', 'Subi numa árvore pra ver alguém passar.', 'Jesus disse que ia se hospedar na minha casa.'],
  ['Abraão', 'Deixei minha terra sem saber direito pra onde ia.', 'Deus disse que meus descendentes seriam como as estrelas.', 'Minha esposa se chamava Sara.', 'Fui pai de Isaque com 100 anos.'],
  ['Salomão', 'Sou filho de Davi.', 'Pedi a Deus sabedoria em vez de riquezas.', 'Resolvi uma briga de duas mães por um bebê.', 'Construí o templo em Jerusalém.'],
  ['Tomé', 'Fui um dos doze apóstolos.', 'Eu não estava com os outros quando Jesus apareceu pela primeira vez.', 'Disse que só acreditaria vendo as marcas dos pregos.', 'Meu nome virou sinônimo de “ver pra crer”.'],
  ['Rute', 'Eu era moabita.', 'Fiquei com minha sogra mesmo depois de viúva.', 'Recolhia espigas no campo de Boaz.', 'Minha sogra se chamava Noemi.'],
  ['Lázaro', 'Eu morava em Betânia.', 'Minhas irmãs eram Marta e Maria.', 'Fiquei quatro dias no túmulo.', 'Jesus me chamou pra fora e eu ressuscitei.'],
];
