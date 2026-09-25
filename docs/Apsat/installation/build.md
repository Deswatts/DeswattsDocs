# 手动构建

指用户自己使用源项目本身使用的构建库以及 Python 版本来构建项目

## 具体做法

1. 从 Apsat 的 [GitHub主页](https://github.com/Deswatts/Apsat) 下载源文件

或克隆仓库:
```bash:line-numbers
git clone https://github.com/Deswatts/Apsat.git
```

2. 下载 uv :
    
    ::: code-group

    ```bash:line-numbers [Linux / MacOS]
    curl -LsSf https://astral.sh/uv/install.sh | sh
    ```

    ```bash:line-numbers [Windows]
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    ```

    :::

3. 下载编译器
    - Linux:

    ::: code-group

    ```bash:line-numbers [Debian / Ubuntu]
    sudo apt update
    sudo apt install build-essential python3-dev
    ```

    ```bash:line-numbers [Fedora / RHEL]
    sudo dnf install gcc gcc-c++ make python3-devel
    ```

    ```bash:line-numbers [Arch / Manjaro]
    sudo pacman -S base-devel
    ```

    :::

    - Windows:
    可以通过 [Visual Studio](https://visualstudio.microsoft.com/zh-hans/downloads/) 来下载 MSVC

4. 在项目根目录下运行以下命令以配置环境
```bash:line-numbers
# 创建虚拟环境
uv venv -p 3.8.0

# 安装依赖
uv sync --no-group dev
```

5. 在项目根目录下运行以下命令以运行项目, 并检测环境
```bash:line-numbers
# 运行主文件, 如果出现窗口则表明 pyqt6 安装成功
uv run src/main.py

# 如果包含 nuitka 则表名 nuitka 安装成功
uv tree
```

6. 在项目根目录下运行以下命令以构建项目, 构建产物在 dist 文件夹下

::: code-group

```bash:line-numbers [Windows]
uv run nuitka --standalone --enable-plugin=pyside6 --windows-console-mode=disable --output-dir=dist --jobs=4 --lto=yes --nofollow-import-to=pytest,ruff,ty --msvc=latest --noinclude-qt-translations --windows-icon-from-ico=assets/icon.ico --assume-yes-for-downloads --onefile src/main.py
```

```bash:line-numbers [MacOS]
uv run nuitka --standalone --enable-plugin=pyside6 --macos-create-app-bundle --macos-app-icon=assets/icon.png --output-dir=dist --jobs=$(sysctl -n hw.ncpu) --lto=yes --nofollow-import-to=pytest,ruff,ty --noinclude-qt-translations --assume-yes-for-downloads --onefile src/main.py
```

```bash:line-numbers [Linux]
uv run nuitka --standalone --enable-plugin=pyside6 --output-dir=dist --jobs=$(nproc) --lto=yes --nofollow-import-to=pytest,ruff,ty --noinclude-qt-translations --assume-yes-for-downloads --onefile src/main.py
```

:::