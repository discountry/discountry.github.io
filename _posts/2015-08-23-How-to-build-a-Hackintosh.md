---
title : How to build a Hackintosh
layout : post
published : true
categories: ['tutorial']
tags: ['Mac','Hackintosh']
---
<!-- more -->

### Resources you may need

* [威锋](http://bbs.feng.com/thread-htm-fid-102.html)
* [PCBeta](http://bbs.pcbeta.com/forum.php?gid=86)
* [tonymacx86](http://www.tonymacx86.com)
* [Hackintosh](http://www.hackintosh.com)

### Software you may need to know

**Bootloader**

* [Clover](http://sourceforge.net/projects/cloverefiboot/)
* [Chameleon](http://chameleon.osx86.hu/)

**OSX Installer Maker**

* [MyHack](http://myhack.sojugarden.com/) (version < OSX 10.9)
* [TransMac](http://www.acutesystems.com/scrtm.htm) (On Windows)
* [UniBeast](http://www.tonymacx86.com/downloads.php?do=file&id=253) (On Mac)

**Kext Installer**

* [Kext Wizard](http://www.hackintoshosx.com/files/file/4304-kext-wizard-3711/)
* [MultiBeast](http://www.tonymacx86.com/downloads.php?do=file&id=254)
* [Vietnam Tool](http://www.insanelymac.com/forum/files/file/210-hackintosh-vietnam-ultimate-aio-tool/)

**Important Kexts**

* FakeSMC.kext
* VoodooPS2Controller.kext

> You can install them by MultiBeast or myhack or Vietnam Tool. 

**Guides that may help**

* [UniBeast: Install OS X Yosemite on Any Supported Intel-based PC](http://www.tonymacx86.com/yosemite-desktop-guides/143976-unibeast-install-os-x-yosemite-any-supported-intel-based-pc.html) (Install Yosemite)
* [myHack Guide](http://myhack.sojugarden.com/guide/) (Install Mavericks)

### My Experiences

* [Mavericks on Acer 4750G](http://bbs.pcbeta.com/viewthread-1434394-1-1.html)
* [Yosemite DP5 on MSI GS70](http://bbs.pcbeta.com/viewthread-1543869-1-1.html)
* [Yosemite 10.10.5 on MSI GS70](http://bbs.pcbeta.com/viewthread-1634829-1-1.html)
	* [Yosemite 10.10.5 on MSI GS70 Install Dependencies](http://pan.baidu.com/s/1dDoBdEL)

### My Guide

#### 1.Download OSX Install Image form Mac App Store or Hackintosh BBS or other resources.

myHack and UniBeast needs Official Install Package form Mac App Store, if you only have a PC running Windows, just find a lazy-version Install Image from BBS and use TransMac.

#### 2.Prepare your BIOS configure.

Change your BIOS to AHCI mode and make sure it supported GPT boot up then you can use Clover Bootloader, otherwise Change your BIOS to Legency mode and use Chameleon Bootloader.

#### 3.Boot up the Installer.

Boot form a flash Disk or the Installer disk part you've made by myHack or TransMac or other tools. Your computer system may crashed, reboot or blocked during this step, but dont't worry and write down the panic on your screen and Google them or go to [PCBeta](http://bbs.pcbeta.com/viewthread-1516108-1-1.html) for reference.

#### 4.Finish the origin install step by step.

Just like install OSX on Mac or install Windows on PC, just follow the step and nothing much to say.

#### 5.Try your first Start on Hackintosh.

You may meet the troubles again that you met on the third step. Try your best to fix them because you're almost successed!

#### 6.Install the kext your Computer need.

When the first time you open your Hackintosh, the network or video card or sound may have problems to work fine. Use MultiBeast or vietnam tools and choose the kext you need, then install them, reboot your computer and magic happens.





