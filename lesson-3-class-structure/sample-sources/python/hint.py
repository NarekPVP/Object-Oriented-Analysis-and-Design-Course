class Mlass:
    pass

class Test:
    def what(self):
        print("what")
    def take(self, other: "Test"):
        pass

m = Mlass()
t = Test()
t.take(m)


