"use client";

import { useState } from "react";
import { BookOpen, Loader2, Plus } from "lucide-react";
import { useClassContext } from "@/contexts/ClassContext";
import type { Class } from "@/hooks/useClasses";
import AddClassModal from "../../../app/(protected)/teacher-dashboard/components/AddClassModal";
import { Button } from "../../ui/button";
import { LOADING_MESSAGES } from "@/lib/errors";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export default function ClassSwitcher() {
  const {
    classes,
    selectedClass,
    setSelectedClass,
    createClass,
    loading,
    error,
  } = useClassContext();
  const [showAddModal, setShowAddModal] = useState(false);

  const handleClassSelect = (id: string) => {
    const cls = classes.find((c: Class) => String(c.id) === id);
    if (cls) setSelectedClass(cls);
  };

  if (loading) {
    return (
      <div className="flex items-center px-2 py-1 bg-gray-100 rounded w-56">
        <Loader2
          className="h-4 w-4 animate-spin text-gray-500 mr-2"
          role="status"
          aria-label="Loading classes"
        />
        <span className="text-sm text-gray-500">
          {LOADING_MESSAGES.CLASSES_LOADING}
        </span>
      </div>
    );
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <>
      {classes.length === 0 ? (
        <Button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="px-3 py-2 hover:text-primary"
          variant="outline"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add your first class
        </Button>
      ) : (
        <div className="w-56">
          <Select
            value={selectedClass ? String(selectedClass.id) : ""}
            onValueChange={(val) => {
              if (val === "__add__") {
                setShowAddModal(true);
              } else {
                handleClassSelect(val);
              }
            }}
          >
            <SelectTrigger
              className="w-[220px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm
                 focus:outline-none focus:ring-0 focus:border-gray-400 transition focus-visible:ring-0"
            >
              <SelectValue placeholder="Select a class" />
            </SelectTrigger>
            <SelectContent className="w-[220px] bg-white border border-gray-200 shadow-md rounded-md text-sm">
              {classes.map((cls: Class) => (
                <SelectItem
                  key={String(cls.id)}
                  value={String(cls.id)}
                  className="hover:bg-blue-50 cursor-pointer rounded-sm px-3 py-2 transition-colors"
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <BookOpen className="h-4 w-4 mr-2 text-gray-500 flex-shrink-0" />
                    <p className="max-w-[150px] text-sm font-medium truncate">
                      {cls.name}
                    </p>
                  </div>
                </SelectItem>
              ))}
              <div className="border-t border-gray-200 my-1" />
              <SelectItem
                value="__add__"
                className="flex items-center text-blue-600"
              >
                <Plus className="h-4 w-4 mr-2" /> Add New Class
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <AddClassModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        createClass={createClass}
      />
    </>
  );
}
