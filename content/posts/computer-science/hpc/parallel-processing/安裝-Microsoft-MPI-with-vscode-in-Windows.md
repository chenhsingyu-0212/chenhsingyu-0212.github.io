+++
title = "安裝 Microsoft MPI with vscode in Windows"
date = 2023-12-13 21:49:08
draft = false
categories = ["Computer Science", "HPC", "Parallel Processing"]
+++

# 安裝 Microsoft MPI

- [Microsoft MPI 官方網站](https://learn.microsoft.com/zh-tw/message-passing-interface/microsoft-mpi)
- [下載 Microsoft MPI](https://www.microsoft.com/en-us/download/details.aspx?id=105289)
- [官方參考文件](https://learn.microsoft.com/zh-tw/archive/blogs/windowshpc/how-to-compile-and-run-a-simple-ms-mpi-program)

## With vscode in Windows

1. 點擊官網連結，並點擊 **MS-MPI 下載**，點擊 **MS-MPI v10.1.3**，導至下載畫面，點擊 **Download**，**選取兩個 File**，兩個都要下載喔~~

<img src="https://i.imgur.com/8xFF2BO.png" alt="Imgur" width="500">

<img src="https://i.imgur.com/l9tHOvA.png" alt="Imgur" width="500">

<img src="https://i.imgur.com/urHeIjn.png" alt="Imgur" width="500">

<img src="https://i.imgur.com/Chss6RK.png" alt="Imgur" width="500">

2. 將下載的兩個檔案點開執行

<img src="https://i.imgur.com/39YX72p.png" alt="Imgur" width="500">

3. 打開 cmd 輸入指令 `set MSMPI`，會看到 MPI 設定的環境變數，表示安裝有成功

   ```bash command:("C:\Users\user> ":1)
   set MSMPI
   MSMPI_BENCHMARKS=C:\Program Files\Microsoft MPI\Benchmarks\
   MSMPI_BIN=C:\Program Files\Microsoft MPI\Bin\
   MSMPI_INC=C:\Program Files (x86)\Microsoft SDKs\MPI\Include\
   MSMPI_LIB32=C:\Program Files (x86)\Microsoft SDKs\MPI\Lib\x86\
   MSMPI_LIB64=C:\Program Files (x86)\Microsoft SDKs\MPI\Lib\x64\
   ```

4. 接下來打開 vscode 寫下測試程式，這時 `#include <mpi.h>` 可能會有紅底線表示他找不到此 header 檔

   ```c hello.c
   #include <mpi.h>
   #include <stdio.h>

   int main(int argc, char** argv) {
       // Initialize the MPI environment
       MPI_Init(&argc, &argv);
 
       // Get the number of processes
       int world_size;
       MPI_Comm_size(MPI_COMM_WORLD, &world_size);
 
       // Get the rank of the process
       int world_rank;
       MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);
 
       // Get the name of the processor
       char processor_name[MPI_MAX_PROCESSOR_NAME];
       int name_len;
       MPI_Get_processor_name(processor_name, &name_len);
 
       // Print off a hello world message
       printf("Hello world from processor %s, rank %d out of %d processors\n",
             processor_name, world_rank, world_size);

       // Finalize the MPI environment.
       MPI_Finalize();
       return 0;
   }
   ```

5. 在 `.vscode` 底下的 `c_cpp_properties.json` 把 MPI 的 Include 加入裡面，也就是 `MSMPI_INC` 此環境變數後面的路徑，大概會長底下這樣，可以注意有高亮的那幾行(7, 14)，這兩行會根據大家路徑放置不相同，而有所不同，這樣紅底線應該就沒有了
   ![Imgur](https://i.imgur.com/DDz4yF4.png)

   ```json c_cpp_properties.json mark:7,14
   {
      "configurations": [
          {
              "name": "Win32",
              "includePath": [
                  "${workspaceFolder}/**",
                  "C:\\Program Files (x86)\\Microsoft SDKs\\MPI\\Include"
              ],
              "defines": [
                  "_DEBUG",
                  "UNICODE",
                  "_UNICODE"
              ],
              "compilerPath": "C:\\mingw64\\bin\\gcc.exe",
              "cStandard": "c11",
              "cppStandard": "gnu++14",
              "intelliSenseMode": "windows-gcc-x86"
          }
      ],
      "version": 4
   }
   ```

6. 接下來就可以來編譯執行程式了
   - **編譯指令**

     ```bash
     gcc hello.c -o hello -I $MSMPI_INC -L $MSMPI_LIB64 -l msmpi
     ```

     - `$MSMPI_INC` 環境變數如果找不到，可以寫絕對路徑，可以參考第三步所印出的東西
     - `$MSMPI_LIB64` 環境變數如果找不到，可以寫絕對路徑，可以參考第三步所印出的東西
       - 會發生抓不到環境變數的原因有可能是因為使用了 powershell，而他讀取路徑的方式使用 `\` 辨別的，而不是 `/`，如果上面的環境變數 `$MSMPI_INC` 和 `$MSMPI_LIB64` 印出來的是 `/` 可以更該為 `\`
     - 我在編譯的時候還有一件很特別的事，我雖然找的到 library 的路徑，但是沒有讀到 `msmpi.lib`，目前方法是把 `msmpi.lib` 直接放在我的檔案底下，然後在引入 library 的時候用相對路徑指定當前位置，如: `-L "."`，然後就有找到了
   - **執行指令**

     ```bash
     mpiexec -n 3 hello.exe
     ```

     - 指令裡面的 3 表示有三個 processes 處理來這個程式

# Debug

1. 檢查 gcc 版本，建議下載底下提供網址的版本

  - 可以利用 `gcc --version` 檢查 gcc 版本，不要太舊，可能會有 library 或 include 不相容
  - [WinLibs standalone build of GCC and MinGW-w64 for Windows](https://winlibs.com/)
  - 我是下載這個版本供參考
    ![Imgur](https://i.imgur.com/f53hcNF.png)
  - 下載後解開壓縮檔，在系統環境變數上設定路徑，路徑要到資料夾內的 `bin`
  - Terminal 重新開啟後，再次測試 `gcc --version` 查看版本

    ```bash command:("C:\Users\user> ":1)
    gcc --version
    gcc.exe (MinGW-W64 x86_64-ucrt-posix-seh, built by Brecht Sanders) 12.3.0
    Copyright (C) 2022 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    ```

  - **Note:** 如果有留之前的 gcc 且環境變數路徑設定在新版的 gcc 之前，`gcc --version` 可能還是會抓到舊的，可以調整一下順序

# Test MPI code

```c hello.c
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    // Initialize the MPI environment
    MPI_Init(&argc, &argv);

    // Get the number of processes
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // Get the rank of the process
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    // Get the name of the processor
    char processor_name[MPI_MAX_PROCESSOR_NAME];
    int name_len;
    MPI_Get_processor_name(processor_name, &name_len);

    // Print off a hello world message
    printf("Hello world from processor %s, rank %d out of %d processors\n",
           processor_name, world_rank, world_size);

    // Finalize the MPI environment.
    MPI_Finalize();
    return 0;
}
```