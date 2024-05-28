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

Two installers are available for Windows:

-   `Describo-x64-${version}.Setup.exe` - most people will probably want this version
-   `Describo-arm64-${version}.Setup.exe` - choose this if you have an ARM processor. If you don't
    know what that is, get the version above.

::: tip INFO

Although the executables are signed, Windows Defender may still pop up a warning. This is because
Describo is not yet known to it. Over time, this should go away.

:::

The setup file will install Describo in the normal windows locations as well as create a link on the
Desktop.

If you are confronted with a message saying "Windows protected your PC" like in the following
images, select `More info` and confirm that the Publisher field is set to
`AU, Victoria, Melbourne, Marco La Rosa, Marco La Rosa`. If it is (and it should be), select
`Run anyway`.

<div class="flex flex-col md:flex-row space-x-1">
    <div>
        <img src="/images/windows/windows-install1.webp" data-zoomable />
    </div>
    <div>
        <img src="/images/windows/windows-install2.webp" data-zoomable />
    </div>
</div>

## Linux

Linux users, download the file `Describo-linux-x64-${version}.zip` to your computer, unzip it and
go.
