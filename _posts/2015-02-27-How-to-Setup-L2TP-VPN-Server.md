---
layout: post
title: How to Setup L2TP VPN Server
published: True
categories: ['tutorial']
tags: ['VPN']
---
<!--more-->

### Choosing a proper VPS Server

* **Janpan**
 + [Conoha](https://www.conoha.jp/en "Conoha VPS")
 + [Smartvps](http://smartvps.cn/ "Smart VPS")
* **USA**
 + [Digitalocean](https://www.digitalocean.com/ "DO")
 + [AWS](http://aws.amazon.com/cn/ "AWS EC2")

### Install Ubuntu 14.04 LTS Server

Not much to say here.

### Start VPN Setting Up
> The below VPN Tutorials is from [IPSEC L2TP VPN on Ubuntu 14.04 with OpenSwan, xl2tpd and ppp](https://raymii.org/s/tutorials/IPSEC_L2TP_vpn_with_Ubuntu_14.04.html) by Remy van Elst

#### Install ppp openswan and xl2tpd
{%highlight bash%}
apt-get install openswan xl2tpd ppp lsof
{% endhighlight %}

#### Firewall and sysctl
{%highlight bash%}
iptables -t nat -A POSTROUTING -j SNAT --to-source %SERVERIP% -o eth+
{% endhighlight %}
%SERVERIP% should be relpaced by your ture server IP.
Execute the below commands to enable kernel IP packet forwarding and disable ICP redirects.
{%highlight bash%}
echo "net.ipv4.ip_forward = 1" |  tee -a /etc/sysctl.conf
echo "net.ipv4.conf.all.accept_redirects = 0" |  tee -a /etc/sysctl.conf
echo "net.ipv4.conf.all.send_redirects = 0" |  tee -a /etc/sysctl.conf
echo "net.ipv4.conf.default.rp_filter = 0" |  tee -a /etc/sysctl.conf
echo "net.ipv4.conf.default.accept_source_route = 0" |  tee -a /etc/sysctl.conf
echo "net.ipv4.conf.default.send_redirects = 0" |  tee -a /etc/sysctl.conf
echo "net.ipv4.icmp_ignore_bogus_error_responses = 1" |  tee -a /etc/sysctl.conf
{% endhighlight %}
Set these settings for other network interfaces:
{%highlight bash%}
for vpn in /proc/sys/net/ipv4/conf/*; do echo 0 > $vpn/accept_redirects; echo 0 > $vpn/send_redirects; done
{% endhighlight %}
Apply above:
{%highlight bash%}
sysctl -p
{% endhighlight %}
To make sure this keeps working at boot you might want to add the following to `/etc/rc.local`:
{%highlight bash%}
for vpn in /proc/sys/net/ipv4/conf/*; do echo 0 > $vpn/accept_redirects; echo 0 > $vpn/send_redirects; done
iptables -t nat -A POSTROUTING -j SNAT --to-source %SERVERIP% -o eth+
{% endhighlight %}

#### Configure Openswan (IPSEC)
Use your favorite editor to edit `/etc/ipsec.conf`
{%highlight bash%}
version 2 # conforms to second version of ipsec.conf specification

config setup
    dumpdir=/var/run/pluto/
    #in what directory should things started by setup (notably the Pluto daemon) be allowed to dump core?

    nat_traversal=yes
    #whether to accept/offer to support NAT (NAPT, also known as "IP Masqurade") workaround for IPsec

    virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12,%v6:fd00::/8,%v6:fe80::/10
    #contains the networks that are allowed as subnet= for the remote client. In other words, the address ranges that may live behind a NAT router through which a client connects.

    protostack=netkey
    #decide which protocol stack is going to be used.

    force_keepalive=yes
    keep_alive=60
    # Send a keep-alive packet every 60 seconds.

conn L2TP-PSK-noNAT
    authby=secret
    #shared secret. Use rsasig for certificates.

    pfs=no
    #Disable pfs

    auto=add
    #the ipsec tunnel should be started and routes created when the ipsec daemon itself starts.

    keyingtries=3
    #Only negotiate a conn. 3 times.

    ikelifetime=8h
    keylife=1h

    ike=aes256-sha1,aes128-sha1,3des-sha1
    phase2alg=aes256-sha1,aes128-sha1,3des-sha1
    # https://lists.openswan.org/pipermail/users/2014-April/022947.html
    # specifies the phase 1 encryption scheme, the hashing algorithm, and the diffie-hellman group. The modp1024 is for Diffie-Hellman 2. Why 'modp' instead of dh? DH2 is a 1028 bit encryption algorithm that modulo's a prime number, e.g. modp1028. See RFC 5114 for details or the wiki page on diffie hellmann, if interested.

    type=transport
    #because we use l2tp as tunnel protocol

    left=%SERVERIP%
    #fill in server IP above

    leftprotoport=17/1701
    right=%any
    rightprotoport=17/%any

    dpddelay=10
    # Dead Peer Dectection (RFC 3706) keepalives delay
    dpdtimeout=20
    #  length of time (in seconds) we will idle without hearing either an R_U_THERE poll from our peer, or an R_U_THERE_ACK reply.
    dpdaction=clear
    # When a DPD enabled peer is declared dead, what action should be taken. clear means the eroute and SA with both be cleared.
{% endhighlight %}

##### The shared secret
The shared secret is defined in the `/etc/ipsec.secrets` file. Make sure it is long and random:
{%highlight bash%}
%SERVERIP%  %any:   PSK "69EA16F2C529E74A7D1B0FE99E69F6BDCD3E44"
{% endhighlight %}
Yet again, replace %SERVERIP% with the IP of your server here. If you want to generate a random key you can use the following openssl command:
{%highlight bash%}
openssl rand -hex 30
{% endhighlight %}

##### The shared secret
{%highlight bash%}
ipsec verify
{% endhighlight %}
My output looks like this:
{%highlight bash%}
Checking your system to see if IPsec got installed and started correctly:
Version check and ipsec on-path                                 [OK]
Linux Openswan U2.6.38/K3.13.0-24-generic (netkey)
Checking for IPsec support in kernel                            [OK]
 SAref kernel support                                           [N/A]
 NETKEY:  Testing XFRM related proc values                      [OK]
    [OK]
    [OK]
Checking that pluto is running                                  [OK]
 Pluto listening for IKE on udp 500                             [OK]
 Pluto listening for NAT-T on udp 4500                          [OK]
Checking for 'ip' command                                       [OK]
Checking /bin/sh is not /bin/dash                               [WARNING]
Checking for 'iptables' command                                 [OK]
Opportunistic Encryption Support                                [DISABLED]
{% endhighlight %}

#### Configure xl2tpd
Use your favorite editor to edit `/etc/xl2tpd/xl2tpd.conf`
{%highlight bash%}
[global]
ipsec saref = yes
saref refinfo = 30

;debug avp = yes
;debug network = yes
;debug state = yes
;debug tunnel = yes

[lns default]
ip range = 172.16.1.30-172.16.1.100
local ip = 172.16.1.1
refuse pap = yes
require authentication = yes
;ppp debug = yes
pppoptfile = /etc/ppp/options.xl2tpd
length bit = yes
{% endhighlight %}
+ ip range = range of IPs to give to the connecting clients
+ local ip = IP of VPN server
+ refuse pap = refure pap authentication
+ ppp debug = yes when testing, no when in production

#### Configuring PPP
Use your favorite editor to edit `/etc/ppp/options.xl2tpd`,dont't warry if the file doesn's exist.
{%highlight bash%}
require-mschap-v2
ms-dns 8.8.8.8
ms-dns 8.8.4.4
auth
mtu 1200
mru 1000
crtscts
hide-password
modem
name l2tpd
proxyarp
lcp-echo-interval 30
lcp-echo-failure 4
{% endhighlight %}
+ ms-dns = The dns to give to the client. I use googles public DNS.
+ proxyarp = Add an entry to this systems ARP [Address Resolution Protocol] table with the IP address of the peer and the Ethernet address of this system. This will have the effect of making the peer appear to other systems to be on the local ethernet.
+ name l2tpd = is used in the ppp authentication file.

#### Adding users
Every user should be defined in the `/etc/ppp/chap-secrets` file. Below is an example file.
{%highlight bash%}
# Secrets for authentication using CHAP
# client       server  secret                  IP addresses
alice          l2tpd   0F92E5FC2414101EA            *
bob            l2tpd   DF98F09F74C06A2F             *
{% endhighlight %}
+ client = username for the user
+ server = the name we define in the ppp.options file for xl2tpd
+ secret = password for the user
+ IP Addresses = leave to * for any address or define addresses from were a user can login.

#### Testing it
{%highlight bash%}
/etc/init.d/ipsec restart 
/etc/init.d/xl2tpd restart
{% endhighlight %}
> Quote End

#### Now Setup your Client
![iphone vpn setting](http://7vzp6r.com1.z0.glb.clouddn.com/iphonevpn.jpg?imageView2/2/h/500)

* Server is your server's actual IP Address
* Secret is the PSK we set in the `/etc/ipsec.secrets`

#### Have Fun Now~

