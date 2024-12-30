import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { StartupCardType } from "@/types/StartUpCardType";
import StartupCard from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
    const startups: StartupCardType[] = await client.fetch(
        STARTUPS_BY_AUTHOR_QUERY,
        { _id: id }
    );

    return (
        <>
            {startups.length > 0 ? (
                startups.map((startup) => (
                    <StartupCard key={startup._id} post={startup} />
                ))
            ) : (
                <p className="no-result">No startups published yet</p>
            )}
        </>
    );
};

export default UserStartups;
