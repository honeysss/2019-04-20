# 猜数字
import random

num = random.randint(1, 10)

print('猜字游戏:\
	我想了一个1-10的数,请你猜猜是哪个数,你一共有五次机会')

time = 1

while time < 5:
	guessNum = int(input('1-10的数,第%d次猜,请输入:' %(time)))

	if guessNum == num:
		print('恭喜你答对了，你一共用了%d次猜出了%d这个数' %(time, num))
		break
	elif guessNum > num:
		print('你猜大了')
	else:
		print('你猜小了')
	time += 1

else:
	print('你没有猜出来这个数哦 这个数是%d' %(num))