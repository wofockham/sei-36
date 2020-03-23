class Bank
  attr_reader :name, :accounts
  def initialize(n)
    @name = n
    @accounts = {}
  end

  def create_account(name, starting_balance)
    @accounts[name] = starting_balance
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end

  def withdraw(name, amount)
    @accounts[name] -= amount unless amount > @accounts[name]
  end

  def balance(name)
    @accounts[name] # implicit return
  end
end
