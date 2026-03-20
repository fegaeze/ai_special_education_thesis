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
}: Readonly<{
  availableDates: Date[];
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}>) {
  const [open, setOpen] = useState(false);

  const isAvailable = (date: Date) =>
    availableDates.some((d) => isSameDay(d, date));

  const handleSelect = (date: Date | undefined) => {
    onSelect(date);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(undefined);
  };

  return (
    // Wrapper div provides relative context so the clear button can be
    // positioned over the trigger without being a child of its <button>.
    // Nesting <button> inside <button> is invalid HTML and causes hydration errors.
    <div className="relative inline-flex">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-9 text-sm text-gray-700 rounded-md border border-gray-300 bg-white px-4 shadow-sm
                     focus:outline-none focus:ring-0 focus:border-gray-400 transition focus-visible:ring-0
                     w-[220px] flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2 min-w-0">
              <CalendarIcon className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="truncate font-medium">
                {selectedDate ? format(selectedDate, "MMM do, yyyy") : "All time"}
              </span>
            </div>
            <ChevronDownIcon className={`h-4 w-4 shrink-0 text-gray-500 ${selectedDate ? "mr-5" : ""}`} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-fit p-0 bg-white border-gray-200 shadow-lg"
          align="end"
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

      {/* Sibling, not child — avoids the nested-<button> HTML violation */}
      {selectedDate && (
        <button
          type="button"
          onClick={handleClear}
          title="Clear selection"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center
                     rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
