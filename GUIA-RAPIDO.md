# 🚀 Guia Rápido - Villa Parrilla

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Visualizar o Site Agora
```bash
# Abra este arquivo no navegador:
index-placeholder.html
```
Este arquivo mostra o site com placeholders (áreas cinzas) onde as imagens devem ser colocadas.

### 2️⃣ Estrutura de Arquivos
```
restaurante/
├── index.html                 ← Site completo (precisa de imagens)
├── index-placeholder.html     ← Preview com placeholders (funciona agora!)
├── css/styles.css            ← Todos os estilos e animações
├── js/main.js                ← JavaScript com animações
├── assets/
│   ├── images/               ← Coloque as imagens aqui
│   └── videos/               ← Coloque o vídeo aqui
├── README.md                 ← Documentação completa
├── IMAGENS-NECESSARIAS.md    ← Lista de imagens necessárias
└── GUIA-RAPIDO.md           ← Este arquivo
```

---

## 📸 Próximos Passos

### Passo 1: Obter as Imagens
Você precisa de **19 imagens** + **1 vídeo**. Veja a lista completa em `IMAGENS-NECESSARIAS.md`

**Fontes:**
- 🔗 [Instagram @vilaparrilla](https://instagram.com/vilaparrilla)
- 🔗 [Cardápio Digital](https://livemenu.app/menu/67bf41c90afc8c31e24fc8cf)

**Ferramentas para baixar do Instagram:**
- [DownloadGram](https://downloadgram.com/)
- [InstaDownloader](https://instadownloader.net/)

### Passo 2: Organizar as Imagens
```bash
# Coloque as imagens nas pastas corretas:
assets/images/hero-poster.jpg
assets/images/bife-chorizo.jpg
assets/images/bife-ancho.jpg
# ... e assim por diante

assets/videos/fire-background.mp4
```

### Passo 3: Otimizar as Imagens
Use [TinyPNG](https://tinypng.com/) para comprimir as imagens antes de adicionar ao site.

### Passo 4: Testar o Site
Abra `index.html` no navegador e veja o resultado final!

---

## 🎨 Personalizações Rápidas

### Mudar a Cor de Destaque
Abra `css/styles.css` e procure por:
```css
--color-accent: #d4af37;  /* Mude para sua cor */
```

### Adicionar Mais Pratos no Cardápio
1. Abra `index.html`
2. Procure por `<!-- Card Bife de Chorizo -->`
3. Copie todo o bloco `<article class="menu-card">...</article>`
4. Cole abaixo e modifique o conteúdo

### Atualizar Links
Todos os links estão no `index.html`. Busque por:
- `vilaparrilla` (Instagram)
- `livemenu.app` (Cardápio Digital)

---

## 🌐 Colocar o Site Online

### Opção 1: Netlify (Recomendado - Gratuito)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `restaurante` para o site
3. Pronto! Seu site está online

### Opção 2: Vercel (Gratuito)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte com GitHub ou arraste a pasta
3. Deploy automático

### Opção 3: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

---

## ✅ Checklist de Lançamento

### Antes de Publicar
- [ ] Todas as imagens adicionadas e otimizadas
- [ ] Vídeo de background adicionado
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Testado em celular (responsivo)
- [ ] Links do Instagram e Cardápio funcionando
- [ ] Todas as animações funcionando suavemente

### Após Publicar
- [ ] Compartilhar no Instagram @vilaparrilla
- [ ] Adicionar link na bio do Instagram
- [ ] Testar em diferentes dispositivos
- [ ] Configurar Google Analytics (opcional)
- [ ] Adicionar domínio personalizado (opcional)

---

## 🎯 Recursos do Site

### ✨ Animações Implementadas
- ✅ Preloader com fade-in elegante
- ✅ Hero com vídeo em background
- ✅ Scroll reveal (elementos aparecem ao rolar)
- ✅ Hover effects nos cards (zoom nas imagens)
- ✅ Parallax suave no hero
- ✅ Cursor customizado (desktop)
- ✅ Menu mobile animado
- ✅ Transições suaves em todos os elementos

### 📱 Responsividade
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 768px)

### 🚀 Performance
- ✅ 60 FPS garantidos
- ✅ Lazy loading de imagens
- ✅ Animações aceleradas por hardware
- ✅ Código otimizado

---

## 🔗 Links Importantes

### Villa Parrilla
- **Instagram**: [@vilaparrilla](https://instagram.com/vilaparrilla)
- **Cardápio**: [LiveMenu](https://livemenu.app/menu/67bf41c90afc8c31e24fc8cf)

### Ferramentas Úteis
- **Otimizar Imagens**: [TinyPNG](https://tinypng.com/)
- **Baixar do Instagram**: [DownloadGram](https://downloadgram.com/)
- **Hospedagem Gratuita**: [Netlify](https://netlify.com)
- **Testar Responsividade**: [Responsinator](http://www.responsinator.com/)

### Documentação
- **README.md**: Documentação completa do projeto
- **IMAGENS-NECESSARIAS.md**: Lista detalhada de todas as imagens
- **GUIA-RAPIDO.md**: Este arquivo

---

## 💡 Dicas Importantes

### 1. Qualidade das Imagens
- Use sempre imagens de alta qualidade
- Fotos bem iluminadas e profissionais
- Mantenha consistência visual

### 2. Performance
- Otimize todas as imagens antes de adicionar
- Mantenha o vídeo com menos de 5MB
- Teste a velocidade do site

### 3. SEO
- Adicione textos alternativos (alt) nas imagens
- Use títulos descritivos
- Configure meta tags

### 4. Manutenção
- Atualize o cardápio regularmente
- Adicione novas fotos do Instagram
- Mantenha os links funcionando

---

## 🆘 Problemas Comuns

### As animações não funcionam
- Verifique se o arquivo `js/main.js` está carregando
- Abra o Console do navegador (F12) e veja se há erros

### As imagens não aparecem
- Verifique se os nomes dos arquivos estão corretos
- Certifique-se de que as imagens estão na pasta `assets/images/`
- Verifique se os caminhos no HTML estão corretos

### O site não fica responsivo
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o arquivo CSS está carregando

### O vídeo não reproduz
- Certifique-se de que o vídeo está em formato MP4
- Verifique se o arquivo está na pasta `assets/videos/`
- Alguns navegadores bloqueiam autoplay - isso é normal

---

## 📞 Suporte

Precisa de ajuda? Entre em contato:
- **Instagram**: [@vilaparrilla](https://instagram.com/vilaparrilla)
- **Desenvolvedor**: Bob

---

## 🎉 Pronto para Começar?

1. ✅ Abra `index-placeholder.html` para ver o preview
2. 📸 Baixe as imagens do Instagram @vilaparrilla
3. 📁 Organize as imagens nas pastas corretas
4. 🚀 Abra `index.html` e veja a mágica acontecer!

---

**Boa sorte com o projeto Villa Parrilla! 🔥🥩**

*Desenvolvido com ❤️ por Bob*