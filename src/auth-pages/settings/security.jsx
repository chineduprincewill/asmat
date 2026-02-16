import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card";
import ProfileInformation from './profile-information';
import { AppContext } from '../../context/AppContext';
import PasswordUpdate from './password-update';

const Security = () => {

    const { user } = useContext(AppContext);

    const authUser = JSON.parse(user);

    return (
        <div className='w-full mt-4 space-y-4'>
            <div className='w-full flex justify-between items-center'>
                <span className='text-xl font-extralight'>Security</span>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-4'>
                <div className='col-span-1'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile information</CardTitle>
                            <CardDescription>
                            Below is your profile information
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProfileInformation profile={authUser} />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-1'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Password update</CardTitle>
                            <CardDescription>
                            Secure your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PasswordUpdate />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Security