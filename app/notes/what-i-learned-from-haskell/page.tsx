import { Code } from "@/components/Code";
import { Note } from "@/components/note/Note";
import Latex from "react-latex-next";

export default function Page() {
    return (
        <Note title="What I learned from Haskell" date={"December 21, 2024"}>
            <p>
                In the past month, I have been learning and writing in Haskell. My journey with Haskell began way back in my junior year of
                high school. I began reading the book “Get Programming With Haskell” by Will Kurt. But once I reached Chapter 17, on
                Semigroups and Monoids, I found it too abstract and decided to pause there, perhaps returning in the future... Recently, I
                decided to pick it up again, and I want to reflect on what I’ve learned.
            </p>
            <p>
                Note that this article glosses over important functional programming concepts or syntax. Instead, I chose to focus on the
                ideas that interested me most.
            </p>
            <h2 className="mt-8">Lambda Calculus</h2>
            <p>
                Haskell is largely inspired from ideas in lambda calculus, which is a model of computation equivalent to a Turing machine. A
                lambda function is written like <Latex>$\lambda x.y$</Latex>, where the lambda denotes the declaration of a function, and
                the period separates its parameters from its outputs.
            </p>
            <p className="mt-2">
                I’ll share an example of how lambda calculus shares parallels with Haskell. In lambda calculus, to define functions with
                multiple parameters, we nest lambdas together:
            </p>
            <div className="flex justify-center w-full my-3">
                <Latex>$\lambda x . \lambda y . (x+y) $</Latex>
            </div>

            <p>Now, here is how we write the signature of a function that adds two integers:</p>
            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {"add :: Int -> (Int -> Int)"}
                </Code>{" "}
            </div>

            <p>
                In practice, the parentheses is omitted. As we see, functional programmers see functions with multiple parameters as
                syntactic sugar made by composing many functions with one argument together. Concepts like partial application may seem
                alien on first impression, but natural for someone who has a background in lambda calculus.
            </p>
            <h2 className="mt-8">Types</h2>
            <p>
                The type system in Haskell is one of its most interesting and expressive features. First, Haskell uses algebraic data types
                (ADT) which is extremely expressive. The code snippet below illustrates how a linked list may be defined.
            </p>
            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {"data List a = Nil | Cons a (List a)"}
                </Code>
            </div>
            <p>Here is how you define a binary tree:</p>
            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {"data BinaryTree a = Nil | Node (BinaryTree a) a (BinaryTree a)"}
                </Code>
            </div>
            <p>
                It is elegantly succinct to define recursive data types with ADT. That’s why ADTs are especially useful in programs that
                have complex, recursive structures, such as compilers.
            </p>

            <p>
                Type classes represent another cornerstone of Haskell&apos;s design, offering an elegant approach to polymorphism. They are
                similar to abstract classes in traditional object-oriented languages.
            </p>
            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {`class Eq a where
  (==) :: a -> a -> Bool
`}
                </Code>
            </div>

            <p>
                In this example, any datatype that implements the (==) operator would automatically become an `Eq` type, without the need to
                explicitly declare that it is. In addition, functions can specify constraints that force their parameter to be instances of
                some particular type class.
            </p>

            <h2 className="mt-8">Monads</h2>

            <p>
                Monads are actually a straightforward concept if no category theory is involved. Monads are just a pipeline design pattern.
                The most essential function that Monads define is the bind operator
                {" (>>=)"} which is equivalent to something like `Promise.then` in JavaScript.
            </p>

            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {`readFile "in.txt" >>= print`}
                </Code>
            </div>

            <p>
                `readFile` reads the contents of a file and returns it as a string. However, since IO operations sometimes fail, it instead
                returns a string wrapped in an IO monadic context. With the bind operator, if `readFile` succeeds, the output would be
                printed. If it does not, then an error would be thrown. This pipeline design pattern makes it easier to deal with real-world
                data systems where operations may fail.
            </p>

            <p>Monads provide the abstraction for Haskell to provide syntactic sugar for imperative behavior via `do` statements.</p>

            <h2 className="mt-8">Lazy evaluation</h2>
            <div className="flex justify-center w-full">
                <Code className="mt-2" language="haskell">
                    {"fibs = 0 : 1 : [ a + b | (a, b) <- zip fibs (tail fibs)]"}
                </Code>
            </div>

            <p>
                Perhaps Haskell&apos;s most distinctive feature is its lazy evaluation. The code above defines the Fibonacci sequence.
                Notice that `fibs` uses itself in the definition. This is only possible because of lazy evaluation. Second, the list is
                infinite. No computation is done unless there is an operation that forces evaluation, such as indexing.
            </p>

            <h2 className="mt-8">Practicality</h2>
            <p>
                Although Haskell was an amazing language that expanded my horizons, I was forced to question its practicality when using it.
                The benefits of Haskell are that functions can be easily reused and composed because of partial application.
            </p>
            <p>
                Haskell programs are divided into two layers. The outer layer, which contains network requests, user inputs, and IO
                requests, is unpredictable and error-prone, and requires error handling. The inner layer is composed of pure functions that
                do not have side effects, and contain code for business logic and data manipulation.
            </p>
            <p>In the real world, however, many aspects of the language make it impractical.</p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>
                    <strong>Complexity</strong>: Despite what Haskellers preach, excessive complexity impedes productivity. A Haskell
                    program encourages separating functions into many composable parts and then recombining them. Although this strategy can
                    occasionally be beneficial, the issue is that Haskell takes this approach to the extreme and can make the codebase
                    difficult to navigate and harder to manage.
                </li>
                <li>
                    <strong>Design</strong>: In practice, business logic naturally gravitates toward imperative patterns, and embracing
                    mutable states can often eliminate convoluted recursive structures. Haskell supports both imperative and mutable
                    variables via monads, but it is unnecessarily complicated compared to a language like Python.
                </li>
                <li>
                    <strong>Efficiency</strong>: Declarative languages are double-edged. It is widely used in query languages because it
                    hides complexity and allows the compiler to optimize commonly used operations. Nevertheless, for a general-purpose
                    language, there are two significant drawbacks. One, users are forced to rely on the compiler can optimize the code.
                    Second, runtime complexity is ambiguous, which is something most software engineers cannot compromise on.
                </li>
                <li>
                    <strong>Debugging</strong>: This was the deal breaker for me. It is too difficult to debug a Haskell program because of
                    the lack of support for a proper error system.
                </li>
            </ol>
            <p className="my-4">
                As much as I loved learning and writing Haskell, I have to admit that its place in the industry is limited due to its
                uncompromising nature for purity. Nonetheless, it has served as an inspiration for many languages we use today and
                solidified its throne in academia.
            </p>
        </Note>
    );
}
