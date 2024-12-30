import { auth, signOut, signIn } from "@/auth";
import { LogOut, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
   const session = await auth();
   
   console.log(session)
   return (
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
         <div className="flex items-center gap-8">
            <Link href="/" className=" hover:text-primary font-medium">
               <div className="flex items-center gap-8">
                  <Image src="/logo.png" alt="logo" width={140} height={30}/>
                  <div>Home</div>
               </div>
            </Link>
            {session && session?.user &&
            <Link href="/startup/create" className="hover:text-primary font-medium">
               <span className="max-sm:hidden">Create</span>
               <SquarePen className="size-6 sm:hidden text-green-500"/>
            </Link>}
         </div>
         <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
               <>
                  <form action={async () => {
                     "use server";
                     await signOut( { redirectTo: "/"});
                  }}>
                     <button type="submit">
                        <span className="max-sm:hidden hover:text-primary font-medium">Log Out</span>
                        <LogOut className="size-6 sm:hidden text-green-500 self-center"/>
                     </button>
                  </form>
                  <Link href={`/user/${session?.id}`}>
                     <span className="max-sm:hidden">{session?.user?.name}</span>
                  </Link>
                  <Link href={`/user/${session?.id}`}>
                     {/* eslint-disable-next-line @next/next/no-img-element */}  
                     <img src={session?.user?.image || " "} width={"48px"} height={"48px"} className="profile_image hover:border-primary" alt="profile image"></img>
                  </Link>
               </>
            ) : (
               <>
                  <form action={async () => {
                     "use server";
                     await signIn('github');
                  }}>
                     <button type="submit">
                        <span>Log In</span>
                     </button>
                  </form>
               </>
            )}
         </div>
      </nav>
      </header>
   )
}

export default Navbar;