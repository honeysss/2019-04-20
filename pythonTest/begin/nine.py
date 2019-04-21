# try:
# 	4/1
# except ZeroDivisionError as e:
# 	print(e)
# else:
# 	print('no error')
# finally:
# 	print("123")

# alist = []
# for i in range(10):
# 	alist.append(i)
# print(alist)


# alist = [y**y for y in range(10)]
# alist = {'k%d'%(x,):x**2 for x in range(10)}
# alist = {x+y for x in range(10) for y in range(10) if x == 8}
# alist = (x.upper() for x in [1, 'abc', True] if isinstance(x, str))
# for i in alist:
# 	print(i)


# def num(max):
# 	n = 0
# 	while n < max:
# 		yield n
# 		n += 2
# for i in num(10):
# 	print(i)

# a = input()
# b = input()
# try:
# 	a/b
# except ZeroDivisionError as e:
# 	print(e)
# except TypeError as e:
# 	print(e)
# else:
# 	print(a/b)

# # blist = []
# alist = [-1, 0, 1, 2, -1]
# result = 0
# for a in range(len(alist)):
# 	for b in range(1, a-1):
# 		for c in range(1, b-1):
# 			if i+j+k == 0:
# 				result += 1
# # 				alist.append(a)
# # 				alist.append(b)
# # 				alist.append(c)
# # 				blist.append(alist)
# # 				alist = []
# # print(blist)
# print(result)

# alist = [1, 1]
# def fib():
# 	for i in range(10):
# 		alist.append(alist[-1] + alist[-2])
# fib()
# print(alist)

# import PIL
# Image.open('1.jpg')

# import requests
# L1 =['abc', ['123','456']]
# L2 = ['1','2','3']
# print(L1 > L2)

# print(int(abs(-3 + 4j)))		


# alist = [1, 0, 4, 6]
# sorted(alist)
# print(alist)


def fun(num):
    num *= 2
x = 20
fun(x)
print(x)









