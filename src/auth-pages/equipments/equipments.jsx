import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Edit, Plus, Search } from 'lucide-react';
import DataTable from '../../components/data-table';
import SkeletonComponent from '../../components/skeleton-component';
import { fetchAssets } from '../../utils/assets';
import AddAsset from './add-asset';
import StockStatusUpdate from './stock-status-update';
import MoveToFacility from './move-to-facility';
import AssetDetail from './asset-detail';
import { cn } from "@/lib/utils"

const Assets = () => {

    const { token, user, record } = useContext(AppContext);
    const [assets, setAssets] = useState()
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            accessorKey: 'asset_name',
            header: 'Name',
            enableSorting: true,
        },
        {
            accessorKey: 'asset_tag',
            header: 'Tag',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'asset_serial',
            header: 'Serial',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'asset_model',
            header: 'Model',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'directorate',
            header: 'Directorate',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'state',
            header: 'State',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: ({ row }) => {
                const asset = row.original;
                return (
                  <div className="w-[200px] flex items-center gap-3">
                      <Dialog>
                          <DialogTrigger asChild>
                              <span className='cursor-pointer text-accent hover:text-brand text-wrap'>{asset.status}</span>
                          </DialogTrigger>
                    {
                        user && JSON.parse(user)?.directorate === 'State' && asset && !asset.status.includes('Dispatched') ? <></> :
                        <DialogContent>
                            <DialogTitle></DialogTitle>
                            <StockStatusUpdate asset={asset} />
                        </DialogContent>
                    }
                      </Dialog>
                  </div>
                );
            },
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'facility',
            header: 'Facility',
            cell: ({ row }) => {
                const asset = row.original;
                return (
                  <div className="w-[200px] flex items-center gap-3">
                    {asset?.facility ? asset?.facility : 
                    (user && JSON.parse(user)?.directorate === 'State' && asset.status.includes('Receipt confirmed') &&
                    <Dialog>
                        <DialogTrigger asChild>
                            <span className='text-gray-500 cursor-pointer hover:text-foreground'>Move to facility
                            </span>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle></DialogTitle>
                            <MoveToFacility asset={asset} />
                        </DialogContent>
                    </Dialog>
                    )}
                  </div>
                );
            },
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            accessorKey: 'in_use',
            header: 'In use?',
            enableSorting: true,
            enableColumnFilter: true,
        },
        {
            id: 'actions',
            cell: ({ row }) => {
              const asset = row.original; 
              const [isOpen, setIsOpen] = useState(false);
              //const [assignOpen, setAssignOpen] = useState(false);
    
              return (
                <div className="w-full flex items-center gap-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Edit 
                                className="h-4 w-4 cursor-pointer" 
                            />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle></DialogTitle>
                            <AddAsset asset={asset} />
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Search 
                                className="h-4 w-4 cursor-pointer" 
                            />
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[700px] h-[90vh] ">
                            <DialogTitle></DialogTitle>
                            <AssetDetail asset={asset} />
                        </DialogContent>
                    </Dialog>
                </div>
              );
            },
        },
    ];

    const datafilters = [
        {
            title: "asset_name",
            placeholder: "filter by name..."
        },
        {
            title: "asset_tag",
            placeholder: "filter by tag..."
        },
        {
            title: "directorate",
            placeholder: "filter by directorate..."
        },
        {
            title: "state",
            placeholder: "filter by state..."
        },
        {
            title: "facility",
            placeholder: "filter by facility..."
        }
    ]

    useEffect(() => {
        fetchAssets(token, setAssets, setError, setLoading)
    }, [record])

    return (
        <div className='w-full p-4 space-y-8'>
            <div className='w-full flex justify-between items-center'>
                <span className='text-xl font-extralight'>Assets</span>
                {
                    user && JSON.parse(user)?.directorate !== 'State' &&
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="bg-accent hover:bg-accent/70">
                                <Plus size={20} />
                            </Button>
                        </DialogTrigger>
                        <AddAsset />
                    </Dialog>
                }
            </div>
            <div className='w-full'>
            {
                loading || !assets ? <SkeletonComponent /> :
                <DataTable data={assets} columns={columns} filterArrs={datafilters} />
            }  
            </div>
        </div>
    )
}

export default Assets