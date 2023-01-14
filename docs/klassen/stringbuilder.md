# String Builder

## Bearbeitung von Zeichenketten - `StringBuilder`

### StringBuilder Objekt erstellen

```java
StringBuilder NewStrb = new StringBuilder();
```

### StringBuilder Konstruktoren:

```java
StringBuilder();
//Leerer StringBuilder mit einer initiale Kapazität von 16 Chars.
StringBuilder(CharSequence seq);
//String mit einer CharSequence als inhalt
StringBuilder(int capacity);
//Leerer String mit der Kapazität von dem Int
StringBuilder(String str);
//String mit einem String als inhalt
```

### Wichtige Methoden

```java

NewStrb.append(/*Variable*/);
// Anhängen von einer Varibale. (boolean, char, double, String...)

```

```java

NewStrb.charAt(int index);
// Gibt den Wert von dem Char an dem angegeben Index zurück.

```

```java

NewStrb.length();
// Gibt die Länge vom String zurück (Anzahl an Chars).

```

```java

NewStrb.reverse();
// Dreht die reihenfolge der Chars um.

```

Weiterführende Links / Quellen:

- https://docs.oracle.com/javase/7/docs/api/java/lang/StringBuilder.html
