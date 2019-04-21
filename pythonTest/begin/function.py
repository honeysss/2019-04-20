# def add(a, b):
# 	return a+b
# print(add(1,3))


# list2 = [1, 2, 3]
# print(list(map(lambda a:a*3, list2)))

# def func(*args):
# 	for arg, i in zip(args, range(len(args))):
# 		print('arg%d=%s' % (i, arg))

# func(1, 2, 'nihao')



# counter=1
# num=0
# def tset():
#     global counter
#     for i in (1,2,3):
#         counter+=1
#     num=10
# tset()
# print(counter,num)

# n = int(input())
# def fbnq(n):
# 	alist = [1, 1]
# 	for i in range(n-2):
# 		alist.append(alist[-1]+alist[-2])
# 	return alist[-1]
# print(fbnq(n))

# num1 = int(input())
# num2 = int(input())
# def hcf(a, b):
# 	if b == 0:
# 		return a
# 	return hcf(b, a%b)
# print(hcf(num1, num2))


# num1 = int(input())
# num2 = int(input())
# def lcm(a, b):
# 	if a > b:
# 		grater = a
# 	else:
# 		grater = b
# 	while(True):
# 		if((grater%a == 0) and (grater%b == 0)):
# 			lcm = grater
# 			break
# 		grater += 1
# 	return lcm
# print(lcm(num1, num2))

# n=int(input(""))
# def fact(n):
# 	res = 0
# 	for i in range(1, n+1):
# 		res += i
# 	return res
# print(fact(n))

alist = list(map(int, input().split()))
def bubbleSort(alist):
	for j in range(len(alist)-1):
		for i in range(len(alist)-1-j):
			if alist[i] > alist[i+1]:
				alist[i], alist[i + 1] = alist[i + 1], alist[i]
	return alist
print(bubbleSort(alist))

# alist = list(map(int, input().split()))
# def foo(alist):
# 	blist = []
# 	for i in range(len(alist)):
# 		if i%2 != 0:
# 			blist.append(alist[i])
# 	return blist
# print(foo(alist))

# def fact(n):
#   value = 1
#   for i in range(1,n+1):
#     value*=i
#   return value
# n=int(input(""))
# print(fact(n))














