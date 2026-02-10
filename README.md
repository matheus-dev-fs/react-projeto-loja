# Projeto Loja Zap - E-commerce de Sushi

Layout funcional de uma loja para venda de sushi e combos, com carrinho de compras, alternância entre tema claro/escuro, gerenciamento de estado com Zustand e interface responsiva.

## Funcionalidades

- Exibição de produtos organizados por categorias (Sushi e Combos).
- Carrinho de compras com adição, remoção e atualização de quantidade de produtos.
- Gerenciamento de estado global com Zustand (carrinho e checkout).
- Sistema de checkout com formulário de dados pessoais e endereço.
- Alternância de tema (claro, escuro e sistema) com next-themes.
- Interface responsiva e moderna com TailwindCSS 4.
- Validação de formulários com React Hook Form e Zod.
- Notificações toast com Sonner.
- Skeleton loading para melhor experiência do usuário.
- Componentes UI reutilizáveis (Radix UI).

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para UI
- **TypeScript** - Tipagem estática
- **TailwindCSS 4** - Framework CSS utilitário
- **Zustand** - Gerenciamento de estado global
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Radix UI** - Componentes UI acessíveis
- **Lucide React** - Ícones
- **next-themes** - Gerenciamento de temas
- **Sonner** - Notificações toast
- **class-variance-authority (CVA)** - Variantes de classes CSS
- **clsx & tailwind-merge** - Utilitários para classes CSS

## Estrutura do Projeto

- **src/app**: Páginas e layouts do Next.js (App Router).
- **src/components**: Componentes React reutilizáveis (Header, Footer, Logo, Cart, Products, Checkout).
- **src/components/ui**: Componentes de UI baseados em Radix UI (Button, Dialog, Sheet, Tabs, Input, etc.).
- **src/stores**: Stores Zustand para gerenciamento de estado (cart-store, checkout-store).
- **src/data**: Dados estáticos dos produtos (sushi e combos).
- **src/services**: Serviços para manipulação de dados.
- **src/types**: Tipos TypeScript para produtos, carrinho e checkout.
- **src/lib**: Utilitários e helpers (cn para merge de classes).
- **public/images**: Imagens dos produtos (sushi e combos).

## Sobre o Projeto

Este é um e-commerce completo de sushi desenvolvido com as mais modernas tecnologias do ecossistema React. O projeto utiliza:

- **Next.js App Router** para roteamento e renderização server-side.
- **Zustand** para gerenciamento de estado global sem boilerplate.
- **React Hook Form + Zod** para formulários performáticos com validação robusta.
- **Radix UI** para componentes acessíveis e customizáveis.
- **TailwindCSS 4** com sistema de temas (dark/light mode).

### Gerenciamento de Estado

O projeto utiliza dois stores Zustand:

- **cart-store**: Gerencia o carrinho de compras (adicionar, remover, atualizar quantidades).
- **checkout-store**: Gerencia os dados de checkout (nome e endereço do cliente).

### Componentes Principais

- **ProductsTab**: Exibe os produtos em abas (Sushi e Combos) com skeleton loading.
- **CartSidebar**: Sidebar com o carrinho de compras e botão de checkout.
- **CheckoutDialog**: Modal de checkout com formulário de dados pessoais e endereço.
- **ThemeToggle**: Alternador de tema (claro, escuro, sistema).

## Instalação

```bash
npm install
```

## Executando o Projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Build

```bash
npm run build
```

## Executar em Produção

```bash
npm start
```

## Estrutura de Dados

Os produtos são categorizados em:
- **sushi**: Produtos individuais de sushi (R$ 49,00)
- **pack**: Combos de sushi (R$ 81,00)

Cada produto contém:
- `id`: Identificador único
- `category`: Categoria do produto
- `name`: Nome do produto
- `image`: Caminho da imagem
- `price`: Preço em reais

## Validações

O formulário de checkout utiliza Zod para validação:
- **Nome**: Campo obrigatório
- **Endereço completo**: Rua, número, bairro, cidade e estado obrigatórios

## Créditos

Projeto desenvolvido como parte do curso de React da [B7Web](https://b7web.com.br/).  
