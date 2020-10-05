# GenericList

**Projeto para criação de Lista com angular automatizado apartir de um Objeto JSON.**

## Iniciando:

Passando o Objeto para criação da Listagem:
### No HTML:
![image](https://user-images.githubusercontent.com/71721377/95107337-28c80380-0710-11eb-962c-22a4cd8e5024.png)

### No Componente:
![image](https://user-images.githubusercontent.com/71721377/95107713-aab82c80-0710-11eb-98c0-d77686def608.png)
##### Passando o objeto desejado não importa tamanho numero de componentes so precisa ser um array de JSON

### Na tela:
![image](https://user-images.githubusercontent.com/71721377/95107989-05ea1f00-0711-11eb-9ff6-96372c759dc9.png)

## Executando tarefas CRUD:
### No HTML basta passar nesses eventos sua logica de acordo com cada funcionalidade CRUD
![image](https://user-images.githubusercontent.com/71721377/95108353-932d7380-0711-11eb-861f-47d4e9ffb39c.png)

### No componente apenas para ditadica um log no Objeto:
![image](https://user-images.githubusercontent.com/71721377/95109176-9d9c3d00-0712-11eb-8cff-684e69d42d32.png)

## Executando:
#### Adicionando:
![image](https://user-images.githubusercontent.com/71721377/95109573-24e9b080-0713-11eb-8f65-4882be32038c.png)
#### No console:
![image](https://user-images.githubusercontent.com/71721377/95109752-68dcb580-0713-11eb-8035-28e96f5ff4d9.png)
#### Editando:
![image](https://user-images.githubusercontent.com/71721377/95109957-b0fbd800-0713-11eb-86f4-db06f53efc9c.png)
#### No console:
![image](https://user-images.githubusercontent.com/71721377/95110018-c96bf280-0713-11eb-8022-8208003399d8.png)
#### Excluindo:
![image](https://user-images.githubusercontent.com/71721377/95110168-01733580-0714-11eb-9301-b44fa064b2ea.png)
#### No console:
![image](https://user-images.githubusercontent.com/71721377/95110233-18b22300-0714-11eb-9e02-1a02ae679cae.png)

## Resultado na view:
### Antes:
![image](https://user-images.githubusercontent.com/71721377/95110369-47c89480-0714-11eb-8afe-07bdabdb4486.png)
### Depois:
![image](https://user-images.githubusercontent.com/71721377/95110471-70e92500-0714-11eb-8a72-8282fdb98874.png)
## Configuração Formulario e tabela:
![image](https://user-images.githubusercontent.com/71721377/95111835-75aed880-0716-11eb-80bb-f90d9a348ce8.png)
#### Objeto de configuração:
![image](https://user-images.githubusercontent.com/71721377/95119604-95e49480-0722-11eb-9a4e-18c9e3adb8ad.png)
#### Cabeçalho:
![image](https://user-images.githubusercontent.com/71721377/95113771-54032080-0719-11eb-84a5-f65d29cfbbf9.png)
### Obrigatorio:
> Campos que devem ser Obrigatorios (required HTML5)
### readOnly:
> Campos que devem ser apenas para leitura (readonly HTML5)
#### Tipos inputs Formulario:
![image](https://user-images.githubusercontent.com/71721377/95114618-9bd67780-071a-11eb-97ea-f0094b315075.png)
### Exemplo:
![image](https://user-images.githubusercontent.com/71721377/95115066-4484d700-071b-11eb-97e4-be6121b6cff3.png)
## CSS personalizado:
![image](https://user-images.githubusercontent.com/71721377/95111097-61b6a700-0715-11eb-9702-a7f17238b7fa.png)

##### classeTable: CSS da tabela.

##### classeForm: CSS do Formulario de Adição e Edição.

##### classeConfirmModal: CSS modal de confirmação de exclusão (objeto).
> ![image](https://user-images.githubusercontent.com/71721377/95119043-b6601f00-0721-11eb-931a-e74c1536f7b0.png)
- classe : Classe CSS.
- menssagem: Mensagem na modal.
- icon : Icone no botão de confirmação (https://material.io/resources/icons/).
- title: Titulo da Modal.
- textConfirm: Texto no botão de confirmação.
- textCancel: Texto no botão de Cancelar.
###### Exemplo;
>![image](https://user-images.githubusercontent.com/71721377/95119886-11464600-0723-11eb-9629-4452b490f1bd.png)
## Extras:
- Desabilitando caixa de pesquisa:
> Na tag HTML: [searchBox]="'false'"
- Passando parametro de pattern de DATA:
> **EXEMPLO:** [datePatern]="'dd/MM/yy'" (PIPE DATE angular)
