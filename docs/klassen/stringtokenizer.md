# StringTokenizer

## Strings in einzelne Tokens zerlegen - `StringTokenizer`

### DecimalFormat Importieren

```java
import java.util.StringTokenizer;
```

### StringTokenizer Objekt erstellen

```java
String newStr = "Test String";
StringTokenizer NewStrT = new StringTokenizer(newStr);
```

### StringBuilder Konstruktoren:

```java

StringTokenizer(String str);
// WIP

StringTokenizer(String str, String delim);
// WIP

StringTokenizer(String str, String delim, boolean returnDelims);
// WIP
```

### Zugriff auf Tokens

```java

    String newStr = "Test String";
    StringTokenizer NewStrT = new StringTokenizer(newStr);

        while (NewStrT.hasMoreTokens()){ //Geht StringTokenizer durch so lange Tokens vorhanden sind.
            String word = NewStrT.nextToken(); // Setzt dem String "word" den Inhalt des Tokens.

            System.out.println(word);
            // Ausagbe1 : Test
            // Ausgabe2 : String
        }

```

Weiterführende Links / Quellen:

- https://docs.oracle.com/javase/7/docs/api/java/util/StringTokenizer.html
