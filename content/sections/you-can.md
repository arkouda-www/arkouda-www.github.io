## With Arkouda, you can...

{{< block >}}
### Make the most of your hardware

{{< graph >}}

Source: [Arkouda `argsort` Benchmark](https://github.com/Bears-R-Us/arkouda/tree/master/runs/ronawho-2022-10-03)

Hardware Configuration: [HPE SGI 8600](https://buy.hpe.com/us/en/compute/sgi-system/sgi-8600-system/sgi-8600-system/hpe-sgi-8600-system/p/1010032504):
* EDR-100 InfiniBand network
* 40-core Cascade Lake (dual-socket Intel Xeon Gold 6242R)
* 192 GB RAM
{{< /block >}}

{{< block >}}
### Interactively analyze large datasets
By distributing your data across multiple nodes, Arkouda allows you to rapidly transform and wrangle datasets that are simply intractable for a laptop or desktop.

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
