---
icon: edit
date: 2023-07-21 20:40:00.00 -3
tag:
  - virtualizacao
category:
  - aula
order: 10
---

# Orquestração de contêineres

A Orquestração de Contêineres é um processo de automatizar o gerenciamento de um grupo de contêineres. Os orquestradores de contêineres são responsáveis por tarefas como:

* Aprovisionamento de contêineres
* Escalamento de contêineres
* Balanceamento de carga entre contêineres
* Gerenciamento de rede entre contêineres
* Monitoramento de contêineres
* Recuperação de contêineres em caso de falha

## Aplicativos compostos

O Docker Compose é uma ferramenta de linha de comando que permite definir e executar aplicativos compostos de contêineres de forma declarativa. Um aplicativo composto é um grupo de contêineres que interagem entre si para formar uma aplicação completa.

O Docker Compose é escrito em YAML e é usado para definir um arquivo de composição. Um arquivo de composição é um arquivo de texto que define a configuração de um aplicativo composto. O arquivo de composição especifica os contêineres que fazem parte do aplicativo, as imagens que são usadas para criar os contêineres e as portas que são expostas pelos contêineres.

Para usar o Docker Compose, você primeiro precisa criar um arquivo de composição. Depois de criar um arquivo de composição, você pode usar o comando `docker compose up` para iniciar o aplicativo composto. O comando `docker compose up` criará os contêineres especificados no arquivo de composição e os iniciará.

O **Docker Compose** é uma ferramenta poderosa que pode ser usada para simplificar o desenvolvimento e a implantação de aplicativos Docker. O Docker Compose pode ser usado para desenvolver e implantar aplicativos de qualquer tamanho, desde pequenos aplicativos de um contêiner até grandes aplicativos de vários contêineres.

Aqui estão alguns dos benefícios de usar o Docker Compose:

* Simplifica o desenvolvimento e a implantação de aplicativos Docker.
* Permite definir e executar aplicativos compostos de contêineres de forma declarativa.
* É uma ferramenta poderosa que pode ser usada para desenvolver e implantar aplicativos de qualquer tamanho.

Se você está usando Docker, eu recomendo que você experimente o Docker Compose. O Docker Compose pode simplificar o desenvolvimento e a implantação de seus aplicativos Docker e pode ajudá-lo a construir aplicativos mais complexos e poderosos.

A relação entre Orquestração de Contêineres e Docker Compose é que o Docker Compose é uma ferramenta que pode ser usada para simplificar o desenvolvimento e a implantação de aplicativos Docker. O Docker Compose pode ser usado para definir e executar aplicativos compostos de contêineres de forma declarativa. Isso pode ajudar você a automatizar tarefas como aprovisionamento, escalamento e gerenciamento de rede entre contêineres.

um exemplo de arquivo do Docker Compose para iniciar um aplicativo composto:

```yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - 80:80
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: password
  redis:
    image: redis:latest

```

## Orquestradores

Os orquestradores de contêineres são uma ferramenta essencial para gerenciar aplicativos em grande escala. Eles podem ajudar você a automatizar tarefas, escalar seus aplicativos de forma rápida e fácil, e manter seus aplicativos disponíveis e funcionando corretamente.

Existem vários orquestradores de contêineres disponíveis, incluindo:

- Kubernetes
- Docker Swarm
- Mesos
- DC/OS

Cada orquestrador de contêineres tem suas próprias características e vantagens. É importante escolher o orquestrador de contêineres certo para suas necessidades.

Aqui estão alguns exemplos de como você pode usar cada orquestrador de contêineres:

- *Kubernetes*: Kubernetes é um orquestrador de contêineres de código aberto que é usado por empresas de todos os tamanhos. Kubernetes é uma ferramenta poderosa que pode ser usada para gerenciar aplicativos complexos e de grande escala.
- *Docker Swarm*: Docker Swarm é um orquestrador de contêineres integrado ao Docker. Docker Swarm é uma boa opção para empresas que já usam o Docker.

Se você está procurando uma ferramenta para orquestrar contêineres, é importante considerar suas necessidades e requisitos. Existem vários orquestradores de contêineres disponíveis, cada um com suas próprias características e vantagens. Escolha o orquestrador de contêineres certo para suas necessidades e você poderá gerenciar seus aplicativos de forma eficiente e eficaz.

Aqui estão algumas vantagens da orquestração de contêineres:

- Automatização: Os orquestradores de contêineres podem automatizar tarefas como aprovisionamento, escalamento e gerenciamento de rede entre contêineres. Isso pode economizar tempo e esforço.
- Escalabilidade: Os orquestradores de contêineres podem ajudar você a escalar seus aplicativos de forma rápida e fácil. Isso é importante para empresas que precisam lidar com cargas de trabalho variáveis.
- Disponibilidade: Os orquestradores de contêineres podem ajudar você a manter seus aplicativos disponíveis e funcionando corretamente. Isso é importante para empresas que precisam garantir o tempo de atividade de seus aplicativos.
- Segurança: Os orquestradores de contêineres podem ajudar você a melhorar a segurança de seus aplicativos isolando-os uns dos outros e do sistema operacional host.

Se você está procurando uma maneira de gerenciar seus aplicativos de forma eficiente, escalável e disponível, a orquestração de contêineres é uma boa opção.

## Kubernetes

O Kubernetes é uma plataforma de orquestração de contêineres de código aberto, que automatiza o processo de implantação, dimensionamento e gerenciamento de aplicativos em contêineres. Abaixo está um exemplo básico de configuração do Kubernetes para implantar um aplicativo simples composto por um pod com um contêiner.

Antes de começar, você precisará ter o Kubernetes instalado e configurado em seu ambiente. Há várias maneiras de configurar o Kubernetes, como o uso do Kubernetes localmente usando o Minikube ou usando serviços gerenciados em nuvem, como o Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS) ou Azure Kubernetes Service (AKS).

Exemplo de configuração do Kubernetes para um aplicativo web simples:

```
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 80

apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 80
```

Este arquivo de configuração cria um serviço e um desdobramento. O serviço expõe o aplicativo web no nó Kubernetes na porta 80. O desdobramento cria três pods que executam o aplicativo web. Cada pod executa uma imagem Docker com o aplicativo web.

Para implantar este aplicativo, você pode usar o comando `kubectl apply` para aplicar o arquivo de configuração ao cluster Kubernetes. Depois de aplicar o arquivo de configuração, o aplicativo web estará disponível no nó Kubernetes na porta 80.

Este é apenas um exemplo de configuração do Kubernetes. Você pode personalizar o arquivo de configuração para atender às suas necessidades específicas. Por exemplo, você pode alterar o número de pods que executam o aplicativo web, ou você pode alterar a porta em que o aplicativo web está exposto.

### Pod

Em Kubernetes, um pod é o menor contêiner de execução gerenciado por Kubernetes. Um pod é um grupo de um ou mais contêineres que estão empacotados juntos e compartilham um espaço de rede e um espaço de armazenamento. Os contêineres em um pod são executados no mesmo nó e têm um identificador de pod compartilhado.

Os pods são a menor unidade de escalabilidade e implantação em Kubernetes. Você pode implantar um pod ou um grupo de pods. Os pods também são o menor e mais móvel grupo de recursos que você pode gerenciar no Kubernetes.

Os pods são importantes porque fornecem uma maneira de agrupar contêineres que se relacionam entre si. Por exemplo, você pode usar um pod para executar um servidor web e um banco de dados. Os contêineres no pod podem se comunicar uns com os outros usando seus endereços IP privados.

Os pods também fornecem uma maneira de gerenciar recursos de rede e armazenamento para um grupo de contêineres. Por exemplo, você pode definir um limite de memória para um pod. Isso garantirá que o pod não use mais memória do que você especificou.

Os pods são uma ferramenta poderosa que pode ser usada para gerenciar aplicativos em Kubernetes. Eles são a menor unidade de escalabilidade e implantação, e fornecem uma maneira de agrupar contêineres que se relacionam entre si.

## Docker Swarm

O Docker Swarm é uma ferramenta nativa do Docker que permite criar e gerenciar clusters de contêineres para implantar aplicativos em escala. Abaixo está um exemplo básico de configuração do Docker Swarm usando o Docker Engine. Neste exemplo, vamos criar um cluster de três nós para executar uma pilha simples composta por um serviço web e um serviço de banco de dados.

Antes de começar, verifique se você tem o Docker instalado em todas as máquinas que deseja adicionar ao cluster. Certifique-se também de que os nós possam se comunicar entre si na rede.

Passo 1: Inicialização do Swarm (em um dos nós)
Vamos inicializar o Swarm em um dos nós e obter um token para adicionar outros nós ao cluster.

```
docker swarm init --advertise-addr SEU_IP_DO_NODO_PRINCIPAL
```

Isso irá configurar o Docker Swarm no nó principal e fornecer um token para adicionar mais nós ao cluster.

Passo 2: Adicionar nós ao cluster (nos outros dois nós)
Agora, você precisará adicionar os outros dois nós ao cluster usando o token gerado no passo anterior. Execute o comando abaixo em cada nó:

```
docker swarm join --token SEU_TOKEN SEU_IP_DO_NODO_PRINCIPAL:2377
```

Passo 3: Verificar o status do Swarm (opcional)
Você pode verificar o status do Swarm executando o seguinte comando em qualquer um dos nós:

```
docker node ls
```

Ele mostrará uma lista dos nós no cluster e suas respectivas informações.

Passo 4: Criação da pilha de serviços
Agora, vamos criar uma pilha que consiste em um serviço web e um serviço de banco de dados. Crie um arquivo chamado `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3.8'
services:
  web:
    image: sua_imagem_web:latest
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
    ports:
      - "80:80"
    networks:
      - webnet

  db:
    image: sua_imagem_db:latest
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
    environment:
      MYSQL_ROOT_PASSWORD: senha_root
      MYSQL_DATABASE: nome_do_banco
    networks:
      - webnet

networks:
  webnet:
```

Neste exemplo, você precisará substituir `sua_imagem_web:latest` e `sua_imagem_db:latest` pelas imagens Docker que você deseja usar para o serviço web e o serviço de banco de dados, respectivamente.

Passo 5: Implantação da pilha
Após criar o arquivo `docker-compose.yml`, implante a pilha de serviços com o seguinte comando:

```
docker stack deploy -c docker-compose.yml minha_pilha
```

Agora você terá uma pilha de serviços em execução no cluster do Docker Swarm. Os serviços web estarão acessíveis através do endereço IP de qualquer um dos nós no porto 80.

Lembre-se de que este é um exemplo básico e, dependendo das necessidades do seu aplicativo, você pode precisar configurar várias opções adicionais do Docker Swarm. Para mais detalhes sobre as opções disponíveis, consulte a documentação oficial do Docker Swarm.