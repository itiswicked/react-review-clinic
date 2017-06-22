class Parent
  def initialize(arg)
    @arg = arg
  end
end


class Child < Parent
  def initialize(arg, arg2)
    super(arg)
    @arg2 = arg2
  end
end


child = Child.new("arg", "arg2")
