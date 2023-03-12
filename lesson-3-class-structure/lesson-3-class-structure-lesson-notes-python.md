# Lesson 3. Class Structure

Remember that everything in Python is an object. Writing literal values like “Hello, world!” or 42, we’re actually creating instances of built-in classes. Use the type() function to define the class of the objects.

Make sure to use None as the type hin for return value for functions that do not return any value.

Know how to declare an empty class: use pass, ellipsis, or any literal value

```
class Test:
  pass
  
and the following are similar
 
class Test:
  ...
  
```

```
a = Test()
b = Test()

a is b #always False
```

Leveraging self:

```
class Point:
  def reset(self):
    self.x = 0
    self.y = 0
    
p = Point()
p.reset()
print(p.x, p.y)
```

Make sure to know about the difference between methods and regular functions: methods take one required argument, conventionally named self.

Python has a constructor and an initializer. The constructor method, __new__(), is rarely used unless you’re doing something exotic. The initializer method is called __init__().

Know how to use the __init__ with several arguments.

Identify error codes and differentiate between AttributeError, SyntaxError, and TypeError.

