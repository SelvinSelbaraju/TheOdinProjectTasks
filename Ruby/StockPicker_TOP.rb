stock_prices = [100,22,124,4,7,3,13,100,9,1,24,2]

def StockPicker(prices)
    max_profits = []
    all_profits = []
    for i in prices
        profits = []
        for j in prices[prices.find_index(i)..]
            
            profit = j - i
            profits.push(profit)
        end
        max_profits.push(profits.max())
        all_profits.push(profits)
    end

    buy_day = max_profits.find_index(max_profits.max())
    sell_day = all_profits[buy_day].find_index(all_profits[buy_day].max()) + buy_day

    return [buy_day,sell_day]
end

puts StockPicker(stock_prices)

            