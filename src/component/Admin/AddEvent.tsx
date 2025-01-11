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
import { timeZones } from "@/src/constant";

const AddEvent = () => {
  const handleSave = () => {
    console.log("Form submitted!");
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center bg-[#1B43C6] py-3 px-7 gap-5 rounded-md">
        <img src={plus} className="w-6 h-6" />
        <p className="text-xs font-semibold font-nunito text-white">
          Add Events
        </p>
      </DialogTrigger>

      <DialogContent className="overflow-y-auto w-full h-full">
        <DialogHeader>
          <DialogTitle className="text-center font-nunito text-lg font-semibold">
            Add Event
          </DialogTitle>
          <DialogDescription className="text-center">
            All fields are required unless otherwise indicated.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 my-2">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event-name">Event Name</Label>
            <Input
              type="text"
              id="event-name"
              name="title"
              placeholder="Enter the event name "
            />
          </div>
          <div className="grid grid-cols-2  w-full items-center gap-5">
            <div>
              <Label htmlFor="start-date">Start Date</Label>
              <div
                className={`${styles.paragraph4}  border-[1px] mt-1 p-2 rounded-md  outline-none text-[#849299] flex items-center justify-between `}
              >
                <p>Event start</p>
                <input type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="end-date" className="ml-1">
                End Date
              </Label>
              <div
                className={`${styles.paragraph4}  border-[1px] mt-1 p-2 rounded-md  outline-none text-[#849299] flex items-center justify-between `}
              >
                <p>Event end</p>
                <input type="date" />
              </div>
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <label
              htmlFor="timezone-select"
              className="font-medium text-gray-700"
            >
              Select Time Zone:
            </label>
            <select
              id="timezone-select"
              name="timezone"
              defaultValue=""
              className="w-full px-3 py-2 border-[1px] border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Select a time zone
              </option>
              {timeZones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {`UTC${
                    zone.utcOffset >= 0 ? `+${zone.utcOffset}` : zone.utcOffset
                  } - ${zone.name}`}
                </option>
              ))}
            </select>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event-attendees">Venue</Label>
            <Input
              type="text"
              id="event-venue"
              name="description"
              placeholder="Enter event venue"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event-attendees">Address</Label>
            <Input
              type="text"
              id="event-venue"
              name="description"
              placeholder="e.g 6599 Hollywood cin..."
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event-photo">Photo</Label>
            <div
              id="event-photo"
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

export default AddEvent;
