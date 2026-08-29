+++
title = "Makefile 語法"
date = 2024-03-09 00:57:27
draft = false
categories = ["Computer Science", "Programming Languages", "C"]
+++

# What is Makefile?

在開始介紹 Makefile 語法前，我們先來了解一下到底什麼是 Make，而 Makefile 又是什麼?

- make 是一個指令，它會讀取 makefile 檔案中的內容，自動化編譯軟體。
- makefile 是一個檔案，它描述了軟體的編譯規則。

{{% callout "info" %}}
簡單來說，make 和 makefile 的關係就像是廚師和食譜：
- make 是廚師，負責按照食譜（makefile）烹飪（編譯）軟體。
- makefile 是食譜，它告訴廚師（make）如何烹飪（編譯）軟體。
{{% /callout %}}

如若要編譯小型的程式，可以利用簡單的指令進行編譯或是 shell script 進行編譯，但是如果程式較大或是包含大量 header、library 時，就可以考慮是否要使用 makefile。

## Makefile 的優點

- 可以自動化編譯過程。
- 根據 target、rule 和檔案修改時間進行判斷，哪些需要重新編譯，只重新編譯必要檔案，節省時間。
- 可以將程式分成好幾個模組，方便管理。
- 並提高編譯的準確性

## 一些 Makefile 的使用範例

- 編譯 C/C++ 程式
- 編譯 Java 程式
- 編譯 Python 程式
- 建置 Linux 核心
- 建置其他軟體

## Make 的工作流程

1. **讀取 makefile 檔案**

Make 會讀取 makefile 檔案中的內容，獲取編譯規則。makefile 檔案是一個文字檔案，它包含以下內容：

- 目標：編譯的目標，例如可執行檔案、物件檔案、或其他檔案。
- 規則：編譯規則，描述如何編譯目標。
- 變量：變量用於存儲常量或其他值，可以讓 makefile 更加簡潔易讀。

2. **分析目標**

Make 會分析目標，確定需要編譯哪些檔案。目標可以是可執行檔案、物件檔案、或其他檔案。

3. **檢查檔案修改時間**

Make 會檢查檔案修改時間，判斷哪些檔案需要重新編譯。如果檔案的修改時間晚於其依賴檔案的修改時間，則該檔案需要重新編譯。

4. **執行編譯命令**

Make 會根據編譯規則，執行編譯命令。編譯命令可以是任何 shell 命令，例如 gcc、javac、或其他編譯器命令。

5. **輸出結果**

Make 會輸出編譯結果，例如編譯成功或失敗的信息。

# Makefile 主要內容

Makefile 主要包含以下幾項東西: 顯式規則、隱式規則、變量定義、文件指示和註釋。

## 顯示規則

明確指定了如何編譯目標。顯式規則包含以下兩部分：

- 目標：要編譯的目標。
- 命令：編譯命令。

以下是一個顯示規則的範例:

```makefile
hello: hello.o
    gcc -o hello hello.o
```

這個規則描述如何編譯 hello 可執行檔案。
它指定了 hello 可執行檔案的依賴檔案是 hello.o 物件檔案，並使用 gcc 命令編譯 hello 可執行檔案。

## 隱式規則

隱式規則由 make 自動推導，不需要在 makefile 檔案中明確指定。隱式規則通常用於編譯常見的檔案類型，例如 C/C++ 原始碼檔案、Java 原始碼檔案、或 Python 原始碼檔案。

以下是一個隱式規則的範例：

```makefile
%.o: %.c
    gcc -c %.c
```

這個規則描述如何編譯 C/C++ 原始碼檔案。它指定了 .o 物件檔案的依賴檔案是 .c 原始碼檔案，並且使用 gcc 命令編譯 .o 物件檔案。

## 變數定義

變量用於存儲常量或其他值，可以讓 makefile 更加簡潔易讀。

以下是一個變量定義的範例：

```makefile
CC = gcc
```

這個變量定義了 CC 變量，其值是 gcc 命令。

## 文件指示

文件指示用於包含其他 makefile 檔案。

以下是一個文件指示的範例：

```makefile
include foo.mk
```

這個文件指示包含 foo.mk 檔案。

## 註釋與換行

- **makefile 註釋**

  makefile 中的註釋可以用來添加說明文字，提高 makefile 檔案的可讀性。

  makefile 中的註釋有兩種：

  - 單行註釋

  單行註釋以 # 號開始，一直持續到行尾。

  以下是一個單行註釋的範例：

  ```makefile
  # 這個 makefile 檔案用於編譯一個簡單的 C 程式
  ```

  - 多行註釋

  多行註釋以 /* 開始，以 */ 結尾。

  以下是一個多行註釋的範例：

  ```makefile
  /*
  這個 makefile 檔案用於編譯一個簡單的 C 程式

  它包含以下三個目標：

  * hello：編譯 hello.c 檔案，生成 hello 可執行檔案。
  * hello.o：編譯 hello.c 檔案，生成 hello.o 物件檔案。
  * clean：清除所有編譯產生的檔案。
  */
  ```

- **makefile 換行**

  makefile 中的換行符用於分隔不同的命令或規則。

  makefile 中的換行符有兩種：

  - 硬換行

  硬換行符由 \ 轉義符表示。

  以下是一個硬換行的範例：

  ```makefile
  hello: hello.o \
      gcc -o hello hello.o
  ```

  - 軟換行

  軟換行符由空格或製表符表示。

  以下是一個軟換行的範例：

  ```makefile
  hello: hello.o
      gcc -o hello hello.o
  ```

# 顯示規則

最重要的是 Makefile 規則，詳細如下:

- **目標(target):** 一個目標檔，可以是 Object 檔，也可以是執行檔，還可以是一個標籤。
- **依賴(Dependency, Prerequisites):** 要產生目標檔 (target) 所依賴哪些檔。
- **命令 (Command):** 建立專案時需要執行的 shell 命令。命令部分的每行的縮進必須要使用 Tab 鍵而不能使用多個空格。

```makefile
target(要生成的文件): dependencies(被依賴的文件)
    命令 1
    命令 2
    ...
    命令 n
# 命令前面用的是「tab」而非空格。
# 可以使用「\」表示續行。注意，「\」之後不能有空格。
```

像 clean 這種沒有被第一個目標文件直接或間接關聯，那麼它後面所定義的命令將不會被自動執行，不過我們可以顯式要求 make 執行。即 make clean。

.PHONY 會將目標設成假目標，使 make 目錄下沒有目標檔案或目標檔案為最新時，仍可執行 make <target>。.PHONY 寫法也可以讓程式設計師知道哪些工作目標不是針對檔案，增加可讀性。

Make 預設的假工作目標有 all, install, clean, distclean, TAGS, info 和 check。

一個常用的情況是 make clean，因為 clean 標籤下的 rm 命令並不產生 clean 文件：

```makefile
.PHONY: clean
clean:
  rm *.o
```

# 變數使用

變數宣告時要使用 = 或 := 給予初始值 (注意兩者在代換時稍有不同)，如 obj = hello.o foo.o，取用時寫成 (obj) 或 {obj}。

## 自動化變數

- `$@` 工作目標檔名
- `$<` 第一個必要條件的檔名
- `$^` 所有必要條件的檔名，並以空格隔開這些檔名 (這份清單已移除重複的檔名)
- `$*` 工作目標的主檔名

## 萬用字元

Makefile 中所用的萬用字元是 `%`，代表所有可能的字串，前後可接指定的字串來表示某些固定樣式 (pattern) 的字串。
例如 `%.c` 表示結尾是 `.c` 的所有字串。

## 特別字元

- `@` 不要顯示執行的命令
  - 因執行 make 命令後會在終端機印出正在執行的命令
- `-` 表示即使該行命令出錯，也不會中斷後續的動作執行
  - 而 make 只要遇到任何錯誤就會中斷執行。
  - 但像是在進行 clean 時，也許根本沒有任何檔案可以 clean，因而 rm 會傳回錯誤值，因而導致 make 中斷執行。
  - 我們可以利用 `-` 來關閉錯誤中斷功能，讓 make 不會因而中斷。

## 範例

```makefile
CC := gcc
OBJS := a.o b.o c.o

all: test

%.o: %.c
    $(CC) -c -o $@ $<

test: $(OBJS)
    $(CC) -o $@ $^

.PHONY: clean
clean:
    @echo "Clean..."
    -rm *.o 
```

# GCC 參數

gcc 有使用許多的參數，意思如下：

- `-c` :編譯但不進行鏈結
- `-ansi` : 程式要求依據 ansi 標準，增加可移植性。
- `-I` : 追加 include 檔案的搜尋路徑
- `-Wall` : 編譯時顯示所有的警告訊息
- `-g` : 編入除錯資訊 (要使用 GDB 除錯一定要加)。
- `-O` ：表示最佳化的程度，預設是 -O1，可以指定 -O2 或 -O3，數字越大最佳化程度越高。

```makefile
all: main

# 使用的編譯器
CC = g++

# 安裝位置
INSTDIR = /usr/local/bin

# include 文件所在位置
INCLUDE = .

# 開發過程中使用的選項
CFLAGS = -g -Wall -ansi

# 用於發行時的選項
# CFLAGS = -O -Wall -ansi

OBJS = a.o b.o c.o

# 本地庫
MYLIB = mpilib.a
%.o: %.c %.h
    $(CC) -I$(INCLUDE) $(CFLAGS) -c -o $@ $<
main: $(OBJS)
    $(CC) -o $@ $^

.PHONY: clean
clean:
    @echo "Clean..."
    rm -f *.o

install: main
    @if [ -d $(INSTDIR) ]; \
    then \
        cp main $(INSTDIR);\
        chmod a+x $(INSTDIR)/main;\
        chmod og-w $(INSTDIR)/main;\
        echo "Installed in $(INSTDIR)";\
    else \
        echo "Sorry, $(INSTDIR) does not exist";\
    fi
```

# 安裝 Make

在 windows 上安裝 make 可以利用 chocolatey

> https://community.chocolatey.org/packages/make
> 參考 chocolatey 官網安裝 chocolatey

利用管理員權限運行 power shell，並輸入以下指令

```shell
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

接著在 power shell 在輸入命令，安裝 make

```shell
> choco install make
```

# Make 指令

將 makefile 寫好後就可以在其目錄底下，用以下指令進行編譯

```shell
$ make
```

## Make 指令中定義變數

```shell
$ make CC=gcc
```

- 當命令行中的定義跟 makefile 中的定義有衝突時，以命令行中的定義為準
- 在 makefile 文件之外使用時，定義必須作為單個參數進行傳遞，所以要**避免使用空格**
- 如要使用空格，需要使用引號

```shell
$ make "CC = gcc"
```

## Make 不同 filename 的 makefile

```shell
$ make -f [filename]
```

- filename 可以替換成要編譯的 makefile 的名稱

## 指定在並行模式下構建目標

```shell
$ make -j [N]
```

- `N`：指定要使用的處理器數量。默認情況下，Make 會使用所有可用的處理器。
- 可以提高構建速度，尤其是在使用多核處理器時。
- 可以更有效地利用系統資源。