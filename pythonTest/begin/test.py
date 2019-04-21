# alist = list(map(int, input().split()))
# blist = list(map(int, input().split()))
# result = 0
# for i in range(len(alist)):
# 	result += (alist[i]-blist[i])**2
# print(result)


# str = 'love e vol;'
# # str = input()
# str = str.replace(' ', '')
# str = str.replace(';', '')
# str = str.upper()
# result = True
# l = int(len(str)/2)
# str1 = str[0:l]
# str2 = str[l:]
# for i in range(len(str1)):
# 	if str1[i] != str2[-(i+1)]:
# 		result = False
# print(result)


# alist = list(map(int, input().split()))
# result = 0
# l = []
# for i in range(len(alist)):
# 	for j in range(len(alist)):
# 		for k in range(len(alist)):
# 			if (alist[i]+alist[j]+alist[k] == 0) and (i!=j) and (i!=k) and (j!=k):
# 				l.append(sorted([alist[i],alist[j],alist[k]]))
# for i in range(len(list(list(t) for t in(set([tuple(t) for t in l]))))):
# 	result += 1
# print(result)

# def threeSum(self, nums):
# 	l = [] 
# 	for a in range(len(nums)): 
# 		for b in range(len(nums)):
# 		 for c in range(len(nums)):
# 		  if (a != b) and (a != c) and (b != c) and (nums[a] + nums[b] + nums[c] == 0):
# 		   l.append(sorted([nums[a],nums[b],nums[c]]))
# 	 return(list(list(t) for t in(set([tuple(t) for t in l]))))


# alist = list(map(int, input().split()))
# blist = []
# for i in range(len(alist)):
# 	res = 1
# 	for j in range(len(alist)):
# 		if i!=j:
# 			res *= alist[j]
# 	blist.append(res)
# print(blist)

# str = 'JNTQZCZF'
# str2 = 'IMSPYBYE'
# n = ord(str2[0]) - ord(str[0])
# if n<0:
# 	n += 26
# print(n)
# s1 = input()
# s2 = ''
# for i in s1:
# 	res2 = 90 - (n - (ord(i) - 65)) - 1
# 	s2 += chr(res2)
# print(s2)

# print(ord('A'))
# print(ord('F'))
# print(ord('E'))
# print(ord('Z'))

# str = input()
# str2 = 'IMSPYBYE'
# s2 = ''
# for i in range(len(str)):
# 	n = ord(str2[i]) - ord(str[i])
# 	s2 += chr(ord(str[i])+n)
# print(s2)


a = input()
# b = ''
# for c in a:
# 	if c.isalpha() or c.isdigit():
# 		b += c.lower()
# for i in range(len(b)//2):
# 	if b[i] != b[-1-i]:
# 		print(False)
# 		break
# else:
# 	print(True)
 b = ''.join(map(lambda x:x.lower() if x.isdigit() or x.isalpha() else '', a))
 print(b == b[::-1])








