def prompt(text)
  puts text
  gets
end

class Cell
  attr_accessor :value, :changed
  def initialize(number)
    @number = number
    @value = "-"
    @changed = false
  end
end

class Player
  attr_reader :name, :color, :won
  
  def initialize(name,color)
    @name = name
    @color = color
    @positions = []
    @won = false
  end

  def player_positions(grid)
    @positions = []
    grid.each_with_index do |cell,index|
      if cell.value == @color
        @positions.push(index+1)
      end
    end
    @positions
  end

  def change_cell(grid,cell_number)
    if grid[cell_number-1].changed == false
      grid[cell_number-1].value = @color
      grid[cell_number-1].changed = true
    else
      puts 'This cell has already been changed. Try a different one.'
    end
    player_positions(grid)
  end
  
  

  def won?(win_list)
    win_list.each do |combo| 
      if @positions.include?(combo[0]) && @positions.include?(combo[1]) && @positions.include?(combo[2])
        @won = true
      end
    end
    @won
  end 

end

class Game
  def initialize()
    @grid = []
  end

  WIN_COMBOS = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]]
  
  def make_grid()
    for i in (0..8) 
      @grid[i] = Cell.new(i)
    end
  end
  
  def make_players(name1,name2)
    @p1 = Player.new(name1,"X")
    @p2 = Player.new(name2,"O")
  end

  def play()
    puts "Hello! Welcome to this game of tic-tac-toe. Let's get started!"
    p1_name = prompt("What is your name Player 1? You will be X").chomp
    p2_name = prompt("Thank you #{p1_name}. What is your name Player 2? You will be O").chomp
    make_players(p1_name,p2_name)
    make_grid()
    while @p1.won == false && @p2.won == false
      p1_move = prompt("#{p1_name}, please enter the grid square number to put your symbol").chomp.to_i
      @p1.change_cell(@grid,p1_move)
      @p1.won?(WIN_COMBOS)
      @grid.each do |cell|
        print cell.value
      end
      print "\n"
      if @p1.won == true
        puts "Congrats #{p1_name}!"
      else
        p2_move = prompt("#{p2_name}, please enter the grid square number to put your symbol").chomp.to_i
        @p2.change_cell(@grid,p2_move)
        @p2.won?(WIN_COMBOS)
        @grid.each do |cell|
          print cell.value
        end
        print "\n"
          if @p2.won == true
            puts "Congrats #{p2_name}!"
          end
      end
    end
  end
end

game = Game.new()
game.play()
