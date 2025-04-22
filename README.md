# 🧮 Calculadora com Testes Unitários

Este projeto consiste em uma **calculadora simples desenvolvida em React com TypeScript**, acompanhada de **testes unitários utilizando o Vitest**. O objetivo é praticar testes em um ambiente moderno com Vite, como parte do projeto de estudos no **Bootcamp do Mestre QA**.

---

## ✅ Funcionalidades

- Soma
- Subtração
- Multiplicação
- Divisão (com validação de divisão por zero)
- Porcentagem
- Troca de sinal (+/-)
- Memória:
  - M+ (adiciona valor à memória)
  - M- (subtrai valor da memória)
  - MR (recupera valor da memória)
  - MC (limpa memória)

---

## 🧰 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Vitest (estrutura de testes)

---

## ⚙️ Requisitos

- Node.js (versão recomendada: 18 ou superior)

Para verificar sua versão do Node:
node -v

📥 Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/testes-unitarios-calculadora.git
cd testes-unitarios-calculadora

Instale as dependências:
npm install

▶️ Executar o Projeto
Para iniciar a aplicação em ambiente de desenvolvimento:
npm run dev

🧪 Executar Testes
npx vitest run

Para rodar com detalhes (modo verbose):
npx vitest run --reporter=verbose

Ou, se preferir modo visual com interface web:
npx vitest --ui
