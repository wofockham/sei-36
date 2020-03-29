
def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a+b # Parallel assignment: atomic
    n -= 1 # Mutation
  end

  b # nth fibonacci number
end

# Hellishly slow
def fibonacci_recursive(n)
  if n == 1 || n == 2
    1 # base case
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# TODO: Rewrite the recursive version to be faster:
# 1. Memoisation
# 2. Iterative recursion

require 'pry'
binding.pry
