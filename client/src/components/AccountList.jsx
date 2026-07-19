import React from "react";
import {
  AlertCircle,
  CheckCircle2,
  Unplug,
} from "lucide-react";
import Button from "./ui/Buttton";
import { PLATFORM } from "../assets/dummyAccountsData";

const AccountList = ({ accounts, onDisconnect }) => {
  const handleDisconnect = (accountId) => {
    onDisconnect?.(accountId);
  };

  if (!accounts?.length) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-border bg-secondary p-10 text-center">
        <p className="text-muted-foreground">
          No connected accounts found.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {accounts.map((account) => {
          const meta = PLATFORM.find(
            (platform) => platform.id === account.platform
          );

          if (!meta) return null;

          const Icon = meta.icon;
          const isConnected = account.status === "connected";

          return (
            <div
              key={account.id}
              className="group flex h-full flex-col rounded-2xl border border-border bg-secondary p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                {isConnected ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                    Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    Disconnected
                  </span>
                )}
              </div>

              {/* Account Details */}
              <div className="mt-5 flex-1">
                <h3 className="truncate text-lg font-semibold text-foreground">
                  {account.handle}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {meta.name}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => handleDisconnect(account.id)}
                >
                  <Unplug className="h-4 w-4" />
                  Disconnect
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccountList;