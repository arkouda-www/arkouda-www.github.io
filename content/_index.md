---
title: "Arkouda"
draft: true
tagline: "Massive-scale data science,<br> from the comfort of your laptop"
codes:
  -
    name: "Arkouda"
    title: "Ready for supercomputers"
    code: |
      import arkouda as ak

      ak.startup('localhost', 5555)

      # Generate two large arrays
      a = ak.randint(0,2**32,2**10)
      b = ak.randint(0,2**32,2**10)

      # add them
      c = a + b

      # Sort the array and print first 10 elements
      ak.sort(c)
      print(c[0:10])

  -
    name: "NumPy"
    title: "Industry standard"
    code: |
      import numpy as np



      # Generate two large arrays
      a = np.random.randint(0,2**32,2**10)
      b = np.random.randint(0,2**32,2**10)

      # add them
      c = a + b

      # Sort the array and print first 10 elements
      ak.sort(c)
      print(c[0:10])

buttons:
    - name: "Get Started"
      primary: true
      url: "#" # TODO: put link to Arkouda Demo here
    - name: "Documentation"
      url: "https://bears-r-us.github.io/arkouda/"
    - name: "Chat on Gitter"
      icon: "message-square"
      url: "https://gitter.im/ArkoudaProject/community"

announcement:
    title: "Arkouda v2024.04.19 released!"
    content: |
      The new release brings optimized Parquet `Strings` reads, which significantly speeds up  operations on data in `.parquet` files, along with more Array API functionality!

      [Read the release notes →](https://github.com/Bears-R-Us/arkouda/releases/tag/v2024.04.19)
---

{{% section "arkouda-is" %}}
{{% section "quotes" %}}
{{% section "you-can" %}}
