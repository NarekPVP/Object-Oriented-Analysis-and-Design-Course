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

Know that the class statement creates a class object and assigns it a name. The class statement is an executable statement. Top-level assignments within a class statement generate attributes in a class object. After running a class statement, class attributes are accessed by name qualification: object.name.

It’s important to know that attributes of a class object record state information and behavior to be shared by all instances created from the class.

Calling a class object like a function makes a new instance object. Instance objects created from classes are new namespaces; they start out empty but inherit attributes that live in the class objects from which they were generated. 

Inside a class’s method functions, the first argument (self) references the instance object being processed; assignments to attributes of self create or change data in the instance, not in the class.

Classes and instances are linked namespace objects in a class tree that is searched by inheritance. 

```
class Test:
    attr1 = 12
    attr2 = 'hello'

    def access(self):
        print(self.attr1)
        self.attr1 += 1

test = Test()
test.access()

test2 = Test()
test.access()


class Test:
    attr2 = 15
    def __init__(self):
        self.attr1 = 11

    def print_it(self):
        print(self.attr2)


test = Test()
test.attr2 = 13
print(Test.attr2)
```
