import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/dialog";
import { plus } from "@/src/assets";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

const AddAttendees = () => {
  const handleSave = () => {
    console.log("Form submitted!");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Attendees
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Attendees
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="attendees-name">Attendees Name</Label>
            <Input
              type="text"
              id="attendees-name"
              name="title"
              placeholder="Enter attendees name"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="attendees-seat">Seat</Label>
            <Input
              type="text"
              id="attendees-seat"
              name="description"
              placeholder="Enter attendees seat"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="ticket-select"
              className="font-medium text-gray-700"
            >
              E-ticket:
            </label>
            <select
              id="ticket-select"
              name="timezone"
              defaultValue=""
              className="w-full px-3 py-2 border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select ticket status
              </option>
              <option value="successful">Successful</option>
              <option value="unsuccessful">Unsuccessful</option>
            </select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="ticket-select"
              className="font-medium text-gray-700"
            >
              Payment:
            </label>
            <select
              id="ticket-select"
              name="timezone"
              defaultValue=""
              className="w-full px-3 py-2 border-[1px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select payment status
              </option>
              <option value="successful">Successful</option>
              <option value="successful">Pending</option>
              <option value="unsuccessful">Unsuccessful</option>
            </select>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border-secondary text-secondary"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            className="bg-secondary hover:bg-blue-600 text-white w-full mb-2"
            onClick={handleSave}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAttendees;
