---
icon: edit
date: 2023-05-19 20:40:00.00 -3
tag:
  - controle_versao
  - git
category:
  - aula
order: 6
---


# Git conceitos basicos

O Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear alterações em projetos de software. Ele permite que várias pessoas trabalhem em um projeto simultaneamente, registre todas as alterações feitas e facilite a colaboração e o gerenciamento de código-fonte. Aqui estão alguns conceitos básicos do Git:

## Repositório

Um repositório Git é um diretório onde o código-fonte e os arquivos relacionados são armazenados. Ele contém todo o histórico de alterações feitas no projeto.

Para iniciar um repositório:

```shell
git init
```

##  Clone
O clone é o processo de criação de uma cópia local de um repositório remoto. Isso permite que você obtenha uma cópia completa do projeto em seu computador e trabalhe com ele.

## Commit

Um commit é uma operação fundamental no Git, que registra uma ou mais alterações no repositório. Cada commit tem uma mensagem associada que descreve as alterações feitas. Os commits permitem rastrear quem fez quais alterações e quando elas ocorreram.

# Merge (mesclar)

O merge é o processo de combinar as alterações de um branch a outro. Quando você deseja incorporar as alterações de um branch secundário de volta ao branch principal, você realiza um merge. O Git tenta combinar automaticamente as alterações, mas pode ocorrer conflitos se as mesmas partes do código forem modificadas em ambos os branches. Nesse caso, é necessário resolver manualmente os conflitos.

## Branch (ramo)

Um branch é uma linha de desenvolvimento separada dentro de um repositório. Ele permite que você crie e trabalhe em uma versão isolada do projeto sem afetar a linha principal de desenvolvimento (geralmente chamada de "branch master" ou "branch principal"). Os branches são úteis para adicionar novos recursos, corrigir bugs ou experimentar ideias sem comprometer o código estável.


## Pull Request

Uma Pull Request (PR) é uma solicitação para mesclar as alterações de um branch em outro branch. É uma prática comum em projetos colaborativos, onde um desenvolvedor solicita que outras pessoas revisem e aprovem suas alterações antes de mesclá-las ao branch principal. As PRs fornecem um local centralizado para revisão e discussão do código.

## Remote

O repositório remoto é uma cópia do seu repositório local, hospedada em um servidor. Ele permite que você compartilhe seu código com outras pessoas e colaboradores. O Git fornece comandos para clonar um repositório remoto para seu ambiente local e sincronizar suas alterações com o repositório remoto.


## Fork

Um fork é uma cópia independente de um repositório Git. É uma funcionalidade que permite a criação de um novo repositório a partir de outro existente. Ao fazer um fork, você cria uma cópia completa do repositório original, incluindo todo o histórico de commits.

O fork é frequentemente usado quando você deseja contribuir para um projeto de código aberto ou colaborar com outros desenvolvedores. Ao fazer um fork de um repositório, você cria sua própria cópia onde pode fazer alterações sem afetar o projeto original. Isso permite que você experimente, faça melhorias ou corrija bugs em seu próprio repositório fork.

Depois de fazer as alterações em seu repositório fork, você pode enviar uma Pull Request para o repositório original. Uma Pull Request é uma solicitação para que as alterações feitas no seu repositório sejam consideradas para incorporação ao projeto original. Os mantenedores do projeto original podem revisar suas alterações, discutir e decidir se desejam mesclá-las ao repositório principal.

Os forks são especialmente úteis em projetos de código aberto, onde várias pessoas podem contribuir simultaneamente sem precisar de acesso direto ao repositório principal. Isso ajuda a manter o controle sobre o código-fonte do projeto original, enquanto permite a contribuição de uma ampla comunidade de desenvolvedores.


<!-- 

Modelo de fluxo de trabalho para versionamento de código que visa manter um processo organizado e padronizado entre as branches. 

Git - git flow na prática - YouTube
https://www.youtube.com/watch?v=wzxBR4pOTTs

<iframe width="560" height="315" src="https://www.youtube.com/embed/wzxBR4pOTTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Transcript:
(00:00) e fala pessoal beleza oi gente entramos na área de extras de versionamento e vamos hoje falar sobre o beach flor e flor basicamente é um fluxo de trabalho em que visa ditar regras de relacionamento entre brites entre merges que acontecem entre brancos padrões de nomenclatura ânimos ajuda bastante a manter um fluxo de trabalho organizado a
(00:30) bem padronizado e antes de nós falarmos sobre ele que é um fluxo bastante robusto acho que vale citar o bit heavy flow que é um fluxo bem simplificado que basicamente ele sugere que temos uma branch master é um toda vez que foram os trabalhar em alguma coisa eu queria uma sítio e terminei de desenvolver a fiat eu médico
(01:02) para master se eu tiver algum problema na minha master eu posso criar um bonde fixa e desenvolver a correção dela é basicamente é isso então eu só queria uma branch para proteger a minha master nessa de volta para ela e é isso é um é um fluxo bastante simplificado bom e que pessoalmente eu acho bastante
(01:26) válido para aplicações pequenas e como aplicação pequena eu quero dizer o desenvolvimento de uma linha de um peixe ou de um cms que vai envolver 12 desenvolvedores e não tem porque fazer um fluxo a complexo digamos assim então um fluxo simplificado como o bit of flow já resolverem o problema para aplicações um
(01:56) pouquinho maiores aí nós temos esse gente falou aí ele já não sugere um número de brancos bem maior e eu também tenho é uma extenção do bitflow que eu faço usar que ela me ajuda a fazer essas criações dessas brantz as os melhores o fluxo como um todo muitos muitas empresas muitos desenvolvedores acabam
(02:32) usando esse fluxo eu até tenho ele no ar numa visualização horizontal para te enxergar um pouquinho melhor muitas empresas acabam usando esse fluxo só a essência dele mas não utilizam o bitflow propriamente dito a extensão dele então só se inspiram nele então tá a gente vai desenvolver inspirado no hit flor e aí
(02:57) eu vou ter uma branch master eu vou ter a minha deve que vai ser vai ser original da master a partir dela eu vou eu vou gerar relizes da minha aplicação e e da deve eu vou desenvolver fixados eu vou me inspirar nesse conceito mas não vou seguir à risca então tem muitas empresas que fazem isso isso a resolve
(03:24) ou faço algo em parte em geral os seus problemas hoje eu vou mostrar para vocês como usar a extensão do bitflow e como ela nos ajuda a melhorar ainda mais esses padrões sabe o que vocês precisam ter em mente a o beautiful aquele sugere nessa master até que a gente vai rotulando então nasceu aqui nasceu aqui é a minha
(03:50) versão 1.0 depois quando for atualizado vai ser a 1.11.2 na próxima no próximo update perceber a master e assim por diante mas o fluxo é o seguinte eu tenho a master a minha mostra protegida ninguém mexe nela e eu de cara eu já passo para minha de vela e nela que eu vou desenvolver o meu fluxo e na verdade eu não vou meter
(04:19) muito a mão dentro dela a ideia é a cada fischer que algum deve for pegar para desenvolver ele não vai desenvolver direto na deve ele vai criar uma nova mente vai chamar de fitch ou alguma coisa oi e aí vai desenvolver a funcionalidade quando terminar ele vai enviar para deve então a deve vai receber todas as nossas
(04:47) as fitness e os desenvolvedores foram criando e conforme o acumulado de fitilhos recebidas na na nossa mente deve a for considerada que ali foi gerado o entregável aí então isso vai ser entregue para nossa ambiente de release na brene a aqui é o que a gente chama de do nosso ambiente de homologação então a nossa release ela
(05:19) representa o nosso ambiente de homologação ali é o ambiente que nós vamos entregar porque a testar ou para o cliente validar o e conforme a validação isso pode gerar alguns fix então esses comics que aparecem aqui eles não são filhos que estão sendo desenvolvidas aqui dentro eles representam um hotfix a fixo que eu
(05:47) tive que realizar dentro da frente the release ou documentação coisas desse tipo mas não funcionalidades a validade da nossa branch the release eu então entrego em supra master que a máscara vai representar o meio ambiente de produção então tem um ambiente de produção na master ambiente de homologação na release
(06:16) o ambiente de desenvolvimento na deve então a partir dela eu creio várias fichas a sítios conforme concluídas pelos desenvolvedores elas logo vão sendo mescladas na nossa deve tá então esse é o fluxo básico do beautiful tem uma documentação da classe a que é bem boa a referente a gente falou eu vou deixar na descrição aqui para vocês
(06:48) darem lá uma conferida mas o que vocês precisam bom e quem tá usando o mac e vai precisar instalar o edilon até não sei se já não tá vindo no mac tá a conforme vocês instalar um kit talvez sim se não vocês vão instalar através do brio aí e babadinho não tem muito ruim para quem tá usando o windows quando
(07:10) vocês instalam o vixe ele já já tá vendo convite flor então é só vocês utilizarem o utilitário eu vou mostrar para vocês como a gente cria esses fluxos eu vou manter aqui essa imagem porque ela vai nos ajudar a enxergar algumas coisas bom primeiramente eu deixei criado um um diretório chamado multiflon
(07:37) é nesse diretório bitflow ele não é um diretório pressionado ainda ele não tá sendo rastreado ou não não foi inicializada o repositório aqui ó a primeira coisa que eu faria ao natural seria dá um kitnet para inicializar o repositório e iria criar uma master aqui eu já vou usar o bitflow iniciar bitflow
(08:03) e nete eu já tô sinalizando para o beach que eu porque eu tô criando e eu vou eu vou trabalhar convite flor nas repositório e aí me pergunta assim ó qual é o nome da tua branch de produção e ele me sugere assim tudo é só entra eu vou aceitar como master e essa mesmo e qual é a tua o nome da brand the
(08:28) release e ele sugere develop eu vou aceitar e aí a essas duas brantz elas são as que vão se manter ao longo do projeto tá essas que vem como antes disso porte são as brites que vão ser automaticamente excluídas do meu repositório então quando eu conforme o acabar o trabalho com elas que eu mandar que eu disse aqui
(08:58) finalizou elas já vão automaticamente excluídas isso aqui já é um uma ação que o kit flor vai fazer é bastante comum nós vemos os repositórios poluídos com um monte de brent perdida que não precisava existir que já já foram encerrados o vídeo falou aqui já vai se encarregar de dar sumiço nelas oi e aí eles assim ó eu vou criar alguns
(09:26) prefixos para suas lentes tá qual é o prefixo que tu quer para tua branch the features ele já me sugere sítio barra tá isso é é padrão eu vou sentar vou and release vai ser release barra eu aceito hotfix também aceito suporte aceito a versão time prefixo eu quero adicionar algum prefixo de tag tipo ver eu não vou
(09:56) adicionar nada tá e aqui eu criei já observa em só que legal quando eu criei a quando finalizou eu já caí dentro da brand development o sindec english british vocês vão ver que eu tenho a deve e já tem a master eu tenho essas duas então essa e essa são as nossas duas fixas as outras elas são criadas e excluídas conforme utilizadas
(10:28) e conforme não utilizadas mais cara então ele criou a master e já criou a deve certo aqui não nos é relevante o tipo de projeto que vai tá rodando aqui tá nós digamos que na minha deve eu vou eu vou trabalhar numa funcionalidade agora ela acha que em outros exemplos eu usei uma calculadora então usar mesmo o
(11:00) mesmo conceito aqui porque é simples ah tá eu vou trabalhar não a funcionalidade de soma e eu não vou desenvolver isso dentro da deve observem aqui ó eu vou criar uma branch fitio e eu vou trabalhar dentro dela e aí eu vou dizer assim ó convite aí eu vou usar o gift flow free features it flow future never dies assim ó street
(11:27) inicia e agora vou dizer qual é o nome da amante e eu não preciso adicionar o prefixo o fiat uno barra e já é automático eu só vou dar um nome você lá ver se a senhora você quer abrangente que vai criar a funcionalidade de soma ah tá fica aparecendo o log aqui do que é que foi feito ó ó foi criado um
(11:51) ambiente feature some então o padrão fica por conta dele então não vou ter aquele problema de lá o cara esqueceu de botar o prefixo fiat uno ambiente ficou bagunçado mas agora já deixa assim mesmo não é só que ele vai colocar sempre então ele criou hoje a senhora tu já tá na band o fit adoção e agora faz o que tu tem que fazer e
(12:15) depois ó ele já me diz o que que eu tenho que fazer na sequência bitflow surf x1 é isso eu vou ter que fazer na sequência nós vamos lá fazer assim ó vou criar um som só um arquivo aqui que vai representar som matar e eu vou adicionar e vó como está ó e vou dizer assim adiciona funcionalidade de soma
(12:49) ah beleza eu vou desenhar acabei o trabalho aqui tá isso aqui tá obviamente só ilustrando a funcionalidade então eles a seguinte flow fischer a gente vai fazer assim ó o guichê brunch para vocês olharam eu tenho a 10 eu tenho a sítio sambaqui onde eu tô e eu tenho amostra e agora sim eu vou descer leite flor
(13:19) fischer i finish autorização o que que eu vou fechar vou fechar uma sítio qual feature as an an e por meios convencionais o que que eu faria aqui é o navegaria para mim abrantes deve lá na minha mãe deve eu diria que ela tá aí executaria na verdade um kit mary com a fiat opção para mesclar eu poderia acontecer de eu ir direto na
(13:50) master e mesclar com a master ou eu de alguma fórmula é o burle errar fim e quebrar o fluxo do netflix aqui não eu digo assim ambiente flor fischer finish some quando eu faço isso daqui ele já foi lá e fez omerj na deve então ele já respeitou o fluxo como isso era uma ficha e o fluxo diz assim ó a features
(14:23) ela só entrega para deve então foi isso que ela já fez ó ela mesclou com a deve oi e aí some feature branch futuros ano recebem removido então já exclui a somente porque ela terminou o trabalho dela e ele já me colocou de volta lá deve então ele simplificou todo o os passos que eu teria que fazer para fazer
(14:49) a mescla da minha a funcionalidade que eu teria desenvolvido aqui tô lá na defe certo posso ainda eu poderia ter tranquilamente o estado calma sei lá uma subir aqui ah tá vou criar um arquivo que vai representar a subir vou adicionar o vou comentar e aí me adiciona a funcionalidade de subtração tá certo
(15:36) eu repito do mesmo jeito de flor quero fechar uma fita eu vou dizer que eu vou fechar ela e quem é é a sup ó fechei mesmo esquema tô aqui se eu olhar o que que eu tenho eu tenho a subir tem as an tô com as duas da minha deve então basicamente desenvolvi duas fitness e mesclei com a minha deve agora observa em um momento em que eu quero
(16:04) agora criar a minha a minha release e aí cara é a mesma coisa posso até fazer aqui ó se eu voltar aqui ó eu tinha usado aqui é um bitflow fischer start subir se vocês olharem mostrar até aqui na na documentação a quando ele está tratando bom dia bom de trabalhar com a release a sugestão aqui o que a gente use uma um uma release a
(16:44) semântica uma tag né então é isso que a gente vai fazer ali ó vou fazer it flow o difícil vai ser uma release o start e o nome da minha release nome da minha release como nós exemplo lá vou considerar que isso aqui é o concluiu uma entrega eu vou colocar 0.1.0 eu vou mandar ver ele vai dizer assim ó
(17:21) beleza tu tá agora na branch release em e agora é isso aqui representaria o nosso ambiente de homologação a provavelmente eu ousaria alguns iai aqui então conforme eu enviei dado para release isso já vai subir automaticamente a no meio ambiente de uma oração com iniciar e um seguir configurado e nesse momento o meu quer a
(17:55) pode testar o meu cliente pode acessar e eu posso ver de novo o que que eu tenho de brechó já tem já deve tens a master e a release aquelas outras já foram pro espaço e aí eu posso fechada também essa daqui eu dei um start nela agora vai assim ó bitflow release i finish eu vou fechar a release olha olha o que que eu fiz eu criei a sítio
(18:31) devolvi para deve eu criei duas funcionalidades que foi a sâmia subir a e agora eu vou te mandar o melhor já mandei para release e eu tô neste estágio aqui ah tá agora o que a gente quer fazer é enviar para um master e aí eu só vou dizer bitflow release which e aí eu vou dizer qual é o nome da release que eu
(19:00) quero fechar eu quero finalizar a 0.1.0 eu vou dar um enter ele já vai abrir para mim aqui ó uma mensagem de merge eu não estou usando aqui nenhum code review nem nada do tipo vou no próximo material vou mostrar como funcionar também este cara tá mas aqui ó beleza minha mensagem eu vou dar um esc vou dar dois pontos w
(19:32) que para salvar exclamação para forçar e vou sair e aí ele me diz aqui ainda como ele cria por automático unb tag - alma tag anotada ele também tá me dando um espaço para colocar uma mensagem dentro da tag então ele tá forçando o que quando eu tô entregando um dado para master que o rotule e ele já vai criar lá ó para ele
(20:04) ele ele já vai criar com uma mensagenzinha e ele vai pegar o nome que eu tinha lá na minha release que era 0.1.0 ele vai usar esse nome como a tag cês vão ver vão colocar uma mensagem aqui em qualquer pode ser e aí ah sei lá e bota assim funcionalidades e de sola e subtração tá mesmos que ia mandar ask
(20:48) dois pontos w que exclamação salvei sair e quando eu fiz isso nós tem que eu já vim parar na master até porque a release já foi automaticamente destruída como eu disse para você eu só master ea deve elas permanecem sempre ativas e as outras elas são transitórias elas são criadas e são excluídas conforme
(21:22) utilizadas e aqui na minha master olha só só dá um gift tag você pode ver que ele criou já uma tag ele já marcou essa versão como 10.1.0 porque era o nome da minha release ah tá se eu não der o big bread e eu tenho só deve yamaster essa aqui sumiu eu posso executar processo similar para criar uma hotfix na verdade igual o
(21:53) único caso em que a gente tem que observar a seguinte ó e a além de de tudo que nós fizemos se eu tiver alteração na release quando eu der um fino e chinela ela vai atualizar a master e ela também atualiza a deve automático eu não tenho que ir lá e dá um me dá um married ou fazer po ou qualquer coisa do tipo automaticamente
(22:21) ele atualiza as duas vezes se eu criar um hotfix esse hotfix quando ele for fechado cada um sei mexer nele lá ele também vai atualizar a master e vai atualizar deve o netflix é a única branch o cheque a fora delle óbvio e ela quando criada ela é a partir da master porque o propósito dela é bom detectamos um
(22:50) problema em produção e nós precisamos resolver quando eu criar um hotfix ele vai criar a partida da master eu vou corrigir e quando eu fechar ele altera master assim como altera a nossa deve tá beleza a gente eu espero que tenha dado para dar uma ideia sobre o que teflon a é óbvio que a gente tem que se adaptar
(23:17) um pouquinho com as em táxi dele porque a gente passa usar gift flow e finish start coisas que são dele mas no momento que a gente pega esse fluxo ele vai nos agilizar bastante vai nos poupar ou melhor vai nos proteger com relação a cometer erros e mary jesus equivocados ou gratis com padrão não muito legal de
(23:44) nome que eventualmente acontece se colocarmos um nome que não em correto claro que a gente pode corrigir enfim mas usando o bitflow a gente evita isso não vai acontecer esse tipo de erro tá certo pessoal eu acho que era isso que eu tinha por hoje eu espero que tenha despertado o interesse em você sair de brincar um
(24:15) pouquinho com esse cara que o jogo bastante interessante se não for para usar o a extensão do it flow let esquema de brancos inspirado nele mais cedo ou mais tarde vocês vão acabar tendo que usar seus podem como eu mostrei aqui a utilizar o bit o bit cabelón que vai resolver alguns problemas de vocês
(24:43) quando trabalha no projeto pequenos ou trabalhando sozinho mas em algum momento da vida de vocês vocês vão cair no fluxo tipo esse um um grande ponto de usar uma ferramenta como as extensão é que cara se se inserem para vocês a gente usa o bitflow aqui com a extensão cara se você sabe usar vocês vão se adaptar rapidinho
(25:08) dentro da empresa porque senão vai ser uma versão montada você não tem que saber qual é o padrão de nome de brent da empresa que vocês estão trabalhando tem um monte de coisinha que quando nós temos alguma ferramenta que dita esses padrões é muito mais fácil para todo mundo a web já estou entendendo aqui já
(25:28) estamos com 25 minutos que e vídeo então fico por aqui e até uma próxima

<figure>

```plantuml
strict digraph g{
    rankdir="LR";
    nodesep=0.5;
    ranksep=0.25;
    splines=line;
    forcelabels=false;

    // general
    node [style=filled, color="black", fontcolor="black", font="Consolas", fontsize="8pt" ];
    edge [arrowhead=vee, color="black", penwidth=2];

    // branch names
    node [fixedsize=false, penwidth=0, fillcolor=none, shape=none, width=0, height=0, margin="0.05"];
    subgraph {
        me [label="master", group="master"];
    }
    subgraph {
        de [label="develop", group="develop"];
    }
    subgraph {
        ht [label="hotfixes", group="hotfixes"];
    }

    // tags
    node [shape=cds, orientation=0, fixedsize=false, fillcolor="#C6C6C6", penwidth=1, margin="0.11,0.055"]
    t1 [label="0.1"]
    t2 [label="0.2"]
    t3 [label="1.0"]

    // graph
    node [width=0.2, height=0.2, fixedsize=true, label="", margin="0.11,0.055", shape=circle, penwidth=2, fillcolor="#FF0000"]

    // branches
    node  [group="master", fillcolor="#27E4F9"];
    m1;
    m2;
    m3;
    m4;
    subgraph {
        rank=source;
        ms [label="", width=0, height=0, penwidth=0];
    }
    m1 -> m2 -> m3 -> m4;
    ms -> m1 [color="#b0b0b0", style=dashed, arrowhead=none ];
    m4 -> me [color="#b0b0b0", style=dashed, arrowhead=none ];

    node  [group="hotfixes", fillcolor="#FD5965"];
    h1;
    h2;
    h3;
    h4;
    h1 -> h2 -> h3 -> h4;
    h4 -> ht [color="#b0b0b0", style=dashed, arrowhead=none ];

    
    node  [group="release", fillcolor="#52C322"];
    r1;
    r2;
    r3;
    r4;
    r5;
    r1 -> r2 -> r3 -> r4;

    node  [group="develop", fillcolor="#FFE333"];
    d1;
    d2;
    d3;
    d4;
    d5;
    d6;
    d7;
    d8;
    d9;
    d10;
    d1 -> d2 -> d3 -> d4 -> d5 -> d6 -> d7 -> d8 -> d9 -> d10;
    d10 -> de [color="#b0b0b0", style=dashed, arrowhead=none ];

    node  [group="feature 1", fillcolor="#FB3DB5"];
    fa1;
    fa2;
    fa3;
    fa4;
    fa5;
    fa6;
    subgraph fas1 {
        fa1 -> fa2 -> fa3;
    }
    subgraph fas2 {
        fa4 -> fa5 -> fa6;
    }

    node  [group="feature 2", fillcolor="#FB3DB5"];
    fb1;
    fb2;
    fb3;
    fb4;
    subgraph{ rank=same; fa6; fb4; } // hack
    subgraph{ rank=same; fa1; fb1; } // hack
    fb1 -> fb2 -> fb3 -> fb4;

    // nodes
    m1 -> d1;
    m1 -> h1;
    h1 -> m2;
    h1 -> d5;
    d3 -> fa1;
    fa3 -> d6;
    d6 -> r1;
    r2 -> d7;
    r4 -> d8;
    r4 -> m3;
    d9 -> r5;
    r5 -> m4;
    r5 -> d10;

    d7 -> fa4;
    fa6 -> d9;

    d3 -> fb1;
    fb4 -> d9;

    // tags connections
    edge [color="#b0b0b0", style=dotted, len=0.3, arrowhead=none, penwidth=1];
    subgraph  {
        rank="same";
        m1 -> t1;
    }
    subgraph  {
        rank="same";
        m2 -> t2 ;
    }
    subgraph  {
        rank="same";
        m3 -> t3;
    }
}
```
<figcaption></figcaption>
</figure>

-->
