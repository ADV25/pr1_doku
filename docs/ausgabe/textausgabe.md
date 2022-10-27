# Textausgabe

## ```System.out.print```

Einfache Textausgabe

## ```System.out.printl```

Einfache Textausgabe mit Zeilenumbruch am Ende

## ```System.out.printf```

Textausgabe mit vordefiniertem Format

``` java
System.out.printf(FORMAT, ARGUMENTE);
```

### Formatierungsregeln

- ```flags```
- ```width```
- ```precision```
- ```conversion-character```

``` java
%[flags][width][.precision]conversion-character
```

```[]``` = optional

#### Mögliche Werte für ```conversion-character```

| Datentyp         | Kurz-Schreibweise |
|------------------|-------------------|
 | String           | `s`               |
 | Decimal Integers | `d`               |
 | Fließkommazahl   | `f`               |
| Datum/Zeit       | `t`               |

### Weiterführende Links / Quellen

- https://www.baeldung.com/java-printstream-printf
