class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def meow(self):
        return self.name + " meow"


class SesameCat:
    def bark(self):
        return self.name + " bark"

weirdCat = SesameCat("Zinga", 2)
print(weirdCat.meow())

