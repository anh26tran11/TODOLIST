import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function TodoDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg p-6 sm:max-w-lg border-4 border-black shadow-[6px_6px_0px_#000] bg-pink-200 animate-in fade-in-0 zoom-in-95 duration-200">
        <DialogHeader className="flex flex-col gap-2 text-center sm:text-left">
          <DialogTitle className="text-2xl font-bold">Add New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Input
              id="name-1"
              name="name"
              placeholder="Enter task title..."
              className=" flex h-9 w-full rounded-md bg-white px-3 py-1 text-base shadow-sm transition-shadow outline-none border-3 border-black placeholder:text-gray-500 focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <DialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:opacity-50 h-9 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_#000] bg-green-300 text-black font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] transition-all duration-200 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_#000]"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
