# Aplicação de Mapa - Exemplo

Uma aplicação web que exibe um mapa interativo dos municípios do Ceará, com integração de backend em Node.js e banco de dados PostgreSQL.

## 📋 Descrição

- **Frontend**: Interface web com mapa interativo usando Leaflet.js
- **Backend**: API REST em Express.js conectada a um banco de dados PostgreSQL
- **Dados**: Integração com API do IBGE para listar municípios

## 🔧 Tecnologias Utilizadas

### Frontend
- HTML5
- Leaflet.js (mapa interativo)
- OpenStreetMap (tiles do mapa)
- API IBGE (dados de municípios)

### Backend
- Node.js
- Express.js
- PostgreSQL
- dotenv (variáveis de ambiente)
- CORS (compartilhamento de recursos)

## 📦 Pré-requisitos

- Node.js (versão 14+)
- PostgreSQL (versão 12+)
- npm ou yarn
- Git (opcional)

## 🚀 Instruções de Execução

### 1. Clonar/Baixar o Repositório

```bash
cd /home/paulo/Área\ de\ trabalho/exemplo-mapa-20262
```

### 2. Configurar Backend

#### 2.1 Instalar dependências

```bash
cd back-end
npm install
```

#### 2.2 Criar arquivo `.env`

Na pasta `back-end`, crie um arquivo `.env` com as seguintes variáveis:

```env
PG_HOST=localhost
PG_PORT=5432
PG_USER=seu_usuario
PG_PASSWORD=sua_senha
PG_DATABASE=seu_banco_dados
```

**Nota**: Substitua os valores com as credenciais do seu banco de dados PostgreSQL.

#### 2.3 Executar o Backend

```bash
npm start
# ou
node index.js
```

O servidor iniciará na porta **3000**: `http://localhost:3000`

### 3. Executar Frontend

#### 3.1 Abrir no navegador

Navegue até o arquivo HTML no frontend:

```bash
# Abra manualmente o arquivo front-end/index.html no navegador
# ou use um servidor HTTP local
```

**Opção com Python (se tiver instalado):**
```bash
cd front-end
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

**Opção com Live Server (VS Code):**
- Instale a extensão "Live Server" no VS Code
- Clique com botão direito no `index.html` e selecione "Open with Live Server"

## 📁 Estrutura do Projeto

```
exemplo-mapa-20262/
├── README.md                    # Este arquivo
├── back-end/
│   ├── index.js                # Arquivo principal do backend
│   ├── package.json            # Dependências do projeto
│   └── .env                    # Variáveis de ambiente (criar)
└── front-end/
    └── index.html              # Interface web
```

## 🗺️ Funcionalidades

- Visualizar mapa interativo com centro em Fortaleza, CE
- Selecionar e listar municípios do Ceará
- Interface responsiva e fácil de usar
- Integração com dados públicos do IBGE

## ⚙️ Configuração do Banco de Dados

Para criar o banco de dados PostgreSQL, conecte-se ao seu PostgreSQL e execute:

```sql
CREATE DATABASE seu_banco_dados;

-- Adicione suas tabelas conforme necessário
-- Exemplo:
-- CREATE TABLE municipios (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100),
--     latitude DECIMAL(10, 8),
--     longitude DECIMAL(11, 8)
-- );
```

## 🐛 Solução de Problemas

**Erro: "Cannot find module 'express'"**
- Execute `npm install` na pasta `back-end`

**Erro: "Connection refused" no banco de dados**
- Verifique se PostgreSQL está rodando
- Verifique as credenciais no arquivo `.env`
- Confirme o host e porta

**Mapa não carrega no frontend**
- Verifique a conexão com a internet (Leaflet e OpenStreetMap precisam de acesso)
- Verifique o console do navegador para mensagens de erro

## 📝 Notas Adicionais

- O mapa está centralizado em Fortaleza, Ceará (coordenadas: -6.8864, -38.5575)
- A zoom inicial é 14
- Os dados dos municípios são carregados da API pública do IBGE

## 📄 Licença

ISC

---

**Desenvolvido em**: 22 de setembro de 2026
