import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c,a as e,b as a,d as i,e as n}from"./app-97e3a509.js";const t={},l=n(`<h1 id="gitflow" tabindex="-1"><a class="header-anchor" href="#gitflow" aria-hidden="true">#</a> GitFlow</h1><p><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="fluxo-de-trabalho-de-gitflow" tabindex="-1"><a class="header-anchor" href="#fluxo-de-trabalho-de-gitflow" aria-hidden="true">#</a> Fluxo de trabalho de Gitflow</h2><p>O Gitflow é um fluxo de trabalho legado do Git que no começo era uma estratégia inovadora e revolucionária para gerenciar ramificações do Git. O Gitflow perdeu popularidade para fluxos de trabalho baseados em troncos, que hoje são considerados práticas recomendadas para o desenvolvimento moderno e contínuo de softwares e práticas de DevOps. O Gitflow também pode ser difícil de usar com integração/implementação contínuas. Esta postagem detalha o Gitflow para fins históricos.</p><h2 id="o-que-e-o-gitflow" tabindex="-1"><a class="header-anchor" href="#o-que-e-o-gitflow" aria-hidden="true">#</a> O que é o Gitflow?</h2><p>O Gitflow é um modelo alternativo de ramificação do Git que consiste no uso de ramificações de recursos e várias ramificações primárias. Ele foi publicado pela primeira vez e popularizado por Vincent Driessen no nvie. Comparado ao desenvolvimento baseado em troncos, o Gitflow tem mais ramificações de vida longa e commits maiores. Sob este modelo, os desenvolvedores criam uma ramificação de recurso e retardam o merge com a ramificação de tronco principal até que o recurso esteja completo. Essas ramificações de recursos de longa duração exigem mais colaboração para fazer o merge e têm um risco maior de se desviarem da ramificação do tronco. Elas também podem introduzir atualizações conflitantes.</p><p>O Gitflow pode ser usado para projetos que têm um ciclo de lançamento agendado e para a prática recomendada de DevOps de entrega contínua. Este fluxo de trabalho não adiciona novos conceitos ou comandos além do necessário para o Fluxo de trabalho de ramificação de recurso. O que ele faz é atribuir funções bem específicas para diferentes ramificações e definir quando elas devem interagir. Além das ramificações de recurso, ele utiliza ramificações individuais para preparar, manter e registrar lançamentos. Com certeza, você também aproveita todos os benefícios do Fluxo de trabalho de ramificação de recurso: solicitações pull, experimentos isolados e colaboração mais eficiente.</p><h2 id="introducao" tabindex="-1"><a class="header-anchor" href="#introducao" aria-hidden="true">#</a> Introdução</h2><p>O Gitflow é apenas uma ideia abstrata do fluxo de trabalho Git, ou seja, ele dita que tipos de ramificações configurar e como fazer o merge. Vamos falar sobre os objetivos das ramificações abaixo. O conjunto de ferramentas git-flow é uma ferramenta de linha de comando que tem um processo de instalação. O processo de instalação para o git-flow é simples. Pacotes para o git-flow estão disponíveis em diversos sistemas operacionais. Nos sistemas OSX, você pode executar o <code>brew install git-flow</code>. No Windows, é necessário fazer o download e instalar o git-flow. Após instalar o git-flow, você pode usar no projeto executando git flow init. O Git-flow é um invólucro do Git. O comando <code>git flow init</code> é uma extensão do comando <code>git init</code> padrão e não faz alterações no repositório, apenas cria ramificações para você.</p><h2 id="como-funciona" tabindex="-1"><a class="header-anchor" href="#como-funciona" aria-hidden="true">#</a> Como funciona</h2><figure><img src="https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01 How it works.svg?cdnVersion=1031"><figcaption>Fluxo de trabalho Git flow – Ramificações de histórico</figcaption></figure><h2 id="ramificacoes-de-desenvolvimento-e-principal" tabindex="-1"><a class="header-anchor" href="#ramificacoes-de-desenvolvimento-e-principal" aria-hidden="true">#</a> Ramificações de desenvolvimento e principal</h2><p>Ao invés de uma única ramificação <code>main</code>, esse fluxo de trabalho usa duas ramificações para registrar o histórico do projeto. A ramificação <code>main</code> armazena o histórico do lançamento oficial, e a ramificação <code>develop</code> serve como uma ramificação de integração para recursos. Também é conveniente marcar todos os commits na ramificação <code>main</code> com um número de versão.</p><p>A primeira etapa serve para complementar a ramificação <code>main</code> padrão com uma ramificação <code>develop</code>. Um jeito simples de alcançar esse resultado é com um desenvolvedor criando uma ramificação <code>develop</code> no local e fazendo o push para o servidor:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git branch develop
git push -u origin develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Esta ramificação vai conter o histórico completo do projeto, enquanto a ramificação <code>main</code> vai conter uma versão abreviada. Outros desenvolvedores agora vão precisar clonar o repositório central e criar uma ramificação de rastreamento para a de <code>develop</code>.</p><p>Ao utilizar a biblioteca de extensão do git-flow, executar <code>git flow init</code> no repositório existente vai criar uma ramificação de desenvolvimento:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>$ git flow init
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [main]
Branch name for &quot;next release&quot; development: [develop]


How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>$ git branch
* develop
 main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ramificacoes-de-recurso-feature" tabindex="-1"><a class="header-anchor" href="#ramificacoes-de-recurso-feature" aria-hidden="true">#</a> Ramificações de recurso(feature)</h2><p>Cada novo recurso deve residir na própria ramificação, que pode ser enviada por push para o repositório central para backup/colaboração. No entanto, em vez de serem ramificações da ramificação <code>main</code>, as ramificações <code>feature</code> usam a ramificação <code>develop</code> como pai. Quando um recurso é concluído, ele passa por merge de volta para a ramificação de desenvolvimento. Os recursos não devem nunca interagir direto com a ramificação <code>main</code>.</p><figure><img src="https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02 Feature branches.svg?cdnVersion=1031"><figcaption>Fluxo de trabalho Git flow – Ramificações de recurso</figcaption></figure><p>Observe que as ramificações de <code>feature</code>, combinadas com a ramificação de <code>develop</code>, são, para todos os efeitos, o Fluxo de trabalho de ramificação de <code>feature</code>. No entanto, o Gitflow Workflow não para aí.</p><p>As ramificações de recurso são em geral criadas a partir da ramificação de desenvolvimento mais recente.</p><p>Criação da ramificação de recurso Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout develop
git checkout -b feature_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ao usar a extensão do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git flow feature start feature_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Continue seu trabalho e use o Git como de costume.</p><h3 id="finalizacao-da-ramificacao-de-recurso" tabindex="-1"><a class="header-anchor" href="#finalizacao-da-ramificacao-de-recurso" aria-hidden="true">#</a> Finalização da ramificação de recurso</h3><p>Quando você concluir o trabalho de desenvolvimento no recurso, a próxima etapa é mesclar a <code>feature_branch</code> na de <code>develop</code>.</p><p>Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout develop
git merge feature_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Usando as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git flow feature finish feature_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ramificacoes-de-lancamento-release" tabindex="-1"><a class="header-anchor" href="#ramificacoes-de-lancamento-release" aria-hidden="true">#</a> Ramificações de lançamento(release)</h2><figure><img src="https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03 Release branches.svg?cdnVersion=1031"><figcaption>Fluxo de trabalho Git flow – Ramificações de lançamento</figcaption></figure><p>Uma vez que a ramificação <code>develop</code> adquiriu recursos suficientes para um lançamento (ou uma data de lançamento predeterminada está se aproximando), você bifurca uma ramificação <code>release</code> a partir da ramificação develop. Criar esta ramificação dá início ao próximo ciclo de lançamento, portanto nenhum novo recurso pode ser adicionado depois deste ponto — apenas atualizações de segurança, geração de documentação e outras tarefas relacionadas ao lançamento devem ir nesta ramificação. Quando estiver pronta para ser lançada, a ramificação <code>release</code> passa por merge para a ramificação <code>main</code> e é marcada com o número da versão. Ela também deve passar por merge de volta para a ramificação <code>develop</code>, que pode ter progredido desde que o lançamento foi iniciado.</p><p>O uso da ramificação dedicada ao preparo de lançamentos possibilita que uma equipe aperfeiçoe o lançamento atual enquanto outra equipe continua a trabalhar nos recursos para o próximo lançamento. Ele também cria fases de desenvolvimento bem definidas (por exemplo, é fácil dizer &quot;Esta semana a gente está se preparando para a versão 4.0&quot; e de fato ver como fica na estrutura do repositório).</p><p>A elaboração de ramificações de <code>release</code> é outra operação de ramificação simples. Assim como as ramificações de <code>feature</code>, as ramificações de <code>release</code> são baseadas na ramificação de <code>develop</code>. Uma nova ramificação de <code>release</code> pode ser criada usando os seguintes métodos.</p><p>Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout develop
git checkout -b release/0.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ao utilizar extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>$ git flow release start 0.1.0
Switched to a new branch &#39;release/0.1.0&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Depois que a versão estiver pronta para o lançamento, vai ser feito o merge dela na ramificação <code>main</code> e na ramificação <code>develop</code> e, então, a ramificação <code>release</code> vai ser excluída. O processo de merge de volta para a ramificação <code>develop</code> é importante porque atualizações importantes podem ter sido adicionadas à ramificação <code>release</code> e elas devem ser acessíveis a novos recursos. Se sua organização enfatiza a revisão de códigos, este seria o local ideal para uma solicitação pull.</p><h3 id="finalizacao-da-ramificacao-de-lancamento" tabindex="-1"><a class="header-anchor" href="#finalizacao-da-ramificacao-de-lancamento" aria-hidden="true">#</a> Finalização da ramificação de lançamento</h3><p>Para finalizar a ramificação de <code>release</code>, use os seguintes métodos:</p><p>Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout main
git merge release/0.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ou, com a extensão do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git flow release finish &#39;0.1.0&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ramificacoes-de-hotfix" tabindex="-1"><a class="header-anchor" href="#ramificacoes-de-hotfix" aria-hidden="true">#</a> Ramificações de hotfix</h2><figure><img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04 Hotfix branches.svg?cdnVersion=1031"><figcaption>Fluxo de trabalho Git flow – Ramificações de hotfix</figcaption></figure><p>As ramificações de manutenção ou de &quot;hotfix&quot; são usadas para corrigir com rapidez lançamentos de produção. As ramificações de <code>hotfix</code> se parecem muito com ramificações <code>release</code> e <code>feature</code>, com a diferença de serem baseadas na ramificação <code>main</code> ao invés da ramificação <code>develop</code>. Esta é a única ramificação que deve ser bifurcada direto da ramificação <code>main</code>. Assim que a correção é concluída, deve ser feito o merge dela tanto na ramificação <code>main</code> quanto na ramificação <code>develop</code> (ou na ramificação release atual) e a ramificação <code>main</code> deve ser marcada com um número de versão atualizado.</p><p>Ter uma linha de desenvolvimento dedicada para atualizações de segurança permite que sua equipe aborde problemas sem ter que interromper o resto do fluxo de trabalho ou esperar o próximo ciclo de lançamento. Você pode pensar nas ramificações de manutenção como ramificações <code>release</code> ad hoc que trabalham em contato direto com a <code>main</code>. Uma ramificação de <code>hotfix</code> pode ser criada usando os seguintes métodos:</p><p>Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout main
git checkout -b hotfix_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ao utilizar extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>$ git flow hotfix start hotfix_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Assim como acontece na finalização da ramificação <code>release</code>, é feito o merge da ramificação de <code>hotfix</code> tanto na ramificação <code>main</code> quanto na ramificação <code>develop</code>.</p><p>Sem as extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ao utilizar extensões do git-flow:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git flow hotfix finish hotfix_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="exemplo" tabindex="-1"><a class="header-anchor" href="#exemplo" aria-hidden="true">#</a> Exemplo</h3><p>A seguir, um exemplo completo demonstrando um fluxo de ramificação de <code>feature</code>. Supondo que exista uma configuração de repositório com uma ramificação <code>main</code>.</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout main
git checkout -b develop
git checkout -b feature_branch
# work happens on feature branch
git checkout develop
git merge feature_branch
git checkout main
git merge develop
git branch -d feature_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Além do fluxo de <code>feature</code> e <code>release</code>, um exemplo de <code>hotfix</code> é:</p><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>git checkout main
git checkout -b hotfix_branch
# work is done commits are added to the hotfix_branch
git checkout develop
git merge hotfix_branch
git checkout main
git merge hotfix_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resumo Aqui é discutido o Gitflow Workflow. Gitflow é um dos muitos estilos de fluxos de trabalho Git que você e sua equipe podem utilizar.</p><p>Alguns dos principais aprendizados para saber sobre o Gitflow são:</p><p>É ótimo para um fluxo de trabalho de software baseado em lançamento. O Gitflow oferece um canal dedicado de hotfixes para produção.</p><p>O fluxo geral do Gitflow é:</p><ol><li>Uma ramificação <code>develop</code> é criada a partir da <code>main</code></li><li>Uma ramificação de <code>release</code> é criada a partir da ramificação de <code>develop</code></li><li>As ramificações de <code>feature</code> são criadas a partir da ramificação de <code>develop</code></li><li>Quando um <code>feature</code> é concluído, ele é mesclado na ramificação de <code>develop</code></li><li>Quando a ramificação <code>release</code> é feita, é feito o merge dela na ramificação <code>develop</code> e na <code>main</code></li><li>Se for detectado um item na <code>main</code>, uma ramificação de <code>hotfix</code> vai ser criada a partir da <code>main</code></li><li>Depois que o hotfix for concluído, ele passa por merge para a ramificação <code>develop</code> e à <code>main</code></li></ol><h2 id="repositorio-para-atividade" tabindex="-1"><a class="header-anchor" href="#repositorio-para-atividade" aria-hidden="true">#</a> Repositório para atividade</h2>`,75),m={href:"https://classroom.github.com/a/jw962yPO",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"referencias",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#referencias","aria-hidden":"true"},"#"),a(" Referências")],-1),p=e("hr",{class:"footnotes-sep"},null,-1),f={class:"footnotes"},v={class:"footnotes-list"},h={id:"footnote1",class:"footnote-item"},g={href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",target:"_blank",rel:"noopener noreferrer"},b=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function x(w,_){const o=d("ExternalLinkIcon");return s(),c("div",null,[l,e("p",null,[e("a",m,[a("Link"),i(o)])]),u,p,e("section",f,[e("ol",v,[e("li",h,[e("p",null,[a("Gitflow Workflow "),e("a",g,[a("https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"),i(o)]),a(),b])])])])])}const z=r(t,[["render",x],["__file","07_gitflow.html.vue"]]);export{z as default};
