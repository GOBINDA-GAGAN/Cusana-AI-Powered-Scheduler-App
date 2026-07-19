import { Plus } from 'lucide-react';
import React, { useEffect } from 'react'
import Button from '../components/ui/Buttton';
import AccountList from '../components/AccountList';
import { dummyAccountsData } from '../assets/dummyAccountsData';

const Account = () => {
  const [connectedAccounts, setConnectedAccounts] = React.useState([]);
  const [connecting, setConnecting] = React.useState(null);
  const [showPlatformPicker, setShowPlatformPicker] = React.useState(false);


  const fetchAccounts = async (isSync=false,platform,successMsg) => {
    setConnectedAccounts(dummyAccountsData);
  }

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleDisconnect = async (accountId) => {
    setConnectedAccounts(accounts => accounts.filter(account => account.id !== accountId));
  }

  const connectedIds = connectedAccounts.map(account => account.platform);


  return (
    <div>
      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-secondary p-4 shadow-sm sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
        {/* Left Content */}
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-primary sm:text-xl lg:text-2xl">
            Connected Accounts
          </h2>

          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            <span className="font-medium text-foreground">
              {connectedAccounts.length}
            </span>{" "}
            {connectedAccounts.length === 1 ? "account" : "accounts"} connected
          </p>
        </div>

        {/* Right Button */}
        <Button
          onClick={() => setShowPlatformPicker(true)}
          className=""
        >
          <Plus className="h-4 w-4" />
          <span>Connect Account</span>
        </Button>
      </div>
      <AccountList accounts={connectedAccounts} onDisconnect={handleDisconnect} />
    </div>

    //plateform picker MOdal

    //connected accounts


  )
}

export default Account