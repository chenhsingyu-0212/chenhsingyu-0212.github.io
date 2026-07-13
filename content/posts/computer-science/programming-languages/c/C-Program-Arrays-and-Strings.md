+++
title = "C Program — Arrays & Strings"
date = 2023-08-13 18:00:00
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

# Array

{{% callout "warning" %}}
**A variable holds a single value, but storing many values one by one quickly gets tedious.**

For example, to record three students' scores:

![](https://i.imgur.com/yxADgiI.png)
{{% /callout %}}

## Declare

```c
DataType  arrayName[size]  =  { values };
```

![](https://i.imgur.com/bIWsM2x.png)

## Array Input/Output

![](https://i.imgur.com/HKPxL5C.png)

# Two-dimensional Arrays

> An array whose elements are themselves arrays.

![](https://i.imgur.com/uonUkQW.png)

## Declare

```c
DataType  arrayName[column][row]  =  { {values}, {values} };
```

![](https://i.imgur.com/vYES67x.png)

## Two-dimensional Arrays Input/Output

![](https://i.imgur.com/4oBSpHt.png)

# String

{{% callout "warning" %}}
**Strings**

C has no dedicated `string` type, so a string is represented as a **char array**:

![](https://i.imgur.com/7bEw2pt.png)

…or, alternatively, as a **pointer**:

![](https://i.imgur.com/gYpZUFp.png)

![](https://i.imgur.com/wl4nS1l.png)
{{% /callout %}}

## Declare

```c
char  name[size]  =  {'d', 'a', 't', 'a'};
```

![](https://i.imgur.com/xb4Q2uB.png)

```c
char  name[size]  =  "data";
```

![](https://i.imgur.com/h0UMZFV.png)

![](https://i.imgur.com/WsBTfOE.png)

## Gets/Fgets/Puts

String input / output.

![](https://i.imgur.com/r4zDzNB.png)

{{% callout "danger" %}}
`gets` doesn't know the size of the char array — it only stops at a newline or EOF — so it can cause a **buffer-overflow** security problem.
{{% /callout %}}

## Scanf

![](https://i.imgur.com/hbh5YRs.png)

![](https://i.imgur.com/F3MgHFO.png)

## String functions

{{% callout "warning" %}}
**There are many important string functions defined in the `string.h` library.**

![](https://i.imgur.com/woc4ULa.png)
{{% /callout %}}

### Strlen

{{% callout "info" %}}
**`strlen()` returns the length of the given string.**
**It doesn't count the null character `'\0'`.**

![](https://i.imgur.com/YHlUiQf.png)
{{% /callout %}}

### Strcpy

{{% callout "info" %}}
**`strcpy(destination, source)` copies the source string into destination.**

![](https://i.imgur.com/bICjjz7.png)
{{% /callout %}}

### Strcat

{{% callout "info" %}}
**`strcat(first_string, second_string)` concatenates two strings; the result is returned in first_string.**

![](https://i.imgur.com/4nAjKeE.png)
{{% /callout %}}

### Strcmp

{{% callout "info" %}}
**`strcmp(first_string, second_string)` compares two strings and returns 0 if they are equal.**

![](https://i.imgur.com/j4KTJT2.png)
{{% /callout %}}

### Strrev

{{% callout "info" %}}
**`strrev(string)` returns the reverse of the given string.**

![](https://i.imgur.com/h8NnjrJ.png)
{{% /callout %}}

### Strlwr

{{% callout "info" %}}
**`strlwr(string)` returns the string in lowercase.**

![](https://i.imgur.com/GjqXh9I.png)
{{% /callout %}}

### Strupr

{{% callout "info" %}}
**`strupr(string)` returns the string in uppercase.**

![](https://i.imgur.com/hwMMmBc.png)
{{% /callout %}}

### Strstr

{{% callout "info" %}}
**`strstr()` returns a pointer to the first occurrence of the match string within the given string.**
**It returns the substring from that first match to the end of the string.**

![](https://i.imgur.com/hwTyd85.png)

![](https://i.imgur.com/YBf6JWh.png)
{{% /callout %}}
