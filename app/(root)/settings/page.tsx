'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your application settings</p>
        </div>
        <Button className="flex items-center gap-2">
          Save Changes
        </Button>
      </div>

      {/* General Settings */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Application Name</label>
              <input type="text" placeholder="MLOps Hub" className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-gray-600">API Key</label>
              <input type="text" placeholder="Enter your API key" className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-gray-600">Notifications</label>
              <input type="checkbox" id="notifications" />
              <label htmlFor="notifications" className="ml-2">Enable Notifications</label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader>
          <CardTitle>Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>Manage integrations with third-party services.</p>
            <Button variant="outline">Connect New Service</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
