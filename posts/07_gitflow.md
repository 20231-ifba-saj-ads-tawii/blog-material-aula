---
icon: edit
date: 2023-05-26 20:40:00.00 -3
tag:
  - controle_versao
  - git
  - gitflow
category:
  - exercicio
order: 7
---


# GitFlow

[^GITFLOW_ATLASSIAN]

## Fluxo de trabalho de Gitflow

O Gitflow é um fluxo de trabalho legado do Git que no começo era uma estratégia inovadora e revolucionária para gerenciar ramificações do Git. O Gitflow perdeu popularidade para fluxos de trabalho baseados em troncos, que hoje são considerados práticas recomendadas para o desenvolvimento moderno e contínuo de softwares e práticas de DevOps. O Gitflow também pode ser difícil de usar com integração/implementação contínuas. Esta postagem detalha o Gitflow para fins históricos.

## O que é o Gitflow?
O Gitflow é um modelo alternativo de ramificação do Git que consiste no uso de ramificações de recursos e várias ramificações primárias. Ele foi publicado pela primeira vez e popularizado por Vincent Driessen no nvie. Comparado ao desenvolvimento baseado em troncos, o Gitflow tem mais ramificações de vida longa e commits maiores. Sob este modelo, os desenvolvedores criam uma ramificação de recurso e retardam o merge com a ramificação de tronco principal até que o recurso esteja completo. Essas ramificações de recursos de longa duração exigem mais colaboração para fazer o merge e têm um risco maior de se desviarem da ramificação do tronco. Elas também podem introduzir atualizações conflitantes.

O Gitflow pode ser usado para projetos que têm um ciclo de lançamento agendado e para a prática recomendada de DevOps de entrega contínua. Este fluxo de trabalho não adiciona novos conceitos ou comandos além do necessário para o Fluxo de trabalho de ramificação de recurso. O que ele faz é atribuir funções bem específicas para diferentes ramificações e definir quando elas devem interagir. Além das ramificações de recurso, ele utiliza ramificações individuais para preparar, manter e registrar lançamentos. Com certeza, você também aproveita todos os benefícios do Fluxo de trabalho de ramificação de recurso: solicitações pull, experimentos isolados e colaboração mais eficiente.

## Introdução
O Gitflow é apenas uma ideia abstrata do fluxo de trabalho Git, ou seja, ele dita que tipos de ramificações configurar e como fazer o merge. Vamos falar sobre os objetivos das ramificações abaixo. O conjunto de ferramentas git-flow é uma ferramenta de linha de comando que tem um processo de instalação. O processo de instalação para o git-flow é simples. Pacotes para o git-flow estão disponíveis em diversos sistemas operacionais. Nos sistemas OSX, você pode executar o `brew install git-flow`. No Windows, é necessário fazer o download e instalar o git-flow. Após instalar o git-flow, você pode usar no projeto executando git flow init. O Git-flow é um invólucro do Git. O comando `git flow init` é uma extensão do comando `git init` padrão e não faz alterações no repositório, apenas cria ramificações para você.

## Como funciona
<figure>
<img src="https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg?cdnVersion=1031">
<figcaption>Fluxo de trabalho Git flow – Ramificações de histórico</figcaption>
</figure>

## Ramificações de desenvolvimento e principal
Ao invés de uma única ramificação `main`, esse fluxo de trabalho usa duas ramificações para registrar o histórico do projeto. A ramificação `main` armazena o histórico do lançamento oficial, e a ramificação `develop` serve como uma ramificação de integração para recursos. Também é conveniente marcar todos os commits na ramificação `main` com um número de versão.

A primeira etapa serve para complementar a ramificação `main` padrão com uma ramificação `develop`. Um jeito simples de alcançar esse resultado é com um desenvolvedor criando uma ramificação `develop` no local e fazendo o push para o servidor:

```console
git branch develop
git push -u origin develop
```
Esta ramificação vai conter o histórico completo do projeto, enquanto a ramificação `main` vai conter uma versão abreviada. Outros desenvolvedores agora vão precisar clonar o repositório central e criar uma ramificação de rastreamento para a de `develop`.

Ao utilizar a biblioteca de extensão do git-flow, executar `git flow init` no repositório existente vai criar uma ramificação de desenvolvimento:
```console
$ git flow init
Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [main]
Branch name for "next release" development: [develop]


How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```


```console
$ git branch
* develop
 main
```
## Ramificações de recurso(feature)

Cada novo recurso deve residir na própria ramificação, que pode ser enviada por push para o repositório central para backup/colaboração. No entanto, em vez de serem ramificações da ramificação `main`, as ramificações `feature` usam a ramificação `develop` como pai. Quando um recurso é concluído, ele passa por merge de volta para a ramificação de desenvolvimento. Os recursos não devem nunca interagir direto com a ramificação `main`.

<figure>
<img src="https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=1031"> 
<figcaption>Fluxo de trabalho Git flow – Ramificações de recurso</figcaption>
</figure>

Observe que as ramificações de `feature`, combinadas com a ramificação de `develop`, são, para todos os efeitos, o Fluxo de trabalho de ramificação de `feature`. No entanto, o Gitflow Workflow não para aí.

As ramificações de recurso são em geral criadas a partir da ramificação de desenvolvimento mais recente.

Criação da ramificação de recurso
Sem as extensões do git-flow:

```console
git checkout develop
git checkout -b feature_branch
```
Ao usar a extensão do git-flow:

```console
git flow feature start feature_branch
```

Continue seu trabalho e use o Git como de costume.

### Finalização da ramificação de recurso
Quando você concluir o trabalho de desenvolvimento no recurso, a próxima etapa é mesclar a `feature_branch` na de `develop`.

Sem as extensões do git-flow:

```console
git checkout develop
git merge feature_branch
```
Usando as extensões do git-flow:

```console
git flow feature finish feature_branch
```

## Ramificações de lançamento(release)
<figure>
<img src="https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=1031" >
<figcaption>Fluxo de trabalho Git flow – Ramificações de lançamento</figcaption>
</figure>

Uma vez que a ramificação `develop` adquiriu recursos suficientes para um lançamento (ou uma data de lançamento predeterminada está se aproximando), você bifurca uma ramificação `release` a partir da ramificação develop. Criar esta ramificação dá início ao próximo ciclo de lançamento, portanto nenhum novo recurso pode ser adicionado depois deste ponto — apenas atualizações de segurança, geração de documentação e outras tarefas relacionadas ao lançamento devem ir nesta ramificação. Quando estiver pronta para ser lançada, a ramificação `release` passa por merge para a ramificação `main` e é marcada com o número da versão. Ela também deve passar por merge de volta para a ramificação `develop`, que pode ter progredido desde que o lançamento foi iniciado.

O uso da ramificação dedicada ao preparo de lançamentos possibilita que uma equipe aperfeiçoe o lançamento atual enquanto outra equipe continua a trabalhar nos recursos para o próximo lançamento. Ele também cria fases de desenvolvimento bem definidas (por exemplo, é fácil dizer "Esta semana a gente está se preparando para a versão 4.0" e de fato ver como fica na estrutura do repositório).

A elaboração de ramificações de `release` é outra operação de ramificação simples. Assim como as ramificações de `feature`, as ramificações de `release` são baseadas na ramificação de `develop`. Uma nova ramificação de `release` pode ser criada usando os seguintes métodos.

Sem as extensões do git-flow:

```console
git checkout develop
git checkout -b release/0.1.0
```
Ao utilizar extensões do git-flow:

```console
$ git flow release start 0.1.0
Switched to a new branch 'release/0.1.0'
```
Depois que a versão estiver pronta para o lançamento, vai ser feito o merge dela na ramificação `main` e na ramificação `develop` e, então, a ramificação `release` vai ser excluída. O processo de merge de volta para a ramificação `develop` é importante porque atualizações importantes podem ter sido adicionadas à ramificação `release` e elas devem ser acessíveis a novos recursos. Se sua organização enfatiza a revisão de códigos, este seria o local ideal para uma solicitação pull.

### Finalização da ramificação de lançamento

Para finalizar a ramificação de `release`, use os seguintes métodos:

Sem as extensões do git-flow:

```console
git checkout main
git merge release/0.1.0
```
Ou, com a extensão do git-flow:
```console
git flow release finish '0.1.0'

```
## Ramificações de hotfix
<figure>
<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1031">
<figcaption>Fluxo de trabalho Git flow – Ramificações de hotfix</figcaption>
</figure>


As ramificações de manutenção ou de "hotfix" são usadas para corrigir com rapidez lançamentos de produção. As ramificações de `hotfix` se parecem muito com ramificações `release` e `feature`, com a diferença de serem baseadas na ramificação `main` ao invés da ramificação `develop`. Esta é a única ramificação que deve ser bifurcada direto da ramificação `main`. Assim que a correção é concluída, deve ser feito o merge dela tanto na ramificação `main` quanto na ramificação `develop` (ou na ramificação release atual) e a ramificação `main` deve ser marcada com um número de versão atualizado.

Ter uma linha de desenvolvimento dedicada para atualizações de segurança permite que sua equipe aborde problemas sem ter que interromper o resto do fluxo de trabalho ou esperar o próximo ciclo de lançamento. Você pode pensar nas ramificações de manutenção como ramificações `release` ad hoc que trabalham em contato direto com a `main`. Uma ramificação de `hotfix` pode ser criada usando os seguintes métodos:

Sem as extensões do git-flow:

```console
git checkout main
git checkout -b hotfix_branch
```
Ao utilizar extensões do git-flow:

```console
$ git flow hotfix start hotfix_branch
```

Assim como acontece na finalização da ramificação `release`, é feito o merge da ramificação de `hotfix` tanto na ramificação `main` quanto na ramificação `develop`.

Sem as extensões do git-flow:

```console
git checkout main
git merge hotfix_branch
git checkout develop
git merge hotfix_branch
git branch -D hotfix_branch
```
Ao utilizar extensões do git-flow:

```console
git flow hotfix finish hotfix_branch
```
### Exemplo
A seguir, um exemplo completo demonstrando um fluxo de ramificação de `feature`. Supondo que exista uma configuração de repositório com uma ramificação `main`.

```console
git checkout main
git checkout -b develop
git checkout -b feature_branch
# work happens on feature branch
git checkout develop
git merge feature_branch
git checkout main
git merge develop
git branch -d feature_branch
```

Além do fluxo de `feature` e `release`, um exemplo de `hotfix` é:

```console
git checkout main
git checkout -b hotfix_branch
# work is done commits are added to the hotfix_branch
git checkout develop
git merge hotfix_branch
git checkout main
git merge hotfix_branch
```
Resumo
Aqui é discutido o Gitflow Workflow. Gitflow é um dos muitos estilos de fluxos de trabalho Git que você e sua equipe podem utilizar.

Alguns dos principais aprendizados para saber sobre o Gitflow são:

É ótimo para um fluxo de trabalho de software baseado em lançamento.
O Gitflow oferece um canal dedicado de hotfixes para produção.


O fluxo geral do Gitflow é:

1. Uma ramificação `develop` é criada a partir da `main`
1. Uma ramificação de `release` é criada a partir da ramificação de `develop`
1. As ramificações de `feature` são criadas a partir da ramificação de `develop`
1. Quando um `feature` é concluído, ele é mesclado na ramificação de `develop`
1. Quando a ramificação `release` é feita, é feito o merge dela na ramificação `develop` e na `main`
1. Se for detectado um item na `main`, uma ramificação de `hotfix` vai ser criada a partir da `main`
1. Depois que o hotfix for concluído, ele passa por merge para a ramificação `develop` e à `main`


## Repositório para atividade

[Link](https://classroom.github.com/a/jw962yPO)

## Referências

<!-- @include: ../bib/bib.md -->