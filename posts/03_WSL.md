---
icon: edit
date: 2023-04-28 20:40:00.00 -3
tag:
  - virtualizacao
category:
  - aula
order: 2
---
# Construção dos ambientes de desenvolvimento com WSL

## WSL update

<!--PowerShell Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux -->

Garanta que seu WSL está atualizado

```console
wsl.exe --update
```

## Instalando o WSL Debian
- no prompt rodar o seguinte comando

```console
wsl --install --distribution Debian
```

- definir UNIX username como **dev**
- definir New password como **dev**
- finalizar a instalação.

## Criando ambientes específicos

- Criar o diretório no D:\WSLWorkspaces
```console
mkdir D:\WSLWorkspaces
```
- acessar D:\WSLWorkspaces
```console
cd D:\WSLWorkspaces
d:
```
- Exportar a versão original do Debian para servir como base
```console
wsl --export Debian DebianTemplate
```
- Importar template para novo WSL
```console
wsl --import DebianNode DebianNodeFolder DebianTemplate
```
```console
wsl --import DebianJava DebianJavaFolder DebianTemplate
```
```console
wsl --import DebianC DebianCFolder DebianTemplate
```
```console
wsl --import DebianMySQL DebianMySQLFolder DebianTemplate
```

## Executando ambientes

```console
wsl -d DebianJava
```

## Removendo WSL 

```console
wsl --unregister DebianJava 
```


## WSL2 Forward Port

## `wsl.conf` e `.wslconfig`
Você pode definir as configurações para suas distribuições do Linux instaladas que serão aplicadas automaticamente sempre que você iniciar o WSL de duas maneiras, usando:

- `.wslconfig` para definir as configurações globalmente em todas as distribuições instaladas em execução no WSL 2.
- `wsl.conf` para definir as configurações por distribuição para distribuições do Linux em execução no WSL 1 ou WSL 2.

## `.wslconfig`

**Só pode ser usado para distribuições executadas pelo WSL 2**

Para acessar seu `%UserProfile%` diretório, no PowerShell, use 
```console
cd ~
```
para acessar seu diretório base (que normalmente é seu perfil de usuário, C:\Users\<UserName>) 

Outra opção é você pode abrir o Windows Explorador de Arquivos e inserir `%UserProfile%` na barra de endereços. 

O caminho do diretório deve ser semelhante a: 

```console
C:\Users\<UserName>\.wslconfig
```

## Exemplo de arquivo .wslconfig

```console
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=2

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
kernel=C:\\temp\\myCustomKernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=8GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=C:\\temp\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
pageReporting=false

# Turn off default connection to bind WSL 2 localhost to Windows localhost
localhostforwarding=true

# Disables nested virtualization
nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
debugConsole=true
```

## A regra de 8 segundos

Você deve aguardar até que o subsistema que executa a distribuição do Linux pare completamente de ser executado e reinicie para que as atualizações de configuração sejam exibidas. Normalmente, isso leva cerca de 8 segundos depois de fechar TODAS as instâncias do shell de distribuição.

```console
wsl --list --running
```
```console
wsl --shutdown
```

## Debian Docker
### Configure o repositório
    
1. Atualize o índice de pacote APT e instale os pacotes para permitir que o Apt use um repositório sobre o HTTPS:

    ```console
    sudo apt-get update
    sudo apt-get install \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    ```
1. Adicione a chave GPG oficial do Docker:
    ```console
    sudo mkdir -m 0755 -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    ```
1. Use o seguinte comando para configurar o repositório:
    ```console
    echo \
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```

### Instale o Docker
1. Atualize o índice de pacote APT:
    ```console
    sudo apt-get update
    ```
1. Instele o Docker Engine, containerd, e Docker Compose plugin.
    ```console
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    ```
### erro iptables

O instalador do Docker usa iptables para NAT. Infelizmente, o Debian usa o Nftables. Você pode converter as entradas em nftables ou apenas configurar o Debian para usar os iptables legados.

```console
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

Dockerd, deve começar bem depois de mudar para a iptables legado.

```console
sudo service docker start
```

### Rodando uma imagem

1. Verifique se a instalação do docker está bem-sucedida executando a imagem do Hello-World:
    ```console
    sudo docker run hello-world
    ```

### Fazendo o docker inicializar no boot

Criar o arquivo `/etc/wsl.conf`  com o seguinte conteúdo:

```console
# Set a command to run when a new WSL instance launches. This example starts the Docker container service.
[boot]
command = service docker start
```


### Exportando Debian com Docker

Exportar a versão original do Debian com Docker para servir como base

```console
sudo apt-get autoclean
```

```console
wsl --export Debian DebianDockerTemplate
```


```console
wsl --export Debian DebianDockerTemplate
```
- Importar template para novo WSL
```console
wsl --import DebianOwnCloud DebianOwnCloud DebianDockerTemplate
```


## Referência

- https://docs.docker.com/engine/install/debian/
- https://forums.docker.com/t/failing-to-start-dockerd-failed-to-create-nat-chain-docker/78269
- https://learn.microsoft.com/pt-br/windows/wsl/wsl-config


