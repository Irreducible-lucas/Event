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
import styles from "@/src/styles";

const AddAttendees = () => {
  const handleSave = () => {
    console.log("Form submitted!");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Check In
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Check In
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="attendees-name">Event Name</Label>
            <Input
              type="text"
              id="event-name"
              name="title"
              placeholder="Enter event name"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event-location">Event Location</Label>
            <Input
              type="text"
              id="attendees-seat"
              name="description"
              placeholder="Enter event location"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="number-attendees">Numbers of Attendances</Label>
            <Input
              type="text"
              id="number-attendees"
              name="description"
              placeholder="Enter numbers of attendees"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="number-attendees">Organiser</Label>
            <Input
              type="text"
              id="event-organizer"
              name="description"
              placeholder="Enter name of organizer"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="Organiser-photo">Organizer Photo</Label>
            <div
              id="organizer-photo"
              className="w-full h-40 rounded-md border-[1px] bg-[#F4F7FC] border-[#D8DDE4] flex items-center justify-center flex-col"
            >
              <p className={`${styles.paragraph4} text-[#849299] mt-1`}>
                Drag Files Here
              </p>
            </div>
            <p className={`${styles.paragraph4} text-xs text-[#1B43C6]`}>
              Max File Size: 5 MB (jpg, pdf, png)
            </p>
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
