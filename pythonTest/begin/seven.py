# import calendar
# print(calendar.prcal(2018))

# import time
# print(time.time())

# f = open('d://test.txt', 'w')
# f.writelines('hei\nha\n')
# f.close()
# f = open('d://test.txt')
# print(f.readlines())
# f.close()

# import time
# t1 = time.time()
# num = 0
# for i in range(1, 5):
# 	for j in range(1, i):
# 		num += j*(j+1)
# t2 = time.time()
# print(t2 - t1)
# print(num)

# import random
# f = open('d://test.txt', 'w')
# f.writelines('this is an article, do you konw what is article? if you do not know, i can tell you')
# f.close()
# f = open('d://test.txt')
# str = f.readlines()[0]
# f.close()
# alist = str.split(' ')
# random.shuffle(alist)
# print(alist)


# import easygui
# easygui.msgbox(msg='click me')

# import turtle
# p = turtle.Pen()
# p.pencolor('red')
# p.pensize(5)
# for i in range(10):
# 	p.forward(50)
# 	if i%2 == 0:
# 		p.left(72)
# 	else:
# 		p.right(144)


# import turtle
# p = turtle.Pen()
# p.pensize(5)
# for i in range(9):
# 	p.forward(200)
# 	p.right(160)


# import turtle
# import random
# width = 6
# color = 'brown'
# def tree(branchLen, t, w, c):
# 	if branchLen > 5:
# 		if branchLen < 20:
# 			c = 'green'
# 		t.pensize(w)
# 		t.color(c)
# 		t.forward(branchLen)
# 		t.right(15)
# 		tree(branchLen*0.7, t, w*0.8, c)
# 		if branchLen < 10:
# 			t.color('pink')
# 			t.pensize(3)
# 			t.forward(2)
# 			t.backward(2)
# 		t.left(40)
# 		t.color(c)
# 		t.pensize(w)
# 		tree(branchLen*0.7, t, w*0.8, c)
# 		t.right(25)
# 		t.backward(branchLen)
# def main():
# 	t = turtle.Turtle()
# 	myWin = turtle.Screen()
# 	t.left(90)
# 	t.up()
# 	t.backward(100)
# 	t.down()
# 	tree(105, t, width, color)
# 	myWin.exitonclick()
# main()

# import calendar
# print(calendar.isleap(2000))

# from datetime import *
# td1 = timedelta(minutes = 10)
# td2 = timedelta(minutes = 15)
# print(td1*10)

# import math
# print(math.log())

# from fractions import Fraction
# t = Fraction(7, 4)
# m = 1.75
# print(t == m)


# def ndays(year,month,day):
#   msp=[31,28,31,30,31,30,31,31,30,31,30,31]
#   msr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
#   if year%400==0 or (year%100!=0 and year %4==0):
#       ms=msr
#   else:
#       ms=msp
#   m=0
#   d=0
#   for i in range(month-1):
#       d+=ms[i]
#   d+=day
#   return d
# import datetime
# day = '2019/1/8'
# alist = day.split('/')
# y = int(alist[0])
# m = int(alist[1])
# d = int(alist[2])
# targetDay = datetime.date(y, m, d)
# dayCount = targetDay - datetime.date(targetDay.year - 1, 12, 31)
# print(dayCount)

# import math
# n = 1
# print(round(math.sin(15) + ((math.e**n - 5*n)/math.sqrt(n**2+1)) - math.log(3*n), 10))

# print(math.sin(15) + ((math.e**1 - 5*1)/math.sqrt(1**2+1)) - math.log(3*1))

# import math
# for i in range(1000):
# 	if (int(math.sqrt(i+150)))**2 == i+150 and (int(math.sqrt(i+286)))**2 == i+286:
# 		print(i)
# 		break


# n = 3
# for i in range(2*n-1):
# 	for j in range(2*n-1):
# 		if j == 2*(n-1)-i or j == i:
# 			print('X',end='')
# 		else:
# 			print('+',end='')
# 	print()

# n = 7
# m = 3
# k = 0
# alist = []
# blist = []
# for i in range(n):
# 	alist.append(i)
# def func(alist, k):
# 	for i in range(len(alist)):
# 		for j in range(m-1):
# 			if k >= len(alist)-1:
# 				k = 0
# 			else:
# 				k += 1
# 		blist.append(alist[k])
# 		alist.remove(alist[k])
# func(alist, k)
# print(blist)



# def josephus(n,k):
#     link = list(range(0, n))
#     out = 0
#     result = []
#     for loop_i in range(n - 1):
#         out = (out + k) % len(link) 
#         out -= 1
#         result.append(link.pop(out))
#         if out == -1: 
#             out = 0
#     result.append(link[0])
#     return result
# n = 7
# m = 3
# result = josephus(n, m)
# print(result)



day = input()
alist = day.split('/')
year = int(alist[0])
month = int(alist[1])
day = int(alist[2])
day_list = [0,31,59,90,120,151,182,213,243,273,304,334]

num_day = 0

if 0<month<12:
    num_day = day_list[month-1]
else:
    print("error")
    
num_day += day

if (year % 400 == 0) or ((year % 4 == 0) and (year % 100 != 0)):
    if month > 2 :
        num_day += 1
        
print(num_day)