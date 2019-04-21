#归并排序 ?
import random

# 定义一个方法
def merge_sort(data_list):
	# 如果数组的长度为1 返回这个数组
	if len(data_list) <= 1:
		return data_list
	# 让middle把数组分隔成相同的两部分
	middle = int(len(data_list)/2)
	# print('middle', middle)
	left = merge_sort(data_list[:middle])
	right = merge_sort(data_list[middle:])
	# print('left', left)
	# print('right', right)
	merged = []
	while left and right:
		# 如果左边第一个比右边第一个小 左边第一个添加到数组中 否则右边第一个添加到数组中
		merged.append(left.pop(0) if left[0] <= right[0] else right.pop(0))
		# print(merged)
	merged.extend(right if right else left)
	return merged

# data_list = [random.randint(1, 100) for _ in range(50)]
data_list = [10, 2, 3, 20, 92, 100, 395]
print(merge_sort(data_list))
