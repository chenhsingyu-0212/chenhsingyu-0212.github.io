+++
title = "Anaconda"
date = 2024-05-21 17:01:18
draft = false
categories = ["Computer Science", "HPC", "Tools"]
+++

## 安裝 anaconda

前往 [anaconda](https://www.anaconda.com/download/success) 網站進行下載

![anaconda 下載畫面](https://i.imgur.com/LIStvrn.png)

下載後會得到一個 ``

1. 利用 `bash [下載檔案名稱.sh]` 開始安裝，接著按下 `Enter` 會有一段授權條款，可以用上下鍵看內容
    ![Imgur](https://i.imgur.com/6sGHptV.png)
2. 接著會問你是否同意，輸入 `yes`
    ![Imgur](https://i.imgur.com/VhQUJpv.png)
3. 接著確認安裝位置，按下 `Enter`
    ![Imgur](https://i.imgur.com/TYBJuDa.png)
4. 接著安裝好後，記得重新開機
5. 電腦重開後，終端機提示命令符會看到 (base) 在前面
6. 可以利用 `conda deactivate` 退出 conda 環境

{{% callout "warning" %}}
可以輸入以下指令，停用自動進入 conda 環境

```shell
conda config --set auto_activate_base false
```

{{% /callout %}}

## 查看 conda 安裝了那些包

```bash
conda list
```

## 查看 conda 現在有哪些虛擬環境

```bash
conda env list
```

## 檢查更新當前 conda

```bash
conda update conda
```

## 創建虛擬環境

```bash
conda create -n [虛擬環境名稱] python=3.9
```

## 進入虛擬環境

```bash
conda activate [虛擬環境名稱]
```

## 對虛擬環境安裝其他的 package

```bash
# out of the virtual env
conda install -n [虛擬環境名稱] [package]
# in the virtual env
conda install [package]
```

## 關閉虛擬環境

```bash
conda deactivate
```

## 刪除虛擬環境

```bash
# delete virtual env
conda remove -n [虛擬環境名稱] --all
# delete virtual env package
conda remove --name [虛擬環境名稱] [package]
```