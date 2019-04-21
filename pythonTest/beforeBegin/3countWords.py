# 输入一个字符串 统计出字母 空格 数字 其他字符各有多少个
import string

s = input('input a string:')

letter = 0
space = 0
digit = 0
other = 0

# 遍历字符串
for c in s:
	if c.isalpha():
		letter += 1
	elif c.isspace():
		space += 1
	elif c.isdigit():
		digit += 1
	else:
		other += 1

# 这里不需要逗号分隔
print('字母有%d个,空格有%d个,数字有%d个,\
其他字符有%d个'  %(letter, space, digit, other))
