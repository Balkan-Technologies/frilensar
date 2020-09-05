# Routing

By default, fiecare ruta de forma /:page/:subpage va corespunde paginilor din Wordpress Admin (cu exceptie pagina sectiunea `despre` care are routing static partial separat)
Acestea vor randa componenta `GenericPage` si vor executa un query de tip `Page` bazat pe slug (`page` sau `subpage`)
Pentru a configura rute individuale, in `/config/pages.js`, in `pagesConfig` se va adauga o cheie noua de forma:

```javascript
const pagesConfig = {
  // ...
  "nume_ruta": {
    component: ComponentaCareReprezintaPagina,
    query: QUERY_UL_CARE_VA_FI_EXECUTAT,
    dataKeyName: 'numeleCheieiLaCareSeGasescDatele',
  },
  // Pentru a folosi o valoare dinamica pentru subpage
  "nume_ruta/*": {
    component: ComponentaCareReprezintaPagina,
    query: QUERY_UL_CARE_VA_FI_EXECUTAT,
    dataKeyName: 'numeleCheieiLaCareSeGasescDatele',
  },
  // ...
}
```

# Listare entitati custom
Componenta de listare va lista postarile dintr-o anumita categorie (toate categoriile daca nu este specificat)
In cazul in care se vor lista entitati custom (Custom Post Type), trebuie adaugate in config-ul componentei.
In `/components/Core/BlockRenderer/Blocks/Content/ArticleList/index.js` in `postTypesToQuery` se va adauga:
```javascript
const postTypesToQuery = {
  // ...
  'numele_entitatii_asa_cum_vine_in_attributes': {
    query: QUERY,
    dataKeyName: 'cheia_la_care_sunt_datele',
    parentPath: 'numele paginii care listeaza entitatile'
  },
  // ...
};
```
