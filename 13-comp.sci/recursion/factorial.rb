
def factorial_iterative(n)
  result = 1
  while n > 1 # end condition
    result *= n # mutation: change the value of a variable # result = result * n
    n -= 1 # mutation
  end

  result
end

def factorial_recursive(n)
  if n > 1 # Keep going
    n * factorial_recursive(n-1) # Move towards the base case.
  else
    1 # Base case
  end
end

require 'pry'
binding.pry
