class Test:
    attr2 = 15
    def __init__(self):
        self.attr1 = 11

    def print_it(self):
        print(self.attr2)


test = Test()
test.attr2 = 13
print(Test.attr2)


