
# Innoscripta news application

The fullstack news application is a software solution that allows users to access and interact with the latest news articles and updates. It is built using a fullstack development approach, it uses different external news api for the data retrival

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Authors

- [@fredy daniel](https://github.com/freduz)


## Local Running setup

To run the docker compose

```bash
  docker-compose up -d
```

To migrate the database

```bash
  docker exec -it innoscripta-news-app-backend-1 sh
```
```bash
  php artisan migrate:refresh
```

## Appendix

External apis used for the project

https://newsapi.org/
https://open-platform.theguardian.com/documentation/
https://newsapi.ai/documentation?tab=introduction
