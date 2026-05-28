# Card Visita — Augusto Gaipo

Portfólio pessoal estático desenvolvido com HTML, CSS e JavaScript puro, hospedado via GitHub Pages.

**Disciplina:** Introdução à Programação · IBMEC — 1º semestre de 2025

## Funcionalidades

- **Tema claro/escuro** — alternância com preferência salva no `localStorage`
- **Efeito de digitação** — subtítulo animado com frases rotativas e cursor piscando
- **Scroll reveal** — seções aparecem com animação suave ao entrar na viewport
- **Copiar e-mail** — botão de contato copia o endereço para o clipboard com feedback visual (toast)
- **Galeria de fotos** — grade com efeito hover de zoom
- **Vídeo incorporado** — player do YouTube responsivo em proporção 16:9
- **Background animado** — blobs com gradiente e efeito de movimento contínuo

## Estrutura

```
cardvisita/
├── index.html       # estrutura e marcação semântica
├── style.css        # estilos, tema e animações
├── script.js        # lógica interativa (tema, digitação, scroll reveal, toast)
└── assets/
    ├── foto1.jpg    # imagem da galeria
    ├── foto2.jpg    # medalha OBMEP
    └── foto3.jpg    # avatar e galeria
```

## Como rodar

Não há dependências ou etapas de build. Basta abrir o arquivo diretamente no navegador:

```bash
# opção 1 — abrir direto
start index.html

# opção 2 — servidor local com VS Code
# instale a extensão "Live Server" e clique em "Go Live"
```

## Deploy

O site é publicado automaticamente via **GitHub Pages** a cada push na branch `main`.

> Em `Settings → Pages`, configure a fonte como `Deploy from a branch`, branch `main`, pasta `/ (root)`.

URL pública: `https://augustogaipo.github.io/ibtech-projeto01-augusto`

## Tecnologias

- HTML5 semântico
- CSS3 — variáveis, animações, grid, `clamp()`, `IntersectionObserver`
- JavaScript vanilla — sem frameworks ou dependências externas
- Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## Contato

- GitHub: [github.com/augustogaipo](https://github.com/augustogaipo)
- LinkedIn: [linkedin.com/in/augusto-amaral-gaipo-silva-381025358](https://www.linkedin.com/in/augusto-amaral-gaipo-silva-381025358)
- E-mail: augustogaiposilva@gmail.com
