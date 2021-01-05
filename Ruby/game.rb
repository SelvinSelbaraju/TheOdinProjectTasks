# Load in YAML Module
require 'yaml'

# Takes a random word from the list that has a length between min length and max length
def generate_random_word(list, min_length, max_length)
  word_made = false
  while word_made == false 
    random_word = list[(rand() * list.length).floor()]
    word_made = true if random_word.length >= min_length && random_word.length <= max_length
  end
  random_word
end

# Define a prompt function that that puts a prompt before assinging user input to a variable
def request_input(prompt)
  puts prompt
  gets.chomp.strip.downcase
end

# Game Class
class Game
  attr_accessor :display_word, :save_name

  # Initialise the game class using 
  def initialize(word_list, min_word_length, max_word_length, guess_limit)
    @word_list = word_list
    @min_word_length = min_word_length
    @max_word_length = max_word_length
    @game_word = generate_random_word(@word_list, @min_word_length, @max_word_length).split("")
    @guess_limit = guess_limit
    @guess_count = 0
    @player_correct_letters = []
    @player_incorrect_letters = []
    @display_word = generate_hangman_style('_ ', @game_word.length)
    @game_won = false
  end

  # Generates a string in the style of hangman (letter space letter etc)
  def generate_hangman_style(style, no_iterations)
    result = ''
    no_iterations.times { result += style}
    result.delete_suffix!(' ')
  end

  def show_game_info
    puts "#{@display_word} Incorrect Guesses: #{@guess_count}"
    puts "Incorrect Letters: #{@player_incorrect_letters.sort}"
  end

  # What to do if the player guesses incorrectly
  def incorrect_letter(guess_letter)
    puts 'Sorry, that letter is incorrect!'
    @guess_count += 1
    @player_incorrect_letters.push(guess_letter)
  end

  # What to do if the player guesses correctly
  def correct_letter(guess_letter) 
    puts 'That letter is correct!'
    @game_word.each_with_index do |letter, index|
      if letter == guess_letter
        @display_word[index * 2] = letter
        @player_correct_letters.push(guess_letter)
      end
    end
  end

  # If the player submits a valid guess, add to the display and handle whether correct/ incorrect
  def update_guess(guess_letter)
    @game_word.include?(guess_letter) == false ? incorrect_letter(guess_letter) : correct_letter(guess_letter)
    show_game_info
  end

  # Asks the player for a guess and decides whether it is valid or not 
  def player_guess
    guess = request_input('Please enter a guess')
    if guess == 'save'
      user_save
    elsif guess.length > 1
      puts 'Please enter a single letter that you have not previously guessed.'
    elsif guess.match?(/[[:alpha:]]/) == false || @player_correct_letters.include?(guess) || @player_incorrect_letters.include?(guess) 
      puts 'Please enter a letter that you have not previously guessed'
    else
      update_guess(guess)
    end
  end

  # What to do when the player wins the game
  def player_wins
    @game_won = true
    puts 'You Win!'
  end

  # Starts a game object
  def play_game
    show_game_info
    while @game_won == false && @guess_count < @guess_limit
      player_guess
      if @display_word.split(' ') == @game_word
        player_wins
      elsif @guess_count >= @guess_limit
        puts "You have run out of guesses. You lose! The word was #{@game_word.join()}"
        break
      end
    end
  end

  # Saves the game
  def save_game(save_name)
    game_yaml = YAML.dump(self)
    save = File.new(save_name,'w')
    save.write(game_yaml)
  end

  # Asks the user for a save file name and then saves it 
  def user_save
    @save_name = request_input('Please enter your save file name. If it already exists, it will be overwritten')
    @save_name = "#{save_name}.yaml"
    save_game(@save_name)
  end
end

# A function that handles whether the user wants to load or save at the start of the game
def game_type
  valid_response = false
  response_list = ['yes', 'no']
  response = request_input('Would you like to start a new game? Type yes or no.')
  while valid_response == false
    response_list.include?(response) ? (valid_response = true) : (response = request_input('Please enter a valid response'))
  end
  response
end

# Loads a YAML save file
def load_save
  loaded = false
  while loaded == false
    save_name = request_input('Please enter a valid save file name:')
    begin 
      saved_game = YAML.load_file("#{save_name}.yaml")
    rescue
      puts 'Invalid save!'
    else
      loaded = true
      saved_game.play_game
    end
  end
end

# Function to start the game
def start_program(words, min_length, max_length, max_guesses)
  response = game_type
  if response == 'yes'
    Game.new(words, min_length, max_length, max_guesses).play_game
  else
    load_save
  end
end

# Load the words in and remove the whitespace on each line and make it all lowercase
words_file = File.open('5desk.txt','r').readlines
words = words_file.map { |line| line.split(' ')[0].downcase }

# Game parameters
min_length = 5
max_length = 8
max_guesses = 10

start_program(words, min_length, max_length, max_guesses)
