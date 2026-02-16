import React, { useContext, useEffect, useState } from 'react'
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Label } from '../../components/ui/label';
import Directorate from '../../components/directorate';
import { AppContext } from '../../context/AppContext';
import { Textarea } from '../../components/ui/textarea';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import ButtonLoader from '../../components/button-loader';
import { newRequest } from '../../utils/requests';
import { toast } from 'sonner';
import { fetchDistinctAssets } from '../../utils/assets';
import ComboboxComponent from '../../components/combobox-component';

const NewRequest = () => {

    const { token, refreshRecord } = useContext(AppContext);
    const [title, setTitle] = useState();
    const [request_to, setRequest_to] = useState();
    const [request, setRequest] = useState();
    const [asset_id, setAsset_id] = useState();
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [assets, setAssets] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title, request_to, request_body:request, asset_id
        }

        newRequest(token, data, setSuccess, setError, setSaving)
    }

    if(success){
        toast.success("Request sent successfully!", {
            className: "!bg-green-700 !text-white !border-white !font-bold",
            descriptionClassName: "!text-green-700",
        });
        setSuccess();
        refreshRecord(Date.now())
    }

    useEffect(() => {
        fetchDistinctAssets(token, setAssets, setError, setLoading)
    }, [])

    return (
        <div className='transition-all duration-300 ease-in-out'>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Request</DialogTitle>
                    <DialogDescription>
                    Provide <span className='font-bold'>Request update</span>. Click save when you&apos;re
                    done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-3 bg-destructive/30 border border-destructive/20 rounded-lg">
                            <p className="text-sm text-red-500 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </p>
                        </div>
                    )}
                    <div className="grid w-full gap-3">
                        <Label htmlFor="title-1">Title<sup className='text-red-600 ml-1 font-bold'>*</sup></Label>
                        <Input 
                            placeholder="Enter title..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} // Updates the state on selection
                            required
                            className="w-full"
                        />
                    </div>
                    <div className="grid w-full gap-3">
                        <Label htmlFor="title-1">To</Label>
                        <Directorate directorate={request_to} setDirectorate={setRequest_to} />
                    </div>
                    <div className="grid w-full gap-3">
                        <Label htmlFor="title-1">Request</Label>
                        <Textarea 
                            value={request}
                            placeholder="Enter request..."
                            onChange={(e) => setRequest(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancel</Button>
                        </DialogClose>
                        <Button className="bg-accent hover:bg-accent/70">
                            {saving ? (
                                <ButtonLoader loadingText="Saving..." />
                            ) : (
                                "Save Changes"
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </div>
    )
}

export default NewRequest