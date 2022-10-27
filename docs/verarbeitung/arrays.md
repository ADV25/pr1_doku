# Arrays

## Deklarierung & Initialisierung

``` java title="Variante 1"
int MyArray [] = new int[10];
```

``` java title="Variante 1"
int MyArray [] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
```

## Zugriff auf Arrays

``` java title="Ausgeben des 1. (0.) Elements"
System.out.print(MyArray[0]); // Ausgabe z.B. "0"
```

### mit ```for```-Schleife
``` java
for (int i = 0; i < MyArray.length; i++) {
// jeweils aktueller Wert von MyArray-Element mit MyArray[i] auslesen
}
```

### mit ```for-each```-Schleife
``` java
for (int zahl : MyArray) {
// jeweils aktueller Wert von MyArray-Element in zahl gespeichert
}
```
