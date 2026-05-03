# Transfer Zona

Fudbalski transfer portal sa AI procjenama vjerovatnoće transfera, najnovijim vijestima i glasinama.

## Pokretanje

```bash
python3 -m http.server 8080
```

Otvori http://localhost:8080/ u browseru.

## Struktura

| Fajl | Opis |
|------|------|
| `index.html` | Početna stranica |
| `article.html` | Šablon članka |
| `css/styles.css` | Stilovi |
| `js/main.js` | JavaScript |

## Funkcionalnosti

- Breaking news ticker sa auto-rotacijom
- Hero sekcija sa featured člankom
- Najčitanije vijesti sidebar
- Trending igrači sa promjenom pozicije
- AI procjena vjerovatnoće transfera
- Glasine/Rumours kartice sa progress barovima
- Responsive dizajn (desktop, tablet, mobile)
- Tamna tema sa žutim akcentom
- Animacije pri scrollanju
