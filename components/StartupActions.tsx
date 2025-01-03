"use client";

import { toast } from "@/hooks/use-toast";
import toggleVisibility from "@/lib/toggleVisibility";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DeleteButton } from "./DeleteDialogBox";

interface StartupActionsProps {
    postId: string,
    isHidden: boolean,
    postTitle: string,
}

const StartupActions = ({ postId, isHidden: initialIsHidden, postTitle }: StartupActionsProps) => {
    const router = useRouter();
    const [isHidden, setIsHidden] = useState(initialIsHidden);

    const handleHidden = async (flag: boolean) => {
        const result = await toggleVisibility(postId, flag);
        if (result.success) {
            router.refresh();

            setIsHidden(flag);
            toast({
                title: "Succes",
                description: flag
                    ? "Successfully Hide Startup"
                    : "Successfully Published Startup",
                variant: "destructive",
            });
        } else {
            toast({
                title: "Error",
                description: "Unable to toggle visibility",
                variant: "destructive",
            });
        }
    };

    return (
        <>
            <div className="flex justify-end gap-2">
                <DeleteButton startupId={postId} startupTitle={postTitle} />
                {isHidden ? (
                    <button
                        className="show-btn"
                        onClick={() => handleHidden(false)}
                    >
                        Show
                        <Eye className="w-4" />
                    </button>
                ) : (
                    <button className="hide-btn" onClick={() => handleHidden(true)}>
                        Hide
                        <EyeOff className="w-4" />
                    </button>
                )}
            </div>
        </>
    );
};

export default StartupActions;
