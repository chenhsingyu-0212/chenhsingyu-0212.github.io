+++
title = "C Program — Control Flow"
date = 2023-08-13 17:00:00
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

Control-flow statements decide *which* code runs and *how often*.

# Control flow

{{% callout "warning" %}}
* Selection Statements
* Iteration Statements
* Jump Statements
{{% /callout %}}

## Selection Statements

Evaluate a condition as TRUE or FALSE to choose which block of code to run.

* **If … else**
* **Switch case**

## Iteration Statements

Repeatedly run one or more statements. The condition is checked before each pass, and the loop stops only when it becomes FALSE (or on `break`).

* **While**
* **Do while**
* **For loop**

## Jump Statements

* **Break** — stop and exit the loop.
* **Continue** — skip the rest of the current iteration and jump back to the start of the loop for the next one.

# Selection Statements

## If … else

{{% callout "info" %}}
**If _ Flow chart**

<img src="https://i.imgur.com/9ldXd0L.png" alt="" width="500">

**If _ Syntax**
![](https://i.imgur.com/WvexZnW.png)
{{% /callout %}}

{{% callout "info" %}}
**If … else _ Flow chart**

<img src="https://i.imgur.com/xLLY0OL.png" alt="" width="500">

**If … else _ Syntax**
![](https://i.imgur.com/FwnCrZR.png)

**Shorthand if … else _ Syntax**
![](https://i.imgur.com/PidzdgW.png)
{{% /callout %}}

{{% callout "info" %}}
**If … else if … else _ Flow chart**

<img src="https://i.imgur.com/CafpHTt.png" alt="" width="500">

**If … else if … else _ Syntax**
![](https://i.imgur.com/rS6qkP0.png)
{{% /callout %}}

{{% callout "info" %}}
**Nested if _ Flow chart**

<img src="https://i.imgur.com/w7uknoI.png" alt="" width="500">

**Nested if _ Syntax**
![](https://i.imgur.com/VyzN3C0.png)
{{% /callout %}}

## Switch

{{% callout "info" %}}
**Switch _ Flow chart**

<img src="https://i.imgur.com/0aAggHw.png" alt="" width="500">

**Switch _ Syntax**
![](https://i.imgur.com/8MswgdY.png)
{{% /callout %}}

## Thinking

What does the program below output?

<img src="https://i.imgur.com/qkCp8wy.png" alt="" width="400">

{{% callout "danger" %}}
**Termination conditions:**

* Keeps running until there are no more `case`s.
* When it hits a `break`, it jumps out immediately.
{{% /callout %}}

# Iteration Statements

## While

{{% callout "info" %}}
**While _ Flow chart**

<img src="https://i.imgur.com/qjPswQX.png" alt="" width="500">

**While _ Syntax**
![](https://i.imgur.com/eExxMtJ.png)
{{% /callout %}}

## Do while

{{% callout "info" %}}
**Do while _ Flow chart**

<img src="https://i.imgur.com/7EYj5Kd.png" alt="" width="500">

**Do while _ Syntax**
![](https://i.imgur.com/FHsjCV2.png)
{{% /callout %}}

## For loop

{{% callout "info" %}}
**For loop _ Flow chart**

<img src="https://i.imgur.com/FHSxoEY.png" alt="" width="500">

**For loop _ Syntax**
![](https://i.imgur.com/fvxYgY1.png)
* statement 1 : initialization
* statement 2 : conditional
* statement 3 : update
{{% /callout %}}

## Nested loop

"Nested" means things wrapped layer by layer, like a bird's nest. A nested loop is a `while`/`for` loop placed inside another `while`/`for` loop.

<img src="https://i.imgur.com/xuj6KW4.png" alt="" width="500">

# Midway Challenge

![](https://i.imgur.com/FMn0doW.png)

![](https://i.imgur.com/tlEaovS.png)
