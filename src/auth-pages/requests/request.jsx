import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { apinIncomingRequests, fetchIncomingRequests, fetchOutgoingRequests } from '../../utils/requests';
import { Button } from '../../components/ui/button';
import { Edit, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import SkeletonComponent from '../../components/skeleton-component';
import DataTable from '../../components/data-table';
import { statusColor } from '../../utils/functions';
import UpdateRequest from './update-request';
import NewRequest from './new-request';

const Requests = () => {

    const { token, user, record } = useContext(AppContext);
    const [requests, setRequests] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const authUser = user && JSON.parse(user);

    const datafilters = [
        {
            title: "title",
            placeholder: "filter by title..."
        },
        {
            title: "request_from",
            placeholder: "filter by sender..."
        },
        {
            title: "request_to",
            placeholder: "filter by receiver..."
        },
        {
            title: "status",
            placeholder: "filter by status..."
        }
    ]

    const columns = [
        {
            accessorKey: 'title',
            header: 'Subject',
            enableSorting: true,
        },
        {
            accessorKey: 'request_from',
            header: 'Sender',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'request_to',
            header: 'Receiver',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const req = row.original;
                return (
                  <div
                    className={`${statusColor(req?.status)}`}
                  >
                      <span>{req?.status}</span>
                  </div>
                );
            },
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'created_at',
            header: 'Date',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            id: 'action',
            cell: ({ row }) => {
              const req = row.original; 
              const [isOpen, setIsOpen] = useState(false);
              //const [assignOpen, setAssignOpen] = useState(false);
    
              return (
                user && authUser?.directorate !== 'State' &&
                <div className="w-full flex items-center gap-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Edit 
                                className="h-4 w-4 cursor-pointer" 
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle></DialogTitle>
                            <UpdateRequest req={req} />
                        </DialogContent>
                    </Dialog>
                </div>
              );
            },
        },
    ];

    useEffect(() => {
        user && authUser?.directorate === 'State' ?
            fetchOutgoingRequests(token, setRequests, setError, setLoading)
            :
            (
                authUser?.directorate === 'APIN' ? apinIncomingRequests(token, setRequests, setError, setLoading)
                :
                fetchIncomingRequests(token, setRequests, setError, setLoading)
            )
    }, [record])

    return (
        <div className='w-full grid p-4 space-y-8'>
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
            <div className='w-full flex justify-between items-center'>
                <div className='text-xl font-extralight'>
                {
                    user && authUser?.directorate === 'State' ? 'Outgoing requests' : 'Incoming requests'
                }
                </div>
                <div>
                {
                    user && authUser?.directorate === 'State' &&
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="bg-accent hover:bg-accent/70">
                                <Plus size={20} />
                            </Button>
                        </DialogTrigger>
                        <NewRequest />
                    </Dialog>
                }
                </div>
            </div>
            <div className='w-full'>
            {
                loading || !requests ? <SkeletonComponent /> :
                <DataTable data={requests} columns={columns} filterArrs={datafilters} />
            }  
            </div>
        </div>
    )
}

export default Requests