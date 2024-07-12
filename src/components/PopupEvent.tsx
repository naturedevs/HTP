"use client";
import { useState } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input } from "@/components/ui/input";
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function PopupEvent() {
  const dispatch = useAppDispatch();  

  const [loading, setLoading] = useState(false);
  const { push } = useRouter();


  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {
    setIsOpen(false);
  }

  const alertCancel = () => {
    setIsOpen(false);
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="xs:max-w-xl md:max-w-md py-8 px-8 ">
        <AlertDialogHeader className="items-center mt-2">
          <AlertDialogTitle>Do you want to sell Tickets ?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex flex-col gap-3 py-4">
        <div className="mt-0 w-full min-w-[128px]">
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-2">
                <div className="w-full h-[30px] lg:h-[43px] bg-white flex content-center">
                  <select defaultValue={''} className="leading-[18.5px] text-[#000000] border-[1px] border-[#929496] rounded-sm w-full">
                    <option value="">Distance</option>
                    <option value="1">1 mile</option>
                    <option value="2-5">2-5 miles</option>
                    <option value="5-10">5-10 miles</option>
                    <option value="10-20">10-20 miles</option>
                    <option value="20">20+ miles</option>
                  </select>
                </div>
                </div>
                <Input
                    maxLength={40}
                    className="bg-white mt-0 h-[30px] lg:h-[43px]"
                    placeholder="Event Type"
                />
                <Input
                    maxLength={40}
                    className="bg-white mt-0 h-[30px] lg:h-[43px]"
                    placeholder="Event Type"
                />
                <Input
                    maxLength={40}
                    className="bg-white mt-0 h-[30px] lg:h-[43px]"
                    placeholder="Event Type"
                />
              </div>
              {/* <div className="space-y-2 flex w-full flex-wrap justify-center gap-3">
                {
                  Array.isArray(flavor) && flavor.length>0 ?
                  <FormLabel className="w-4/12 min-w-[90px] max-w-[100px] self-center h-full">
                    Event List :
                  </FormLabel> : <></>
                }
                
                <div className="w-8/12 sm:w-6/12 min-w-[128px] max-w-[350px]">
                  {Array.isArray(flavor) && flavor.map((item, index) => (
                    <div key={index} className="min-w-[128px] max-w-[350px] flex space-x-2 my-2">
                      <div className="bg-white w-full place-content-center pl-3 rounded-sm text-sm">
                        {item.name}
                      </div>
                      <div className="bg-white mt-0 w-[15px] sm:w-[60px] place-content-center text-center rounded-sm text-sm">
                        {item.price}
                      </div>
                      <div className="bg-white mt-0 w-[15px] sm:w-[60px] place-content-center text-center rounded-sm text-sm">
                        {item.qty}
                      </div>
                      <Button
                        className="bg-white text-black hover:bg-[#ffffef]"
                        id="flav_delete"
                        onClick={(e) => handleFlavorDelete(e, index)}
                      >
                        -
                      </Button>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          <div className="grid grid-cols-2 gap-3">
            <AlertDialogAction
              className="h-12 bg-[#017c6b] hover:bg-[#009688]"
              onClick={handleSubmit}
              disabled={loading}
            >
              Add
            </AlertDialogAction>
            <AlertDialogCancel
              className="h-12 border-1 outline-2 outline-black hover:border-[#00897b] border-[black]"
              onClick={alertCancel}
            >
              Cancel
            </AlertDialogCancel>
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
