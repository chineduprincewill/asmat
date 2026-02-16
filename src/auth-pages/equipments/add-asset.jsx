import React, { useContext, useEffect, useState } from 'react'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../components/ui/dialog'
import AssetBasicInfo from './asset-basic-info'
import AssetPurchaseInfo from './asset-purchase-info';
import AssetMaintenanceInfo from './asset-maintenance-info';
import { getAssetIpInfo, getAssetMaintenanceInfo, getAssetPurchaseInfo } from '../../utils/assets';
import { AppContext } from '../../context/AppContext';
import SkeletonComponent from '../../components/skeleton-component';
import AssetIpInfo from './asset-ip-info';

const AddAsset = ({ asset }) => {

    const { token } = useContext(AppContext);
    const [active, setActive] = useState();
    const [nextinfo, setNextinfo] = useState(asset && asset);
    const [error, setError] = useState();
    const [fetching, setFetching] = useState();
    const [purchasedata, setPurchasedata] = useState();
    const [maintenancedata, setMaintenancedata] = useState();
    const [ipdata, setIpdata] = useState();

    useEffect(() => {
        if(asset){
            getAssetPurchaseInfo(token, {asset_id:asset?.id}, setPurchasedata, setError, setFetching);
            getAssetMaintenanceInfo(token, {asset_id:asset?.id}, setMaintenancedata, setError, setFetching);
            getAssetIpInfo(token, {asset_id:asset?.id}, setIpdata, setError, setFetching);
        }
    }, [])
    
    const renderPage = () => {
        switch(active) {
            case 'asset-basic-info':
                return <AssetBasicInfo setActive={setActive} setNextinfo={setNextinfo} nextinfo={nextinfo} />;
            case 'asset-purchase-info':
                return <AssetPurchaseInfo setActive={setActive} setNextinfo={setNextinfo} nextinfo={nextinfo} fetching={fetching} assetdata={purchasedata} />;
            case 'asset-maintenance-info':
                return <AssetMaintenanceInfo setActive={setActive} setNextinfo={setNextinfo} nextinfo={nextinfo} fetching={fetching} assetdata={maintenancedata} />;
            case 'asset-ip-info':
                return <AssetIpInfo setActive={setActive} setNextinfo={setNextinfo} nextinfo={nextinfo} fetching={fetching} assetdata={ipdata} />;
            default:
                return <AssetBasicInfo setActive={setActive} setNextinfo={setNextinfo} nextinfo={nextinfo} />;
        }
    };

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New asset</DialogTitle>
            </DialogHeader>
            {fetching ? <SkeletonComponent /> : renderPage()}
        </DialogContent>
    )
}

export default AddAsset