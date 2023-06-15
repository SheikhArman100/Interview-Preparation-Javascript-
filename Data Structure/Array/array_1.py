#create an list or array
my_list=[2,3,4,"Arman",8]
print(my_list)

#list length
print(len(my_list)) 

# accessing element
print(my_list[3])

#modifying an element
my_list[1] = 10
print(my_list)

#adding a new element to the end
my_list.append(6)
print(my_list)

#adding a new element at th specific index
my_list.insert(1, 5) #insert(index,element)

#removing an element by value
my_list.remove(8) # if there are two * value,then it will delete the first one
print(my_list)

#Remove an element by index
del my_list[2]
    #or
my_list.pop(3)

#List slicing -> create separate list
print(my_list[1:4])  # Output: [10, 4, 5]
print(my_list[:3])   # Output: [1, 10, 4] 3 to the end
print(my_list[3:])   # Output: [5, 6] from start to te end


#iterate a list
for item in my_list:
    print(item)


#Check if an element exists in the list
item=6
if item in my_list:
    print("element exist")
else:
    print(f'{item} doesnt exist in the list')

#merge 2 array -> create new array
array1=[1,2,3]
array2=[2,4,5,6]
array3=array1+array2
print(array3)

#merge 2 array-> add 2nd array with 1st array
array1.extend(array2)
print(array1)

#return the index of a value
index = my_list.index(2)
print(index)

#return the amount of time  a value is presented
count = my_list.count(2)
print(count)

#sort the list
my_list.sort()

#reverse the list
my_list.reverse()

#---------------------------------------Higher Order Function-------------------------------------------------------

#map(function,array)
def square(x):
    return x ** 2

numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(square, numbers))
print(squared_numbers) # Output: [1, 4, 9, 16, 25] 

#filter(function,array)
def is_even(x):
    return x % 2 == 0

numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)  # Output: [2, 4]

#reduce
from functools import reduce

def multiply(x, y):
    return x * y

numbers = [1, 2, 3, 4, 5]
product = reduce(multiply, numbers)
print(product) 

#sorted()
names = ['Alice', 'Bob', 'Charlie', 'David']
sorted_names = sorted(names, key=len)
print(sorted_names)  # Output: ['Bob', 'Alice', 'David', 'Charlie']

#lambda arguments: expression -> kind of arrow function of javascript
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers) 

#Clear the entire list:
my_list.clear()






