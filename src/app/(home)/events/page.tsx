'use client'
import "./page.css"
import { useEffect, useState } from 'react'
import Image from "next/image";
import { Input } from "../../../components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PopupEvent from "@/components/PopupEvent";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { toast } from "react-hot-toast";

const newEventSchema = z.object({
    eventName: z.string().min(1, { message: "Event name is required." }),
    eventType: z.string().min(1, { message: "Event type is required." }),
    musicType: z.string().min(1, { message: "Music type is required." }),
    djName: z.string().min(1, { message: "DJ name is required." }),
    venueName: z.string().min(1, { message: "Venue name is required." }),
    dressCode: z.string().min(1, { message: "Dress Code is required." }),
    venueType: z.string().min(1, { message: "Venue type is required." }),
    venueAddress: z.string().min(1, { message: "Venue address is required." }),
    ageRestrictions: z.string().min(1, { message: "Age restrictions is required." }),
    coverCharge: z.number().min(1, { message: "Cover charge is required." }),
    eventDate: z.string().refine(value => /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(value), {
                    message: "Event date must be in the format MM/DD/YYYY",
                }),
    eventStart: z.string().regex(/^\d{2}:\d{2}$/, { message: "Event start time must be in the format 09:00" }),
    eventEnd: z.string().regex(/^\d{2}:\d{2}$/, { message: "Event end time must be in the format 09:00" }),
    eventImage: z.string().min(1, { message: "Venue address is required." }),
  });

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [imgFileName, setImgFileName] = useState("");
    const [imgFile, setImgFile] = useState<File | null>(null);
    const [open, setOpen] = useState<boolean | null>(false);

    const form = useForm<z.infer<typeof newEventSchema>>({
        resolver: zodResolver(newEventSchema),
        defaultValues: {
          eventName: "",
          eventType: "",
          musicType: "",
          djName: "",
          venueName: "",
          dressCode: "",
          venueType: "",
          venueAddress: "",
          ageRestrictions: "",
          coverCharge: 0,
          eventDate: "",
          eventStart: "",
          eventEnd: "",
          eventImage: ""
        },
    });

    async function onSubmit(values: z.infer<typeof newEventSchema>) {
        alert("OK");
        try {
          const formData = new FormData();
          for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(values, key)) {
              const value = values[key];
              formData.append(key, value);
            }
          }
          setIsLoading(true);
          const response = await fetch("/api/products/checkout", {
            method: "POST",
            body: formData,
          });
          if (response.status === 200) {
            toast.success("Successful!.");
          } else {
            const error = await response.json();
            toast.error(error);
          }
        } catch (error) {
          toast.error(error.message);
        }
        setIsLoading(false);
    }

    const handleChangeImage = (event: any) => {
        if (event.target.files.length > 0) {
          setImgFile(event.target.files[0]);
          setImgFileName(event.target.value);
        } else {
          setImgFile(null);
          setImgFileName("");
        }
    };

    return (
        <div>
            {open && <PopupEvent />}
            <div className="relative bg-gradient-to-r from-primaryColor via-50% via-[#77C574] to-primaryColor md:h-[409px] h-[274px]">
                <div className="banner opacity-30 absolute top-0 left-0 right-0 bottom-0 md:h-[409px] h-[274px]"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex max-w-[1280px] m-auto justify-between px-4">
                    <div className="content-center space-y-5">
                        <p className="font-[800] lg:text-[80px] lg:leading-[80px] md:text-[60px] md:leading-[60px] mmd:text-[45px] mmd:leading-[45px] text-[36px] leading-[36px] text-white">LIST YOUR EVENT</p>
                        <div className="font-[400] text-[18px] leading-[18px] text-white ml-1 md:flex hidden">
                            <p>HOME&nbsp;</p>
                            <Image
                                src="/arrow.svg"
                                alt=""
                                width={10}
                                height={10}
                            />
                            <p>&nbsp;LIST YOUR EVENT</p>
                        </div>
                    </div>
                    <Image
                        src="/guitar.svg"
                        alt=""
                        width={327}
                        height={409}
                        className="md:w-[327px] md:h-[409px] w-[219px] h-[274px]"
                    />
                </div>
            </div>
            <div className="bg-[#f3f3f6] py-20">
                <div className="max-w-[950px] lg:m-auto mx-4 bg-white pt-10 px-5 rounded-[6px]">
                    <Form {...form}>
                        <form className="grid grid-rows-2 gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                            <div>
                                <div>
                                    <p className="text-[#000000] font-[700] mmd:text-[30px] text-[21px] mb-1">List your event</p>
                                    <p className="text-[#000000] font-[400] mmd:text-[17px] text-[14px] mmd:mb-6 mb-3">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you.</p>
                                </div>
                                <div className="mmd:grid grid-cols-2 mmd:space-y-0 gap-5 space-y-5">
                                    <div className="grid grid-rows-5 gap-5">
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="eventName"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Event name"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="eventStart"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Event time Start"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="eventType"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Event Type"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="djName"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="DJ Name"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="dressCode"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Dress Code"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-5 gap-5">
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="eventDate"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Event date"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="eventEnd"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Event time End"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="musicType"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Music Type"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="venueName"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Venue Name"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full mmd:h-[64px] h-[45px]">
                                            <FormField
                                                control={form.control}
                                                name="venueType"
                                                render={({ field }) => (
                                                    <FormItem className="sm:flex w-full justify-center">
                                                        <FormControl
                                                            className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                            style={{
                                                            marginTop: 0,
                                                            }}
                                                        >
                                                            <div>
                                                            <Input
                                                                maxLength={40}
                                                                className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                                placeholder="Venue type"
                                                                {...field}
                                                            />
                                                            <FormMessage className="absolute" />
                                                            </div>
                                                    </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full space-y-5">
                                <div className="w-full mmd:h-[64px] h-[45px]">
                                    <FormField
                                        control={form.control}
                                        name="venueAddress"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex w-full justify-center">
                                                <FormControl
                                                    className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                    style={{
                                                    marginTop: 0,
                                                    }}
                                                >
                                                    <div>
                                                    <Input
                                                        maxLength={40}
                                                        className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                        placeholder="Venue address"
                                                        {...field}
                                                    />
                                                    <FormMessage className="absolute" />
                                                    </div>
                                            </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="w-full mmd:h-[64px] h-[45px]">
                                        <FormField
                                            control={form.control}
                                            name="ageRestrictions"
                                            render={({ field }) => (
                                                <FormItem className="sm:flex w-full justify-center">
                                                    <FormControl
                                                        className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                        style={{
                                                        marginTop: 0,
                                                        }}
                                                    >
                                                        <div>
                                                        <Input
                                                            maxLength={40}
                                                            className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                            placeholder="Age restrictions"
                                                            {...field}
                                                        />
                                                        <FormMessage className="absolute" />
                                                        </div>
                                                </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full mmd:h-[64px] h-[45px]">
                                        <FormField
                                            control={form.control}
                                            name="coverCharge"
                                            render={({ field }) => (
                                                <FormItem className="sm:flex w-full justify-center">
                                                    <FormControl
                                                        className="w-full min-w-[128px] mmd:h-[64px] h-[45px]"
                                                        style={{
                                                        marginTop: 0,
                                                        }}
                                                    >
                                                        <div>
                                                        <Input
                                                            maxLength={40}
                                                            className="bg-white mt-0 mmd:h-[64px] h-[45px]"
                                                            placeholder="Cover Charge"
                                                            {...field}
                                                        />
                                                        <FormMessage className="absolute" />
                                                        </div>
                                                </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <input
                                        type="checkbox"
                                        className="mmd:w-[26px] w-[20px] mmd:h-[26px] h-[20px] mt-2"
                                        onChange={()=> {setOpen(!open)}}
                                    />
                                    <p className="mmd:text-[17px] text-[14px] text-[#3D3D3D] font-[400] mt-2">Do you want to sell Tickets?</p>
                                </div>
                                <div className="flex space-x-3">
                                    <input
                                        type="checkbox"
                                        className="mmd:w-[26px] w-[20px] mmd:h-[26px] h-[20px] mb-2"
                                    />
                                    <p className="mmd:text-[17px] text-[14px] text-[#3D3D3D] font-[400] mb-2">Will there be bottle Services?</p>
                                </div>
                                <div className="w-full mmd:h-[64px] h-[45px]">
                                    <FormField
                                        control={form.control}
                                        name="eventImage"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex w-full justify-center">
                                                <FormControl
                                                    className="w-full mmd:h-[64px] h-[45px]"
                                                    style={{
                                                    marginTop: 0,
                                                    }}
                                                >
                                                    <div>
                                                        <div className="flex rounded-[4px] mmd:h-[64px] h-[45px] items-center border border-input border-[#929496] bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
                                                            <Input
                                                                type="file"
                                                                maxLength={40}
                                                                className="outline-none mmd:text-[17px] text-[14px] text-black w-full border-none h-fit"
                                                                placeholder="Upload event flyer"
                                                                accept="image/*"
                                                                onChange={handleChangeImage}
                                                                value={imgFileName}
                                                                {...field}
                                                            />
                                                            <Image
                                                                src="/link.svg"
                                                                alt=""
                                                                width={15}
                                                                height={15}
                                                                className="mr-3"
                                                            />
                                                        </div>
                                                        <FormMessage className="absolute" />
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex mmd:flex-row flex-col justify-center mmd:space-x-3 mmd:my-10 my-0">
                                    <button className="mmd:w-[206px] mmd:h-[64px] h-[45px] rounded-[4px] bg-black mmd:text-[15px] text-[14px] text-[#FFFFFF] mmd:mt-5 mt-2">
                                        SAVE FOR LATER
                                    </button>
                                    <button className="mmd:w-[206px] mmd:h-[64px] h-[45px] rounded-[4px] bg-primaryColor mmd:text-[15px] text-[14px] text-[#FFFFFF] mt-5 mb-10"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        NEXT
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Home;