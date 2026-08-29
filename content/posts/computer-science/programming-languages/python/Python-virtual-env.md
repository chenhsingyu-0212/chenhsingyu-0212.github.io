+++
title = "Python virtual env"
date = 2024-05-20 23:54:42
draft = false
categories = ["Computer Science", "Programming Languages", "Python"]
+++

# Differen virtual environment

- venv
- peotry
- anaconda (minconda)

Following this post we will show the difference virtual environment how to install and use.

## Poetry

### Install

we have two methods for installing poetry

1. use `pipx`

> If `pipx` is not already installed, you can follow any of the options in the official `pipx` installation instructions. Any non-ancient version of `pipx` will do.

```bash
pipx install poetry
```

2. use the official installer

- Linux, macOS, Windows (WSL)
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

If you use the official installer, you need to set up the **PATH** manually.

First you might go to the path with ~. Then, find file `.profile` or `.bashrc` and add the following line in that file.

```bash
export PATH="/home/<username>/.local/bin:$PATH"
```

{{% callout "warning" %}}
remember to change the <username> with you own computer.
{{% /callout %}}

### Init