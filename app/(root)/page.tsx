import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export interface StartupCardType {
    _createdAt: Date,
    views: number,
    author: {
        _id: number,
        name: string
    }
    _id: number,
    description: string,
    image: string,
    category: string,
    title: string
}

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const posts: StartupCardType[] = [
        {
            _createdAt : new Date(),
            views: 55,
            author: { _id : 1, name: "Nakul"},
            _id: 1,
            description: "This is a description",
            image: "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Robots",
            title: "We Robots",
        }
    ]
    return (
        <>
            <section className="green_container">
                <h1 className="heading">
                    <span>Nurturing the Next Big Thing.</span>
                    <br />
                    <span> Directory for emerging startups.</span>
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Share Your Vision, Gather Votes, and Make an Impact Online.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    { query ? `Search results for "${query}"` : 'All startups'}
                </p>

                <ul className="mt-7 card_grid">
                    { posts?.length > 0 ? (
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post._id} post={post}/>
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
