---
title: Installation
aside: false
---

# Installing Describo desktop

[[toc]]

Describo can be downloaded from GitHub:
[https://github.com/describo/desktop-releases/releases/latest](https://github.com/describo/desktop-releases/releases/latest)

## MacOS

Two builds are available for MacOS: one for the older Intel CPU's and one for the current Apple M
processors. Be sure to get the version that's correct for your machine. If you're not sure, go to
the Apple Menu (top left of the screen) and select `About This Mac`. The dialog that shows will have
an entry `Chip` that will say something like `Apple M...` or `Intel...`.

-   If you have an Apple M processor get the zip or dmg file with `arm64` in the name;
-   If you have an older mac with an Intel processor get the zip or dmg file with `x64` in the name.

::: tip INFO

Apple MacOS will let you install these applications as they are signed and checked by Apple.

:::

## Windows

Two installers are available for Windows: `Describo-${version}-Setup.exe` and
` Describo-win32-x64-${vesion}.zip`.

::: warning NOTE!

As these builds are not signed, Windows will not automatically run them. However, with a few clicks,
you can get Describo going.

:::

### Install from the setup file

Using the setup file will install Describo in the normal windows locations as well as create a link
on the Desktop. But it takes a few steps to get this to happen.

1. In the downloads section of the browser (shown is Microsoft Edge), you will see a message about
   trusting this download. If you hover over it, a button with an ellipsis (...) will show. Hover
   over that and you will get the following dropdown. Select `Keep`.

<img src="/images/windows/windows-setup1.webp" data-zoomable />

2. When the following dialog shows, select `Show more`.

<img src="/images/windows/windows-setup2.webp" data-zoomable />

3. The select `Keep anyway`.

<img src="/images/windows/windows-setup3.webp" data-zoomable />

4. Then in your downloads folder (or wherever the file saved to) you will see the Describo Setup
   file. Double click it to install the application.

<img src="/images/windows/windows-setup4.webp" data-zoomable />

### Install from the ZIP file

1. After you've downloaded the file to your computer, go to your `Downloads` folder and unzip the
   file. Do this by selecting it and then clicking the `Extract all` button.

<img src="/images/windows/windows-extract1.webp" data-zoomable />

2. You will then be prompted to extract it somewhere. Choose a folder and select `Extract`

<img src="/images/windows/windows-extract2.webp" data-zoomable />

3. When that's done, if "Show extracted files when complete" was selected, an explorer window will
   open and you can start the `Describo` application. (If not, find the folder you extracted the
   application to and then start it).

<img src="/images/windows/windows-extract3.webp" data-zoomable />

4. You may be confronted with a message saying "Windows protected your PC". If you are, select
   `More info` and then `Run anyway`. See images following.

<div class="flex flex-row justify-around">
   <div><img src="/images/windows/windows-sig1.webp" class="h-96" data-zoomable /></div>
   <div><img src="/images/windows/windows-sig2.webp" class="h-96" data-zoomable /></div>
</div>

## Linux

Linux users, download the file `Describo-linux-x64-${version}.zip` to your computer, unzip it and
go.
