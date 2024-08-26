## With Arkouda, you can...

{{< block >}}
### Make the most of your hardware

{{< graph "scaling" >}}

Source: Arkouda `argsort` Benchmark

Hardware: HPE Cray EX with a Slingshot-11 network (200 Gb/s)

{{< /block >}}

{{< block >}}
### Do Exploratory Data Analysis (EDA) on large to massive datasets
No other data analysis tool can sort or group by massive data as effectively as Arkouda.  For example, Arkouda has proven to be able to sort data at 8+ TB/s using 8k compute nodes.  Whenever your dataset sizes exceed what you can fit on a single node, you're likely to get benefit from Arkouda.

{{< figure src="./arkouda-process.svg" >}}
{{< /block >}}

{{< block >}}
### Write familiar Python code
Arkouda's library functions deliberately mirror those of NumPy and Pandas, so you can get started with minimal learning curve.

{{< diff >}}
 # Generate two large arrays
-a = np.random.randint(0,2**32,2**28)
-b = np.random.randint(0,2**32,2**28)
+a = ak.random.randint(0,2**32,2**38)
+b = ak.random.randint(0,2**32,2**38)

 # add them
 c = a + b

 # Sort the array and print first 10 elements
-c = np.sort(c)
+c = ak.sort(c)
 print(c[0:10])
{{< /diff >}}
{{< /block >}}
