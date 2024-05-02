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
      url: "#"
    - name: "Documentation"
      url: "#"
    - name: "Chat on Gitter"
      icon: "message-square"
      url: "#"

announcement:
    title: "Arkouda 3.2.6 released!"
    content: |
      The new release brings the `addOne` message, which significantly speeds up increment operations on large arrays!

      [Read the release notes →](#)
---

{{% section "arkouda-is" %}}
{{% section "quotes" %}}
{{% section "you-can" %}}
