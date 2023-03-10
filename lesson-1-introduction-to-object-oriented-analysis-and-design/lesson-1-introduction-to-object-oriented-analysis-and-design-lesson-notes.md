# Lesson 1. Introduction to Object-Oriented Analysis and Design

Knowing about different paradigms in software development, including but not limited to procedural, functional, and object-oriented programming paradigms.
Understanding that software is inherently complex; the complexity of software systems often exceeds the human intellectual capacity.
Committing to the idea that the task of the software development team is to engineer the illusion of simplicity.
Understanding the basics of hierarchy, as complexity often takes the form of a hierarchy; it is useful to model both the “is a” and the “part of“ hierarchies of a complex system.
Knowing that complex systems usually evolve from stable intermediate forms.
Addressing fundamental limiting factors of human cognition is usually done through the use of decomposition, abstraction, and hierarchy.
In object-oriented decomposition, we view the world as a meaningful collection of objects that collaborate to achieve some higher-level behavior.
Having a basic understanding of object-oriented analysis and design as the method that leads us to an object-oriented decomposition; object-oriented design uses a notation and process for constructing complex software systems and offers a rich set of models with which we may reason about different aspects of the system under consideration.
Knowing that the object model encompasses the principles of abstraction, encapsulation, modularity, hierarchy, typing, concurrency, and persistence.
Knowing that object-oriented programming is a method of implementation in which programs are organized as cooperative collections of objects, each of which represents an instance of some class, and whose classes are all members of a hierarchy of classes united via inheritance relationships.
Knowing how to identify a language that could be called an object-oriented language. It must satisfy the following:
It supports objects that are data abstractions with an interface of named operations and a hidden local state.
Objects have an associated type [class].
Types [classes] may inherit attributes from supertypes [superclasses].
For a language to support inheritance means that it is possible to express “is a” relationships among types, for example, a red rose is a kind of flower, and a flower is a kind of plant. If a language does not provide direct support for inheritance, then it is not object-oriented.
Knowing that object-oriented design is a method of design encompassing the process of object-oriented decomposition and a notation for depicting both logical and physical as well as static and dynamic models of the system under design. There are two important parts to this definition: object-oriented design (1) leads to an object-oriented decomposition and (2) uses different notations to express different models of the logical (class and object structure) and physical (module and process architecture) design of a system, in addition to the static and dynamic aspects of the system.
Knowing that object-oriented analysis is a method of analysis that examines requirements from the perspective of the classes and objects found in the vocabulary of the problem domain.
There are four major elements of the conceptual framework of the object model: abstraction, encapsulation, modularity, and hierarchy. A model without any of these elements is not object-oriented. There are three minor elements of the object model: typing, concurrency, and persistence. Each of these elements is a useful, but not essential, part of the object model.
Define abstraction: an abstraction denotes the essential characteristics of an object that distinguishes it from all other kinds of objects and thus provides crisply defined conceptual boundaries, relative to the perspective of the viewer.
Essential to understand that an abstraction focuses on the outside view of an object and so serves to separate an object’s essential behavior from its implementation.
Understanding that deciding on the right set of abstractions for a given domain is the central problem in object-oriented design. From the most to the least useful, these kinds of abstractions include the following:
Entity abstraction: an object that represents a useful model of a problem domain or solution domain entity.
Action abstraction: an object that provides a generalized set of operations, all of which perform the same kind of function.
Virtual machine abstraction: an object that groups operations that are all used by some superior level of control, or operations that all use some junior-level set of operations.
Coincidental abstraction: an object that packages a set of operations that have no relation to each other.
Define the client as any object that uses the resources of another object (known as the server), so we can characterize the behavior of an object by considering the services that it provides to other objects, as well as the operations that it may perform on other objects. This view forces us to concentrate on the outside view of an object and leads us to the contract model of programming: the outside view of each object defines a contract on which other objects may depend, and which in turn must be carried out by the inside view of the object itself (often in collaboration with other objects). 
We call the entire set of operations that a client may perform on an object, together with the legal orderings in which they may be invoked, its protocol.
Not mandatory to know about invariance. The invariant is some boolean condition whose truth must be preserved. For each operation associated with an object, we may define preconditions (invariants assumed by the operation) as well as postconditions (invariants satisfied by the operation). However, it’s essential to know that violating an invariant breaks the contract associated with an abstraction. 
Define encapsulation: Encapsulation is the process of compartmentalizing the elements of an abstraction that constitute its structure and behavior; encapsulation serves to separate the contractual interface of an abstraction and its implementation.
Define modularity: Modularity is the property of a system that has been decomposed into a set of cohesive coupled modules.
Define hierarchy: Hierarchy is a ranking or ordering of abstractions.
Define typing: Typing is the enforcement of the class of an object, such that objects of different types may not be interchanged, or at the most, they may be interchanged only in very restricted ways.
Make sure to differentiate between strong and weak typing vs static and dynamic typing. Strong and weak typing refers to type consistency, whereas static and dynamic typing refers to the time when names are bound to types. 
Make sure to differentiate between static and dynamic typing. Static typing (also known as static binding or early binding) means that the types of all variables and expressions are fixed at the time of compilation; dynamic typing (also known as late binding) means that the types of all variables and expressions are not known until runtime.
Define concurrency: Concurrency is the property that distinguishes an active object from one that is not active.
Make sure to describe what an active object is. Each object (drawn from an abstraction of the real world) may represent a separate thread of control (a process abstraction). Such objects are called active. 
Define persistence: Persistence is the property of an object through which its existence transcends time (i.e., the object continues to exist after its creator ceases to exist) and/or space (i.e. the object’s location moves from the address space in which it was created).
