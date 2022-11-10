Title: Formatierung

# Formatierung bei der Ausgabe

## Formatierung von Zahlen - ```DecimalFormat```

### DecimalFormat Importieren

``` java
import java.text.DecimalFormat;
```
### DecimalFormat Objekt erstellen

``` java
DecimalFormat dicimalformatName = new DecimalFormat(/*pattern*/);
```

### Speciale "Pattern" Charaktere 

| Symbol | Bedeutung                                 |
|:------:|-------------------------------------------|
|```0``` | Angezeigte Ziffer                         | 
|```#``` | Bei einer Null keine Ziffer Angezeigt     |
|```.``` | Dezimaltrennzeichen                       |
|```,``` | Gruppierungstrennzeichen                  |

### Ausgabe Beispiele

``` java 
DecimalFormat dicimalformatName = new DecimalFormat("#.00");

System.out.println(dicimalformatName.format(42.404)); 
// Ausgabe: 42.40
```
``` java 
DecimalFormat dicimalformatName = new DecimalFormat("#.##");

System.out.println(dicimalformatName.format(42.404)); 
// Ausgabe: 42.4
```
``` java 
DecimalFormat dicimalformatName = new DecimalFormat("#,###,###");

System.out.println(dicimalformatName.format(1337420.404)); 
// Ausgabe: 1.337.420
```

 Weiterführende Links / Quellen:

- https://docs.oracle.com/javase/7/docs/api/java/text/DecimalFormat.html
