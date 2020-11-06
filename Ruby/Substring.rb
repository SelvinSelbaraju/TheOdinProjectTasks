dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

string = "Howdy partner, sit down! How's it going?"

def substring(string,dictionary)
  result_hash = {}
  seperated_words = string.split(" ")
  for i in seperated_words
    for j in dictionary
      if i.include?(j)
        if result_hash[j] == nil
          result_hash[j] = 0
          result_hash[j] += 1
        else
        result_hash[j] += 1
        end
      end
    end
  end
  return result_hash
end

puts substring(string,dictionary)

