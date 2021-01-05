dictionary = %w[below down go going horn how howdy it i low own part partner sit]

string = "Howdy partner, sit down! How's it going?"

def substring(string, dictionary)
  result_hash = {}
  seperated_words = string.split(' ')
  seperated_words.each do |i|
    dictionary.each do |j|
      if i.include?(j)
        if result_hash[j].nil?
          result_hash[j] = 0
          result_hash[j] += 1
        else
          result_hash[j] += 1
        end
      end
    end
  end
  result_hash
end

puts substring(string, dictionary)
