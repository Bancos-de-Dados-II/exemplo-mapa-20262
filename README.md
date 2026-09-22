# Aplicação de mapa dos municípios da Paraíba

Aplicação web de exemplo que combina um frontend com [Leaflet](https://leafletjs.com/), uma API em Node.js e um banco PostgreSQL com a extensão [PostGIS](https://postgis.net/). O usuário seleciona um município da Paraíba e visualiza sua geometria no mapa.

## Visão geral

- O frontend carrega a lista de municípios pela API de localidades do IBGE.
- Ao selecionar um município, o frontend consulta a API do backend.
- O backend busca a geometria correspondente na tabela `municipios` e devolve o resultado em GeoJSON.
- O mapa utiliza os tiles do OpenStreetMap.

## Tecnologias

- HTML5 e JavaScript
- Leaflet 1.9.4
- Node.js com Express
- PostgreSQL e PostGIS
- `pg`, `dotenv` e `cors`
- API de localidades do IBGE

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js 14 ou superior e npm;
- PostgreSQL 12 ou superior;
- PostGIS habilitado no banco de dados;
- um navegador com acesso à internet para carregar os serviços externos.

## Estrutura do projeto

```text
.
├── back-end/
│   ├── index.js
│   └── package.json
├── front-end/
│   └── index.html
└── README.md
```

## Configuração do banco de dados

O backend espera encontrar uma tabela chamada `municipios` com, no mínimo:

- uma coluna `id`, contendo o código do município usado pelo IBGE;
- uma coluna espacial `geom`, compatível com a consulta `ST_AsGeoJSON(geom)`.

O script de criação dos municípios está disponível no arquivo `criar-cidades.sql`.

## Configuração do backend

Renomei o arquivo `.env.example` para `.env`, substituindo os valores pelos dados da sua instalação do PostgreSQL:

```env
PG_HOST=localhost
PG_PORT=5432
PG_USER=seu_usuario
PG_PASSWORD=sua_senha
PG_DATABASE=seu_banco
```

O arquivo `.env` contém credenciais e não deve ser versionado.

Depois, instale as dependências e inicie a API:

```bash
cd back-end
npm install
npm start
```

A API ficará disponível na porta `3000`. O endpoint utilizado pelo frontend é:

```text
GET http://localhost:3000/municipios/:codigo
```

Por exemplo, substitua `:codigo` pelo código IBGE de um município existente na tabela `municipios`.

## Execução do frontend

O arquivo `front-end/index.html` pode ser aberto diretamente no navegador. Se o navegador bloquear requisições por causa de CORS ao abrir o arquivo localmente, sirva a pasta `front-end` com qualquer servidor HTTP estático e acesse a URL fornecida por ele.

O frontend atualmente consulta o backend em `http://localhost:3000`. Se a API for executada em outro endereço, atualize essa URL no arquivo `front-end/index.html` antes de publicar a aplicação.

## Funcionalidades

- Exibição de mapa interativo;
- lista de municípios da Paraíba obtida do IBGE;
- consulta da geometria do município selecionado;
- ajuste automático do mapa aos limites da geometria retornada.

## Serviços externos e atribuições

- Dados dos municípios: [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades);
- Mapa e tiles: [OpenStreetMap](https://www.openstreetmap.org/copyright);
- Biblioteca de mapas: [Leaflet](https://leafletjs.com/).

O carregamento desses serviços depende de conexão com a internet.

## Observações

Por se tratar de uma aplicação didática feita em sala de aula, não foi realizado o tratamento de exceções e possíveis erros.
