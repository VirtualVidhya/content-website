---
title: "Introduction to Programming Languages" 
draft: false
weight: 1
---

---

Modern computers are incredibly fast, and getting faster all the time. However, computers also have some significant constraints: they only natively understand a limited set of instructions, and must be told exactly what to do.

A computer program (also commonly called an application) is a set of instructions that a computer can follow to perform some task. Programs are written using a programming language, which is a language designed to facilitate the writing of instructions for computers.

The process of writing programs using a programming language is called programming. Programmers typically write programs by creating source code (more often just called code), which is one or more text files containing instructions written in a programming language.

When a computer is told to process the instructions in a particular program, we say the computer is running or executing the program. Programs are physically executed on the computer’s hardware (the physical components that make up a computer).

Notable hardware found on a typical computing device includes:

- Interactive devices (e.g. a monitor, touch screen, keyboard, or mouse), which allow a person to interact with a computer.
- Storage devices (e.g. a hard drive, SSD, or flash memory), which store information even when the computer is turned off.
- Memory, where computer programs are loaded prior to execution.
- A CPU (central processing unit, often called the “brain” of the computer), which actually executes the instructions.

In modern computing, programs often interact with more than just hardware -- they also interact with other software on the system (particularly the operating system). The term platform refers to a compatible set of hardware (CPU) and software (OS, browser, etc…) that provides an environment for software applications to run. For example, the term “PC” is used colloquially to mean the platform consisting of a Windows OS running on an x86-family CPU.

### Machine Language

A computer’s CPU is incapable of understanding C++. Instead, CPUs are only capable of processing instructions written in machine language (or machine code). The set of all possible machine language instructions that a given CPU can understand is called an instruction set.

Here is a sample machine language instruction: 10110000 01100001.

Each instruction is interpreted by the CPU into a command to do a very specific job, such as “compare these two numbers”, or “copy this number into that memory location”. Back when computers were first invented, programmers had to write programs directly in machine language, which was a very difficult and time-consuming thing to do.

How these instructions are organized and interpreted is beyond the scope of this tutorial series, but it is worth noting two things.

First, each instruction is composed of a sequence of 1s and 0s. Each individual 0 or 1 is called a binary digit, or bit for short. The number of bits in a machine language instruction varies -- for example, some CPUs process instructions that are always 32 bits long, whereas some other CPUs (such as those from the x86 family, which you may be using) have instructions that can be a variable length.

Second, each family of compatible CPUs (e.g. x86, Arm64) has its own machine language, and this machine language is not compatible with the machine language of other CPU families. This means machine language programs written for one CPU family cannot be run on CPUs from a different family!

### Assembly Language

Because machine language is so hard for humans to read and understand, assembly language was invented. In an assembly language, each instruction is identified by a short abbreviation (rather than a set of bits), and names and other numbers can be used.

Here is the same instruction as above in x86 assembly language: mov al, 061h.

This makes assembly much easier to read and write than machine language. Programs written in assembly languages tend to be very fast, and assembly is still used today when speed is critical.

However, since CPUs can only speak machine language, assembly programs must be translated into machine language before they can be executed by the computer. This is done by using a program called an assembler, which takes an assembly program as input, and outputs a machine language program that can be run.

Assembly and machine language essentially have the same downsides.

- Assembly programs are hard to understand. While individual assembly instructions are understandable, it can be hard to deduce what a section of assembly code is actually doing. And since assembly programs require many instructions to do even simple tasks, they tend to be quite long.
- Assembly programs are not portable. Each CPU family has its own assembly language, which is designed to be assembled into machine language for that same CPU family. A program written in assembly language cannot be easily assembled to machine language for a different CPU family.

### High-Level Languages

To address the comprehension and portability concerns of machine language and assembly, new programming languages such as C, C++, Pascal (and later, languages such as Java, Javascript, and Perl) were developed. These languages are called high level languages.

Here is the same instruction as above in C/C++: a = 97;.

Much like assembly language programs, programs written in high level languages must be translated into machine language a format the computer can understand before they can be run. There are two primary ways this is done: compiling and interpreting.

C++ programs are usually compiled. A compiler is a program (or collection of programs) that reads source code (typically written in a high-level language) and translates it into some other language (typically a low-level language, such as machine language or assembly (which can then be assembled into machine language)). These machine language files are typically then combined into an executable file (containing machine language instructions) that can be run or distributed to others. Notably, running the executable file does not require the compiler to be installed.

In the beginning, compilers were primitive and produced slow, unoptimized assembly or machine code. However, over the years, compilers have become very good at producing fast, optimized code, and in some cases can do a better job than humans can in assembly language!

Here is a simplified representation of the compiling process:

![Compiler](../../../../images/notes/C++/IntroProgramming/1.png)

Alternatively, an interpreter is a program that directly executes the instructions in the source code without requiring them to be compiled into an executable first. Interpreters tend to be more flexible than compilers, but are less efficient when running programs because the interpreting process needs to be done every time the program is run. This also means the interpreter must be installed on every machine where an interpreted program will be run.

Here is a simplified representation of the interpretation process:

![Interpreter](../../../../images/notes/C++/IntroProgramming/2.png)

Most languages can be either compiled or interpreted. Traditionally high-level languages like C, C++, and Pascal are compiled, whereas “scripting” languages like Perl and Javascript tend to be interpreted. Some languages, like Java, use a mix of the two. We’ll explore C++ compilers in more detail shortly.

High level languages have many desirable properties:

- High level languages are much easier to read and write because the instructions are closer to natural language that we use every day. This also makes them easier to learn.
- High level languages require fewer instructions to perform the same task as a lower level languages. In C++ you can do something like a = b * 2 + 5; in one line. In assembly language, this would take 5 or 6 different instructions. This makes programs written using high-level languages more concise and understandable.
- High level languages tend to be designed with portability in mind. If we’re careful, we can write a single program and then compile it so it can be run on many different platforms. A cross-platform program that one that is designed to be run on more than one platform.

![High-Level Language program execution](../../../../images/notes/C++/IntroProgramming/3.png)