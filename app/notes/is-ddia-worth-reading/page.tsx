import Image from "next/image";
import { Note } from "@/components/note/Note";
import ddia from "@/public/imgs/ddia.jpg";

export default function Page() {
    return (
        <Note
            title={
                <span>
                    Is <em>Designing Data-Intensive Applications</em> Worth Reading?
                </span>
            }
            date={"January 22, 2025"}
        >
            <p>
                I recently finished reading <em>Designing Data-Intensive Applications</em> (DDIA) by Martin Kleppmann. It has been a long
                read and I am relieved to have finally read it cover to cover. There has been a lot of viral buzz about this book online. I
                want to share my insights and whether the book is worthwhile.
            </p>
            <div className="w-2/3 relative my-2">
                <Image src={ddia} alt="A picture of a physical copy of DDIA" />
                <div className="w-full text-sm italic mt-1">My physical copy of the book.</div>
            </div>
            <h1 className="mt-2">Summary</h1>
            <h2 className="mt-2 text-lg">Part I: Foundations of Data Systems</h2>
            <p className="mt-2">
                The opening chapters serve as the conceptional foundation of the book, which will be referenced repeatedly in the later
                sections. The first chapter covers the three main themes of the book: reliability, scalability, and maintainability. Each of
                these elements is an important factor to consider when designing any serious application.
            </p>
            <p>The later chapters cover:</p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>Data models and their query languages: SQL, NoSQL, and graph data models.</li>
                <li>Different ways databases store data: SSTables, BTrees, OLTP vs OLAP, row vs column-orientated databases.</li>
                <li>Ways of encoding data and dataflow: JSON, Thrift, Avro. REST vs RPC, message-passing dataflow.</li>
            </ol>
            <h2 className="mt-4">Part II: Distributed Data</h2>
            <p className="mt-2">
                The second part is the crux of DDIA. We start with various methods for replicating and partitioning data. Later,
                transactions and distributed transactions (consensus algorithms) are discussed in detail.
            </p>
            <p>
                Kleppmann makes it clear that in distributed, concurrent settings, everything can go wrong; replication lag, network faults,
                and node outages plague distributed data systems, and guarantees like linearization are expensive.
            </p>
            <p>Key concepts I learned:</p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>
                    Leader vs multi-leader vs leaderless replication. Consistency, eventual consistency, read your own writes, monotonic
                    reads
                </li>
                <li>Partitioning is to evenly distribute a database table into many nodes. Rebalancing algorithms. Request routing</li>
                <li>Transactions, ACID. Isolation levels: read committed, read skew, write skew, snapshot isolation, serialization, SSI</li>
                <li>Network faults, clock skew, and system models</li>
                <li>
                    Linearizable vs serializable, ordering guarantees, total order guarantee, consensus algorithms. Leader replication vs
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
                The book explored batch processing, stream processing, and alternative data flows (as opposed to RESTful applications). The
                common theme is that having idempotent, immutable, self-contained functions is useful for fault tolerance and
                explainability, which is the core insight of the Unix philosophy and MapReduce. Important topics included
            </p>
            <ol className="list-decimal list-inside *:mt-2">
                <li>Hadoop vs MPP, fault tolerance, workflows</li>
                <li>Stream windows, change data capture, event sourcing</li>
                <li>Unbundling databases, end-to-end argument</li>
            </ol>

            <h1 className="mt-8">Takeaways</h1>
            <p className="mt-2">
                Overall, I give this book four stars. The book is well written and Kleppmann is an excellent expounder. I loved that the
                author went over naive approaches that a layman may try and their pitfalls to motivate the definitions and concepts. The
                thinking process of arriving at the grounded algorithms we use today is something that is often overlooked.
            </p>
            <p>
                Even as an undergraduate, I found many topics relatable in the book. For instance, in my internship at Ramp, I had to deal
                schemas, different data models, denormalization, etc. Admittedly, I probably will never need to directly apply knowledge
                like Lamport timestamps or serializable snapshot isolation unless I become a database engineer.
            </p>
            <p className="mb-4">
                Ultimately, I think this book is invaluable for inexperienced programmers because it teaches us how to think critically
                about large systems, how to weigh the pros and cons of different approaches, and be extremely critical and careful in
                distributed settings. Data races are extremely common and it is important for software developers to identify them because
                we can’t always rely on databases to do it for us.
            </p>
        </Note>
    );
}
