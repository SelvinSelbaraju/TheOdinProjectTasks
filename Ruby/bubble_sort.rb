test_array = %w[labrador pug daschund]

def BubbleSort(array)
  result_array = array
  (1..array.length).each do |_i|
    (0..array.length - 2).each do |j|
      first = result_array[j]
      second = result_array[j + 1]
      if first > second
        result_array[j] = second
        result_array[j + 1] = first
      end
    end
  end
  result_array
end

a = BubbleSort(test_array)
puts(a)
