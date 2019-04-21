# -*- coding:utf-8 -*-
# 点一份饮料
import random
menu = ['coffee', 'tea', 'cola', 'milk', 'water']
print('Meun', menu)
name = input('Your name please:')
drink = random.choice(menu)
print('你好', name, '!Enjoy your', drink)