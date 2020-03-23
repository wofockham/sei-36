# This is just an example of how easy it is to retrieve content from a URL in Ruby.
# Javascript will take a lot more effort.

require 'httparty'

data = HTTParty.get 'http://numbersapi.com/random/trivia'
puts data.upcase
