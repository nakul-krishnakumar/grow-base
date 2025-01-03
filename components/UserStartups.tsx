import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { StartupCardType } from "@/types/StartUpCardType";
import StartupCard from "./StartupCard";
import { auth } from "@/auth";

const UserStartups = async ({ id }: { id: string }) => {
    const session = await auth();

    const startups: StartupCardType[] = await client.fetch(
        STARTUPS_BY_AUTHOR_QUERY,
        { _id: id }
    );

    const publicStartups = startups.filter((startup) => startup.isHidden == false);
    console.log(publicStartups);
    return (
        <>  
            {session?.id == id ? 
                (startups.length > 0 ? (
                    startups.map((startup) => (
                        <StartupCard key={startup._id} post={startup} />
                    ))
                ) : (
                    <p className="no-result">No startups published yet</p>
                )) :                (publicStartups.length > 0 ? (
                    publicStartups.map((startup) => (
                        <StartupCard key={startup._id} post={startup} />
                    ))
                ) : (
                    <p className="no-result">No startups published yet</p>
                ))
            }
        </>
    );
};

export default UserStartups;
