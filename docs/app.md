# Podcast filter

### Descrição
Um app de streaming que filtra seu podcast preferidos por tema, ou seja, você
pode assistir todos os podcasts de um canal filtrados por um tema que vc escolher.

### Domínio
Podcasts feitos em vídeos

### Features
- Filtrar episódios de Podcasts em sessões por categoria
    - fitness, negócios, programação, nutrição ...
- Filtrar episódios por nome de Podcast

### Como vou implementar
Vou restornar em uma API Rest (json)
o nome do podcast, nome do epsódio, imagem de capa e link

```js
[
    {
        "videoID": "x2FV-_37_PI"
        "podcastName": "Renato Cariani";
        "epsode": "LEO STRONDA - IRONCAST #97";
        "image": "https://i.ytimg.com/vi/x2FV-_37_PI/hq720.jpg";
        "category": ["saúde, fitness, motivação"];

    },
    {
        "videoID": "x2FV-_37_PI"
        "podcastName": "Renato Cariani";
        "epsode": "LEO STRONDA - IRONCAST #97";
        "image": "https://i.ytimg.com/vi/meYOXvu-iPc/hq720.jpg";
        "link": "https://www.youtube.com/watch?v=x2FV-_37_PI";
        "category": ["saúde, fitness, motivação"];

    }
]

```