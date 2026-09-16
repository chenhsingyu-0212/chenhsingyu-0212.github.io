+++
title = "C Program — Structs, Scope & Algorithm"
date = 2023-08-13 20:00:00
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

# Struct

{{% callout "warning" %}}
**A structure is a derived (composite) data type that groups several attributes into one type; those attributes can be primitive types or other composite types.**

![](https://i.imgur.com/MCF0h5s.png)
{{% /callout %}}

## Declaring a struct

![](https://i.imgur.com/CJ7nUxq.png)

![](https://i.imgur.com/9KygAr5.png)

![](https://i.imgur.com/YqmzaDF.png)

![](https://i.imgur.com/L0QwlYt.png)

## Accessing struct members

![](https://i.imgur.com/N3gRTDt.png)

## Nested structs

![](https://i.imgur.com/RnDaH5m.png)

## Arrays of structs

![](https://i.imgur.com/BIGGKZN.png)

## Accessing members through a struct pointer

![](https://i.imgur.com/h28z3hW.png)

# Scope

{{% callout "warning" %}}
**Scope is the region where a variable can be used — usually the `{ }` block it is declared in.**

**Example:** a custom function and `main` are two separate `{ }` blocks, so reusing the same variable name in both causes no error — to the program they are two different scopes.

**Example:** a variable defined inside a `while`/`for` loop in `main` lives only within that loop's `{ }` and cannot be used outside it.
{{% /callout %}}

# Argument Passing

## Call by Value

![](https://i.imgur.com/eIlsSrX.png)

> With call by value, the `a`/`b` in `main` and the `a`/`b` inside the swap function live in
> separate memory, so they never interfere with each other — but it needs two extra memory slots
> to hold the copies.

## Call by Address

![](https://i.imgur.com/WYn18di.png)

> The swap function swaps the values at the addresses passed in. In `main` we pass the addresses
> with the `&` operator; after one run you can see that before the swap `a` = 1 and `b` = 0, and
> after swapping through their memory addresses their values become 0 and 1 respectively.

# Algorithm

{{% callout "warning" %}}
**An algorithm is a finite set of steps that solves a specific problem.**
**In essence, it's just a logical way of thinking through a problem.**
{{% /callout %}}

{{% callout "info" %}}
**Example: say the specific problem is "turn apples into a glass of apple juice."**

You could do it with these steps:

1. Wash the apples.
2. Peel and core the apples.
3. Put the prepared apples into the blender.
4. Add a suitable amount of water.
5. Press the blender's start button.
6. Pour the juice into a glass.

![](https://i.imgur.com/VmyxVm7.png)
{{% /callout %}}
