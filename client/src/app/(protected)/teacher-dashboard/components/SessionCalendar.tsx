import { Calendar as CalendarIcon, ChevronDownIcon, X } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SessionCalendar({
  availableDates,
  selectedDate,
  onSelect,
}: {
  availableDates: Date[];
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}) {
  const [open, setOpen] = useState(false);

  const isAvailable = (date: Date) =>
    availableDates.some((d) => isSameDay(d, date));

  const handleSelect = (date: Date | undefined) => {
    onSelect(date);
    setOpen(false); // Close the popover when a date is selected
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the popover
    onSelect(undefined);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-sm text-gray-700 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm
                 focus:outline-none focus:ring-0 focus:border-gray-400 transition focus-visible:ring-0 w-[180px] flex items-center justify-between"
        >
          <div className="flex items-center">
            <CalendarIcon />
            <span className="ml-2 truncate max-w-[100px]">
              {selectedDate && format(selectedDate, "MMM do, yyyy")}
              {!selectedDate && "Last 30 days"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {selectedDate && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="h-5 w-5 p-0 text-gray-400 hover:text-gray-600"
                title="Clear selection"
              >
                <X className="h-3 w-3" />
              </Button>
            )}
            <ChevronDownIcon />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0 bg-white border-gray-200"
        align="start"
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
          modifiers={{ available: availableDates }}
          modifiersClassNames={{
            available: "bg-blue-100 text-primary font-bold",
          }}
          disabled={(date) => !isAvailable(date)}
        />
      </PopoverContent>
    </Popover>
  );
}
