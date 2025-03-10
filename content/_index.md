---
title: "Arkouda"
tagline: "Massive-scale data science,<br> from the comfort of your laptop"
codes:
  -
    name: "Arkouda"
    title: "Ready for supercomputers"
    code: |
      # Launch an Arkouda server: ./arkouda_server -nl <number-of-locales>

      import arkouda as ak

      # connect to the server
      ak.connect('localhost', 5555)

      # Generate two large arrays
      a = ak.random.randint(0,2**32,2**38) # ----> Won't fit on a single machine!
      b = ak.random.randint(0,2**32,2**38) #       1TB of random integers.

      # add them
      c = a + b

      # Sort the array and print first 10 elements
      c = ak.sort(c)
      print(c[0:10])

  -
    name: "NumPy"
    title: "Industry standard"
    code: |


      import numpy as np




      # Generate two large arrays
      a = np.random.randint(0,2**32,2**28) # ----> smaller to fit on a single machine
      b = np.random.randint(0,2**32,2**28)

      # add them
      c = a + b

      # Sort the array and print first 10 elements
      c = np.sort(c)
      print(c[0:10])

buttons:
    - name: "Try it Out"
      primary: true
      url: "https://github.com/bmcdonald3/chapelcon-2024-arkouda#readme"
    - name: "Tutorial Video"
      url: "https://www.youtube.com/watch?v=__pXYW359Ws"
    - name: "Chat on Gitter"
      icon: "message-square"
      url: "https://gitter.im/ArkoudaProject/community"

announcement:
    title: "Read Arkouda co-inventor Bill Reus's interview!"
    content: |
      As part of the [7 Questions for Chapel
      Users](https://chapel-lang.org/blog/series/7-questions-for-chapel-users/)
      interview series, Arkouda co-inventor Bill Reus gave a great historical
      perspective on Arkouda's beginnings.

      [Read the interview →](https://chapel-lang.org/blog/posts/7qs-reus/)
---

{{% section "arkouda-is" %}}
{{% section "powered-by-chapel" %}}
{{% section "quotes" %}}
{{% section "you-can" %}}
