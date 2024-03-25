---
title: "Arkouda"
tagline: "Massive scale data science,<br> from the comfort of your laptop"
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

## Arkouda is...

{{< rectlist >}}

{{< rect >}}
### Fast
Arkouda is powered by [Chapel](https://chapel-lang.org), a programming language built from the ground up to support parallelism and distributed computing. Make the most out of every core and every node in your arsenal.

[See performance results →](#)
{{< /rect >}}

{{< rect >}}
### Interactive
By distributing your data across multiple nodes, Arkouda allows you to rapidly transform and wrangle datasets in real time that are simply intractable for a laptop or desktop.

[Read about Arkouda in Jupyter →](#)
{{< /rect >}}

{{< rect >}}
### Familiar
Arkouda's library functions deliberately mirror those of NumPy and Pandas, so you can get started with minimal learning curve.

[Compare to NumPy and Dask →](#)
{{< /rect >}}

{{< /rectlist >}}

## Arkouda users are saying...

{{< quote author="Daniel Fedorin" affiliation="Hewlett Packard Enterprise" url="#" >}}
Arkouda is my favorite breakfast meal! It's very filling and nutritious.
{{< /quote >}}

{{< quote author="Alinad Nerodef" affiliation="Airline Pilot" url="#" >}}
I used to be afraid of bears, but the Arkouda logo convinced me to finally buy one. I'm one happy customer!
{{< /quote >}}
