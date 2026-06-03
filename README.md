# 🔥 Villa Parrilla - Site Institucional

Site premium para o Villa Parrilla com animações cinematográficas e experiência imersiva inspirado no melhor da web design moderna.

## 🎯 Sobre o Villa Parrilla

O Villa Parrilla é um restaurante especializado em parrilla argentina autêntica, trazendo os sabores tradicionais da Argentina para o Brasil. Com técnicas tradicionais de preparo na parrilla e cortes nobres selecionados, oferecemos uma experiência gastronômica única.

### 🔗 Links Oficiais
- **Instagram**: [@vilaparrilla](https://instagram.com/vilaparrilla)
- **Cardápio Digital**: [LiveMenu](https://livemenu.app/menu/67bf41c90afc8c31e24fc8cf?cross_session=done&utm_source=ig&utm_medium=social&utm_content=link_in_bio)

---

## ✨ Características Principais

### 🎬 Animações e Efeitos Visuais
- **Preloader Premium**: Tela de carregamento com fade-in e letter-spacing animado
- **Hero Imersivo**: Vídeo em background com overlay de gradiente
- **Reveal on Scroll**: Elementos surgem suavemente usando IntersectionObserver API
- **Microinterações**: Hover effects nos cards com zoom de imagem (scale 1.08)
- **Parallax Suave**: Efeito parallax no hero section
- **Cursor Customizado**: Cursor premium com efeito de seguimento

### 🚀 Performance
- **60 FPS garantidos**: Todas animações usam `transform` e `opacity` (aceleradas por hardware)
- **IntersectionObserver**: Detecção nativa de scroll sem bibliotecas pesadas
- **Lazy Loading**: Carregamento otimizado de imagens
- **Debounce**: Otimização de eventos de scroll
- **Will-change**: Propriedades CSS para melhor performance

### 📱 Responsividade
- Design totalmente responsivo
- Menu mobile com animação suave
- Breakpoints: 1024px, 768px, 480px
- Touch-friendly em dispositivos móveis

---

## 📁 Estrutura do Projeto

```
restaurante/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos com animações
├── js/
│   └── main.js            # JavaScript com IntersectionObserver
├── assets/
│   ├── images/            # Imagens do site
│   │   ├── hero-poster.jpg
│   │   ├── restaurant-interior.jpg
│   │   ├── chef-preparing.jpg
│   │   ├── meat-grill.jpg
│   │   ├── bife-chorizo.jpg
│   │   ├── bife-ancho.jpg
│   │   ├── asado-tira.jpg
│   │   ├── entranha.jpg
│   │   ├── vacio.jpg
│   │   ├── provoleta.jpg
│   │   ├── experience-bg.jpg
│   │   └── instagram-1.jpg até instagram-6.jpg
│   └── videos/
│       └── fire-background.mp4
├── README.md
├── IMAGENS-NECESSARIAS.md
└── .gitignore
```

---

## 🎨 Paleta de Cores

```css
--color-primary: #000000      /* Preto puro */
--color-secondary: #1a1a1a    /* Preto suave */
--color-accent: #d4af37       /* Dourado premium */
--color-text: #ffffff         /* Branco */
--color-text-secondary: #cccccc
--color-text-muted: #999999
```

---

## 🔤 Tipografia

- **Títulos**: Playfair Display (Serif elegante)
- **Corpo**: Montserrat (Sans-serif moderna)

---

## 🎬 Animações Implementadas

### 1. Preloader
```javascript
// Fade-in com letter-spacing progressivo
animation: fadeInLetterSpacing 1.5s cubic-bezier(0.4, 0, 0.2, 1)
// Desliza para cima após 2.5s
transform: translateY(-100%)
```

### 2. Hero Section
```javascript
// Elementos surgem de baixo para cima
transform: translateY(30px) -> translateY(0)
opacity: 0 -> 1
// Duração: 1s após preloader
```

### 3. Scroll Reveal
```javascript
// IntersectionObserver com threshold 0.15
// Elementos ganham escala e opacidade
transform: translateY(30px) scale(0.95) -> translateY(0) scale(1)
opacity: 0 -> 1
```

### 4. Cards do Menu
```javascript
// Hover: zoom na imagem
transform: scale(1) -> scale(1.08)
// Overflow hidden para não sair das bordas
overflow: hidden
```

### 5. Botões CTA
```javascript
// Preenchimento da esquerda para direita
::before {
  left: -100% -> left: 0
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
}
```

### 6. Links do Menu
```javascript
// Linha sublinhada expande do centro
::after {
  width: 0 -> width: 100%
  left: 50%
  transform: translateX(-50%)
}
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Animações avançadas, Grid, Flexbox
- **JavaScript ES6+**: IntersectionObserver, Event Listeners
- **Google Fonts**: Playfair Display, Montserrat

---

## 📦 Como Usar

### 1. Adicionar Imagens
Consulte o arquivo `IMAGENS-NECESSARIAS.md` para a lista completa de imagens necessárias.

**Fontes recomendadas:**
- Instagram [@vilaparrilla](https://instagram.com/vilaparrilla)
- [Cardápio Digital](https://livemenu.app/menu/67bf41c90afc8c31e24fc8cf)
- Fotos próprias do restaurante

### 2. Adicionar Vídeo
Coloque o vídeo de fogo/brasa/parrilla em `assets/videos/fire-background.mp4`
- Formato: MP4 (H.264)
- Resolução: 1920x1080px
- Duração: 10-30 segundos (loop)
- Tamanho: < 5MB (otimizado)

### 3. Abrir o Site
Simplesmente abra o arquivo `index.html` em um navegador moderno.

### 4. Hospedagem
Para colocar online, você pode usar:
- **Netlify** (gratuito, recomendado)
- **Vercel** (gratuito)
- **GitHub Pages** (gratuito)
- **Hostinger** (pago)

---

## 🌐 Navegadores Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

---

## 📱 Recursos Mobile

- Menu hambúrguer animado
- Touch gestures otimizados
- Vídeo com poster para economia de dados
- Cursor customizado desabilitado em mobile
- Layout adaptativo com breakpoints

---

## ⚡ Otimizações de Performance

1. **Hardware Acceleration**
   - Uso de `transform` e `opacity`
   - `will-change` em elementos animados
   - `backface-visibility: hidden`

2. **Lazy Loading**
   - Imagens carregam sob demanda
   - IntersectionObserver para detecção

3. **Debounce**
   - Eventos de scroll otimizados
   - Reduz chamadas desnecessárias

4. **CSS Otimizado**
   - Seletores eficientes
   - Animações com cubic-bezier
   - Transições suaves

---

## 🎯 Seções do Site

1. **Hero**: Vídeo background com CTAs para Instagram e Cardápio
2. **Sobre**: História do Villa Parrilla e diferenciais
3. **Cardápio**: 6 pratos principais da parrilla argentina
4. **Experiência**: Estatísticas e ambiente
5. **Galeria**: Feed do Instagram @vilaparrilla
6. **Contato**: Links para Instagram e Cardápio Digital
7. **Footer**: Links e informações

---

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --color-accent: #d4af37; /* Sua cor aqui */
}
```

### Alterar Fontes
Modifique o link do Google Fonts no `index.html` e as variáveis:
```css
:root {
    --font-primary: 'Sua Fonte', serif;
}
```

### Adicionar Mais Pratos
Copie a estrutura de um card existente no cardápio e ajuste o conteúdo.

### Atualizar Links
Todos os links para Instagram e Cardápio Digital estão no HTML. Busque por:
- `https://instagram.com/vilaparrilla`
- `https://livemenu.app/menu/67bf41c90afc8c31e24fc8cf`

---

## 📝 Integração com Redes Sociais

### Instagram
O site possui múltiplos links para o Instagram @vilaparrilla:
- Header (botão "Ver Cardápio")
- Hero (botão "Siga no Instagram")
- Seção Galeria (feed e botão de seguir)
- Seção Contato (botão Instagram)
- Footer (link nas redes sociais)

### Cardápio Digital
Links diretos para o LiveMenu em:
- Menu de navegação
- Hero (botão principal)
- Cards do cardápio (botão "Ver no Menu")
- Seção Contato
- Footer

---

## 🚀 Próximos Passos

- [ ] Adicionar todas as imagens (ver IMAGENS-NECESSARIAS.md)
- [ ] Adicionar vídeo de background
- [ ] Testar em diferentes dispositivos
- [ ] Otimizar imagens para web
- [ ] Configurar Google Analytics (opcional)
- [ ] Adicionar meta tags para SEO
- [ ] Configurar domínio personalizado
- [ ] Integrar com WhatsApp Business (opcional)
- [ ] Adicionar sistema de reservas online (opcional)

---

## 📊 SEO e Meta Tags

O site já possui meta tags básicas. Para melhorar o SEO:

1. **Adicione mais meta tags** no `<head>`:
```html
<meta name="keywords" content="villa parrilla, parrilla argentina, churrasco, restaurante">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Villa Parrilla">
```

2. **Crie um sitemap.xml**
3. **Configure Google Search Console**
4. **Adicione structured data (JSON-LD)**

---

## 🔒 Segurança

- Todos os links externos usam `target="_blank"` para segurança
- Adicione `rel="noopener noreferrer"` aos links externos se necessário
- Configure HTTPS quando hospedar

---

## 📞 Suporte

Para dúvidas ou suporte:
- Instagram: [@vilaparrilla](https://instagram.com/vilaparrilla)
- Desenvolvedor: Bob

---

## 📄 Licença

Este projeto foi desenvolvido especificamente para o Villa Parrilla.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ e ☕ por **Bob**

**Tecnologias:** HTML5, CSS3, JavaScript ES6+, IntersectionObserver API

---

## 🎉 Agradecimentos

- Villa Parrilla pela confiança no projeto
- Comunidade de desenvolvedores web
- Inspiração: Assador e outros sites premium de gastronomia

---

**Nota**: Este é um site premium com foco em performance e experiência do usuário. Todas as animações rodam a 60 FPS em dispositivos modernos. O design é totalmente responsivo e otimizado para conversão.

🔥 **Villa Parrilla - Sabor Autêntico da Argentina** 🔥