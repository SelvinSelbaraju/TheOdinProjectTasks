test_array = ['a','c','b']

def BubbleSort(array)
    result_array = array
    for i in (1..array.length)
        for j in (0..array.length-2)
            first = result_array[j]
            second = result_array[j+1]
            if first > second
                result_array[j] = second
                result_array[j+1] = first
            end
        end
    end
    return result_array
end
                

a = BubbleSort(test_array)
puts(a)