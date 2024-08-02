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
      url: "https://github.com/bmcdonald3/chapelcon-2024-arkouda"
    - name: "Tutorial Video"
      url: "https://www.youtube.com/watch?v=__pXYW359Ws"
    - name: "Chat on Gitter"
      icon: "message-square"
      url: "https://gitter.im/ArkoudaProject/community"

announcement:
    title: "Arkouda v2024.04.19 released!"
    content: |
      The new release brings optimized Parquet `Strings` reads, which significantly speeds up  operations on data in `.parquet` files, along with more Array API functionality!

      [Read the release notes →](https://github.com/Bears-R-Us/arkouda/releases/tag/v2024.04.19)
---

## Arkouda is...

{{< rectlist >}}

{{< rect >}}
### Fast
Arkouda is powered by [Chapel](https://chapel-lang.org), a programming language built from the ground up to support parallelism and distributed computing. Make the most out of every core and every node in your system.

<!-- [See performance results →](#) -->
{{< /rect >}}

{{< rect >}}
### Interactive
By distributing your data across multiple nodes, Arkouda allows you to rapidly transform and wrangle datasets in real time that are simply intractable for a laptop or desktop.

<!-- [Read about Arkouda in Jupyter →](#) -->
{{< /rect >}}

<!--{{< rect >}}
### Familiar
Arkouda's library functions deliberately mirror those of NumPy and Pandas, so you can get started with minimal learning curve.

[Compare to NumPy and Dask →](#)
{{< /rect >}}-->

{{< rect >}}
### Extensible
One can expand on Arkouda’s capabilities by creating specialized functions, thus enabling more access to distributed high performance from Python.

{{< /rect >}}


{{< /rectlist >}}

## Arkouda users are saying...

{{< quote author="Tess Hayes" affiliation="Bytoa" url="" >}}
…solving problems in a matter of seconds, as opposed to days…
{{< /quote >}}

{{< quote author="Jake Trookman" affiliation="Erias" url="" >}}
[I'm] working with more data than I ever thought possible as a data scientist!
{{< /quote >}}

## With Arkouda, you can...

{{< block >}}
### Make the most of your hardware

{{< graph >}}

Source: [Arkouda `argsort` Benchmark](https://github.com/Bears-R-Us/arkouda/tree/master/runs/ronawho-2022-10-03)

Hardware Configuration: HPE SGI 8600:
* EDR-100 InfiniBand network
* 40-core Cascade Lake (dual-socket Intel Xeon Gold 6242R)
* 192 GB RAM
{{< /block >}}

{{< block >}}
### Do Exploratory Data Analysis (EDA) on large to massive datasets
No other data analysis tool can sort or groupby massive data as effectively as Arkouda.  When running on more than 8000 nodes, Arkouda can sort data at a rate of over 8 TB/s.

{{< figure src="./arkouda-process.svg" >}}
{{< /block >}}

{{< block >}}
### Write familiar Python code
Arkouda's library functions deliberately mirror those of NumPy and Pandas, so you can get started with minimal learning curve.

{{< diff >}}
 # Generate two large arrays
-a = np.random.randint(0,2**32,2**10)
-b = np.random.randint(0,2**32,2**10)
+a = ak.randint(0,2**32,2**10)
+b = ak.randint(0,2**32,2**10)

 # add them
 c = a + b

 # Sort the array and print first 10 elements
 ak.sort(c)
 print(c[0:10])
{{< /diff >}}
{{< /block >}}
