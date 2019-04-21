# 输入年月日 判断这一天是这一年的第几天

import datetime
dtstr = input('Enter the datetime:(20181209):')
# 把用户输入的时间转换为y-m-d h:m:s 的形式	2018-12-09 00:00:00
dt = datetime.datetime.strptime(dtstr, '%Y%m%d')
print(dt)
# 把年份提取出来再在后面加上0101（一年的第一天） 20180101
another_dtstr = dtstr[:4] + '0101'
print(another_dtstr)
# 把提取出来的年份转换为y-m-d h:m:s的形式		2018-01-01 00:00:00
another_dt = datetime.datetime.strptime(another_dtstr, '%Y%m%d')
print(another_dt)
# 把用户输入的日期减去提取出来的时间（今天的第一天） 得出是第几天			2018-12-09 00:00:00 - 2018-01-01 00:00:00
print(int((dt - another_dt).days) + 1)