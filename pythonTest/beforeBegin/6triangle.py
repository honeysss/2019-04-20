triangle = [1]
print(triangle)

triangle.append(0)
n = 10
for i in range(1, n):
	newline = []
	for j in range (i + 1):
		value = triangle[j] + triangle[-j-1]
		newline.append(value)

	print(newline)
	triangle=newline
	triangle.append(0)