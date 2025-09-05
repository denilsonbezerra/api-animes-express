function EMAIL_NEW_ANIME_TEMPLATE(anime, adminName) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Novo Anime Cadastrado</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #f5f5f5;
      background-color: #111827;
      margin: 0;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1f2937;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    }
    .header {
      background-color: #1f2937;
      padding: 20px;
      text-align: center;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      background: linear-gradient(to right, #f87171, #dc2626);
      border-radius: 6px;
      margin: 0;
    }
    .content {
      padding: 30px;
      background-color: #1f2937;
    }
    .anime-image {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .movie-details {
      background-color: #111827;
      border-left: 4px solid #dc2626; /* red-600 */
      padding: 15px;
      margin: 20px 0;
      border-radius: 6px;
    }
    .movie-details h2 {
      margin-top: 0;
      color: #f87171; 
    }
    .movie-details p strong {
      color: #fca5a5; 
    }
    .button {
      display: inline-block;
      background: #dc2626;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      margin: 20px 0;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    .button:hover {
      background: #b91c1c;
    }
    .footer {
      background: #111827;
      color: #9ca3af;
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="logo">AnimesExpress</h1>
      <h2 style="color:#f3f4f6; margin-top:8px;">Novo Anime Cadastrado</h2>
    </div>

    <div class="content">
      <p style="color:#f5f5f5;">Olá, ${adminName},</p>
      <p style="color:#f5f5f5;">Um novo anime foi adicionado com sucesso ao catálogo.</p>
      
      <img src="${anime.imageUrl}" alt="${anime.title}" class="anime-image" />

      <div class="movie-details">
        <h2>Detalhes do Anime</h2>
        <p style="color:#f5f5f5;"><strong>Título:</strong> ${anime.title}</p>
        <p style="color:#f5f5f5;"><strong>Gênero:</strong> ${anime.gender}</p>
        <p style="color:#f5f5f5;"><strong>Descrição:</strong> ${anime.description}</p>
        <p style="color:#f5f5f5;"><strong>Avaliação:</strong> ${anime.rating}⭐</p>
        <p style="color:#f5f5f5;"><strong>Episódios:</strong> ${anime.episodes}</p>
      </div>

      <div style="text-align:center;">
        <a href="http://seusistema.com/animes/${anime.id}" class="button">Visualizar no Sistema</a>
      </div>

      <p>Atenciosamente,<br>Equipe AnimesExpress</p>
    </div>

    <div class="footer">
      <p style="color:#f5f5f5;">&copy; 2025 AnimesExpress - Todos os direitos reservados</p>
      <p style="color:#f5f5f5;">Este é um e-mail automático, por favor não responda.</p>
    </div>
  </div>
</body>
</html>
`
}

module.exports = EMAIL_NEW_ANIME_TEMPLATE;