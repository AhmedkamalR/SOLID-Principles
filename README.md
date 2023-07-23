# SOLID-Principles

The SOLID principles are a set of five design principles that aim to make software systems more maintainable, scalable, and easier to understand. These principles were introduced by Robert C. Martin and are widely used in object-oriented programming

![Screenshot 2023-07-23 113627](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/a4a0d442-cd85-4010-9dcf-c8512cdd1c78)

# 1- S — Single Responsibility Principle (SRP):

![Screenshot 2023-07-23 001635](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/826f63d4-a4d6-4e3d-84fd-316e62a1418a)

- This principle states that a class should have only one reason to change, meaning it should have a single responsibility.
- If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities could affect the other ones without you knowing.
 ## Goal
- This principle aims to separate behaviors so that if bugs arise as a result of your change, it won’t affect other unrelated behaviors.

# O — Open-Closed Principle (OCP):
![Screenshot 2023-07-23 001650](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/3d5c1cc4-785c-4343-b6ce-6c5c6bebaf9e)

- This principle states that entities (classes, modules, functions) should be open for extension but closed for modification. It means you should be able to extend their behavior without modifying the 
  existing code.
- Changing the current behavior of a Class will affect all the systems using that Class.
- If you want the Class to perform more functions, the ideal approach is to add to the functions that already exist NOT change them.
## Goal
- This principle aims to extend a Class’s behavior without changing the existing behavior of that Class. This is to avoid causing bugs wherever the Class is being used.

# L — Liskov Substitution Principle (LSP):
![Screenshot 2023-07-23 001707](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/4768161e-b54d-41a6-8e36-beb1a37e8af2)

- This principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.
- When a child Class cannot perform the same actions as its parent Class, this can cause bugs.
- If you have a Class and create another Class from it, it becomes a parent and the new Class becomes a child. The child Class should be able to do everything the parent Class can do. This process is 
  called Inheritance.
- The child Class should be able to process the same requests and deliver the same result as the parent Class or it could deliver a result that is of the same type.
- The picture shows that the parent Class delivers Coffee(it could be any type of coffee). It is acceptable for the child Class to deliver Cappucino because it is a specific type of Coffee, but it is 
  NOT acceptable to deliver Water.
- If the child Class doesn’t meet these requirements, it means the child Class is changed completely and violates this principle.
 ## Goal
- This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any errors.
#  I — Interface Segregation Principle (ISP):
![Screenshot 2023-07-23 004809](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/6cdbd19c-b858-4cd5-85c6-3f0e93c8e066)

- This principle states that a class should not be forced to implement interfaces it does not use. In other words, classes should have specific interfaces tailored to their needs.
- When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions.
- A Class should perform only actions that are needed to fulfill its role. Any other action should be removed completely or moved somewhere else if it might be used by another Class in the future.
## Goal
- This principle aims at splitting a set of actions into smaller sets so that a Class executes ONLY the set of actions it requires.

# D — Dependency inversion principle (DIP):
![Screenshot 2023-07-23 005113](https://github.com/AhmedkamalR/SOLID-Principles/assets/87860547/191238eb-ffa0-4e8a-8f22-46d180b70632)

- This principle states that high-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on 
  abstractions.
- High-level Module(or Class): Class that executes an action with a tool.
- Low-level Module (or Class): The tool that is needed to execute the action
- Abstraction: Represents an interface that connects the two Classes.
- Details: How the tool works
- This principle says a Class should not be fused with the tool it uses to execute an action. Rather, it should be fused to the interface that will allow the tool to connect to the Class.
- It also says that both the Class and the interface should not know how the tool works. However, the tool needs to meet the specification of the interface.
## Goal
- This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.

# Summary
- These five principles and highlighted their goals. They are to help you make your code easy to adjust, extend and test with little to no problems.
- The broad goal of the SOLID principles is to reduce dependencies so that engineers change one area of software without impacting others.
  Additionally, they’re intended to make designs easier to understand, maintain, and extend.
  Ultimately, using these design principles makes it easier for software engineers to avoid issues and to build adaptive, effective, and agile software.

- While the principles come with many benefits, following the principles generally leads to writing longer and more complex code.
  This means that it can extend the design process and make development a little more difficult.
  However, this extra time and effort is well worth it because it makes software so much easier to maintain, test, and extend.
  Following these principles is not a cure-all and won’t avoid design issues.
  That said, the principles have become popular because when followed correctly, they lead to better code for readability, maintainability, design patterns, and testability.
  In the current environment, all developers should know and utilize these principles.











