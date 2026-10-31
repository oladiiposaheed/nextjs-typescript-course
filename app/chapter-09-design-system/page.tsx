'use client';

import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import Badge from "./components/Badge";

export default function DesignSystemPage() {
    return (
        <div className="p-8 max-w-md flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-4">Design System</h1>

            {/* Button Primary (Default), Secondary, Danger */}
            <Button onClick={() => alert('Saved successfully!')}>Save Changes</Button>
            <Button variant="secondary" onClick={() => alert('Canceled.')}>Cancel</Button>
            <Button variant="danger" onClick={() => alert('Account Deleted!')}>Delete Account</Button>

            {/* Inputs */}
            <div className="mt-8 flex flex-col gap-4 border-t pt-4">

                <h2 className="text-lg font-bold">Inputs</h2>
        
                {/* Normal Input & Input with an Error */}
                <Input 
                    label="Full Name"
                    placeholder="Enter your name"
                />
                <Input 
                    label="Email Address"
                    placeholder="Enter your email"
                    error="This email is already taken"
                />
            </div>

            {/* Card */}
            <div>
                <h2 className="text-lg font-bold">Cards</h2>
                <Card title="Profile Settings">
                    <p className="text-gray-600 mb-4">Update your personal information here.</p>
                    <Button>Save Profile</Button>
                </Card>
            </div>

            {/* Badge */}
            <div className="mt-8 border-t pt-4">
                <h2 className="text-sm font-bold mb-4">Badges</h2>
                <div className="flex gap-2">
                    <Badge color="green">Active</Badge>
                    <Badge color="yellow">Pending</Badge>
                    <Badge color="red">Blocked</Badge>
                    <Badge color="blue">New</Badge>
                </div>
            </div>
        </div>
    );
}