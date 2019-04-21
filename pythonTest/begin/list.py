# # list = []
# # list.append(1)
# # list.append(3)
# # list.insert(0, 10)
# # list.append(1)
# # # list.pop(0)
# # # list.remove(1)
# # # list.clear()
# # list.reverse()
# # # list.sort(reverse = True)
# # list.sort()
# # num = list.index(1)
# # # del list[0]
# # list2 = [1, 2, 3, 4, 5]
# # list3 = list + list2
# # num = list3[0:4:2]
# # print(num)
# # print(list3)



# tuple = (1, False, 'hello');
# tuple[0] = 3
# print(tuple[0])


# person = {
# 	"name": "scj",
# 	"age": 20,
# 	"gender": "male"
# }
# person["speak"] = "Chinese"

# cat = {}
# cat["color"] = "red"

# person.update(cat)

# person.update(hobby = 'ball')

# person.update(color = 'pink')

# del person['name']
# person.pop('color')
# person.popitem()
# # person.clear()

# print(('age', e20) in person.items())

# set = set('abcgjgh')
# # set.clear()
# for a in set:
# 	print(a)


# a = 'hello'
# b = a
# a = 'hi'
# print(a)
# print(b)


# x = input('x:')
# print(x)

# print('%04d' % (23))

# list = [1, 2, 3, 4, 5]
# list2 = list[0:3:2]
# print(list2)


# str = 'Mike and Tom'
# str2 = str.replace(' ', '')

# a = set([1, 2])
# a.remove(1)
# a.remove(2)
# print(a == True)


# alist = sorted([1, 2, 3], reverse = True)
# blist = reversed([1, 2, 3])
# print(blist)

# dict = {'1': 1, '2': 2}
# theCopy = dict
# dict['1'] = 5
# print(theCopy[-1])

# list = [1, 2, 3]
# print(list[-1])

# a = [3, 4, 5, 7, 9, 12, 13, 15, 17]
# # b = a[0:4]
# a = {1: 3}
# a[2] = 3
# a = [[]]*3
# a[0].append(1)
# a = ([1], [2])
# a[0].append(1)
# b = [1, 1, 2, 3]
# a = set(b)

# alist=list(map(int,input().split()))
# blist=list(map(int,input().split()))
# alist.extend(blist)
# alist.sort()
# for i in range(0, len(alist)):
# 	if (i < len(alist)-1):
# 		if (alist[i] == alist[i+1]):
# 			alist.remove(alist[i])
# clist = alist
# print(clist)

# alist=list(map(int,input().split()))
# len2 = len(alist)
# len3 = int(len2/2)
# dict = {}
# dict['1'] = alist[0:len3]
# dict['2'] = alist[len3:]
# print(dict)

# alist = list(map(int, input().split()))
# print(sorted(alist, key=abs))

# alist=list(map(int,input().split()))
# blist=list(map(int,input().split()))
# print(sorted(list(set(alist+blist))))

# a = 1
# if (a == 1):
# 	print(1)
# else:
# 	print(2)

# for i in range(1, 1000):
# 	n = i
# 	step = 0
# 	while(n != 1):
# 		if n % 2 == 0:
# 			n = n // 2
# 		else:
# 			n = n * 3 + 1
# 		step += 1
# 	else:
# 		print(i, 'Traps', step, 'steps')

# n = 3
# a = 0
# for i in range (1, int(n) + 1):
# 	a += i*i
# # print(a)

# y = 2016
# m = 2
# if y % 4 == 0:
# 	if m == 1 | m ==3 | m ==5 | m ==7 | m == 8 | m == 10 | m == 12:
# 		day = 31
# 	if m == 2:
# 		day = 29
# 	else:
# 		day = 30
# else:
# 	if m == 1:
# 		day = 31
# 	if m == 2:
# 		day = 28
# 	if m == 4 | m == 6 | m == 11:
# 		day = 30

# print(y,'年的', m, '月有', day, '天')
# i=1
# while i<3:
#     print(i)
#     i+=1



# str1 = 'abc'
# str2 = 'bcd'
# str = str1 + str2
# aset = set(str)
# print(aset)


# num = int(input())
# theNum = 0
# for i in range(num+1):
# 	if i % 7 != 0 and i % 10 != 7 and int(i/10) != 7: #不被7整除
# 		theNum += i**2
# print(theNum)

# num = int(input())
# theNum = 0
# for i in range(1, num+1):
# 	theNum = 0
# 	for j in range(1, i):
# 		if i%j == 0:
# 			theNum += j
# 	if theNum == i:
# 		print(i)


# n = int(input())
# # n = 3
# for i in range(n):
# 	for j in range(n-(i+1)):
# 		print(' ', end='')
# 	for k in range(2*(i+1)-1):
# 		print('+', end='')
# 	print()



# n = int(input())
# if n%10 == int(n/10000) and int(n%100/10) == int(n%10000/1000):
# 	print('yes')
# else:
# 	print('no')


# alist = list(map(int,input().split()))
# for i in range(len(alist)):
# 	if alist[i]%2 == 0:
# 		alist[i] = int(alist[i]/2)
# 	else:
# 		alist[i] = int(alist[i]**2)
# print(sorted(alist))

# n = int(input())
# alist = []
# blist = []
# for i in range(2, n+1):
# 	alist.append(i)
# 	for j in range(2, i):
# 		if j != 1 and j != i:
# 			if i%j == 0:
# 				blist.append(i)
# blist = list(set(blist))
# for i in range(len(blist)):
# 	if blist[i] in alist:
# 		alist.remove(blist[i])
# 		i -= 1
# print(alist)

# n = int(input())
# alist = []
# for i in range(2, n+1):
# 	for j in range(2, i):
# 		if j != 1 and j != i:
# 			if i%j == 0:
# 				break
# 	else:
# 		alist.append(i)
# print(alist)



# a = int(input())
# def fun(number):
#   if (number%7 == 0) or ('7' in str(number)):
#     return 0
#   else:
#     return 1
# sum = 0
# for i in range(1, a+1):
#   n = fun(i)
#   if n:
#     sum += i*i
#   else:
#     continue
# print(sum)




# n=2500
# for i in range(100, n+1):
#     sum = 0
#     p = str(i)
#     for x in p:
#       sum += int(x)**len(p)
#     if sum == i:
#         print(i)


# for x in '123':
# 	print(x)



# m = 1
# n = int(input())
# for i in range(n-1):
#     m = (m + 1) * 2
# print(m)



















