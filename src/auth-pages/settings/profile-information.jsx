import React, { useState } from 'react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'

const ProfileInformation = ({ profile }) => {

    console.log(profile)

    const [fullname, setFullname] = useState(profile && profile?.fullname ? profile?.fullname : '');
    const [email, setEmail] = useState(profile && profile?.email ? profile?.email : '');
    const [phone, setPhone] = useState(profile && profile?.phone ? profile?.phone : '');
    const [directorate, setDirectorate] = useState(profile && profile?.directorate ? profile?.directorate : '');
    const [state, setState] = useState(profile && profile?.state ? profile?.state : '');
    const [lga, setLga] = useState(profile && profile?.lga ? profile?.lga : '');
    const [facility, setFacility] = useState(profile && profile?.facility ? profile?.facility : '');

    return (
        <form className='w-full grid gap-4'>
            <div className="grid w-full gap-3">
                <Label htmlFor="title-1">Full name</Label>
                <Input 
                    value={fullname}
                    placeholder="Enter full name..."
                    onChange={(e) => setFullname(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid gap-3 w-full">
                <Label htmlFor="title-1">Email</Label>
                <Input 
                    type="email"
                    value={email}
                    placeholder="Enter email..."
                    onChange={(e) => setEmail(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid w-full gap-3">
                <Label htmlFor="title-1">Phone</Label>
                <Input 
                    value={phone}
                    placeholder="Enter phone..."
                    onChange={(e) => setPhone(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid gap-3 w-full">
                <Label htmlFor="title-1">Directorate</Label>
                <Input 
                    type="email"
                    value={directorate}
                    placeholder="Enter directorate..."
                    onChange={(e) => setDirectorate(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid w-full gap-3">
                <Label htmlFor="title-1">State</Label>
                <Input 
                    value={state}
                    placeholder="Enter state..."
                    onChange={(e) => setState(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid gap-3 w-full">
                <Label htmlFor="title-1">LGA</Label>
                <Input 
                    type="text"
                    value={lga}
                    placeholder="Enter LGA..."
                    onChange={(e) => setLga(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
            <div className="grid gap-3 w-full">
                <Label htmlFor="title-1">Facility</Label>
                <Input 
                    type="text"
                    value={facility}
                    placeholder="Enter Facility..."
                    onChange={(e) => setFacility(e.target.value)} // Updates the state on selection
                    readOnly
                    className="w-full"
                />
            </div>
        </form>
    )
}

export default ProfileInformation