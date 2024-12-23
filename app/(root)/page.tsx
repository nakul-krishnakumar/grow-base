import SearchForm from "../../components/SearchForm";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;
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
        </>
    );
}
