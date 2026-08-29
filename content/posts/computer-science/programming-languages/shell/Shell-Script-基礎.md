+++
title = "Shell Script 基礎"
date = 2026-08-29 07:30:00
draft = false
categories = ["Computer Science", "Programming Languages", "Shell"]
+++

## Shell 介紹

### Shell 解釋器

- 以 Bash (Bourne Again Shell) 為主要的解釋器
- 其他常見 Shell: sh、csh、tcsh

### Shell 執行方式

- 利用 shell prompt 直接執行 shell commands
- 按照執行順序將 shell commands 存在名為 shell script 的檔案，然後執行 shell script

{{% callout "warning" %}}
執行 Shell script 需要它具有執行權限才可以，可以透過 `chmod +x filename` 來更改其檔案權限。
{{% /callout %}}

### Shell Script 指定解釋器路徑

Shell script 檔案第一行以 sha-bang (`#!`) 開頭，這個並不會被解讀為註解，它後面的內容是 Shell 解釋器所在的完整路徑。

這個路徑是告訴作業系統，這個檔案是要輸入到指定解釋器中的命令。

{{% callout "danger" %}}
如果 sha-bang 給出的路徑不正確，腳本執行可能會出現錯誤訊息，例如: 命令未找到。
{{% /callout %}}

### Shell script 基本說明

- Shell Script 的副檔名為 `.sh`
- 第一行寫為 `#!/bin/bash`
- 添加註釋: `#` 後面的文字會被視為註釋

### 查閱 shell 指令

- 想了解作業系統目前活動的 shell 是什麼以及它的路徑

```bash
ps | grep $$
```

- 查閱 shell 解釋器的完整路徑

```bash
which bash
```

## 列印

可以使用 `echo` 指令列印。

{{% callout "success" %}}
```shell
#!/bin/bash
echo 'Hello World!' # echo "Hello World!"
```

**Output:**

```text
Hello World!
```
{{% /callout %}}

## Variables

### 創建變數

- Shell 變數一旦賦值即被創建
- 變數可以是數字、字元或字串
- 變數名稱區分大小寫，可以由字母和底線 `_` 組合而成
- 賦值使用 `=` 符號
- 初始化變數的時候 `=` 兩側不允許有空格

### 引用變數

- 使用 `$` 來引用變數
- 反斜線 `\` 用於轉義特殊字元意義，ex: `echo "\$NOT_Variable $Variable"`
- 使用 `${}` 封裝變數名稱避免歧義
- 使用 `""` 封裝變數名稱將保留任何空格值
- 命令替換可以用 `` `command` `` 或是 `$(command)`，把命令輸出的值賦給變數

{{% callout "success" %}}
```shell
#!/bin/bash
# Change this code
BIRTHDATE="Jan 1, 2000"
Presents=10
BIRTHDAY=$(date -d "$BIRTHDATE" +%A)

# Testing code - do not change it

if [ "$BIRTHDATE" == "Jan 1, 2000" ] ; then
    echo "BIRTHDATE is correct, it is $BIRTHDATE"
else
    echo "BIRTHDATE is incorrect - please retry"
fi
if [ $Presents == 10 ] ; then
    echo "I have received $Presents presents"
else
    echo "Presents is incorrect - please retry"
fi
if [ "$BIRTHDAY" == "Saturday" ] ; then
    echo "I was born on a $BIRTHDAY"
else
    echo "BIRTHDAY is incorrect - please retry"
fi
```

**Output:**

```text
BIRTHDATE is correct, it is Jan 1, 2000
I have received 10 presents
I was born on a Saturday
```
{{% /callout %}}

## 寫入參數

在腳本檔案名稱後面以空格分隔的清單形式寫入參數，可以在執行腳本時將參數傳遞給腳本。在腳本內部:

- 變數 `$1` 引用命令列中的第一個參數，變數 `$2` 引用第二個參數，依此類推
- 變數 `$0` 引用目前腳本名稱
- 變數 `$#` 保存傳遞給腳本的參數數量
- 變數 `$@` 保存傳遞給腳本的所有參數的空格分隔字串

{{% callout "success" %}}
```shell
# --------- shell script file name: prog.sh ---------
#!/bin/bash
function File {
    echo $#
}

if [ ! $# -lt 1 ]; then
    File $*
    exit 0
fi

# --------- commands ---------
bash prog.sh Shell is fun
```

**Output:**

```text
3
```
{{% /callout %}}

## Arrays

- 陣列可以以一個名稱儲存多個值
- 其命名與變數的命名相同
- 初始化是透過在 `()` 中賦值空格分隔的值來實現的
  ex: `array=(apple banana "Fruit Basket" orange)`
- 陣列成員不必連續，因此陣列的某些成員可以不初始化
  ex: `new_array[2]=apricot`
- 陣列中元素的總數透過 `${#arrayname[@]}` 引用
- 元素可以透過數字索引存取，第一個元素的索引為 0

{{% callout "success" %}}
```shell
#!/bin/bash
NAMES=( John Eric Jessica )
NUMBERS=( 1 2 3 )
STRINGS=( "hello" "world" )
NumberOfNames=${#NAMES[@]}
second_name=${NAMES[1]}

echo ${NUMBERS[@]}
echo ${STRINGS[@]}
echo "The number of names listed in the NAMES array: $NumberOfNames"
echo "The second name on the NAMES list is:" ${second_name}
```

**Output:**

```text
1 2 3
hello world
The number of names listed in the NAMES array: 3
The second name on the NAMES list is: Eric
```
{{% /callout %}}

## 參考資料

- [learn shell](https://www.learnshell.org/en/)
