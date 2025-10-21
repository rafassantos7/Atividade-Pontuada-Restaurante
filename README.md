# Atividade Pontuada — Restaurante

Este repositório contém a implementação da atividade acadêmica "Restaurante" — um sistema para gerenciar mesas, cardápio e pedidos. Este README serve como documentação inicial para executar, testar e contribuir no projeto.

---

## Visão geral

Objetivo:
- Implementar uma aplicação que gerencie o fluxo básico de um restaurante: cadastro/consulta de itens do cardápio, abertura/fechamento de mesas, criação e acompanhamento de pedidos.

Funcionalidades esperadas (exemplo):
- CRUD de itens do cardápio
- Abertura e fechamento de mesas
- Criação e atualização de pedidos
- Cálculo de total da conta por mesa

> Observação: Ajuste as seções abaixo conforme a tecnologia e estrutura reais do repositório.

---

## Tecnologias (preencha conforme o projeto)
- Linguagem: <substituir: ex. Java, Python, JavaScript/Node.js>
- Frameworks: <substituir: ex. Spring Boot, Flask, Express, FastAPI>
- Banco de dados: <substituir: ex. SQLite, PostgreSQL, H2, MongoDB>
- Gerenciador de pacotes: <substituir: ex. Maven/Gradle, pip, npm/yarn>

---

## Estrutura sugerida do repositório
- src/              - código-fonte
- tests/            - testes automatizados
- docs/             - documentação adicional
- README.md         - este arquivo
- .gitignore

A árvore real pode variar — substitua conforme a organização do seu projeto.

---

## Pré-requisitos

- Git
- Runtime da linguagem do projeto (JDK, Python, Node.js, etc.)
- (Opcional) Banco de dados, se não for embarcado

---

## Instalação (exemplos — ajuste conforme sua stack)

1) Clone o repositório
```bash
git clone https://github.com/rafassantos7/Atividade-Pontuada-Restaurante-Dupla.git
cd Atividade-Pontuada-Restaurante-Dupla
```

2) Instale dependências (escolha a que aplica)
- Node.js:
```bash
npm install
# ou
yarn install
```

- Python:
```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
.\\.venv\\Scripts\\activate  # Windows
pip install -r requirements.txt
```

- Java (Maven):
```bash
mvn clean install
```

---

## Executando a aplicação (exemplos)

- Node.js (Express):
```bash
npm start
# ou
node src/index.js
```

- Python (Flask/FastAPI):
```bash
export FLASK_APP=app.py
flask run
# ou FastAPI
uvicorn app:app --reload
```

- Java (Spring Boot):
```bash
mvn spring-boot:run
```

Abra http://localhost:3000 (ou a porta configurada) para acessar.

---

## API / Endpoints (exemplo esperado)

- GET /cardapio — listar itens do cardápio  
- POST /cardapio — adicionar item ao cardápio  
- GET /pedidos — listar pedidos  
- POST /pedidos — criar pedido  
- GET /pedidos/{id} — obter pedido por id  
- PUT /mesas/{id}/fechar — fechar conta da mesa

Documente os endpoints reais com parâmetros e exemplos de request/response.

---

## Testes

Execute a suíte de testes conforme a stack:
- Node.js:
```bash
npm test
```
- Python:
```bash
pytest
```
- Java:
```bash
mvn test
```

Adicione instruções detalhadas se houver setup de banco de dados de teste ou fixtures.

---

## Contribuindo

Passos sugeridos:
1. Fork deste repositório
2. Crie uma branch com a feature/bugfix:
```bash
git checkout -b feature/descricao
```
3. Faça suas alterações e adicione testes
4. Commit e push:
```bash
git add .
git commit -m "Descrição das mudanças"
git push origin feature/descricao
```
5. Abra um Pull Request descrevendo as mudanças

Checklist para PR:
- [ ] Código compila/executa
- [ ] Testes passam
- [ ] Documentação atualizada (README, comentários, docs)

---

## Arquitetura e decisões de projeto

Descreva aqui decisões importantes (ex.: escolha de banco, padrões adotados, endpoints principais, modelos de domínio como Pedido, Mesa, ItemCardapio). Explique trade-offs, limitações conhecidas e próximos passos planejados.

---

## Contato

- Autor(es): rafassantos7  
- E-mail/GitHub: https://github.com/rafassantos7
