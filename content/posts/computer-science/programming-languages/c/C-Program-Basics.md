+++
title = "C Program — Basics"
date = 2023-08-13 16:00:00
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

# Getting Started

* **Programming language**
    * C
    * C++
    * Java
    * JavaScript
    * Python

* **Source-code Editor**
    * VS Code
    * Dev-C++
    * Code::Blocks
    * Notepad++

* **Compiler**

<img src="https://i.imgur.com/zNw9fcm.png" alt="" width="600">

# Introduction

* Although C is an old and relatively low-level language, it is still very popular today.
* It is the foundation of many languages — once you know C, picking up others is much easier.
* C is closely tied to UNIX, since it was created to write the UNIX operating system.
* C is fast compared with most other languages.

# Base Concepts

**Rule**
* Left to Right, Up to Down
* `;` at the end of each line of instructions
* `return 0 ;` ends the program
* Use TAB
* `{}` wraps the content of a structure

**Comment**
* `// … ` single line
* `/* … */` multi-line

# Syntax

**Getting started**

```c
#include <stdio.h>

int main(){
    ...
    return 0;
}
```

* **Including a library**

    Standard Library Header File.

{{% callout "info" %}}
`#include <stdio.h>` — roughly, it handles input/output such as `scanf` / `printf`.

<img src="https://i.imgur.com/4Cs2ltK.png" alt="" width="400">

> It gives the computer a "dictionary" (the header file) to look up what the program's statements mean.
{{% /callout %}}

* **Main function**

    *The main body of execution — the entry point of any program.*

    > Note: this becomes clearer once you learn about functions.

# Variables

{{% callout "warning" %}}
*Simply put, a variable is a value that can change.*

* Type
* Label
* Data

![](https://i.imgur.com/BrA1C6O.png)
{{% /callout %}}

## Declare

```c
DataType  variableName  =  data;
```

![](https://i.imgur.com/0VgZ7UH.png)

## Data Type

* **Primitive Data Types** :
      int, float, char, bool, void

* **Derived Data Types** :
      function, array, pointer, reference

* **Abstract or User-Defined Data Types** :
      Class, Structure, Union, Enumeration, Typedef-defined datatype

## Primitive Data Type

These data types are built-in or predefined and can be used directly to declare variables.

| Data Type              | byte   | Remark                                          |
| ---------------------- | ------ | ----------------------------------------------- |
| Int (integer)          | 4 byte | range up to ≈ 10^9                              |
| Float (single-precision)| 4 byte |                                                 |
| Double (double-precision)| 8 byte | range from -128 to 127 or 0 to 255             |
| Char (character)       | 1 byte | True(1) or False(0)                             |
| Bool (boolean)         | 1 byte | used for a function that does not return a value |
| Void (none/empty)      |        |                                                 |

<img src="https://i.imgur.com/Ke9TrzS.png" alt="" width="650">

> 1 byte == 8 bits

## Identifiers

* Can contain **letters**, **digits** and **underscores**
* Must begin with a **letter** or an **underscore (_)**
* **case sensitive** (myVar and myvar are different variables)
* Cannot contain **whitespace** or **special characters** ( ! # % … )
* **Reserved words** cannot be used (C keywords such as `int`)

{{% callout "success" %}}
* Names should be descriptive and sensible.
* Avoid abbreviations — though abbreviations familiar to people in the field (even if not on this project) are fine.
* Variable names (including function parameters) are all lowercase, with words joined by underscores.

> [Naming conventions](https://www.cclo.idv.tw/google-cpp-styleguide-zhTW/naming.html)
{{% /callout %}}

## Constants

Constants.

> A value that cannot be changed.

``` c
const  DataType  variableName  =  data;
```

![](https://i.imgur.com/RdfogMV.png)

# I/O

## Printf

Output.

> Print data to the screen.

![](https://i.imgur.com/UcHKcxZ.png)

Printing variables.

> Print a variable's value to the screen.

![](https://i.imgur.com/Y2jF469.png)

<img src="https://i.imgur.com/LkMNcEe.png" alt="" width="500">

Printing variables in a specific format.

> Print a variable in a specific format to the screen.

![](https://i.imgur.com/aNKWHnt.png)

## Escape

* `\ `  escape character
* `\0`  null character (NULL)
* `\t`  TAB
* `\n`  newline
* `\a`  bell (BEL)
* `\"`  double quote
* `\'`  single quote

## Scanf

Input.

> Read input; you need a variable to store the input data.

![](https://i.imgur.com/aF1feJR.png)

![](https://i.imgur.com/0iOhC03.png)

## Getchar/Putchar

Character input / output.

> If more than one character is entered, `getchar` takes the first one and leaves the rest in the buffer until the next `getchar` or `scanf` reads them.

<img src="https://i.imgur.com/hYCX8d6.png" alt="" width="500">

# Operator

{{% callout "warning" %}}
* Arithmetic Operator
* Assignment Operator
* Relational Operator / Comparison Operator
* Logical Operator
* Unary Operator
{{% /callout %}}

![](https://i.imgur.com/Cv5REB2.png)

## Arithmetic Operators

* `+` addition
* `-` subtraction
* `*` multiplication
* `/` division (quotient)
* `%` modulo (remainder)

## Assignment Operators

* `=` assignment
* `+=` compound assignment

![](https://i.imgur.com/c67umxK.png)

## Relational Operators

* `>` greater than
* `>=` greater than or equal to
* `<` less than
* `<=` less than or equal to
* `==` equal to
* `!=` not equal to

{{% callout "success" %}}
**`=` VS. `==`**

* `=`  assignment: `a = b` stores b's value into variable a.
* `==` equality: `a == b` — are a and b equal? True/False.
{{% /callout %}}

## Logical Operators

* `&&` AND

<img src="https://i.imgur.com/93HxV8Y.png" alt="" width="200">

* `||` OR

<img src="https://i.imgur.com/zNv0lzf.png" alt="" width="200">

* `!` NOT

<img src="https://i.imgur.com/TEkoCZD.png" alt="" width="200">

## Unary Operators

`++ / --`

* postfix-expression ++
* ++ unary-expression

<img src="https://i.imgur.com/Og4xvza.png" alt="" width="450">

## Challenge

![](https://i.imgur.com/O2W6ACG.png)
> (B)

![](https://i.imgur.com/IY5WjIp.png)
> (A)

![](https://i.imgur.com/hLVBrye.png)
> (A)

![](https://i.imgur.com/HJIZ7Yf.png)
> (B)

# Encoding

{{% callout "warning" %}}
Encoding is the process of converting information from one format to another.

![](https://i.imgur.com/tI3Kmgs.png)
{{% /callout %}}

## ASCII

> **A**merican **S**tandard **C**ode for **I**nformation **I**nterchange

{{% callout "info" %}}
**Character encoding — 128 total**

* Control characters   33
* Printable characters   95

> [ASCII (Wikipedia)](https://zh.wikipedia.org/wiki/ASCII)
{{% /callout %}}

{{% callout "success" %}}
**Uppercase → lowercase**

* **Uppercase A** — decimal: 65
* **Lowercase a** — decimal: 97

\# $97 - 65 = 32$
\# **Upper- and lowercase differ by 32 in decimal.**
{{% /callout %}}
