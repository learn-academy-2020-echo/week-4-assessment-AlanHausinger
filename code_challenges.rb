# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.
full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
#Create a method that will take in an array and return one with only odd numbers.
def odd_array array
    new_array = array.select { |value| value.is_a?(Integer) && value % 2 != 0}
    print new_array.sort
end
odd_array full_arr1
odd_array full_arr2
# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']
# https://stackoverflow.com/questions/26265392/finding-an-objects-within-an-array-with-specific-letter-using-ruby
# thank you stackoverflow
# You could write more simple way -
def finder(array, thing_to_find)
  array.select { |word| word.include? thing_to_find }
end
# array will pass each element word from that array to the block in each iteration. If it returns true, then word will be selected and stored to an temporary array, otherwise not. Once all iterations will be completed with respected to the array, then all selected elements from each block execution, which were being stored inside a temporary array, that array will be returned.
def finder (array, letter_to_find)
    array.select { |word| word.include? letter_to_find }
end
p finder beverages_array, letter_a
p finder beverages_array, letter_o
# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
def remvowel(string)
    string.delete 'aeiou'
  end
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
def disemvowel string
    string.delete 'A,E,I,O,U,a,e,i,o,u'
end
p disemvowel album1
p disemvowel album2
p disemvowel album3
# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.
nums_array1 = [42, 7, 27]
# Expected output: 76
nums_array2 = [25, 17, 47, 11]
# Expected output: 100
def sum_nums array
    array.inject(0){|sum,value| sum + value}
end
p sum_nums nums_array1
p sum_nums nums_array2





# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'
