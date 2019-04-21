# class Person:
#     def __init__(self,id):
#         self.id=id
# tom=Person(123)
# tom.__dict__['age']=20
# print(tom.age+len(tom.__dict__))


# name=['Jack','John','Mary']
# name.sort(reverse=False)
# print(name)



# class Person:
# 	def __init__(self, name, city):
# 		self.name = name
# 		self.city = city
# 	def __str__(self):
# 		return '(%s, %s)' % (self.name, self.city)
# 	__repr__ = __str__
# 	def __lt__(self, other):
# 		return self.city > other.city
# 	def moveTo(self, newCity):
# 		self.city = newCity

# class Teacher(Person):
# 	def __init__(self, name, city, school):
# 		super().__init__(name, city)
# 		self.school = school
# 	def moveTo(self, newSchool):
# 		self.school = newSchool
# 	def __lt__(self, other):
# 		return self.school > other.school

# t = list()
# t.append(Teacher('小明', '北京', '北京大学'))
# t.append(Teacher('小红', '郑州', '郑州大学'))
# t.append(Teacher('小蓝', '南京', '南京大学'))
# t.append(Teacher('小绿', '上海', '上海大学'))

# print(t)

# t.sort()

# print(t)

# class myList(list):
# 	def pro(self):
# 		res = 1
# 		for i in range(len(self)):
# 			res *= self[i]
# 		return res
# l = myList()
# l.append(7)
# l.append(1)
# l.append(9)
# l.append(3)
# print(l.pro())

# class Student:
# 	def __init__(self, sname, mscore, cscore, escore):
# 		self.sname = sname
# 		self.mscore = mscore
# 		self.cscore = cscore
# 		self.escore = escore
# 		self.alist = self.mscore + self.cscore + self.escore
# 	def __lt__(self, other):
# 		return self.alist > other.alist
# 	def __str__(self):
# 		return '(%s, %d, %d, %d)' % (self.sname, self.mscore, self.cscore, self.escore)
# 	__repr__ = __str__

# s = list()

# sname = input()
# mscore = input()
# cscore = input()
# escore = input()
# alist = []
# alist.append(sname.split(' ')[0])
# alist.append(mscore.split(' ')[0])
# alist.append(cscore.split(' ')[0])
# alist.append(escore.split(' ')[0])
# blist = []
# blist.append(sname.split(' ')[1])
# blist.append(mscore.split(' ')[1])
# blist.append(cscore.split(' ')[1])
# blist.append(escore.split(' ')[1])

# s.append(Student(alist[0], int(alist[1]), int(alist[2]), int(alist[3])))
# s.append(Student(blist[0], int(blist[1]), int(blist[2]), int(blist[3])))
# s.sort()

# print(s[0].sname, s[0].mscore, s[0].cscore, s[0].escore, end = '')




# alist = list(map(int, input().split()))
# num = int(input())

# alist = [1, 3, 4, 2]
# num = 9
# blist = []
# for i in range(len(alist)-1):
# 	if alist[i] + alist[i+1] == num:
# 		blist.append(i)
# 		blist.append(i+1)
# print(blist)


# x = int(input())
# y = int(input())
# n = int(input())
# blist = []
# for i in range(10):
# 	for j in range(10):
# 		for k in range(n+1):
# 			if x**i+y**j == k:
# 				blist.append(k)
# blist = list(set(blist))
# print(blist)

# -*- coding: utf-8 -*-
# import itertools
# ls = input().strip().split()
# ls = [int(x) for x in ls]
# alist = itertools.combinations(ls, 3)
# alist = list(alist)
# blist = []
# flag = False
# for i in alist:
#   i = sorted(list(i))
#   if (i[2] - i[1] < i[0]) and (i[0] + i[1] > i[2]):
#     blist.append(i)
#     flag = True
# if flag:
# 	res = [sum(x) for x in blist]
# else:
# 	res = [0]
# print(max(res))


# seq = input().strip().split()
# seq = [int(x) for x in seq]
# num = int(input())
# def mt(seq, num):
#     for i in range(len(seq)):
#         for j in range(i + 1, len(seq)):
#             if seq[i] + seq[j] == num:
#                 return [i, j]
# print(mt(seq, num))

# import math
# x = int(input())
# y = int(input())
# n = int(input())
# i = 0
# j = 0
# set_m = set()
# m = 0
# if x == 1:
#     a = 1
# else:
#     a = math.log(n - y, x) + 1
# if y == 1:
#     b = 1
# else:
#     b = math.log(n - x, y) + 1
 
# while i <= a:
#     while j <= b:
#         m = x ** i + y ** j
#         if m <= n:
#             set_m.add(m)
#         j += 1
#     i += 1
#     j = 0
 
# list_m = list(set_m)
# print(sorted(list_m))

# class Student(object):
#     def __init__(self,name, m, c, e):
#         self.name = name
#         self.m = int(m)
#         self.c = int(c)
#         self.e = int(e)
#         #m,c,e分别代表数学,语文,英语乘积;sum_score为总成绩
#         self.sum_score = self.m + self.c + self.e
# #    小于< 比较方法
#     def __lt__(self, other):
#         return self.sum_score < other.sum_score
# #    大于> 比较方法
# #    def __gt__(self, other):
# #        return self.sum_score > other.sum_score
 
# if __name__ == '__main__':
#     names   = input().strip().split()
#     mscore  = input().strip().split()
#     cscore  = input().strip().split()
#     escore  = input().strip().split()
     
#     for i in range(len(names)):
#         names[i] = Student(names[i],
#                            mscore[i],
#                            cscore[i],
#                            escore[i])
         
#     names.sort(reverse = True)
#     print(names[0].name, 
#           names[0].m,
#           names[0].c,
#           names[0].e,
#           end = '')



# for j in (i**2 for i in range(10) if i%3==0):
# 	print(j, end=' ')

# name1 = ['tom', 'jack', 'mary']
# name2 = [name.upper() for name in name1]
# print(name2[2][0])

# a = 10
# b = 0
# try:
# 	c = a/b
# 	print(c)
# except ZeroDivisionError as e:
# 	print(e)
# finally:
# 	print('111')
# print('done')

# def fun():
# 	print(0)
# 	i = 0
# 	while i < 3:
# 		i += 1
# 		yield i
# x = fun()
# y = (i for i in x)
# print(list(y))





