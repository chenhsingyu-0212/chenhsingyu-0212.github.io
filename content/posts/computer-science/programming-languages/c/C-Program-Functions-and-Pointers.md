+++
title = "C Program — Functions & Pointers"
date = 2023-08-13 19:00:00
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

# Function

{{% callout "warning" %}}
![](https://i.imgur.com/4DkAMpB.png)

**Functions**

A function is a block of code which only runs when it is called. Functions are used to perform
certain actions, and they are important for reusing code: define the code once and use it many times.

**We can broadly divide functions into two kinds:**

* those that return a value
* those that don't return a value
{{% /callout %}}

## Advantage

**A function is how we put *procedure abstraction* into practice:**

* **Reusability**
* **Readability**
* **Reduce coupling** — coupling is how much a piece of code depends on other code.
* **Modularity** of the program

## Syntax _ return value

![](https://i.imgur.com/n9UtVSz.png)

![](https://i.imgur.com/RnrBV8x.png)

## Syntax _ without parameter

![](https://i.imgur.com/T07gwTV.png)

## Syntax _ without return value

![](https://i.imgur.com/gifD2c7.png)

## Function

{{% callout "info" %}}
![](https://i.imgur.com/GGdY3BR.png)

> Think of a function as the realization of one capability. It simplifies `main`, cleanly separates responsibilities, achieves reuse and lower coupling, and lets you write and reason about the program one block at a time.

![](https://i.imgur.com/YHO2OFA.png)

> At first you can ignore *how* the function is implemented and just trust that it does its job. Once the pieces are separated, you then work out — block by block — how to write the code inside each function to get the behavior you want.
{{% /callout %}}

# Pointer

## Recall

{{% callout "warning" %}}
```c
DataType  variableName  =  data;
```

![](https://i.imgur.com/T4IAK2G.png)
{{% /callout %}}

## Value

![](https://i.imgur.com/3cpzrR1.png)

## Pointer

![](https://i.imgur.com/BQkfj6a.png)

## Declare

* `T* ptr`
    ptr points to a `T`-type object/value.
* `&value`
    get the address of value.
* `*ptr`
    access the data at an address.

## Pointer

![](https://i.imgur.com/vr77Vw5.png)

![](https://i.imgur.com/EpesLHF.png)

## Pointer in Pointer

![](https://i.imgur.com/dX9NTA1.png)

![](https://i.imgur.com/o4XbIG5.png)

## Pointer and Array

![](https://i.imgur.com/vrn83ty.png)

![](https://i.imgur.com/5DkkhAp.png)

## Thinking

What does the program below output?

![](https://i.imgur.com/A9GjwVF.png)
