import { StartupCardType } from "@/types/StartUpCardType";
import { cn, formatDate } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const StartupCard = ({ post }: { post: StartupCardType }) => {
    const { 
        _createdAt, 
        views, 
        author: {
            _id: authorId, 
            name: authorName, 
            image: authorImage 
        }, _id,
        description, 
        image, 
        category, 
        title,
        isHidden, 
    } = post;

    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(_createdAt.toString())}
                </p>
                {isHidden ? (
                    <div className="flex gap-1.5">
                        <EyeOff className="size-6 text-slate-400" />
                        <span className="test-16-medium">{views}</span>
                    </div>
                ) : (
                    <div className="flex gap-1.5">
                        <EyeIcon className="size-6 text-primary" />
                    <span className="test-16-medium">{views}</span>
                </div>
                )}
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                            {authorName}
                        </p>
                    </Link>
                    
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>

                <Link href={`/user/${authorId}`}>
                    <Image src={ authorImage || "https://placehold.co/48" } alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">
                    {description}
                </p>

                {/* eslint-disable-next-line @next/next/no-img-element */}            
                <img src={image} alt="placeholder" className="startup-card_img" />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`} >
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    );
};

export const StartupCardSkeleton = () => (
    <>
        {[0, 1, 3, 4].map((index: number) => (
            <li key={cn('skeleton', index)}>
                <Skeleton className="startup-card_skeleton"/>
            </li>
        ))}
    </>
)

export default StartupCard;
