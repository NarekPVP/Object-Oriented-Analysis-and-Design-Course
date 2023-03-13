
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


