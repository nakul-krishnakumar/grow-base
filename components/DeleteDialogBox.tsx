import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast";
import deleteStartup from "@/lib/deleteStartup";
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react"

export function DeleteButton({startupId, startupTitle} : {startupId: string, startupTitle: string}) {
    const [confirmText, setConfirmText] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const router = useRouter();

    const handleConfirmText = (e : ChangeEvent<HTMLInputElement>) => {
        setConfirmText(e.target.value);
        console.log("TEXT: ", confirmText);
    }

    const handleDeletion = async () => {
        if (confirmText === `I agree to delete ${startupTitle}`) {
            try {
                await deleteStartup(startupId);
                setConfirmText("");
                setIsOpen(false);
                router.push("/");

                toast({
                    title: "Success",
                    description: `Successfully deleted ${startupTitle}`,
                    variant: "destructive",
                });
            } catch {
                toast({
                    title: "Error",
                    description: "Unable to delete startup",
                    variant: "destructive",
                });
            }
        }
    }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild>
            <button className="delete-btn">
                Delete
                <Trash2 className="w-4" />
            </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete &quot;{startupTitle}&quot; Startup?</DialogTitle>
          <DialogDescription>
            This will delete your startup page forever and cannot be restored.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <label htmlFor="confirm" className="text-left leading-none text-sm prose text-red-500">
              Type &quot;I agree to delete {startupTitle}&quot; below :
            </label>
            <Input id="confirm" value={confirmText} className="col-span-3" onChange={(e) => handleConfirmText(e)} />
        </div>
        <DialogFooter>
            <button className="delete-btn" onClick={handleDeletion} disabled={
                confirmText == `I agree to delete ${startupTitle}` ? false : true 
            }>
                Delete
                <Trash2 className="w-4" />
            </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
