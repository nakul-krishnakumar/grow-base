import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { StartupCardType } from "@/types/StartUpCardType";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;
    
    const params = { search: query || null };
    const {data: posts}: {data: StartupCardType[]} = await sanityFetch({ query: STARTUPS_QUERY, params});

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

            <SanityLive />
        </>
    );
}
