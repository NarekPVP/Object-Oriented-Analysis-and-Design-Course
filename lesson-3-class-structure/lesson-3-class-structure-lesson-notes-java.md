# Lesson 3. Class Structure

Have a vocabulary related to classes and their contents: Smalltalk uses the term instance variable, Java uses the term field, and C++ uses the term data member. 

A class defines a new data type. A class is a template for an object, and an object is an instance of a class. 

Know the vocabulary: variables defined within a class are called instance variables because each instance of the class contains its own copy of these variables. Collectively, the methods and variables defined within a class are called members of the class.

```
class Test {
    private int var = 11;

    void setVar(int v) {
        var = v;
    }

    public static void main(String... args) {
        Test t = new Test();
        Test t2 = new Test();
        t.setVar(22);
        System.out.println(t2.var);
    }
}
```

