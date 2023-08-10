import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

export async function Navbar() {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}
