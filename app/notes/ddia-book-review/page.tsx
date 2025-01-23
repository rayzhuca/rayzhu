import { Code } from "@/components/Code";
import { Note } from "@/components/note/Note";
import Latex from "react-latex-next";

export default function Page() {
    return (
        <Note title="What I learned from Designing Data-Intensive Applications" date={"January 22, 2025"}>
            <p>
                I recently finished reading <em>Designing Data-Intensive Applications</em> (DDIA) by Martin Kleppmann and wanted to share my
                opinions on what I learned and which aspects apply to me.
            </p>
            <h1 className="mt-2">Summary</h1>
            <h2 className="mt-2 text-lg">Part I: Foundations of Data Systems</h2>
            <p className="mt-2">
                This first part of the book sets up important background that will be referenced continuously in the later sections. The
                first chapter covers the three main themes of the book: reliability, scalability, and maintainability. Each of these
                elements is an important factor to consider when designing any serious application.
            </p>
            <p>The later chapters cover:</p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>Data models and their query languages: SQL, NoSQL, and Graph data models.</li>
                <li>Different ways databases store data: SSTables, BTrees, OLTP vs OLAP, row vs column-orientated databases.</li>
                <li>Ways of encoding data and dataflow: JSON, Thrift, Avro. REST vs RPC, message-passing dataflow.</li>
            </ol>
            <h2 className="mt-4">Part II: Distributed Data</h2>
            <p className="mt-2">
                The second part is the crux of DDIA. We start with different ways of replicating and partitioning data. Later, transactions
                and distributed transactions (consensus algorithms) are discussed in detail.
            </p>
            <p>
                Kleppmann makes it clear that in distributed, concurrent settings, everything could go wrong; replication lag, network
                faults, and node outages plague distributed data systems, and guarantees like linearization are expensive.
            </p>
            <p>Key concepts I learned:</p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>
                    Leader vs multi-leader vs leaderless replication. Consistency, eventual consistency, read your own writes, monotonic
                    reads.
                </li>
                <li>Partitioning is to evenly distribute a database table into many nodes. Rebalancing algorithms. Request routing</li>
                <li>Transactions, ACID. Isolation levels: read committed, read skew, write skew, snapshot isolation, serialization, SSI</li>
                <li>Network faults, clock skew, and system models.</li>
                <li>
                    Linearizable vs serializable, ordering guarantees, total order guarantee, consensus algorithm. Leader replication vs
                    Lamport timestamp vs 2PC
                </li>
            </ol>

            <h2 className="mt-4">Part III: Derived Data</h2>
            <p className="mt-2">
                The last section is about data integration, i.e. how to integrate data from different systems together. In complex systems,
                there is a source of truth like the main database, and other derived data systems like recommendation systems, search
                indices, or caches depend on those records.
            </p>
            <p>
                The book explored batch processing, streaming processing, and alternative data flows (as opposed to RESTful applications).
                The common theme is that having idempotent, immutable, self-contained functions is useful for fault tolerance and
                explainability, which is the core insight of the Unix philosophy and MapReduce. Some over-important topics included
            </p>
            <p>
                The other important topics are: Hadoop vs MPP, workflows, stream windows, change data capture, event sourcing, unbundling
                databases, end-to-end argument
            </p>

            <h1 className="mt-8">Takeaways</h1>
            <p className="mt-2">
                The book is well written. What I enjoyed is that the author also goes over naive approaches that a layman may try and their
                pitfalls to motivate the standard approach. The thinking process of arriving at the grounded algorithms we use today is
                something that is often overlooked. I love that the book tries to develop this.
            </p>
            <p>
                Even as somebody who is still an undergraduate, I found many topics relatable in the book. For example, in my internship at
                Ramp, I had to consider schemas, different data models, denormalization, etc. But admittedly, I probably will never need to
                directly apply knowledge like Lamport timestamps or serializable snapshot isolation unless I become a database engineer.
            </p>
            <p className="mb-4">
                Ultimately, I think this book is invaluable for inexperienced programmers because it teaches us how to think critically
                about large systems, how to weigh in the pros and cons of different approaches, and be extremely critical and careful in
                distributed settings. Data races are extremely common and it is important for software developers to identify them because
                we can’t always rely on databases to do it for us.
            </p>
        </Note>
    );
}
