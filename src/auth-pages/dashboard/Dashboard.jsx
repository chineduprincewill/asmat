import React, { useState } from 'react'
import { Button } from '../../components/ui/button';

const Dashboard = () => {
  
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Stats Cards */}
            <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                    Total Users
                    </p>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    </svg>
                </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                +12% from last month
                </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                    Revenue
                    </p>
                    <p className="text-2xl font-bold text-foreground">$45,231</p>
                </div>
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                +8% from last month
                </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                    Active Tasks
                    </p>
                    <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                    </svg>
                </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                5 completed today
                </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                    Engagement
                    </p>
                    <p className="text-2xl font-bold text-foreground">87%</p>
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                    </svg>
                </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                +4% from last month
                </p>
            </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4"
                disabled
                >
                <div>
                    <p className="font-medium text-foreground">View Analytics</p>
                    <p className="text-xs text-muted-foreground mt-1">
                    Coming soon
                    </p>
                </div>
                </Button>
                <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4"
                disabled
                >
                <div>
                    <p className="font-medium text-foreground">Manage Users</p>
                    <p className="text-xs text-muted-foreground mt-1">
                    Coming soon
                    </p>
                </div>
                </Button>
                <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4"
                disabled
                >
                <div>
                    <p className="font-medium text-foreground">Settings</p>
                    <p className="text-xs text-muted-foreground mt-1">
                    Coming soon
                    </p>
                </div>
                </Button>
            </div>
        </div>
    </div>
    );
}

export default Dashboard