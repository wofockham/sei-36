
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

# Memoisation
def fib_memo(n)
  @fib ||= {} # @fib = @fib || {}

  if @fib[n]
    @fib[n]
  elsif n == 1 || n == 2
    1
  else
    result = fib_memo(n-1) + fib_memo(n-2)
    @fib[n] = result
    result
  end
end

# Iterative recursion
def fib_iter(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib_iter(n-1, b, a+b)
  end
end

require 'pry'
binding.pry
